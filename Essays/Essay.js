document.addEventListener("DOMContentLoaded", () => {
  const goToPage = {
    EthicsEssay: "Essays/EthicsEssay.html",
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
