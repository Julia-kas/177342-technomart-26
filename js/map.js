var map_btn = document.querySelector(".map-show");
var map_modal = document.querySelector(".modal-map");
var map_close = map_modal.querySelector(".button-close");

map_btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_modal.classList.add("modal-open");
})

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_modal.classList.remove("modal-open");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map_modal.classList.contains("modal-open")) {
            map_modal.classList.remove("modal-open");
        }
    }
});