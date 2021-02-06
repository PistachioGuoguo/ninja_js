 const button = document.querySelector('button');

 const ul = document.querySelector('ul');

 button.addEventListener('click', ()=>{
    // ul.innerHTML += `<li>something new</li>`;

    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li);
    
    ul.prepend(li);
    

 });

 const items = document.querySelectorAll('li');

 items.forEach(item => {
     item.addEventListener('click', e => {
        
        // e.target.style.textDecoration = 'line-through';
        
        e.target.remove();  // this will only affect thosed already in the <li>, and new added wont't be affected

        e.stopPropagation();

    });
 });

 ul.addEventListener('click', e=>{
     if (e.target.tagName == 'LI'){
        e.target.remove();
     }
 });


// ul.remove();

 