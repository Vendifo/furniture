document.addEventListener("DOMContentLoaded", function () {

    const workshopRow = document.querySelector(".workshop__row");

    workshopRow.children[1].classList.add("main-image");

    function rotateImages() {
        const firstImage = workshopRow.firstElementChild;
        const secondImage = workshopRow.children[1];
        const thirdImage = workshopRow.lastElementChild;

        workshopRow.insertBefore(secondImage, null);
        workshopRow.insertBefore(firstImage, thirdImage);

        // Удаляем класс с размытием с предыдущих главных картинок
        const blurredImages = workshopRow.querySelectorAll('.main-image');
        blurredImages.forEach(image => {
            image.classList.remove('main-image', 'animate-fade');
        });

        // Накладываем класс для анимации и стилей на новую главную картинку
        thirdImage.classList.add("main-image", "animate-fade");
    }

    setInterval(rotateImages, 2000);

    const sharesRow = document.querySelector(".shares__row");

    function rotateImagesShare() {
        const firstImage = sharesRow.firstElementChild;
        const secondImage = sharesRow.children[1];
        const thirdImage = sharesRow.lastElementChild;

        sharesRow.insertBefore(secondImage, null);
        sharesRow.insertBefore(thirdImage, firstImage);

        // Удаляем класс с размытием с предыдущих главных картинок
        const blurredImages = sharesRow.querySelectorAll('.main-image-share');
        blurredImages.forEach(image => {
            image.classList.remove('main-image-share', 'animate-fade');
        });

        // Накладываем класс для анимации и стилей на новую главную картинку
        firstImage.classList.add("main-image-share", "animate-fade");
    }

    setInterval(rotateImagesShare, 4000);



    var recomItems = document.querySelectorAll('.recom__item');
    var factoryItems = document.querySelectorAll('.about-factory__card--left');
    var factoryItemsRight = document.querySelectorAll('.about-factory__card--right');

    function checkVisibility() {
        // Проверяем ширину экрана
        if (window.innerWidth > 1100) {
            recomItems.forEach(function (item) {
                if (isElementInViewport(item)) {
                    item.classList.add('show');
                }
            });
        }
    }

    function checkVisibilityCard() { 
        if (window.innerWidth > 1100) {
            factoryItems.forEach(function (item) {
                if (isElementInViewport(item)) {
                    item.classList.add('show');
                }
            });
        }
    }

    function checkVisibilityCardRight() { 
        if (window.innerWidth > 1100) {
            factoryItemsRight.forEach(function (item) {
                if (isElementInViewport(item)) {
                    item.classList.add('show');
                }
            });
        }
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Запустить проверку видимости при загрузке страницы и при скролле
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    checkVisibilityCard();
    window.addEventListener('scroll', checkVisibilityCard);

    checkVisibilityCardRight();
    window.addEventListener('scroll', checkVisibilityCardRight);
});



function selectCategory(button) {
    // Убираем класс selected у всех кнопок
    const buttons = document.querySelectorAll('.catalog__category__item');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });

    // Добавляем класс selected к нажатой кнопке
    button.classList.add('selected');
}


