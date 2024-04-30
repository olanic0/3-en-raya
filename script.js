$(document).ready(function() {
    let currentPlayer = 'X';
    let playerX = '';
    let playerO = '';
    let gameEnded = false;
    let moves = 0;
  
    $('#startBtn').on('click', function() {
      playerX = $('#playerX').val();
      playerO = $('#playerO').val();
      $('#status').text(playerX + ' es ' + 'X' + ', ' + playerO + ' es O.');
      $('#startBtn').hide();
      $('#resetBtn').show();
    });
  
    $('#resetBtn').on('click', function() {
      $('.cell').text('');
      $('.cell').removeClass('win');
      currentPlayer = 'X';
      gameEnded = false;
      moves = 0;
      $('#status').text('');
      $('#resetBtn').hide();
      $('#startBtn').show();
    });
  
    $('.cell').on('click', function() {
      if (gameEnded) return;
  
      if (!$(this).text()) {
        $(this).text(currentPlayer);
        moves++;
  
        if (checkWin()) {
          $('#status').text(currentPlayer === 'X' ? playerX + ' ha ganado!' : playerO + ' ha ganado!');
          gameEnded = true;
          highlightWinningCells();
          return;
        }
  
        if (moves === 9) {
          $('#status').text('¡Empate!');
          gameEnded = true;
          return;
        }
  
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $('#status').text('Turno de ' + (currentPlayer === 'X' ? playerX : playerO));
      }
    });
  
    function checkWin() {
      const cells = $('.cell');
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
          return true;
        }
      }
      return false;
    }
  
    function highlightWinningCells() {
      const cells = $('.cell');
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
          cells.eq(a).addClass('win');
          cells.eq(b).addClass('win');
          cells.eq(c).addClass('win');
          break;
        }
      }
    }
  });
  