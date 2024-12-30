// src/components/header.tsx
import Link from "next/link";
import "./styles.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-main">
                <div className="header-logo">
                    <h1>
                        <Link href="/">
                            HPGame
                        </Link>
                    </h1>
                </div>
                <div className="header-nav">
                    <Link href="/about">
                        About
                    </Link>
                </div>
            </div>
        </header>
    );
}