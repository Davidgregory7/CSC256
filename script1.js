// Array containing the locations of the slideshow images
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let currentImage = 0;

const slideImage = document.getElementById("slideImage");
const imageNumber = document.getElementById("imageNumber");

// Displays the current image
function displayImage() {
    slideImage.src = images[currentImage];

    imageNumber.textContent =
        "Image " + (currentImage + 1) + " of " + images.length;
}

// Move to the next image
function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    displayImage();
}

// Move to the previous image
function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    displayImage();
}

// Display the first image when the page loads
displayImage();