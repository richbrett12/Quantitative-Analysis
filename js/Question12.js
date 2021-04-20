class Question12 {
	constructor() {

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;
		this.value4 = 0;

		var sales1 = [124000, 124300, 124600, 124800, 125000, 125100, 125400, 125500, 125900, 126000];
		var sales2 = [149000, 149200, 149400, 149600, 149800, 150000, 150100, 150500, 150900, 151000];
		var sales3 = [169000, 169200, 169400, 169600, 169800, 170000, 170300, 170500, 170900, 171000];
		var sales4 = [189000, 189300, 189500, 189900, 190000, 190200, 190400, 190600, 190800, 191000];
		var sales5 = [199000, 199300, 199500, 199900, 200000, 200200, 200400, 200600, 200800, 121000];
		var forecasts = [210000, 212000, 214000, 218000, 220000, 222000, 224000, 226000, 228000, 230000];
		var reps = [9, 9, 9, 10, 10, 10, 10, 11, 11, 11];
		var lConstants = [0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7];
		var periods = ["two-period", "three-period"];

		this.variables = {
			sale1: sales1[Math.floor(Math.random() * 10)],
			sale2: sales2[Math.floor(Math.random() * 10)],
			sale3: sales3[Math.floor(Math.random() * 10)],
			sale4: sales4[Math.floor(Math.random() * 10)],
			sale5: sales5[Math.floor(Math.random() * 10)],
			forecast: forecasts[Math.floor(Math.random() * 10)],
			rep: reps[Math.floor(Math.random() * 10)],
			lConstant: lConstants[Math.floor(Math.random() * 10)],
			period: periods[Math.round(Math.random())]
		}


		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC12');
		this.container.className = "Q12Container";
		this.leftContainer = document.createElement('div');
		this.leftContainer.setAttribute('id', 'Q12-left');
		this.rightContainer = document.createElement('div');
		this.rightContainer.setAttribute('id', 'Q12-right');
		this.container.appendChild(this.leftContainer);
		this.container.appendChild(this.rightContainer);

		var explanation = document.createElement('p');
		explanation.innerHTML = "XYZ Industries has been in business for 5 years, with the following data:";
		this.leftContainer.appendChild(explanation);

		this.table = document.createElement('table');
		this.table.setAttribute('id', 'Q12-table');
		this.row = document.createElement('tr');

		var headers = ["Year", "Sales", "# of Reps"];
		var option;
		for (var i in headers) {
			option = document.createElement('th');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row.appendChild(option);
		}
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');

		var headers = ["1", "$" + Number(this.variables.sale1).toLocaleString(), "5"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row2.appendChild(option);
		}
		this.table.appendChild(this.row2);

		this.row3 = document.createElement('tr');

		var headers = ["2", "$" + Number(this.variables.sale2).toLocaleString(), "6"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row3.appendChild(option);
		}
		this.table.appendChild(this.row3);

		this.row4 = document.createElement('tr');

		var headers = ["3", "$" + Number(this.variables.sale3).toLocaleString(), "7"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row4.appendChild(option);
		}
		this.table.appendChild(this.row4);

		this.row5 = document.createElement('tr');

		var headers = ["4", "$" + Number(this.variables.sale4).toLocaleString(), "8"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row5.appendChild(option);
		}
		this.table.appendChild(this.row5);

		this.row6 = document.createElement('tr');

		var headers = ["5", "$" + Number(this.variables.sale5).toLocaleString(), "8"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "Q12-tableData";
			this.row6.appendChild(option);
		}
		this.table.appendChild(this.row6);
		this.leftContainer.appendChild(this.table);

		var explanation = document.createElement('p');
		explanation.innerHTML = `The regression analysis, using years as the predictor variable, 
		calculated a constant of 110,000 and a slope of 19,000.`;
		this.leftContainer.appendChild(explanation);

		var explanation = document.createElement('p');
		explanation.innerHTML = `The regression analysis, using # of reps as the predictor variable, 
		calculated a constant of 10,000 and a slope of 23,088`;
		this.leftContainer.appendChild(explanation);

		var explanation = document.createElement('p');
		explanation.innerHTML = `The year 5 forecast was $${Number(this.variables.forecast).toLocaleString()}`;
		this.leftContainer.appendChild(explanation);

		var explanation = document.createElement('p');
		explanation.innerHTML = `XYZ's marketing plan calls for them to hire more 
		salespeople for next year, specifically they will have a total of ${this.variables.rep} reps in year 6.`;
		this.leftContainer.appendChild(explanation);

		this.question1 = document.createElement('p');
		this.question1.setAttribute('id', 'Q12-question1');
		this.question1.innerHTML = `A. Use exponential smoothing, with L=${this.variables.lConstant}, to forecast XYZ's year 6 sales.`;
		this.rightContainer.appendChild(this.question1);
		this.input1 = document.createElement('input');
		this.input1.setAttribute('type', 'number');
		this.rightContainer.appendChild(this.input1);

		this.question2 = document.createElement('p');
		this.question2.setAttribute('id', 'Q12-question2');
		this.question2.innerHTML = `B. Use a ${this.variables.period} moving average to forecast XYZ's year 6 sales.`;
		this.rightContainer.appendChild(this.question2);
		this.input2 = document.createElement('input');
		this.input2.setAttribute('type', 'number');
		this.rightContainer.appendChild(this.input2);

		this.question3 = document.createElement('p');
		this.question3.setAttribute('id', 'Q12-question3');
		this.question3.innerHTML = "C. Forecast year 6 sales using the regression model where years is the predictor variable.";
		this.rightContainer.appendChild(this.question3);
		this.input3 = document.createElement('input');
		this.input3.setAttribute('type', 'number');
		this.rightContainer.appendChild(this.input3);

		this.question4 = document.createElement('p');
		this.question4.setAttribute('id', 'Q12-question4');
		this.question4.innerHTML = "D. Forecast year 6 sales using the regression model where # of reps is the predictor variable.";
		this.rightContainer.appendChild(this.question4);
		this.input4 = document.createElement('input');
		this.input4.setAttribute('type', 'number');
		this.rightContainer.appendChild(this.input4);

		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'Q12-submit');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT"
		this.rightContainer.appendChild(this.button);
	}

	calcAnswer(L, s3, s4, s5, f, r) {
		var answer1, answer2, answer3, answer4;
		answer1 = ((L * s5) + (1 - L) * f);
		if (this.variables.period == "three-period") {
			answer2 = Math.round((s3 + s4 + s5) / 3);
		} else {
			answer2 = Math.round((s4 + s5) / 2);
		}
		answer3 = (110000 + 19000 * 6);
		answer4 = (10000 + 23088 * r);

		return [answer1, answer2, answer3, answer4];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.lConstant, this.variables.sale3, 
			this.variables.sale4, this.variables.sale5, this.variables.forecast, this.variables.rep);

		var isCorrect = (this.getValue1() <= (answers[0] + .5) && this.getValue1() >= (answers[0] - .5));
		if (isCorrect) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
			this.setValue1(Math.round(answers[0]));
		}
		else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(Math.round(answers[0]));
		}

		var isCorrect = (this.getValue2() <= (answers[1] + .5) && this.getValue2() >= (answers[1] - .5));
		if (isCorrect) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(Math.round(answers[1]));
		}
		else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(Math.round(answers[1]));
		}

		var isCorrect = (this.getValue3() <= (answers[2] + .5) && this.getValue3() >= (answers[2] - .5));
		if (isCorrect) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.setValue3(Math.round(answers[2]));
		}
		else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(Math.round(answers[2]));
		}

		var isCorrect = (this.getValue4() <= (answers[3] + .5) && this.getValue4() >= (answers[3] - .5));
		if (isCorrect) {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue4(Math.round(answers[3]));
		}
		else {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue4(Math.round(answers[3]));
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


}