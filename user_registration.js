//uc1 user first name cap with min. 3 characters
function validation(uname,regx) {
    if (regx.test(uname) == false) {
        console.log(uname);
        throw 'Not Valid';
    }
    else {
        console.log(uname,'Valid');
    }
}

var firstname = "Pk1";
var regx = /^[A-Z]([\w]{3})([\w]+)?$/;
console.log("****** First Name ******");
try {
    validation(firstname,regx);
    }
catch(e) {
    console.error(e);
}

//uc2_valid_lastname user last name start with cap with min. 3 characters
var lastname = "Mehta";
console.log("****** Last Name ******");  
try {
    validation(lastname,regx);
    }
catch(e) {
    console.error(e);
}

//uc3_valid_email user email 
var email = "abc.xyz@bl.co.in";
console.log("****** Email ******");
var regx = /^([\w]+)(.)([\w]+)?(@)([\w]+)(.)([\w]{2,3})(.)?([\w]{2,3})?$/;
try {
    validation(email,regx);
    }
catch(e) {
    console.error(e);
}

//uc4_valid_mobile Country code follow by space and 10 digit number
var mobile = "91 9876543210";
var regx = /^[9][1][\s][6789][\d]{9}$/;
console.log("****** Mobile No. ******");
try {
    validation(mobile, regx);
    }
catch(e) {
    console.error(e);
}

//uc5_password1 User need to follow pre-defined Password rules.Rule1 – minimum 8 Characters
var password1 = "qwerty89";
var regx = /^[a-zA-Z0-9]{8}$/;
console.log("****** Password-1 ******");
try {
    validation(password1, regx);
    var alt = "@wertyu8";
    validation(alt,regx);
    }
catch(e) {
    console.error(e);
}

//uc6_password2 Rule2 – Should have at least 1 Upper Case
var password2 = "Qwerty89";
var regx = /^[A-Z]([a-zA-Z0-9]{7})$/;
console.log("****** Password-2 ******");
try {
    validation(password2, regx);
    var alt = "@wertyu8";
    validation(alt,regx);
    }
catch(e) {
    console.error(e);
}

//uc7_password3 Rule3 – Should have at least 1 numeric number in the password
var password3 = "Q7wertyu";
var regx = /^[A-Z][\d]?([a-zA-Z0-9]{7})([\w]+)?$/;
console.log("****** Password-3 ******");
try {
    validation(password3, regx);
    var alt = "@wertyu8";
    validation(alt,regx);
    }
catch(e) {
    console.error(e);
}

//uc8_password4 Rule4 – Has exactly 1 Special Character
var password4 = "Q7@wertyu3";
var regx = /^[A-Z][\d]?([!@#$%^&*])([a-zA-Z0-9]{7})([\w]+)?$/;
console.log("****** Password-4 ******");
try {
    validation(password4, regx);
    var alt = "@wertyu8";
    validation(alt,regx);
    }
catch(e) {
    console.error(e);
}
