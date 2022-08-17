    const slider = document.getElementById("slider")
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    
    var slideNumber = 0;
    
    //image slider next button
    nextBtn.addEventListener("click", () => {
        slider.classList.remove("right-left");
        slider.classList.add("left-right");
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber++;
        if(slideNumber>(numberOfSlides - 1)){
            slideNumber = 0 ;
        }
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        
    });
    //image slider priv button
    prevBtn.addEventListener("mouseover",()=>{
        slider.classList.remove("left-right");
        slider.classList.add("right-left");

    });
    prevBtn.addEventListener("click", () => {
        
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber--;
        if(slideNumber < 0){
            slideNumber = numberOfSlides - 1 ;
        }
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        
    });  
    //auto play
    var playslider;
    var repeater = () => {
        slider.classList.remove("right-left");
        slider.classList.add("left-right");
        playslider = setInterval(function () {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcons) => {
                slideIcons.classList.remove("active");
            });
            slideNumber++;
            if(slideNumber>(numberOfSlides - 1)){
                slideNumber = 0 ;
            }
            
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 3000);
    
    }
    repeater();

    // stop autoplay
    slider.addEventListener("mouseover", () => {
        clearInterval(playslider);
        
    });
    // start again
    slider.addEventListener("mouseout", () => {
        repeater();
    });

    // manual botton
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    const s3 = document.querySelector('.s3');
    const s4 = document.querySelector('.s4');
    const s5 = document.querySelector('.s5');
    s1.addEventListener("mouseover",()=>{
        slider.classList.remove("left-right");
        slider.classList.add("right-left");
    });
    s2.addEventListener("mouseover",()=>{
        if (s3.classList.contains('active') || s4.classList.contains('active') || s5.classList.contains('active')) {
            slider.classList.remove("left-right");
            slider.classList.add("right-left");    
        }
        
    });
    s3.addEventListener("mouseover",()=>{
        if (s4.classList.contains('active') || s5.classList.contains('active')) {
            slider.classList.remove("left-right");
            slider.classList.add("right-left");    
        }
        
    });
    s4.addEventListener("mouseover",()=>{
        if (s5.classList.contains('active')) {
            slider.classList.remove("left-right");
            slider.classList.add("right-left");    
        }
        
    });
    s1.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber = 0;
        slider.classList.remove("right-left");
        slider.classList.add("left-right");
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        

    });
    s2.addEventListener("click", () => {
        
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber = 1;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        
    });
    s3.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber = 2;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");

    });
    s4.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber = 3;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");

    });
    s5.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
        slideNumber = 4;
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");

    });