import {useState} from 'react'

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(20).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handleClick(i:number ) {
    if (calculateWinner(squares)) {
    return;
  }
    const nextSquares = squares.slice();
    let x = i;
    while(x +5 < 20 && squares[x+5 ] === null){
      x = x + 5;
    }

    if (xIsNext) {
      nextSquares[x] = "X";
    } else {
      nextSquares[x] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (<>
          <div className="status">{status}</div>
            
            <div className="board-row">
        <Square value = {squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value = {squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value = {squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value = {squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value = {squares[4]} onSquareClick={() => handleClick(4)}/>
      </div>
      <div className="board-row">
        <Square value = {squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value = {squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value = {squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value = {squares[8]} onSquareClick={() => handleClick(8)}/>
        <Square value = {squares[9]} onSquareClick={() => handleClick(9)}/>
      </div>
      <div className="board-row">
        <Square value = {squares[10]} onSquareClick={() => handleClick(10)}/>
        <Square value = {squares[11]} onSquareClick={() => handleClick(11)}/>
        <Square value = {squares[12]} onSquareClick={() => handleClick(12)}/>
        <Square value = {squares[13]} onSquareClick={() => handleClick(13)}/>
        <Square value = {squares[14]} onSquareClick={() => handleClick(14)}/>
      </div>
      <div className="board-row">
        <Square value = {squares[15]} onSquareClick={() => handleClick(15)}/>
        <Square value = {squares[16]} onSquareClick={() => handleClick(16)}/>
        <Square value = {squares[17]} onSquareClick={() => handleClick(17)}/>
        <Square value = {squares[18]} onSquareClick={() => handleClick(18)}/>
        <Square value = {squares[19]} onSquareClick={() => handleClick(19)}/>
      </div>
          
          
          </>

  );
}

function Square(
  { value, onSquareClick }: { value: string; onSquareClick: () => void }
) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function calculateWinner(squares: (string | null)[]) {
  const ROWS = 4;
  const COLS = 5;

  const directions = [
    [0, 1],   
    [1, 0],   
    [1, 1],   
    [1, -1],  
  ];

  function getCell(r: number, c: number) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return null;
    return squares[r * COLS + c];
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const player = getCell(r, c);
      if (!player) continue;

      for (const [dr, dc] of directions) {
        let count = 1;

        for (let k = 1; k < 3; k++) {
          if (getCell(r + dr * k, c + dc * k) === player) {
            count++;
          } else {
            break;
          }
        }

        if (count === 3) {
          return player;
        }
      }
    }
  }

  return null;
}
