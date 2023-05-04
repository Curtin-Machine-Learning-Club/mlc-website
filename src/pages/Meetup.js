import '../style.css'

function Meetup() 
{
    return (
        <section id = "meetups">
            <div className = "container">
                <div className = "row my-4 justify-content-center">
                        <h1>Meetups</h1>
                </div>
                    <div className = "col-sm-6 center-block">
                        <div className = "spacer"></div>
                        TBA, for this semester
                        <div className = "spacer"></div>
                        <h3>About</h3>
                        The meetups will go over the fundamentals of python and machine learning as well as more in depth sessions as the semester progresses. This includes both classical machine learning techniques such as regression, clustering, as well as neural networks.
                        <div className = "spacer"></div>
                        <h3>Recommended Online Courses</h3>
                        <ul>
                            <li><a href="https://www.fast.ai">fastai</a></li>
                            <li><a href="https://developers.google.com/machine-learning/crash-course/ml-intro">Google Intro to Machine Learning.</a> </li>
                        </ul>
                    </div>
                </div>
        </section>
    );
}

export default Meetup;
