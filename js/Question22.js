class Question22 {
	constructor() {

		this.value1 = 0;
		this.value2 = 0;

		var images = ["Q22-Chart1.png", "Q22-Chart2.png", "Q22-Chart3.png", "Q22-Chart4.png", "Q22-Chart5.png", "Q22-Chart6.png", "Q22-Chart7.png", "Q22-Chart8.png", "Q22-Chart9.png", "Q22-Chart10.png"];
		this.answers1 = [50.00,  37.78, 23.00, 22.73, 33.93, 36.67, 42.50, 26.25, 46.30, 19.05];
		this.answers2 = [100.00, 58.33, 70.00, 28.80, 26.39, 35.13, 64.18, 45.24, 45.00, 36.36];


		this.index = Math.floor(Math.random() * 10);

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC5');
		this.container.className = "Q22-Container";

		this.container2 = document.createElement('div');
		this.container2.className = "Q22-questionContainer";
		this.question = document.createElement('p');
		this.question.innerHTML = `Dennis the sales manager needs to hire more salespeople. He is 
		trying to decide whether to place a job advertisement in the <i> Advertising Age </i> or on <i> 
		monster.com </i>. Based on the following information, calculate the cost per hire for each option`;
		this.question.className = "Q22-paragraph";
		this.container2.appendChild(this.question);

		this.image = document.createElement('IMG');
		this.image.setAttribute('src', images[this.index]);
		this.image.setAttribute('width', '580');
		this.image.setAttribute('height', '205');
		this.container2.appendChild(this.image);

		var inputDiv = document.createElement('div');
		inputDiv.className = "Q22-inputDiv";
		this.input = document.createElement('input');
		this.input.className = "answer-input";
		this.input.setAttribute('id', 'Q22-input1');
		this.input.type = "number";
		this.input.setAttribute('placeholder', "Cost per hire");
		this.input2 = document.createElement('input');
		this.input2.className = "answer-input";
		this.input2.setAttribute('id', 'Q22-input2');
		this.input2.type = "number";
		this.input2.setAttribute('placeholder', "Cost per hire");
		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";
		inputDiv.appendChild(this.input);
		inputDiv.appendChild(this.input2);
		inputDiv.appendChild(this.button);
		this.container2.appendChild(inputDiv);

		this.container.appendChild(this.container2);
	}

	calcAnswer(index) {
		return [this.answers1[index], this.answers2[index]];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.index);

		if (this.getValue1() == answers[0]) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue1(answers[0]);
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue1(answers[0]);
		}

		if (this.getValue2() == answers[1]) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(answers[1].toFixed(2));
		} else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(answers[1].toFixed(2));
		}
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