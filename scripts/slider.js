document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Dot'ları oluştur
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Slider'ı başlat
    function startSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }
    
    // Belirli bir slayta git
    function goToSlide(slideIndex) {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
        });
        
        // Aktif slaytı güncelle
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = slideIndex;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Sonraki slayta git
    function nextSlide() {
        if (currentSlide === slideCount - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }
    
    // Önceki slayta git
    function prevSlide() {
        if (currentSlide === 0) {
            goToSlide(slideCount - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Buton event listener'ları
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Otomatik slayt geçişi
    let sliderInterval = setInterval(nextSlide, 5000);
    
    // Slider'a hover olunca otomatik geçişi durdur
    slider.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    });
    
    // Slider'dan çıkınca otomatik geçişi tekrar başlat
    slider.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, 5000);
    });
    
    // Klavye kontrolleri
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Başlangıçta slider'ı ayarla
    startSlider();
});