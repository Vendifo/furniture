document.addEventListener("DOMContentLoaded", function() {
    const workshopRow = document.querySelector(".workshop__row");

    function rotateImages() {
        const firstImage = workshopRow.firstElementChild;
        const secondImage = workshopRow.children[1];
        const thirdImage = workshopRow.lastElementChild;

        workshopRow.insertBefore(secondImage, null);
        workshopRow.insertBefore(thirdImage, firstImage);

        // Удаляем класс с размытием с предыдущих главных картинок
        const blurredImages = workshopRow.querySelectorAll('.main-image');
        blurredImages.forEach(image => {
            image.classList.remove('main-image', 'animate-fade');
        });

        // Накладываем класс для анимации и стилей на новую главную картинку
        firstImage.classList.add("main-image", "animate-fade");
    }

    setInterval(rotateImages, 3000);
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