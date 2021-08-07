var firebaseConfig = {
  apiKey: "AIzaSyDp_m6Syhhmcr6PP-vI-aGSN0vzAicnkIM",
  authDomain: "trackmypill-c0c5c.firebaseapp.com",
  projectId: "trackmypill-c0c5c",
  storageBucket: "trackmypill-c0c5c.appspot.com",
  messagingSenderId: "20044484113",
  appId: "1:20044484113:web:bc49905f437fa520056bb0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;



$(document).ready(function () {

  $("#btn-login").click(function () {
    var mail = $("#mail").val();
    var password = $("#password").val();
    if (mail != "" && password != "") {
      var result = firebase.auth().signInWithEmailAndPassword(mail, password);

      result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode)
        onsole.log(errorMessage)

        windows.alert("Message :" + errorMessage)
      });

    }
    else {
      window.alert("Enter a Valid data");
    }
  }
  );
});

$(document).ready(function () {

  $("#btn-signup").click(function () {
    var mail = $("#mail").val();
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (mail != "" && password != "" && repassword != "") {
      if (password == repassword) {
        var result = firebase.auth().createUserWithEmailAndPassword(mail, password);

        result.catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode)
          onsole.log(errorMessage)

          windows.alert("Message :" + errorMessage)
        });

      }
      else {
        window.alert("Password not matched with confirm password");
      }

    }
    else {
      window.alert("Enter a Valid data");
    }
  }
  );
});


$(document).ready(function () {

  $("#btn-logout").click(function () {
    firebase.auth().signOut();
  });
});

//---- Data description---//

const patientid = document.getElementById("patientid");
const patientname = document.getElementById("patientname");
const patientmedrec = document.getElementById("patientmedrec");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const contactno1 = document.getElementById("contact-no1");
const contactno2 = document.getElementById("contact-no2");
const patEmail = document.getElementById("pat-Email");
const PatAddress = document.getElementById("Pat-Address");
const PatCity = document.getElementById("Pat-City");
const PatState = document.getElementById("Pat-State");
const inputZip = document.getElementById("inputZip");
const tretstart = document.getElementById("tret-start");
const tretEnd = document.getElementById("tret-End");
const tretDuration = document.getElementById("tret-Duration");
const preDisease = document.getElementById("pre-Disease");
const patCondition = document.getElementById("pat-Condition");
const presTiming = document.getElementById("pres-Timing");
const presDur = document.getElementById("pres-Dur");
const DoctorName = document.getElementById("Doctor-Name");
const DocNum = document.getElementById("Doc-Num");
const HospitalName = document.getElementById("HospitalName");
const HospitalLocation = document.getElementById("Hospital-Location");
const addpatient = document.getElementById("addpatient");
const updatepatient = document.getElementById("updatepatient");
const patientreason = document.getElementById("reason");
const rpatientname = document.getElementById("rpatientname");
const removepatientid = document.getElementById("removepatientid");
const removepatient = document.getElementById("removepatient");

//----DB Constrain---//

const database = firebase.firestore();
const patientcollection = database.collection('patientRecord');
const removecollection = database.collection('DeleteRecord');
const highriskcollection = database.collection('HighRisk');
const attentioncollection = database.collection('Attention Needed');
const lowriskcollection = database.collection('Low Rish');


$(document).ready(function () {
  SelectAllData();
  $("#addpatient").click(function (e) {
    e.preventDefault();
    patientcollection.doc($("#patientid").val()).set({
      Patient_ID: patientid.value,
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_FirstName: FirstName.value,
      patient_LastName: LastName.value,
      patient_age: Number(age.value),
      patient_gender: gender.value,
      patient_dob: dob.value,
      patient_contactno1: Number(contactno1.value),
      patient_contactno2: Number(contactno2.value),
      patient_Email: patEmail.value,
      patient_PatAddress: PatAddress.value,
      patient_city: PatCity.value,
      Patient_State:PatState.value,
      patient_inputZip: Number(inputZip.value),
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_preDisease: preDisease.value,
      patient_patCondition: patCondition.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value,
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value
    }).then(() => { console.log('Data Sucessfully written'); })
      .catch(error => { console.error(error) });
  });

  

  //----Update of record ---//



  $("#updatepatient").click(function (e) {
    e.preventDefault();
    patientcollection.doc(patientid.value).update({
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value,
      patient_preDisease: preDisease.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value
    }).then(() => { console.log("Updated successfully"); })
      .catch(error => { console.error(error) });
  });

  $("#updatepatient").click(function (e) {
    e.preventDefault();
    highriskcollection.doc(patientid.value).update({
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value,
      patient_preDisease: preDisease.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value
    }).then(() => { console.log("Updated successfully"); })
      .catch(error => { console.error(error) });

  });

  $("#updatepatient").click(function (e) {
    e.preventDefault();
    lowriskcollection.doc(patientid.value).update({
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value,
      patient_preDisease: preDisease.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value
    }).then(() => { console.log("Updated successfully"); })
      .catch(error => { console.error(error) });

  });


  $("#updatepatient").click(function (e) {
    e.preventDefault();
    attentioncollection.doc(patientid.value).update({
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value,
      patient_preDisease: preDisease.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value
    }).then(() => { console.log("Updated successfully"); })
      .catch(error => { console.error(error) });

  });

  // ----Removal of record ---//

  


  //----Patient management table ---//
  function SelectAllData() {
    patientcollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CurrentRecord = doc.data();
        var Patient_ID = CurrentRecord.Patient_ID;
        var Name = CurrentRecord.patient_Name;
        var FirstName = CurrentRecord.patient_FirstName;
        var LastName = CurrentRecord.patient_LastName;
        var Age = CurrentRecord.patient_age;
        var Gender = CurrentRecord.patient_gender;
        var DOB = CurrentRecord.patient_dob;
        var Contact_Number = CurrentRecord.patient_contactno1;
        var Secondary_Number = CurrentRecord.patient_contactno2;
        var Email = CurrentRecord.patient_Email;
        var Address = CurrentRecord.patient_PatAddress;
        var City = CurrentRecord.patient_city;
        var State = CurrentRecord.Patient_State;
        var Zip = CurrentRecord.patient_inputZip;
        var Treatment_Start_Date = CurrentRecord.patient_tretstart;
        var Treatment_End_Date = CurrentRecord.patient_tretEnd;
        var Treatment_Duration = CurrentRecord.patient_tretDuration;
        var Reason = CurrentRecord.patient_preDisease;
        var Patients_Condition = CurrentRecord.patient_patCondition;
        var Prescription_timing = CurrentRecord.patient_presTiming;
        var Medication_Hours = CurrentRecord.patient_presDur;
        var Doctor_Name = CurrentRecord.patient_DoctorName;
        var Doctor_Number = CurrentRecord.patient_DocNum;
        var Hospital_Name = CurrentRecord.patient_HospitalName;
        var Hospital_Location = CurrentRecord.patient_HospitalLocation;
        AddItemsToTable(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State, Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location);

      });
    });
    //   firebase.database().ref('patientRecord').once('value',
    //   function(AllRecords){
    //     AllRecords.forEach(
    //       function(currentRecord){
    //           var Patient_ID = CurrentRecord.val().Patient_ID;
    //           var Name = CurrentRecord.val().patient_Name;
    //           var FirstName = CurrentRecord.val().patient_FirstName;
    //           var LastName = CurrentRecord.val().patient_LastName;
    //           var Age = CurrentRecord.val().patient_age;
    //           var Gender = CurrentRecord.val().patient_gender;
    //           var DOB = CurrentRecord.val().patient_dob;
    //           var Contact_Number = CurrentRecord.val().patient_contactno1;
    //           var Secondary_Number = CurrentRecord.val().patient_contactno2;
    //           var Email = CurrentRecord.val().patient_Email;
    //           var Address = CurrentRecord.val().patient_PatAddress;
    //           var City = CurrentRecord.val().patient_PatState;
    //           var Zip = CurrentRecord.val().patient_inputZip;
    //           var Treatment_Start_Date = CurrentRecord.val().patient_tretstart;
    //           var Treatment_End_Date = CurrentRecord.val().patient_tretEnd;
    //           var Treatment_Duration = CurrentRecord.val().patient_tretDuration;
    //           var Reason = CurrentRecord.val().patient_preDisease;
    //           var Patients_Condition = CurrentRecord.val().patient_patCondition;
    //           var Prescription_timing = CurrentRecord.val().patient_presTiming;
    //           var Medication_Hours = CurrentRecord.val().patient_presDur;
    //           var Doctor_Name = CurrentRecord.val().patient_DoctorName;
    //           var Doctor_Number = CurrentRecord.val().patient_DocNum;
    //           var Hospital_Name = CurrentRecord.val().patient_HospitalName;
    //           var Hospital_Location = CurrentRecord.val().patient_HospitalLocation;
    //           AddItemsToTable(Patient_ID, Name,FirstName,LastName,Age,Gender,DOB,Contact_Number,Secondary_Number,Email,Address,City,Zip,Treatment_Start_Date,Treatment_End_Date,Treatment_Duration,Reason,Patients_Condition,Prescription_timing,Medication_Hours,Doctor_Name,Doctor_Number,Hospital_Name,Hospital_Location);

    //       }
    //     );
    // });
  }

  //----adding data to the  table ---//
  // var stdNo = 0;

  function AddItemsToTable(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State,  Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location) {
    var Patientrecord = document.getElementById('Patientrecordbody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');
    var td18 = document.createElement('td');
    var td19 = document.createElement('td');
    var td20 = document.createElement('td');
    var td21 = document.createElement('td');
    var td22 = document.createElement('td');
    var td23 = document.createElement('td');
    var td24 = document.createElement('td');
    var td25 = document.createElement('td');


    // td0.innerHTML = ++stdNo;
    td1.innerHTML = Patient_ID;
    td2.innerHTML = Name;
    td3.innerHTML = FirstName;
    td4.innerHTML = LastName;
    td5.innerHTML = Age;
    td6.innerHTML = Gender;
    td7.innerHTML = DOB;
    td8.innerHTML = Contact_Number;
    td9.innerHTML = Secondary_Number;
    td10.innerHTML = Email;
    td11.innerHTML = Address;
    td12.innerHTML = City;
    td13.innerHTML = State;
    td14.innerHTML = Zip;
    td15.innerHTML = Treatment_Start_Date;
    td16.innerHTML = Treatment_End_Date;
    td17.innerHTML = Treatment_Duration;
    td18.innerHTML = Reason;
    td19.innerHTML = Patients_Condition;
    td20.innerHTML = Prescription_timing;
    td21.innerHTML = Medication_Hours;
    td22.innerHTML = Doctor_Name;
    td23.innerHTML = Doctor_Number;
    td24.innerHTML = Hospital_Name;
    td25.innerHTML = Hospital_Location;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    trow.appendChild(td19);
    trow.appendChild(td20);
    trow.appendChild(td21);
    trow.appendChild(td22);
    trow.appendChild(td23);
    trow.appendChild(td24);
    trow.appendChild(td25);
    Patientrecord.appendChild(trow);
  }


    //----Patient management table ---//


});

$(document).ready(function () {
  RemovalRecord();
  $("#removepatient").click(function (e) {
    e.preventDefault();
    removecollection.doc($("#removepatientid").val()).set({
      Patient_ID: removepatientid.value,
      patient_Name: rpatientname.value,
      reason: patientreason.value

    }).then(() => { console.log('Data Sucessfully written'); })
      .catch(error => { console.error(error) });
  });



  $("#removepatient").click(function (e) {
    e.preventDefault();
    patientcollection.doc($("#removepatientid").val()).delete();

  });

  $("#removepatient").click(function (e) {
    e.preventDefault();
    highriskcollection.doc($("#removepatientid").val()).delete();

  });

  $("#removepatient").click(function (e) {
    e.preventDefault();
    lowriskcollection.doc($("#removepatientid").val()).delete();
  });
  $("#removepatient").click(function (e) {
    e.preventDefault();
    attentioncollection.doc($("#removepatientid").val()).delete();
  });


  
  function RemovalRecord() {
    var no = 1;
    removecollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var CurrentRecord2 = doc.data();
            var Patient_ID = CurrentRecord2.Patient_ID;
            var patient_Name = CurrentRecord2.patient_Name;
            var  reason = CurrentRecord2.reason;

            AddItemsToTable2(no, Patient_ID, patient_Name, reason );
            no = no + 1;
        });
    });

}


function AddItemsToTable2(no, Patient_ID, patient_Name, reason) {
    var removecollection = document.getElementById('Removebody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    

    td0.innerHTML = no;
    td1.innerHTML = Patient_ID;
    td2.innerHTML = patient_Name;
    td3.innerHTML = reason;
    

    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    removecollection.appendChild(trow);
}
});

//---patient high risk details table---///
$(document).ready(function () {
  Highriskrecord();
  $("#addpatient").click(function (e) {
    if (patCondition.value == "High Risk") {
      highriskcollection.doc($("#patientid").val()).set({
        Patient_ID: patientid.value,
        patient_Name: patientname.value,
        patient_MEDREC: patientmedrec.value,
        patient_FirstName: FirstName.value,
        patient_LastName: LastName.value,
        patient_age: Number(age.value),
        patient_gender: gender.value,
        patient_dob: dob.value,
        patient_contactno1: Number(contactno1.value),
        patient_contactno2: Number(contactno2.value),
        patient_Email: patEmail.value,
        patient_PatAddress: PatAddress.value,
        patient_city: PatCity.value,
        Patient_State:PatState.value,
        patient_inputZip: Number(inputZip.value),
        patient_tretstart: tretstart.value,
        patient_tretEnd: tretEnd.value,
        patient_tretDuration: Number(tretDuration.value),
        patient_preDisease: preDisease.value,
        patient_patCondition: patCondition.value,
        patient_presTiming: presTiming.value,
        patient_presDur: presDur.value,
        patient_DoctorName: DoctorName.value,
        patient_DocNum: Number(DocNum.value),
        patient_HospitalName: HospitalName.value,
        patient_HospitalLocation: HospitalLocation.value
      }).then(() => { console.log('Data Sucessfully written'); })
        .catch(error => { console.error(error) });
    }
  });


  function Highriskrecord() {
    highriskcollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CurrentRecord = doc.data();
        var Patient_ID = CurrentRecord.Patient_ID;
        var Name = CurrentRecord.patient_Name;
        var FirstName = CurrentRecord.patient_FirstName;
        var LastName = CurrentRecord.patient_LastName;
        var Age = CurrentRecord.patient_age;
        var Gender = CurrentRecord.patient_gender;
        var DOB = CurrentRecord.patient_dob;
        var Contact_Number = CurrentRecord.patient_contactno1;
        var Secondary_Number = CurrentRecord.patient_contactno2;
        var Email = CurrentRecord.patient_Email;
        var Address = CurrentRecord.patient_PatAddress;
        var City = CurrentRecord.patient_city;
        var State = CurrentRecord.Patient_State;
        var Zip = CurrentRecord.patient_inputZip;
        var Treatment_Start_Date = CurrentRecord.patient_tretstart;
        var Treatment_End_Date = CurrentRecord.patient_tretEnd;
        var Treatment_Duration = CurrentRecord.patient_tretDuration;
        var Reason = CurrentRecord.patient_preDisease;
        var Patients_Condition = CurrentRecord.patient_patCondition;
        var Prescription_timing = CurrentRecord.patient_presTiming;
        var Medication_Hours = CurrentRecord.patient_presDur;
        var Doctor_Name = CurrentRecord.patient_DoctorName;
        var Doctor_Number = CurrentRecord.patient_DocNum;
        var Hospital_Name = CurrentRecord.patient_HospitalName;
        var Hospital_Location = CurrentRecord.patient_HospitalLocation;
        AddItemsToTable3(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State, Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location);

      });
    });
   

  function AddItemsToTable3(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State,  Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location) {
    var highriskcollection = document.getElementById('Highrecordbody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');
    var td18 = document.createElement('td');
    var td19 = document.createElement('td');
    var td20 = document.createElement('td');
    var td21 = document.createElement('td');
    var td22 = document.createElement('td');
    var td23 = document.createElement('td');
    var td24 = document.createElement('td');
    var td25 = document.createElement('td');


    td1.innerHTML = Patient_ID;
    td2.innerHTML = Name;
    td3.innerHTML = FirstName;
    td4.innerHTML = LastName;
    td5.innerHTML = Age;
    td6.innerHTML = Gender;
    td7.innerHTML = DOB;
    td8.innerHTML = Contact_Number;
    td9.innerHTML = Secondary_Number;
    td10.innerHTML = Email;
    td11.innerHTML = Address;
    td12.innerHTML = City;
    td13.innerHTML = State;
    td14.innerHTML = Zip;
    td15.innerHTML = Treatment_Start_Date;
    td16.innerHTML = Treatment_End_Date;
    td17.innerHTML = Treatment_Duration;
    td18.innerHTML = Reason;
    td19.innerHTML = Patients_Condition;
    td20.innerHTML = Prescription_timing;
    td21.innerHTML = Medication_Hours;
    td22.innerHTML = Doctor_Name;
    td23.innerHTML = Doctor_Number;
    td24.innerHTML = Hospital_Name;
    td25.innerHTML = Hospital_Location;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    trow.appendChild(td19);
    trow.appendChild(td20);
    trow.appendChild(td21);
    trow.appendChild(td22);
    trow.appendChild(td23);
    trow.appendChild(td24);
    trow.appendChild(td25);
    highriskcollection.appendChild(trow);
  }
}
});

//---patient attention needed  risk details table---///
$(document).ready(function () {
  attentionnrecord();
  $("#addpatient").click(function (e) {
    if (patCondition.value == "Attention Needed") {
      attentioncollection.doc($("#patientid").val()).set({
        Patient_ID: patientid.value,
        patient_Name: patientname.value,
        patient_MEDREC: patientmedrec.value,
        patient_FirstName: FirstName.value,
        patient_LastName: LastName.value,
        patient_age: Number(age.value),
        patient_gender: gender.value,
        patient_dob: dob.value,
        patient_contactno1: Number(contactno1.value),
        patient_contactno2: Number(contactno2.value),
        patient_Email: patEmail.value,
        patient_PatAddress: PatAddress.value,
        patient_city: PatCity.value,
        Patient_State:PatState.value,
        patient_inputZip: Number(inputZip.value),
        patient_tretstart: tretstart.value,
        patient_tretEnd: tretEnd.value,
        patient_tretDuration: Number(tretDuration.value),
        patient_preDisease: preDisease.value,
        patient_patCondition: patCondition.value,
        patient_presTiming: presTiming.value,
        patient_presDur: presDur.value,
        patient_DoctorName: DoctorName.value,
        patient_DocNum: Number(DocNum.value),
        patient_HospitalName: HospitalName.value,
        patient_HospitalLocation: HospitalLocation.value
      }).then(() => { console.log('Data Sucessfully written'); })
        .catch(error => { console.error(error) });
    }
  });


  function attentionnrecord() {
    attentioncollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CurrentRecord = doc.data();
        var Patient_ID = CurrentRecord.Patient_ID;
        var Name = CurrentRecord.patient_Name;
        var FirstName = CurrentRecord.patient_FirstName;
        var LastName = CurrentRecord.patient_LastName;
        var Age = CurrentRecord.patient_age;
        var Gender = CurrentRecord.patient_gender;
        var DOB = CurrentRecord.patient_dob;
        var Contact_Number = CurrentRecord.patient_contactno1;
        var Secondary_Number = CurrentRecord.patient_contactno2;
        var Email = CurrentRecord.patient_Email;
        var Address = CurrentRecord.patient_PatAddress;
        var City = CurrentRecord.patient_city;
        var State = CurrentRecord.Patient_State;
        var Zip = CurrentRecord.patient_inputZip;
        var Treatment_Start_Date = CurrentRecord.patient_tretstart;
        var Treatment_End_Date = CurrentRecord.patient_tretEnd;
        var Treatment_Duration = CurrentRecord.patient_tretDuration;
        var Reason = CurrentRecord.patient_preDisease;
        var Patients_Condition = CurrentRecord.patient_patCondition;
        var Prescription_timing = CurrentRecord.patient_presTiming;
        var Medication_Hours = CurrentRecord.patient_presDur;
        var Doctor_Name = CurrentRecord.patient_DoctorName;
        var Doctor_Number = CurrentRecord.patient_DocNum;
        var Hospital_Name = CurrentRecord.patient_HospitalName;
        var Hospital_Location = CurrentRecord.patient_HospitalLocation;
        AddItemsToTable4(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State, Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location);

      });
    });
   

  function AddItemsToTable4(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State,  Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location) {
    var attentioncollection = document.getElementById('attentionrecordbody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');
    var td18 = document.createElement('td');
    var td19 = document.createElement('td');
    var td20 = document.createElement('td');
    var td21 = document.createElement('td');
    var td22 = document.createElement('td');
    var td23 = document.createElement('td');
    var td24 = document.createElement('td');
    var td25 = document.createElement('td');


    td1.innerHTML = Patient_ID;
    td2.innerHTML = Name;
    td3.innerHTML = FirstName;
    td4.innerHTML = LastName;
    td5.innerHTML = Age;
    td6.innerHTML = Gender;
    td7.innerHTML = DOB;
    td8.innerHTML = Contact_Number;
    td9.innerHTML = Secondary_Number;
    td10.innerHTML = Email;
    td11.innerHTML = Address;
    td12.innerHTML = City;
    td13.innerHTML = State;
    td14.innerHTML = Zip;
    td15.innerHTML = Treatment_Start_Date;
    td16.innerHTML = Treatment_End_Date;
    td17.innerHTML = Treatment_Duration;
    td18.innerHTML = Reason;
    td19.innerHTML = Patients_Condition;
    td20.innerHTML = Prescription_timing;
    td21.innerHTML = Medication_Hours;
    td22.innerHTML = Doctor_Name;
    td23.innerHTML = Doctor_Number;
    td24.innerHTML = Hospital_Name;
    td25.innerHTML = Hospital_Location;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    trow.appendChild(td19);
    trow.appendChild(td20);
    trow.appendChild(td21);
    trow.appendChild(td22);
    trow.appendChild(td23);
    trow.appendChild(td24);
    trow.appendChild(td25);
    attentioncollection.appendChild(trow);
  }
}
});

//---patient low risk details table---///
$(document).ready(function () {
  lowriskrecord();
  $("#addpatient").click(function (e) {
    if (patCondition.value == "Low Risk") {
      lowriskcollection.doc($("#patientid").val()).set({
        Patient_ID: patientid.value,
      patient_Name: patientname.value,
      patient_MEDREC: patientmedrec.value,
      patient_FirstName: FirstName.value,
      patient_LastName: LastName.value,
      patient_age: Number(age.value),
      patient_gender: gender.value,
      patient_dob: dob.value,
      patient_contactno1: Number(contactno1.value),
      patient_contactno2: Number(contactno2.value),
      patient_Email: patEmail.value,
      patient_PatAddress: PatAddress.value,
      patient_city: PatCity.value,
      Patient_State :PatState.value,
      patient_inputZip: Number(inputZip.value),
      patient_tretstart: tretstart.value,
      patient_tretEnd: tretEnd.value,
      patient_tretDuration: Number(tretDuration.value),
      patient_preDisease: preDisease.value,
      patient_patCondition: patCondition.value,
      patient_presTiming: presTiming.value,
      patient_presDur: presDur.value,
      patient_DoctorName: DoctorName.value,
      patient_DocNum: Number(DocNum.value),
      patient_HospitalName: HospitalName.value,
      patient_HospitalLocation: HospitalLocation.value
      }).then(() => { console.log('Data Sucessfully written'); })
        .catch(error => { console.error(error) });
    }
  });


  function lowriskrecord() {
    lowriskcollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CurrentRecord = doc.data();
        var Patient_ID = CurrentRecord.Patient_ID;
        var Name = CurrentRecord.patient_Name;
        var FirstName = CurrentRecord.patient_FirstName;
        var LastName = CurrentRecord.patient_LastName;
        var Age = CurrentRecord.patient_age;
        var Gender = CurrentRecord.patient_gender;
        var DOB = CurrentRecord.patient_dob;
        var Contact_Number = CurrentRecord.patient_contactno1;
        var Secondary_Number = CurrentRecord.patient_contactno2;
        var Email = CurrentRecord.patient_Email;
        var Address = CurrentRecord.patient_PatAddress;
        var City = CurrentRecord.patient_city;
        var State = CurrentRecord.Patient_State;
        var Zip = CurrentRecord.patient_inputZip;
        var Treatment_Start_Date = CurrentRecord.patient_tretstart;
        var Treatment_End_Date = CurrentRecord.patient_tretEnd;
        var Treatment_Duration = CurrentRecord.patient_tretDuration;
        var Reason = CurrentRecord.patient_preDisease;
        var Patients_Condition = CurrentRecord.patient_patCondition;
        var Prescription_timing = CurrentRecord.patient_presTiming;
        var Medication_Hours = CurrentRecord.patient_presDur;
        var Doctor_Name = CurrentRecord.patient_DoctorName;
        var Doctor_Number = CurrentRecord.patient_DocNum;
        var Hospital_Name = CurrentRecord.patient_HospitalName;
        var Hospital_Location = CurrentRecord.patient_HospitalLocation;
        AddItemsToTable5(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State, Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location);

      });
    });
   

  function AddItemsToTable5(Patient_ID, Name, FirstName, LastName, Age, Gender, DOB, Contact_Number, Secondary_Number, Email, Address, City, State,  Zip, Treatment_Start_Date, Treatment_End_Date, Treatment_Duration, Reason, Patients_Condition, Prescription_timing, Medication_Hours, Doctor_Name, Doctor_Number, Hospital_Name, Hospital_Location) {
    var lowriskcollection = document.getElementById('lowrecordbody');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');
    var td18 = document.createElement('td');
    var td19 = document.createElement('td');
    var td20 = document.createElement('td');
    var td21 = document.createElement('td');
    var td22 = document.createElement('td');
    var td23 = document.createElement('td');
    var td24 = document.createElement('td');
    var td25 = document.createElement('td');


    td1.innerHTML = Patient_ID;
    td2.innerHTML = Name;
    td3.innerHTML = FirstName;
    td4.innerHTML = LastName;
    td5.innerHTML = Age;
    td6.innerHTML = Gender;
    td7.innerHTML = DOB;
    td8.innerHTML = Contact_Number;
    td9.innerHTML = Secondary_Number;
    td10.innerHTML = Email;
    td11.innerHTML = Address;
    td12.innerHTML = City;
    td13.innerHTML = State;
    td14.innerHTML = Zip;
    td15.innerHTML = Treatment_Start_Date;
    td16.innerHTML = Treatment_End_Date;
    td17.innerHTML = Treatment_Duration;
    td18.innerHTML = Reason;
    td19.innerHTML = Patients_Condition;
    td20.innerHTML = Prescription_timing;
    td21.innerHTML = Medication_Hours;
    td22.innerHTML = Doctor_Name;
    td23.innerHTML = Doctor_Number;
    td24.innerHTML = Hospital_Name;
    td25.innerHTML = Hospital_Location;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    trow.appendChild(td19);
    trow.appendChild(td20);
    trow.appendChild(td21);
    trow.appendChild(td22);
    trow.appendChild(td23);
    trow.appendChild(td24);
    trow.appendChild(td25);
    lowriskcollection.appendChild(trow);
  }
}
});