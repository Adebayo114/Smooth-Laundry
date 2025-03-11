import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../Styles/HomePage.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaCheck } from "react-icons/fa";
import {FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo smooth.png";
import heroimg from "../assets/images/Group 34.png";
import step1 from "../assets/images/Step 1.png";
import step2 from "../assets/images/Step 2.png";
import step3 from "../assets/images/Step 3.png";
import step4 from "../assets/images/Step 4.png";
// import service1 from "../assets/images/image 13 (1) 1.png";
// import service2 from "../assets/images/image 12 (1) 1.png";
// import service3 from "../assets/images/image 11 (1) 1.png";
import thinkinface from "../assets/images/Thinkingface.png";



const services = [
    {
        category: "Shirts",
        items: [
            { name: "Wash, Iron & Starch", price: "₦600" },
            { name: "Ironing & Starch", price: "₦400" },
            { name: "Wash & Iron", price: "₦400" }
        ]
    },
    {
        category: "Buba and Sokoto",
        items: [
            { name: "Wash, Iron & Starch", price: "₦1000" },
            { name: "Ironing & Starch", price: "₦800" },
            { name: "Wash & Iron", price: "₦800" }
        ]
    },
    {
        category: "Suits",
        items: [
            { name: "Blazer & Pants", price: "₦1500" },
            { name: "Complete Suit", price: "₦2000" },
            { name: "Blazer Only", price: "₦1000" }
        ]
    },
    {
        category: "Duvet & Bedsheets",
        items: [
            { name: "Duvet", price: "₦2500" },
            { name: "Bedsheets & Pillowcases (Set)", price: "₦2000" }
        ]
    }
];

function HomePage() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            {/* Bootstrap Navbar */}
            <Navbar expand="lg" bg="light" variant="light" className="shadow-sm" fixed="top">
                <Container>
                    <Navbar.Brand href="#">
                        <img id="logo-img" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#how-it-works">How it works</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown">
                                <NavDropdown.Item href="#">Pickup</NavDropdown.Item>
                                <NavDropdown.Item href="#services">Drop-off</NavDropdown.Item>
                                <NavDropdown.Item href="#">Laundry</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#socials">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <div data-aos="fade-down" className="hero-section">
                <div className="item">
                    <h1 className="display-1">
                    Fresh clothes today, <div className="text-primary">Confidence tomorrow</div>
                    </h1>
                    <p className="text-muted">
                    Keep your wardrobe fresh and your confidence high with our premium laundry services.  
                    Hassle-free cleaning, so you always look and feel your best!
                    </p>
                    <button  className="btn-click">How it works</button>
                </div>

                <div className="item">
                    <img src={heroimg} alt="" />
                </div>
            </div>

            {/* How it works */}
            <div id="how-it-works" className="container1">
                <h2>How It Works</h2>
                <h1>Get it done in 4 steps</h1>

                <div className="step-img-main">
                    <div data-aos="fade-up" className="step-img">
                        <img id="stp-img" src={step1} alt="" />
                    </div>

                    <div data-aos="fade-up" className="step-img">
                        <img id="stp-img" src={step2} alt="" />
                    </div>

                    <div data-aos="fade-up" className="step-img">
                        <img id="stp-img" src={step3} alt="" />
                    </div>

                    <div data-aos="fade-up" className="step-img">
                        <img id="stp-img" src={step4} alt="" />
                    </div>
                </div>
            </div>


            {/* SERVICE SECTION */}
            <div data-aos="fade-up" id="services" className="services-container">
    <h2 className="section-title">Services</h2>
    <h1 className="section-heading">Services & Packages</h1>

    <div className="services-grid">
        {services.map((category) => (
            <div key={category.category} className="service-box">
                <h2 className="category-title">{category.category}</h2>

                <ul className="service-list">
                    {category.items.map((service, index) => (
                        <li key={index} className="service-item">
                            <FaCheck className="check-icon" />
                            <span>{service.name}</span>
                            <strong className="service-price">{service.price}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>

    {/* WhatsApp Button */}
    <div className="whatsapp-container">
        <a 
            href="https://wa.me/+2349138204249" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <FaWhatsapp className="whatsapp-icon" /> Get in Touch
        </a>
    </div>
</div>


            {/* DECISION SECTION */}
            <div data-aos="fade-up" className="decision-section">
                <div className="decision-image">
                    <img src={thinkinface} alt="Thinking person" />
                </div>

                <div className="decision-content">
                    <h3>Hard time deciding </h3>
                    <h3>what’s best for you?</h3>
                    <button className="btn-learn-more">Learn more</button>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div data-aos="fade-up" className="Footer-section">
                <Navbar.Brand href="#">
                    <img id="logo-img" src={logo} alt="" />
                </Navbar.Brand>

                <div className="footer-sections">
                    <div className="footer-mini-section">
                        <div className="footer-mini-section2">
                            <h3>Services</h3>
                            <p>Pickup</p>
                            <p>Drop-off</p>
                            <p>Laundry</p>
                        </div>

                        <div className="footer-mini-section2">
                            <h3>Check us out</h3>
                            <div id="socials" className="social-icons">
                                <div className="social-icons">
                                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="icon facebook" />
                                    </a> */}
                                    <a href="https://www.instagram.com/smooth_laundry?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="icon instagram" />
                                    </a>
                                    <a href="https://wa.me/+2349138204249" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="icon whatsapp" />
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
