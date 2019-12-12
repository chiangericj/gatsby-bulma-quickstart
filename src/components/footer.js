import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import {  } from 'react-icons/fa';
import { FaInstagram, FaMailBulk, FaLinkedin,FaFacebook } from 'react-icons/fa';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-primary">
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
			</footer>
		)}
	/>
);

export default Footer;
