/**
 Напишите функцию, которая возвращает количество ошибок(символов, которые не совпадают) в палиндроме при сравнении
 исходной и обратной строки. Например для слова «fox» вернется 2, так как «fox» и «xof» отличаются на два символа.
 **/

function almostPalindromes(str) {

	const palindrome = str.split('').reverse();
	let err = 0;

	for (let i in palindrome) {
		if (palindrome[i] !== str[i]) err++;
	}

	return err;
}
