let a =document.getElementsByClassName('XsVersion')[0]
function Move(){
    a.style.display = 'block'
   
}
function Remove(){
    a.style.display = 'none'   
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.pic1 img');
    
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            images.forEach(i => {
                if (i !== img) {
                    i.classList.add('blur');
                }
            });
        });

        img.addEventListener('mouseout', () => {
            images.forEach(i => i.classList.remove('blur'));
        });
    });
});
let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
    console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > 575 || document.documentElement.scrollTop > 575) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}