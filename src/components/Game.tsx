'use client';

import React, {useState} from 'react';
import GameResult from "@/components/GameResult";


export interface GamePlay {
    playerVal: string;
    computerVal: string;
    winner: string
}


export const Game = () => {
    const [gamePlay, setGamePlay] = useState<GamePlay>({playerVal: "", computerVal: "", winner:""});

    const play = (playerVal: string, computerVal: string) => {
        if (playerVal == computerVal) {
            return 0;
        } else if ((playerVal == "ROCK" && computerVal == "SCISSORS") ||
            (playerVal == "SCISSORS" && computerVal == "PAPER") ||
            (playerVal == "PAPER" && computerVal == "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }


    const decision = (playerChoice: string) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const val = play(playerChoice, computerChoice)
        if (val == 1) {
            setGamePlay({
                playerVal: playerChoice,
                computerVal: computerChoice,
                winner: "Player"
            })
        } else if (val == -1) {
            setGamePlay({
                playerVal: playerChoice,
                computerVal: computerChoice,
                winner: "Computer"
            })
        } else {
            setGamePlay({
                computerVal: computerChoice,
                playerVal: playerChoice,
                winner: "Draw"
            })
        }
    }


    return (
        <div >
            <div className="z-5 items-center justify-between font-mono text-sm md:text-5xl flex">
                <button className="className=text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("ROCK")}>
                    <i className={`fas fa-hand-rock`}/> Rock
                </button>
                <button className="className=text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("PAPER")}>
                    <i className={`fas fa-hand-paper`}/> Paper
                </button>
                <button className="className=text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("SCISSORS")}>
                    <i className={`fas fa-hand-scissors`}/> Scissors
                </button>
            </div>
            <div>
                {gamePlay.playerVal && GameResult(gamePlay)}
            </div>
        </div>
    );
}

export default Game;