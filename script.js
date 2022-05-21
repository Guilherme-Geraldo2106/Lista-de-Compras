let laticinios = []
let frutas = []
let higiene = []
let limpeza = []
let mantimentos = []
let proteinas = []

function acrem() {
    let seletor = document.querySelector('#remsel')
    if (remsel.value == 'laticinios') {
        let liremove = document.querySelector('#lat')
        laticinios.shift()
        liremove.removeChild(liremove.querySelector("li")) 
    }else if (remsel.value == 'frutas') {
        let liremove = document.querySelector('#fru')
        frutas.shift()
        liremove.removeChild(liremove.querySelector("li")) 
    }else if (remsel.value == 'higiene') {
        let liremove = document.querySelector('#hig')
        higiene.shift()
        liremove.removeChild(liremove.querySelector("li"))
    }else if (remsel.value == 'limpeza') {
        let liremove = document.querySelector('#lim')
        limpeza.shift()
        liremove.removeChild(liremove.querySelector("li")) 
    }else if (remsel.value == 'mantimentos') {
        let liremove = document.querySelector('#man')
        mantimentos.shift()
        liremove.removeChild(liremove.querySelector("li"))
    }else if (remsel.value == 'proteinas') {
        let liremove = document.querySelector('#pro')
        proteinas.shift()
        liremove.removeChild(liremove.querySelector("li"))
    }
}

function acadd() {
    let remsel = document.querySelector('#remsel')
    let produtotx = document.querySelector('#produtotx')
    let produto = produtotx.value
    let item = document.createElement('li')
    item.textContent = produto
    if (produto.length > 0) {
        if (remsel.value == 'laticinios') {
            laticinios.unshift(produto)
            let liadd = document.querySelector('#lat')
            liadd.appendChild(item)
        }else if (remsel.value == 'frutas') {
            frutas.unshift(produto)
            let liadd = document.querySelector('#fru')
            liadd.appendChild(item)
        }else if (remsel.value == 'higiene') {
            higiene.unshift(produto)
            let liadd = document.querySelector('#hig')
            liadd.appendChild(item)
        }else if (remsel.value == 'limpeza') {
            limpeza.unshift(produto)
            let liadd = document.querySelector('#lim')
            liadd.appendChild(item)
        }else if (remsel.value == 'mantimentos') {
            mantimentos.unshift(produto)
            let liadd = document.querySelector('#man')
            liadd.appendChild(item)
        }else if (remsel.value == 'proteinas') {
            proteinas.unshift(produto)
            let liadd = document.querySelector('#pro')
            liadd.appendChild(item)
        }
    }else{
        alert('É preciso digitar um produto ')
    }
}



