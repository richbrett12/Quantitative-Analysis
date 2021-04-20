class Question3 extends AbstractQuestion {

	constructor() {
		var salaries = [18, 22, 25, 28, 32, 35, 38, 42, 45, 50];
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
			salary: salaries[Math.floor(Math.random() * 10)],
			commission1: commissions1[index],
			commission2: commissions2[index],
			commission3: commissions3[index],
			level1: levels1[index],
			level2: levels2[index],
			level3: levels3[index],
			total: totals[Math.floor(Math.random() * 10)]
		};

		this.question.innerHTML = 
			`Martha has an annual base salary of $${this.variables.salary},000, plus a Progressive Commission Rate on 
			dollar sales. She makes ${this.variables.commission1}% commission for the first $${this.variables.level1},000, 
			${this.variables.commission2}% commission on the next $${this.variables.level2},000,
			and ${this.variables.commission3}% commission on anything past $${this.variables.level3},000.
			What is Martha's compensation if her sales last year totaled $${this.variables.total},000? <br> 
			(Round answer to nearest dollar)`;

	}

	calcAnswer(sal, comm1, comm2, comm3, lev1, lev2, lev3, total) {
		if (total >= lev3) {
			return (sal * 1000) + ((comm1 / 100) * (lev1 * 1000)) + ((comm2 / 100) * (lev2 * 1000)) + ((comm3 / 100) * ((total - lev3) * 1000));
		} else {
			return (sal * 1000) + ((comm1 / 100) * (lev1 * 1000)) + ((comm2 / 100) * ((total - lev1) * 1000));
		}

	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.salary, this.variables.commission1, 
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