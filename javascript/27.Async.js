// async in js
// means running in background
/*
There are 3 ways to write async code in js
1) Async / await
2) Callbacks
3) Promises

*/



setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);



console.log('done printing');
