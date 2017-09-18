class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.min=min;
		this.max=max;
    }

    guess() {
		var result = this.max + this.min;
		if(result%2==0)
			return result/2;
		else
			return (result/2 + 0.5);
    }

    lower() {
		var result = this.max + this.min;
		if(result%2==0)
			this.max=result/2;
		else
			this.max = result/2 + 0.5;

    }

    greater() {
		var result = this.max + this.min;
		if(result%2==0)
			this.min=result/2;
		else
			this.min = result/2 + 0.5;
    }
}

module.exports = GuessingGame;
