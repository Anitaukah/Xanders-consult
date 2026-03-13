import { MessageCircle } from "lucide-react";
import Whatsapp from "@/assets/whatsapp-brands-solid.svg"

const WhatsAppButton = () => {
	return (
		<a
			href="https://wa.me/2348130745838?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20construction%20services."
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat on WhatsApp"
			className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
		>
			<img src={Whatsapp} className="" />
		</a>
	);
};

export default WhatsAppButton;
