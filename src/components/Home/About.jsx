import web from "../../assets/images/images/icon-dev.svg";
import app from "../../assets/images/images/icon-app.svg";
import machinelearning from "../../assets/images/images/machineLearning.png";
import blockchain from "../../assets/images/images/blockchain.png";

export const About = () => {
    return (<div className="about">
        <div className="description">
            I'm a Fullstack developer and Android Developer from India,
            working in web development and other different technologies like blockchain and
            ML/Dl.
            I enjoy turning complex problems into simple, beautiful, and intuitive projects.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eius ex iure
            officia
            quas saepe! Accusamus autem dolorum est ipsum minima nostrum possimus
            praesentium
            quasi repellat sed. Fugiat quaerat rem veritatis? Nihil, nulla quo.
        </div>
        <div className="heading">
            What I'm Doing
        </div>
        <div className="container">
            <div className={'dflex'}>
                <div className="card">
                    <div className="logo">
                        <img src={web} alt=""/>
                    </div>
                    <div className="info">
                        <div className="title">
                            Web Developement
                        </div>
                        <div className="desc">
                            High Quality development of sites on the professional level
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={app} alt=""/>
                    </div>
                    <div className="info">
                        <div className="title">
                            App Developement
                        </div>
                        <div className="desc">
                            High Quality development of sites on the professional level
                        </div>
                    </div>
                </div>
            </div>
            <div className="dflex">
                <div className="card">
                    <div className="logo">
                        <img src={machinelearning} alt=""/>
                    </div>
                    <div className="info">
                        <div className="title">
                            Machine Learning
                        </div>
                        <div className="desc">
                            High Quality development of sites on the professional level
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={blockchain} alt=""/>
                    </div>
                    <div className="info">
                        <div className="title">
                            Blockchain
                        </div>
                        <div className="desc">
                            High Quality development of sites on the professional level
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>);
}