import { motion } from "framer-motion";
import {
	Building,
	HardHat,
	PenTool,
	Wrench,
	BarChart3,
	FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
	{
		icon: Building,
		title: "Building Construction",
		desc: "We handle complete building projects from foundation to finishing. Our team ensures structural integrity, safety compliance, and superior finishing.",
	},
	{
		icon: HardHat,
		title: "Project Development",
		desc: "From concept planning to feasibility analysis and execution strategies, we guide clients through every stage of development.",
	},
	{
		icon: PenTool,
		title: "Structural Design",
		desc: "We provide detailed structural engineering solutions that ensure durability, safety, and cost-efficiency using modern design standards.",
	},
	{
		icon: BarChart3,
		title: "Management Services",
		desc: "We offer professional project management services to ensure projects are delivered on time, within budget, and according to specification.",
	},
];

const Services = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			{/* Hero */}
			<section className="pt-32 pb-16 section-padding bg-secondary">
				<div className="max-w-7xl mx-auto pt-5">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">
							What We Do
						</h1>
						<h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground"></h1>
						<p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
							We provide comprehensive construction and development services
							tailored to individuals, businesses, and property investors in
							Nigeria.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="section-padding">
				<h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">
					Our Services
				</h1>
				<p className="font-outfit text-sm text-muted-foreground py-5">
					At Xanders Consult, we provide a full range of services including:
				</p>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, i) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08, duration: 0.5 }}
							className="p-8 border border-border rounded-sm hover:border-primary/30 transition-colors group"
						>
							<div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-colors">
								<service.icon
									className="text-primary group-hover:text-primary-foreground transition-colors"
									size={26}
								/>
							</div>
							<h3 className="font-outfit text-xl font-bold text-foreground">
								{service.title}
							</h3>
							<p className="font-outfit text-muted-foreground mt-3 leading-relaxed text-sm">
								{service.desc}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Process */}
			<section className="section-padding bg-secondary">
				<SectionHeading
					label="Our Process"
					title="How We Work"
					description="A streamlined approach that ensures quality delivery from start to finish."
				/>
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
					{[
						{
							step: "01",
							title: "Consultation",
							desc: "Understanding your goals and requirements.",
						},
						{
							step: "02",
							title: "Planning",
							desc: "Detailed project planning and cost estimation.",
						},
						{
							step: "03",
							title: "Execution",
							desc: "Skilled construction with quality oversight.",
						},
						{
							step: "04",
							title: "Delivery",
							desc: "On-time handover with full documentation.",
						},
					].map((item, i) => (
						<motion.div
							key={item.step}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="text-center"
						>
							<div className="font-outfit text-4xl font-bold text-primary/20">
								{item.step}
							</div>
							<h4 className="font-outfit font-semibold text-foreground mt-2">
								{item.title}
							</h4>
							<p className="font-outfit text-sm text-muted-foreground mt-1">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Services;
