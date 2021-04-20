class Question15 extends AbstractQuestionTwo {
	constructor() {

		var days = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
		var calls =      [60, 70, 80, 60, 55, 60, 65, 70, 75, 80];
		var averages = [.30, .30, .30, .35, .40, .40, .40, .40, .40, .40];
		var volumes = [100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000];

		super();
		var index = Math.floor(Math.random() * 10);
		this.variables = {
			day: days[Math.floor(Math.random() * 10)],
			call: calls[index],
			average: averages[index],
			volume: volumes[Math.floor(Math.random() * 10)]
		}
		this.explanation.innerHTML = `This month, Sally worked ${this.variables.day} days, made ${this.variables.call} calls, and had a 
		batting average of ${this.variables.average.toFixed(2)}. Her total sales volume was $${Number(this.variables.volume).toLocaleString()}.00 
		(Round answers to two decimal points)`;
		this.question1.innerHTML = `What was Sally's call rate?`;
		this.question2.innerHTML = `What was Sally's average order size?`;

		this.questionDiv3.remove();
	}

	calcAnswer(d, c, a, v) {
		var answer1, answer2;
		answer1 = c/d;
		answer2 = v/(a*c);
11111111
		return [answer1, answer2];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.day, this.variables.call, this.variables.average, this.variables.volume);

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