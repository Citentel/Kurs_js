let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

const taskElement = (task) => `<div class="task ${task.isDeleted}" id="${task.id}">
                <span class="check-box ${task.isChecked ? 'checked' : ''}" data-action="check" data-id="${task.id}"></span>
                <p class="task-text ${task.isChecked ? 'checked' : ''}">${task.name}</p>
                <span class="delete delete-task" data-action="delete" data-id="${task.id}">remove</span>
            </div>`;

if (tasks.length > 0) {
  tasks.forEach((task) => {
    if (!task.isDeleted) {
      document.querySelector('.tasks').innerHTML += taskElement(task);
    }
  });
}

document.querySelector('#todoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#taskName');
  const inputInfo = document.querySelector(`#${input.id}Info`);

  if (input.value.length < 2) {
    input.classList.add('show-error');
    inputInfo.classList.add('show-error');
    return;
  }
  input.classList.remove('show-error');
  inputInfo.classList.remove('show-error');

  const newTask = {
    id: `task_${tasks.length}`,
    name: input.value,
    isChecked: false,
    isDeleted: false,
  };
  tasks = [...tasks, newTask];
  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.querySelector('.tasks').innerHTML += taskElement(newTask);
  input.value = null;
});

document.querySelector('.tasks').addEventListener('click', (e) => {
  const result = tasks.map((task) => {
    const loopElement = task;
    if (e.target.dataset.id === loopElement.id) {
      if (e.target.dataset.action === 'check') {
        loopElement.isChecked = true;
        document.querySelector(`#${loopElement.id} .task-text`).classList.toggle('checked');
        e.target.classList.toggle('checked');
      } else if (e.target.dataset.action === 'delete') {
        loopElement.isDeleted = true;
        document.querySelector(`#${loopElement.id}`).classList.toggle('deleted');
      }
    }
    return loopElement;
  });
  localStorage.setItem('tasks', JSON.stringify(result));
});
