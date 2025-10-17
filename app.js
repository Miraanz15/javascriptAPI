const URL = "https://api.thecatapi.com/v1/breeds";
let data = [];

const getFacts = async () => {
    console.log("Getting data...")
    let response = await fetch(URL);
    console.log(response);
    console.log("JSON received");
    data = await response.json();
    console.log(data);
};



getFacts();

