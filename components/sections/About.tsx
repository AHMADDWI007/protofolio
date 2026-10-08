import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { aboutCards, aboutContent, aboutStats } from "@/data/about";
import { personal } from "@/data/personal";

const highlights = [
  "Clean & maintainable code",
  "Fokus pada user experience",
  "Performa dan aksesibilitas",
  "Kolaborasi tim yang efektif",
];

export function About() {
  return (
    <section id="tentang" className="relative py-24 sm:py-32">
      <Container size="xl">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          align="left"
          className="max-w-3xl"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: Image */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-500/20 to-accent-2-500/20 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
                <Image
                  src={personal.avatar}
                  alt={`Foto ${personal.name}`}
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating badge: IPK */}
              <div className="absolute -top-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
                <p className="font-display text-3xl font-bold text-gradient">
                  {personal.education.gpa}
                </p>
                <p className="text-xs text-secondary">
                  IPK / {personal.education.gpaMax}
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
                <p className="font-display text-3xl font-bold text-gradient">
                  {personal.stats.yearsExperience}+
                </p>
                <p className="text-xs text-secondary">
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col gap-5">
                {aboutContent.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Highlights */}
            <FadeIn direction="left" delay={0.2}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="left" delay={0.3}>
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {aboutStats.map((stat) => {
                  // Deteksi kalau value bukan bilangan bulat → pakai 2 desimal
                  const decimals = Number.isInteger(stat.value) ? 0 : 2;

                  return (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <Counter
                        to={stat.value}
                        suffix={stat.suffix}
                        decimals={decimals}
                        className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                      />
                      <span className="text-xs text-secondary">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}