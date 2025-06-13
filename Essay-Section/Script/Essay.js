document.addEventListener("DOMContentLoaded", () => {
  const goToPage = {
    EthicsEssay: "../HTML/EthicsEssay.html",
    GeopoliticsEssay: "../HTML/Essay2.html",
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
