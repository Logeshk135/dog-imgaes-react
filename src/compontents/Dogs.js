import one from "../asstes/images/one.jpg"
import two from "../asstes/images/two.jpg"
import three from "../asstes/images/three.jpg"
import four from "../asstes/images/four.jpg"
function Dog() {
    return (
        <div className="dogs-container">
            <div className="dog">
                <div className="dog-info">
                    <img src={one} alt="Dog"></img>
                    <p>Juises Rabbits Ears</p>
                </div>

                <div className="dog-info">
                    <img src={two} alt="Dog"></img>
                    <p>The Innocent Lock</p>
                </div>

                <div className="dog-info">
                    <img src={three} alt="Dog"></img>
                    <p>Big Eyed Buggy</p>
                </div>

                <div className="dog-info">
                    <img src={four} alt="Dog"></img>
                    <p>The Sanit Doggo </p>
                </div>
            </div>
            <div className="dogs">
                <div className="dog-info">
                    <img src={three} alt="Dog"></img>
                    <p>Big Eyed Buggy</p>
                </div>
                <div className="dog-info">
                    <img src={two} alt="Dog"></img>
                    <p>The Innocent Lock</p>
                </div>

                <div className="dog-info">
                    <img src={four} alt="Dog"></img>
                    <p>The Sanit Doggo</p>
                </div>

                <div className="dog-info">
                    <img src={one} alt="Dog"></img>
                    <p>Juises Rabbits Ears</p>
                </div>
            </div>

        </div>

    );
}

export default Dog