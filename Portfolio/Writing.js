document.addEventListener("DOMContentLoaded", function () {
  const pdfLinks = document.querySelectorAll('.writing-work a');
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfViewer');
  const closeBtn = document.querySelector('.close');

  pdfLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      iframe.src = this.href;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    iframe.src = '';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = '';
    }
  });
});