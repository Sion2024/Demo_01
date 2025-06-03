document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let counter = 0;
    const size = carouselSlide.children[0].clientWidth;
    const totalSlides = carouselSlide.children.length;
    let autoSlideInterval;
    
    // Set initial position
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    
    // Auto slide function
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            counter++;
            if (counter >= totalSlides) counter = 0;
            updateCarousel();
        }, 5000); // 5 seconds interval
    }
    
    // Update carousel position and active dot
    function updateCarousel() {
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[counter].classList.add('active');
    }
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= totalSlides) counter = 0;
        updateCarousel();
        resetAutoSlide();
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) counter = totalSlides - 1;
        updateCarousel();
        resetAutoSlide();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            counter = index;
            updateCarousel();
            resetAutoSlide();
        });
    });
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Handle transition end (for infinite loop)
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselSlide.children[counter].id === 'last-clone') {
            carouselSlide.style.transition = "none";
            counter = totalSlides - 2;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }
        
        if (carouselSlide.children[counter].id === 'first-clone') {
            carouselSlide.style.transition = "none";
            counter = totalSlides - counter;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }
    });
    
    // Start auto slide on page load
    startAutoSlide();
    
    // Pause on hover
    carouselSlide.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    carouselSlide.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});