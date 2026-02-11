import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}
    >
      <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-primary">{label}</span>
      <h2 className="font-outfit text-3xl md:text-4xl font-bold mt-2 text-foreground">{title}</h2>
      {description && (
        <p className="font-outfit text-muted-foreground mt-4 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
