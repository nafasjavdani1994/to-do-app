const input = document.getElementById('input-box');
const ul = document.getElementById('list-container');
const btn = document.querySelector('button');

const addTask = () => {
  if (input.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  input.value = '';
  saveData();
};

ul.addEventListener(
  'click',
  (event) => {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
      saveData();
    } else if (event.target.tagName === 'SPAN') {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem('data', ul.innerHTML);
};

const showTask = () => {
  ul.innerHTML = localStorage.getItem('data');
};

showTask();
