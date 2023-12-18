import React from "react";
import Game from "@/components/Game";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center flex-col md:p-10 justify-between font-mono">
            <div className="items-center justify-between font-mono flex">
                <Game/>
            </div>
        </main>
    )
}
