class AbstractQuestion {
	/* clamp(num, lower, upper) {
		return Math.min(Math.max(num, lower), upper);
	} */

	constructor() {

		this.value = 0;

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC9');
		this.container.className = "questionContainer";
		this.inputDiv = document.createElement('div');
		this.inputDiv.className = "inputDiv";
		this.input = document.createElement('input');
		this.input.className = "answer-input";
		this.input.type = "number";
		this.input.setAttribute('placeholder', "Answer in Dollars");
		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";
		this.question = document.createElement('p');
		this.question.className = "question-paragraph";

		this.container.appendChild(this.question);
		this.inputDiv.appendChild(this.input);
		this.inputDiv.appendChild(this.button);
		this.container.appendChild(this.inputDiv);
	}

	t(s,d) {
		for(var p in d)
		   s = s.replace(new RegExp('{'+p+'}','g'), d[p]);
		return s;
	}

	getValue() {
		this.value = this.input.value;
		return this.value;
	}

	setValue(val) {
		this.input.value = val;
		this.value = this.input.value;
	}
}