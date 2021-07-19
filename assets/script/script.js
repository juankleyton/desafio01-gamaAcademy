if(localStorage.nome){
    document.getElementById('nome').value = localStorage.nome
}
if(localStorage.email){
    document.getElementById('email').value = localStorage.email
}  
if(localStorage.celular){
    document.getElementById('celular').value = localStorage.celular
}

const form = document.querySelector('#formulario')

form.addEventListener('submit', (enviar) => {
    enviar.preventDefault()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let check = document.getElementById('check')

    localStorage.setItem('nome', nome)
    localStorage.setItem('email', email)
    localStorage.setItem('celular', celular)

    if(check.checked){
        check.value = true
        localStorage.setItem('check', check.value)
    } else {
        check.value = false
        localStorage.setItem('check', check.value)
    }
})