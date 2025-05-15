function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const plusIcon = element.querySelector(".plus-icon");
  const minusIcon = element.querySelector(".minus-icon");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    plusIcon.style.display = "inline";
    minusIcon.style.display = "none";
  } else {
    answer.style.display = "block";
    plusIcon.style.display = "none";
    minusIcon.style.display = "inline";
  }
}
