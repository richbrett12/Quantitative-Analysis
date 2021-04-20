class C7Question1 {
	constructor() {

		this.value2 = 0;
		this.value3 = 0;
		this.value4 = 0;
		this.value5 = 0;
		this.value6 = 0;
		this.value7 = 0;
		this.value8 = 0;

		this.container = document.createElement('div');
		this.container.className = "QC7-1-tableContainer";
		this.container.setAttribute('id', 'question-containerC7');
		this.explanation = document.createElement('p');
		this.explanation.innerHTML = `Reference Case 7-1 Sunrise Cleaners, and complete the table 
		below to calculate the expected profit/loss for a training session with 8 new hires being 
		led by a staff trainer. This is option #1 in the case.`
		this.explanation.className = "explanation";
		this.container.appendChild(this.explanation);
		this.table = document.createElement('table');
		this.table.className = "C7-table";
		this.row = document.createElement('tr');

		var option = document.createElement('td');
		option.innerHTML = "Increase in annual sales revenue <br>(+5% for 8 trained salespeople)";
		option.className = "C7-tableData";
		this.row.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "$400,000";
		option.className = "C7-tableData2";
		this.row.appendChild(option);
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Cost of goods sold <br>(associated with sales increase)";
		option.className = "C7-tableData";
		this.row2.appendChild(option);
		this.input2 = document.createElement('input');
		this.input2.className = "C7-tableInput";
		this.input2.type = "number";
		this.input2.setAttribute('placeholder', '--');
		this.input2.onkeyup = this.addToSum.bind(this);
		this.row2.appendChild(this.input2);
		this.table.appendChild(this.row2);

		this.row3 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Cost to pay staff trainer to train <br>(1/2 of annual salary)";
		option.className = "C7-tableData";
		this.row3.appendChild(option);
		this.input3 = document.createElement('input');
		this.input3.className = "C7-tableInput";
		this.input3.type = "number";
		this.input3.setAttribute('placeholder', '--');
		this.input3.onkeyup = this.addToSum.bind(this);
		this.row3.appendChild(this.input3);
		this.table.appendChild(this.row3);

		this.row4 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Travel costs";
		option.className = "C7-tableData";
		this.row4.appendChild(option);
		this.input4 = document.createElement('input');
		this.input4.className = "C7-tableInput";
		this.input4.type = "number";
		this.input4.setAttribute('placeholder', '--');
		this.input4.onkeyup = this.addToSum.bind(this);
		this.row4.appendChild(this.input4);
		this.table.appendChild(this.row4);

		this.row5 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Lodging & meals";
		option.className = "C7-tableData";
		this.row5.appendChild(option);
		this.input5 = document.createElement('input');
		this.input5.className = "C7-tableInput";
		this.input5.type = "number";
		this.input5.setAttribute('placeholder', '--');
		this.input5.onkeyup = this.addToSum.bind(this);
		this.row5.appendChild(this.input5);
		this.table.appendChild(this.row5);

		this.row6 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "Training materials";
		option.className = "C7-tableData";
		this.row6.appendChild(option);
		this.input6 = document.createElement('input');
		this.input6.className = "C7-tableInput";
		this.input6.type = "number";
		this.input6.setAttribute('placeholder', '--');
		this.input6.onkeyup = this.addToSum.bind(this);
		this.row6.appendChild(this.input6);
		this.table.appendChild(this.row6);

		this.row7 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "A/V equipment";
		option.className = "C7-tableData";
		this.row7.appendChild(option);
		this.input7 = document.createElement('input');
		this.input7.className = "C7-tableInput";
		this.input7.type = "number";
		this.input7.setAttribute('placeholder', '--');
		this.input7.onkeyup = this.addToSum.bind(this);
		this.row7.appendChild(this.input7);
		this.table.appendChild(this.row7);

		this.row8 = document.createElement('tr');
		option = document.createElement('td');
		option.innerHTML = "PROFIT";
		option.className = "C7-tableData";
		this.row8.appendChild(option);
		this.input8 = document.createElement('input');
		this.input8.className = "C7-tableInput";
		this.setValue8("$400,000");
		this.input8.readOnly = true;
		this.row8.appendChild(this.input8);
		this.table.appendChild(this.row8);

		this.container.appendChild(this.table);

		this.button = document.createElement('button');
		this.button.setAttribute('type', 'button');
		this.button.className = "submit";
		this.button.setAttribute('id', 'marginButton');
		this.button.onclick = this.checkAnswer.bind(this);
		this.button.innerHTML = "SUBMIT";
		this.container.appendChild(this.button);
	}

	calcAnswer() {
		return [200000, 35000, 2000, 8000, 800, 500];
	}

	checkAnswer() {
		var answers = this.calcAnswer();

		if (this.getValue2() == answers[0]) {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'green';
			this.setValue2(answers[0]);
		} else {
			this.input2.style.color = 'white';
			this.input2.style.backgroundColor = 'red';
			this.setValue2(answers[0]);
		}

		if (this.getValue3() == answers[1]) {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'green';
			this.setValue3(answers[1]);
		} else {
			this.input3.style.color = 'white';
			this.input3.style.backgroundColor = 'red';
			this.setValue3(answers[1]);
		}

		if (this.getValue4() == answers[2]) {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue4(answers[2]);
		} else {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue4(answers[2]);
		}

		if (this.getValue5() == answers[3]) {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'green';
			this.setValue5(answers[3]);
		} else {
			this.input5.style.color = 'white';
			this.input5.style.backgroundColor = 'red';
			this.setValue5(answers[3]);
		}

		if (this.getValue6() == answers[4]) {
			this.input6.style.color = 'white';
			this.input6.style.backgroundColor = 'green';
			this.setValue6(answers[4]);
		} else {
			this.input6.style.color = 'white';
			this.input6.style.backgroundColor = 'red';
			this.setValue6(answers[4]);
		}

		if (this.getValue7() == answers[5]) {
			this.input7.style.color = 'white';
			this.input7.style.backgroundColor = 'green';
			this.setValue7(answers[5]);
		} else {
			this.input7.style.color = 'white';
			this.input7.style.backgroundColor = 'red';
			this.setValue7(answers[5]);
		}

		if (this.getValue8() == "$153,700") {
			this.input8.style.color = 'white';
			this.input8.style.backgroundColor = 'green';
		} else {
			this.input8.style.color = 'white';
			this.input8.style.backgroundColor = 'red';
			this.setValue8("$153,700");
		}
	}

	addToSum() {
		var val;
		if (this.getValue2() != "") {
			var val1 = this.getValue2();
		} else {
			var val1 = 0;
		}
		if (this.getValue3() != "") {
			var val2 = this.getValue3();
		} else {
			var val2 = 0;
		}
		if (this.getValue4() != "") {
			var val3 = this.getValue4();
		} else {
			var val3 = 0;
		}
		if (this.getValue5() != "") {
			var val4 = this.getValue5();
		} else {
			var val4 = 0;
		}
		if (this.getValue6() != "") {
			var val5 = this.getValue6();
		} else {
			var val5 = 0;
		}
		if (this.getValue7() != "") {
			var val6 = this.getValue7();
		} else {
			var val6 = 0;
		}

		val = 400000 - (parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6));
		this.setValue8("$" + Number(val).toLocaleString());
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

	getValue6() {
		this.value6 = this.input6.value;
		return this.value6;
	}

	setValue6(val) {
		this.input6.value = val;
		this.value6 = this.input6.value;
	}

	getValue7() {
		this.value7 = this.input7.value;
		return this.value7;
	}

	setValue7(val) {
		this.input7.value = val;
		this.value7 = this.input7.value;
	}

	getValue8() {
		this.value8 = this.input8.value;
		return this.value8;
	}

	setValue8(val) {
		this.input8.value = val;
		this.value8 = this.input8.value;
	}
}