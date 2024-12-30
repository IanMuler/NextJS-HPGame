// src/components/fight/component.tsx
"use client";

import React, { useEffect } from "react";
import { useFightLogic } from "@/hooks/useFight";
import { useGame } from "@/context/game_context";
import { imagesByLevel, fightClasses } from "@/const";
import "./styles.css";

interface FightProps {
    nextStage: () => void;
}

export default function Fight({ nextStage }: FightProps) {
    const { level, selectedIndexCharacter } = useGame();

    // Nuestro hook de lógica
    const {
        hp,
        winner,
        isAnimating,
        selectedOption,
        optionCPU,
        onSelectAttack,
        onSelectDefense,
        onSelectCure,
        fightRound,
        resetRound,
    } = useFightLogic(level);

    // Efecto: si hay un ganador, esperas un poco y pasas de stage
    useEffect(() => {
        if (winner === "hero") {
            // Ganaste
            setTimeout(() => {
                nextStage();
            }, 3000);
        } else if (winner === "villain") {
            // Perdiste
            setTimeout(() => {
                alert("Game Over");
                // O nextStage() si quieres reiniciar
            }, 3000);
        }
    }, [winner, nextStage]);

    // Datos para render
    const fightData = imagesByLevel[level - 1]; // nivel 1 -> index 0
    const heroImage = fightData.heroes[selectedIndexCharacter];
    const villainImage = fightData.villains;
    const heroClass = fightClasses.heroes[selectedIndexCharacter][level - 1];
    const villainClass = fightClasses.villains[level - 1];

    console.log({
        fightData,
        heroImage,
        villainImage,
        heroClass,
        villainClass,
    });
    // Handlers de los botones
    const handleClickAttack = () => {
        onSelectAttack();
        setTimeout(fightRound, 500);
    };
    const handleClickDefense = () => {
        onSelectDefense();
        setTimeout(fightRound, 500);
    };
    const handleClickCure = () => {
        onSelectCure();
        setTimeout(fightRound, 500);
    };

    return (
        <div
            className="fight-wallpaper"
            style={{
                background: `url(${fightData.fightWallpaper}) center/cover`,
            }}
        >
            <div className="fightplace">
                {/* Efectos Attack, Defense, Cure (hero side) */}
                <div id="attack1png">
                    <img src="/images/Rayorojo.png" alt="Attack1png" />
                </div>
                <div id="defense1png">
                    <img src="/images/Shield.png" alt="defense1png" />
                </div>
                <div id="cure1png">
                    <img src="/images/curehero.png" alt="cure1png" />
                </div>

                {/* Efectos Attack, Defense, Cure (villain side) */}
                <div id="attack2png" className={`atk-${villainClass}`}>
                    <img src={fightData.attack2png} alt="Attack2png" />
                </div>
                <div id="defense2png" className={`def-${villainClass}`}>
                    <img src={fightData.defense2png} alt="defense2png" />
                </div>
                <div id="cure2png" className={`cur-${villainClass}`}>
                    <img src={fightData.cure2png} alt="cure2png" />
                </div>

                {/* animated damage/cure */}
                <span id="damage1"></span>
                <span id="damage2"></span>
                <span id="cureplus1"></span>
                <span id="cureplus2"></span>

                {/* PPT & Stats */}
                <div id="ppt" className="ppt">
                    <div className="stats-left">
                        {/* HP hero */}
                        <div className="hp">
                            <img src="/images/heartwhite.png" alt="heart" />
                            <div className="hpbar">
                                <div
                                    id="hpleft"
                                    className="hpvalue"
                                    style={{ width: `${hp.hero}%` }}
                                ></div>
                            </div>
                        </div>
                        {/* Attack hero */}
                        <div className="atk">
                            <img src="/images/attack-White.png" alt="sword" />
                            <div className="atkbar">
                                <div id="atkleft1" className="atkleft1"></div>
                                <div id="atkleft2" className="atkleft2"></div>
                            </div>
                        </div>
                        {/* Defense hero */}
                        <div className="def">
                            <img src="/images/defense-White.png" alt="shield" />
                            <div className="defbar">
                                <div id="defleft1" className="defleft1"></div>
                                <div id="defleft2" className="defleft2"></div>
                            </div>
                        </div>
                        {/* Cure hero */}
                        <div className="cur">
                            <img src="/images/cure-White.png" alt="heart" />
                            <div className="curbar">
                                <div id="curleft1" className="curleft1"></div>
                                <div id="curleft2" className="curleft2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Stats right (villain) */}
                    <div className="stats-right">
                        <div className="hp">
                            <img src="/images/heartwhite.png" alt="heart" />
                            <div className="hpbar">
                                <div
                                    id="hpright"
                                    className="hpvalue"
                                    style={{ width: `${hp.villain}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="atk">
                            <img src="/images/attack-White.png" alt="sword" />
                            <div className="atkbar">
                                <div id="atkright1" className="atkright1"></div>
                                <div id="atkright2" className="atkright2"></div>
                            </div>
                        </div>
                        <div className="def">
                            <img src="/images/defense-White.png" alt="shield" />
                            <div className="defbar">
                                <div id="defright1" className="defright1"></div>
                                <div id="defright2" className="defright2"></div>
                            </div>
                        </div>
                        <div className="cur">
                            <img src="/images/cure-White.png" alt="heart" />
                            <div className="curbar">
                                <div id="curright1" className="curright1"></div>
                                <div id="curright2" className="curright2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Botones PPT (Hero) */}
                    <div id="ppt-left" className="ppt-left">
                        <div
                            id="attack1"
                            className="initialppt"
                            onClick={handleClickAttack}
                        >
                            <img src="/images/Attack.png" alt="Attack" />
                        </div>
                        <div
                            id="defense1"
                            className="initialppt"
                            onClick={handleClickDefense}
                        >
                            <img src="/images/Defense.png" alt="Defense" />
                        </div>
                        <div id="cure1" className="initialppt" onClick={handleClickCure}>
                            <img src="/images/Cure.png" alt="Cure" />
                        </div>
                    </div>

                    {/* Botones PPT (Villain) - CPU - podrían ser "fake" */}
                    <div id="ppt-right" className="ppt-right d-none">
                        <div id="attack2">
                            <img src="/images/Attack.png" alt="Piedra" />
                        </div>
                        <div id="defense2">
                            <img src="/images/Defense.png" alt="Papel" />
                        </div>
                        <div id="cure2">
                            <img src="/images/Cure.png" alt="Tijera" />
                        </div>
                    </div>
                </div>

                {/* Piso */}
                <img className="floorimg" src={fightData.floor} alt="floor" />
                {/* Héroe */}
                <img
                    id="hero"
                    className={heroClass}
                    src={heroImage}
                    alt="hero"
                />
                {/* Villano */}
                <img
                    id="villain"
                    className={villainClass}
                    src={villainImage}
                    alt="villain"
                />
            </div>

            {/* Mensaje de victoria */}
            <picture id="you-win" className={winner === "hero" ? "" : "d-none"}>
                <img src="/images/you-Win-2.png" alt="" />
            </picture>
            {/* Botón reset */}
            <picture id="restart" className="d-none">
                <img src="/images/reset-button.png" alt="" />
            </picture>
        </div>
    );
}
