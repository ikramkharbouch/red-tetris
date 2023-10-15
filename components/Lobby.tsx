import styles from "../styles/Header.module.css";
import lobbyStyles from "../styles/Lobby.module.css";
import Board from "../tetris_game/board";

const Lobby = () => {
  return (
    <div className="bg-background h-screen w-screen min-w-screen flex">
      <div className="w-1/2 bg-red">
        <div className="flex flex-col">
          <div className="w-full h-barColor"></div>
          <Board />
        </div>
      </div>

      <div className="w-1/2"></div>
      {/* <div className="flex flex-col h-full">
      <div className="w-full">
        <Board />
      </div>
      </div> */}
    </div>
  );
};

export default Lobby;
