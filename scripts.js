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