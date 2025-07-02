console.log("Hello World");
function sayHello() {
    console.log("Hello from sayHello function");
}
sayHello();
console.log("This is a simple JavaScript program"); 

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Hello World");
},5000);
console.log("three");
console.log("four"); 

//callback function example
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,ds){
    ds(a,b);
}
calculator(5,10,sum);

calculator(5,10,(a,b)=>{
    console.log(a-b);
});

function getData(dataid){
    setTimeout(() => {
        console.log("Fetching data for id:", dataid);    
    },5000);
}
getData(1);
getData(2);
getData(3);

function getData(dataid,getnextdata) {
    setTimeout(()=>{
        console.log("fetching the data for id:",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000)
}



getData(1,()=>{
    console.log("getting data 2...");
    getData(2,()=>{
        console.log("getting data 3...");
        getData(3)
    });
})

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data fetched successfully");
        }else {
            reject("Error fetching data");
        }
    },2000);
});

myPromise.then((data) => {
    console.log("Promise resolved with data:", data);
})
.catch((error) => {
    console.error("Promise rejected with error:",error);
});

let promise = new Promise((resolve,reject)=>{
    console.log("Promise started");
    if(1<0){
        resolve(123);
    }
    reject("Something went wrong");
});

function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching the data for id:", dataid);
            resolve("Data fetched successfully");
        },2000);
    });
}
