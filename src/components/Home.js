import React, { Component } from 'react';
import '../styles/Home.css'
import '../styles/Layout.css';


class Home extends Component {
    render(){
        return(
            <div className="center">
                <h1 className="header">David Padilla</h1>
                <div id="content">
                    <h3>Full Stack Developer | Father | Husband | Gamer</h3>
                </div>
            </div>
        )
    }
}
export default Home;