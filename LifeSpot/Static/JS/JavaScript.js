let age = prompt("Ввведите свой возраст: ")
if (age < 18) {
	alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
	window.location.href = "http://www.google.com"
}
else {
	alert('Приветствуем на LifeSpot ' + new Date().toLocaleString())
}