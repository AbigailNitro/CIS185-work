
    let slideIndex = 1;

function plusSlides(n) {
    let image =
    document.getElementById('profile');
    let page =
    image.title;
    let filepath =
    "Images" + page + "/" + page + slideIndex + ".jpg";
    let rootpath =
    image.classList.item(0) + "/" + filepath + ".jpg";
    slideIndex += n;
    if (slideIndex == 0) {
    slideIndex = 10;
}
while (slideIndex > image.classList.item(1)) {
    if(n == 1) {
        slideIndex = 1;
    }
    else {
        slideIndex--;
        
    }
}
    filepath =
    "Images" + page + "/" + page + slideIndex + ".jpg";
    rootpath =
    image.classList.item(0) + "/" + filepath + ".jpg";

image.src = filepath;
}
