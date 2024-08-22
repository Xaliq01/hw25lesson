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


// function filterImages(category) {
//   var allImages = document.querySelectorAll('.pic10 .col-xs-12');
//   allImages.forEach(function(image) {
//       image.style.display = 'none';
//   });

//   if (category === 'all') {
//       allImages.forEach(function(image) {
//           image.style.display = 'block';
//       });
//   } else if (category === 'sports') {
//       document.querySelector('.img4').style.display = 'block';
//       document.querySelector('.img5').style.display = 'block';
//       document.querySelector('.img6').style.display = 'block';
//       document.querySelector('.img11').style.display = 'block';
//   } else if (category === 'other') {
//       allImages.forEach(function(image) {
//           image.style.display = 'block';
//       });
//       document.querySelector('.img4').style.display = 'none';
//       document.querySelector('.img5').style.display = 'none';
//       document.querySelector('.img6').style.display = 'none';
//       document.querySelector('.img11').style.display = 'none';
//   }
// }

// По умолчанию показывать все изображения
// filterImages('all');