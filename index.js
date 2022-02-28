//targeting the html elements
let qr_code = document.querySelector("#qr-code");
let code_img = document.querySelector("#code-img");
let loader = document.querySelector("#loading");
let Download = document.querySelector("#DeepakButton");
// let atag = document.querySelector("Deepaktag");

qr_code.addEventListener("click" , ()=>{
    //to display the loading icon while the image is loading

    loader.style.display = "block";
    Download.style.display = "block";
    code_img.onload = function(){
        //when the image is onloaded the loading img while not be seen
        loader.style.display = "none";
    }
    let input = document.querySelector("#input").value;
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    code_img.src = api;
    // atag.href = api;
    document.getElementById("Deepakatag").href = code_img.src;

})


