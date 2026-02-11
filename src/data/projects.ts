import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
import projectLekkiInterior from "@/assets/project-lekki-interior.jpg";
import projectLekkiPool from "@/assets/project-lekki-pool.jpg";
import projectViInterior from "@/assets/project-vi-interior.jpg";
import projectViOffice from "@/assets/project-vi-office.jpg";
import projectHighwayDetail from "@/assets/project-highway-detail.jpg";
import projectHighwayPaving from "@/assets/project-highway-paving.jpg";
import projectIkoyiKitchen from "@/assets/project-ikoyi-kitchen.jpg";
import projectIkoyiBedroom from "@/assets/project-ikoyi-bedroom.jpg";
import projectAbujaExterior from "@/assets/project-abuja-exterior.jpg";
import projectAbujaInterior from "@/assets/project-abuja-interior.jpg";
import projectBananaExterior from "@/assets/project-banana-exterior.jpg";
import projectBananaInterior from "@/assets/project-banana-interior.jpg";

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  duration: string;
  value: string;
  status: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  description: string[];
  scope: string[];
  highlights: string[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "lekki-luxury-residences",
    title: "Lekki Luxury Residences",
    category: "Residential",
    location: "Lekki Phase 1, Lagos",
    year: "2023",
    client: "Lekki Gardens PLC",
    duration: "24 Months",
    value: "₦4.5 Billion",
    status: "Completed",
    heroImage: projectResidential,
    gallery: [projectLekkiInterior, projectLekkiPool, projectResidential],
    summary: "A premium 120-unit luxury apartment complex featuring world-class amenities and modern Nigerian architectural design in the heart of Lekki.",
    description: [
      "The Lekki Luxury Residences project represents one of the most ambitious residential developments in Lagos State. Spanning over 3 hectares of prime real estate in Lekki Phase 1, this development features 120 luxury apartments ranging from 2-bedroom flats to expansive 5-bedroom penthouses.",
      "Xander Consult provided full construction management and engineering consultancy services for this project, from initial feasibility studies through to final handover. Our team of 35 engineers and project managers ensured every aspect of the development met international quality standards while incorporating distinctly Nigerian design elements.",
      "The development includes a grand marble lobby, Olympic-sized swimming pool, state-of-the-art fitness centre, children's playground, underground parking for over 200 vehicles, and 24/7 security infrastructure with smart access control systems. Each unit features premium finishes including imported Italian marble, German kitchen fittings, and smart home technology integration.",
    ],
    scope: [
      "Full construction management from foundation to handover",
      "Structural engineering and design review",
      "MEP (Mechanical, Electrical, Plumbing) systems installation",
      "Interior finishing and fit-out supervision",
      "Landscape architecture and external works",
      "Quality assurance and compliance monitoring",
    ],
    highlights: [
      "120 luxury apartment units across 6 residential blocks",
      "Olympic-sized swimming pool and recreational facilities",
      "Underground parking for 200+ vehicles",
      "Smart home technology in every unit",
      "LEED-inspired sustainable building practices",
      "Zero safety incidents throughout construction",
    ],
  },
  {
    slug: "victoria-island-office-tower",
    title: "Victoria Island Office Tower",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    year: "2022",
    client: "Sterling Properties Ltd",
    duration: "30 Months",
    value: "₦7.2 Billion",
    status: "Completed",
    heroImage: projectCommercial,
    gallery: [projectViInterior, projectViOffice, projectCommercial],
    summary: "A 22-storey Grade A commercial office tower on Victoria Island, delivering 45,000 sqm of premium workspace with cutting-edge sustainability features.",
    description: [
      "The Victoria Island Office Tower stands as a landmark addition to Lagos's commercial skyline. This 22-storey Grade A office building was designed to meet the growing demand for world-class commercial space in Nigeria's business capital, offering 45,000 square metres of flexible, open-plan office accommodation.",
      "Xander Consult served as the lead construction management consultant, overseeing every phase from deep foundation piling through structural steelwork to the installation of the high-performance glass curtain wall façade. The project demanded precision engineering given the challenging Lagos Island terrain and high water table conditions.",
      "The tower features a stunning 5-storey glass atrium lobby, high-speed elevator systems serving all floors, centralized HVAC with individual zone control, backup power systems capable of running the entire building, and fibre-optic telecommunications infrastructure. The building achieved a 4-star green building rating for its energy-efficient design.",
    ],
    scope: [
      "Construction management and site supervision",
      "Deep foundation and piling works oversight",
      "Structural steel and concrete frame construction",
      "Curtain wall façade installation management",
      "MEP systems design coordination and installation",
      "Commissioning and handover management",
    ],
    highlights: [
      "22-storey landmark tower with 45,000 sqm office space",
      "5-storey glass atrium entrance lobby",
      "4-star green building rating",
      "High-speed elevator system (8 elevators)",
      "Full backup power generation",
      "Completed 2 months ahead of schedule",
    ],
  },
  {
    slug: "lagos-ibadan-expressway",
    title: "Lagos-Ibadan Expressway Section",
    category: "Infrastructure",
    location: "Lagos — Ogun State",
    year: "2024",
    client: "Federal Ministry of Works",
    duration: "36 Months",
    value: "₦12.8 Billion",
    status: "Ongoing",
    heroImage: projectInfrastructure,
    gallery: [projectHighwayDetail, projectHighwayPaving, projectInfrastructure],
    summary: "A 45km section of the Lagos-Ibadan Expressway reconstruction, including bridge works, interchange construction, and 6-lane dual carriageway development.",
    description: [
      "The Lagos-Ibadan Expressway is Nigeria's busiest and most economically vital highway corridor, connecting the nation's commercial capital to the Southwest hinterland. Xander Consult was appointed as construction supervision consultant for a critical 45-kilometre section of the expressway reconstruction project.",
      "This massive infrastructure undertaking involves the complete reconstruction of the existing dual carriageway to a modern 6-lane divided highway, including the construction of 3 major interchanges, 12 bridge structures, and comprehensive drainage systems designed to handle Lagos's heavy rainfall patterns.",
      "Our team of civil engineers, geotechnical specialists, and project managers provides round-the-clock supervision of construction activities, quality testing of materials, progress monitoring, and environmental compliance oversight. The project employs over 2,000 workers and utilizes the latest road construction technologies and equipment.",
    ],
    scope: [
      "Construction supervision and quality assurance",
      "Geotechnical investigation and foundation design review",
      "Bridge and interchange structural oversight",
      "Pavement design verification and materials testing",
      "Environmental impact monitoring",
      "Traffic management during construction phases",
    ],
    highlights: [
      "45km of 6-lane dual carriageway reconstruction",
      "3 major interchange constructions",
      "12 bridge and flyover structures",
      "Over 2,000 workers employed on-site",
      "Advanced asphalt paving technology",
      "Comprehensive drainage and flood management systems",
    ],
  },
  {
    slug: "ikoyi-penthouse-renovation",
    title: "Ikoyi Penthouse Renovation",
    category: "Renovation",
    location: "Ikoyi, Lagos",
    year: "2023",
    client: "Private Client",
    duration: "8 Months",
    value: "₦850 Million",
    status: "Completed",
    heroImage: projectRenovation,
    gallery: [projectIkoyiKitchen, projectIkoyiBedroom, projectRenovation],
    summary: "A complete luxury renovation of a 650 sqm penthouse in Ikoyi, transforming it into an ultra-modern living space with bespoke finishes and smart home integration.",
    description: [
      "This exclusive penthouse renovation project in one of Ikoyi's most prestigious residential towers required the complete transformation of a 650 square metre duplex penthouse into an ultra-modern luxury residence befitting its discerning owner.",
      "Xander Consult managed the entire renovation process, coordinating a team of specialist contractors including Italian marble installers, German kitchen fitters, smart home technology integrators, and bespoke furniture craftsmen. The project required careful structural assessments to accommodate the client's vision for open-plan living spaces with floor-to-ceiling windows.",
      "The renovation included a complete reconfiguration of the floor plan, installation of a chef's kitchen with Gaggenau appliances and Calacatta marble countertops, a master suite with walk-in wardrobe and spa bathroom, a home cinema, wine cellar, and a private rooftop terrace with infinity-edge plunge pool overlooking the Lagos Lagoon.",
    ],
    scope: [
      "Complete interior demolition and structural assessment",
      "Architectural redesign and space planning",
      "Premium materials procurement and logistics",
      "MEP systems upgrade and smart home integration",
      "Bespoke joinery and furniture installation",
      "Project management and quality control",
    ],
    highlights: [
      "650 sqm duplex penthouse fully renovated",
      "Calacatta marble throughout with gold-tone fixtures",
      "Full Gaggenau kitchen appliance suite",
      "Crestron smart home automation system",
      "Private rooftop terrace with plunge pool",
      "Completed within 8-month timeline",
    ],
  },
  {
    slug: "abuja-business-hub",
    title: "Abuja Business Hub",
    category: "Commercial",
    location: "Central Business District, Abuja",
    year: "2024",
    client: "Capital Properties Group",
    duration: "18 Months",
    value: "₦3.2 Billion",
    status: "Ongoing",
    heroImage: projectAbujaExterior,
    gallery: [projectAbujaInterior, projectAbujaExterior, projectCommercial],
    summary: "A modern mixed-use commercial complex in Abuja's CBD featuring flexible office spaces, co-working areas, retail units, and a rooftop conference centre.",
    description: [
      "The Abuja Business Hub is a forward-thinking commercial development designed to serve the growing demand for modern, flexible workspace in Nigeria's federal capital. Located in the heart of Abuja's Central Business District, this 12-storey mixed-use complex combines traditional office space with contemporary co-working environments.",
      "Xander Consult is providing full construction management services for this flagship project, which includes 20,000 sqm of Grade A office accommodation, 5,000 sqm of co-working and serviced office space, ground-floor retail units, a 500-seat conference centre on the rooftop level, and 3 levels of underground parking.",
      "The building's design reflects a distinctly Nigerian architectural identity while incorporating international best practices in sustainable construction. Features include a double-skin façade for thermal efficiency, rainwater harvesting systems, solar panel arrays, and electric vehicle charging stations in the parking levels.",
    ],
    scope: [
      "Construction management and site coordination",
      "Foundation and structural works supervision",
      "Façade engineering and installation oversight",
      "Interior fit-out management for co-working spaces",
      "Sustainable systems installation and commissioning",
      "Regulatory compliance and permit management",
    ],
    highlights: [
      "25,000 sqm of combined office and co-working space",
      "500-seat rooftop conference centre",
      "Double-skin façade for energy efficiency",
      "Solar panel and rainwater harvesting systems",
      "EV charging stations in underground parking",
      "Targeting 5-star green building certification",
    ],
  },
  {
    slug: "banana-island-villa",
    title: "Banana Island Villa",
    category: "Residential",
    location: "Banana Island, Ikoyi, Lagos",
    year: "2022",
    client: "Private Client",
    duration: "14 Months",
    value: "₦2.1 Billion",
    status: "Completed",
    heroImage: projectBananaExterior,
    gallery: [projectBananaInterior, projectBananaExterior, projectResidential],
    summary: "A bespoke 8-bedroom luxury villa on Banana Island featuring contemporary Nigerian architecture, smart home systems, and resort-style outdoor amenities.",
    description: [
      "Situated on one of the most exclusive addresses in Africa, the Banana Island Villa is a testament to luxury living at its finest. This bespoke 8-bedroom residence was built from the ground up on a 2,500 sqm plot, featuring a striking contemporary design that seamlessly blends international luxury standards with warm, Nigerian-inspired architectural elements.",
      "Xander Consult delivered turnkey construction management for this prestigious project, handling everything from site preparation and piling works through to the installation of Italian marble floors, custom-designed chandeliers, and a state-of-the-art Savant smart home system that controls lighting, climate, security, and entertainment throughout the residence.",
      "The villa features a double-height living hall with a crystal chandelier, a gourmet kitchen, home cinema, gym, staff quarters, a 4-car garage, resort-style swimming pool with cabana, landscaped gardens, and a private jetty providing direct lagoon access. Every detail was executed to the highest standards of craftsmanship.",
    ],
    scope: [
      "Turnkey construction management",
      "Piling and foundation works in waterfront conditions",
      "Structural design implementation and supervision",
      "Premium interior fit-out and finishing",
      "Landscaping, pool construction, and external works",
      "Smart home and security systems integration",
    ],
    highlights: [
      "8-bedroom villa on 2,500 sqm Banana Island plot",
      "Double-height living hall with crystal chandelier",
      "Savant whole-home automation system",
      "Resort-style pool with cabana and landscaping",
      "Private jetty with lagoon access",
      "Premium Italian marble and bespoke finishes throughout",
    ],
  },
];
