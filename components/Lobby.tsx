import styles from "../styles/Header.module.css";
import lobbyStyles from "../styles/Lobby.module.css";
import Board from "../tetris_game/board";
import Header from "./Header";

const Lobby = () => {
  let score = 12015;
  let topScore = 1655552121;
  return (
    <div className="bg-background h-screen w-screen min-w-screen">
      <Header />

      <div className="flex mx-64 mt-8 gap-6 rounded-lg">
        <div className="w-1/2 h-4/5">
          <div className="flex flex-col gap-3">
            <div className="w-full bg-barColor py-3.5 px-3.5 rounded-lg flex justify-between">
              <div>
                <span>Current Score:</span>
                <strong className="ml-1.5 text-blue-200 font-inter font-semibold">
                  {score}
                </strong>
              </div>
              <div>
                <span>Top Score:</span>
                <strong className="ml-1.5 text-pink-500 font-inter font-semibold">
                  {topScore}
                </strong>
              </div>
            </div>
            <Board />
          </div>
        </div>

        <div className="w-1/2 bg-gray-400 rounded-lg pt-5 pl-5">
          <h3 className="text-lg ">Controls</h3>
          <div className="flex gap-4 font-inter font-semibold mt-3"><button className="bg-green-300 py-3 px-8 rounded-lg">Play</button><button className="bg-pink-500 py-3 px-8 rounded-lg">Pause</button></div>
        </div>
        {/* <div className="flex flex-col h-full">
      <div className="w-full">
        <Board />
      </div>
      </div> */}
      </div>
    </div>
  );
};

export default Lobby;
