/*Напишите код, который при клике на любой div внутри root будет выводить в консоль цвет его бэкграунда:

	<div id="root" style="background: red;">
	root
	<span id="id1" style="background: lightblue;">id1</span>
	<div id="id2" style="background: green;">
	id2
	<div id="id3" style="background: yellow;">id3</div>
	</div>
	</div>*/

const rootChildren = document.getElementById('root').childNodes;

rootChildren.forEach(child => {
	if (child.nodeName === 'DIV') {
		child.addEventListener('click', elem => {
			backgroundColor = elem.target.style.backgroundColor;
			console.log(backgroundColor);
		});
	}
});