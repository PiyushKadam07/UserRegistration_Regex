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