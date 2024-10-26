const password=document.getElementById("password")
const length=20
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const specialsym="!@#$%&^*?"

const allchars= uppercase + lowercase + numbers + specialsym
function randompassword(){
    let passwordvalue=""
    passwordvalue+=uppercase[Math.floor(Math.random()*uppercase.length)]
    passwordvalue+=lowercase[Math.floor(Math.random()*lowercase.length)]
    passwordvalue+=numbers[Math.floor(Math.random()*numbers.length)]
    passwordvalue+=specialsym[Math.floor(Math.random()*specialsym.length)]
    while(passwordvalue.length<length){
        passwordvalue+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    password.value=passwordvalue

}
document.querySelector("#button").addEventListener('click',randompassword)

function copypass(){
    password.select();
    document.execCommand("copy")
}
document.querySelector("#copy").addEventListener('click',copypass)

