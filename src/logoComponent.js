import React, { useEffect, useState } from "react";
import Base from "./core/Base";
import Footer from "./core/Footer";
import "./logocomponent.css";
import Loading from "./Loading";
import API from "./backend"

const LogoComponent = ({ match }) => {
	const [logos, setLogos] = useState([]);

	const preload = logo_id => {
		fetch(API +"/"+ logo_id)
			.then(res => res.json())
			.then(logo => {
				setLogos(logo);
			});
	};

	useEffect(() => {
		preload(match.params.logo_id);
		// eslint-disable-next-line
	}, []);

	const Capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	const cardEnlarge = logo => (
		<div>
			<div className="row">
				<div className="col-md-7">
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-10 image">
							<img className="logo_img" alt="" src={logo.logo_img_url} />
						</div>
						<div className="col-md-1  "></div>
					</div>
				</div>
				<div className="col-md-5">
					<div className="row">
						<div className="col-md-8 compo_text">
							<div>
								<span>Name:</span> {Capitalize(logo.name)}
								<br />
								<br />
								<span>Description:</span> {Capitalize(logo.description)}
								<br />
								<br />
								<span>Category:</span> {Capitalize(logo.category_name)}
							</div>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div>
			<Base />
			{logos.length === 0 ? (
				<Loading color={"#50a8e0"} />
			) : (
				logos.map((logo, index) => (
					<div className="logo_component" key={index}>
						{cardEnlarge(logo)}
					</div>
				))
			)}
			<div className="footeradjust">
				<Footer />
			</div>
		</div>
	);
};

export default LogoComponent;
