// function chequeo() {
//     if (document.querySelector('#cbox1').checked) {
//       console.log('chuleado');
//     } else {
//       console.log('NO chuleado');
//     }
//   }

function cambioEstado(evnt){
    let padre = document.getElementById(evnt.target.parentElement.id)
    if (padre.classList.contains('ocupado')){
        padre.classList.remove('ocupado')
    }else{
        padre.classList.add('ocupado')
    }
}