// src/app/components/Intro.tsx
import Image from "next/image";
import "./styles.css";

interface IntroProps {
    nextStage: () => void;
}

export default function Intro({ nextStage }: IntroProps) {
    //handle functions
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") nextStage();
    };

    // sub-components 
    const Logo = (
        <Image
            src="/images/Intro-png.png"
            alt="HPGame Logo"
            width={500}
            height={200}
            priority
            id="logo"
        />
    )

    const StartGame = (
        <Image
            src="/images/Intro-png2.png"
            alt="Start Game"
            width={300}
            height={50}
            onClick={nextStage}
            id="start-game"
        />
    )

    return (
        <div className="intro-wallpaper container" onKeyDown={handleKeyDown} tabIndex={0}>
            {Logo}
            {StartGame}
        </div>
    );
}
