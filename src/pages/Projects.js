import '../style.css';

function Projects() 
{
    return (
        <section id = "projects">
            <div className = "container">
                <div className = "row my-4">
                    <div className = "col-sm-6">
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className = "row my-4">
                    <div className = "col-sm-6">
                        <div className="card">
                            <img className="card-img-top" src="sudoku-cover.gif" alt="Card image cap"></img>
                            <div className="card-body">
                            <p className="card-text">Demonstrates two sudoku solving algorithms with code.</p>
                            <a href="https://gallant-spence-d638e9.netlify.app" className="btn btn-primary" target = "_blank">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-6">
                        <div className="card">
                            <img className="card-img-top" src="snake-cover.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <p className="card-text">A Deep-Q Learning Snake AI!!?!?!. As well a snake game.</p>
                            <a href="https://github.com/Curtin-Machine-Learning-Club/SnakeAI" className="btn btn-primary" target = "_blank">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col">
                        <h3>More Coming Soon...</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;