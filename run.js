// DOM (Document Object Model)
const title = document.querySelector('#title'); //  querySelector : 노드의 첫번째 자식 반환
title.innerText = 'Hi From JS';
title.style.color = 'red';
document.title = '💎 Vanilla JS';
console.dir(title);