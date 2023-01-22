/* utilizamos o . para utilizar um metodo, portanto usaremos o queryselector e buscaremos o elemento que tiver a classe que está no parenteses */
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal"); //selecionando a classe fechar-modal e armazenando na variavel const fecharModal
const video = document.getElementById("video"); //buscando o elemento pelo ID
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}
/* criamos a função acima pois não é aconselhavel repetir linhas, então fazemos a função para ser chamada quando precisamos. */
botaoTrailer.addEventListener("click", () => {
  console.log("clicou no botao abrir"); //verificando se deu certo pelo console
  alternarModal();

  /* modal.classList.toggle("aberto"); poderia ser feito assim, mas se fosse necessário trocar a classe teriamos que fazer em todos os locais que foram escritos  */

  video.setAttribute("src", linkDoVideo); //necessário pois tiramos o src quando fechamos no botão
});

botaoFecharModal.addEventListener("click", () => {
  console.log("clicou botão fechar"); //verificando se deu certo pelo console
  alternarModal();
  /* modal.classList.toggle("aberto"); //classList.remove remove a classe aberto da modal, porem a toggle retira caso tenha a classe ou adiciona caso não a tenha */
  video.setAttribute("src", ""); //src é um atributo, portanto o setAttribute, em seguida coloco-o entre aspas e depois da virgula o valor que quero passar nele
});
