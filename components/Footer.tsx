import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2026);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    })
    return (
        <footer className="site-footer section-shell">
            <a className="wordmark" href="#top">
                <span className="wordmark-mark">
                    IA<span>.</span>
                </span>
            </a>
            <span>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</span>
            <span>© {currentYear} IBRAHIM ADENIRAN</span>
            <Link href="/cv" className="back-top">
                VIEW CV ↗
            </Link>
            <a href="#top" className="back-top">
                BACK TO TOP ↑
            </a>
        </footer>
    )
}
