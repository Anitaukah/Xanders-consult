const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const readJsonBody = async (req: any) => {
	if (req?.body) {
		if (typeof req.body === "string") {
			try {
				return JSON.parse(req.body);
			} catch {
				return null;
			}
		}
		return req.body;
	}

	const chunks: Buffer[] = [];
	for await (const chunk of req) {
		chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
	}

	if (chunks.length === 0) return null;

	try {
		return JSON.parse(Buffer.concat(chunks).toString("utf8"));
	} catch {
		return null;
	}
};

export default async function handler(req: any, res: any) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ ok: false, error: "Method not allowed." });
	}

	const body = await readJsonBody(req);
	const name = typeof body?.name === "string" ? body.name.trim() : "";
	const email = typeof body?.email === "string" ? body.email.trim() : "";
	const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
	const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
	const message = typeof body?.message === "string" ? body.message.trim() : "";

	if (!name || !email || !subject || !message) {
		return res.status(400).json({
			ok: false,
			error: "Name, email, subject, and message are required.",
		});
	}

	if (!EMAIL_RE.test(email)) {
		return res.status(400).json({ ok: false, error: "Invalid email." });
	}

	const apiToken = process.env.MAILTRAP_API_TOKEN;
	const toEmail = process.env.CONTACT_TO_EMAIL;
	const fromEmail = process.env.CONTACT_FROM_EMAIL;
	const fromName = process.env.CONTACT_FROM_NAME || "Xander Consult";
	const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "Contact Form";

	if (!apiToken || !toEmail || !fromEmail) {
		return res.status(500).json({
			ok: false,
			error: "Server email configuration is missing.",
		});
	}

	const text = [
		`Name: ${name}`,
		`Email: ${email}`,
		`Phone: ${phone || "Not provided"}`,
		`Subject: ${subject}`,
		"",
		message,
	].join("\n");

	try {
		const response = await fetch("https://send.api.mailtrap.io/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Api-Token": apiToken,
			},
			body: JSON.stringify({
				from: { email: fromEmail, name: fromName },
				to: [{ email: toEmail }],
				subject: `${subjectPrefix}: ${subject}`,
				text,
			}),
		});

		if (!response.ok) {
			const errorText = await response.text().catch(() => "");
			return res.status(502).json({
				ok: false,
				error: "Email provider rejected the request.",
				details: errorText || undefined,
			});
		}

		return res.status(200).json({ ok: true });
	} catch (error) {
		return res.status(502).json({
			ok: false,
			error:
				error instanceof Error
					? error.message
					: "Unable to send message.",
		});
	}
}
