class Question7 extends AbstractQuestion {
	constructor() {

		var salaries = [30, 32, 34, 36, 38, 40, 42, 44, 46, 48];
		var commissions = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
		var bonuses = [8, 8, 10, 10, 12, 12, 14, 14, 16, 16];
		var quotas = [400, 425, 450, 475, 500, 500, 525, 550, 575, 600];
		var hatSales = [500, 525, 550, 575, 600, 625, 650, 675, 700, 725];
		var gloveSales = [400, 400, 450, 450, 500, 500, 550, 550, 600, 600];

		super();

		this.container.setAttribute('id', 'question-containerC10');

		this.variables = {
			salary: salaries[Math.floor(Math.random() * 10)],
			commission: commissions[Math.floor(Math.random() * 10)],
			bonus: bonuses[Math.floor(Math.random() * 10)],
			quota: quotas[Math.floor(Math.random() * 10)],
			hatSale: hatSales[Math.floor(Math.random() * 10)],
			gloveSale: gloveSales[Math.floor(Math.random() * 10)]
		}

		this.question.innerHTML = `Bob works for a company that sells hats and gloves.
			In addition to Bob's combination compensation plan that includes an annual 
			$${this.variables.salary},000 base salary and ${this.variables.commission}% 
			commission on dollar sales, he also gets a $${this.variables.bonus},000 bonus 
			if he achieves his quota of selling $${this.variables.quota},000 in gloves. 
			Given his following performance: <br> <br>

			Total hat sales: $${this.variables.hatSale},000 <br>
			Total glove sales: $${this.variables.gloveSale},000 <br> <br>

			How much would his total annual compensation be?`;
	}

	calcAnswer(sal, comm, bonus, quota, hats, gloves) {
		var answer = (sal * 1000) + ((comm / 100) * (hats + gloves) * 1000);
		if (gloves >= quota) {
			answer = answer + (bonus * 1000);
		}

		return answer;
	}

	checkAnswer() {
		var answer = this.calcAnswer(this.variables.salary, this.variables.commission, this.variables.bonus, 
			this.variables.quota, this.variables.hatSale, this.variables.gloveSale);

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