class Doce extends Subject{

    constructor(){
        super();
        this.name = "Doce";
        this.color = "blue";
        this.ref = { Doce: "Azul"}
    }

    draw (posX= 400, posY= 400, color=this.color){//função draw específica desse objeto
        Utils.colorTriangle(posX+40, posY+50,   posX+10, posY+25,   posX+10, posY+75, color);
        Utils.colorTriangle(posX+60, posY+50,   posX+90, posY+25,   posX+90, posY+75, color);
        Utils.colorCircle(posX+50, posY+50, 25, color);
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