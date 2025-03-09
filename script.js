const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const navMenu = document.querySelector('.nav');

burgerMenuIcon.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('open');
  navMenu.classList.toggle('show');
});

// Сегменты для работы с календарем
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const monthLabel = document.querySelector('.month ul li');
const daysList = document.querySelector('.days');

// Месяц и год
let currentMonth = 2;  // Март (0 - Январь, 1 - Февраль, 2 - Март, ...)
let currentYear = 2025;

// Функция для отображения дня месяца
function renderCalendar(month, year) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0);  // Последний день месяца
  const numberOfDays = lastDateOfMonth.getDate();  // Число дней в месяце
  const firstDayOfWeek = firstDayOfMonth.getDay();  // День недели первого числа месяца

  // Отображение месяца и года на английском
  monthLabel.innerHTML = `<span style="font-size:24px">${firstDayOfMonth.toLocaleString('en-US', { month: 'long' })}</span><br><span style="font-size:18px">${year}</span>`;

  // Очищаем старые дни
  daysList.innerHTML = '';

  // Добавляем пустые ячейки для выравнивания
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement('li');
    emptyCell.classList.add('empty');
    daysList.appendChild(emptyCell);
  }

  // Добавляем дни месяца
  for (let day = 1; day <= numberOfDays; day++) {
    const dayCell = document.createElement('li');
    dayCell.textContent = day;
    daysList.appendChild(dayCell);

    // Добавляем обработчик для выделения дня
    dayCell.addEventListener('click', function () {
      // Убираем выделение с предыдущего дня
      const activeDay = document.querySelector('.active');
      if (activeDay) {
        activeDay.classList.remove('active');
      }

      // Выделяем текущий день
      dayCell.classList.add('active');
    });
  }
}

// Обработчики для кнопок перехода между месяцами
prevButton.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Инициализация календаря
renderCalendar(currentMonth, currentYear);