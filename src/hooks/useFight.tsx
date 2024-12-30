// src/hooks/useFight.tsx
import { useState, useCallback } from "react";

type Option = "attack" | "defense" | "cure" | null;
type HP = { hero: number; villain: number };

// Stats básicos del héroe y villano
const INITIAL_HP = 100;
const INITIAL_ATTACK = 2;
const INITIAL_DEFENSE = 2;
const INITIAL_CURE = 2;

// Daños base
const ATK = 50;
const DEF = 50;
const CUR = 30;

export function useFightLogic(level: number) {
    // Estado
    const [hp, setHp] = useState<HP>({ hero: INITIAL_HP, villain: INITIAL_HP });
    const [atk, setAtk] = useState<{ hero: number; villain: number }>({
        hero: INITIAL_ATTACK,
        villain: INITIAL_ATTACK,
    });
    const [def, setDef] = useState<{ hero: number; villain: number }>({
        hero: INITIAL_DEFENSE,
        villain: INITIAL_DEFENSE,
    });
    const [cur, setCur] = useState<{ hero: number; villain: number }>({
        hero: INITIAL_CURE,
        villain: INITIAL_CURE,
    });

    const [selectedOption, setSelectedOption] = useState<Option>(null);
    const [optionCPU, setOptionCPU] = useState<Option>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Selección del héroe
    const onSelectAttack = () => setSelectedOption("attack");
    const onSelectDefense = () => setSelectedOption("defense");
    const onSelectCure = () => setSelectedOption("cure");

    // Simulación CPU
    const randomCPU = useCallback(() => {
        const val = Math.floor(Math.random() * 3); // 0=attack,1=defense,2=cure
        if (val === 0) return "attack";
        if (val === 1) return "defense";
        return "cure";
    }, []);

    // Llamada cuando el user ya escogió -> inicia la animación del CPU
    const fightRound = useCallback(() => {
        setIsAnimating(true);

        const cpu = randomCPU();
        setOptionCPU(cpu);

        // Esperamos ~1s para la animación previa
        setTimeout(() => {
            doStatsChanges(selectedOption, cpu);
            setIsAnimating(false);
        }, 1500);
    }, [selectedOption, randomCPU]);

    // Actualiza stats luego de la selección
    function doStatsChanges(heroOpt: Option, cpuOpt: Option) {
        if (!heroOpt || !cpuOpt) return;

        let newHpHero = hp.hero;
        let newHpVillain = hp.villain;
        let newAtkHero = atk.hero;
        let newAtkVillain = atk.villain;
        let newDefHero = def.hero;
        let newDefVillain = def.villain;
        let newCurHero = cur.hero;
        let newCurVillain = cur.villain;

        // --- Efectos del héroe ---
        switch (heroOpt) {
            case "attack":
                // Lógica de stats si heroAttacks
                // Ajuste en def & cur del héroe
                if (newDefHero < 2) newDefHero++;
                if (newCurHero < 2) newCurHero++;

                if (cpuOpt === "attack") {
                    // Daño a villain
                    newHpVillain -= ATK * (newAtkHero / 2);
                } else if (cpuOpt === "cure" && newAtkHero !== 2) {
                    // Subir atk?
                    newAtkHero++;
                }
                // En general bajar atk
                if (newAtkHero > 0 && cpuOpt !== "cure") newAtkHero--;
                break;

            case "defense":
                if (newAtkHero < 2) newAtkHero++;
                if (newCurHero < 2) newCurHero++;

                if (cpuOpt === "attack" && atk.villain > def.hero - 1) {
                    const damage = ATK * (newAtkVillain / 2);
                    newHpHero -= damage * 0.7; // Podrías meter la parte de (level) si gustas
                }
                if (cpuOpt === "attack" && newDefHero !== 2) {
                    newDefHero++;
                }
                if (newDefHero > 0 && cpuOpt !== "attack") newDefHero--;
                break;

            case "cure":
                if (newAtkHero < 2) newAtkHero++;
                if (newDefHero < 2) newDefHero++;

                if (cpuOpt === "attack") {
                    newHpHero += CUR * (newCurHero / 2) - ATK * (newAtkVillain / 2);
                } else {
                    newHpHero += CUR * (newCurHero / 2);
                }
                if (newHpHero > 100) newHpHero = 100;
                if (cpuOpt === "defense" && newCurHero !== 2) {
                    newCurHero++;
                }
                if (newCurHero > 0 && cpuOpt !== "defense") {
                    newCurHero--;
                }
                break;
        }

        // --- Efectos del villano (CPU) ---
        switch (cpuOpt) {
            case "attack":
                if (newDefVillain < 2) newDefVillain++;
                if (newCurVillain < 2) newCurVillain++;

                if (heroOpt === "attack") {
                    newHpHero -= ATK * (newAtkVillain / 2);
                }
                if (heroOpt === "cure" && newAtkVillain !== 2) {
                    newAtkVillain++;
                }
                if (newAtkVillain > 0 && heroOpt !== "cure") {
                    newAtkVillain--;
                }
                break;

            case "defense":
                if (newAtkVillain < 2) newAtkVillain++;
                if (newCurVillain < 2) newCurVillain++;

                if (heroOpt === "attack" && atk.hero > def.villain - 1) {
                    newHpVillain += DEF * (newDefVillain / 2) - ATK * (newAtkHero / 2);
                }
                if (heroOpt === "attack" && newDefVillain !== 2) {
                    newDefVillain++;
                }
                if (newDefVillain > 0 && heroOpt !== "attack") {
                    newDefVillain--;
                }
                if (newHpVillain < 0) newHpVillain = 0;
                break;

            case "cure":
                if (newAtkVillain < 2) newAtkVillain++;
                if (newDefVillain < 2) newDefVillain++;

                if (heroOpt === "attack") {
                    newHpVillain += CUR * (newCurVillain / 2) - ATK * (newAtkHero / 2);
                } else {
                    newHpVillain += CUR * (newCurVillain / 2);
                }
                if (newHpVillain > 100) newHpVillain = 100;
                if (heroOpt === "defense" && newCurVillain !== 2) {
                    newCurVillain++;
                }
                if (newCurVillain > 0 && heroOpt !== "defense") {
                    newCurVillain--;
                }
                break;
        }

        // Ajustes de topes (0 y 100)
        if (newHpHero < 0) newHpHero = 0;
        if (newHpVillain < 0) newHpVillain = 0;

        // Actualizamos estado
        setHp({ hero: newHpHero, villain: newHpVillain });
        setAtk({ hero: newAtkHero, villain: newAtkVillain });
        setDef({ hero: newDefHero, villain: newDefVillain });
        setCur({ hero: newCurHero, villain: newCurVillain });
    }

    // Determinar si alguien ganó
    const winner = hp.hero === 0 ? "villain" : hp.villain === 0 ? "hero" : null;

    // Reset de la ronda (animaciones, selectedOption, etc.)
    function resetRound() {
        setSelectedOption(null);
        setOptionCPU(null);
    }

    return {
        hp,
        atk,
        def,
        cur,
        selectedOption,
        optionCPU,
        winner,
        isAnimating,
        onSelectAttack,
        onSelectDefense,
        onSelectCure,
        fightRound,
        resetRound,
    };
}
