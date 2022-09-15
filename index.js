const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    } )
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }) 
}

const imgMain = document.getElementById("imgmain");
        const imgSmall = document.getElementsByClassName("sm");

        const  product = document.getElementsByClassName("container-product");
        product[0].onclick = function(){
            imgMain.src = product.img[0].src;
        }

        product[1].onclick = function(){
            imgMain.src = product.img[1].src;
        }

        product[2].onclick = function(){
            imgMain.src = product.img[2].src;
        }

        product[3].onclick = function(){
            imgMain.src = product.img[3].src;
        }