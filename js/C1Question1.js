class C1Question1 {
	constructor() {

		this.value1 = 0;
		this.value2 = 0;
		this.value3 = 0;

		var salesPerformances = [1900000, 1920000, 1940000, 1970000, 2000000, 2010000, 2030000, 2060000, 2090000, 2100000];
		var baseSalaries = [170000, 174000, 177000, 180000, 185000, 188000, 190000, 195000, 196000, 200000];
		var productSales = [1400000, 1420000, 1450000, 1480000, 1500000, 1510000, 1530000, 1560000, 1590000, 1600000];
		var compensations = [90000, 92000, 95000, 100000, 102000, 105000, 110000, 112000, 115000, 120000];

		this.variables = {
			salesPerformance: salesPerformances[Math.floor(Math.random() * 10)],
			baseSalary: baseSalaries[Math.floor(Math.random() * 10)],
			productSale: productSales[Math.floor(Math.random() * 10)],
			compensation: compensations[Math.floor(Math.random() * 10)]
		}

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC1');
		this.container.className = "questionContainer";

		this.paragraph1 = document.createElement('p');
		this.paragraph1.className = "QC1-1-paragraph1";
		this.paragraph1.innerHTML = `Gordon is the top salesperson for the Cornell Company.  
		Last year, his sales performance totaled $${Number(this.variables.salesPerformance).toLocaleString()} (i.e., he sold this much product).  
		This performance earned him a total of $${Number(this.variables.baseSalary).toLocaleString()} of base salary, commission and quota-bonus compensation.`;

		this.paragraph2 = document.createElement('p');
		this.paragraph2.className = "QC1-1-paragraph2";
		this.paragraph2.innerHTML = `Gordon, however, is tired of being a salesperson.  So, he is applying 
		for the sales manager position, which currently pays $140,000.  He wants this job -- even though 
		he knows it will continue to pay the same amount, which will be a significant pay cut for him!`;

		this.paragraph3 = document.createElement('p');
		this.paragraph3.className = "QC1-1-paragraph3";
		this.paragraph3.innerHTML = `Let's say that the Cornell Company promotes Gordon to sales manager, and then 
		hires a new salesperson named Sally to replace him.  If Sally ends up selling $${Number(this.variables.productSale).toLocaleString()} of product, and earns 
		a total of $${Number(this.variables.compensation).toLocaleString()} in compensation, then what is the resulting impact on sales and compensation expenses for the company?`;

		this.container.appendChild(this.paragraph1);
		this.container.appendChild(this.paragraph2);
		this.container.appendChild(this.paragraph3);

		var inputDiv1 = document.createElement('div');
		inputDiv1.className = "QC1-1-inputDiv";
		this.paragraph4 = document.createElement('p');
		this.paragraph4.className = "QC1-1-inputParagraph";
		this.paragraph4.innerHTML = "Company sales will drop by: ";
		this.input1 = document.createElement('input');
		this.input1.className = "answer-input";
		this.input1.setAttribute('type', 'number');
		this.input1.setAttribute('placeholder', 'Answer in dollars');
		inputDiv1.appendChild(this.paragraph4);
		inputDiv1.appendChild(this.input1);
		this.container.appendChild(inputDiv1);

		var inputDiv2 = document.createElement('div');
		inputDiv2.className = "QC1-1-inputDiv";
		this.paragraph5 = document.createElement('p');
		this.paragraph5.className = "QC1-1-inputParagraph";
		this.paragraph5.innerHTML = "Company compensation expenses will drop by: ";
		this.input2 = document.createElement('input');
		this.input2.setAttribute('type', 'number');
		this.input2.className = "answer-input";
		this.input2.setAttribute('placeholder', 'Answer in dollars');
		inputDiv2.appendChild(this.paragraph5);
		inputDiv2.appendChild(this.input2);
		this.container.appendChild(inputDiv2);

		var inputDiv3 = document.createElement('div');
		inputDiv3.className = "QC1-1-inputDiv";
		this.paragraph6 = document.createElement('p');
		this.paragraph6.className = "QC1-1-inputParagraph";
		this.paragraph6.innerHTML = "Assuming that cost of goods sold is 65% of sales, then this will result in a drop of company net profit of: ";
		this.input3 = document.createElement('input');
		this.input3.setAttribute('type', 'number');
		this.input3.className = "answer-input";
		this.input3.setAttribute('placeholder', 'Answer in dollars');
		this.paragraph7 = document.createElement('p');
		this.paragraph7.className = "QC1-1-paragraph7";
		this.paragraph7.innerHTML = "HINT: Sales - Cost of Goods Sold - Other Expenses = Net Profit";
		inputDiv3.appendChild(this.paragraph6);
		inputDiv3.appendChild(this.input3);
		this.container.appendChild(inputDiv3);
		this.container.appendChild(this.paragraph7);
		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";
		this.container.appendChild(this.button);

		this.paragraph8 = document.createElement('p');
		this.paragraph8.className = "QC1-1-paragraph8";
		this.paragraph8.innerHTML = `This information comes from Case 1-3 The Cornell Company (at the end of chapter 1)`;
		this.container.appendChild(this.paragraph8)
	}

	calcAnswer(sp, bs, ps, c) {
		var answer1, answer2, answer3;

		answer1 = sp - ps;
		answer2 = bs - c;
		answer3 = (.35 * answer1) - answer2;

		return [answer1, answer2, answer3];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.salesPerformance, this.variables.baseSalary, this.variables.productSale, this.variables.compensation);

		if (this.getValue1() >= (answers[0] - .01) && this.getValue1() <= (answers[0] + .01)) {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'green';
			this.setValue1(Math.round(answers[0]));
		} else {
			this.input1.style.color = 'white';
			this.input1.style.backgroundColor = 'red';
			this.setValue1(Math.round(answers[0]));
		}

		if (this.getValue2() >= (answers[1] - .01) && this.getValue2() <= (answers[1] + .01)) {
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
}