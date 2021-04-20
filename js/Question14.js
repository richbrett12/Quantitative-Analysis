class Question14 extends AbstractQuestionTwo {
	constructor() {

		var days = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
		var calls = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
		var sales = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
		var sizes = [4000, 4150, 4300, 4580, 4750, 5000, 5370, 5610, 5800, 6000];

		super();

		this.variables = {
			day: days[Math.floor(Math.random() * 10)],
			call: calls[Math.floor(Math.random() * 10)],
			sale: sales[Math.floor(Math.random() * 10)],
			size: sizes[Math.floor(Math.random() * 10)]
		}

		this.explanation.innerHTML = `This month, Sue worked ${this.variables.day} days, made ${this.variables.call} calls,
		${this.variables.sale} of which resulted in a sale; and had an average order size of $${Number(this.variables.size).toLocaleString()}.00 
		(Round answers to two decimal places)`;
		this.question1.innerHTML = `What was Sue's call rate?`;
		this.question2.innerHTML = `What was Sue's batting average?`;
		this.question3.innerHTML = `What was Sue's total sales volume?`;
	}

	calcAnswer(d, c, s, size) {
		var answer1, answer2, answer3;
		answer1 = c/d;
		answer2 = s/c;
		answer3 = size*s;

		return [answer1, answer2, answer3];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.day, this.variables.call, this.variables.sale, this.variables.size);

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