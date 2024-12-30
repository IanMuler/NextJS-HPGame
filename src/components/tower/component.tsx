// src/components/tower/component.tsx
"use client";
import { useEffect } from "react";
import { useGame } from "@/context/game_context";
import { charactersSelector } from "@/const";
import "./styles.css";

interface TowerProps {
    nextStage: () => void;
}

export default function Tower({ nextStage }: TowerProps) {
    // States and variables
    const { selectedIndexCharacter, level } = useGame();
    const character = charactersSelector[selectedIndexCharacter];
    const tower_class = level === 1 ? "level" : `level${level - 1}`;

    // Effects
    useEffect(() => {
        const timeout = setTimeout(() => {
            nextStage();
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    // Sub-components
    const TowerImage = (
        <img
            id="towerimg"
            className={`towerimg ${tower_class}`}
            src="/images/Towerhp.png"
            alt="Tower"
        />
    )
    const CharacterImage = (
        <img
            className={`towerpj ${level === 1 ? "traslateright" : ""}`}
            id="tower-picture-img"
            src={character.apiImg}
            alt={character.name}
        />
    )

    return (
        <div className="tower-wallpaper container">
            {TowerImage}
            {CharacterImage}
        </div>
    );
}
