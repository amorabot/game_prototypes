class GrabbingSystem extends Observer{

    constructor(placar1, placar2){ //observer que altera os placares dependendo do evento ocorrido.
        super();
        this.placar1 = placar1;
        this.placar2 = placar2;
    }

    onNotify(ev = 0){
        switch(ev){
            case Utils.EVENTS.PONTO_TIME_UM:
                this.placar1.update(1);
                console.log("ponto1")
                break;

            case Utils.EVENTS.PONTO_TIME_DOIS:
                this.placar2.update(1);
                console.log("ponto!")
                break;

            case Utils.EVENTS.ERRO_TIME_UM:
                this.placar1.update(-1);
                console.log("errou1")
                break;

            case Utils.EVENTS.ERRO_TIME_DOIS:
                this.placar2.update(-1);
                console.log("errou")
                break;
            
            default:
                break;
        }
    }
}