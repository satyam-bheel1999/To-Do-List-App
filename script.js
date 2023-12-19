const item = document.getElementById("content");
const toDoBox = document.getElementById("to-do-list");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            toDoBox = this.value;
            this.value = "";
        }
    }
)