//  Book Service page

// Click event to fills the provider into the booking form
// showing warning if a provider is busy
function chooseProvider(name, status) {
  if (status == "busy") {
    alert("This provider is busy today, please choose another.");
  }
  else {
    document.getElementById("provider").value = name;
  }
}

// runs when the form is submitted
function checkForm() {
  let provider = document.getElementById("provider").value;
  let date = document.getElementById("date").value;
  let details = document.getElementById("details").value.trim();

  if (provider == "" || date == "" || details == "") {
    alert("All fields are mandatory");
    return false;
  }
  else if (details.length < 10) {
    alert("Address and problem should be at least 10 characters");
    return false;
  }
  else {
    alert("Request submitted successfully!");
    return true;
  }
}
