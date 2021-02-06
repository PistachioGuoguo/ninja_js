// async: start now and finish later

// Javascript is a one-threaded language

// JSON: string in format of Javascript



const getTodos = (callback) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if (request.readyState === 4 && request.status == 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState == 4){
                reject('error getting source');
            }
        });
        
        request.open('GET','https://jsonplaceholder.typicode.com/todos');
        request.send();


    });
    
};


getTodos( (err, data)=>{
    console.log('callback fired');
    if (!err){
        console.log(data);
    }else{
        console.log(err);
    }
});


// promise

const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('Some data');
        reject('some error');
    });
};



getSomething().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})


// above is old, modern way use 'fetch' API


fetch('').then( (response)=>{
    // note, 404 is still not rejected in 'fetch' method, check status

    console.log();
    return response.json(); // promise, cannot use const data = respo
}).then(data=>{

}).catch(err => {

}); // returns a promise


// -> method chainning async & await keyword
// async always returns a promise, non-blocking


const getTodos = async () => {

    const response = await fetch(''); // await keyword wait until promise is resolved to assign the value

    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(data=> console.log('resolved', data))
    .catch(err => console.log('rejected', err.message));
    
