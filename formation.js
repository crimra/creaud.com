function createElement (){
    var labo = document.querySelector('.labo');
    var span = document.createElement('span');
    var size = Math.random() * 10;
    console.log(size);

    span.style.width = size + 'px'
    span.style.height = size + 'px'
    

    labo.appendChild(span)

    setTimeout(() => {
        span.remove();
    }, 9000);
    
}

setInterval(createElement, 1000)