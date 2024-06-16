function is_visible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function lazy_load_image(el) {
    if (is_visible(el)) {
        var src = el.getAttribute("data-src");
        if (src) {
            el.src = src;
            el.removeAttribute("data-src");
        }
    }
}

function lazy_load_images() {
    var lazy_images = document.querySelectorAll("img[data-src]");
    lazy_images.forEach(function(image) {
        lazy_load_image(image);
    });
}

document.addEventListener("DOMContentLoaded", lazy_load_images);
window.addEventListener("scroll", lazy_load_images);
window.addEventListener("resize", lazy_load_images);
