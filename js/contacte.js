<<<<<<< HEAD
function getRow(contact) {
    var id = contact.id;
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td>' +
        '<td class="actions">'+
            '<span><a href="date/remove-db.php?id=' + id + '">&#x2716;</a></span> '+
            '<span><a href="#" class="edit" data-id="' + id + '">&#x270E;</a></span>'+
        '</td>' +
        '</tr>';
    return row;
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/list.php', {
    cache: false,
    dataType: 'json'
}).done(function (contacte) {
    console.debug('contacts loaded', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

    $('#contacts-list a.edit').click(function() {
        var id = $(this).data('id');
        var contact = contacte.find(function(c) {
            return c.id == id;
        });
        console.debug('remove', id, contact, this);

        $('input[name=id]').val(contact.id);
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=firstName]').val(contact.firstName);
        $('input[name=phone]').val(contact.phone);
    });
});

// 1. convert from array of arrays into json
// 3. remove contacts (UI)
// 4. edit contact (UI)
// 5. TODO php includes / templates

=======
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
>>>>>>> e425a86e58ca11eef0dcd08a3b883fea8285cecc
