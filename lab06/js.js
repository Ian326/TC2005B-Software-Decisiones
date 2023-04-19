function verifyPwrd(){
    const pwrd1 = document.forms["pwrds"]["pwrd1"].value;
    const pwrd2 = document.forms["pwrds"]["pwrd2"].value;
    if (pwrd1 == ""||pwrd2 == ""){
        document.getElementById("Message").innerHTML = "Please, fill all blanks."
        document.getElementById("Message").style.color = "#ff3860";
        document.getElementById("Message").style.display="inline";
        return false;
    }
    else if (pwrd1!=pwrd2){
        document.getElementById("Message").innerHTML = "Passwords don't match"
        document.getElementById("Message").style.color = "#ff3860";
        document.getElementById("Message").style.display="inline";
        return false;
    }
    else{
        document.getElementById("Message").style.display="none";
        if (pwrd1.length >= 8){
            document.getElementById("TBD_1").className = "Pass";
        }
        else{
            document.getElementById("TBD_1").className = "Fail";
        }
        let arrayP1 = pwrd1.split("");
        let arrayNum = ["1","2","3","4","5","6","7","8","9","0"];
        let arrayCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        let arraySym = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","'","<",",",">",".","?","/"]
        let chkNum = arrayP1.some( ai => arrayNum.includes(ai) );
        let chkCap = arrayP1.some( ai => arrayCap.includes(ai) );
        let chkSym = arrayP1.some( ai => arraySym.includes(ai) );
        if (chkNum){
            document.getElementById("TBD_2").className = "Pass";
        }
        else{
            document.getElementById("TBD_2").className = "Fail";
        }
        if (chkCap){
            document.getElementById("TBD_3").className = "Pass";
        }
        else{
            document.getElementById("TBD_3").className = "Fail";
        }
        if (chkSym){
            document.getElementById("TBD_4").className = "Pass";
        }
        else{
            document.getElementById("TBD_4").className = "Fail";
        }
        return false;
    }

};
