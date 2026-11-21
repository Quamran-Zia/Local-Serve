// About page

// greeting.....time
let today = new Date();
let hour = today.getHours();
let message;

if (hour < 12) {
  message = "Good Morning!";
}
else if (hour < 17) {
  message = "Good Afternoon!";
}
else {
  message = "Good Evening!";
}

document.getElementById("greeting").innerHTML = message;
