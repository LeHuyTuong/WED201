function submit() {
    var click = document.getElementById("order");
    var check = click.getElementsByTagName("input");
    var arr = [];
    for (var i = 0; i < check.length; i++) {
        if (check[i].type === "checkbox" && check[i].checked) {
            var label = check[i].parentNode.getElementsByTagName("label")[0];
            arr.push(label.textContent);
        }
    }
    if(arr.length != 0){
        document.getElementById("ans").style.backgroundColor = "rgb(237, 237, 237)";
    }
    document.getElementById("ans").innerHTML = arr.join("<br>");
}

function CalTotal(){
    var click = document.getElementById("order");
    var check = click.getElementsByTagName("input");
    var total = 0;
    var count = 0;
    for (var i = 0; i < check.length; i++) {
        if (check[i].type === "checkbox" && check[i].checked) {
            total += parseFloat(check[i].value);
            count++;
        }
    }
    if(count != 0){
        document.getElementById("total").style.backgroundColor = "#F79646";
        document.getElementById("total").innerHTML = "Total Amount: " + total+"$";
    }else{
        document.getElementById("total").style.backgroundColor = "white";
        document.getElementById("total").innerHTML = "";
        document.getElementById("ans").style.backgroundColor = "white";
    }
}
// Cai nay nhu java vay de lam ban a