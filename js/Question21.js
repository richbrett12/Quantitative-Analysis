class Question21 {
	constructor() {
		var companySales = [20, 22, 24, 25, 26, 28, 30, 32, 34, 35];
		var gloveSales =   [12, 18, 16, 16, 20, 21, 22, 27, 23, 30];
		var customers = [75, 80, 90, 110, 120, 125, 150, 160, 180, 200]
		this.answers = [60, 82, 67, 64, 77, 75, 73, 84, 68, 86];

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;
		this.value4 = 0;

		this.index = Math.floor(Math.random() * 10);
		this.variables = {
			companySale: companySales[this.index],
			gloveSale: gloveSales[this.index],
			customer: customers[Math.floor(Math.random() * 10)]
		}

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC14');
		this.container.className = "Q21-Container";
		this.container2 = document.createElement('div');
		this.container2.className = "Q21-questionContainer";
		this.question = document.createElement('p');
		this.question.innerHTML = `ABC is a $${this.variables.companySale} million a year company with a total of 500 customers.<br>
		The largest ${this.variables.customer} customers generated a total of $${this.variables.gloveSale} million in sales last year.`;
		this.question2 = document.createElement('p');
		this.question2.innerHTML = `For the company above, how closely does the 80-20 principle apply to its sales force?`;
		this.question2.className = "Q21-question2";

		this.container2.appendChild(this.question);
		this.container2.appendChild(this.question2);
		this.container.appendChild(this.container2);

		this.container3 = document.createElement('div');
		this.container3.className = "Q21-explanationContainer";
		this.explanation = document.createElement('p');
		this.explanation.className = "Q21-paragraph";
		this.explanation.innerHTML = "Actually, it's a ";
		this.input = document.createElement('input');
		this.input.setAttribute('type', 'number');
		this.input.className = "Q21-input";
		this.input.onkeyup = this.linkInput1.bind(this);
		this.explanation2 = document.createElement('p');
		this.explanation2.innerHTML = " - ";
		this.explanation2.className = "Q21-paragraph2";
		this.input3 = document.createElement('input');
		this.input3.setAttribute('type', 'number');
		this.input3.className = "Q21-input";
		this.input3.onkeyup = this.linkInput3.bind(this);
		this.explanation3 = document.createElement('p');
		this.explanation3.innerHTML = "principle, because ";
		this.explanation3.className = "Q21-paragraph3";
		this.input2 = document.createElement('input');
		this.input2.setAttribute('type', 'number');
		this.input2.className = "Q21-input";
		this.input2.onkeyup = this.linkInput2.bind(this);
		this.explanation4 = document.createElement('p');
		this.explanation4.innerHTML = "% of sales comes from ";
		this.explanation4.className = "Q21-paragraph4";
		this.input4 = document.createElement('input');
		this.input4.setAttribute('type', 'number');
		this.input4.className = "Q21-input";
		this.input4.onkeyup = this.linkInput4.bind(this);
		this.explanation5 = document.createElement('p');
		this.explanation5.innerHTML = "% of the customers";
		this.explanation5.className = "Q21-paragraph5";
		this.explanation6 = document.createElement('p');
		this.explanation6.innerHTML = "(Round answer to nearest whole percent)";
		this.explanation6.className = "Q21-paragraph6";
		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'marginButton');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";

		this.container3.appendChild(this.explanation);
		this.container3.appendChild(this.input);
		this.container3.appendChild(this.explanation2);
		this.container3.appendChild(this.input3);
		this.container3.appendChild(this.explanation3);
		this.container3.appendChild(this.input2);
		this.container3.appendChild(this.explanation4);
		this.container3.appendChild(this.input4);
		this.container3.appendChild(this.explanation5);

		this.container.appendChild(this.container3);
		this.container.appendChild(this.explanation6);
		this.container.appendChild(this.button);
	}

	calcAnswer(index, c) {
		var answer1 = this.answers[index];
		var answer2 = (c/500)* 100;
		return [answer1, answer2];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.index, this.variables.customer);

		if (this.getValue1() >= (answers[0] - .5) && this.getValue1() <= (answers[0] + .5)) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue1(answers[0]);
			this.setValue2(answers[0]);
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue1(answers[0]);
			this.setValue2(answers[0]);
		}

		if (this.getValue3() >= (answers[1] - .5) && this.getValue3() <= (answers[1] + .5)) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue3(answers[1]);
			this.setValue4(answers[1]);
		} else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue3(answers[1]);
			this.setValue4(answers[1]);
		}
	}

	linkInput1() {
		this.setValue2(this.getValue1());
	}

	linkInput2() {
		this.setValue1(this.getValue2());
	}

	linkInput3() {
		this.setValue4(this.getValue3());
	}

	linkInput4() {
		this.setValue3(this.getValue4());
	}

	getValue1() {
		this.value1 = this.input.value;
		return this.value1;
	}

	setValue1(val) {
		this.value1 = val;
		this.input.value = this.value1;
	}

	getValue2() {
		this.value2 = this.input2.value;
		return this.value2;
	}

	setValue2(val) {
		this.value2 = val;
		this.input2.value = this.value2;
	}

	getValue3() {
		this.value3 = this.input3.value;
		return this.value3;
	}

	setValue3(val) {
		this.value3 = val;
		this.input3.value = this.value3;
	}

	getValue4() {
		this.value4 = this.input4.value;
		return this.value4;
	}

	setValue4(val) {
		this.value4 = val;
		this.input4.value = this.value4;
	}
}