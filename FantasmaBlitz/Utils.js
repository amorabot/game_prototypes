class Utils { //classe estática de utilidades gerais que podem ser necessárias no decorrer do código
//A S D F -> 65,83,68,70
//J K L Ç -> 74,75,76,59
	static KEYS = {
		A: 65,		S: 83,		D: 68,		F: 70,

		J:74,		K:75,		L:76,		Ç:59,
		
		SPACEBAR: 32
	}

	static EVENTS = { //onde estão localizados os possíveis eventos captados pelos observers
		PONTO_TIME_UM: 'Teste1',
		ERRO_TIME_UM: 'Teste2',
        PONTO_TIME_DOIS: 'CHIMICHANGA',
        ERRO_TIME_DOIS: 'ERREI 2'
	}
	
	static colorRect(topLeftX, topLeftY, width, height, fillColor) { //desenha o retângulo especificado
		Board.canvasContext.fillStyle = fillColor;
		Board.canvasContext.fillRect(topLeftX, topLeftY, width, height);
	}

	static colorCircle(centerX,centerY, radius, fillColor) { //desenha o circulo especificado
		Board.canvasContext.fillStyle = fillColor;
		Board.canvasContext.beginPath();
		Board.canvasContext.arc(centerX,centerY, radius,0,Math.PI*2,true);
		Board.canvasContext.fill();
	}

	static colorText(text,textX,textY,fillColor) { //desenha o campo de texto especificado
		Board.canvasContext.fillStyle = fillColor;
		Board.canvasContext.fillText(text,textX,textY);
	}

	static colorLine(x0, y0, x1, y1, color){ //desenha a linha especificada
		Board.canvasContext.strokeStyle = color;

		Board.canvasContext.beginPath();
		Board.canvasContext.moveTo(x0,y0);
		Board.canvasContext.lineTo(x1, y1);
		Board.canvasContext.lineWidth = 3;
		Board.canvasContext.stroke();
	}

	static colorTriangle(x1,y1,x2,y2,x3,y3, color){ //desenha o triângulo especificado
		Board.canvasContext.fillStyle = color;

		Board.canvasContext.beginPath();
		Board.canvasContext.moveTo(x1,y1);
		Board.canvasContext.lineTo(x2,y2);
		Board.canvasContext.lineTo(x3,y3);
		Board.canvasContext.fill();
	}
	
	static clearScreen(color = 'black') { //limpa a tela ao substituir os elementos atuais por um novo background
		this.colorRect(0,0,Board.canvas.width, Board.canvas.height,color);
	}
}