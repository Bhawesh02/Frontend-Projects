const images_slider= document.getElementById("images-slider");
const slider1_slides = document.querySelectorAll(".slider1_slide");
const slider2_slides = document.querySelectorAll(".slider2_slide");
const numberofslider1_slides = slider1_slides.length;
const numberofslider2_slides = slider2_slides.length;
const nextBtn = document.querySelector(".n-next-btn");
const prevBtn = document.querySelector(".n-prev-btn");
const islider1 = document.getElementById("slider1");
const islider2 = document.getElementById("slider2");
var slider1_slideNumber = 0;
var slider2_slideNumber = 1;

//image slider next button
    nextBtn.addEventListener("click", () => {
        islider1.classList.remove("r-l");
        islider2.classList.remove("r-l");
        islider1.classList.add("l-r");
        islider2.classList.add("l-r");
        slider1_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider2_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider1_slideNumber++;
        slider2_slideNumber++;
        if(slider1_slideNumber>(numberofslider1_slides - 1)){
            slider1_slideNumber = 0 ;
        }
        if(slider2_slideNumber>(numberofslider2_slides - 1)){
            slider2_slideNumber = 0 ;
        }
        slider1_slides[slider1_slideNumber].classList.add("active");
        slider2_slides[slider2_slideNumber].classList.add("active");
        
    });
    //image slider priv button
    prevBtn.addEventListener("mouseover",()=>{
        
    });
    prevBtn.addEventListener("click", () => {
        islider1.classList.remove("l-r");
        islider2.classList.remove("l-r");
        islider1.classList.add("r-l");
        islider2.classList.add("r-l");
        slider1_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider2_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider1_slideNumber--;
        slider2_slideNumber--;
        if(slider1_slideNumber<0){
            slider1_slideNumber = numberofslider1_slides-1 ;
        }
        if(slider2_slideNumber<0){
            slider2_slideNumber = numberofslider2_slides-1 ;
        }
        slider1_slides[slider1_slideNumber].classList.add("active");
        slider2_slides[slider2_slideNumber].classList.add("active");
        
    });
//autoplay
var playslider;
var repeater = () => {
    playslider = setInterval(function () {
        islider1.classList.remove("r-l");
        islider2.classList.remove("r-l");
        islider1.classList.add("l-r");
        islider2.classList.add("l-r");
        slider1_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider2_slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slider1_slideNumber++;
        slider2_slideNumber++;
        if(slider1_slideNumber>(numberofslider1_slides - 1)){
            slider1_slideNumber = 0 ;
        }
        if(slider2_slideNumber>(numberofslider2_slides - 1)){
            slider2_slideNumber = 0 ;
        }
        slider1_slides[slider1_slideNumber].classList.add("active");
        slider2_slides[slider2_slideNumber].classList.add("active");
    }, 3000);
    
}
repeater();
// stop autoplay
images_slider.addEventListener("mouseover", () => {
        
    clearInterval(playslider); 
});
// start again
images_slider.addEventListener("mouseout", () => {
    repeater();
})

// Image viewer

var modal = document.getElementById('myModal');
var images = document.querySelectorAll(".Images");
var modalImg = document.getElementById("img01");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;
        clearInterval(playslider); 
    });
});
//Image closer
modal.onclick = function() {
    modal.style.display = "none";
};

//slideshow start and stop
modal.addEventListener("mouseover", () => {
    clearInterval(playslider); 
});

