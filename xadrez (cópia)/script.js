document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("chessboard");
    const moveList = document.getElementById("move-list");
    const resetButton = document.getElementById("reset-button"); 

    // Criando as setas de navegação
    const controlContainer = document.createElement("div");
    controlContainer.id = "controls";

    const backArrow = document.createElement("button");
    backArrow.id = "back-arrow";
    backArrow.innerHTML = "&lt;"; // "<" para voltar
    backArrow.disabled = true;

    const forwardArrow = document.createElement("button");
    forwardArrow.id = "forward-arrow";
    forwardArrow.innerHTML = "&gt;"; // ">" para avançar
    forwardArrow.disabled = true;

    controlContainer.appendChild(backArrow);
    controlContainer.appendChild(forwardArrow);
    moveList.insertAdjacentElement("beforebegin", controlContainer); // Adiciona as setas acima da lista

    const game = new Chess(); // Inicializa um jogo de xadrez
    const files = "abcdefgh";  
    let selectedSquare = null;
    let undoneMoves = []; // Armazena os movimentos desfeitos

    // Criar o tabuleiro (8x8)
    for (let row = 8; row >= 1; row--) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = `square ${(row + col) % 2 === 0 ? "light" : "dark"}`;
            square.dataset.position = `${files[col]}${row}`;
            board.appendChild(square);
        }
    }

    // Atualiza o tabuleiro de acordo com o estado do jogo
    function renderBoard() {
        document.querySelectorAll(".square").forEach(square => {
            square.innerHTML = ""; // Limpa o conteúdo da casa
            const position = square.dataset.position;
            const piece = game.get(position); // Obtém a peça naquela posição

            if (piece) {
                const pieceElement = document.createElement("span");
                pieceElement.innerHTML = getPieceUnicode(piece);

                // Define a cor correta da peça
                pieceElement.classList.add(piece.color === "w" ? "white-piece" : "black-piece");

                square.appendChild(pieceElement);
            }
        });

        // Ativar ou desativar botões conforme necessário
        backArrow.disabled = game.history().length === 0;
        forwardArrow.disabled = undoneMoves.length === 0;
    }

    // Converte as peças para símbolos Unicode
    function getPieceUnicode(piece) {
        const pieces = {
            p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚",
            P: "♙", R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔"
        };
        return pieces[piece.type] || "";
    }

    // Adiciona evento de clique para movimentação das peças
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", () => {
            if (selectedSquare) {
                const move = game.move({
                    from: selectedSquare.dataset.position,
                    to: square.dataset.position,
                    promotion: "q" // Sempre promove para rainha
                });

                if (move) {
                    undoneMoves = []; // Zera a lista de movimentos desfeitos ao fazer um novo movimento
                    renderBoard();
                    updateMoveList();
                }

                selectedSquare = null;
            } else {
                const piece = game.get(square.dataset.position);
                if (piece) {
                    selectedSquare = square;
                }
            }
        });
    });

    // Atualiza a lista de movimentos
    function updateMoveList() {
        moveList.innerHTML = "";
        const moveHistory = game.history({ verbose: true });

        moveHistory.forEach((move, index) => {
            const moveNumber = Math.ceil((index + 1) / 2);
            if (index % 2 === 0) {
                const moveItem = document.createElement("li");
                moveItem.innerHTML = `<strong>${moveNumber}.</strong> ${move.san}`;
                moveList.appendChild(moveItem);
            } else {
                moveList.lastElementChild.innerHTML += `, ${move.san}`;
            }
        });

        moveList.scrollTop = moveList.scrollHeight;
    }

    // Função para desfazer um movimento
    backArrow.addEventListener("click", () => {
        const undoneMove = game.undo();
        if (undoneMove) {
            undoneMoves.push(undoneMove); // Armazena o movimento desfeito para poder refazê-lo
            renderBoard();
            updateMoveList();
        }
    });

    // Função para refazer um movimento
    forwardArrow.addEventListener("click", () => {
        if (undoneMoves.length > 0) {
            const move = undoneMoves.pop();
            game.move(move);
            renderBoard();
            updateMoveList();
        }
    });

    // Adiciona a funcionalidade de reiniciar o jogo
    resetButton.addEventListener("click", () => {
        game.reset();
        undoneMoves = []; // Reseta a lista de movimentos desfeitos
        renderBoard();
        moveList.innerHTML = "";
    });

    renderBoard();
});
