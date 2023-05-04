import '../style.css';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <section id = "heading">
        <div className = "container">
            <div className = "row my-4">
                <div className = "col-sm-6">
                    <h1>Curtin Machine Learning Club</h1>
                    Want to learn about machine learning? Maybe you've seen it on some cool hackers YouTube or maybe you've heard about it in the news.
                    Well learning about this field is a hard endeavour to do alone. Come join our club to be part of weekly meet ups where we work together to push each other to learn new things to satisfy your own curiosity. We will introduce you by getting you started on Google Colab then moving up the chain to playing with deepfakes, style transfer, audio enhancement and other exciting sub fields.
                    <div className = "spacer"></div>
                    Meetups are in room 300.220 every Wednesday from 12pm-2pm. Recommended courses and pre reading can be found under the meetups tab.
                    <div className = "spacer"></div>
                    <div className = "text-left">
                        <a href="https://github.com/Curtin-Machine-Learning-Club" className="btn btn-primary" target = "_blank">GitHub</a>
                    </div>
                    <div className = "spacer"></div>
                </div>
                <div className = "col-sm-6 text-center align-self-right">
                    <div className="fb-page" data-href="https://www.facebook.com/CurtinMLClub" data-tabs="timeline" data-width="400" data-height="650" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CurtinMLClub" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CurtinMLClub">Curtin Machine Learning Club</a></blockquote></div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;
