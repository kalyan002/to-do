document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="btn btn-success btn-sm me-2 complete-btn">save</button>
                    <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';


            listItem.querySelector('.complete-btn').addEventListener('click', () => {
                listItem.classList.toggle('list-group-item-success'); 
            });

            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove();
            });
        } else {
            alert('Please enter a task!');
        }
    };

  

    addTaskBtn.addEventListener('click', addTask);

   

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});