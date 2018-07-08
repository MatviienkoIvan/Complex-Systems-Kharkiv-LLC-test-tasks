document.addEventListener('DOMContentLoaded', function(){
    let input = document.querySelector('input[type="text"]');
    input.addEventListener("change", function(){
        let values = input.value;
        var date = new Date(values);
        let hh = date.getHours();
        let mm = date.getMinutes();
        let dd = date.getDate();
        let mmmm = date.getMonth();
        let yy = date.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
        ];
        
        document.getElementById("inputText").textContent = `${hh}-${mm} ${dd} ${monthNames[mmmm]} ${yy}`;
    })
})