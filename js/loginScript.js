const users = [
  { email: 'test', password: 'test' },
  { email: 'thenumansabir@gmail.com', password: 'numan' },
  { email: 'imdanishsaber@gmail.com', password: 'danish' },
]
function authentication() {
  let currentEmail = document.getElementById('email').value
  let currentPassword = document.getElementById('password').value

  let isAuthenticated = users.find((user) => {
    return user.email === currentEmail && user.password === currentPassword
  })

  if (!!isAuthenticated) {
    sessionStorage.setItem('isAuthenticated', true)
  } else {
    isInvalid()
  }
  if (!!isAuthenticated) {
    window.location.href = 'homeAppliances.html'
  } else {
    isInvalid()
  }
  function isInvalid() {
    document.getElementById('notify').style.display = 'none'
    document.getElementById('alert').style.display = 'flex'
    let effectEmail = document.getElementById('email')
    effectEmail.style.border = '1px solid red'
    effectEmail.value = ''
    document.getElementById('password').value = ''
    document.getElementById('invalid').style.visibility = 'visible'
  }
}

/*
  these are same
   (parameter)=>{}
   OR
   function(parameter){}
  */
