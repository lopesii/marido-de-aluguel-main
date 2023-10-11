let radio = document.querySelector('.manual-btn')
let cont = 1;


document.getElementById('radio1').checked = true

setInterval(()=> {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const target = link.getAttribute('href');
  
      if (target) {
        const targetSection = document.querySelector(target);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });




  function menuAtivo() {
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open')
      document.querySelector('.icon').src = "assets/imgs/menu-hamburguer-abrir.svg";
    } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon').src = "assets/imgs/menu-hamburguer-fechar1.svg";

    }
  }