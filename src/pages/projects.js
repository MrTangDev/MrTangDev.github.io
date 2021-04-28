import React from 'react'
import Layout from '../components/layout'

const Projects = () => {
    return (
        <Layout>
            <h2>Projects</h2>
            <p>A selection of what I have made in my free time</p>

            <div className="project">
                <h4><a href="https://github.com/MrTangDev/identity-generator">Identity Generator</a></h4>
                <p className="muted">2021</p>
                <p>Small project made with React to generate identities by getting data from API.</p>
            </div>
            <div className="project">
                <h4><a href="https://www.youtube.com/watch?v=qKuxyQmLjBI">EUKits.net</a></h4>
                <p className="muted">2014</p>
                <p>Minecraft KitPvP server, all plugins were original code.</p>
            </div>
            <div className="project">
                <h4><a href="https://www.youtube.com/watch?v=o8Pwf6BxDNI">Bukkit plugins</a></h4>
                <p className="muted">2013-2014</p>
                <p>Created multiple popular plugins for Minecraft servers.</p>
                <p>5000+ downloads.</p>
            </div>
        </Layout>
    )
}

export default Projects
