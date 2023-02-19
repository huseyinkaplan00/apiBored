document.addEventListener("click", (e) => {
  if (e.target.id === "main-buttton") {
    mainButton();
  }
});

const mainButton = () => {
  document.querySelector(
    ".video"
  ).innerHTML = `<video autoplay muted loop class="bgVideo">
    <source src="./assets/img/bgg.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>`;
  document.querySelector(".tip-container").classList.remove("d-none");
  document.getElementById("buttonTwo").classList.remove("d-none");
  document.querySelector(".contentOne").classList.add("d-none");
  newAdvice();
};

const newAdvice = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".mainText").textContent = `
      
    ${data.activity}
  
      `;
    });
};

document.getElementById("buttonTwo").addEventListener("click", function () {
  return newAdvice();
});
