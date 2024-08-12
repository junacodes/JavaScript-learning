let currentIndex = 0;
const item =  document.querySelectorAll('.carousel-item');

function updateCarousel(){
    item.forEach((item, index)=>{
    if(index === currentIndex){
        item.classList.add('active');
    }else{
        item.classList.remove('active');
    }
    
    })
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % item.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + item.length) % item.length;
    updateCarousel();
}


updateCarousel();