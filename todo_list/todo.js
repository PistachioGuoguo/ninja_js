const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTempleate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;

};

// submit new todo

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim whitespace

    if (todo.length){
        generateTempleate(todo);
        addForm.reset();
    }
    
}) 

// delete todos

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const search = document.querySelector('.search input');


const filterTodos = (term) => {
    Array.from(list.children)
        .filter( todo => !todo.textContent.toLowerCase().includes(term))
        .forEach( todo => todo.classList.add('filtered'));  // NOT contains term

    Array.from(list.children)
        .filter( todo => todo.textContent.toLowerCase().includes(term))
        .forEach( todo => todo.classList.remove('filtered')); 
};


search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});