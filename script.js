const cards = document.querySelectorAll(".card");
const container = document.querySelector(".card-container");
const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    element.target.classList.toggle("view", element.isIntersecting);
  });
});

cards.forEach((card) => observer.observe(card));

const lastElementObserver = new IntersectionObserver((elements) => {
  if (elements[0].isIntersecting) appendElements();
  lastElementObserver.disconnect();
  lastElementObserver.observe(document.querySelector(".card:last-child"));
});

lastElementObserver.observe(document.querySelector(".card:last-child"));
const appendElements = () => {
  console.log("hel");
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = "New card";
    container.append(div);
    observer.observe(div);
  }
};
