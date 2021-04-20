 class C11Question1 {
 	constructor() {

 		this.buttonDiv = document.createElement('div');
 		this.buttonDiv.className = "C11-buttonDiv";
 		this.button1 = document.createElement('button');
 		this.button1.innerHTML = "1";
 		this.button1.className = "C11-button";
 		this.buttonDiv.appendChild(this.button1);
 		this.button2 = document.createElement('button');
 		this.button2.innerHTML = "2";
 		this.button2.className = "C11-button";
 		this.buttonDiv.appendChild(this.button2);
 		this.button3 = document.createElement('button');
 		this.button3.innerHTML = "3";
 		this.button3.className = "C11-button";
 		this.buttonDiv.appendChild(this.button3);
 		this.button4 = document.createElement('button');
 		this.button4.innerHTML = "4";
 		this.button4.className = "C11-button";
 		this.buttonDiv.appendChild(this.button4);
 		this.button5 = document.createElement('button');
 		this.button5.innerHTML = "5";
 		this.button5.className = "C11-button";
 		this.buttonDiv.appendChild(this.button5);

 		this.container = document.createElement('div');
		this.container.setAttribute('id', 'question-containerC11');
		this.container.className = "questionContainer";

		this.paragraph1 = document.createElement('p');
		this.paragraph1.className = "QC11-1-paragraph1";
		this.paragraph1.innerHTML = `Think back on different jobs that you've had and 
		recall your best boss and your worst boss. Then complete the assessment below to evaluate their leadership styles.`;
		this.container.appendChild(this.paragraph1);

		this.tableDiv = document.createElement('div');
		this.tableDiv.className = "QC11-1-tableDiv";

		this.table = document.createElement('table');
		this.table.className = "C11-table";
		this.row = document.createElement('tr');

		var option = document.createElement('td');
		option.innerHTML = "As a supervisor of me (and others), this person:  ";
		option.className = "C11-tableData1";
		this.row.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "My best boss";
		option.className = "C11-tableData";
		this.row.appendChild(option);
		option = document.createElement('td');
		option.innerHTML = "My worst boss";
		option.className = "C11-tableData";
		this.row.appendChild(option);
		this.table.appendChild(this.row);

		this.row2 = document.createElement('tr');

		option = document.createElement('td');
		option.innerHTML = "1)... behaved in a manner that was thoughtful of my personal feelings";
		option.className = "C11-tableData1";
		this.row2.appendChild(option);
		option = document.createElement('td');
		option.appendChild(this.buttonDiv);
		option.className = "C11-tableData";
		this.row2.appendChild(option);
		option = document.createElement('td');
		option.appendChild(this.buttonDiv);
		option.className = "C11-tableData";
		this.row2.appendChild(option);
		this.table.appendChild(this.row2);


		this.tableDiv.appendChild(this.table);
		this.container.appendChild(this.tableDiv);
 	}
 }