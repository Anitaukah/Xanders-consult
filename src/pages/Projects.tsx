import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Residential", "Commercial", "Infrastructure", "Renovation"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projectsData : projectsData.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</span>
            <h1 className="font-outfit text-4xl md:text-5xl font-bold mt-2 text-foreground">Our Projects</h1>
            <p className="font-outfit text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Explore our portfolio of completed and ongoing projects across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-outfit text-sm font-medium px-5 py-2 rounded-sm transition-colors ${
                  active === cat
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link to={`/projects/${project.slug}`} className="group relative overflow-hidden rounded-sm block">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-outfit text-xs uppercase tracking-widest text-primary font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-outfit text-lg font-bold text-background mt-1">{project.title}</h3>
                    <p className="font-outfit text-xs text-background/60 mt-1">{project.location}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`font-outfit text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                      project.status === "Completed" ? "bg-primary/90 text-primary-foreground" : "bg-background/90 text-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
