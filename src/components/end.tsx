// src/app/components/end.tsx
const End = ({ nextStage }: { nextStage: () => void }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <p>
                The game has ended.
            </p>
            <button onClick={nextStage}>Restart</button>
        </div>
    )
}

export default End;