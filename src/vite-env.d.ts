/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CONTACT_ADMIN_EMAIL?: string;
	readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
