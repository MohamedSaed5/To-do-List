
document.addEventListener('DOMContentLoaded', function () {

  // get element
  let add = document.getElementById('add');
  let inneerTask = document.getElementById('inner-task');
  let addedTask = document.querySelector('#added-tasks');

  add.onclick = function () {
    if (inneerTask.value === '') {
      alert('please enter your task...');
    } else {
      // create element inneer html
      let newTask = document.createElement('div');
      newTask.className = 'newTask';
      newTask.innerHTML = `
          <span>${inneerTask.value}</span>
          <button class="delet">delete</button>
        `;
      addedTask.appendChild(newTask);

      let delet = newTask.querySelector('.delet');
      delet.onclick = function () {
        newTask.remove();
      };

      newTask.onclick = function () {
        newTask.classList.toggle('compelet')
      }

      // إعادة تعيين حقل إدخال المهمة
      inneerTask.value = '';
    }
  };
});