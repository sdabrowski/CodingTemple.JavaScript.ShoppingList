(function () {





    "use strict";
    window.onload = function () {
    var button = document.getElementById("btn");
    button.addEventListener("click", AddRow);
	};




    function AddRow(){
        var inputName = document.getElementById("name").value;
        var inputPrice = document.getElementById("price").value;

        CreateInnerHTML(inputName, inputPrice);
    }

    function CreateInnerHTML(name,price){
        var getList = document.getElementById("listBody");
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cellItem = document.createElement("td");
        var cellPrice = document.createElement("td");

        var textName = document.createTextNode(name);
        var textPrice = document.createTextNode(price);

        getList.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cellItem);
        cellItem.appendChild(textName);
        row.appendChild(cellPrice);
        cellPrice.appendChild(textPrice);
    }





}());
