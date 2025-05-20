document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".letterbox-image"); 

        images.forEach(img => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("letterbox-wrapper"); 
            img.parentNode.insertBefore(wrapper, img);
            wrapper.append(img);

            img.addEventListener("click", () => {
                images.forEach(i => i.classList.remove("selected")); 
                img.classList.add("selected");
                selectedImageSrc = img.src;
            })
        });
    });

    document.getElementById("view-button").addEventListener("click", () => {
        if (!selectedImageSrc) {
            alert("Click an image to select it first");
            return;
        }

        document.getElementById("view-button").addEventListener("click ", () => {
            if(!selectedImageSrc){
                alert("Click an image to select it first.");
                return;
            }

            document.getElementById("lightbox-image").src = selectedImageSrc;
            document.getElementById("lightbox-overlay").classList.remove("hidden");
        });

        document.getElementById("lightbox-close").addEventListener("click", () =>{
            document.getElementById("lightbox-overlay").classList.add("hidden");
        });
    });
