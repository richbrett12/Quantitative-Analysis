class C4Question1 extends AbstractQuestion {
	constructor() {

		var cManagers = [6, 6, 6, 7, 7, 7, 7, 8, 8, 8];
		var nycManagers = [12, 12, 12, 13, 13, 13, 13, 14, 14, 14];
		var laManagers = [9, 9, 9, 10, 10, 10, 10, 11, 11, 11];
		var dManagers = [7, 7, 7, 8, 8, 8, 8, 9, 9, 9];

		super();

		this.variables = {
			cManager: cManagers[Math.floor(Math.random() * 10)],
			nycManager: nycManagers[Math.floor(Math.random() * 10)],
			laManager: laManagers[Math.floor(Math.random() * 10)],
			dManager: dManagers[Math.floor(Math.random() * 10)]
		}

		this.inputDiv.setAttribute('id', 'QC4-1-inputDiv');
		this.inputDiv.remove();

		this.container.setAttribute('id', 'question-containerC4');
		this.question.innerHTML = `Big Brands has a total of four sales territories: 
		Chicago, New York City, Los Angeles, and Dallas.  Anita manages the Chicago territory, 
		which has ${this.variables.cManager} account managers.  Benny manages New York City, 
		which has ${this.variables.nycManager} account managers. Carla manages Los Angeles, which 
		has ${this.variables.laManager} account managers.  Daniel manages Dallas, which has ${this.variables.dManager} account managers.`;

		this.input.setAttribute('placeholder', "");
		this.paragraph = document.createElement('p');
		this.paragraph.className = "QC4-1-paragraph";
		this.paragraph.innerHTML = `What is the span of control at Big Brands?`;
		this.container.appendChild(this.paragraph);
		this.paragraph.appendChild(this.inputDiv);


	}

	calcAnswer(c, nyc, la, d) {
		return (c + nyc + la + d) / 4;
	}

	checkAnswer(){
		var answer = this.calcAnswer(this.variables.cManager, this.variables.nycManager, this.variables.laManager, this.variables.dManager);

		if (this.getValue() >= (answer - .05) && this.getValue() <= (answer + .05)) {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'green';
			this.setValue((answer).toFixed(2));
		} else {
			this.input.style.color = 'white';
			this.input.style.backgroundColor = 'red';
			this.setValue((answer).toFixed(2));
		}
	}
}