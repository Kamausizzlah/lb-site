import { useState, useEffect } from "react";
import { images } from "../../constants";


import './Events.css'

const Events = () => {
    // Images for the slideshow

    const eventPics = [
        { src: images.festival, alt: "festival" },
        { src: images.dj, alt: "dj" },
        { src: images.wine, alt: "wine" },
    ];
    

    const [currentPic, setCurrentPic] = useState(0);

    useEffect(() => {
        // Auto scroll logic
        const timer = setInterval(() => {
            setCurrentPic((prev) => (prev + 1) % eventPics.length);
            
        }, 5000);

        // Clean up timer on unmount
        return () => clearInterval(timer);
    }, [eventPics.length]);

    return (
        <section className="events-section app__bg section__padding">

            {/* { Section heading } */}
            <h2 className="events-title headtext__cormorant">
                Events & Shows
            </h2>

            {/* Description text */}
            <div className="events-description">
                <p className="p__cormorant">
                    At the LB Lounge we have enough space, both outdoor and indoor to host various events for you. From Birthdays, Gender reveals, Sip & Paint, Artiste meet-and-greets to live-bands. Give us a call.
                </p>
            </div>

            {/* slideshow */}
            <div className="slideshow-container">
                {eventPics.map((pic, index) => (
                    <div
                        key={index}
                        className={`slide ${currentPic === index ? 'active' : ""}`}
                        style={{
                            backgroundImage: `url(${pic.src})`,
                        }}
                        aria-hidden = {currentPic !== index}
                    />
                ))}

                {/* Indicator dots */}
                <div className="dots-container">
                    {eventPics.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentPic === index ? 'active' : ""}`}
                            onClick={() => setCurrentPic(index)}
                            aria-label={`Go to slide ${index + 1}`}  
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;