document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../image_scrolls/deviant5.gif",
        "../image_scrolls/deviant7.png",
        "../image_scrolls/deviant8.gif",
        "../image_scrolls/deviant9.gif",
        "../image_scrolls/deviant10.gif",
        "../image_scrolls/deviant11.gif",
        "../image_scrolls/deviant12.gif",
        "../image_scrolls/deviant13.gif"
  
    ];

    let lastIndex = -1;

    function getRandomIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === lastIndex); 
        lastIndex = newIndex;
        return newIndex;
    }

    const randomImage = images[getRandomIndex()];

    const bgElement = document.getElementById("bgImage");
    bgElement.style.backgroundImage = `url(${randomImage})`;
    bgElement.style.backgroundSize = "cover";      
    bgElement.style.backgroundPosition = "center"; 
    bgElement.style.backgroundRepeat = "no-repeat"; 
});
