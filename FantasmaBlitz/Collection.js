class Collection{

    constructor(obj1=null, obj2=null, obj3=null, obj4=null, collectionName=''){ //toda coleção deve conter 4 objetos e um nome
        this.objects = [obj1, obj2, obj3, obj4];
        this.refSheet = Object.assign({Name: collectionName}, obj1.ref, obj2.ref, obj3.ref, obj4.ref)
    }

    generateCard(){ //é gerada aleatoriamente uma carta que tenha 2 objetos, um com a cor certa e outro com cor errada
        let correctIndex = Math.floor(Math.random() * this.objects.length); //definição do index correto
        let correctObject = this.objects[correctIndex]; //seleção do objeto correto
        let remainingObjects = [];
        for (let i = 0; i<this.objects.length; i++){ //clonagem do array original sem o objeto correto
            if(i != correctIndex){
                remainingObjects.push(this.objects[i]);
            }
        }
        let incObjIndex = Math.floor(Math.random() * remainingObjects.length); //definição do index pro objeto
        let incorrObject = remainingObjects[incObjIndex]; //seleção do objeto que será a base
        remainingObjects.splice(incObjIndex, incObjIndex+1); //remoção do objeto do array "restante"

        let incColorIndex = Math.floor(Math.random() * remainingObjects.length); //definição do index pra cor
        // (agora remainingObjects está menor e os limites para a geração do indice são diferentes)
        let incorrColor = remainingObjects[incColorIndex]; //seleção do objeto que terá a cor

        return new Card(correctObject, correctObject.color, incorrObject, incorrColor.color);
    }
}