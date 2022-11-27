class Card{

    constructor(obj1, color1, obj2, color2){ //toda carta irá conter 2 objetos com cores distintas
        this.obj1 = obj1;
        this.color1 = color1;

        this.obj2 = obj2;
        this.color2 = color2;

        this.randomOrder = Math.floor(Math.random() * 2);
        this.isValid = true;
    }

    draw(){ //aqui usamos os métodos dos próprios objetos escolhidos para compor a carta
        if(this.isValid){
            Utils.colorRect(400-50-25, 100, 150, 250, "#FFA500")

            if(this.randomOrder == 0){
                this.obj1.draw(340, 150, this.color1);
                this.obj2.draw(365, 190, this.color2);
            }else{
                this.obj2.draw(340, 150, this.color2);  
                this.obj1.draw(365, 190, this.color1);
            }
        }
    }
}