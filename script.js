const acardionBtns = document.getElementsByClassName("questions__item-btn");

for (let i = 0; i < acardionBtns.length; i++) {
  acardionBtns[i].addEventListener("click", function (e) {
    e.target
      .closest(".questions__item-btn")
      .classList.toggle("questions__item-btn--active");
    e.target
      .closest(".questions__item-btn")
      .nextElementSibling.classList.toggle("active");
  });
}

function myBurger() {
  var x = document.getElementById("burger");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtnModal");

var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function passvalues() {
  var firstname = document.getElementById("questions__btn").value;
  localStorage.setItem("");
}

function questionsBtn() {
  window.location.assign("https://optimistic-swirles-06b80a.netlify.app/");
}
