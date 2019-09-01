var repforeach = '', number, decimal, result, operator, unlockSquareRoot = true;
var textview = document.forms['inputForm']['textview'];

function insertNum(num) {
	if (result) {
		repforeach = num;
		textview.value = repforeach;
		number = true;
		result = false;
	}
	else {
		repforeach = textview.value + num;
		textview.value = repforeach;
		number = true;
	}
	if (operator) decimal = false;
	   SquareRoot('a');
}

function insertOp(op) {
	textview.value = repforeach + op;
	operator = true;
	result = false;
	unlockSquareRoot = false;
	SquareRoot('a');
}

function insertDec() {
	if (number && !decimal) {
		textview.value = repforeach+ '.';
		decimal = true;
		operator = false;
	}
}

function equalTo() {
	if (repforeach) {
		repforeach = eval(repforeach);
		textview.value = repforeach;
		result = true;
		decimal = false;
		number = false;
		unlockSquareRoot = true;
		SquareRoot('a');
	}
}

function clean() {
	repforeach = '';
	textview.value = repforeach;
	decimal = false;
	if (repforeach=='') {
		document.getElementById('root').disabled = true;
		document.getElementById('square').disabled = true;

	}

}

function back() {
	repforeach = textview.value;
	repforeach = repforeach.substring(0, repforeach.length -1);
	textview.value = repforeach;
}

function SquareRoot(x) {
	if (x=='root') {
		repforeach = Math.sqrt(repforeach);
		textview.value = repforeach;
	}else if (x=='square') {
		repforeach = repforeach*repforeach;
		textview.value = repforeach;
	}else if (x=='a' && unlockSquareRoot) {
		document.getElementById('root').disabled = false;
		document.getElementById('square').disabled = false;
		
	}else if (!unlockSquareRoot) {
		document.getElementById('root').disabled = true;
		document.getElementById('square').disabled = true;
		
	}
}