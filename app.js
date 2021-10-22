var loginID= document.querySelector('#loginID')
var password= document.querySelector('#password')
var checkbox= document.querySelector('#checkbox')
var valueArray = []
function findInputs() {
    valueArray.push(loginID.value)
    valueArray.push(password.value)
    console.log(valueArray)
}
function validateinput(){
    findInputs()
    console.log(!valueArray.includes(''))
    if (valueArray.includes('')){
        alert("Insert your values")
    }
}
function btnok(){
    alert("Login is Clicked")
}
function btncancel(){
    alert("Cancel is Clicked")
}
function loginf(){
if (checkbox.checked){
    alert('Logged in with remember me marked')
}
else{
    alert('Logged in ')
}
}

function clearf() {
    document.getElementById('loginID').value = ""
    document.getElementById('password').value = ""

}
