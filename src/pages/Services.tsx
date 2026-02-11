import { motion } from "framer-motion";
import { Building, HardHat, PenTool, Wrench, BarChart3, FileCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Building,
    title: "Construction Management",
    desc: "End-to-end project management for residential, commercial, and industrial developments across Nigeria.",
  },
  {
    icon: HardHat,
    title: "Project Consulting",
    desc: "Expert advisory services from feasibility studies to project delivery, ensuring optimal outcomes.",
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    desc: "Innovative architectural solutions blending modern aesthetics with functional, sustainable design.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Transforming existing structures with modern upgrades, structural improvements, and interior finishing.",
  },
  {
    icon: BarChart3,
    title: "Quantity Surveying",
    desc: "Accurate cost estimation, budgeting, and financial management throughout the construction lifecycle.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    desc: "Navigating Nigerian building codes, permits, and environmental regulations for seamless approvals.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
            <h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">What We Do</h1>
            <p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Comprehensive construction and engineering services designed to deliver 
              excellence at every stage of your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
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
                <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={26} />
              </div>
              <h3 className="font-outfit text-xl font-bold text-foreground">{service.title}</h3>
              <p className="font-outfit text-muted-foreground mt-3 leading-relaxed text-sm">{service.desc}</p>
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
            { step: "01", title: "Consultation", desc: "Understanding your goals and requirements." },
            { step: "02", title: "Planning", desc: "Detailed project planning and cost estimation." },
            { step: "03", title: "Execution", desc: "Skilled construction with quality oversight." },
            { step: "04", title: "Delivery", desc: "On-time handover with full documentation." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-outfit text-4xl font-bold text-primary/20">{item.step}</div>
              <h4 className="font-outfit font-semibold text-foreground mt-2">{item.title}</h4>
              <p className="font-outfit text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
