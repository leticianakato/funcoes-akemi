const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Em uma linda manhã, você vê no noticiário que encontraram a cura para o câncer com medicamentos nunca utilizados antes, mas que mostram muita eficácia nas primeiras horas. A OMS empolgada com os resultados libera o tratamento sem checar as reações adversas. Qual sua reação?", 
    alternativas: [
        {
                texto: "Ficar maravilhado(a) e procurar espalhar a notícia!", 
                afirmacao: "afirmação"
            },
            {
                texto: "Ficar desconfiado(a) e aguardar sobre os resultados do tratamento.",
                afirmacao: "afirmação"
            }
    ]
},

    {
        enunciado: "Assim que você sai de casa, se depara com uma multidão correndo desesperadamente e o caos se instaurando na cidade. O que você faz?", 
    alternativas: [
         {
                texto: "Corre com a multidão.", 
                afirmacao: "afirmação"
            },
            {
                texto: "Volta para casa e procura entender o que está acontecendo.",
                afirmacao: "afirmação"
            }
    ]
    },

     {
        enunciado: "Enquanto você corre, percebe alguns cidadãos com comportamentos estranhos e assustadores, como ficar com os olhos brancos, aparentar estar em estado de decomposição, ser alvejado e mesmo assim continuar correndo, e pior, atacar diversas pessoas. O que você faz?", 
    alternativas: [
        {
                texto: "Continua correndo.", 
                afirmacao: "afirmação"
            },
            {
                texto: "Procura um abrigo mais próximo possível.",
                afirmacao: "afirmação"
            }
    ]
    },

     {
        enunciado: "Você encontra um desses seres atacando uma pessoa. O que você faz?", 
    alternativas: [
                {
                texto:  "Tenta ajudar.", 
                afirmacao: "afirmação"
            },
            {
                texto:  "Continua fugindo.",
                afirmacao: "afirmação"
            }
    ]
    },

     {
        enunciado: "A pessoa que você ajudou/ignorou era uma médica que sabia de tudo sobre esses seres, pois era a doutora que havia descoberto a cura para o cãncer, mas que causava danos gravíssimos ao cérebro, transformando aqueles que adquiriram ao medicamento em zumbis. De acordo com sua decisão anterior, você decidiu o futuro de toda humanidade, o que você escolheu?", 
    alternativas: [
                        {
                texto:  "Salvei a médica e juntos(as) estamos em busca de uma cura.",
                afirmacao: "afirmação"
            },
            {
                texto: "Deixei a médica.",
                afirmacao: "afirmação"
            }
    ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
        if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
         atual++,
         mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()