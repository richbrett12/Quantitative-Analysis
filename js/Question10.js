class Question10 extends AbstractQuestion {
	constructor() {
		var sales = [135, 142, 148, 153, 163, 167, 172, 178, 182, 190];
		var forecastedSales = [140, 145, 150, 155, 160, 165, 170, 175, 180, 185];
		var lconstants = [0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7];

		super();

		this.variables = {
			sale: sales[Math.floor(Math.random() * 10)],
			forecastedSale: forecastedSales[Math.floor(Math.random() * 10)],
			lconstant: lconstants[Math.floor(Math.random() * 10)]
		}

		this.container.setAttribute('id', 'question-containerC12');
		this.question.setAttribute('id', 'Q10-question');
		this.question.innerHTML = `Dock Corp has been in business for 3 years. 
		Sales totaled $${this.variables.sale},000 for their third year, with 
		the Year 3 forecast being $${this.variables.forecastedSale},000. Forecast Dock 
		Corp's Year 4 sales using exponential smoothing, with a smoothing constant 
		(L) of ${this.variables.lconstant}. (Round answer to nearest dollar)`
	}

	calcAnswer(s, f, L) {
		return ((L * s) + (1 - L) * f) * 1000;
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.sale, this.variables.forecastedSale, this.variables.lconstant);

		var value = this.getValue();
		var isCorrect = (value >= (answer - .5) && value <= (answer + .5));
		if (isCorrect) {
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