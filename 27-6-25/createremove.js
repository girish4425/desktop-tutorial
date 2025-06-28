let aish=document.createElement("p");
aish.textContent="I am Chitii";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);

let sana=document.getElementsByClassName("list")[0];
if(sana){
    sana.remove;
}
setTimeout(() => {
    let re = document.getElementsByClassName("list")[4];
    if (re) {
        re.remove();
    }
}, 2000);
let newHeading = document.createElement("h2");
newHeading.innerHTML="This is a new heading added to Javascript!";
newHeading.style.color="purple";
newHeading.style.fontSize="24px";
document.body.appendChild(newHeading);
setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent="This text is added after 3 seconds";
    newText.style.color="green";
    document.body.appendChild(newText);
}, 3000);

