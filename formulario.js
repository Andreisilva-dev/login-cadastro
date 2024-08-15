
document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault()

    let password = document.getElementById('password').value

    let confirmarPassword = document.getElementById('confirmarPassword').value
    
    if(password !== confirmarPassword){
        alert("As senhas não coincidem");
        return
    }
})

