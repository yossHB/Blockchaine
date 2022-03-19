function transfere(){
    let transfer = document.getElementById("destinationaddress").value;
    let value = document.getElementById("value").value;
    document.getElementById("ResultTransfer").innerHTML = "Result : done";

}
function transferFrom(){
    let admin = document.getElementById("fromadminaddress").value;
    let destination = document.getElementById("fromdestinationaddress").value;
    let value = document.getElementById("fromvalue").value;
    document.getElementById("ResultTransferFrom").innerHTML = "Result : done";
}

function balanceOf(){
    let transfer = document.getElementById("balanceadminaddress").value;
    document.getElementById("ResultBalanceOf").innerHTML = "Result : done";
}

function allowance(){
    let admin = document.getElementById("allowanceadminaddress").value;
    let destination = document.getElementById("allowancedestinationaddress").value;
    document.getElementById("ResultAllowance").innerHTML = "Result : done";
}
