let intervalId = null;
let brickCount = 0;

function build(amount) {
  brickCount = 0;
  const tower = document.getElementById('tower');
  tower.innerHTML = '';

  intervalId = setInterval(() => {
    if (brickCount >= amount) {
      clearInterval(intervalId);
      return;
    }

    brickCount++;
    const row = document.createElement('div');
    row.classList.add('row');

    for (let col = 1; col <= 3; col++) {
      const brick = document.createElement('div');
      brick.id = `brick-${brickCount}-${col}`;

      if (col === 2) {
        brick.dataset.foundation = 'true';
      }

      row.appendChild(brick);
    }

    tower.prepend(row);
  }, 100);
}

function repair() {
  const bricks = document.querySelectorAll('[id^="brick-"]');

  bricks.forEach(brick => {
    if (brick.hasAttribute('data-foundation')) {
      brick.setAttribute('repaired', 'in progress');
    } else {
      brick.setAttribute('repaired', 'true');
    }
  });
}

function destroy() {
  const tower = document.getElementById('tower');
  const lastRow = tower.lastElementChild;

  if (lastRow) {
    lastRow.remove();
  }
}