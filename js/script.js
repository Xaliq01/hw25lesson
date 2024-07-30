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