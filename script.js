
document.addEventListener("DOMContentLoaded", function () {

    if (document.title === "My Story Website") {
        console.log("Welcome to your Story Website!");
    }

    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease";

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });

});
