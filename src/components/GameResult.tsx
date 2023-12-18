import React from "react";
import {GamePlay} from "@/components/Game";

const GameResult = (gamePlay: GamePlay) => {

    return (
        <div className="m-2 md:m-5 md:text-l">
            <p className="text-2xl">Winner: {gamePlay.winner}</p>
            <div className="mt-4">
                <p>Your choice: {gamePlay.playerVal}</p>
                <p>Computers choice: {gamePlay.computerVal}</p>
            </div>
        </div>
    )

}

export default GameResult;
