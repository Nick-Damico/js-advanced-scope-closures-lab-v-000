function integerIfy(string) {
	return parseInt(string.split("th")[0]);
}

function produceDrivingRange(blocks) {
	return function tripRange(tripStart, tripEnd) {
		let totalBlocks = integerIfy(tripEnd) - integerIfy(tripStart);
		if (totalBlocks < blocks) {
			return `within range by ${blocks - totalBlocks}`;
		} else {
			return `${totalBlocks - blocks} blocks out of range`;
		}
	}
}

function produceTipCalculator(rate) {
	return function calculateTipTotal(cost) {
		return rate * cost;
	}
}

function createDriver() {
	var driverId = 0;
	return class Driver {
		constructor(name){
			this.name = name;
			this.id = ++driverId;
		}
	}
}