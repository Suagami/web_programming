document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".main__tab");

  tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          // Удаляем класс active со всех вкладок
          tabs.forEach((item) => item.classList.remove("active"));
          
          // Добавляем класс active к выбранной вкладке
          tab.classList.add("active");
      });
  });
});
