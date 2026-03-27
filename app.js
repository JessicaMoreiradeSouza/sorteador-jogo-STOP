let letrasDisponiveis = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

function sortear() {
  const campoLetra = document.getElementById("letra");

  if (letrasDisponiveis.length === 0) {
    campoLetra.textContent = "Fim!";
    alert("Todas as letras já foram sorteadas.");
    return;
  }

  const indice = Math.floor(Math.random() * letrasDisponiveis.length);
  const letraSorteada = letrasDisponiveis[indice];

  campoLetra.textContent = letraSorteada;

  letrasDisponiveis.splice(indice, 1);
}
function reiniciar() {
    letrasDisponiveis = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
  
    document.getElementById("letra").textContent = "?";
  }