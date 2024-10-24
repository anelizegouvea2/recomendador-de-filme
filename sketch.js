//Divertida Mente, aventura, familia, L
//A Caminho da Lua, fantasia, aventura, 10
//Percy Jackson e o Ladrão de Raios, fantasia, 12
//Ladrões de Bicicleta, 12
//O menino que descobriu o vento, 14
//O Estranho Mundo de Jack, fantasia, L
//Homem-Aranha: Através do Aranhaverso, aventura, 10

 let campoIdade;
 let campoFantasia;
 let campoAventura;

function setup() {
  createCanvas(800,400);
  createElement("h2", "Recomendador de filmes");
  createSpan("sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("gostaDeFantasia");
  campoAventura = createCheckbox("Gosta de aventura?");
  }

function draw() {
  background("#169646");
  let idade= campoIdade. value ();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao=
geraRecomendacao(idade,gostaDeFantasia, gostaDeAventura);
  
  fill(color("#FFFFFF"));
  textAlign(CENTER,CENTER);
  textSize(30);
  text(recomendacao, width / 3, height / 2);
}

 function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "A Caminho da Lua"; 
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (idade >=10)
        if (gostaDeFantasia) {
          return "Percy Jackson e o Ladrão de Raios";
        } else {
          if (gostaDeAventura)
          return "Homem-Aranha: Através do Aranhaverso";
        }
      }
    }
  } else {
       if (idade <=10)
    if (gostaDeFantasia) {
      return "O Estranho Mundo de Jack"; //L
    } else {
          if (gostaDeAventura)
      return "Divertida Mente" //L
    }
  }
}


    

        

            

    

        