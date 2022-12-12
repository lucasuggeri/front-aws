const input = document.getElementById("input");
const button = document.getElementById("enviar");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const texto = input.value;
  if (texto === "Keren Nicole de Almeida") {
    window.location.href = "./pg1.html";
    return;
  } else {
    window.location.href = "./error.html";
    return;
  }
});

/**
 * clicar
 * verificar
 * encaminhar para link
 */
