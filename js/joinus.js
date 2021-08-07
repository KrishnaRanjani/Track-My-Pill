
const joinuscollection = database.collection('joinus');
const join_us = document.getElementById("join_us");

$(document).ready(function () {
    MemberData();
    $("#join_us").click(function (e) {
      e.preventDefault();
      joinuscollection.doc($("#Cn").val()).set({
        member_name: $("#jname").val(),
        member_jemail: $("#jemail").val(),
        member_CN: $("#Cn").val(),
        member_address:$("#jaddress").val(),
        member_city:$("#jcity").val(),
        member_state: $("#jstate").val()

    }).then(() => { console.log('Data Sucessfully written'); })
    .catch(error => { console.error(error) });
});

function MemberData() {
  var ser = 1;
    joinuscollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CurrentRecord1 = doc.data();
        var  member_name = CurrentRecord1. member_name;
        var  member_jemail = CurrentRecord1.member_jemail;
        var  member_CN = CurrentRecord1.member_CN;
        var  member_address = CurrentRecord1.member_address;
        var  member_city = CurrentRecord1.member_city;
        var  member_state = CurrentRecord1.member_state;

        AddItemsToTable1(ser,member_name, member_jemail, member_CN, member_address, member_city, member_state);
        ser = ser + 1;
    });
    });

  }




  function AddItemsToTable1(ser,member_name, member_jemail, member_CN, member_address, member_city, member_state) {
    var joinuscollection = document.getElementById('joinusbody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    td0.innerHTML = ser;
    td1.innerHTML = member_name; 
    td2.innerHTML = member_jemail;
    td3.innerHTML = member_CN;
    td4.innerHTML = member_address;
    td5.innerHTML = member_city;
    td6.innerHTML = member_state;

    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    joinuscollection.appendChild(trow);
}


});


