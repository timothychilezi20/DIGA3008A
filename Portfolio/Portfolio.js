document.addEventListener("DOMContentLoaded", () => {
    const goToPage = {
        Drawings: "Portfolio/DrawingsPortfolio.html",
        Writing: "Portfolio/WritingPortfolio.html",
        Games: "Portfolio/GamesPortfolio.html",
        Assets: "Portfolio/AssetsPortfolio.html",
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