document.addEventListener("DOMContentLoaded", () => {
    const goToPage = {
        Week1: "AcademicWriting/Week1.html",
        Week2: "AcademicWriting/Week2.html",
        Week3: "AcademicWriting/Week3.html",
        Week4: "AcademicWriting/Week4.html",
        Week5: "AcademicWriting/Week5.html",
        Week6: "AcademicWriting/Week6.html",
        Week7: "AcademicWriting/Week7.html",
        Week8: "AcademicWriting/Week8.html",
        Week9: "AcademicWriting/Week9.html",
        Week10: "AcademicWriting/Week10.html",
        Week11: "AcademicWriting/Week11.html",
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
