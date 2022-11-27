class Board {

    static canvas;
	static canvasContext;

    static cartaAtual;

    constructor(collection) {
        this.scoreBoard1 = new Placar("Player 1", 75,100);
        this.scoreBoard2 = new Placar("Player 2", 700,100);
        this.grabbingSystem = new GrabbingSystem(this.scoreBoard1, this.scoreBoard2);

        this.collection = collection; //componente da coleção escolhida para a partida
        Board.cartaAtual = collection.generateCard();
        KeyboardInputs.collection = this.collection;
        KeyboardInputs.card = this.cartaAtual;

        this.gameObjects = [];

        // Adicionando observers aos objetos do Board (Subjects)
        for (let i = 0; i<this.collection.objects.length; i++){
            this.collection.objects[i].addObserver(this.grabbingSystem);
        }

        // Padrão Update
        for (let i = 0; i<this.collection.objects.length; i++){
            this.gameObjects.push(this.collection.objects[i]);
        }
        this.gameObjects.push(this.scoreBoard1);
        this.gameObjects.push(this.scoreBoard2);

        //init do canvas
        Board.canvas = document.getElementById('gameCanvas');
		Board.canvasContext = Board.canvas.getContext('2d');
		requestAnimationFrame(this.mainLoop.bind(this));
		window.addEventListener('keydown',KeyboardInputs.handleKeyPress);
    }

    mainLoop(timeStamp) {
		//Padrão Game Loop
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		
		while(this.delta >= this.timeStep) {
			this.move(this.timeStep);
			this.delta -= this.timeStep;
		}
		this.draw();
		requestAnimationFrame(this.mainLoop.bind(this));
	}

    draw() {
        Utils.clearScreen();
        Utils.colorRect(0,0, 800,600, "#0f0f0f");
        Board.cartaAtual.draw();
        for (let i = 0; i<this.gameObjects.length; i++){
            this.gameObjects[i].draw();
        }
    }

    move() {

    }

}