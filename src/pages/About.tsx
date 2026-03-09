import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Clock, CheckCircle } from "lucide-react";
import aboutTeam from "../assets/get.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
	{
		icon: Award,
		title: "Excellence",
		desc: "We pursue the highest standards in every project.",
	},
	{
		icon: Shield,
		title: "Integrity",
		desc: "Transparency and honesty guide our every decision.",
	},
	{
		icon: Clock,
		title: "Innovation",
		desc: "Forward-thinking solutions.",
	},
	{
		icon: CheckCircle,
		title: "Reliability",
		desc: "Timely and efficient project delivery.",
	},
];

const About = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			{/* Hero */}
			<section className="pt-32 pb-16 section-padding bg-secondary">
				<div className="max-w-7xl mx-auto pt-5 ">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">
							About Us
						</span>
						<h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">
							Who We Are
						</h1>
						<p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
							Xanders Consult is a forward-thinking construction and structural
							design firm committed to excellence, innovation, and
							sustainability. We provide end-to-end solutions that turn
							architectural concepts into functional realities.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Story */}
			<section className="section-padding">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<img
							src={aboutTeam}
							alt="Xander Consult engineering team"
							className="rounded-sm w-full h-[400px] object-contain"
							loading="lazy"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">
							Our Story
						</span>
						<h2 className="font-outfit text-3xl font-bold mt-2 text-foreground">
							Building Since 2019
						</h2>
						<p className="font-outfit text-muted-foreground mt-4 leading-relaxed">
							Founded in Owerri, Xander Consult began as a small consultancy
							firm with a bold vision: to transform Nigeria's construction
							industry through quality, innovation, and integrity.
						</p>
						<p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
							Today, we manage projects across Nigeria — From residential homes
							to commercial projects, we combine technical expertise,
							innovation, and strict quality control to ensure every structure
							meets engineering standards and client expectations.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="section-padding bg-secondary">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-background p-10 rounded-sm border border-border"
					>
						<div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-5">
							<Target className="text-primary" size={24} />
						</div>
						<h3 className="font-outfit text-2xl font-bold text-foreground">
							Our Mission
						</h3>
						<p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
							To deliver high-quality construction and engineering solutions
							that exceed client expectations while maintaining integrity,
							safety, and professionalism.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.15, duration: 0.5 }}
						className="bg-background p-10 rounded-sm border border-border"
					>
						<div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-5">
							<Eye className="text-primary" size={24} />
						</div>
						<h3 className="font-outfit text-2xl font-bold text-foreground">
							Our Vision
						</h3>
						<p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
							To become one of Nigeria’s most trusted construction and
							structural design firms known for quality delivery and innovative
							solutions.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Core Values */}
			<section className="section-padding">
				<SectionHeading label="Our Values" title="What Drives Us" />
				<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((v, i) => (
						<motion.div
							key={v.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="p-6 border border-border rounded-sm text-center"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
								<v.icon className="text-primary" size={22} />
							</div>
							<h4 className="font-outfit font-semibold text-foreground">
								{v.title}
							</h4>
							<p className="font-outfit text-sm text-muted-foreground mt-2">
								{v.desc}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default About;
