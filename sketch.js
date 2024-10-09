// Através da minha janela, 16, romance/comédia, 
// Escola do bem e do mal, 14, fantasia,
// A fuga das galinhas, LIVRE, infantil/comédia,
// Continência ao amor, 14, romance/musical,
// A barraca do beijo, 12, comédia/romance,
// Fuja, 16, terror,
// Para todos os garotos que já amei, 12, comédia romântica,
// Depois do Universo, 14, romance/comédia,
// Minha mãe é uma peça, 12, comédia,
// Cinquenta tons de cinza, 16, erótica/romance, 

let campoIdade;
let campoRomance;
let campoComédia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes")
  createSpan("Sua idade:");
  campoIdade = createInput("15");
  campoRomance = createCheckbox("gostaDeRomance ?");
  campoComédia = createCheckbox("gostaDeComédia ?")
}

function draw() {
  background("White");
  let idade = campoIdade.value();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeComédia = campoComédia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance);
  fill (color(76, 0, 115));
  textAlign (CENTER, CENTER);
  textSize(38);
  text(recomendacao, width/2, height/2);
  
}

function geraRecomendacao(idade, gostaDeRomance, gostaDeComédia) {
  if (idade >=10) {
    if (idade >= 16){
      return "continência ao amor";
    } else {
      if (idade>=12){
        if(gostaDeComédia || gostaDeRomance) {
        return "Através da minha janela" ;
        } else {
          return "Minha mãe é uma peça";
          }
      if (gostaDeRomance){
    return "Depois do Universo";
      } else {
          return "Fuja";
  }
}
    if (gostaDeRomance){
    return "A barraca do beijo"
    } else {
      return "Escola do bem e do mal"
  } 
}
}
  }