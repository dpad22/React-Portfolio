import React, { Component } from 'react';
import '../styles/Projects.css'

class Projects extends Component{
    render(){
        return(
            <div className="flex-container">
                <h1>Featured Projects</h1>
                {/* first project */}
                <div className="flex-grid">
                    <div className="col">
                    <h3>Twilight Imperium IV Companion</h3>
                        <img src="https://cf.geekdo-images.com/opengraph/img/lGW9I9o2kNtJmNgg_s3i_BjF1k4=/fit-in/1200x630/pic3727516.jpg" alt="project.img"></img>
                    </div>
                    <div className="col">
                        
                            <p className="link"> <a href="https://ti4app.herokuapp.com/">View live app</a> | <a href="https://github.com/dpad22/Twilight_app/tree/new-twilight_v2">View code</a></p>
                            <p className="content-proj">TI4 Companion is a full stack Angular and Node.js web app that users can view detailed information about each playable faction of Twilight Imperium IV. Designed as an interactive tool for players to reference all relevant faction information as they play. Utilized mongoDB and Express for the backend server and database.</p>

                            <i className="fab fa-angular">Angular</i>
                            <i className="fab fa-node-js">Node.JS</i>
                            <i className="fab fa-js">JavaScript</i>
                            <i className="fab fa-html5">HTML 5</i>
                            <i className="fab fa-css3">CSS 3</i>
                            <i className="fab fa-bootstrap">Bootstrap</i>
                    </div>

                </div>

                {/* second project */}
                <div className="flex-grid">
                    <div className="col">
                        <h3>League of Legends Champions</h3>
                        <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/League_of_Legends_Cover.jpg/revision/latest?cb=20191018222445" alt="project.img"></img>
                    </div>
                    <div className="col">
                        
                            <p className="link"> <a href="https://league-champions-app.herokuapp.com/">View live app</a> | <a href="https://github.com/dpad22/Python_LoL_App">View code</a></p>
                            <p className="content-proj">Full-stack web app utilizing Python and Django to create a League of Legends Champion statistics website complete with user login/registration, favorite user champion tracking, and detailed champion information. Utilized Django and MySQL.</p>

                            <i class="fab fa-python">Python</i>
                            <i class="fab fa-js">JavaScript</i>
                            <i class="fab fa-html5">HTML 5</i>
                            <i class="fab fa-css3">CSS 3</i>
                            <i class="fab fa-bootstrap">Bootstrap</i>

                    </div>

                </div>

                {/* third project */}
                <div className="flex-grid">
                    <div className="col">
                        <h3>Web Developer Portfolio</h3>
                        <img src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="project.img"></img>
                    </div>
                    <div className="col">
                        
                            <p className="link"> <a href="https://dpadilla-portfolio-v1.netlify.app/">View live app</a> | <a href="https://github.com/dpad22/React/tree/master/portfolio">View code</a></p>
                            <p className="content-proj">The portfolio project was created with React, JavaScript, HTML and CSS. React-router managed all the app routing. To serve as a live project with consistant updates as more projects are completed and ready to share. Showcases some basic to intermediate design proficiency. </p>

                            <i className="fab fa-react">React</i>
                            <i class="fab fa-js">JavaScript</i>
                            <i class="fab fa-html5">HTML 5</i>
                            <i class="fab fa-css3">CSS 3</i>
                            
                    </div>

                </div>

            </div>

        )
    }
}

export default Projects;