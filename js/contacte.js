/**
 * Created by Ursuca on 27.06.2017.
 */


function getRow(firstName, lastName, phone)
{
    if (phone == undefined){
        phone='';
    }
    if (typeof lastName == 'undefined'){
        lastName='';
    }
    firstName = firstName || '';
    var row = '<tr> <td>'+ lastName +'</td> <td>' + (firstName || '') +'</td> <td>' + phone +'</td> </tr>'
    return row;
}
var contacte=[
        {lastName:'Ursu', firstName:'Andrei', phone:'0700000000'},
        {lastName:'Ursu', firstName:'Andrei', phone:'0700000000'},
        {lastName:'Ursu', firstName:'Andrei', phone:'0700000000'},
        {lastName:'a', firstName:'b', phone:'0221321'},
        {lastName:'a', firstName:'b', phone:'0221321'},
        {lastName:'a', firstName:'b', phone:'0221992321321'},
        {lastName:'c', firstName:'d', phone:'07874321'},
        {firstName:'d'},
        {lastName:'absbas'}
];
var person = {
    lastName: "Ursu",
    firstName: "Andrei",
    age: 23,
    married: false,
    skills: ["html", "css", "js"],
    kids: [],
    voiceCall: function(nume)
{
    console.info("suna pe ", nume);
}
,
partener:
{
    firstName:"M",
        age
:
    18
}
};
console.info(person.firstName)
person.voiceCall("Soacra");


var tableContent =' ';
for (var i=0; i<contacte.length; i++) {
    var contact = contacte[i];
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);

}

$("#contacts-list tbody").html(tableContent);

// 1.convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)