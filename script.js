var dinosaur = document.getElementById("dinosaur");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    if(dinosaur.classList != "animate"){
        dinosaur.classList.add("animate");
    }    
    setTimeout(function(){
        dinosaur.classList.remove("animate");
    },300)
}

var checkDead = setInterval(function(){
    var dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft <= 25 && blockLeft > 2 && dinosaurTop >= 130){
        block.style.animation = "none";
        alert("Game Over. seore: "+Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }
    else{
        if(Math.floor(counter/100) >= 10)counter +=.5;
        else if(Math.floor(counter/100) >= 30) counter += 1;
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10)