class Question4 extends AbstractQuestion {
	constructor() {

		var commissions1 = [3, 4, 3, 4, 3, 4, 5, 5, 6, 6];
		var commissions2 = [5, 6, 6, 7, 6, 8, 8, 7, 10, 11];
		var commissions3 = [8, 8, 9, 10, 10, 11, 12, 10, 14, 15];
		var levels1 = [15, 20, 15, 22, 25, 20, 30, 32, 35, 40];
		var levels2 = [60, 50, 50, 55, 55, 61, 55, 43, 55, 50];
		var levels3 = [75, 70, 65, 77, 80, 81, 85, 75, 90, 90];
		var totals = [75, 85, 90, 95, 100, 105, 110, 115, 120, 125];

		super();

		var index = Math.floor(Math.random() * 10);
		this.variables = {
			commission1: commissions1[index],
			commission2: commissions2[index],
			commission3: commissions3[index],
			level1: levels1[index],
			level2: levels2[index],
			level3: levels3[index],
			total: totals[Math.floor(Math.random() * 10)]
		};

		this.question.innerHTML = `Last year, Gary's sales totaled $${this.variables.total},000. His 
		Regressive Commission Rate is as follows: ${this.variables.commission3}% on his 
		first $${this.variables.level1},000, ${this.variables.commission2}% on 
		his next $${this.variables.level2},000, and ${this.variables.commission1}% on any 
		amount over $${this.variables.level3},000. Based on dollar sales, 
		how much did Gary make strictly on commission last year? <br> (Round answer to nearest dollar)`;
	}

	calcAnswer(comm1, comm2, comm3, lev1, lev2, lev3, total) {
		if (total >= lev3) {
			return ((comm3 / 100) * (lev1 * 1000)) + ((comm2 / 100) * (lev2 * 1000)) + ((comm1 / 100) * ((total - lev3) * 1000));
		} else {
			return ((comm3 / 100) * (lev1 * 1000)) + ((comm2 / 100) * ((total - lev1) * 1000));
		}

	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.commission1, 
			this.variables.commission2, this.variables.commission3, this.variables.level1, 
			this.variables.level2, this.variables.level3, this.variables.total);
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