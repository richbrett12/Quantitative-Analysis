class Question9 extends AbstractQuestion {
	constructor() {

		var sales1 = [75, 78, 82, 86, 89, 93, 95, 98, 101, 104];
		var sales2 = [63, 65, 68, 70, 72, 75, 78, 81, 83, 85];
		var sales3 = [71, 75, 76, 80, 82, 84, 87, 90, 91, 92];
		var sales4 = [67, 69, 73, 74, 77, 79, 82, 88, 96, 99];
		var periods = ["Two-period", "Three-period"];

		super();

		this.variables = {
			sale1: sales1[Math.floor(Math.random() * 10)],
			sale2: sales2[Math.floor(Math.random() * 10)],
			sale3: sales3[Math.floor(Math.random() * 10)],
			sale4: sales4[Math.floor(Math.random() * 10)],
			period: periods[Math.round(Math.random())]
		}

		this.container.setAttribute('id', 'question-containerC12');
		this.question.innerHTML = `Based off of this company's actual sales, forecast
			the sales for the month of June using a ${this.variables.period} moving average. Round 
			answer to nearest whole dollar.`;
		
		this.container2 = document.createElement('div');
		this.container2.setAttribute('id', 'Q9-container2');
		this.table = document.createElement('table');
		this.table.className = "Q9-table";
		this.row = document.createElement('tr');

		var headers = ["Month", "2/2017", "3/2017", "4/2017", "5/2017", "6/2017"];
		var option;
		for (var i in headers) {
			option = document.createElement('th');
			option.innerHTML = headers[i];
			option.className = "row1dataQ9";
			this.row.appendChild(option);
		}
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');

		var headers = ["Actual $ Sales", "$" + this.variables.sale1 + ",000", "$" + this.variables.sale2 + ",000", "$" + this.variables.sale3 + ",000", "$" + this.variables.sale4 + ",000", "?"];
		var option;
		for (var i in headers) {
			option = document.createElement('td');
			option.innerHTML = headers[i];
			option.className = "row2dataQ9";
			this.row2.appendChild(option);
		}

		this.table.appendChild(this.row2);
		this.container2.appendChild(this.table);
		this.container.appendChild(this.container2);
	}

	calcAnswer(s2, s3, s4) {
		if (this.variables.period == "Three-period") {
			return ((s2 + s3 + s4) / 3) * 1000;
		} else {
			return ((s3 + s4) / 2) * 1000;
		}
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.sale2, this.variables.sale3, this.variables.sale4);

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


}