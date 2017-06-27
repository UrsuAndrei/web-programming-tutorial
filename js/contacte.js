/**
 * Created by Ursuca on 27.06.2017.
 */


function getRow(firstName, lastName, phone)
{
    var row = '<tr> <td>'+ lastName +'</td> <td>' + firstName +'</td> <td>' + phone +'</td> </tr>'
    return row;
}
var contacte=[
    ['Ursu', 'Andrei','0700000000'],
    ['Ursu', 'Andrei','0700000000'],
    ['Ursu', 'Andrei','0700000000'],
    ['a', 'b', '0221321'],
    ['a', 'b', '0221321'],
    ['a', 'b', '0221321'],
    ['c', 'd', '07874321']
];
var tableContent =' ';
for (var i=0; i<contacte.length; i++) {
    var contact = contacte[i];
    tableContent += getRow(contact[0], contact[1], contact[2]);

}

$("#contacts-list tbody").html(tableContent);
