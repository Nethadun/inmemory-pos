var rIndex,
    table = document.getElementById("table");
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
            cid=
                document.getElementById("cid").value,
            cname=
                document.getElementById("cname").value,
            address=
                document.getElementById("address").value,
            credit=
                document.getElementById("credit").value;
//set values to the table
        cell1.innerHTML = cid;
        cell2.innerHTML = cname;
        cell3.innerHTML = address;
        cell4.innerHTML = credit;

        selectedRow();
    }
}


function selectedRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("cid").value = this.cells[2].innerHTML;
            document.getElementById("cname").value = this.cells[0].innerHTML;
            document.getElementById("address").value = this.cells[3].innerHTML;
            document.getElementById("credit").value = this.cells[4].innerHTML;
        };
    }
}

selectedRow();

function removeRow() {
    table.deleteRow(rIndex);
    document.getElementById("cid").value = "";
    document.getElementById("cname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("credit").value = "";
}

// function checkEmptyDetails() {
//     var isEmpty = false;
//     cid=
//         document.getElementById("cid").value,
//         cname=
//             document.getElementById("cname").value,
//         address=
//             document.getElementById("address").value,
//         credit=
//             document.getElementById("credit").value;
//
//     if (cname == "") {
//         alert("! Customer Name Cannot Be Empty ")
//         isEmpty = true;
//     }
//     if (cid == "") {
//         alert("! ID Cannot Be Empty")
//         isEmpty = true;
//     }
//     if (address == "") {
//         alert("! Address Cannot Be Empty")
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
    // if (!checkEmptyDetails()) {
    //     table.rows[rIndex].cells[2].innerHTML = code1;
    //     table.rows[rIndex].cells[0].innerHTML = name;
    //     table.rows[rIndex].cells[1].innerHTML = qty;
    //     table.rows[rIndex].cells[3].innerHTML = unit;
    //
    // }
}


