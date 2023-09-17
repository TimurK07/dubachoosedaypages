/* const dateButtons = document.querySelectorAll('[data-qa-marker="tour-date-btn"]');

// Получите элемент для отображения выбранного дня и даты
const selectedDateContainer = document.getElementById('selectedDateContainer');

// Обработчик событий клика
function handleDateSelection(event) {
  // Получите выбранный день и дату из элемента списка
  const day = event.target.querySelector('.day-name').textContent;
  const date = event.target.querySelector('.date-number').textContent;

  // Отображение выбранного дня и даты в контейнере
  selectedDateContainer.textContent = ` ${day}, ${date}`;
}

// Добавьте обработчик событий клика на каждый элемент списка
dateButtons.forEach((button) => {
  button.addEventListener('click', handleDateSelection);
});
 */

const dateButtons = document.querySelectorAll('[data-qa-marker="tour-date-btn"]');
const bgc = document.querySelectorAll('.gPaGhj');

  // Получите элемент для отображения выбранного дня и даты
  const selectedDateContainer = document.getElementById('selectedDateContainer');

  // Обработчик события клика
  function handleDateSelection(event) {
    // Получите выбранный день и дату из элемента списка
    const day = event.currentTarget.querySelector('.day-name').textContent;
    const date = event.currentTarget.querySelector('.date-number').textContent;

    // Отображение выбранного дня и даты в контейнере
    selectedDateContainer.textContent = `${day}, ${date}`;
  }

  // Добавьте обработчик события клика на каждый элемент списка
  dateButtons.forEach((button) => {
    button.addEventListener('click', handleDateSelection);
  });


  bgc.forEach((element) => {
    element.addEventListener("click", () => {
      
      bgc.forEach((div) => {
        div.classList.remove("clicked");
      });

      element.classList.add("clicked");

    });
    
  });