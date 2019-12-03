$(function () {

	// функция для подсчета суммы input
	const countInputSum = (cssClass) => {
		// console.log($(cssClass));
		let inputSum = 0;
		$(cssClass).each(function () {
			inputSum = inputSum + Number($(this)[0].value);
		});
		return inputSum;
	};

	// функция для подсчета колтчества ненулевых (активных) input
	const countActiveAmount = (cssClassA) => {
		let activeAmount = 0;
		$(cssClassA).each(function () {
			if (Number($(this)[0].value) !== 0) {
				activeAmount = activeAmount + 1;
			}
		});
		return activeAmount;
	};

	// Массивы со строковыми значениями и id инпута для .rooms-amount
	let itemTextArr = [];
	$('.rooms-amount_item-text').each(function () {
		itemTextArr.push($(this).html())
	});

	let itemIdtArr = [];
	$('.directly-to-text-area').each(function () {
		itemIdtArr.push($(this).attr('id'))
	});

	// Функция для составления строки-результата для прямого вывода .rooms-amount
	const makeDirectlyTextConcat = (cssClassD) => {
		let directlyTextConcat = '';
		$(cssClassD).each(function () {
			for (let index in itemIdtArr) {
				if ($(this).attr('id') === itemIdtArr[index] && Number($(this)[0].value) !== 0) {
					if (countActiveAmount('.directly-to-text-area') > 2 && itemIdtArr.length - 1 === Number(index)) {
						directlyTextConcat = directlyTextConcat + "...";
					} else {
						directlyTextConcat = directlyTextConcat + $(this)[0].value + ' ' + itemTextArr[index] + ", ";
					}
				}
			}
		});
		return directlyTextConcat;
	};

	// Главная функция дающая функционировать счетчикам
	const dropdownItemCounter = (inputFields) => {
		const fieldCount = (counterField) => {

			const
				minValue = counterField.data('min') < 0 ? 0 : counterField.data('min'), // Мин. значение          
				maxValue = counterField.data('max') || false; // Макс. значение 
			let
				dec = counterField.prev('.counter__buton_dec'), // Кнопка уменьшения кол-ва
				inc = counterField.next('.counter__buton_inc'); // Кнопка увеличения кол-ва


			const init = (counterField) => {

				// Уменьшим значение
				const decrement = () => {
					let value = parseInt(counterField[0].value);
					value -= 1;

					if (value >= minValue) {
						$(counterField[0]).attr('value', `${value}`);
					}

					// Задаем цвет кнопки для минимального значения
					if (counterField[0].value === String(minValue)) {
						dec.css({ 'border-color': 'rgba(31, 32, 65, 0.25)', 'color': 'rgba(31, 32, 65, 0.25)' });
					}

					// Прямое отображение текста для .rooms-amount
					if (countInputSum('.directly-to-text-area') === 0) {
						$('.rooms-amount_default-text').html(`Количество комнат`);
					} else if ($(counterField[0]).hasClass('directly-to-text-area')) {
						$('.rooms-amount_default-text').html(`${makeDirectlyTextConcat('.directly-to-text-area')}`);
					}
				};

				// Увеличим значение
				const increment = (ev) => {
					let value = parseInt(counterField[0].value);
					value += 1;

					console.log($(ev.currentTarget.parentElement.parentElement.parentElement).find('.results-clear-button'));

					if (!maxValue || value <= maxValue) {
						$(counterField[0]).attr('value', `${value}`);
					}

					// Задаес цвет кнопки для минимального и макс значения
					dec.css({ 'border-color': 'rgba(31, 32, 65, 0.5)', 'color': 'rgba(31, 32, 65, 0.5)' });
					if (counterField[0].value === String(maxValue)) {
						inc.css({ 'border-color': 'rgba(31, 32, 65, 0.25)', 'color': 'rgba(31, 32, 65, 0.25)' });
					}

					// Отображение кнопки "очистить"
					
					if ($(counterField[0]).hasClass('could-be-clean') && counterField[0].value !== minValue) {
						$(ev.currentTarget.parentElement.parentElement.parentElement).find('.results-clear-button').css('display', 'block');
					}

					// Прямое отображение текста для .rooms-amount
					if (countInputSum('.directly-to-text-area') === 0) {
						$('.rooms-amount_default-text').html(`Количество комнат`);
					} else if ($(counterField[0]).hasClass('directly-to-text-area') && parseInt(counterField[0].value) !== minValue) {
						$('.rooms-amount_default-text').html(`${makeDirectlyTextConcat('.directly-to-text-area')}`);
					}
				};

				

				if (!counterField.attr('disabled')) {
					dec.on('click', decrement);
					inc.on('click', increment);
				}

				// Очищаем результат
				$('.results-clear-button').click(function (event) {
					event.preventDefault();
					if ($(counterField[0]).hasClass('could-be-clean')) {
						$(counterField[0]).attr('value', `${minValue}`);
					}

					dec.css({ 'border-color': 'rgba(31, 32, 65, 0.25)', 'color': 'rgba(31, 32, 65, 0.25)' }); // задаем стили для кнопок
					$('.results-clear-button').css('display', 'none'); // прячем кнопку
					$('.guests-amount_default-text').html('Сколько гостей '); // выводим начальный текст
				});
			}

			// counterField.each(function() {
			//    init($(this));
			//    console.log(counterField)
			//    console.log($(this))
			// });

			init(counterField); // counterField это массив с одним определенным импутом данного .dropdown-list - существуют одновременно
			// $(counterField[0]) пишем [0] т.к. массив с одним значением
		};

		$(inputFields).each(function () { // $(inputFields) это объект со всеми импутами данного .dropdown-list
			// console.log($(inputFields))
			// console.log($(this))
			fieldCount($(this)); // $(this) это массив с одним определенным импутом данного .dropdown-list - существуют одновременно
		});
	};

	// ищем все элементы с классом .dropdown-list
	// создаем объект, где ключ - id элемента с классом .dropdown-list,
	// значение (количество вызовов функции dropdownItemCounter) 0
	let amountDropdownItemCounterCall = {};
	$('.dropdown-list').each(function () {
		amountDropdownItemCounterCall[$(this).attr('id')] = 0;
	});

	console.log(amountDropdownItemCounterCall);

	// при клике на .dropdown-list__text-area выпадает список
	// происходит выполнение функции счетчиков dropdownItemCounter
	// т.к. выполнение происходит с использованием .each,
	//  dropdownItemCounter нужно выполнить только один раз
	$(".dropdown-list__text-area").click(function () {
		const dropdownId = $(this).parent().attr('id');
		$(this).toggleClass("on");
		// $(`#${dropdownId}`).toggleClass("on");
		console.log(amountDropdownItemCounterCall)
		console.log($(this).parent().find('.counter__field'))

		if ($(this).hasClass('on') && amountDropdownItemCounterCall[dropdownId] === 0) {
			dropdownItemCounter($(this).parent().find('.counter__field'));
			// dropdownItemCounter(`#${dropdownId} .counter__field`);
			amountDropdownItemCounterCall[dropdownId] = 1;
		}

		$(document).mouseup(function (e){ // событие клика по веб-документу
			console.log(`#${dropdownId}`);
			var div = $(`#${dropdownId}`); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				console.log(23);
				div.find(".dropdown-list__text-area").removeClass("on"); // скрываем его
			}
		});

	});

	// Изменяем слово "гость" в соответствии с количеством для .guests-amount
	const viewReadableText = (guestSum, outTextField) => {
		let arrGuestSumStr = [];
		for (let i = 0; i < String(guestSum).length; i += 1) {
			arrGuestSumStr.push(String(guestSum)[i]);
		}
		// массив строковых чисел результата
		let lastIndex = arrGuestSumStr.length - 1
		// Сложности русского языка
		// console.log(outTextField)
		if (arrGuestSumStr[lastIndex] === "1" && guestSum !== '11') {
			outTextField.html(`${guestSum} гость`);
		} else if (arrGuestSumStr[lastIndex] >= '2' && arrGuestSumStr[lastIndex] <= '4' && guestSum !== '12' && guestSum !== '13' && guestSum !== '14') {
			outTextField.html(`${guestSum} гостя`);
		} else if (arrGuestSumStr[lastIndex] >= '5' || arrGuestSumStr[lastIndex] === '0') {
			outTextField.html(`${guestSum} гостей`);
		}
	};

	// Кнопка вывода результата для .guests-amount
	$('.results-apply-button').click(function (event) {
		event.preventDefault();
		viewReadableText(countInputSum($(this).parent().parent().children().children('.counter').children('.counter__field')), $(this).parent().parent().parent().parent().children('.dropdown-list__text-area').children('.guests-amount_default-text'));

		// console.log($(this).parent().parent().parent().parent().children('.dropdown-list__text-area').children('.guests-amount_default-text'))
	});

	

});