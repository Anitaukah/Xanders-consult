import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Building2, value: "200+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Expert Engineers" },
];

const featuredProjects = [
  { image: projectResidential, title: "Lekki Luxury Residences", category: "Residential", slug: "lekki-luxury-residences" },
  { image: projectCommercial, title: "Victoria Island Office Tower", category: "Commercial", slug: "victoria-island-office-tower" },
  { image: projectInfrastructure, title: "Lagos-Ibadan Expressway", category: "Infrastructure", slug: "lagos-ibadan-expressway" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Xander Consult construction site in Lagos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-outfit text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Building Nigeria's Future
            </span>
            <h1 className="font-outfit text-4xl md:text-6xl font-bold text-background leading-tight">
              Construction & Engineering <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="font-outfit text-background/70 text-lg mt-6 leading-relaxed max-w-lg">
              From concept to completion, Xander Consult delivers world-class construction
              solutions tailored for Nigeria's evolving landscape.
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                to="/projects"
                className="bg-gradient-gold px-7 py-3.5 rounded-sm font-outfit text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border border-background/30 px-7 py-3.5 rounded-sm font-outfit text-sm font-semibold text-background hover:bg-background/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-outfit text-3xl font-bold text-background">{stat.value}</div>
                  <div className="font-outfit text-sm text-background/50">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <SectionHeading
          label="Our Portfolio"
          title="Featured Projects"
          description="A selection of our finest work across residential, commercial, and infrastructure development."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <Link key={project.title} to={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-outfit text-xs uppercase tracking-widest text-primary font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-background mt-1">{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-outfit text-sm font-semibold text-primary hover:underline"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Trusted by leading developers, government agencies, and private clients across Nigeria."
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Chief Adebayo Ogunlesi",
              role: "CEO, Lekki Gardens PLC",
              text: "Xander Consult delivered our 120-unit residential project on time and within budget. Their attention to detail and commitment to quality is unmatched in the Nigerian construction industry.",
              rating: 5,
            },
            {
              name: "Engr. Folake Adeyemi",
              role: "Director, Sterling Properties Ltd",
              text: "Working with Xander Consult on the Victoria Island Office Tower was a seamless experience. Their engineering expertise and project management capabilities are truly world-class.",
              rating: 5,
            },
            {
              name: "Alhaji Musa Ibrahim",
              role: "MD, Capital Properties Group",
              text: "From the initial consultation to ongoing construction of our Abuja Business Hub, Xander Consult has consistently exceeded our expectations. A truly reliable partner.",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-8 rounded-sm border border-border relative"
            >
              <Quote size={32} className="text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-outfit text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-outfit font-semibold text-sm text-foreground">{testimonial.name}</p>
                <p className="font-outfit text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-gold section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Build Your Vision?
          </h2>
          <p className="font-outfit text-primary-foreground/70 mt-4 text-lg">
            Let's discuss your next project. Our team of experts is ready to bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 bg-foreground px-8 py-3.5 rounded-sm font-outfit text-sm font-semibold text-background hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
