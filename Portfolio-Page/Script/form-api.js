document.addEventListener("DOMContentLoaded", () => {
  const formButton = document.getElementById("formButton");
  const contactOverlay = document.getElementById("contactOverlay");
  const contactClose = document.getElementById("contactClose");

  formButton.addEventListener("click", () => {
    contactOverlay.setAttribute("aria-hidden", "false");
    contactOverlay.classList.add("active");
  });

  // Close overlay
  contactClose.addEventListener("click", () => {
    contactOverlay.setAttribute("aria-hidden", "true");
    contactOverlay.classList.remove("active");
  });

  contactOverlay.addEventListener("click", (e) => {
    if (e.target === contactOverlay) {
      contactOverlay.setAttribute("aria-hidden", "true");
      contactOverlay.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    //  form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const endpoint = "https://formspree.io/f/xkgbraza"; //this is endpoint for my api (where the form emails will show up)

    try {
      submitButton.disabled = true;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        formMessage.style.display = "block";
        formMessage.textContent = "Thanks for your message!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.style.display = "block";
        formMessage.textContent = "Oops! Something went wrong.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.style.display = "block";
      formMessage.textContent = "Network error. Please try again.";
      formMessage.style.color = "red";
    } finally {
      submitButton.disabled = false;
    }
  });
});
