function ex1(){
    let x = prompt('Give me an integer greater than 0: ');
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
    document.getElementById("Ex1").style.display = "inline-table";
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
            document.getElementById("Ex2").innerHTML=
            "CORRECT. User answered: '" + r1 + " + " + r2 + " = " + x +
             "' in " + (d2-d1)/1000 + " seconds";
            document.getElementById("Ex2").style.display="block";
        }
        else{
            alert("LoL. You're not just wrong, You're stupid. " + "And it took you: " + (d2-d1)/1000 + " seconds");
            document.getElementById("Ex2").innerHTML=
            "WRONG. User answered: '" + r1 + " + " + r2 + " = " + x +
             "' in " + (d2-d1)/1000 + " seconds";
            document.getElementById("Ex2").style.display="block";
        }
}

function ex3(){
    let breake = false;
    let zero = 0, neg = 0, pos = 0;
    const array = [];

    while(breake == false){
        let x = prompt("Give me a number. Write x to continue")
        if(x == "x"){
            breake = true;
        }
        else{
            x = parseInt(x);
            if (isNaN(x)){
                alert("NaN. Try Again.") 
            }
            else{
                array.push(x);
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            neg++
        }
        else if (array[i] == 0) {
            zero++
        }
        else if (array[i] > 0) {
            pos++
        }
        else{}
    }

    var table = document.getElementById("Ex3");
    var row = table.insertRow(1);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    c1.innerHTML = neg;
    c2.innerHTML = zero;
    c3.innerHTML = pos;
    document.getElementById("Ex3").style.display = "inline-table";
}

function ex4(){
    let col, row;
    alert("You're going to create a Matrix of random numbers")
    breake = false;
    while (breake == false) {
        col = prompt("Write number of columns")
        col = parseInt(col);
        if (isNaN(col)){
            alert("Invalid input.") 
        }
        else{
            breake = true;
        }
    }

    breake = false;
    while (breake == false) {
        row = prompt("Write number of rows")
        row = parseInt(row);
        if (isNaN(row)){
            alert("Invalid input.") 
        }
        else{
            breake = true;
        }

    }

    const matrix = [];
    var r = [];
    const avgs = [];
    var table = document.getElementById("Ex4");
    
    for (let i = 0; i < row; i++) {
        var tRow = table.insertRow(i);
        
        for (let j = 0; j < col; j++) {
            let rng = Math.floor(Math.random() * 100);
            var tCol = tRow.insertCell(j);
            tCol.innerHTML = rng;
            r.push(rng);
        }
        matrix.push(r);

        let rowAvg = 0;
        for (let k = 0; k < r.length; k++){
            rowAvg += r[k]; 
        }
        rowAvg = rowAvg/r.length;
        avgs.push(rowAvg);

        r = [];
    }

    
    document.getElementById("Ex4").style.display="inline-table";
    document.getElementById("Ex4Avgs").innerHTML="Average per row: " + avgs.toString();
    document.getElementById("Ex4Avgs").style.display="block";
}