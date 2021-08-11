//uc1 user first name cap with min. 3 characters
function validation(u_name) {
    var regx = /^[A-Z]([\w]{3})([\w]+)?$/;
    if (regx.test(uname) == false) {
        throw 'Not Valid';
    }
    else {
        console.log('Valid');
    }
}

var uname = "Pk1";
console.log(uname);
try {
    validation(uname);
    }
catch(e) {
    console.error(e);
}