class Question13 extends AbstractQuestionTwo {
	constructor() {

		var days = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
		var calls = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
		var sales = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
		var volumes = [100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000];

		super();

		this.variables = {
			day: days[Math.floor(Math.random() * 10)],
			call: calls[Math.floor(Math.random() * 10)],
			sale: sales[Math.floor(Math.random() * 10)],
			volume: volumes[Math.floor(Math.random() * 10)]
		}
		this.explanation.innerHTML = `This month, Dan worked ${this.variables.day} days, made ${this.variables.call} calls,
		${this.variables.sale} of which resulted in a sale. His total sales volume was $${Number(this.variables.volume).toLocaleString()}.00 
		(Round answers to two decimal points)`;
		this.question1.innerHTML = `What was Dan's call rate?`;
		this.question2.innerHTML = `What was Dan's batting average?`;
		this.question3.innerHTML = `What was Dan's average order size?`;
	}

	calcAnswer(d, c, s, v) {
		var answer1, answer2, answer3;
		answer1 = c/d;
		answer2 = s/c;
		answer3 = v/s;

		return [answer1, answer2, answer3];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.day, this.variables.call, this.variables.sale, this.variables.volume);

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

		if (this.getValue3() >= (answers[2] - .01) && this.getValue3() <= (answers[2] + .01)) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.setValue3(answers[2].toFixed(2));
		} else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(answers[2].toFixed(2));
		}

	}
}