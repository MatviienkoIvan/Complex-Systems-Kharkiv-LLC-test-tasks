window.onload = function(){
    let addBtn = document.getElementById("addItem").addEventListener("click", function add(){
        let editText = document.getElementById("textArea").value;        
        editText = editText.trim();
        if (editText != "" && editText.length != 0){
            addItem(editText); 
        }else {            
            alert("Enter your text to input area");
        }        
        document.getElementById("textArea").value = "";
    })    
        
    let rmvBtn = document.getElementById("rmvItem").addEventListener("click", function rmv(){
        let inputList = document.querySelectorAll("input[type=checkbox]"), 
            checkedBoxes = [];
        for(var i = 0; i < inputList.length; i++) {
            if(inputList[i].checked ) {
                    checkedBoxes.push(inputList[i]);
            }            
        }
        if(checkedBoxes){
            rmvItem(checkedBoxes);
        }else{
            alert("Choos checkbox(es)!")
        }       
    })
    
    function addItem(item){
        let ul = document.getElementById("holder");
        let li = document.createElement("LI")
        li.classList.add("item");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.innerText = item;
        li.appendChild(checkbox);
        ul.appendChild(li);
    }    
    
    function rmvItem(item){
        let ul = document.getElementById("holder");
        for (let i = 0; i < item.length; i++){
            let parent = item[i].parentNode;            
            if(parent !== null){
                ul.removeChild(parent);
            }
        }
    }
} 