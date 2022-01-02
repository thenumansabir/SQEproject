// Order number genarator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  document.getElementById('order').innerHTML = getRndInteger(1000000,9999999)
  