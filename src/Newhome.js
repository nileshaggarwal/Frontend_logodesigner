import React from "react";
import Base from "./core/Base";
import Footer from "./core/Footer";
import "./Newhome.css";
import image from "./images/final.png";
import elements from "./images/elements2.png";
import customer from "./images/customer2.png";
import message from "./images/whychooseme.png";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";

const Newhome = () => {
	const Hommie = () => (
		<div>
			<div className="background">
				<img className="elements" src={elements} alt="." />
				<div className="mainimage">
					<Zoom duration={1500} delay={200}>
						<img className="main" src={image} alt="introductionimage" />
					</Zoom>
				</div>
			</div>
			<div className="row row1">
				<div className="col-md-7">
					<div className="customerimage">
						<Zoom duration={1400}>
							<img className="customer" src={customer} alt="introduction" />
						</Zoom>
					</div>
				</div>
				<div className="col-md-5">
					<div className="benefits">
						<LightSpeed right duration={1500} cascade>
							<h3>Why get a logo?</h3>
						</LightSpeed>
						<LightSpeed right delay={1710} duration={1000} cascade>
							<ul style={{ listStyle: "none" }}>
								<li className="benefitstext">
									Logos are Emblems that Represent Brands and Status in the
									Competitive Marketing World.
								</li>

								<li className="benefitstext">
									Logos Represent You and Your Brand. Anyone would Prefer a
									Company with a Nice Logo over Another with a Not-so-nice Logo.
								</li>

								<li className="benefitstext">
									Logos have the Power to Influence Sales and Build Huge Brands.
									Hence, it Becomes very Important to have an Appropriate Logo
									for your Brand.
								</li>

								<li className="benefitstext">
									The Main Benefit of a Good and Unique Logo is that you get a
									Truly Unique Logo that Stands out and Builds a Professional
									Brand Name for your Business.
								</li>
							</ul>
						</LightSpeed>
					</div>
				</div>
			</div>
			<div className="row row2">
				<div className="col-md-7">
					<div className="messageimage">
						<Zoom duration={1000}>
							<img className="message" src={message} alt="message" />
						</Zoom>
					</div>
				</div>
				<div className="col-md-5">
					<LightSpeed right delay={900} duration={1000}>
						<div className="replybox">
							<p>
								My Services Include <span>TOP QUALITY</span> Art Work in
								Whatever way needed.
								<br />
								Your Search for an Awesome <span>Logo Designer</span> ends here.
								Drop in an Email and I shall get back to you within 24 hours.
								<br />
								<span>100%</span> Original, Unique and Innovative Logos.
								<br />
								Quality Logos at <span>Affordable</span> prices. What ya waiting
								for?
							</p>
						</div>
					</LightSpeed>
				</div>
			</div>
			<div className="merchandise">
				My Logos Official Merchandise is on Sale AND in Demand on
				<a target="blank" href="https://www.redbubble.com/people/kedar007/shop">
					{" "}
					REDBUBBLE!
				</a>
			</div>
		</div>
	);

	return (
		<div>
			<Base route={68} />
			<div className="hommie">{Hommie()}</div>
			<Footer />
		</div>
	);
};

export default Newhome;
