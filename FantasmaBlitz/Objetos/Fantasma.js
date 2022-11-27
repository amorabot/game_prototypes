class Fantasma extends Subject{
    // fillStyles -----------
    // 'orange';
    // '#FFA500';
    // 'rgb(255, 165, 0)';
    // 'rgba(255, 165, 0, 1)';
    // -----------------------
    
    constructor(){
        super();
        this.name = "Fantasma";
        this.color = "white";
        this.ref = { Fantasma: "Branco"}
    }

    draw (posX= 500, posY= 400, color=this.color){//função draw específica desse objeto
        Utils.colorCircle(posX+50, posY+40, 25, color);
        Utils.colorRect(posX+50-25, posY+40, 50, 30, color);
        Utils.colorTriangle(posX+50-25, posY+60+10,   posX+50-25+15, posY+60+10,   posX+50-25, posY+60+10+10, color);
        Utils.colorTriangle(posX+50-25+15+3, posY+60+10,   posX+50-25+15+15+3, posY+60+10,   posX+50-25+15+3, posY+60+10+10, color);
        Utils.colorTriangle(posX+50-25+15+15+6, posY+60+10,   posX+50-25+15+15+15+6, posY+60+10,   posX+50-25+15+15+6, posY+60+10+10, color);
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