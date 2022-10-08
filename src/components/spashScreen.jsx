import logo from "../assets/images/background/logo.gif";

export function SpashScreen() {

    return (<section className="loading">
            <div className="loadingBackground">
                <img id="loading" src={logo} alt=""/>
                <div className="logoHeading">Loading please wait...</div>
            </div>
        </section>
    );

}