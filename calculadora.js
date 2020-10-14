const calcular = () => {
	const op = document.getElementById('options').value
	const num1 =document.getElementById("num1").value;
    const num2 =document.getElementById("num2").value;	
	let total = 0;
	
	switch (op) {
		case 'soma':
			total = parseInt(num1) + parseInt(num2)
			document.getElementById('resultado').innerHTML = total
			break;

		case 'sub':
			total = num1 - num2
			document.getElementById('resultado').innerHTML = total
			break;

		case 'multi':
			total = num1 * num2
			document.getElementById('resultado').innerHTML = total
			break;

		case 'div':
			total = num1 / num2
			document.getElementById('resultado').innerHTML = total
			break;
		default:
			return false;
			break;
	}

}