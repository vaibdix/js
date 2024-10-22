let username = 'defuser'
let password = '12345'
sessionStorage.setItem('myUsername', username);
sessionStorage.setItem('myPassword', password);
console.log(sessionStorage)

let localuser = "localdata"
let localpass = "localpass"
localStorage.setItem('localusername', localuser);
localStorage.setItem('localpass', localpass);
console.log(localStorage)


// remove -- only removes single item
// sessionStorage.removeItem("username")
// localStorage.removeItem("localpass")


// clears entire thing
// localStorage.clear()
// sessionStorage.clear()

let newvarlocal = localStorage.getItem('localuser')
console.log(newvarlocal)

let newvarsession = sessionStorage.getItem('username')
console.log(newvarsession)