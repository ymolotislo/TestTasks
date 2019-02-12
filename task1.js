/*Дан массив целых чисел <array> и целое число <k>. Нужно вывести все уникальные пары чисел из массива,
 сумма которых равна k.


	function searchPairs(array, N) {
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));


OUT: >> [[1, 4], [2, 3]]
*/


function searchPairs(array, N) {
	let result = [];

	/*Исключаем из исходного массива неконечные значения +/-Infinity и NaN. Используем метод объекта Number, вместо
	глобального, чтобы исключить другие типы данных в массиве*/
	array = array.filter(elem => Number.isFinite(elem));

	//Исключаем повторяющиеся значения из исходного массива
	array = array.filter((elem, i) => {
		for (let j = i + 1; j < array.length; j++) {
			if (elem == array[j]) return false;
		}
		return true;
	});

	/*Проверяем исходный массив на наличие отрицательных значений. Если отрицательных значений нет, все большие или
	равные числу N элементы не соответствуют условию задачи*/
	if (array.every(elem => elem > 0)) {
		array = array.filter(elem => elem < N && elem);
	}

	for (let i = 0; i < array.length; i++) {
		/*Чтобы исключить повторяющиеся комбинации, суммируем текущий элемент массива только со следующими за ним
		 элементами, так как сумма с предыдущими элементами уже проверялась на равенство N в предыдущих итерациях*/
		for (let j = i + 1; j < array.length; j++) {
			let sum = array[i] + array[j];
			if (sum == N) result.push([array[i], array[j]]);
		}
	}
	return result;
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));