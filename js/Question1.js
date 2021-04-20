class Question1 extends AbstractQuestion {
	constructor() {

		var commissions = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var quantities = [150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
		var prices = [30, 37, 45, 52, 60, 65, 73, 80, 85, 90];

		super();
		this.variables = {
			commission: commissions[Math.floor(Math.random() * 10)],
			quantity: quantities[Math.floor(Math.random() * 10)],
			price: prices[Math.floor(Math.random() * 10)]
		};

		this.question.innerHTML = `
			Jeff gets ${this.variables.commission}% straight commission on dollar sales.
			If last month he sells ${this.variables.quantity},000 balloons at $0.${this.variables.price} each,
			what would his compensation be? <br> (Round answer to nearest dollar)`;

	}

	calcAnswer(comm, quant, price) {
		return (price / 100) * (quant * 1000) * (comm / 100);
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.commission, this.variables.quantity, this.variables.price);
		var value = this.getValue();
		var isCorrect = (value >= (answer - .5) && value <= (answer + .5));
		if (isCorrect == true) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue(Math.round(answer));
		}
		else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue(Math.round(answer));
		}
	}
}