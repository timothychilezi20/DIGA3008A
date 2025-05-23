document.addEventListener("DOMContentLoaded", () => {
    const goToPage = {
        Drawings: "DrawingsPortfolio.html",
        Writing: "WritingPorfolio.html",
        Games: "GamesPortfolio.html",
        Assets: "AssetsPortfolio.html",
    }

    Object.keys(goToPage).forEach(buttonId => {
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