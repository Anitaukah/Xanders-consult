import { describe, expect, it } from "vitest";
import {
	DEFAULT_CONTACT_ADMIN_EMAIL,
	getContactFormConfig,
} from "@/lib/contactForm";

describe("getContactFormConfig", () => {
	it("builds a FormSubmit endpoint from the admin email by default", () => {
		expect(getContactFormConfig({})).toEqual({
			adminEmail: DEFAULT_CONTACT_ADMIN_EMAIL,
			endpoint: `https://formsubmit.co/ajax/${encodeURIComponent(DEFAULT_CONTACT_ADMIN_EMAIL)}`,
		});
	});

	it("prefers an explicit endpoint when provided", () => {
		expect(
			getContactFormConfig({
				adminEmail: "anitaukah2@gmail.com",
				endpoint: "https://example.com/contact",
			}),
		).toEqual({
			adminEmail: "anitaukah2@gmail.com",
			endpoint: "https://example.com/contact",
		});
	});
});
