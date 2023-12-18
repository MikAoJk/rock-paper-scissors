import React from "react";
import {GamePlay} from "@/components/Game";

const GameResult = (gamePlay: GamePlay) => {

    return (
        <div className="md:inline-block m-2 flex flex-col text-center md:m-5 md:text-5xl">
            <p className="m-12">Winner: {gamePlay.winner}</p>
            <p>Your choice: {gamePlay.playerVal}</p>
            <p>Computers choice: {gamePlay.computerVal}</p>
        </div>
    )

}

export default GameResult;
