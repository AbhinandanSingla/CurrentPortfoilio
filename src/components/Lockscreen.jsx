import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMouse} from "@fortawesome/free-solid-svg-icons";
import lockscreen from "../assets/images/lockscreen/lockscreen1.jpg";
import {gsap, Power1} from "gsap";
import {useContext, useEffect, useRef, useState} from "react";
import mouse from "../assets/images/icons/mouse.png";
import {CSSRulePlugin} from "gsap/CSSRulePlugin";
import {DataContext} from "../hooks/DataProvider";

export const LockScreen = () => {
    const {lock, setLock} = useContext(DataContext);
    gsap.registerPlugin(CSSRulePlugin);
    const comp = useRef();
    const circle = useRef();
    useEffect(() => {
        if (lock) {
            let ctx = gsap.context(() => {
                gsap.to(comp.current, {
                    top: "0%",
                    duration: 2,
                    ease: Power1.easeIn
                });
            }, comp); // <- IMPORTANT! Scopes selector text
            return () => ctx.revert(); //
        } else {
            let ctx = gsap.context(() => {
                gsap.to(comp.current, {
                    top: "-100%",
                    duration: 2
                });
            }, comp); // <- IMPORTANT! Scopes selector text
            return () => ctx.revert(); //
        }
    }, [lock])


    return (<div className="lockscreen center" ref={comp}>
            <figure className={"lockscreenIMG"}>
                <img src={lockscreen} alt=""/>
                <div className="layer center"></div>
            </figure>

            <div className="mouse" onClick={() => setLock(false)}>
                <div className="circles" ref={circle}>
                    <span className="circle1 "></span>
                    <span className="circle2 "></span>
                    <span className="circle3 "></span>
                    <span className="circle4 "></span>

                </div>
                <img src={mouse} alt=""/>

            </div>
            <div className="content">
                12:52 PM
                <span>  Wednesday June 17  </span>
            </div>

        </div>
    )
}