import React, { Component } from "react"

import Map from "../Map/Map"

class Home extends React.Component {
	render() {
		return (
			<section id="pageContent">
				<article className="container">
					<div className="mapContainer">
						<Map />
					</div>

					<h3>欢迎 | Welcome</h3>
					<p>
						Welcome to our blog, Six Feet Over! Our journey began in London, where we met for the first time, which has been one of
						our two home bases (the other being just south of Boston in the USA). Since meeting in London, we have traveled to three
						continents, and many cities. Our destinations have been inspired by food, fun, and photography, and the stories we
						collected along the way are the ones that we hope to share, here!
					</p>
					<p>
						So, why "Six Feet Over"? Simple: we are both rather tall individuals, and we sure aren’t six feet under! We started Six
						Feet Over (technically) just after moving to Shanghai to start a new chapter of our lives together, but our adventures
						started a while before this move ever happened. In fact, the name Six Feet Over was created on our very first trip
						together to Brussels, Belgium!
					</p>
					<p>
						Although we share this crazy adventure of living in Shanghai, we are different people, and hope that this platform allows
						us to express those differences and interests. Our vision for Six Feet Over is to share with friends, family, and
						wanderers alike our thoughts, suggestions, experiences, and hopes for the future. We blog about food, photography, tech,
						daily life, and everything in-between. As we stumble and learn, we hope that you can come with us through Six Feet Over!
					</p>
					<p>
						Thanks for stopping by!<br />
						Madeline & Ollie
					</p>
				</article>
			</section>
		)
	}
}

export default Home
