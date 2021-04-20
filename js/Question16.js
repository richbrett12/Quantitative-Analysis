class Question16 extends AbstractQuestionTwo {
	constructor() {

		var rates =     [3,   3,   4,   4,   3,   3,   5,   5,   5,   5];
		var averages = [.20, .20, .30, .30, .30, .30, .40, .40, .30, .30];
		var orders =    [30,  30,  30,  30,  27,  27,  40,  40,  42,  42];
		var volumes = [100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000];

		super();
		var index = Math.floor(Math.random() * 10);
		this.variables = {
			rate: rates[index],
			order: orders[index],
			average: averages[index],
			volume: volumes[Math.floor(Math.random() * 10)]
		}
		this.explanation.innerHTML = `In the last several weeks, Bill had a call rate of ${this.variables.rate}, a 
		batting average of ${this.variables.average.toFixed(2)}; a total of ${this.variables.order} orders, 
		and a total sales volume of $${Number(this.variables.volume).toLocaleString()}.00 
		(Round answers to two decimal points)`;
		this.question1.innerHTML = `How many days did Bill work in this time frame?`;
		this.question2.innerHTML = `What was Bill's average order size?`;

		this.questionDiv3.remove();
	}

	calcAnswer(r, a, o, v) {
		var answer1, answer2;
		answer1 = (o/a)/r;
		answer2 = v/o;

		return [answer1, answer2];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.rate, this.variables.average, this.variables.order, this.variables.volume);

		if (this.getValue1() >= (answers[0] - .01) && this.getValue1() <= (answers[0] + .01)) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
			this.setValue1(answers[0].toFixed(2));
		} else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(answers[0].toFixed(2));
		}

		if (this.getValue2() >= (answers[1] - .01) && this.getValue2() <= (answers[1] + .01)) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(answers[1].toFixed(2));
		} else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(answers[1].toFixed(2));
		}
	}
}