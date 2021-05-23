import React, { Component } from "react";
import Base from "./core/Base";
import Card from "./core/Card";
import Footer from "./core/Footer";
import Loading from "./Loading";
import "./explore.css";
import CategoryDropdown from "./categoryDropdown";
import NoResult from "./noResult";
import API from "./backend";

const Exploree = () => {
	return (
		<div>
			<h1 className="heading">Explore</h1>
			<p className="description">
				Hi. Welcome to my Content Library.
				<br />
				Enjoyed working the past two years. Find a Few of my Best Works here.
			</p>
		</div>
	);
};

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logos: [],
			categories: [],
			searchQuery: "",
			noResults: false,
		};
	}

	onCategoryChange = text => {
		this.setState({ logos: [], noResults: false });
		if (text === "All")
			fetch(API + "/logos")
				.then(resp => resp.json())
				.then(logos =>
					this.setState({ logos: logos.reverse(), noResults: false })
				);
		else
			fetch(API + "/categories?name=" + text.toLowerCase())
				.then(re => re.json())
				.then(logos => {
					if (logos.length === 0) this.setState({ noResults: true });
					else this.setState({ logos: logos.reverse(), noResults: false });
				});
	};

	onSearchChange = searchQuery => {
		this.setState({ logos: [], noResults: false });
		this.setState({ searchQuery });
		if (searchQuery.toLowerCase().length === 0) {
			fetch(API + "/logos")
				.then(resp => resp.json())
				.then(logos =>
					this.setState({ logos: logos.reverse(), noResults: false })
				);
		} else {
			fetch(API + "/search?hash=" + searchQuery)
				.then(r => r.json())
				.then(logos => {
					if (logos.length === 0) this.setState({ noResults: true });
					else this.setState({ logos: logos.reverse(), noResults: false });
				})
				.catch(console.log);
		}
	};

	componentDidMount() {
		fetch(API + "/logos")
			.then(resp => resp.json())
			.then(logos =>
				this.setState({ logos: logos.reverse(), noResults: false })
			);

		fetch(API + "/allcategs")
			.then(resp => resp.json())
			.then(re => re.map(cate => cate.charAt(0).toUpperCase() + cate.slice(1)))
			.then(categories => this.setState({ categories: categories.reverse() }));
	}

	render() {
		return (
			<div>
				<Base route={68} onSearchChange={this.onSearchChange} />
				<Exploree />
				{this.state.categories && (
					<CategoryDropdown
						onCategoryChange={this.onCategoryChange}
						categories={this.state.categories}
					/>
				)}
				{this.state.logos.length === 0 && this.state.noResults === false ? (
					<Loading color={"#50a8e0"} />
				) : this.state.noResults === true ? (
					<NoResult searchQuery={this.state.searchQuery} />
				) : (
					<div
						style={{
							width: "90%",
							margin: "auto auto",
						}}
					>
						<div className="row" style={{ margin: "auto" }}>
							{this.state.logos.map((logo, index) => (
								<div className="col-md-6 col-xl-4 col-xs-12" key={index}>
									<Card logo={logo} />
								</div>
							))}
						</div>
					</div>
				)}
				<Footer />
			</div>
		);
	}
}

export default Explore;
