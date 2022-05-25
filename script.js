let laticinios = []
let frutas = []
let higiene = []
let limpeza = []
let mantimentos = []
let proteinas = []
let bebidas = [1]
let diversos = []

function acrem() {
    let seletor = document.querySelector('#remsel')
    if (remsel.value == 'laticinios') {
        let liremove = document.querySelector('#lat')
        laticinios.shift()
        liremove.removeChild(liremove.querySelector("li"))
        if (laticinios == '') {
            latdiv.style.display = 'none'
        }else{
            latdiv.style.display = 'grid'
        } 
    
    }else if (remsel.value == 'frutas') {
        let liremove = document.querySelector('#fru')
        frutas.shift()
        liremove.removeChild(liremove.querySelector("li"))
        if (frutas == '') {
            frudiv.style.display = 'none'
        }else{
            frudiv.style.display = 'grid'
        }  
    
    }else if (remsel.value == 'higiene') {
        let liremove = document.querySelector('#hig')
        higiene.shift()
        liremove.removeChild(liremove.querySelector("li"))
        if (higiene == '') {
            higdiv.style.display = 'none'
        }else{
            higdiv.style.display = 'grid'
        }
    
    }else if (remsel.value == 'limpeza') {
        let liremove = document.querySelector('#lim')
        limpeza.shift()
        liremove.removeChild(liremove.querySelector("li"))
        if (limpeza == '') {
            limdiv.style.display = 'none'
        }else{
            limdiv.style.display = 'grid'
        } 
    
    }else if (remsel.value == 'mantimentos') {
        let liremove = document.querySelector('#man')
        mantimentos.shift()
        if (mantimentos == '') {
            mandiv.style.display = 'none'
        }else{
            mandiv.style.display = 'grid'
        }
        liremove.removeChild(liremove.querySelector("li"))
    
    }else if (remsel.value == 'proteinas') {
        let liremove = document.querySelector('#pro')
        proteinas.shift()
        if (proteinas == '') {
            prodiv.style.display = 'none'
        }else{
            prodiv.style.display = 'grid'
        }
        liremove.removeChild(liremove.querySelector("li"))
    
    }else if (remsel.value == 'bebidas') {
        let liremove = document.querySelector('#beb')
        bebidas.shift()
        if (bebidas == '') {
            bebdiv.style.display = 'none'
        }else{
            bebdiv.style.display = 'grid'
        }
        liremove.removeChild(liremove.querySelector("li"))
   
    }else if (remsel.value == 'diversos') {
        let liremove = document.querySelector('#div')
        diversos.shift()
        if (diversos == '') {
            divdiv.style.display = 'none'
        }else{
            divdiv.style.display = 'grid'
        }
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
            if (laticinios == '') {
                latdiv.style.display = 'none'
            }else{
                latdiv.style.display = 'grid'
            }
            let liadd = document.querySelector('#lat')
            liadd.appendChild(item)
        
        }else if (remsel.value == 'frutas') {
            frutas.unshift(produto)
            let liadd = document.querySelector('#fru')
            if (frutas == '') {
                frudiv.style.display = 'none'
            }else{
                frudiv.style.display = 'grid'
            } 
            liadd.appendChild(item)
        
        }else if (remsel.value == 'higiene') {
            higiene.unshift(produto)
            let liadd = document.querySelector('#hig')
            if (higiene == '') {
                higdiv.style.display = 'none'
            }else{
                higdiv.style.display = 'grid'
            } 
            liadd.appendChild(item)
        
        }else if (remsel.value == 'limpeza') {
            limpeza.unshift(produto)
            let liadd = document.querySelector('#lim')
            if (limpeza == '') {
                limdiv.style.display = 'none'
            }else{
                limdiv.style.display = 'grid'
            } 
            liadd.appendChild(item)
        
        }else if (remsel.value == 'mantimentos') {
            mantimentos.unshift(produto)
            let liadd = document.querySelector('#man')
            liadd.appendChild(item)
            if (mantimentos == '') {
                mandiv.style.display = 'none'
            }else{
                mandiv.style.display = 'grid'
            }
        
        }else if (remsel.value == 'proteinas') {
            proteinas.unshift(produto)
            let liadd = document.querySelector('#pro')
            liadd.appendChild(item)
            if (proteinas == '') {
                prodiv.style.display = 'none'
            }else{
                prodiv.style.display = 'grid'
            }
        
        }else if (remsel.value == 'bebidas') {
            bebidas.unshift(produto)
            let liadd = document.querySelector('#beb')
            liadd.appendChild(item)
            if (bebidas == '') {
                bebdiv.style.display = 'none'
            }else{
                bebdiv.style.display = 'grid'
            }
        
        }else if (remsel.value == 'diversos') {
            diversos.unshift(produto)
            let liadd = document.querySelector('#div')
            liadd.appendChild(item)
            if (diversos == '') {
                divdiv.style.display = 'none'
            }else{
                divdiv.style.display = 'grid'
            }
        }

    }else{
        alert('É preciso digitar um produto ')
    }
}





