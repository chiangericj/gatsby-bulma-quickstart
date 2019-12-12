import React from 'react';
import {  } from 'react-icons/fa';
import { FaInstagram, FaMailBulk, FaLinkedin,FaFacebook } from 'react-icons/fa';

import './style.scss';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-medium">

		<div className="hero-body">
			<div className="container center">

						<div className="content is-centered">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Eric J. Chiang
							</h1>
							<p className="subtitle has-text-white is-size-3">
								Real Estate Professional{' '}
							</p>

							<article >

									<span className="icon">
										<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
												<FaFacebook size="40px" color="white" />
										</a>
									</span>

								<span className="icon">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaLinkedin size="40px" color="white" />
									</a>
								</span>

								<span className="icon">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaInstagram size="40px" color="white" />
									</a>
								</span>

								<span className="icon">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaMailBulk size="40px" color="white" />
									</a>
								</span>
							</article>
								
						</div>
					
			</div>
		</div>
	</section>
);

export default Header;
