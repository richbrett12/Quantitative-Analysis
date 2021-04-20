class C2Question1 extends AbstractQuestion {
	constructor() {

		var costs = [500000, 500000, 500000, 500000, 500000, 600000, 600000, 600000, 600000, 600000];
		var revenues = [4000000, 4000000, 4000000, 4000000, 4000000, 5000000, 5000000, 5000000, 5000000, 5000000];
		var salespeople = [3, 3, 3, 3, 3, 4, 4, 4, 4, 4];

		super();

		this.value2 = 0;

		this.variables = {
			cost: costs[Math.floor(Math.random() * 10)],
			revenue: revenues[Math.floor(Math.random() * 10)],
			salespeople: salespeople[Math.floor(Math.random() * 10)]
		}

		this.container.setAttribute('id', 'question-containerC2');
		this.question.innerHTML = `In its sales force strategy for the coming year, ABC 
		company plans to hire ${this.variables.salespeople} new salespeople which will cost $${Number(this.variables.cost).toLocaleString()} in training and compensation.  
		They expect these salespeople will increase sales revenue for the company by $${Number(this.variables.revenue).toLocaleString()}.`;
		this.button.remove();

		this.inputDiv.setAttribute('id', 'QC2-1-inputDiv');

		this.paragraph = document.createElement('p');
		this.paragraph.innerHTML = `Assuming cost of goods sold is 80% of sales, what is the resulting increase in net profit?`;
		this.paragraph.className = "QC2-1-paragraph1";
		this.container.appendChild(this.paragraph);

		this.paragraph2 = document.createElement('p');
		this.paragraph2.innerHTML = `What is the expected ROI of this investment? (Round to nearest whole percent)`;
		this.paragraph2.className = "QC2-1-paragraph2";
		this.container.appendChild(this.paragraph2);

		this.input2 = document.createElement('input');
		this.input2.className = "answer-input";
		this.input2.type = "number";
		this.input2.setAttribute('placeholder', "%");
		this.input2.setAttribute('id', "QC2-1-input2");
		this.button2 = document.createElement('button');
		this.button2.setAttribute('type', 'button');
		this.button2.setAttribute('id', 'QC2-1-button');
		this.button2.className = "submit";
		this.button2.onclick = this.checkAnswer.bind(this);
		this.button2.innerHTML = "SUBMIT";
		this.container.appendChild(this.input2);
		this.container.appendChild(this.button2);

		this.paragraph3 = document.createElement('p');
		this.paragraph3.className = "QC2-1-paragraph3";
		this.paragraph3.innerHTML = "NOTE: ROI = (Net Profit - Investment) / Investment";
		this.container.appendChild(this.paragraph3);

	}

	calcAnswer(c, r) {
		var answer1 = .2 * r;
		var answer2 = ((answer1 - c) / c) * 100;

		return [answer1, answer2];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.cost, this.variables.revenue);

		if (this.getValue() >= (answers[0] - .01) && this.getValue() <= (answers[0] + .01)) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue(Math.round(answers[0]));
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue(Math.round(answers[0]));
		}

		if (this.getValue2() >= (answers[1] - .5) && this.getValue2() <= (answers[1] + .5)) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(Math.round(answers[1]));
		} else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(Math.round(answers[1]));
		}


	}

	getValue2() {
		this.value2 = this.input2.value;
		return this.value2;
	}

	setValue2(val) {
		this.input2.value = val;
		this.value2 = this.input2.value;
	}
}