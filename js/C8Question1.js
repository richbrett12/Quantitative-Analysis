class C8Question1 {
	constructor() {

		this.value1 = 0;

		var array = ["The top three Fastenal salespeople that sell the most cordless nailers in the month of July", 
		"All Fastenal salespeople that sell 20 or more cordless nailers in the month of July"];

		this.index = Math.round(Math.random());
		this.variables = {
			question: array[this.index]
		}

		this.flag = false;

		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC8');
		this.container.className = "questionContainer";

		this.paragraph1 = document.createElement('p');
		this.paragraph1.className = "QC8-1-paragraph1";
		this.paragraph1.innerHTML = `Fastenal is an industrial distributor 
		that sells thousands of different products to business customers. 
		One popular product sold by Fastenal is the line of DeWalt power tools, 
		and a relatively new product in this category is the DeWalt cordless nailer. <br> <br>
		In order to motivate Fastenal's salespeople to introduce this new product to customers, 
		DeWalt has implemented a sales contest that pays out a SPIFF of $1,000 to <br> <br>
		-- ${this.variables.question} <br> <br>
		Below is a table of the 10 Fastenal sales representatives in the Chicago 
		district, along with their number of cordless nailers sold in July.  Given this 
		information, how much will DeWalt spend on this sales contest with this group of salespeople?`;
		this.container.appendChild(this.paragraph1);

		this.tableDiv = document.createElement('div');
		this.tableDiv.className = "QC8-1-tableDiv";

		this.table = document.createElement('table');
		this.table.className = "C8-table";
		this.row = document.createElement('tr');

		var option = document.createElement('td');
		option.innerHTML = "Name of <br> Salesperson";
		option.className = "C8-tableData";
		this.row.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "Number of DeWalt Cordless <br> Nailers sold in July";
		option.className = "C8-tableData";
		this.row.appendChild(option);
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Avery";
		option.className = "C8-tableData";
		this.row2.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "30";
		option.className = "C8-tableData";
		this.row2.appendChild(option);
		this.table.appendChild(this.row2);

		this.row3 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Bailey";
		option.className = "C8-tableData";
		this.row3.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "25";
		option.className = "C8-tableData";
		this.row3.appendChild(option);
		this.table.appendChild(this.row3);

		this.row4 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Casey";
		option.className = "C8-tableData";
		this.row4.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "24";
		option.className = "C8-tableData";
		this.row4.appendChild(option);
		this.table.appendChild(this.row4);

		this.row5 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Dusty";
		option.className = "C8-tableData";
		this.row5.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "23";
		option.className = "C8-tableData";
		this.row5.appendChild(option);
		this.table.appendChild(this.row5);

		this.row6 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Emery";
		option.className = "C8-tableData";
		this.row6.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "20";
		option.className = "C8-tableData";
		this.row6.appendChild(option);
		this.table.appendChild(this.row6);

		this.row7 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Frankie";
		option.className = "C8-tableData";
		this.row7.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "18";
		option.className = "C8-tableData";
		this.row7.appendChild(option);
		this.table.appendChild(this.row7);

		this.row8 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Gale";
		option.className = "C8-tableData";
		this.row8.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "10";
		option.className = "C8-tableData";
		this.row8.appendChild(option);
		this.table.appendChild(this.row8);

		this.row9 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Harley";
		option.className = "C8-tableData";
		this.row9.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "9";
		option.className = "C8-tableData";
		this.row9.appendChild(option);
		this.table.appendChild(this.row9);

		this.row10 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Ivory";
		option.className = "C8-tableData";
		this.row10.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "5";
		option.className = "C8-tableData";
		this.row10.appendChild(option);
		this.table.appendChild(this.row10);

		this.row11 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Jaime";
		option.className = "C8-tableData";
		this.row11.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "0";
		option.className = "C8-tableData";
		this.row11.appendChild(option);
		this.table.appendChild(this.row11);

		this.tableDiv.appendChild(this.table);


		this.table2 = document.createElement('table');
		this.table2.className = "C8-table2";
		this.row12 = document.createElement('tr');

		var option = document.createElement('td');
		option.innerHTML = "Is this an open-ended or closed-ended <br> contest?";
		option.className = "C8-tableData2";
		this.buttonsDiv = document.createElement('div');
		this.buttonsDiv.className = "QC8-1-buttonsDiv";
		this.button1 = document.createElement('button');
		this.button1.className = "QC8-1-buttons";
		this.button1.innerHTML = "Open";
		this.button1.onclick = this.button1Click.bind(this);
		this.button2 = document.createElement('button');
		this.button2.className = "QC8-1-buttons";
		this.button2.innerHTML = "Closed";
		this.button2.onclick = this.button2Click.bind(this);

		this.buttonsDiv.appendChild(this.button1);
		this.buttonsDiv.appendChild(this.button2);
		option.appendChild(this.buttonsDiv);
		this.row12.appendChild(option);
		this.table2.appendChild(this.row12);

		this.row13 = document.createElement('tr');

		var option = document.createElement('td');
		option.innerHTML = "Given this performance, how much will <br> Dewalt spend on this sales contest <br> with this group of salespeople?";
		option.className = "C8-tableData2";
		this.input = document.createElement('input');
		this.input.setAttribute('id', "QC8-1-input");
		this.input.type = "number";
		this.input.setAttribute('placeholder', "Answer in Dollars");
		this.input.className = "answer-input";
		option.appendChild(this.input);
		this.row13.appendChild(option);

		this.finalDiv = document.createElement('div');
		this.finalDiv.className = "QC8-1-finalDiv";
		this.button3 = document.createElement('button');
		this.button3.setAttribute('type', 'button');
		this.button3.className = "submit";
		this.button3.onclick = this.checkAnswer.bind(this);
		this.button3.innerHTML = "SUBMIT";
		this.finalDiv.appendChild(this.button3);
		
		this.table2.appendChild(this.row13);
		this.tableDiv.appendChild(this.table2);
		this.container.appendChild(this.tableDiv);
		this.container.appendChild(this.finalDiv);
	}

	calcAnswer() {
		var answer1, answer2;
		if (this.index == 0) {
			answer1 = "closed";
			answer2 = 3000;
		} else {
			answer1 = "open";
			answer2 = 5000;
		}

		return [answer1, answer2];
	}

	checkAnswer() {
		var answers = this.calcAnswer();
		if (this.flag == false && answers[0] == "closed") {
			this.button2.style.backgroundColor = 'green';
		} else if (this.flag == true && answers[0] == "open") {
			this.button1.style.backgroundColor = 'green';
		} else if (this.flag == false && answers[0] == "open") {
			this.button1.style.backgroundColor = 'red';
			this.button2.style.backgroundColor = 'grey';
		} else {
			this.button2.style.backgroundColor = 'red';
			this.button1.style.backgroundColor = 'grey';
		}

		if (answers[1] == this.getValue1()) {
			this.input.style.backgroundColor = 'green';
			this.input.style.color = 'white';
		} else {
			this.input.style.backgroundColor = 'red';
			this.input.style.color = 'white';
			this.setValue1(answers[1]);
		}

	}

	getValue1() {
		this.value1 = this.input.value;
		return this.value1;
	}

	setValue1(val) {
		this.input.value = val;
		this.value1 = this.input.value;
	}

	button1Click() {
		this.button1.style.backgroundColor = '#00BFFF';
		this.button2.style.backgroundColor = 'grey';
		this.flag = true;
	}

	button2Click() {
		this.button2.style.backgroundColor = '#00BFFF';
		this.button1.style.backgroundColor = 'grey';
		this.flag = false;
	}
}