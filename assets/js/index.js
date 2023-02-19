document.addEventListener("click", (e) => {
  if (e.target.id === "main-buttton") {
    mainButton();
  }
});
const container = () => {
  fetch("http://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".main-container").innerHTML = `
          <div class="tip-container">
          <div class="tip-box">
            <p>
             ${data.activity}
            </p>
          </div>
        </div>
        <button id="buttonTwo">Get New Advice</button>
          `;
      document
        .getElementById("buttonTwo")
        .addEventListener("click", function () {
          return container();
        });
    });
};

const mainButton = () => {
  document.querySelector(
    ".video"
  ).innerHTML = `<video autoplay muted loop class="bgVideo">
    <source src="./assets/img/bgg.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>`;
  container();
};
