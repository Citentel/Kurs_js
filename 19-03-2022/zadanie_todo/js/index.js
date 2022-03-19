if (localStorage.getItem('tasks') === null) {
  localStorage.setItem('tasks', JSON.stringify({}));
}

const getTasks = () => JSON.parse(localStorage.getItem('tasks'));

const setTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initTasks = () => {
  const tasks = getTasks();

  if (Object.keys(tasks).length) {
    for (const property in tasks) {
      const isDeleted = tasks[property].isDeleted ? 'deleted' : '';
      const { isChecked } = tasks[property];

      const html = `<div class="task ${isDeleted}" id="${property}">
                <span class="check-box ${
  isChecked ? 'checked' : ''
}" data-check="${property}"></span>
                <p class="task-text ${isChecked ? 'checked' : ''}">${
  tasks[property].name
}</p>
                <span class="delete delete-task" data-delete="${property}">remove</span>
            </div>`;

      document.querySelector('.tasks').innerHTML += html;
    }
  }
};

const formAction = () => {
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
      name: input.value,
      isChecked: false,
      isDeleted: false,
    };

    const tasks = getTasks();
    const itemIndex = Object.keys(tasks).length;

    tasks[`task${itemIndex}`] = newTask;
    setTasks(tasks);

    const html = `<div class="task" id="task${itemIndex}">
                <span class="check-box" data-check="task${itemIndex}"></span>
                <p class="task-text">${newTask.name}</p>
                <span class="material-icons-outlined delete delete-task" data-delete="task${itemIndex}">remove</span>
            </div>`;

    document.querySelector('.tasks').innerHTML += html;
    input.value = null;
  });
};

const taskClickHandler = () => {
  document.querySelector('.tasks').addEventListener('click', (e) => {
    if (e.target.dataset.check !== undefined) {
      const task = e.target.dataset.check;
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks[task].isChecked = true;
      setTasks(tasks);

      document.querySelector(`#${task} .task-text`).classList.toggle('checked');
      e.target.classList.toggle('checked');
    } else if (e.target.dataset.delete !== undefined) {
      const task = e.target.dataset.delete;
      const tasks = getTasks();

      tasks[task].isDeleted = true;
      setTasks(tasks);

      document.querySelector(`#${task}`).classList.toggle('deleted');
    }
  });
};

formAction();
initTasks();
taskClickHandler();
