class AbstractQuestionTwo {
	constructor() {

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC16');
		this.container.className = "questionContainer";

		this.explanation = document.createElement('p');
		this.explanation.className = "question-paragraph";

		this.questionDivContainer = document.createElement('div');
		this.questionDivContainer.className = "Q17-DivContainer";


		var questionDiv1 = document.createElement('div');
		questionDiv1.className = "question-div";
		questionDiv1.setAttribute('id', 'Q17-questionDiv');
		this.question1 = document.createElement('p');
		this.question1.className = "question-paragraph";
		this.input1 = document.createElement('input');
		this.input1.className = "answer-input";
		this.input1.type = "number";
		questionDiv1.appendChild(this.question1);
		questionDiv1.appendChild(this.input1);
		this.questionDivContainer.appendChild(questionDiv1);

		var questionDiv2 = document.createElement('div');
		questionDiv2.className = "question-div";
		questionDiv2.setAttribute('id', 'Q17-questionDiv');
		this.question2 = document.createElement('p');
		this.question2.className = "question-paragraph";
		this.input2 = document.createElement('input');
		this.input2.className = "answer-input";
		this.input2.type = "number";
		questionDiv2.appendChild(this.question2);
		questionDiv2.appendChild(this.input2);
		this.questionDivContainer.appendChild(questionDiv2);

		this.questionDiv3 = document.createElement('div');
		this.questionDiv3.className = "question-div";
		this.questionDiv3.setAttribute('id', 'Q17-questionDiv');
		this.question3 = document.createElement('p');
		this.question3.className = "question-paragraph";
		this.input3 = document.createElement('input');
		this.input3.className = "answer-input";
		this.input3.type = "number";
		this.questionDiv3.appendChild(this.question3);
		this.questionDiv3.appendChild(this.input3);
		this.questionDivContainer.appendChild(this.questionDiv3);

		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.setAttribute('id', 'Q17-button');
		this.button.className = "submit";
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT"

		this.container.appendChild(this.explanation);
		this.container.appendChild(this.questionDivContainer);
		this.container.appendChild(this.button);
	}

	getValue1() {
		this.value1 = this.input1.value;
		return this.value1;
	}

	setValue1(val) {
		this.input1.value = val;
		this.value1 = this.input1.value;
	}

	getValue2() {
		this.value2 = this.input2.value;
		return this.value2;
	}

	setValue2(val) {
		this.input2.value = val;
		this.value2 = this.input2.value;
	}

	getValue3() {
		this.value3 = this.input3.value;
		return this.value3;
	}

	setValue3(val) {
		this.input3.value = val;
		this.value3 = this.input3.value;
	}
}