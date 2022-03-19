if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify({}));
}

const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
}

const setTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addEvents = () => {
    let taskCheck = document.querySelectorAll('.check-box');

    if (taskCheck.length > 0) {
        taskCheck.forEach(el => {
            el.addEventListener('click', (e) => {
                const task = e.currentTarget.dataset.check;
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                tasks[task].isChecked = true;
                setTasks(tasks);

                document.querySelector(`#${task} .task-text`).classList.add('checked');
                e.currentTarget.classList.add('checked');
            });
        });
    }

    let taskDelete = document.querySelectorAll('.delete-task');

    if (taskDelete.length > 0) {
        taskDelete.forEach(el => {
            el.addEventListener('click', (e) => {
                const task = e.currentTarget.dataset.delete;
                const tasks = JSON.parse(localStorage.getItem('tasks'));

                tasks[task].isDeleted = true;
                setTasks(tasks);

                document.querySelector(`#${task}`).classList.add('deleted');
            });
        });
    }
}

const initTasks = () => {
    const tasks = getTasks();

    if (Object.keys(tasks).length) {
        for (const property in tasks) {
            const isDeleted = tasks[property].isDeleted ? 'deleted' : '';
            const isChecked = tasks[property].isChecked;

            const html = `<div class="task ${isDeleted}" id="${property}">
                <span class="check-box ${isChecked ? 'checked' : ''}" data-check="${property}"></span>
                <p class="task-text ${isChecked ? 'checked' : ''}">${tasks[property].name}</p>
                <span class="delete delete-task" data-delete="${property}">remove</span>
            </div>`

            document.querySelector('.tasks').innerHTML += html;
        }
    }
}

const formAction = () => {
    document.querySelector('#todoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#taskName');
        const inputInfo = document.querySelector(`#${input.id}Info`);

        if (input.value.length < 2) {
            input.classList.add('show-error');
            inputInfo.classList.add('show-error');
            return;
        } else {
            input.classList.remove('show-error');
            inputInfo.classList.remove('show-error');
        }

        const newTask = {
            name: input.value,
            isChecked: false,
            isDeleted: false
        }

        const tasks = getTasks();
        const itemIndex = Object.keys(tasks).length;

        tasks[`task${itemIndex}`] = newTask;
        setTasks(tasks);

        const html = `<div class="task" id="task${itemIndex}">
                <span class="check-box" data-check="task${itemIndex}"></span>
                <p class="task-text">${newTask.name}</p>
                <span class="material-icons-outlined delete delete-task" data-delete="task${itemIndex}">
remove
</span>
            </div>`;

        document.querySelector('.tasks').innerHTML += html;
        addEvents();
    });
}


formAction();
initTasks();
addEvents();