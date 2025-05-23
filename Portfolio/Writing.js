const modal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");
  const closeBtn = document.querySelector(".closeBtn");

  function openPDF(pdfPath) {
    pdfViewer.src = pdfPath;
    modal.style.display = "flex";
  }

  closeBtn.onclick = function () {
    modal.style.display = "none";
    pdfViewer.src = "";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      pdfViewer.src = "";
    }
  }