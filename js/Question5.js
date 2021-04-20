class Question5 {
	constructor() {
		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;

		var begPayments = [2000, 2500, 3000, 3500, 4000, 2000, 2500, 3000, 3500, 4000];
		var sales1 = [30000, 30000, 45000, 45000, 45000, 25000, 35000, 35000, 50000, 45000];
		var sales2 = [15000, 15000, 25000, 30000, 25000, 15000, 10000, 20000, 25000, 35000];
		var sales3 = [45000, 35000, 40000, 40000, 50000, 35000, 40000, 50000, 40000, 55000];
		var accounts = ["GUARANTEED", "NONGUARANTEED"];

		var index = Math.floor(Math.random() * 10);
		this.variables = {
			begPayment: begPayments[index],
			sale1: sales1[index],
			sale2: sales2[index],
			sale3: sales3[index],
			accountType: accounts[Math.round(Math.random())]
		}

		this.container = document.createElement('div');
		this.container.className = "Q5-tableContainer";
		this.container.setAttribute('id', 'question-containerC9');
		this.explanation = document.createElement('p');
		this.explanation.innerHTML = `Fill in the correct dollar amount for each month in the End of Month Payment 
		column for a ${this.variables.accountType} drawing account.`
		this.explanation.className = "explanation";
		this.container.appendChild(this.explanation);
		this.table = document.createElement('table');
		this.table.className = "table";
		this.row = document.createElement('tr');

		var headers = ["Month", "Beginning of Month Payment", "Dollar Sales Generated", "Commission Earned (10%)", "End of Month Payment"];
		var option;
		for (var i in headers) {
			option = document.createElement('th');
			option.innerHTML = headers[i];
			option.className = "table1data";
			this.row.appendChild(option);
		}
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');

		var data = ["January", "$" + this.variables.begPayment, "$" + this.variables.sale1, "$" + this.variables.sale1 / 10];
		for (var i in data) {
			option = document.createElement('td');
			option.innerHTML = data[i];
			option.className = "table1data";
			this.row2.appendChild(option);
		}
		this.input1 = document.createElement('input');
		this.input1.className = "table-input";
		this.input1.type = "number";
		this.row2.appendChild(this.input1);

		this.table.appendChild(this.row2);

		this.row3 = document.createElement('tr');

		var data = ["February", "$" + this.variables.begPayment, "$" + this.variables.sale2, "$" + this.variables.sale2 / 10];
		for (var i in data) {
			option = document.createElement('td');
			option.innerHTML = data[i];
			option.className = "table1data";
			this.row3.appendChild(option);
		}
		this.input2 = document.createElement('input');
		this.input2.className = "table-input";
		this.input2.type = "number";
		this.row3.appendChild(this.input2);

		this.table.appendChild(this.row3);

		this.row4 = document.createElement('tr');

		var data = ["March", "$" + this.variables.begPayment, "$" + this.variables.sale3, "$" + this.variables.sale3 / 10];
		for (var i in data) {
			option = document.createElement('td');
			option.innerHTML = data[i];
			option.className = "table1data";
			this.row4.appendChild(option);
		}
		this.input3 = document.createElement('input');
		this.input3.className = "table-input";
		this.input3.type = "number";
		this.row4.appendChild(this.input3);

		this.table.appendChild(this.row4);
		this.container.appendChild(this.table);

		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'marginButton');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";

		this.container.appendChild(this.button);

	}

	calcAnswerNonguaranteed(beg, s1, s2, s3) {
		var answer1, answer2, answer3, temp;
		var flag = false;
		if ((s1 / 10) >= beg) {
			answer1 = (s1 / 10) - beg;
		} else {
			answer1 = 0;
			flag = true;
			temp = (s1 / 10) - beg;
		}
		if ((s2 / 10) >= beg) {
			if (flag == false) {
				answer2 = (s2 / 10) - beg;
			} else {
				if ((temp + (s2 / 10) - beg) < 0) {
					answer2 = 0;
					temp = temp + (s2 / 10) - beg;
				} else {
					answer2 = temp + (s2 / 10) - beg;
					flag = false;
				}
			}
		} else {
			answer2 = 0;
			if (flag == true) {
				temp = temp + ((s2 / 10) - beg);
			} else {
				temp = (s2 / 10) - beg;
			}
			flag = true;
		}
		if ((s3 / 10) >= beg) {
			if (flag == false) {
				answer3 = (s3 / 10) - beg;
			} else {
				if ((temp + (s3 / 10) - beg) < 0) {
					answer3 = 0;
				} else {
					answer3 = temp + (s3 / 10) - beg;
				}
			}
		} else {
			answer3 = 0;
		}

		return [answer1, answer2, answer3];
	}

	calcAnswerGuaranteed(beg, s1, s2, s3) {
		var answer1 = 0, answer2 = 0, answer3 = 0;

		if ((s1 / 10) > beg) {
			answer1 = (s1 / 10) - beg;
		}
		if ((s2 / 10) > beg) {
			answer2 = (s2 / 10) - beg;
		}
		if ((s3 / 10) > beg) {
			answer3 = (s3 / 10) - beg;
		}
		return [answer1, answer2, answer3];

	}

	checkAnswer() {
		if (this.variables.accountType == "NONGUARANTEED") {
			var answers = this.calcAnswerNonguaranteed(this.variables.begPayment, 
				this.variables.sale1, this.variables.sale2, this.variables.sale3);
		} else {
			var answers = this.calcAnswerGuaranteed(this.variables.begPayment, 
				this.variables.sale1, this.variables.sale2, this.variables.sale3);
		}

		var value = this.getValue1();
		var isCorrect = (value == answers[0]);
		if (isCorrect == true) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
		}
		else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(answers[0]);
		}

		value = this.getValue2();
		var isCorrect = (value == answers[1]);
		if (isCorrect == true) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
		}
		else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(answers[1]);
		}

		value = this.getValue3();
		var isCorrect = (value == answers[2]);
		if (isCorrect == true) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
		}
		else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(answers[2]);
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
}