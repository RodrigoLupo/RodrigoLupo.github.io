var entradas = document.getElementsByClassName('entrada');
for (var i = 0; i< entradas.length; i++){
    entradas[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}