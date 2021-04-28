import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header>
            <title>Tang portfolio site</title>
            <div>
                <h1>
                    Tang
                </h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog/">Blog</Link>
                <Link to="/projects/">Projects</Link>
            </nav>
        </header>
    )
}

export default Header