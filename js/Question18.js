class Question18 extends AbstractQuestionTwo {
	constructor() {

		var eastSales = [16, 18, 20, 10, 12, 14, 7,  8,  9,  15];
		var westSales = [8,  10, 9,  14, 16, 10, 18, 12, 13, 11];
		var eastReps =  [7,  8,  9,  5,  6,  6,  3,  3,  4,  8];
		var westReps =  [3,  3,  4,  7,  8,  4,  9,  5,  6,  5];
		var gloveSales =[18, 16, 17, 14, 12, 8,  6,  14, 15, 9];
		var hatSales =  [6,  12, 12, 10, 16, 16, 19, 6,  7,  17];

		var rsalaries = [60000,  60000,  60000,  80000,  80000,  75000,  75000,  75000,  65000,  65000];
		var psalaries = [200000, 300000, 250000, 250000, 250000, 200000, 200000, 250000, 300000, 200000];
		var gloveAds =   [300000, 400000, 250000, 450000, 200000, 300000, 450000, 200000, 400000, 300000];
		var hatAds =    [100000, 200000, 100000, 200000, 150000, 100000, 250000, 150000, 200000, 100000];
		var percents =  [70,     70,     70,     75,     75,     75,     75,     80,     80,     80];

		super();

		var index = Math.floor(Math.random() * 10);
		var index2 = Math.floor(Math.random() * 10);
		this.variables = {
			eastSale: eastSales[index2],
			westSale: westSales[index2],
			eastRep: eastReps[index2],
			westRep: westReps[index2],
			gloveSale: gloveSales[index2],
			hatSale: hatSales[index2],
			rsalary: rsalaries[index],
			psalary: psalaries[index],
			gloveAd: gloveAds[index],
			hatAd: hatAds[index],
			percent: percents[index]
		}

		this.value4 = 0;

		this.container.setAttribute('id', 'question-containerC15');
		this.explanation.setAttribute('id', 'Q18-paragraph1');
		this.explanation.innerHTML =`Gloves 'n' Hats is a $${this.variables.eastSale + this.variables.westSale} million dollar company with 1 president 
		and ${this.variables.eastRep + this.variables.westRep} sales reps in these two territories: Eastern U.S. ($${this.variables.eastSale} million in sales, ${this.variables.eastRep} reps), 
		Western U.S. ($${this.variables.westSale} million in sales, ${this.variables.westRep} reps).`;
		this.explanation2 = document.createElement('div');
		this.explanation2.className = "Q18-paragraph2";
		this.explanation2.innerHTML = `The company sells two different products (and each rep sells both): <br>
		- Gloves ($${this.variables.gloveSale} million in sales)<br>
		- Hats ($${this.variables.hatSale} million in sales).`;
		this.container.appendChild(this.explanation2);
		this.explanation3 = document.createElement('div');
		this.explanation3.className = "Q18-paragraph3";
		this.explanation3.innerHTML = `And you can assume that the following list contains information on all costs for this company: `
		this.explanation4 = document.createElement('div');
		this.explanation4.className = "Q18-paragraph4";
		this.explanation4.innerHTML = `
				Each rep is paid a straight salary of $${Number(this.variables.rsalary).toLocaleString()} <br>
				The company president is paid a salary of $${Number(this.variables.psalary).toLocaleString()} <br>
				They recently ran a national TV ad for gloves, which cost $${Number(this.variables.gloveAd).toLocaleString()} <br>
				And they separately they ran a national TV ad for hats, which cost $${Number(this.variables.hatAd).toLocaleString()} <br>
				Cost of goods sold is exactly ${this.variables.percent}% of sales`;
		this.explanation5 = document.createElement('div');
		this.explanation5.className = 'Q18-paragraph5';
		this.explanation5.innerHTML = '1)  Based on the information above...';
		this.container.appendChild(this.explanation3);	
		this.container.appendChild(this.explanation4);
		this.container.appendChild(this.explanation5);

		this.questionDiv4 = document.createElement('div');
		this.questionDiv4.className = "question-div";
		this.questionDiv4.setAttribute('id', 'Q18-questionDiv');
		this.question4 = document.createElement('p');
		this.question4.className = "question-paragraph";
		this.input4 = document.createElement('input');
		this.input4.className = "answer-input";
		this.input4.type = "number";
		this.questionDiv4.appendChild(this.question4);
		this.questionDiv4.appendChild(this.input4);
		this.questionDivContainer.appendChild(this.questionDiv4);

		this.question1.innerHTML = `a. What is the contribution margin generated by the Eastern U.S. territory?`;
		this.question2.innerHTML = `b. What is the contribution margin generated by the Western U.S. territory?`;
		this.question3.innerHTML = `c. What is the contribution margin generated by gloves?`;
		this.question4.innerHTML = `d. What is the contribution margin generated by hats?`;
		this.input1.setAttribute('placeholder', 'Answer in dollars');
		this.input2.setAttribute('placeholder', 'Answer in dollars');
		this.input3.setAttribute('placeholder', 'Answer in dollars');
		this.input4.setAttribute('placeholder', 'Answer in dollars');

	}

	calcAnswer(p, ps, rs, hat, glove, eSales, wSales, eReps, wReps, gSales, hSales) {
		var answer1, answer2, answer3, answer4;

		answer1 = (((100 - p)/100) * (eSales * 1000000)) - (rs * eReps);
		answer2 = (((100 - p)/100) * (wSales * 1000000)) - (rs * wReps);
		answer3 = (((100 - p)/100) * (gSales * 1000000)) - (glove);
		answer4 = (((100 - p)/100) * (hSales * 1000000)) - (hat);

		return [answer1, answer2, answer3, answer4];
	}

	checkAnswer() {
		var answers = this.calcAnswer(this.variables.percent, this.variables.psalary, 
			this.variables.rsalary, this.variables.hatAd, this.variables.gloveAd, this.variables.eastSale, 
			this.variables.westSale, this.variables.eastRep, this.variables.westRep, this.variables.gloveSale, this.variables.hatSale);

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

		if (this.getValue4() >= (answers[3] - .01) && this.getValue4() <= (answers[3] + .01)) {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'green';
			this.setValue4(Math.round(answers[3]));
		} else {
			this.input4.style.color = 'white';
			this.input4.style.backgroundColor = 'red';
			this.setValue4(Math.round(answers[3]));
		}

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