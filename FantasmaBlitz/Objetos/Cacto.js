class Cacto extends Subject{

    constructor(){
        super();
        this.name = "Cacto";
        this.color = "green";
        this.ref = { Cacto: "Verde"}
    }

    draw (posX= 200, posY= 400, color=this.color){ //função draw específica desse objeto
        Utils.colorRect(posX+40, posY+10, 25,80, color);
        Utils.colorRect(posX+15, posY+45, 35,20, color);
        Utils.colorRect(posX+15, posY+25, 20,30, color);
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