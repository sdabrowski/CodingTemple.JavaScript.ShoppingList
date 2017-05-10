(function () {





    "use strict";
    window.onload = function () {
    var button = document.getElementById("btn");
    button.addEventListener("click", AddRow);
	};

    function AddRow(){
        var inputName = document.getElementById("name").value;
        var inputPrice = parseFloat(document.getElementById("price").value);
        if(!inputPrice){
            inputPrice=0;
        }

        var getList = document.getElementById("listBody");
        var row = CreateInnerHTML(inputName, inputPrice);
        getList.appendChild(row);
        UpdateTotal(inputPrice);
    }

    function CreateInnerHTML(name, price){

        var row = document.createElement("tr");
        var cellEmpty = document.createElement("td");
        var cellName = document.createElement("td");
        var cellPrice = document.createElement("td");

        row.appendChild(cellEmpty);
        row.appendChild(cellName);
        cellName.innerHTML = name;
        row.appendChild(cellPrice);
        cellPrice.innerHTML = price;

        return row;
    }

    function UpdateTotal(price){
        var totalElement = document.getElementById("totalPrice");
        var currentTotal = parseFloat(totalElement.innerHTML);
        if(!currentTotal){
            currentTotal=0;
        }
        currentTotal += price;
        totalElement.innerHTML = currentTotal;
    }



}());
