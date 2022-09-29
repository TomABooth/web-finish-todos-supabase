export function renderTodo(todo) {
    const li = document.createElement('li');
    if (todo.complete) {
        li.classList.add('complete');
    }

    // > Part C: Conditionally add a "complete" class to the li
    // if the todo is complete

    const p = document.createElement('p');
    p.textContent = todo.description;
    li.append(p);

    return li;
}
