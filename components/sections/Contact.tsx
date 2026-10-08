"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { socialLinks } from "@/data/navigation";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";
import {
  validateContactForm,
  hasErrors,
  type ContactFormData,
  type FormErrors,
} from "@/lib/validation";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: personal.location,
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Biasanya dalam 24 jam",
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleChange = (field: keyof ContactFormData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);

    // Live-validate hanya field yang sudah di-touch
    if (touched[field]) {
      const newErrors = validateContactForm(newData);
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateContactForm(formData);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateContactForm(formData);
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (hasErrors(newErrors)) return;

    setStatus("submitting");

    // TODO: Integrasi dengan Resend / EmailJS / Formspree di STEP 15
    // Sementara hanya simulasi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData(initialFormData);
    setTouched({});
    setErrors({});

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="kontak" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-500/8 blur-[120px]"
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Kontak"
          title="Mari berkolaborasi"
          description="Punya project atau ide yang ingin didiskusikan? Kirim pesan dan saya akan merespon secepat mungkin."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: Info */}
          <FadeIn direction="right" className="flex flex-col gap-6">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const Wrapper = info.href ? "a" : "div";
                return (
                  <Card
                    key={info.label}
                    variant="glass"
                    className="group flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40"
                  >
                    <Wrapper
                      {...(info.href ? { href: info.href } : {})}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs uppercase tracking-widest text-secondary">
                          {info.label}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {info.value}
                        </span>
                      </div>
                    </Wrapper>
                  </Card>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-xs uppercase tracking-widest text-secondary">
                Terhubung dengan saya
              </span>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:bg-accent-500/10 hover:text-accent-500"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="left">
            <Card className="relative overflow-hidden p-6 sm:p-8">
              {/* Decorative corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl"
              />

              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative flex flex-col gap-5"
              >
                {/* Name + Email (2 columns on sm+) */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Nama"
                    id="name"
                    placeholder="Nama lengkap kamu"
                    value={formData.name}
                    error={errors.name}
                    touched={touched.name}
                    onChange={(v) => handleChange("name", v)}
                    onBlur={() => handleBlur("name")}
                  />
                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={(v) => handleChange("email", v)}
                    onBlur={() => handleBlur("email")}
                  />
                </div>

                <FormField
                  label="Subject"
                  id="subject"
                  placeholder="Topik yang ingin dibahas"
                  value={formData.subject}
                  error={errors.subject}
                  touched={touched.subject}
                  onChange={(v) => handleChange("subject", v)}
                  onBlur={() => handleBlur("subject")}
                />

                <FormField
                  label="Pesan"
                  id="message"
                  placeholder="Ceritakan project atau ide kamu..."
                  value={formData.message}
                  error={errors.message}
                  touched={touched.message}
                  onChange={(v) => handleChange("message", v)}
                  onBlur={() => handleBlur("message")}
                  multiline
                  rows={5}
                />

                {/* Submit + Status */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="group w-full sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </Button>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Pesan berhasil terkirim!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

/* ================= FORM FIELD ================= */
interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  multiline?: boolean;
  rows?: number;
}

function FormField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  const showError = touched && error;

  const inputClasses = cn(
    "w-full rounded-xl border bg-background/50 px-4 py-3 text-sm",
    "transition-all duration-300",
    "placeholder:text-muted-foreground/60",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    showError
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
      : "border-border focus:border-accent-500/60 focus:ring-accent-500/20"
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-widest text-secondary"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={!!showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          className={cn(inputClasses, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={!!showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          className={inputClasses}
        />
      )}

      <AnimatePresence mode="wait">
        {showError && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-xs text-red-500"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}