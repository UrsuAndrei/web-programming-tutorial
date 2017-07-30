/**
 * Created by Ursuca on 27.06.2017.
 */
function getRow(contact)
{   var id=contact.id;
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';
    var phone = contact.phone || '';
    var row = '<tr> <td>'+ lastName +'</td> <td>' + (firstName || '') +'</td> <td>' + phone +'</td>'+
        '<td class="actions">'+'' +
        '<span><a href="date/remove.html?id=' + id + '"> &#x2718;</a></span>  '+
        '<span><a href="#">&#x270E;</a></span>'+
        '</td>' +'</tr>'
    return row;
}
// var person = {
//     lastName: "Ursu",
//     firstName: "Andrei",
//     age: 23,
//     married: false,
//     skills: ["html", "css", "js"],
//     kids: [],
//     voiceCall: function(nume) {
//     console.info("suna pe ", nume);
//     },
//     partener: {
//         firstName: "M",
//         age: 18
//     }
// };
// console.info(person.firstName)
// person.voiceCall("Soacra");


var tableContent =' ';
// for (var i=0; i<contacte.length; i++) {
//     createRow(contacte[i]);
// }
function createRow(contact) {
    return tableContent+=getRow(contact);
}
$.ajax('date/contacte.json').done(function (contacte){
    console.info('contacte', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
    });

// 1.convert from array of arrays into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. edit contact (UI)