import projectResidential from "@/assets/real-work(1).jpg";
import projectCommercial from "@/assets/Proposed-two-bedroom(2).jpg";
import projectInfrastructure from "@/assets/3rd floor civil.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
// import projectLekkiInterior from "@/assets/project-lekki-interior.jpg";
import projectLekkiPool from "@/assets/project-lekki-pool.jpg";
import projectViInterior from "@/assets/project-vi-interior.jpg";
import projectViOffice from "@/assets/project-vi-office.jpg";
import projectHighwayDetail from "@/assets/project-highway-detail.jpg";
import projectHighwayPaving from "@/assets/project-highway-paving.jpg";
import projectIkoyiKitchen from "@/assets/project-ikoyi-kitchen.jpg";
import projectIkoyiBedroom from "@/assets/project-ikoyi-bedroom.jpg";
import projectAbujaExterior from "@/assets/Roofing_stage.jpg";
// import projectAbujaInterior from "@/assets/project-abuja-interior.jpg";
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
		value: "â‚¦4.5 Billion",
		status: "Completed",
		heroImage: projectResidential,
		gallery: [projectLekkiPool, projectResidential],
		summary:
			"A premium 120-unit luxury apartment complex featuring world-class amenities and modern Nigerian architectural design in the heart of Lekki.",
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
		slug: "Three storey residential building",
		title: "Three storey residential building",
		category: "Commercial",
		location: "Victoria Island, Lagos",
		year: "2022",
		client: "Sterling Properties Ltd",
		duration: "12 Months",
		value: "7.2 million",
		status: "Completed",
		heroImage: projectCommercial,
		gallery: [projectViInterior, projectViOffice, projectCommercial],
		summary:
			"A modern three-storey residential apartment block designed for comfortable urban living, featuring spacious balconies, durable finishes, and ample parking. The project was executed by Xanders Consult & Properties Ltd with a focus on structural integrity, quality materials, and clean architectural design",
		description: [
			"This modern three-storey residential apartment block was designed to provide comfortable, functional, and aesthetically appealing living spaces. The building features a well-balanced architectural design with spacious balconies, clean exterior finishes, and a durable roofing system that enhances both beauty and structural performance",

			"Xanders Consult & Properties Ltd was responsible for the structural planning and construction execution, ensuring that every stage of the project met professional engineering standards. From foundation works to the final finishing, the project was carefully supervised to guarantee durability, safety, and long-term value.",

			"The development includes multiple residential units with private balconies, adequate parking space, and efficient circulation areas, making it ideal for modern urban living. The building combines strong structural integrity with contemporary architectural elements such as stone-finished columns, brick accent walls, and metal balcony railings to create a visually appealing and practical residential environment.",

			"This project reflects our commitment to quality construction, thoughtful design, and reliable project delivery.",
		],
		scope: [
			"Construction management and site supervision",
			"Deep foundation and piling works oversight",
			"Structural steel and concrete frame construction",
			"Curtain wall faÃ§ade installation management",
			"MEP systems design coordination and installation",
			"Commissioning and handover management",
		],
		highlights: [
			"Modern 3-storey residential apartment block",
			"Spacious private balconies for each unit",
			"Contemporary exterior finish with brick and stone accents",
			"Well-planned parking area for residents and visitors",
			"Durable roofing system designed for long-term performance",
			"Built with quality materials and professional supervision by Xanders Consult & Properties Ltd",
		],
	},
	{
		slug: "3 Storey Uncompleted Building",
		title: "3 Storey Uncompleted Building",
		category: "Residential",
		location: "Aba, Abia State",
		year: "2024",
		client: "Private Client",
		duration: "18 Months",
		value: "12.8 Billion",
		status: "Ongoing",
		heroImage: projectInfrastructure,
		gallery: [projectResidential, projectInfrastructure],
		summary:
			"A multi-storey residential apartment building currently under construction, with structural works and upper-floor slab preparations supervised by Xanders Consult & Properties Ltd to ensure durability, safety, and engineering precision",
		description: [
			"This project showcases the ongoing construction of a multi-unit residential apartment building, currently progressing through the upper structural stage. The development is designed to provide modern, functional living spaces with a strong emphasis on durability and structural integrity.",
			"Xanders Consult & Properties Ltd is responsible for the construction supervision and structural execution, ensuring that every phase — from foundation works to slab casting and blockwork — follows professional engineering standards and approved building specifications.",
			"The project involves reinforced concrete structural framing, block wall construction, and slab formwork preparation for the upper floors. Our team closely monitors material quality, structural alignment, and safety compliance throughout the process to ensure a reliable and long-lasting residential structure",
		],
		scope: [
			"Structural construction supervision",
			"Reinforced concrete framework execution",
			"Blockwork and masonry construction",
			"Slab formwork and casting supervision",
			"Material quality inspection and testing",
			"On-site project coordination and safety monitoring",
		],
		highlights: [
			"Multi-storey residential apartment development",
			"Reinforced concrete structural frame construction",
			"Upper-floor slab formwork and structural works in progress",
			"Durable block wall construction with quality materials",
			"On-site engineering supervision and quality monitoring",
			"Designed for modern urban residential living",
		],
	},
	{
		slug: "Penthouse-renovation",
		title: "Penthouse Renovation",
		category: "Renovation",
		location: "Owerri, Imo State",
		year: "2023",
		client: "Private Client",
		duration: "8 Months",
		value: "12 Million",
		status: "Completed",
		heroImage: projectRenovation,
		gallery: [projectIkoyiKitchen, projectIkoyiBedroom, projectRenovation],
		summary:
			"A complete luxury renovation of a 650 sqm penthouse in Ikoyi, transforming it into an ultra-modern living space with bespoke finishes and smart home integration.",
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
		value: "12.2 Million",
		status: "Ongoing",
		heroImage: projectAbujaExterior,
		gallery: [projectInfrastructure, projectCommercial],
		summary:
			"A modern mixed-use commercial complex in Abuja's CBD featuring flexible office spaces, co-working areas, retail units, and a rooftop conference centre.",
		description: [
			"The Abuja Business Hub is a forward-thinking commercial development designed to serve the growing demand for modern, flexible workspace in Nigeria's federal capital. Located in the heart of Abuja's Central Business District, this 12-storey mixed-use complex combines traditional office space with contemporary co-working environments.",
			"Xander Consult is providing full construction management services for this flagship project, which includes 20,000 sqm of Grade A office accommodation, 5,000 sqm of co-working and serviced office space, ground-floor retail units, a 500-seat conference centre on the rooftop level, and 3 levels of underground parking.",
			"The building's design reflects a distinctly Nigerian architectural identity while incorporating international best practices in sustainable construction. Features include a double-skin faÃ§ade for thermal efficiency, rainwater harvesting systems, solar panel arrays, and electric vehicle charging stations in the parking levels.",
		],
		scope: [
			"Construction management and site coordination",
			"Foundation and structural works supervision",
			"FaÃ§ade engineering and installation oversight",
			"Interior fit-out management for co-working spaces",
			"Sustainable systems installation and commissioning",
			"Regulatory compliance and permit management",
		],
		highlights: [
			"25,000 sqm of combined office and co-working space",
			"500-seat rooftop conference centre",
			"Double-skin for energy efficiency",
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
		value: "â‚¦2.1 Billion",
		status: "Completed",
		heroImage: projectBananaExterior,
		gallery: [projectBananaInterior, projectBananaExterior, projectResidential],
		summary:
			"A bespoke 8-bedroom luxury villa on Banana Island featuring contemporary Nigerian architecture, smart home systems, and resort-style outdoor amenities.",
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
