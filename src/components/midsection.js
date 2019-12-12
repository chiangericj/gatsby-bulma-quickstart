import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaOsi
} from 'react-icons/fa';
import ejc from '../images/ejc.jpg';
import './style.scss';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
			<div className="columns">
			<div className="column is-three-fifths is-offset-one-fifth">
			<div className="columns">

                  <div className="column">
                  <img
                    src={ejc}
                    alt="EJC"
                    style={{borderRadius: '1em', height: '372px'}}
                  />
                  </div>
                  <div className="column">
                    <div className="content">
                        <h1 className="title">I am an...</h1>
                      <div className="tile is-size-3">
                        <h1>Engineer</h1>
                        {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                      </div>
                      <div className="tile is-size-3">
                        <h1>Realtor</h1>
                      </div>
                      <div className="tile is-size-3">
                        <h1>Investor</h1>
                      </div>
                    </div>
                  </div>  
                </div>
				<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">About Me</h1>
									<p className="subtitle is-size-5">
										2017 UT Mechanical Engineer Graduate.  Real Estate Company Startup.  Facilities Engineer
									</p>
								</div>
							</div>
				</div>
				</div>
				<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
				<h1 className="title is-size-4">Experience</h1>
				<div className="card">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaSass size="fa-2x" color="#d22780" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Maintenance Planner</h1>
									<p className=" is-size-5">
										CBRE
									</p>
									<p className="is-size-5">
										Aug 2019 to Present
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Plant Engineer</h1>
									<p className=" is-size-5">
										UPS
									</p>
									<p className=" is-size-5">
										Jul 2016 to Jul 2019
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaReact size="fa-2x" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Realtor</h1>
									<p className=" is-size-5">
										Keller Williams
									</p>
									<p className=" is-size-5">
										Jul 2019 to Oct 2019
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaMobileAlt size="fa-2x" color="blue" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Realtor</h1>
									<p className=" is-size-5">
										Forever Realty
									</p>
									<p className=" is-size-5">
										Jan 2016 to Present
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaOsi size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Project Intern</h1>
									<p className=" is-size-5">
									Sueba Construction
									</p>
									<p className=" is-size-5">
										Jun 2015 to Aug 2015
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
				</div>
				</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
