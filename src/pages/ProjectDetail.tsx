import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, Banknote, CheckCircle, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 font-outfit text-sm text-background/70 hover:text-primary mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <span className="block font-outfit text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              {project.category}
            </span>
            <h1 className="font-outfit text-3xl md:text-5xl font-bold text-background">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="flex items-center gap-1.5 font-outfit text-sm text-background/70">
                <MapPin size={14} className="text-primary" /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 font-outfit text-sm text-background/70">
                <Calendar size={14} className="text-primary" /> {project.year}
              </span>
              <span className={`font-outfit text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${
                project.status === "Completed" ? "bg-primary/20 text-primary" : "bg-background/20 text-background"
              }`}>
                {project.status}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-outfit text-2xl font-bold text-foreground mb-4">Project Overview</h2>
              <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
              {project.description.map((para, i) => (
                <p key={i} className="font-outfit text-muted-foreground leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-outfit text-xl font-bold text-foreground mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} - Image ${i + 1}`}
                    className={`w-full object-cover rounded-sm ${i === 0 ? "sm:col-span-2 h-72" : "h-56"}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>

            {/* Scope */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-outfit text-xl font-bold text-foreground mb-6">Scope of Work</h3>
              <ul className="space-y-3">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="font-outfit text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-sm border border-border sticky top-28"
            >
              <h3 className="font-outfit text-lg font-bold text-foreground mb-6">Project Details</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Location", value: project.location },
                  { icon: Calendar, label: "Year", value: project.year },
                  { icon: Clock, label: "Duration", value: project.duration },
                  { icon: Banknote, label: "Project Value", value: project.value },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-outfit text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                      <p className="font-outfit text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div>
                  <p className="font-outfit text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Client</p>
                  <p className="font-outfit text-sm font-medium text-foreground">{project.client}</p>
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <h4 className="font-outfit text-sm font-bold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-outfit text-xs text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="block mt-6 w-full bg-gradient-gold text-center py-3 rounded-sm font-outfit text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-secondary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-outfit text-sm text-muted-foreground uppercase tracking-widest">Next Project</span>
          <Link to={`/projects/${nextProject.slug}`} className="block mt-2 group">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-3">
              {nextProject.title} <ArrowRight size={28} />
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
