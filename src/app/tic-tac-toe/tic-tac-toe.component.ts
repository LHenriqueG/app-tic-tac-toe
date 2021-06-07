import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  //Jogador Atual
  currentPlayer: string = "O";

  //Vencedor
  winner: string = "";

  //Tabuleiro
  board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  //Função de ação
  processPlay(line: number, col: number) {
    //verificar se há célula vazia e não há vencedor
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      //verificar vencedor
      if(this.checkWinner(this.currentPlayer)){
        this.winner = this.currentPlayer;
      }
      //Trocar o jogador(identificar)
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X'
      } else {
        this.currentPlayer = 'O'
      }
    }
  }

  //função checkWinner
  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true
      }
    }

    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true
    }

    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true
    }
    return false
  }

  //reiniciar partida
  reset() {
    //Jogador Atual
    this.currentPlayer = "O";

    //Vencedor
    this.winner = "";

    //Tabuleiro
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
}
