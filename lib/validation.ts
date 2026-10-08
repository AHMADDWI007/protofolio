export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Name
  if (!data.name.trim()) {
    errors.name = "Nama wajib diisi.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Nama minimal 2 karakter.";
  } else if (data.name.trim().length > 80) {
    errors.name = "Nama maksimal 80 karakter.";
  }

  // Email
  if (!data.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Format email tidak valid.";
  }

  // Subject
  if (!data.subject.trim()) {
    errors.subject = "Subject wajib diisi.";
  } else if (data.subject.trim().length < 3) {
    errors.subject = "Subject minimal 3 karakter.";
  } else if (data.subject.trim().length > 120) {
    errors.subject = "Subject maksimal 120 karakter.";
  }

  // Message
  if (!data.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Pesan minimal 10 karakter.";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Pesan maksimal 1000 karakter.";
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}