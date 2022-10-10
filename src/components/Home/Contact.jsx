export const Contact = () => {
    return (<div className={"contact"}>
        <div className="mapBox">
            <figure>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.807363744083!2d76.36251251519663!3d30.35642418176982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology%20(TIET)%2C%20Patiala!5e0!3m2!1sen!2sin!4v1665322648024!5m2!1sen!2sin"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </figure>
        </div>
        <div className="contactForm">
            <h3 className={"contact_heading"}>Contact Form</h3>

        </div>
    </div>);
}