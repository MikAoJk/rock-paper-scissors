'use client';

import React, {useState} from 'react';
import GameResult from "@/components/GameResult";


export interface GamePlay {
    playerVal: string;
    computerVal: string;
    winner: string
}


export const Game = () => {
    const [gamePlay, setGamePlay] = useState<GamePlay>({playerVal: "", computerVal: "", winner: ""});

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
                winner: "You"
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
        <div className="z-5 items-center justify-between font-mono text-sm">
            <div>
                <button className="text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("ROCK")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="64" width="70"
                         viewBox="0 0 512 512">
                        <path
                            d="M464.8 80c-26.9-.4-48.8 21.2-48.8 48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v32h-8V80.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v136l-8-7.1v-48.1c0-26.3-20.9-48.3-47.2-48.8C21.9 127.6 0 149.2 0 176v66.4c0 27.4 11.7 53.5 32.2 71.8l111.7 99.3c10.2 9.1 16.1 22.2 16.1 35.9v6.7c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-2.9c0-12.8 2.6-25.5 7.5-37.3l49-116.3c5-11.8 7.5-24.5 7.5-37.3V128.8c0-26.3-20.9-48.4-47.2-48.8z"/>
                    </svg>
                    Rock
                </button>
                <button className="text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("PAPER")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="64" width="70"
                         viewBox="0 0 448 512">
                        <path
                            d="M408.8 128C386.4 127.6 368 146.4 368 168.8V256h-8V79.8c0-22.4-18.4-41.2-40.8-40.8C297.5 39.4 280 57.2 280 79v177h-8V40.8C272 18.4 253.6-.4 231.2 0 209.5 .4 192 18.2 192 40v216h-8V80.8c0-22.4-18.4-41.2-40.8-40.8C121.5 40.4 104 58.2 104 80v236l-31.6-43.5c-13-17.9-38-21.8-55.9-8.8-17.9 13-21.8 38-8.8 55.9l125.6 172.7A48 48 0 0 0 172.1 512h197.6c22.3 0 41.6-15.3 46.7-37l26.5-112.7a192 192 0 0 0 5.1-44V168c0-21.8-17.5-39.6-39.2-40z"/>
                    </svg>
                    Paper
                </button>
                <button className="text-base bg-green-600 text-white rounded cursor-pointer m-5"
                        onClick={() => decision("SCISSORS")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="64" width="70"
                         viewBox="0 0 448 512">
                        <path
                            d="M216 440c0-22.1 17.9-40 40-40v-8h-32c-22.1 0-40-17.9-40-40s17.9-40 40-40h32v-8H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h208v-13.6l-177.6-69.7c-24.7-9.7-36.8-37.6-27.1-62.2 9.7-24.7 37.6-36.8 62.2-27.1l190.3 74.8 24.9-31.1c12.3-15.4 34-19.5 51.1-9.7l112 64A40 40 0 0 1 512 168v240c0 18.6-12.8 34.7-30.8 38.9l-136 32A40 40 0 0 1 336 480h-80c-22.1 0-40-17.9-40-40z"/>
                    </svg>
                    Scissors
                </button>
            </div>
            {gamePlay.playerVal && GameResult(gamePlay)}
        </div>
    );
}

export default Game;