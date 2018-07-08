document.addEventListener('DOMContentLoaded', function(){
    
    let addBtn = document.getElementById("addBtn").addEventListener('click', function addData(){
        addItem();        
    })
    
    let rmvBtn = document.getElementById("rmvBtn").addEventListener('click', function rmvData(){
        removeItem()
        //for removing ani specific str
        //let strNumber = prompt("Choose string for remove:");
        //let str = parseInt(strNumber);
        //removeItem(str);
    })
    
    function randomData(param) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < param; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    function rndStrLenORColNumb (min, max){
        return Math.floor(Math.random() * (max - min +1)) + min;
    }    
    
    function addItem(){
        let table = document.getElementById("dataTable")
        let newTr = document.createElement("tr");
        let randomColumn = rndStrLenORColNumb(1, 10);
        for (let i = 0; i < randomColumn; i++){ 
            let randlength = rndStrLenORColNumb(1, 15);
            let newTd = document.createElement("td");
            newTd.innerText = randomData(randlength);
            newTr.appendChild(newTd);
        }
        table.appendChild(newTr);
    }    
    
    function removeItem(){
        let table = document.getElementById("dataTable");
        if (confirm("Are you really want delete last item?")){
            table.deleteRow(table.rows.length-1);
            alert("Row of data removed!");
        }else{
            alert("You canceled removing");            
        }
    }
    
    // for removing ani specific str
    /*function removeItem(item){
        let table = document.getElementById("dataTable");
        if (confirm("Are you really want delete this item?")){
            table.deleteRow(item - 1);
            alert("Row of data removed!");
        }else{
            alert("You canceled removing");            
        }
    }*/
    
    
})