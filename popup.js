'use strict';

const $textarea = document.getElementById('textarea');
const $button = document.getElementById('button');
const $result = document.getElementById('result');

function onClickButton() {
  const items = $textarea.value.split(' ');
  $result.innerHTML = shuffle(items).join(' ');
}

function shuffle(items) {
  const array = items.slice();
  for (let i = array.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [array[i], array[r]] = [array[r], array[i]];
  }
  return array;
}

$button.addEventListener('click', onClickButton);