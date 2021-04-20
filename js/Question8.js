class Question8 extends AbstractQuestion {
	constructor() {

		var salaries = [30, 32, 34, 36, 38, 40, 42, 44, 46, 48];
		var commissions = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
		var bonuses = [8, 8, 10, 10, 12, 12, 14, 14, 16, 16];
		var quotas1  = [100, 107, 115, 125, 129, 138, 145, 150, 156, 160];
		var actuals1 = [105, 120, 103, 121, 135, 115, 140, 165, 148, 160];
		var quotas2  = [185, 192, 200, 212, 215, 223, 230, 235, 241, 245];
		var actuals2 = [175, 195, 220, 220, 220, 235, 230, 219, 245, 230];
		var quotas3  = [60,  62,  65,  70,  74,  78,  80,  85,  90,  96];
		var actuals3 = [62,  55,  65,  80,  70,  80,  85,  82,  95,  98];
		var quotas4  = [38,  43,  50,  52,  56,  60,  65,  67,  70,  75];
		var actuals4 = [41,  40,  53,  49,  52,  60,  68,  65,  75,  73];

		super();

		this.container.setAttribute('id', 'question-containerC10');

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;
		this.value4 = 0;

		var index = Math.floor(Math.random() * 10);
		this.variables = {
			salary: salaries[Math.floor(Math.random() * 10)],
			commission: commissions[Math.floor(Math.random() * 10)],
			bonus: bonuses[Math.floor(Math.random() * 10)],
			quota1: quotas1[index],
			quota2: quotas2[index],
			quota3: quotas3[index],
			quota4: quotas4[index],
			actual1: actuals1[index],
			actual2: actuals2[index],
			actual3: actuals3[index],
			actual4: actuals4[index],
		}

		this.question.innerHTML = `Henrietta works for a local company and only sells  
			tables and chairs. She has an annual salary of $${this.variables.salary},000, 
			and gets ${this.variables.commission}% on dollar sales. In addition, Henrietta is 
			under a combination quota plan and gets a $${this.variables.bonus},000 bonus when 
			reached. Given her last year's performance under this plan (below), what is 
			Henrietta's total annual compensation? <br> (Round answer to nearest dollar)`;

		this.container.className = "table3-container";
		this.table = document.createElement('table');
		this.table.className = "table3";
		this.row = document.createElement('tr');

		var headers = ["", "Quota", "Actual", ""];
		var option;
		for (var i in headers) {
			option = document.createElement('th');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row.appendChild(option);
		}
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');

		var headers = ["Product 1: Tables", "$" + this.variables.quota1 + ",000", "$" + this.variables.actual1 + ",000"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row2.appendChild(option);
		}

		this.input1 = document.createElement('input');
		this.input1.className = "table2-input";
		this.input1.type = "number";
		this.input1.setAttribute('placeholder', "0.00%");
		this.row2.appendChild(this.input1);
		this.table.appendChild(this.row2);

		this.row3 = document.createElement('tr');

		var headers = ["Product 2: Chairs", "$" + this.variables.quota2 + ",000", "$" + this.variables.actual2 + ",000"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row3.appendChild(option);
		}
		this.input2 = document.createElement('input');
		this.input2.className = "table2-input";
		this.input2.type = "number";
		this.input2.setAttribute('placeholder', "0.00%");
		this.row3.appendChild(this.input2);
		this.table.appendChild(this.row3);

		this.row4 = document.createElement('tr');

		var headers = ["Product Demonstrations", this.variables.quota3, this.variables.actual3];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row4.appendChild(option);
		}
		this.input3 = document.createElement('input');
		this.input3.className = "table2-input";
		this.input3.type = "number";
		this.input3.setAttribute('placeholder', "0.00%");
		this.row4.appendChild(this.input3);
		this.table.appendChild(this.row4);

		this.row5 = document.createElement('tr');

		var headers = ["Expense Quota", "$" + this.variables.quota4 + ",000", "$" + this.variables.actual4 + ",000"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row5.appendChild(option);
		}
		this.input4 = document.createElement('input');
		this.input4.className = "table2-inputshort";
		this.input4.type = "number";
		this.input4.setAttribute('placeholder', "0.00%");
		this.row5.appendChild(this.input4);
		this.table.appendChild(this.row5);

		this.row6 = document.createElement('tr');

		var headers = ["", "", ""];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "table2data";
			this.row6.appendChild(option);
		}
		this.input5 = document.createElement('input');
		this.input5.className = "table2-inputshort";
		this.input5.type = "number";
		this.input5.setAttribute('placeholder', "0.00%");
		this.row6.appendChild(this.input5);
		this.table.appendChild(this.row6);
		this.container.appendChild(this.table);

		var buttonDiv = document.createElement('div');
		buttonDiv.className = "q8-buttonDiv";
		var checkButton = document.createElement('button');
		checkButton.setAttribute('type', 'button');
		checkButton.className = "check-button";
		checkButton.onclick = this.checkPercentages.bind(this);
		checkButton.innerHTML = "Check Percentages";
		buttonDiv.appendChild(checkButton);
		this.container.appendChild(buttonDiv);
	}

	calcAnswer(q1, q2, q3, q4, a1, a2, a3, a4, sal, comm, bonus) {
		var answer1, answer2;
		answer1 = ((Math.round(a1/q1*10000) + Math.round(a2/q2*10000) + Math.round(a3/q3*10000) + Math.round(a4/q4*10000)) / 400);
		answer2 = (sal + (comm / 100) * (a1 + a2)) * 1000;
		if (answer1 >= 100) {
			return answer2 + (bonus * 1000);
		}
		return answer2;

	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.quota1, this.variables.quota2, 
			this.variables.quota3, this.variables.quota4, this.variables.actual1, 
			this.variables.actual2, this.variables.actual3, this.variables.actual4, 
			this.variables.salary, this.variables.commission, this.variables.bonus);

		var value = this.getValue();
		var isCorrect = (value >= (answer - .5) && value <= (answer + .5));
		if (isCorrect) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue(Math.round(answer));
		}
		else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue(Math.round(answer));
		}
	}

	calcPercentages(q1, q2, q3, q4, a1, a2, a3, a4) {
		var answer1, answer2, answer3, answer4, answer5;
		answer1 = Math.round(a1/q1*10000);
		answer2 = Math.round(a2/q2*10000);
		answer3 = Math.round(a3/q3*10000);
		answer4 = Math.round(a4/q4*10000);
		answer5 = ((answer1 + answer2 + answer3 + (20000 - answer4)) / 400).toFixed(2);
		answer1 = (answer1 / 100).toFixed(2);
		answer2 = (answer2 / 100).toFixed(2);
		answer3 = (answer3 / 100).toFixed(2);
		answer4 = 200 - (answer4 / 100).toFixed(2);

		return [answer1, answer2, answer3, answer4, answer5];
	}

	checkPercentages() {
		var answers = this.calcPercentages(this.variables.quota1, this.variables.quota2, this.variables.quota3, this.variables.quota4, 
			this.variables.actual1, this.variables.actual2, this.variables.actual3, this.variables.actual4);

		var isCorrect = (this.getValue1() >= (answers[0] - .01) && this.getValue1() <= (answers[0] + .01));
		if (isCorrect == true) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
			this.setValue1(answers[0]);
		}
		else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(answers[0]);
		}

		var isCorrect = (this.getValue2() >= (answers[1] - .01) && this.getValue2() <= (answers[1] + .01));
		if (isCorrect == true) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(answers[1]);
		}
		else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(answers[1]);
		}

		var isCorrect = (this.getValue3() >= (answers[2] - .01) && this.getValue3() <= (answers[2] + .01));
		if (isCorrect == true) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.setValue3(answers[2]);
		}
		else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(answers[2]);
		}


		var isCorrect = (this.getValue4() >= (answers[3] - .01) && this.getValue4() <= (answers[3] + .01));
		if (isCorrect == true) {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue4(answers[3]);
		}
		else {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue4(answers[3]);
		}

		var isCorrect = (this.getValue5() >= (answers[4] - .01) && this.getValue5() <= (answers[4] + .01));
		if (isCorrect == true) {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'green';
			this.setValue5(answers[4]);
		}
		else {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'red';
			this.setValue5(answers[4]);
		}
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

	getValue4() {
		this.value4 = this.input4.value;
		return this.value4;
	}

	setValue4(val) {
		this.input4.value = val;
		this.value4 = this.input4.value;
	}

	getValue5() {
		this.value5 = this.input5.value;
		return this.value5;
	}

	setValue5(val) {
		this.input5.value = val;
		this.value5 = this.input5.value;
	}
}