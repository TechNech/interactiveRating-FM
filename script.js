const rating = document.querySelectorAll("li");
const submitBtn = document.querySelector("button");
const error = document.querySelector(".error");
const enterText = document.querySelector("span");
const ratingSection = document.querySelector(".rating");
const thanksSection = document.querySelector(".thank-you");

rating.forEach(function (val) {
  val.addEventListener("click", inputRating);
});

submitBtn.addEventListener("click", submitRating);

function inputRating(e) {
  // console.log("e valuea: ", e.target.innerHTML);

  rating.forEach(function (val) {
    val.classList.remove("active");
    if (e.target.innerHTML == val.innerHTML) {
      val.classList.add("active");
      // console.log("rating value: ", val.innerHTML);
    }
  });
}

function submitRating() {
  rating.forEach(function (event) {
    if (event.classList.contains("active")) {
      enterText.innerHTML = event.innerHTML;
      ratingSection.style.display = "none";
      thanksSection.style.display = "flex";
      // console.log("e valuea: ", event.innerHTML);
    } else {
      error.style.display = "block";
    }
  });

  // console.log("Submit button: ", submitBtn);
}
