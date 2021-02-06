const scores = [10,20,30,50,80];


// filter

const new_scores = scores.filter( score=>{
    return score >= 30;
});

// console.log(new_scores);


// map

const weighted_scores = scores.map(x => {
    return x >= 20 ? x / 2 : x;
});


// console.log(weighted_scores);


// reduce -> single value

const result = scores.reduce((acc,curr)=>{  // a counter example
    if (curr > 20){
        acc++;
    }
    return acc;
});

const pos = scores.find(x => {
    return x > 50;
})

// when there is multiple keys

scores.sort( (a,b) => {
    return b.score - a.score; //large score comes first
});

// method chaining

const new_arr = scores.filter(score => score > 30).map(score => {
    return `the score is ${score}`;
});

console.log(new_arr);
