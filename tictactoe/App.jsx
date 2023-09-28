/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const gameStartContext = createContext();

function Cellcontainer() {
  const gameStart = useContext(gameStartContext);
  const [mainValue, setMainValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const [xTurn, setXTurn] = useState(true);
  const [filled, setFilled] = useState([false, false, false, false, false, false, false, false, false]);
  const [gameEnd, setGameEnd] = useState(false);
  if (gameStart[0] == true) {

    let playerTurn = "X";
    if (gameEnd == false) {
      xTurn ? playerTurn = "X" : playerTurn = "O";
    }
    else {
      playerTurn = "Game end";
    }
    return (
      <div className="cell-container">
        <h3>{`Player: ${playerTurn}`}</h3>
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="0" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="1" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="2" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="3" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="4" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="5" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="6" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="7" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
        <Cell mainValue={mainValue} setMainValue={setMainValue} index="8" xTurn={xTurn} setXTurn={setXTurn} filled={filled} setFilled={setFilled} gameEnd={gameEnd} setGameEnd={setGameEnd} />
      </div>
    )
  }
}

function Cell({ mainValue, setMainValue, index, xTurn, setXTurn, filled, setFilled, gameEnd, setGameEnd }) {
  // const [value, setValue] = useState("");
  return (
    <div className="cell" onClick={() => fillValue(mainValue, setMainValue, index, xTurn, setXTurn, filled, setFilled, gameEnd, setGameEnd)}>{mainValue[index]}</div>
  )
}

function fillValue(mainValue, setMainValue, index, xTurn, setXTurn, filled, setFilled, gameEnd, setGameEnd) {
  const cellValue = mainValue;
  const cellFillStatus = filled;
  if (gameEnd != true) {
    if (filled[index] != true) {
      if (xTurn == true) {
        cellValue[index] = "X";
        setMainValue(cellValue);
        setXTurn(false);
        cellFillStatus[index] = true;
        setFilled(cellFillStatus);
      }
      else {
        cellValue[index] = "O";
        setMainValue(cellValue);
        setXTurn(true);
        cellFillStatus[index] = true;
        setFilled(cellFillStatus);
      }
    }
    if (checkWinner(mainValue)) {
      // alert("win");
      xTurn ? alert("X win") : alert("O win");
      if (xTurn == false) {
        cellValue[index] = "O";
      }
      else {
        cellValue[index] = "X";
      }
      setMainValue(cellValue);
      // setXTurn(true);
      cellFillStatus[index] = true;
      setFilled(cellFillStatus);
      setGameEnd(true);
      // gameEnd = true;
    }
    checkWinner(mainValue);
  }
  else {
    alert("Game has ended. The winner has been showed.");
  }
  console.log(cellValue);
}

function checkWinner(mainValue) {
  // rows
  if ((mainValue[0] == mainValue[1] && mainValue[0] == mainValue[2]) && mainValue[0] != "" && mainValue[1] != "" && mainValue[2] != "") {
    return true;
  }
  else if ((mainValue[3] == mainValue[4] && mainValue[3] == mainValue[5]) && mainValue[3] != "" && mainValue[4] != "" && mainValue[5] != "") {
    return true;
  }
  else if ((mainValue[6] == mainValue[7] && mainValue[6] == mainValue[8]) && mainValue[6] != "" && mainValue[7] != "" && mainValue[8] != "") {
    return true;
  }
  // columns
  else if ((mainValue[0] == mainValue[3] && mainValue[0] == mainValue[6]) && mainValue[0] != "" && mainValue[3] != "" && mainValue[6] != "") {
    return true;
  }
  else if ((mainValue[1] == mainValue[4] && mainValue[1] == mainValue[7]) && mainValue[1] != "" && mainValue[4] != "" && mainValue[7] != "") {
    return true;
  }
  else if ((mainValue[2] == mainValue[5] && mainValue[2] == mainValue[8]) && mainValue[2] != "" && mainValue[5] != "" && mainValue[8] != "") {
    return true;
  }
  // diagonals
  else if ((mainValue[0] == mainValue[4] && mainValue[0] == mainValue[8]) && mainValue[0] != "" && mainValue[4] != "" && mainValue[8] != "") {
    return true;
  }
  else if ((mainValue[2] == mainValue[4] && mainValue[2] == mainValue[6]) && mainValue[2] != "" && mainValue[4] != "" && mainValue[6] != "") {
    return true;
  }
}

function Menucontainer() {
  const gameStart = useContext(gameStartContext);
  console.log(gameStart)
  if (gameStart[0] == false) {
    return (
      <div className="menuContainer">
        <h2>Tic Tac</h2>
        <div onClick={gameStart[1]} className="btnMenu" style={{ marginTop: "20px" }}>Start</div>
        <div className="btnMenu">Mode</div>
        <div className="btnMenu">How to play</div>
        <div className="btnMenu">About</div>
        {/* <div className="btnMenu">About</div> */}
        {/* <div className="btnMenu">About</div> */}
        {/* <div className="btnMenu">About</div> */}
        {/* <div className="btnMenu">About</div> */}
        {/* <div className="btnMenu">About</div> */}
      </div>
    )
  }
}

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  return (
    <gameStartContext.Provider value={[gameStart, () => setGameStart(true), () => setGameStart(false)]}>
      <>
        <Cellcontainer />
        <Menucontainer />
      </>
    </gameStartContext.Provider>
  )
}