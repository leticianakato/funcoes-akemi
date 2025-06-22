const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Em uma linda manhã, você vê no noticiário que encontraram a cura para o câncer com medicamentos nunca utilizados antes, mas que mostram muita eficácia nas primeiras horas. A OMS empolgada com os resultados libera o tratamento sem checar as reações adversas. Qual sua reação?", 
    alternativas: [
        "Ficar maravilhado(a) e procurar espalhar a notícia!", 
        "Ficar desconfiado(a) e aguardar sobre os resultados do tratamento."
    ]
},

    {
        enunciado: "Assim que você sai de casa, se depara com uma multidão correndo desesperadamente e o caos se instaurando na cidade. O que você faz?", 
    alternativas: [
        "Corre com a multidão.", 
        "Volta para casa e procura entender o que está acontecendo."
    ]
    },

     {
        enunciado: "Enquanto você corre, percebe alguns cidadãos com comportamentos estranhos e assustadores, como ficar com os olhos brancos, aparentar estar em estado de decomposição, ser alvejado e mesmo assim continuar correndo, e pior, atacar diversas pessoas. O que você faz?", 
    alternativas: [
        "Continua correndo.", 
        "Procura um abrigo mais próximo possível."
    ]
    },

     {
        enunciado: "Você encontra um desses seres atacando uma pessoa. O que você faz?", 
    alternativas: [
        "Tenta ajudar.", 
        "Continua fugindo."
    ]
    },

     {
        enunciado: "A pessoa que você ajudou/ignorou era uma médica que sabia de tudo sobre esses seres, pois era a doutora que havia descoberto a cura para o cãncer, mas que causava danos gravíssimos ao cérebro, transformando aqueles que adquiriram ao medicamento em zumbis. De acordo com sua decisão anterior, você decidiu o futuro de toda humanidade, o que você escolheu?", 
    alternativas: [
        "Salvei a médica e juntos(as) buscamos uma cura.", 
        "Deixei a médica e a humanidade toda morreu ou virou zumbi."
    ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()