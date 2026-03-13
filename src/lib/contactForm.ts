export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormConfig {
	endpoint: string;
}

const DEFAULT_CONTACT_FORM_ENDPOINT = "/api/contact";

export const getContactFormConfig = (
	config: Partial<ContactFormConfig> = {},
): ContactFormConfig => {
	const endpoint =
		config.endpoint?.trim() ||
		import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ||
		DEFAULT_CONTACT_FORM_ENDPOINT;

	return { endpoint };
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
		body: JSON.stringify(formData),
	});

	const result = (await response.json().catch(() => null)) as
		| { message?: string; ok?: boolean; error?: string }
		| null;

	if (!response.ok || result?.ok === false) {
		throw new Error(
			result?.message ||
				result?.error ||
				"We couldn't send your message right now. Please try again.",
		);
	}

	return result;
};
