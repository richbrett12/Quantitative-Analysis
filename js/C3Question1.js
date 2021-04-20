class C3Question1 {
	constructor() {

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;
		this.value4 = 0;
		this.value5 = 0;

		var newCustomers = [47, 48, 49, 49, 50, 50, 51, 51, 52, 53];
		var activeCustomers = [227, 228, 229, 229, 230, 230, 231, 231, 232, 233];
		var oldCustomers = [27, 28, 29, 29, 30, 30, 31, 31, 32, 33];
		var values = [195000, 196000, 197000, 198000, 199000, 200000, 210000, 220000, 230000, 240000];
		var newCustomers2 = [8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
		var oldCustomers2 = [4, 4, 4, 5, 5, 5, 5, 6, 6, 6];
		var values2 = [245000, 246000, 247000, 248000, 249000, 250000, 251000, 252000, 253000, 254000];

		this.variables = {
			newCustomer: newCustomers[Math.floor(Math.random() * 10)],
			activeCustomer: activeCustomers[Math.floor(Math.random() * 10)],
			oldCustomer: oldCustomers[Math.floor(Math.random() * 10)],
			value: values[Math.floor(Math.random() * 10)],
			newCustomer2: newCustomers2[Math.floor(Math.random() * 10)],
			oldCustomer2: oldCustomers2[Math.floor(Math.random() * 10)],
			value2: values2[Math.floor(Math.random() * 10)]
		}


		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC3');
		this.container.className = "questionContainer";

		this.paragraph1 = document.createElement('p');
		this.paragraph1.className = "QC3-1-paragraph1";
		this.paragraph1.innerHTML = `In 2016, ABC Company spent $20,000 to mail out flyers to potential 
		customers (that had never purchased before).  An end-of-the-year analysis suggested that this 
		initiative resulted in the acquisition of ${this.variables.newCustomer} brand new customers, and that ABC ended the 
		year with ${this.variables.activeCustomer} active customers. This analysis further showed that ${this.variables.oldCustomer} customers from the year 
		before (2015) bought nothing in 2016; and that the average value of each customer (both new and old) was $${Number(this.variables.value).toLocaleString()}.`;

		this.paragraph2 = document.createElement('p');
		this.paragraph2.className = "QC3-1-paragraph2";
		this.paragraph2.innerHTML = `In 2017, ABC Company switched its focus to customer retention -- and instead spent 
		$20,000 to golf with existing customers (and did not send out any flyers).  An end-of-the-year 
		analysis indicated that although ABC only gained ${this.variables.newCustomer2} new customers in 2017, ABC failed 
		to retain just ${this.variables.oldCustomer2} customers from the year before.  And further, the average value of each 
		customer increased to $${Number(this.variables.value2).toLocaleString()}. <br> (Round answers to nearest whole number)`;

		this.questionDiv = document.createElement('div');
		this.questionDiv.className = "QC3-1-questionDiv";

		this.question1 = document.createElement('p');
		this.question1.className = "QC3-1-question";
		this.question1.innerHTML = "How many active customers did ABC Company have in 2015?";
		this.input1 = document.createElement('input');
		this.input1.setAttribute('type', 'number');
		this.input1.className = "answer-input";
		this.question1.appendChild(this.input1);
		this.questionDiv.appendChild(this.question1);

		this.question2 = document.createElement('p');
		this.question2.className = "QC3-1-question";
		this.question2.innerHTML = "What is the average cost of acquiring each of the 2016 new customers?";
		this.input2 = document.createElement('input');
		this.input2.setAttribute('type', 'number');
		this.input2.className = "answer-input";
		this.question2.appendChild(this.input2);
		this.questionDiv.appendChild(this.question2);

		this.question3 = document.createElement('p');
		this.question3.className = "QC3-1-question";
		this.question3.innerHTML = "What was total company sales revenue in 2016?";
		this.input3 = document.createElement('input');
		this.input3.setAttribute('type', 'number');
		this.input3.className = "answer-input";
		this.question3.appendChild(this.input3);
		this.questionDiv.appendChild(this.question3);

		this.question4 = document.createElement('p');
		this.question4.className = "QC3-1-question";
		this.question4.innerHTML = "How many active customers did ABC Company have in 2017?";
		this.input4 = document.createElement('input');
		this.input4.setAttribute('type', 'number');
		this.input4.className = "answer-input";
		this.question4.appendChild(this.input4);
		this.questionDiv.appendChild(this.question4);

		this.question5 = document.createElement('p');
		this.question5.className = "QC3-1-question";
		this.question5.innerHTML = "What was total company sales revenue in 2017?";
		this.input5 = document.createElement('input');
		this.input5.setAttribute('type', 'number');
		this.input5.className = "answer-input";
		this.question5.appendChild(this.input5);
		this.questionDiv.appendChild(this.question5);

		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'marginButton');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";

		this.container.appendChild(this.paragraph1);
		this.container.appendChild(this.paragraph2);
		this.container.appendChild(this.questionDiv);
		this.container.appendChild(this.button);

	}

	calcAnswer(nc, ac, oc, v, nc2, oc2, v2) {
		var answer1 = ac + oc - nc;
		var answer2 = v / nc;
		var answer3 = v * ac;
		var answer4 = ac + nc2 - oc2;
		var answer5 = v2 * answer4;

		return [answer1, answer2, answer3, answer4, answer5];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.newCustomer, 
			this.variables.activeCustomer, this.variables.oldCustomer, 
			this.variables.value, this.variables.newCustomer2, this.variables.oldCustomer2, this.variables.value2);

		if (this.getValue1() >= (answers[0] - .01) && this.getValue1() <= (answers[0] + .01)) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
			this.setValue1(Math.round(answers[0]));
		} else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(Math.round(answers[0]));
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

		if (this.getValue3() >= (answers[2] - .01) && this.getValue3() <= (answers[2] + .01)) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.setValue3(Math.round(answers[2]));
		} else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(Math.round(answers[2]));
		}

		if (this.getValue4() >= (answers[3] - .01) && this.getValue4() <= (answers[3] + .01)) {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue4(Math.round(answers[3]));
		} else {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue4(Math.round(answers[3]));
		}

		if (this.getValue5() >= (answers[4] - .01) && this.getValue5() <= (answers[4] + .01)) {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'green';
			this.setValue5(Math.round(answers[4]));
		} else {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'red';
			this.setValue5(Math.round(answers[4]));
		}
	}

	getValue1() {
		this.value1 = this.input1.value;
		return this.value1;
	}

	setValue1(val) {
		this.value1 = val;
		this.input1.value = this.value1;
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

	getValue5() {
		this.value5 = this.input5.value;
		return this.value5;
	}

	setValue5(val) {
		this.value5 = val;
		this.input5.value = this.value5;
	}
}