import React from "react";
import {GamePlay} from "@/components/Game";

const GameResult = (gamePlay: GamePlay) => {

    return (
        <div className="m-2 md:m-5 md:text-l text-left">
            {gamePlay.winner == 'You' && <p className="text-2xl">You won!</p>}
            {gamePlay.winner == 'Computer' && <p className="text-2xl">Computer won</p>}
            {gamePlay.winner == 'Draw' && <p className="text-2xl">Its a draw</p>}

            <div className="mt-4">
                <p>Your choice: {gamePlay.playerVal}</p>
                <p>Computers choice: {gamePlay.computerVal}</p>
            </div>
        </div>
    )

}

export default GameResult;
