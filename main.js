//variables

var num_one, num_two, answer, add, subtract;
var num_one_value, num_two_value, answer_value;
var multiply, divide;

num_one = document.getElementById('num_one');
num_two = document.getElementById('num_two');
answer = document.getElementById('answer');
add = document.getElementById('add');
subtract = document.getElementById('subtract');
multiply = document.getElementById('multiply');
divide = document.getElementById('divide');



	add.onclick = function(){
		num_one_value = num_one.value;
		num_two_value = num_two.value;
		num_one_value = Number(num_one_value);
		num_two_value = Number(num_two_value);
		if (isNaN(num_one_value)){
		console.log('not a number')

		} else {answer_value = num_one_value + num_two_value;
	  answer.innerHTML = answer_value;
	  }
	}

	subtract.onclick = function(){
		num_one_value = num_one.value;
		num_two_value = num_two.value;
		num_one_value = Number(num_one_value);
		num_two_value = Number(num_two_value);
		answer_value = num_one_value - num_two_value;
	  	answer.innerHTML = answer_value;
		}

	multiply.onclick = function(){
		num_one_value = num_one.value;
		num_two_value = num_two.value;
		num_one_value = Number(num_one_value);
		num_two_value = Number(num_two_value);
		answer_value = num_one_value * num_two_value;
	  	answer.innerHTML = answer_value;
		}

	divide.onclick = function(){
		num_one_value = num_one.value;
		num_two_value = num_two.value;
		num_one_value = Number(num_one_value);
		num_two_value = Number(num_two_value);
		answer_value = num_one_value / num_two_value;
	  	answer.innerHTML = answer_value;
		}