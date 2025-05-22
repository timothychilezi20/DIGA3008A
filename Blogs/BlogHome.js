document.addEventListener("DOMContentLoaded", () => {
    const goToPage = {
        Week1: "AcademicWriting/Week1.html",
        Week2: "Blogs/AcademicWriting/Week2.html",
        Week3: "Blogs/AcademicWriting/Week3.html",
        Week4: "Blogs/AcademicWriting/Week4.html",
        Week5: "Blogs/AcademicWriting/Week5.html",
        Week6: "Blogs/AcademicWriting/Week6.html",
        Week7: "Blogs/AcademicWriting/Week7.html",
        Week8: "Blogs/AcademicWriting/Week8.html",
        Week9: "Blogs/AcademicWriting/Week9.html",
        Week10: "Blogs/AcademicWriting/Week10.html",
        Week11: "Blogs/AcademicWriting/Week11.html",
    }

    Object.keys(goToPage).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => {
                window.location.href = goToPage[buttonId];
            });
        }
    })
});