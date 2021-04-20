class C6Question4 extends AbstractQuestion {
	constructor() {
		super();

		this.container.setAttribute('id', 'question-containerC6');
		this.question.innerHTML = `How many trees are there in NYC's Central Park? (Round to nearest thousand) `;

	}

	calcAnswer() {
		return 26000;
	}

	checkAnswer() {
		var answer = this.calcAnswer();
		
		if (this.getValue() == answer) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue(answer);
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue(answer);
		}
	}
}