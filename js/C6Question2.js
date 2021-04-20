class C6Question2 extends AbstractQuestion {
	constructor() {
		super();

		this.container.setAttribute('id', 'question-containerC6');
		this.question.innerHTML = `How many ping pong balls fit in a 747 airplane? (Round to nearest million) `;

	}

	calcAnswer() {
		return 23000000;
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