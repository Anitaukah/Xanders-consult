import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Phone from "../assets/ic_baseline-phone-in-talk.svg";
import Facebook from "../assets/new-twitter-ellipse.svg";
import Email from "../assets/mdi_email.svg";
import Instagram from "../assets/instagram.svg";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/services", label: "Services" },
	{ to: "/projects", label: "Projects" },
	{ to: "/contact", label: "Contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
			<div className="bg-black max-w-7xl mx-auto py-2 px-6 lg:px-12 flex justify-between  ">
				<div className="flex gap-4">
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-end text-sm text-yellow-400"
					>
						<img src={Facebook} alt="Facebook" className="w-5" />
						Xander's Consult
					</a>
					<a
						href="https://www.instagram.com/xanders_consult?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-end text-sm text-yellow-400 "
					>
						<img src={Instagram} alt="Instagram" className="w-5" />
						xander_Consult
					</a>
				</div>
				<div className="flex gap-4">
					<div className="flex gap-2 items-end text-sm text-yellow-400">
						<img src={Email} alt="Email" className="w-5" />
						Xandersconsult@gmail.com
					</div>
					<div className="flex gap-2 items-end text-sm text-yellow-400">
						<img src={Phone} alt="Phone" className="w-5" />
						+234 9020 097 083
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="flex items-center justify-between h-20">
					<Link to="/" className="flex items-center gap-2">
						<div className="font-outfit font-bold text-xl tracking-tight text-foreground">
							Xanders Consult
						</div>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center gap-8 ">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className={`font-outfit text-sm py-2 px-2 rounded-sm font-medium transition-colors hover:text-yellow-600 ${
									location.pathname === link.to
										? "text-yellow-400"
										: "text-muted-foreground"
								}`}
							>
								{link.label}
							</Link>
						))}
						{/* <Link
							to="/contact"
							className="bg-yellow-400 px-5 py-2.5 rounded-sm font-outfit text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
						>
							Get a Quote
						</Link> */}
					</div>

					{/* Mobile Toggle */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-foreground"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background border-b border-border"
					>
						<div className="px-6 py-4 flex flex-col gap-4">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									onClick={() => setIsOpen(false)}
									className={`font-outfit text-base font-medium ${
										location.pathname === link.to
											? "text-yellow-300"
											: "text-muted-foreground"
									}`}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
