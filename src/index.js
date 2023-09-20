document.addEventListener("DOMContentLoaded", () => {
  handleClick()
});

function handleClick () {
  let form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    buildList(e.target['new-task-description'].value);
    form.reset();
  })
}

function buildList (todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let dropSelect = document.createElement('select');
  btn.addEventListener ('click', handleDelete);
  btn.textContent = ' X ';
  p.textContent = `${todo} `;
  p.appendChild (btn);
  p.appendChild (dropSelect);
  document.querySelector('#tasks').appendChild(p);
  
  
  //let colorList = document.createElement('option');
  //let colorListArry = ["red", "yellow", "green"]
  //colorList.appendChild (colorListArry)
}

function handleDelete (e) {
  e.target.parentNode.remove()
}