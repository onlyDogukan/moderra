// Mobil menü toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Dil değiştirme fonksiyonu (örnek)
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            // Burada dil değiştirme işlemleri yapılabilir
            console.log('Dil değiştirildi:', this.value);
            // Gerçek uygulamada burada dil dosyalarını yükleyebilir veya yönlendirme yapabilirsiniz
        });
    }
    
    // Sayfa yüklendiğinde aktif linki belirle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});