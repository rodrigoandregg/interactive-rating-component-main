const cardContentRating = document.querySelector("#rating");
const cardContentThanks = document.querySelector("#thanks");
const thanksParagraph = document.querySelector(".card__paragraph--thanks");
const ratingBtn = document.querySelectorAll(".card__btn");
const submitBtn = document.querySelector(".card__cta");
let score;

cardContentThanks.style.display = "none";

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    score = btn.textContent;
  });
});

const onSubmit = (event) => {
  if (score !== undefined) {
    event.preventDefault();
    cardContentThanks.style.display = "flex";
    cardContentRating.style.display = "none";
    thanksParagraph.textContent = `You selected ${score} out of 5`;
  }
};

submitBtn.addEventListener("click", onSubmit);
