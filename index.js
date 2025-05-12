// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    
  slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 5000);
  console.log(intervalId);
}
function showSlide(index){

}
function prevSlide(){

}
function nextSlide(){

}