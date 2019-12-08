import React from 'react';
import {  } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaMedium,FaFacebook } from 'react-icons/fa';

import './style.scss';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-medium">

		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Eric J. Chiang
							</h1>
							<p className="subtitle has-text-white is-size-3">
								Real Estate Professional{' '}
							</p>

							<article className="columns" >
								<div className="column">
									<span className="icon is-large">
										<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
												<FaFacebook size="fa-2x" color="white" />
										</a>
									</span>
								</div>
								<div className="column">
								<span className="icon is-large">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaTwitter size="fa-2x" color="white" />
									</a>
								</span>
								</div>
								<div className="column">
								<span className="icon is-large">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaGithub size="fa-2x" color="white" />
									</a>
								</span>
								</div>
								<div className="column">
								<span className="icon is-large">
									<a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">
										<FaMedium size="fa-2x" color="white" />
									</a>
								</span>
								</div>
							</article>
								
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
