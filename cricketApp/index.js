// const { rootCertificates } = require("tls");
let root = document.getElementById("root");
let btn = document.getElementById("cricketBtn");
const key = "eec06c89-602d-4bd5-a81c-f181a10b1023";
const url = `https://api.cricapi.com/v1/currentMatches?apikey=${key}&offset=0`;
// console.log(url);
console.log(btn);
btn.addEventListener("click",clickButton);

function clickButton()
{
    console.log("You have clicked the button");
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onprogress = function()
    {
        root.innerHTML = `<div class="spinner-border text-dark align-self-center"></div>`;
        console.log("On Progress");
    }

    xhr.onload = function()
    {
        // console.log(root.hasChildNodes());
        // root.removeChild(root.children[0]);
        var delayInMilliseconds = 1000; //1 second
        setTimeout(function() {
            root.removeChild(root.children[0]);
        }, delayInMilliseconds);
        const obj = JSON.parse(this.responseText);
        let match = obj.data;
        // console.log(match);
        // root.innerHTML+=`<div class="d-flex justify-content-around">`;
        for(let i = 0 ; i<4 ; i++)
        {
            root.innerHTML+=`
            <div class="card bg-info text-white" style = "margin : 2rem;">
            <img src="${match[i].teamInfo[0].img}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${match[i].name}</p>
            <p class="card-text">${match[i].status}</p>
            <p class="card-text">${match[i].venue}</p>
            </div>
            </div>
        
             `;
        }
    }
    xhr.send();

}

