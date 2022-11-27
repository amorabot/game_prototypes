class KeyboardInputs{ //classe para detecção e tratamento dos clicks dos jogadores
//A S D F -> 65,83,68,70
//J K L Ç -> 74,75,76,59
    static collection;
    static topDeck;

    static handleKeyPress(ev){
        switch(ev.keyCode){
            case Utils.KEYS.SPACEBAR:
                KeyboardInputs.topDeck = KeyboardInputs.collection.generateCard();
                Board.cartaAtual = KeyboardInputs.topDeck;
                break;
            case Utils.KEYS.A:
                KeyboardInputs.validate(0,'um');
                break;
            case Utils.KEYS.S:
                KeyboardInputs.validate(1,'um');
                break;
            case Utils.KEYS.D:
                KeyboardInputs.validate(2,'um');
                break;
            case Utils.KEYS.F:
                KeyboardInputs.validate(3,'um');
                break;


            case Utils.KEYS.J:
                KeyboardInputs.validate(0,'dois');
                break;
            case Utils.KEYS.K:
                KeyboardInputs.validate(1,'dois');
                break;
            case Utils.KEYS.L:
                KeyboardInputs.validate(2,'dois');
                break;
            case Utils.KEYS.Ç:
                KeyboardInputs.validate(3,'dois');
                break;
            default:
                break;
        }
    }

    static validate(objIndex, team){
        if(Board.cartaAtual.isValid){
            KeyboardInputs.collection.objects[objIndex].checkAnswer(Board.cartaAtual, team);
            Board.cartaAtual.isValid = false;
        }
    }
}