document.addEventListener("DOMContentLoaded", function () {
    const openings = [
        {
            name: "Ruy Lopez",
            description: "O Ruy Lopez, também conhecido como Abertura Espanhola, é uma das aberturas mais clássicas e respeitadas do xadrez. Seu nome vem do padre espanhol Ruy López de Segura, que estudou o jogo no século XVI. Esse sistema foca no desenvolvimento eficiente das peças e no controle do centro, criando oportunidades estratégicas para as brancas enquanto desafia a estrutura das pretas.",
            overview: "O Ruy Lopez começa com os seguintes lances: 1. e4, e5 2. Nf3, Nc6 3. Bb5. Aqui, as brancas imediatamente atacam o cavalo c6 das pretas, que está defendendo o peão central em e5. Isso pode levar a várias respostas por parte das pretas, sendo as mais populares: 3...a6 (Defesa Morphy) e 3...Nf6 (Defesa Berlim). Esta abertura é amplamente utilizada por jogadores de elite e já foi empregada por campeões mundiais como Bobby Fischer, Garry Kasparov e Magnus Carlsen.",
            lines: "3...a6 (Defesa Morphy): As pretas forçam o bispo branco a decidir se vai capturar o cavalo ou recuar. Se 4. Ba4, o jogo continua normalmente; se 4. Bxc6, as pretas ficam com um par de bispos e uma estrutura de peões levemente enfraquecida. 3...Nf6 (Defesa Berlim): Uma linha sólida e defensiva que se tornou extremamente popular, especialmente após Vladimir Kramnik usá-la para derrotar Garry Kasparov no Campeonato Mundial de 2000. 3...d6 (Defesa Steinitz Clássica): Um lance mais passivo que protege o peão de e5, mas restringe a mobilidade das peças pretas.",
            plans: "As brancas geralmente buscam uma forte presença central com c3 e d4, desenvolvendo suas peças harmoniosamente e preparando um ataque no flanco do rei. As pretas podem tentar um jogo mais ativo com ...d5 ou ...f5 em algumas linhas. Dependendo da resposta das pretas, a luta pode seguir um caminho posicional ou tático.",
            image: "images/ruy_lopez.png"
        },
        {
            name: "King's Indian Attack",
            description: "O King's Indian Attack (KIA) não é exatamente uma abertura tradicional, mas sim um sistema flexível que pode ser usado contra diversas respostas das pretas. Ele é caracterizado por um desenvolvimento tranquilo e sólido, preparando um ataque no flanco do rei. Foi uma das favoritas de Bobby Fischer.",
            overview: "O KIA começa frequentemente com: 1. Nf3, d5 2. g3. A ideia principal é desenvolver as peças de forma sólida e adotar uma estrutura semelhante à Defesa Indiana do Rei, mas jogando de brancas. O bispo fianquetado em g2 se torna uma peça poderosa, mirando no centro e dando suporte a futuras jogadas agressivas.",
            lines: "Ataque Padrão: As brancas jogam d3, Nbd2, e4, h3 e, em muitos casos, tentam iniciar um ataque com f4. Estratégia contra a Francesa: O KIA pode ser usado como resposta contra a Defesa Francesa (1.e4 e6), evitando algumas linhas indesejadas das pretas. Transposição para o Sistema Colle: Em algumas situações, o KIA pode se assemelhar ao Sistema Colle, com desenvolvimento natural e ataque no centro.",
            plans: "O plano principal das brancas é expandir no flanco do rei com h3, g4 e f5, criando um ataque perigoso. Se as pretas não reagirem rapidamente, podem ser esmagadas por um ataque irresistível contra seu rei.",
            image: "images/kings_indian_attack.png"
        },
        {
            name: "Queen's Gambit",
            description: "O Gambito da Dama é uma das aberturas mais jogadas e respeitadas no xadrez. Ele se baseia na ideia de oferecer temporariamente um peão para obter vantagem posicional. Seu nome vem da natureza do sacrifício aparente do peão da dama para controlar o centro e ganhar espaço.",
            overview: "O Queen's Gambit começa com os lances: 1. d4, d5 2. c4. As brancas oferecem um peão para desestabilizar a posição das pretas. Se as pretas aceitarem o gambito (2...dxc4), então as brancas podem rapidamente recuperar o peão enquanto dominam o centro com e4. Se as pretas recusarem (2...e6 ou 2...c6), então geralmente entram na Defesa Ortodoxa ou na Defesa Slava, respectivamente.",
            lines: "Queen’s Gambit Aceito (QGA) - 2...dxc4: As pretas tomam o peão e tentam segurá-lo, mas frequentemente as brancas conseguem recuperar o material e manter uma posição forte. Queen’s Gambit Recusado (QGD) - 2...e6: As pretas adotam uma postura mais sólida, defendendo o centro e planejando um contra-ataque posterior. Defesa Slava - 2...c6: Uma alternativa muito popular, onde as pretas tentam manter a estrutura sólida sem enfraquecer seu centro imediatamente.",
            plans: "Se as pretas aceitarem o gambito, as brancas buscarão um rápido desenvolvimento e controle do centro. Se recusarem, o jogo se torna mais estratégico, com ambas as partes disputando o domínio das casas centrais. O Queen’s Gambit é uma abertura rica em possibilidades e costuma se sustentar num ataque de minoria de peões no flanco da dama.",
            image: "images/queens_gambit.png",
        },
    ];

    const openingList = document.getElementById("openings");
    const openingTitle = document.getElementById("opening-title");
    const openingDescription = document.getElementById("opening-description");
    const openingBoard = document.getElementById("opening-board");

    const overviewSection = document.getElementById("overview");
    const linesSection = document.getElementById("lines");
    const plansSection = document.getElementById("plans");

    // Inicialmente, oculta todas as seções
    function hideAllSections() {
        overviewSection.style.display = "none";
        linesSection.style.display = "none";
        plansSection.style.display = "none";
    }

    openings.forEach((opening) => {
        const li = document.createElement("li");
        li.textContent = opening.name;
        li.addEventListener("click", () => {
            // Atualiza os textos da abertura selecionada
            openingTitle.textContent = opening.name;
            openingDescription.textContent = opening.description;
            openingBoard.innerHTML = `<img src="${opening.image}" alt="${opening.name}">`;

            document.getElementById("overview-content").textContent = opening.overview;
            document.getElementById("lines-content").textContent = opening.lines;
            document.getElementById("plans-content").textContent = opening.plans;

            // Agora, TODAS as seções aparecem imediatamente
            overviewSection.style.display = "block";
            plansSection.style.display = "block";
            linesSection.style.display = "block";
        });
        openingList.appendChild(li);
    });
});
