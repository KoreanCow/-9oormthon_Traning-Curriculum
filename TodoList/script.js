const add_todo_btn = document.querySelector("#add_todo_btn");
const list = document.querySelector('#todolist_box')
const dark_btn = document.querySelector(".moon");
const date_text = document.querySelector('.date')

let todos = [];
const y = new Date().getFullYear();
const m = new Date().getMonth() + 1;
const d = new Date().getDate();
date_text.innerText = `${y}년 ${m}월 ${d}일!!`;
dark_btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme');
    if (document.documentElement.classList.contains('darkTheme')) {
        dark_btn.src = './assets/icons/sun.svg';
    } else {
        dark_btn.src = './assets/icons/moon.svg';
    }
});


add_todo_btn.addEventListener('click', createNewTodo);

function createNewTodo() {
    // 새 아이템 객체 생성
    const item = {
        id: new Date().getTime(), 
        text: '', 
        complete: false
    }

    todos.unshift(item);
    
    const { itemEl, inputEl, editBtnEl, removeBtnEl } = createTodoElement(item);

    list.prepend(itemEl);
    
    inputEl.removeAttribute('disabled');
    inputEl.focus();
    saveToLocalStorage();
}

function createTodoElement(item) {
    // 투두리스트 박스
    const itemEl = document.createElement('div');
        itemEl.classList.add('item');

    // 투투리스트 체크 버튼
    const checkboxEl = document.createElement('input');
        checkboxEl.classList.add('check_box');
        checkboxEl.type = 'checkbox';
        checkboxEl.checked = item.complete;
    if(item.complete) {
        itemEl.classList.add('complete');
    }

    // 투두리스트 내용
    const inputEl = document.createElement('input');
        inputEl.classList.add('input_box');
        inputEl.type = 'text';
        inputEl.value = item.text;
        inputEl.setAttribute('disabled', '');
    
    // 에딧, 리무브 버튼 박스
    const actionsEl = document.createElement('div');
        actionsEl.classList.add('actions');

    // 에딧 버튼
    const editBtnEl = document.createElement('button');
        editBtnEl.innerText = 'Edit';
    
    // 리무브 버튼
    const removeBtnEl = document.createElement('button');
        removeBtnEl.innerText = 'Remove';
 
    // 이벤트 라인 ---------------------------------------------------
    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;

        if(item.complete) {
            itemEl.classList.add('complete');
            inputEl.style.textDecoration = 'line-through';
            
        }else {
            itemEl.classList.remove('complete');
            inputEl.style.textDecoration = 'none';
        }
        saveToLocalStorage();
    });

    inputEl.addEventListener('blur',() => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();
    });

    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
        saveToLocalStorage();
    });

    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== item.id);
        itemEl.remove();
        saveToLocalStorage();
    });

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

function saveToLocalStorage() {
    const data = JSON.stringify(todos);

    localStorage.setItem('my_todos', data);
    
};

function loadFromLocalStorage() {
    const data = localStorage.getItem('my_todos');

    if(data) {
        todos = JSON.parse(data);
    }
}

function displatTodos() {
    loadFromLocalStorage();

    for( let i = 0; i < todos.length; i++ ) {
        const item = todos[i];
        const { itemEl } =  createTodoElement(item);
        list.appendChild(itemEl);
    }
}

displatTodos();
