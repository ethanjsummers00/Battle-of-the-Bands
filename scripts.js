const artistImages = document.querySelector("#artistImages img");
const artistImagesCount = document.querySelectorAll("#artistImages img").length;
const imgButtons = document.querySelectorAll("#artists button");

let imageIndex = 1;
let translateX = 0;

imgButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'previous') {
            if (imageIndex !== 1) {
            imageIndex--;
            translateX += 300;
            }
        } 
        else {
            if (imageIndex !== artistImagesCount) {
            imageIndex++;
            translateX -= 300;
            }
        }
        console.log(imageIndex)
        artistImages.style.transform = `translateX(${translateX}px)`;
    });
});

var slideIndex = 1;
    displaySlide(slideIndex);

    function moveSlides(n) {
        displaySlide(slideIndex += n);
    }

    function activeSlide(n) {
        displaySlide(slideIndex = n);
    }

    /* Main function */
    function displaySlide(n) {
        var i;
        var totalslides = document.getElementsByClassName("slide");
        var artistDesc = document.querySelector(".artistDesc p");
        var artistTitle = document.querySelector(".artistDesc h2")
        var imgLeft = document.querySelector("#artistLeft img");
        var imgRight = document.querySelector("#artistRight img");

        const artist1 = '<em onclick="moveSlides(-1)"><</em> Killing Sand <em onclick="moveSlides(1)">></em>';
        const artist2 = '<em onclick="moveSlides(-1)"><</em> The Faces <em onclick="moveSlides(1)">></em>';
        const artist3 = '<em onclick="moveSlides(-1)"><</em> 12 Seconds <em onclick="moveSlides(1)">></em>';
        
        // var totaldots =
        //     document.getElementsByClassName("footerdot");

        if (n > totalslides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = totalslides.length;
        }
        for (i = 0; i < totalslides.length; i++) {
            totalslides[i].style.display = "none";
        }
        // for (i = 0; i < totaldots.length; i++) {
        //     totaldots[i].className =
        //     totaldots[i].className.replace(" active", "");
        // }
        totalslides[slideIndex - 1].style.display = "block";

        if (slideIndex == 1){
            imgLeft.src = "img/artist1.png";
            imgRight.src = "img/artist3.png";
            artistTitle.innerHTML = artist1;
            artistDesc.innerHTML ="Killing Sand is a Queen Creek band started by 3 guys from a chess club. After discovering a shared love for psychedelic rock they went on to form Killing Sand. They have their debut album releasing in August.";
        }
        else if(slideIndex == 2){
            imgLeft.src = "img/artist3.png";
            imgRight.src = "img/artist2.png";
            artistTitle.innerHTML = artist2;
            artistDesc.innerHTML ="The Faces are a Gilbert rock band who say they are most inspired by contemporary artists like the Strokes and Arctic Monkeys"
        }
        else if (slideIndex == 3){
            imgLeft.src = "img/artist2.png";
            imgRight.src = "img/artist1.png";
            artistTitle.innerHTML = artist3;
            artistDesc.innerHTML ="12 Seconds is a hard rock band with artists who all were born and raised here in Mesa. After being launched to local stardom appearing Arizona 12 news..."
        }
    }

    

    

    (function () {
        $('.hamburger-menu').on('click', function() {
            // $('.bar').toggleClass('animate');
        var mobileNav = $('.mobile-nav');
        var open = $('.icon icon-tabler icon-tabler-menu-2');
        // var exit = $('#exit');
        mobileNav.toggleClass('hide show');
        open.toggleClass('hideMen showMen');
        // exit.toggleClass('hideMen showMen');
        })
    })();

    