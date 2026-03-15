console.log("Connected");

function collet_data()
{
    let isnamevalid= collect_name();
    let isageValid = collect_age();
// let name = document.getElementById("PatientName").value;
// console.log(name);


// let PatientAge = document.getElementById("Age").value;
// console.log(PatientAge);

// let DateOfBirth = document.getElementById("DOB").value;
// console.log(DateOfBirth); 

// let name = document.getElementById("PatientName");
// var para1 = document.getElementById("demo");
// para1.innerHTML="Patient Name: "+ name.value;

// let age = document.getElementById("Age");
// var para2 = document.getElementById("PAge");
// para2.innerHTML= "Patient Age: " + age.value;


return false;
}

function collect_name()
{
    let name = document.getElementById("PatientName").value;
    console.log(name);
    if(name =="")
    {
        document.getElementById("NameError").innerHTML="Name Can not be Empty";
        return false;
    }
    else if(name.length<5)
    {
        document.getElementById("NameError").innerHTML="Name Must carry atleast 5 Char";
        return false;
    }
    else {

    }
    return false;
}
function collect_age()
{
    let age = document.getElementById("Age").value;
    console.log(age);
    if(age == "")
    {
        document.getElementById("AgeError").innerHTML="Age Can not be Empty";
        return false;
    }
    else{

    }
    return false;
}