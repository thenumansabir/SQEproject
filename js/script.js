// Stock Module Start
const homeStock = 5
const phoneStock = 10
const kidsStock = 20

//HomeStock
if(homeStock==0){
    document.getElementById("stock").disabled = true
}
else{
  document.getElementById("stock").disabled = false
}
if(homeStock==0){
  document.getElementById('status').innerHTML = "Out of Stock"
}
else{
document.getElementById("stock").disabled = false
}
// PhoneStock
if(phoneStock==0){
  document.getElementById("stock").disabled = true
}
else{
document.getElementById("stock").disabled = false
}
if(phoneStock==0){
document.getElementById('status').innerHTML = "Out of Stock"
}
else{
document.getElementById("stock").disabled = false
}
//KidsStock
if(kidsStock==0){
  document.getElementById("stock").disabled = true
}
else{
document.getElementById("stock").disabled = false
}
if(kidsStock==0){
document.getElementById('status').innerHTML = "Out of Stock"
}
else{
document.getElementById("stock").disabled = false
}
// Stock Module Start

// Quantity Module Start
var number = 1
function increment() {
  number++
  document.getElementById('number').innerHTML = number
  if (number > 1) {
    document.getElementById('disable').style.visibility = 'visible'
  }
  else{
    document.getElementById('disable').style.visibility = 'hidden'
  }

}
function decrement() {
    number--
    document.getElementById('number').innerHTML = number
    if (number == 1) {
      document.getElementById('disable').style.visibility = 'hidden'
    }
    else{
      document.getElementById('disable').style.visibility = 'visible'
    }
}

// Quantity Module End
// Shipping Module Start
function getData() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var address = document.getElementById("address").value;
  var province = document.getElementById("province").value;

  var data = { Fname: firstName, Lname: lastName, phone: phone, city: city, add: address, province: province};
  window.document.location = "message.html"
  console.log(data);
}
// Shipping Module End
