var counter = (function(){

	var _number;

	//Приватные методы
	var _CheckPositive = function(x){

		if (x < 0 ){
			return false;
		} else {
			return true;
		}
	}

	var setNumber = function(x){

		if (_CheckPositive(x)){
		_number = x;
	   } else {
	   	console.log("Неверное значение");
	   }
	}
	 
	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}

	return{
		setNumber,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setNumber( -20);
counter.printCounter();
counter.setNumber(5);
counter.increaseCounter();
counter.printCounter();





  