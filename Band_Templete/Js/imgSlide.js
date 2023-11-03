let slideIndex = 0;
console.log(`slideIndex = ${slideIndex}`);

const slideShow = () => {

    // Get div.slide elements using by their class name:-
    let slides = document.getElementsByClassName("slide")

    // Intailly All Div(slide) => display: "none";
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment SlideIndex 1:-
    slideIndex++;
    console.log(`slideIndex = ${slideIndex}`);

    // Set boundary for slideIndex:-
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds:-
    setTimeout(slideShow, 3000);
}

// CallFunction:-
slideShow(); 