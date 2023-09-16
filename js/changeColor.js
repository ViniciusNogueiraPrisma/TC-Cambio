const containerItens = document.querySelectorAll(".cadastrar-itens");

function changeColorOnScroll() {
  containerItens.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const changeColorNumbers = container.querySelectorAll(
      ".change-color-number"
    );

    if (rect.top <= window.innerHeight / 2) {
      changeColorNumbers.forEach((element) => {
        element.style.color = "#344ff4";
      });
    } else {
      changeColorNumbers.forEach((element) => {
        element.style.color = "#BBBBBB";
      });
    }
  });
}

window.addEventListener("scroll", changeColorOnScroll);
