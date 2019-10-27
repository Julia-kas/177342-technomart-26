var mail_btn = document.querySelector(".mail-show");
var mail_modal = document.querySelector(".modal-mail");
var mail_close = mail_modal.querySelector(".button-close");

mail_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mail_modal.classList.add("modal-open");
  mail_name.focus();
})

mail_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  mail_modal.classList.remove("modal-open");
  mail_modal.classList.remove("modal-error");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mail_modal.classList.contains("modal-open")) {
      mail_modal.classList.remove("modal-open");
      mail_modal.classList.remove("modal-error");
    }
  }
});

var mail_form = mail_modal.querySelector("form");
var mail_name = mail_modal.querySelector("[name=name]");
var mail_email = mail_modal.querySelector("[name=email]");
var mail_textarea = mail_modal.querySelector("[name=textarea]");

mail_form.addEventListener("submit", function (evt) {
  if (!mail_name.value || !mail_email.value || !mail_textarea.value) {
    evt.preventDefault();
    mail_modal.classList.remove("modal-error");
    mail_modal.offsetWidth = mail_modal.offsetWidth;
    mail_modal.classList.add("modal-error");
  }
});

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