const thumbs = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector(".current-image");

// اولین عکس از اول انتخاب شده باشد
thumbs[0].classList.add("active");

thumbs.forEach((img) => {
    img.addEventListener("click", () => {
        // برداشتن حالت انتخاب از عکس قبلی
        document.querySelector(".all-imgs .active").classList.remove("active");
        img.classList.add("active");

        // عوض کردن عکس بزرگ با یک محو شدن کوتاه
        currentImage.style.opacity = 0;
        setTimeout(() => {
            currentImage.src = img.src;
            currentImage.style.opacity = 1;
        }, 200);
    });
});