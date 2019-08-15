var rIndex,
    table = document.getElementById("table1");
function addDataToTable() {
    if (!checkEmptyDetails()) {
        var newRow = table.insertRow(table.length),
            // cells are depend on your table
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),

            //here , use id to the input
            ///=============================
            //get values from input fields
            code=
                document.getElementById("code").value,
            name=
                document.getElementById("name").value,
            qty=
                document.getElementById("gty").value,
            unit=
                document.getElementById("unit").value;
//set values to the table
        cell1.innerHTML = code;
        cell2.innerHTML = name;
        cell3.innerHTML = qty;
        cell4.innerHTML = unit;

        selectedRow();
    }
}


function selectedRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("code").value = this.cells[2].innerHTML;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("qty").value = this.cells[3].innerHTML;
            document.getElementById("unit").value = this.cells[4].innerHTML;
        };
    }
}

selectedRow();

function removeRow() {
    table.deleteRow(rIndex);
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("unit").value = "";
}

// function checkEmptyDetails() {
//     var isEmpty = false;
//     code=
//         document.getElementById("code").value,
//         iname=
//             document.getElementById("name").value,
//         qty=
//             document.getElementById("qty").value,
//         credit=
//             document.getElementById("unit").value;
//
//     if (iname == "") {
//         alert("! item Name Cannot Be Empty ")
//         isEmpty = true;
//     }
//     if (code == "") {
//         alert("! Code Cannot Be Empty")
//         isEmpty = true;
//     }
//     if (qty == "") {
//         alert("! QTY Cannot Be Empty")
//         isEmpty = true;
//     }
//     if (
//         $("#btn-validation").click(function () {
//             var value = $("#tel").val();
//             var regEx = /\d{3}-\d{7}/;
//             var result = regEx.test(value);
//             if (!result) {
//                 alert("Number is Invalid");
//             }
//         })) ;
//     if (city == "") {
//         alert("! city Cannot Be Em+pty")
//         isEmpty = true;
//     }
//
//     if (zip == "") {
//         alert("! ZIP Cannot Be Empty")
//         isEmpty = true;
//     }
//     return isEmpty;
// }

function updatedetails() {
    var code1= document.getElementById("code1").value,
        name= document.getElementById("name").value,
        qty= document.getElementById("gty").value,
        unit= document.getElementById("unit").value;
    if (!checkEmptyDetails()) {
        table.rows[rIndex].cells[2].innerHTML = code1;
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = qty;
        table.rows[rIndex].cells[3].innerHTML = unit;

    }
}


