class Cereja extends Subject{
    
    constructor(){
        super();
        this.name = "Cereja";
        this.color = "red";
        this.ref = { Cereja: "Vermelho"}
    }

    draw (posX= 300, posY= 400, color=this.color){//função draw específica desse objeto   
        Utils.colorLine(posX+35,posY+70, posX+35+12, posY+70-40, "#0fcf0f")
        Utils.colorLine(posX+65,posY+65, posX+35+12, posY+70-40, "#0fcf0f")
        Utils.colorLine(posX+35+12, posY+70-40, posX+35+12+3, posY+70-40-7, "#0fcf0f")
        Utils.colorCircle(posX+35, posY+70, 15, color);
        Utils.colorCircle(posX+65, posY+65, 15, color);
    }

    checkAnswer(carta, time){
        if(carta != null){

            if((carta.color1 == this.color) && time == 'um'){
                super.notify(Utils.EVENTS.PONTO_TIME_UM);
            }else if((carta.color1 == this.color) && time == 'dois'){
                super.notify(Utils.EVENTS.PONTO_TIME_DOIS);
            }
            
            else if((carta.color1 != this.color) && time == 'um'){
                super.notify(Utils.EVENTS.ERRO_TIME_UM);
            }else if((carta.color1 != this.color) && time == 'dois'){
                super.notify(Utils.EVENTS.ERRO_TIME_DOIS);
            }
        }
    }
}