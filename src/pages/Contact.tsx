import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/sonner";
import { submitContactForm } from "@/lib/contactForm";

const createEmptyFormData = () => ({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
});

const Contact = () => {
	const [formData, setFormData] = useState(createEmptyFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await submitContactForm(formData);
			toast.success("Message sent", {
				description: "Your enquiry has been delivered to the admin email.",
			});
			setFormData(createEmptyFormData());
		} catch (error) {
			const description =
				error instanceof Error && error.message !== "Failed to fetch"
					? error.message
					: "We couldn't send your message right now. Please try again shortly.";

			toast.error("Message not sent", {
				description,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			<section className="pt-32 pb-16 section-padding bg-secondary">
				<div className="max-w-7xl mx-auto py-5">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">
							Get In Touch
						</span>
						<h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">
							Contact Us
						</h1>
						<p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
							Ready to start your project? Reach out to our team and let's
							discuss how we can help.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="section-padding">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-2 space-y-8"
					>
						<div>
							<h3 className="font-outfit text-xl font-bold text-foreground mb-6">
								Our Office
							</h3>
							<div className="space-y-5">
								{[
									{
										icon: MapPin,
										label: "Address",
										value:
											"Plot C2/Tansi Catholic Church junction, Orji Mechanic Villa, Orji Fly Over, Owerri, Imo State,Nigeria",
									},
									{ icon: Phone, label: "Phone", value: "+2349020097083" },
									{
										icon: Mail,
										label: "Email",
										value: "Xandersconsult@gmail.com",
									},
									{
										icon: Clock,
										label: "Hours",
										value: "Mon - Sat: 8:00 AM - 6:00 PM",
									},
								].map((item) => (
									<div key={item.label} className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
											<item.icon className="text-primary" size={18} />
										</div>
										<div>
											<p className="font-outfit text-xs font-semibold uppercase tracking-wider text-muted-foreground">
												{item.label}
											</p>
											<p className="mt-0.5 font-outfit text-sm text-foreground">
												{item.value}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Form */}
					<motion.form
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						onSubmit={handleSubmit}
						className="lg:col-span-3 space-y-5"
					>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label className="mb-1.5 block font-outfit text-sm font-medium text-foreground">
									Full Name
								</label>
								<input
									type="text"
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="w-full rounded-sm border border-border bg-secondary px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
									placeholder="John Doe"
								/>
							</div>
							<div>
								<label className="mb-1.5 block font-outfit text-sm font-medium text-foreground">
									Email
								</label>
								<input
									type="email"
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="w-full rounded-sm border border-border bg-secondary px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
									placeholder="john@email.com"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label className="mb-1.5 block font-outfit text-sm font-medium text-foreground">
									Phone
								</label>
								<input
									type="tel"
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									className="w-full rounded-sm border border-border bg-secondary px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
									placeholder="+234 ..."
								/>
							</div>
							<div>
								<label className="mb-1.5 block font-outfit text-sm font-medium text-foreground">
									Subject
								</label>
								<input
									type="text"
									required
									value={formData.subject}
									onChange={(e) =>
										setFormData({ ...formData, subject: e.target.value })
									}
									className="w-full rounded-sm border border-border bg-secondary px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
									placeholder="Project inquiry"
								/>
							</div>
						</div>
						<div>
							<label className="mb-1.5 block font-outfit text-sm font-medium text-foreground">
								Message
							</label>
							<textarea
								required
								rows={5}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="w-full resize-none rounded-sm border border-border bg-secondary px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
								placeholder="Tell us about your project..."
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="inline-flex items-center gap-2 rounded-sm bg-gradient-gold px-8 py-3.5 font-outfit text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
						>
							{isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
						</button>
					</motion.form>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Contact;
