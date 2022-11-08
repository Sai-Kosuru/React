import React from 'react'
import './Styles.css'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="/menu">MENU</Link></li>
                      <li><Link to="/#">REVIEW</Link></li>
                      <li><a href="#">ABOUTUS</a></li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">Jenny's Burgers</h1>
            </header>
            <section>
                <div className="home-container">
                    <h1>
                        Welcome to Jenny Mama's Burger Restaurant!
                    </h1>
                    <div className="home-container-content">
                                The first Burger Shop in Hereford opened its doors in 2014.
                            This decision was made after a series of suppers, pop-ups, and events by A Rule of Tum.
                            The restaurant was an overnight success with queues out the door from day one.
                            Our focus was on providing excellent food and utilising local suppliers. 
                            Alongside a choice of craft beers and great cocktails. 
                            The restaurant went from strength to strength and kick-started a food revolution in Hereford.
                    </div>
                </div>
            </section>
        </div>
    )
}
