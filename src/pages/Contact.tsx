import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your message! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
            <h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">Contact Us</h1>
            <p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Ready to start your project? Reach out to our team and let's discuss how we can help.
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
              <h3 className="font-outfit text-xl font-bold text-foreground mb-6">Our Office</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
                  { icon: Mail, label: "Email", value: "info@xanderconsult.com" },
                  { icon: Clock, label: "Hours", value: "Mon — Fri: 8:00 AM — 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-outfit text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                      <p className="font-outfit text-sm text-foreground mt-0.5">{item.value}</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-outfit text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-outfit text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="john@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-outfit text-sm font-medium text-foreground block mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="+234 ..."
                />
              </div>
              <div>
                <label className="font-outfit text-sm font-medium text-foreground block mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Project inquiry"
                />
              </div>
            </div>
            <div>
              <label className="font-outfit text-sm font-medium text-foreground block mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-outfit text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-gold px-8 py-3.5 rounded-sm font-outfit text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
