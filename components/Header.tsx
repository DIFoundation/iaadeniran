import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

const nav = [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "CV", href: "/cv" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <a className="wordmark" href="#top" aria-label="Ibrahim Adeniran home">
                <span className="wordmark-mark">
                    IA<span>.</span>
                </span>
                <span className="wordmark-caption">
                    INDEPENDENT DEVELOPER
                    <br />
                    LAGOS, NIGERIA
                </span>
            </a>
            <nav
                className={menuOpen ? "nav-links nav-open" : "nav-links"}
                id="primary-navigation"
                aria-label="Main navigation"
            >
                {nav.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    className="nav-contact"
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Let&apos;s talk <ArrowUpRight size={15} />
                </Link>
            </nav>
            <button
                className="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>
        </header>
    )
}
