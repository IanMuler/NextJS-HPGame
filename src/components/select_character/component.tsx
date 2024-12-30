"use client";

import { useState } from "react";
import Image from "next/image";
import { CharacterIndex, useGame } from "@/context/game_context";
import { charactersSelector } from "@/const";
import "./styles.css";

type SelectCharacterProps = {
    nextStage: () => void;
};

export default function SelectCharacter({ nextStage }: SelectCharacterProps) {
    // States 
    const { selectedIndexCharacter, setSelectedIndexCharacter } = useGame();
    const [currentIndex, setCurrentIndex] = useState<CharacterIndex>(
        selectedIndexCharacter ?? 0
    );
    const character = charactersSelector[currentIndex];

    // Handle functions
    const handlePrev = () => {
        setCurrentIndex((prev) => ((prev + charactersSelector.length - 1) % charactersSelector.length) as CharacterIndex);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => ((prev + 1) % charactersSelector.length) as CharacterIndex);
    };

    const handleSelect = () => {
        setSelectedIndexCharacter(currentIndex);
        nextStage();
    };

    // Sub-components
    const Carrousel = (
        <div className="carrousel">
            <Image
                className="arrow-left"
                src="/images/Flechas-Left.png"
                alt="Previous Character"
                width={70}
                height={40}
                onClick={handlePrev}
                style={{ cursor: "pointer" }}
            />
            <Image
                className="characterimg"
                src={character.image}
                alt={character.name}
                width={160}
                height={190}
            />
            <Image
                className="arrow-right"
                src="/images/Flechas-Right.png"
                alt="Next Character"
                width={70}
                height={40}
                onClick={handleNext}
                style={{ cursor: "pointer" }}
            />
        </div>
    );

    const CharacterDetails = (
        <div className="character-right">
            <Image
                className="imgapi"
                src={character.apiImg}
                alt={character.name}
                width={100}
                height={150}
            />
            <h3 className="carrousel-name">{character.name}</h3>
        </div>
    );

    return (
        <div className="select-wallpaper container">
            <div id="selection" className="overlay">
                {/* Bloque izquierdo: carrousel + botón Select */}
                <div className="character-left">
                    {Carrousel}
                    <button className="btn-select" onClick={handleSelect}>
                        Select
                    </button>
                </div>

                {/* Bloque derecho: detalles del personaje */}
                {CharacterDetails}
            </div>
        </div>
    );
}
