const URL = "https://api.thecatapi.com/v1/breeds";
let data = [];
let button = document.querySelector("#button");
let list = document.getElementById("list");


const getFacts = async () => {
    console.log("Getting data...")
    let response = await fetch(URL);
    console.log(response);
    console.log("JSON received");
    data = await response.json();
    console.log(data);
    data.forEach((data) => {
        let li = document.createElement("li");
        li.innerText = data.description;
        list.appendChild(li);
    });
};


button.addEventListener("click", getFacts);


