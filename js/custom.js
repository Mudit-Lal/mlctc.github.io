


var submitted=false;
function clientvalidateForm() {
    var fullname = document.forms["query"]["entry.2005620554"].value;
    var phno = document.forms["query"]["entry.1166974658"].value;
    var email = document.forms["query"]["entry.1045781291"].value;
    var sub = document.forms["query"]["entry.288240117"].value;
    var query = document.forms["query"]["entry.839337160"].value;
    var emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    if (fullname == "") {
        alert("Full name must be filled out");
        return false;
      }
      if (phno == "") {
        alert("Phone Number must be filled out");
        return false;
      }
      if (sub == "") {
        alert("Subject must be filled out");
        return false;
      }
      if (query == "") {
        alert("Query cannot be left empty");
        return false;
      }
      if (emailformat.test(email) == false)
      {
            alert('Invalid Email Address');
            return false;
      }
      if(!client_registration.terms.checked) {
      alert("Please accept the Terms and Conditions");
      return false;
    }

}

function finalvalidate(){
  if(clientvalidateForm() == false)
  {
    submitted=false;
  }
  else{
        submitted=true;
      }
    }
