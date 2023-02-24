const recuperation = document.querySelector('.recuperation')
const h = innerHeight
recuperation.style.height= -100+h+'px'
function annime_recu() {
    recuperation.style.transform='translate(0,'+(h)+'px) '
    recuperation.style.height= -100+h+'px'
    setTimeout(() => {
        recuperation.style.display = 'none'
    }, 1000);
    
}
annime_recu()
const oubli = document.querySelector('.oublie p')
oubli.onclick = ()=>{
    recuperation.style.display = 'block'
    setTimeout(() => {
        recuperation.style.opacity='1 '
        recuperation.style.transform='translate(0,0) '
        
    }, 100);
}
const annuler = recuperation.querySelectorAll('.annuler')
annuler.forEach(el =>
    el.onclick = ()=> annime_recu()
)



const option = recuperation.querySelectorAll('.op')
const barre = recuperation.querySelector('.barre')
const par_ = recuperation.querySelector('.par_')
function barre_an(position) {
    barre.style.transition = 'all 2s'
    barre.style.transform= 'translate('+position+'px)'
    if(position >0){
        barre.style.width= '120px'
        par_.style.transform = 'translate(-51%)'
    }
    else{
        barre.style.width= '100px'
        par_.style.transform = 'translate(0px) '

    }
    

}
option[0].onclick = ()=> barre_an(-3)
    
option[1].onclick = ()=> barre_an(110)






const form = document.querySelectorAll('form')
form.forEach( el =>el.addEventListener('submit',(e)=>{
    e.preventDefault()
}))