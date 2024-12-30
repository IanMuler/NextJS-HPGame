// src/app/page.tsx

"use client";
import { useState } from "react";
import { End, Fight, Intro, SelectCharacter, Tower } from "@/components";

type Stage = "intro" | "select" | "tower" | "fight" | "end";

export default function Main() {
  const [stage, setStage] = useState<Stage>("intro");

  const nextStage = () => {
    if (stage === "intro") setStage("select");
    else if (stage === "select") setStage("tower");
    else if (stage === "tower") setStage("fight");
    else if (stage === "fight") setStage("end");
    else setStage("intro");
  };

  return (
    <main id="main">
      {stage === "intro" && <Intro nextStage={nextStage} />}
      {stage === "select" && <SelectCharacter nextStage={nextStage} />}
      {stage === "tower" && <Tower nextStage={nextStage} />}
      {stage === "fight" && <Fight nextStage={nextStage} />}
      {stage === "end" && <End nextStage={nextStage} />}
    </main>
  );
}
