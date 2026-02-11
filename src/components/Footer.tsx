import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-gold rounded-sm flex items-center justify-center">
                <span className="font-outfit font-bold text-foreground">X</span>
              </div>
              <span className="font-outfit font-bold text-lg text-background">
                Xander<span className="text-primary">Consult</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed font-outfit">
              Delivering excellence in construction and engineering consultancy across Nigeria since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-background/60 hover:text-primary text-sm font-outfit transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {["Construction Management", "Project Consulting", "Architectural Design", "Renovation"].map((item) => (
                <li key={item}>
                  <span className="text-background/60 text-sm font-outfit">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-sm uppercase tracking-wider text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm font-outfit">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-background/60 text-sm font-outfit">+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-background/60 text-sm font-outfit">info@xanderconsult.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 text-sm font-outfit">
            © {new Date().getFullYear()} Xander Consult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
