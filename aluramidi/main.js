const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
  const RecebeAudio = document.querySelector(idElementoAudio);
  RecebeAudio.play();
}

listaDeTeclas.forEach((tecla) => {
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  console.log(idAudio);
});

