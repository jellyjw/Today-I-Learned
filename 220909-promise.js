//promise
const fakeRequest = (url) => {
    return new Promise = ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1000)

})
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log("done with request!")
    })


//async, await

async function hello() {
    await console.log('hello');
    await console.log('hello1');
    await console.log('hello2');
    await console.log('hello3');
    await console.log('hello4');
    await console.log('hello5');
    return console.log('all done!');
}

hello();