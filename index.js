const formElement = document.getElementById('form');
const inputElement = document.getElementById('todo');
const listElement = document.getElementById('todo-list');

const submitHandler = (event) => {
  event.preventDefault()

  listElement.innerHTML = listElement.innerHTML + '<li>' + inputElement.value + '</li>'
}

formElement.addEventListener('submit', submitHandler)

window.onbeforeunload = () => {
  formElement.removeEventListener('submit', submitHandler)
}