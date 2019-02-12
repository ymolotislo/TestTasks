/**
 Напишите функцию, которая принимает предложение и возвращает количество содержащихся в нем четырехбуквенных слов.
 Не беспокойтесь о пунктуации.
 */

function fourLetterWords(sentence) {

	const wordsArray = sentence.split(' ');
	const fourLetterWordsArray = wordsArray.filter(word => word.length === 4);

	return fourLetterWordsArray.length;
}