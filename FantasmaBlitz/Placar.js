class Placar{ //contém as funcionalidades basicas de um display de placar(fillText)

    constructor(label = '', posX, posY){
        this.label = label;
        this.value = 0;

        this.x = posX;
        this.y = posY;
    }

    update(value){
        this.value += value; //adicionamos o valor passado ao placar ( 1 ou -1 por padrão)
    }

    draw(){
        Board.canvasContext.font = Board.canvasContext.font.replace(/\d+px/, "40px");
        Utils.colorText(this.label, this.x-60, this.y-45, "#FFA500");
        Utils.colorText(String(this.value), this.x, this.y, "#FFA500");
    }
}