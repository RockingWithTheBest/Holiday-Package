function imgSlider(anything){
    document.querySelector(".food-list").src = anything;
}

let icons = document.querySelectorAll(".lists li");

//Function to add active
function toggle(e){
    const oldIcons = document.querySelectorAll(".lists li");
    oldIcons.forEach(icon => icon.classList.remove("active"));

    //add activeon Click
    this.classList.add("active");

    //change slider image
    const img = this.children[0].src;
    imgSlider(img);
}

//Add event llistener
icons.forEach((icon) =>{
    icon.addEventListener("click", toggle)
});

document.querySelector("#back_button").addEventListener("click",() =>{
    window.history.back();
}); 