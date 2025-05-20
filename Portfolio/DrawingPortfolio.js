document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".letterbox-image"); 

        images.forEach(img => {
            const wrapper = document.createElement("div");

            wrapper.classList.add("letterbox-wrapper"); 

            wrapper.style.position = "relative";
        wrapper.style.width = "100%";
        wrapper.style.maxWidth = "500px";
        wrapper.style.aspectRatio = "16 / 9";
        wrapper.style.backgroundColor = "black";
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        wrapper.style.margin = "auto";
        wrapper.style.overflow = "hidden";

        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.style.objectFit = "contain";

        const parent = img.parentNode; 
        parent.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        });
    });
