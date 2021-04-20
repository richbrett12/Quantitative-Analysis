class Question2 extends AbstractQuestion {

	constructor() {
		var salaries = [18, 22, 25, 28, 32, 35, 38, 42, 45, 50];
		var commissions = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
		var quantities = [40, 43, 48, 51, 55, 59, 62, 65, 68, 70];
		var prices = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
		var profits = [3.00, 3.00, 3.50, 4.00, 4.50, 5.00, 5.50, 6.00, 6.50, 7.00,];

		super();
		this.variables = {
			salary: salaries[Math.floor(Math.random() * 10)],
			commission: commissions[Math.floor(Math.random() * 10)],
			quantity: quantities[Math.floor(Math.random() * 10)],
			price: prices[Math.floor(Math.random() * 10)],
			profit: profits[Math.floor(Math.random() * 10)].toFixed(2)
		};

		this.question.innerHTML = 
			`Jason has an annual base salary of $${this.variables.salary},000, AND receives 
			${this.variables.commission}% commission on gross margin generated for the company. 
			Last year Jason sold ${this.variables.quantity},000 lamps at $${this.variables.price}.00 
			each. The company makes $${this.variables.profit} for each lamp sold. What was Jason's annual salary last year? <br> 
			(Round answer to nearest dollar)`;

	}

	calcAnswer(sal, comm, quant, prof) {
		return (sal * 1000) + ((quant * 1000) * prof * (comm / 100));
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.salary, this.variables.commission, this.variables.quantity, this.variables.profit);
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