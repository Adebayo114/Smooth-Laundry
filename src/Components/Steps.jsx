import { Link } from "react-router-dom";
import washImg from "../assets/images2/wash1.jpg";
import dryImg from "../assets/images2/dry.jpg";
import foldImg from "../assets/images2/wash.jpg";
import deliverImg from "../assets/images2/delivery.jpg";
import { useEffect } from "react";
import "../Styles/Steps.css"; // Ensure this file exists for styling
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Stepsk = () => {
        useEffect(() => {
            AOS.init({ duration: 1000 });
        }, []);
    const steps = [
        {
            title: "We Wash",
            image: washImg,
            description: "We carefully sort and wash your clothes using high-quality detergents for the best results.",
        },
        {
            title: "We Dry",
            image: dryImg,
            description: "Your clothes are dried efficiently using professional-grade machines for a fresh finish.",
        },
        {
            title: "We Fold",
            image: foldImg,
            description: "Every item is neatly folded and arranged to ensure they are ready to wear or store.",
        },
        {
            title: "We Deliver",
            image: deliverImg,
            description: "Your clean and fresh laundry is delivered right to your doorstep at your convenience.",
        },
    ];

    return (

        
        <div data-aos="fade-up" className="how-it-works">
            <h1>How It Works</h1>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <img src={step.image} alt={step.title} />
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default Stepsk;