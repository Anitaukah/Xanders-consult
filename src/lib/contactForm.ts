export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormConfig {
	adminEmail: string;
	endpoint: string;
}

const FORM_SUBMIT_AJAX_BASE_URL = "https://formsubmit.co/ajax";

export const DEFAULT_CONTACT_ADMIN_EMAIL = "Xandersconsult@gmail.com";

export const getContactFormConfig = (
	config: Partial<ContactFormConfig> = {},
): ContactFormConfig => {
	const adminEmail =
		config.adminEmail?.trim() ||
		import.meta.env.VITE_CONTACT_ADMIN_EMAIL?.trim() ||
		DEFAULT_CONTACT_ADMIN_EMAIL;

	const endpoint =
		config.endpoint?.trim() ||
		import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ||
		`${FORM_SUBMIT_AJAX_BASE_URL}/${encodeURIComponent(adminEmail)}`;

	return { adminEmail, endpoint };
};

export const submitContactForm = async (
	formData: ContactFormData,
	config?: Partial<ContactFormConfig>,
) => {
	const { endpoint } = getContactFormConfig(config);
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...formData,
			phone: formData.phone || "Not provided",
			_replyto: formData.email,
			_subject: `New contact message: ${formData.subject}`,
			_template: "table",
			_captcha: "false",
		}),
	});

	const result = (await response.json().catch(() => null)) as
		| { message?: string; success?: boolean | string }
		| null;

	if (!response.ok || result?.success === false || result?.success === "false") {
		throw new Error(
			result?.message ||
				"We couldn't send your message right now. Please try again.",
		);
	}

	return result;
};
