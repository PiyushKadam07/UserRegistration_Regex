//uc1 user first name cap with min. 3 characters
function validation(uname,regx) {
    if (regx.test(uname) == false) {
        throw 'Not Valid';
    }
    else {
        console.log('Valid');
    }
}

var firstname = "Pk1";
var regx = /^[A-Z]([\w]{3})([\w]+)?$/;
try {
    console.log(firstname);
    validation(firstname,regx);
    }
catch(e) {
    console.error(e);
}

//uc2_valid_lastname user last name start with cap with min. 3 characters
var lastname = "Mehta";  
try {
    console.log(lastname);
    validation(lastname,regx);
    }
catch(e) {
    console.error(e);
}

//uc3_valid_email user email 
var email = "abc.xyz@bl.co.in";
console.log(email);
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
console.log(mobile);
try {
    validation(mobile, regx);
    }
catch(e) {
    console.error(e);
}