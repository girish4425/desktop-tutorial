const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
let turn = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = turn;
      cell.style.color = turn === 'X' ? '#0e0d0d' : '#0e0d0d';
      turn = turn === 'X' ? 'O' : 'X';
    }
  });
});