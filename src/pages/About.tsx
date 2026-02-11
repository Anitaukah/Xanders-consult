import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Clock, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every project." },
  { icon: Shield, title: "Integrity", desc: "Transparency and honesty guide our every decision." },
  { icon: Clock, title: "Timeliness", desc: "We deliver on schedule, every time." },
  { icon: CheckCircle, title: "Safety", desc: "Zero compromise on health and safety standards." },
];

const About = () => {
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
            <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
            <h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">Who We Are</h1>
            <p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Xander Consult is a leading Nigerian construction and engineering consultancy, 
              committed to shaping Nigeria's built environment with innovation and precision.
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
            <img src={aboutTeam} alt="Xander Consult engineering team" className="rounded-sm w-full h-[400px] object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">Our Story</span>
            <h2 className="font-outfit text-3xl font-bold mt-2 text-foreground">Building Since 2010</h2>
            <p className="font-outfit text-muted-foreground mt-4 leading-relaxed">
              Founded in Lagos, Xander Consult began as a small consultancy firm with a bold vision: 
              to transform Nigeria's construction industry through quality, innovation, and integrity.
            </p>
            <p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
              Today, we manage projects across Nigeria — from luxury residential developments in Lekki 
              to large-scale infrastructure projects — employing over 50 engineers and construction professionals.
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
            <h3 className="font-outfit text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
              To deliver innovative, sustainable, and high-quality construction solutions that exceed 
              client expectations while contributing to Nigeria's infrastructure development and economic growth.
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
            <h3 className="font-outfit text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="font-outfit text-muted-foreground mt-3 leading-relaxed">
              To be West Africa's most trusted construction consultancy, recognized for transforming 
              communities through world-class engineering, sustainable practices, and unwavering commitment to excellence.
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
              <h4 className="font-outfit font-semibold text-foreground">{v.title}</h4>
              <p className="font-outfit text-sm text-muted-foreground mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
