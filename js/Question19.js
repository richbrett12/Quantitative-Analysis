class Question19 {
	constructor() {

		var images = ["chart.png", "chart2.png", "chart3.png", "chart4.png", "chart5.png", "chart6.png", "chart7.png", "chart8.png", "chart9.png", "chart10.png"];
		this.answers = [75, 77, 73, 72, 83, 65, 70, 68, 62, 83];
		this.totals =  [24, 26, 22, 25, 36, 34, 20, 38, 34, 41];

		this.value1 = 0;
		this.value2 = 0;

		this.index = Math.floor(Math.random() * 10);

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC14');
		this.container.className = "Q19-Container";

		this.container2 = document.createElement('div');
		this.container2.className = "C14-questionContainer";
		this.question = document.createElement('p');
		this.question.innerHTML = `ABC is a $${this.totals[this.index]} million a year company with the following 10 salespeople...`;
		this.image = document.createElement('IMG');
		this.image.setAttribute('src', images[this.index]);
		this.image.setAttribute('width', '390');
		this.image.setAttribute('height', '300');
		this.question2 = document.createElement('p');
		this.question2.innerHTML = `For the company above, how closely does the 80-20 principle apply to its sales force?`;
		this.question2.className = "C14-question2";
		this.container2.appendChild(this.question);
		this.container2.appendChild(this.image);
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
		this.explanation3.innerHTML = "% of sales comes from 20% of the salespeople.";
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