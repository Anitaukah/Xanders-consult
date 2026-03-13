import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
// import PhoneImg from "../assets/ic_baseline-phone-in-talk.svg";
import Facebook from "../assets/new-twitter-ellipse.svg";
// import Email from "../assets/mdi_email.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
	return (
		<footer className="bg-foreground text-background">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							{/* <div className="w-9 h-9 bg-gradient-gold rounded-sm flex items-center justify-center">
								<span className="font-outfit font-bold text-foreground">X</span>
							</div> */}
							<span className="font-outfit font-bold text-lg text-background">
								Xanders <span className="text-primary">Consult</span>
							</span>
						</div>
						<p className="text-background/60 text-sm leading-relaxed font-outfit">
							Delivering excellence in construction and engineering consultancy
							across Nigeria since 2019.
						</p>

						<div className="md:hidden visible flex md:flex-col gap-2 sm:flex-row md:items-center md:gap-4 mt-3">
							<a
								href="https://www.facebook.com/xandersconsult"
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-2 items-center text-xs sm:text-sm text-yellow-400"
							>
								<img src={Facebook} alt="Facebook" className="w-7" />
							</a>
							<a
								href="https://www.instagram.com/xanders_consult?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-2 items-center text-xs sm:text-sm text-yellow-400"
							>
								<img src={Instagram} alt="Instagram" className="w-7" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{["About", "Services", "Projects", "Contact"].map((item) => (
								<li key={item}>
									<Link
										to={`/${item.toLowerCase()}`}
										className="text-background/60 hover:text-primary text-sm font-outfit transition-colors"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">
							Services
						</h4>
						<ul className="space-y-2">
							{[
								"Building Construction",
								"Structural Design",
								"Project development",
								"Management Services",
							].map((item) => (
								<li key={item}>
									<span className="text-background/60 text-sm font-outfit">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">
							Contact
						</h4>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<MapPin size={16} className="text-primary mt-0.5 shrink-0" />
								<span className="text-background/60 text-sm font-outfit">
									Plot C2/Tansi Catholic Church junction, Orji Mechanic Villa,
									Orji Fly Over, Owerri,Imo State,Nigeria
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={16} className="text-primary shrink-0" />
								<span className="text-background/60 text-sm font-outfit">
									+2349020097083
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail size={16} className="text-primary shrink-0" />
								<span className="text-background/60 text-sm font-outfit">
									Xandersconsult@gmail.com
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-background/10 mt-12 pt-8 text-center">
					<p className="text-background/40 text-sm font-outfit">
						© {new Date().getFullYear()} Xander Consult. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
