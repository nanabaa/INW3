const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')


btn1.addEventListener('click',()=>{
    //pega o valor do input
    const campoUsuario = document.querySelector('#filmeInput').value
    //cria um novo li
    const itemLista = document.createElement('li')
    //adiciona o item na lista
    listaFilmes.append(itemLista)
    //adiciona conteudo na lista
    itemLista.innerHTML = `<strong>Este filme é o ${campoUsuario}</strong>`
})