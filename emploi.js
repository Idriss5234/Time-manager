var save =document.getElementById("save");
var reset =document.getElementById("reset");

function savetask(){
    for (var i = 1; i <= 56; i++) {
        var input = document.getElementById(`input${i}`).value;
        localStorage.setItem(`savedInput${i}`, input);
      }
      
    
}

save.addEventListener("click",savetask);

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 1; i <= 56; i++) {
        var savedInput = localStorage.getItem(`savedInput${i}`);
        document.getElementById(`input${i}`).value = savedInput;
      }
      
  });

function resetall(){
    for (var i = 1; i <= 56; i++) {
        var input = document.getElementById(`input${i}`).value;
        input.value = "";
        localStorage.removeItem(`savedInput${i}`);     

        location.reload(); //bach tcleara koulchi nichan bla mat7taj t refreshi page
     }
}


reset.addEventListener("click",resetall);
