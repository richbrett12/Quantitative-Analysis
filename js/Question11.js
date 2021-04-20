class Question11 extends AbstractQuestion {
	constructor() {
		var aConstants = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
		var slopes = [100, 110, 130, 145, 160, 175, 180, 190, 200, 220];
		var years = [4, 4, 4, 5, 5, 5, 5, 6, 6, 6];

		super();

		this.variables = {
			aConstant: aConstants[Math.floor(Math.random() * 10)],
			slope: slopes[Math.floor(Math.random() * 10)],
			year: years[Math.floor(Math.random() * 10)]
		}

		this.container.setAttribute('id', 'question-containerC12');
		this.question.setAttribute('id', 'Q10-question');
		this.question.innerHTML = `ABC Company has been in business for 
		${this.variables.year} years. Using year as the predictor variable, 
		the regression analysis generates a constant a=${this.variables.aConstant},000, 
		and a slope b=${this.variables.slope},000. Calculate the year ${this.variables.year + 1} 
		sales forecast using Regression Analysis Forecasting.`
	}

	calcAnswer(a, s, y) {
		return (a + s * (y+1)) * 1000;
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.aConstant, this.variables.slope, this.variables.year);

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