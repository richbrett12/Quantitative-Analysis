class Question20 {
	constructor() {


		var companySales = [20, 22, 24, 25, 26, 28, 30, 32, 34, 35];
		var gloveSales =   [12, 18, 16, 16, 20, 21, 22, 27, 23, 30];
		this.answers = [60, 82, 67, 64, 77, 75, 73, 84, 68, 86];

		this.value1 = 0;
		this.value2 = 0;

		this.index = Math.floor(Math.random() * 10);
		this.variables = {
			companySale: companySales[this.index],
			gloveSale: gloveSales[this.index]
		}

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC14');
		this.container.className = "Q20-Container";

		this.container2 = document.createElement('div');
		this.container2.className = "C14-questionContainer";
		this.question = document.createElement('p');
		this.question.innerHTML = `ABC is a $${this.variables.companySale} million a year company that sells exactly 5 products.<br>
		It's biggest selling product is gloves, which has total annual sales of $${this.variables.gloveSale} million.`;
		this.question2 = document.createElement('p');
		this.question2.innerHTML = `For the company above, how closely does the 80-20 principle apply to its sales force?`;
		this.question2.className = "C14-question2";
		this.container2.appendChild(this.question);
		this.container2.appendChild(this.question2);
		this.container.appendChild(this.container2);

		this.container3 = document.createElement('div');
		this.container3.className = "C14-explanationContainer";
		this.explanation = document.createElement('p');
		this.explanation.className = "C14-paragraph";
		this.explanation.innerHTML = "Actually, it's a ";
		this.input = document.createElement('input');
		this.input.setAttribute('type', 'number');
		this.input.className = "C14-input";
		this.input.onkeyup = this.linkInput1.bind(this);
		this.explanation2 = document.createElement('p');
		this.explanation2.innerHTML = " - 20 principle, because ";
		this.explanation2.className = "C14-paragraph2";
		this.input2 = document.createElement('input');
		this.input2.setAttribute('type', 'number');
		this.input2.className = "C14-input";
		this.input2.onkeyup = this.linkInput2.bind(this);
		this.explanation3 = document.createElement('p');
		this.explanation3.innerHTML = "% of sales comes from 20% of its products.";
		this.explanation3.className = "C14-paragraph3";
		this.explanation4 = document.createElement('p');
		this.explanation4.innerHTML = "(Round answer to nearest whole percent)";
		this.explanation4.className = "C14-paragraph4";
		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'marginButton');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";

		this.container3.appendChild(this.explanation);
		this.container3.appendChild(this.input);
		this.container3.appendChild(this.explanation2);
		this.container3.appendChild(this.input2);
		this.container3.appendChild(this.explanation3);
		this.container.appendChild(this.container3);
		this.container.appendChild(this.explanation4);
		this.container.appendChild(this.button);
	}

	calcAnswer(index) {
		return this.answers[index];
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.index);

		if (this.getValue1() >= (answer - .5) && this.getValue1() <= (answer + .5)) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue1(answer);
			this.setValue2(answer);
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue1(answer);
			this.setValue2(answer);
		}
	}

	linkInput1() {
		this.setValue2(this.getValue1());
	}

	linkInput2() {
		this.setValue1(this.getValue2());
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
}