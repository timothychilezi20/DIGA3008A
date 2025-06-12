document.addEventListener("DOMContentLoaded", () => {
  const goToPage = {
    Drawings: "../HTML/DrawingsPortfolio.html",
    Writing: "../HTML/WritingPorfolio.html",
    Games: "../HTML/GamesPortfolio.html",
    Assets: "../HTML/AssetsPortfolio.html",
  };

  Object.keys(goToPage).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = goToPage[buttonId];
      });
    }
  });
});

function goBack() {
  window.history.back();
}
