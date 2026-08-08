const SIZE = 9;
const MINES = 10;
const grid = document.getElementById('grid');
const minesLeftEl = document.getElementById('mines-left');
const timerEl = document.getElementById('timer');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');

let cells, cellEls, opened, flagged, firstClick, seconds, timerId, gameOver;

function idx(r,c){ return r*SIZE+c; }

function neighbors(r,c){
  const out = [];
  for (let dr=-1; dr<=1; dr++)
    for (let dc=-1; dc<=1; dc++){
      if (dr===0 && dc===0) continue;
      const nr=r+dr, nc=c+dc;
      if (nr>=0 && nr<SIZE && nc>=0 && nc<SIZE) out.push([nr,nc]);
    }
  return out;
}

function buildBoard(safeIdx){
  const arr = Array(SIZE*SIZE).fill(0); // 0 = empty count, -1 = mine
  let placed = 0;
  while (placed < MINES){
    const i = Math.floor(Math.random() * SIZE * SIZE);
    if (i === safeIdx || arr[i] === -1) continue;
    arr[i] = -1;
    placed++;
  }
  for (let r=0;r<SIZE;r++){
    for (let c=0;c<SIZE;c++){
      if (arr[idx(r,c)] === -1) continue;
      let count = 0;
      neighbors(r,c).forEach(([nr,nc]) => { if (arr[idx(nr,nc)] === -1) count++; });
      arr[idx(r,c)] = count;
    }
  }
  return arr;
}

function init(){
  cells = null; // built lazily on first click for safe-zone guarantee
  opened = new Set();
  flagged = new Set();
  firstClick = true;
  seconds = 0;
  gameOver = false;
  minesLeftEl.textContent = MINES;
  timerEl.textContent = 0;
  overlay.classList.remove('show');
  if (timerId) clearInterval(timerId);

  grid.innerHTML = '';
  cellEls = [];
  for (let r=0;r<SIZE;r++){
    for (let c=0;c<SIZE;c++){
      const el = document.createElement('div');
      el.className = 'mcell';
      el.addEventListener('click', () => leftClick(r,c));
      el.addEventListener('contextmenu', e => { e.preventDefault(); rightClick(r,c); });
      grid.appendChild(el);
      cellEls.push(el);
    }
  }
}

function startTimer(){
  timerId = setInterval(() => {
    seconds++;
    timerEl.textContent = seconds;
  }, 1000);
}

function leftClick(r,c){
  if (gameOver || flagged.has(idx(r,c))) return;
  if (firstClick){
    cells = buildBoard(idx(r,c));
    firstClick = false;
    startTimer();
  }
  const i = idx(r,c);
  if (opened.has(i)) return;

  if (cells[i] === -1){
    return detonate(i);
  }

  floodReveal(r,c);
  render();
  checkWin();
}

function floodReveal(r,c){
  const stack = [[r,c]];
  while (stack.length){
    const [cr,cc] = stack.pop();
    const i = idx(cr,cc);
    if (opened.has(i) || flagged.has(i)) continue;
    opened.add(i);
    if (cells[i] === 0){
      neighbors(cr,cc).forEach(([nr,nc]) => {
        if (!opened.has(idx(nr,nc))) stack.push([nr,nc]);
      });
    }
  }
}

function rightClick(r,c){
  if (gameOver || firstClick) return;
  const i = idx(r,c);
  if (opened.has(i)) return;
  if (flagged.has(i)) flagged.delete(i);
  else flagged.add(i);
  minesLeftEl.textContent = MINES - flagged.size;
  render();
}

function render(){
  for (let r=0;r<SIZE;r++){
    for (let c=0;c<SIZE;c++){
      const i = idx(r,c);
      const el = cellEls[i];
      el.className = 'mcell';
      el.textContent = '';
      if (flagged.has(i)){
        el.classList.add('flag');
        el.textContent = '⚑';
      } else if (opened.has(i)){
        el.classList.add('open');
        if (cells[i] > 0){
          el.textContent = cells[i];
          el.classList.add('n' + cells[i]);
        }
      }
    }
  }
}

function detonate(i){
  gameOver = true;
  clearInterval(timerId);
  for (let j=0;j<cells.length;j++){
    if (cells[j] === -1) cellEls[j].classList.add('open','mine');
  }
  overlayText.textContent = 'BOOM — TRY AGAIN';
  overlay.classList.add('show');
}

function checkWin(){
  const total = SIZE*SIZE;
  if (opened.size === total - MINES){
    gameOver = true;
    clearInterval(timerId);
    overlayText.textContent = 'CLEARED IN ' + seconds + 's';
    overlay.classList.add('show');
  }
}

function restart(){ init(); }

init();
