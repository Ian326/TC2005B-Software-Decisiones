function ex1(){
    let x = prompt('Ingresa un numero entero mayor a 0: ');
    var table = document.getElementById("Ex1");
    for (let i = 1; i <= x; i++) {
        var row = table.insertRow(i);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        c1.innerHTML = i;
        c2.innerHTML = i**2;
        c3.innerHTML = i**3;
    };
    var table = document.getElementById("Ex1").style.display = "inline-table";
};

function ex2(){
    let r1 = Math.floor(Math.random() * 10);
    let r2 = Math.floor(Math.random() * 10);
    let z = r1+r2;
    let d1 = Date.now()
    let x = prompt(r1 + " + " + r2 + " = ");
    let d2 = Date.now()
    if (x == z) {
            alert("LoL. You're right. "  + "And it only took you: " + (d2-d1)/1000 + " seconds");
        }
        else{
            alert("LoL. You're not just wrong, You're stupid. " + "And it took you: " + (d2-d1)/1000 + " seconds");
        }
}

function ex3(){
    let breake = false;
    let zero = 0, neg = 0, pos = 0; 
    while(breake == false){
        let x = prompt("Give me a number. Write x to continue")
        if (x < 0) {
            neg++       
        }
        else if (x == 0) {
            zero++
        }
        else if (x > 0) {
            pos++
        }
        else if (x == "x"){
            breake = true;
        }
        else{
            alert("Invalid input. Try again")
        }
    }
    var table = document.getElementById("Ex3");
        var row = table.insertRow(1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        c1.innerHTML = neg;
        c2.innerHTML = zero;
        c3.innerHTML = pos;
    var table = document.getElementById("Ex3").style.display = "inline-table";

}