import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  X,
  ShieldCheck,
  Heart,
  Camera,
  Receipt,
  Stethoscope,
  Pill,
  ShoppingBasket,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Users,
} from "lucide-react";
import { I18nContext, translations, type Lang, useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-elderly.jpg";
import srebrenikImg from "@/assets/srebrenik.jpg";
import visitImg from "@/assets/visit.jpg";
import handsImg from "@/assets/hands.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMANET — Kad vi niste tu, mi jesmo. | Podrška porodicama u dijaspori" },
      { name: "description", content: "AMANET pruža premium concierge podršku porodicama iz dijaspore koje imaju roditelje u Srebreniku i okolini — redovne posjete, kupovina lijekova, plaćanje računa, pratnja doktoru." },
      { property: "og:title", content: "AMANET — Kad vi niste tu, mi jesmo." },
      { property: "og:description", content: "Podrška porodicama iz dijaspore koje imaju roditelje u Srebreniku i okolini." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

const WA_NUMBER = "387671219921";
const WA_LINK = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const EMAIL = "amanetsrebrenik@gmail.com";


function IndexPage() {
  const [lang, setLang] = useState<Lang>("bs");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("amanet-lang") as Lang | null)) || null;
    if (saved === "bs" || saved === "de") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
    if (typeof window !== "undefined") localStorage.setItem("amanet-lang", lang);
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <VisitExplained />
          <Money />
          <Packages />
          <Capacity />
          <FAQ />
          <LeadForm />

          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </I18nContext.Provider>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how" className="hover:text-primary transition">{t.nav.how}</a>
          <a href="#packages" className="hover:text-primary transition">{t.nav.packages}</a>
          <a href="#faq" className="hover:text-primary transition">{t.nav.faq}</a>
          <a href="#contact" className="hover:text-primary transition">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href="#form"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-95 transition shadow-soft"
          >
            {t.nav.cta}
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            <div className="w-5 h-0.5 bg-foreground mb-1"></div>
            <div className="w-5 h-0.5 bg-foreground mb-1"></div>
            <div className="w-5 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-4 text-sm">
            <a href="#how" onClick={() => setOpen(false)}>{t.nav.how}</a>
            <a href="#packages" onClick={() => setOpen(false)}>{t.nav.packages}</a>
            <a href="#faq" onClick={() => setOpen(false)}>{t.nav.faq}</a>
            <a href="#contact" onClick={() => setOpen(false)}>{t.nav.contact}</a>
            <a href="#form" onClick={() => setOpen(false)} className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-center">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import logo from "@/assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="AMANET"
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        className="h-10 w-10 rounded-md object-contain bg-cream"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/favicon.ico";
        }}
      />

      <div className="leading-none">
        <div className="font-display text-xl tracking-wide text-primary">
          AMANET
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Srebrenik
        </div>
      </div>
    </div>
  );
}


function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium">
      {(["bs", "de"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 rounded-full transition ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "bs" ? "BOS" : "DE"}
        </button>
      ))}
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, var(--color-gold) 0px, transparent 1px), radial-gradient(circle at 70% 80%, var(--color-gold) 0px, transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-primary-foreground animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold-soft mb-6">
            <Sparkles className="w-3 h-3" /> {t.hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            {t.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/85 max-w-2xl leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={WA_LINK(t.wa.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-primary px-6 py-3.5 text-sm font-semibold shadow-gold hover:translate-y-[-1px] transition"
            >
              <MessageCircle className="w-4 h-4" /> {t.hero.cta1}
            </a>
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              {t.hero.cta2}
            </a>
          </div>

          <p className="text-xs text-primary-foreground/70 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> {t.hero.note}
          </p>
          <div className="mt-10 pt-6 border-t border-white/10 max-w-md">
            <p className="font-display italic text-gold-soft text-lg">„{t.hero.slogan}“</p>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant ring-1 ring-gold/20">
            <img src={heroImg} alt="" className="w-full h-full object-cover" width={1536} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-xl p-4 shadow-elegant w-56 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">100%</div>
                <div className="text-sm font-medium">Transparentno</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PROBLEM --------------------------- */
function Problem() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <SectionEyebrow>01</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">{t.problem.title}</h2>
        <div className="divider-gold w-24 mx-auto my-8" />
        <div className="grid sm:grid-cols-2 gap-5 text-left mt-10">
          {t.problem.points.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-soft border border-border/60 flex gap-4">
              <div className="h-9 w-9 shrink-0 rounded-full bg-secondary flex items-center justify-center text-primary font-display">
                {i + 1}
              </div>
              <p className="text-foreground/85 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- SOLUTION -------------------------- */
function Solution() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={visitImg} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-44 h-44 rounded-2xl overflow-hidden ring-4 ring-background shadow-elegant">
            <img src={handsImg} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <SectionEyebrow>02</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{t.solution.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t.solution.kicker}</h3>
              <ul className="space-y-2.5">
                {t.solution.notList.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-foreground/70">
                    <X className="w-4 h-4 text-destructive shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{t.solution.areTitle}</h3>
              <ul className="space-y-2.5">
                {t.solution.areList.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-foreground">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- HOW IT WORKS --------------------------- */
function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>03</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{t.how.title}</h2>
          <div className="divider-gold w-24 mx-auto my-8" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {t.how.steps.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 relative overflow-hidden">
              <div className="absolute top-4 right-5 font-display text-6xl text-gold/15">{i + 1}</div>
              <h3 className="font-display text-xl text-primary mb-2">{s.t}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- VISIT EXPLAINED --------------------------- */
function VisitExplained() {
  const { t } = useI18n();
  const icons = [ShoppingBasket, Pill, Receipt, MessageCircle, Heart, Camera];
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <SectionEyebrow>04</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{t.visit.title}</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">{t.visit.lead}</p>
        </div>
        <div className="mt-12 bg-cream border border-border rounded-3xl p-8 lg:p-12 shadow-soft">
          <h3 className="font-display text-xl text-primary mb-6 text-center">{t.visit.includesTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.visit.includes.map((x, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={x} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border/60">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{x}</span>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-8 text-sm italic text-muted-foreground">{t.visit.foot}</p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- MONEY --------------------------- */
function Money() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(45deg, var(--color-gold) 25%, transparent 25%, transparent 50%, var(--color-gold) 50%, var(--color-gold) 75%, transparent 75%)`,
        backgroundSize: "8px 8px",
      }} />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionEyebrow tone="dark">05</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">{t.money.title}</h2>
          <p className="text-primary-foreground/85 leading-relaxed mb-8">{t.money.lead}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold-soft mb-3">{t.money.forTitle}</h3>
              <ul className="space-y-2 text-sm">
                {t.money.for.map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold-soft mb-3">{t.money.afterTitle}</h3>
              <ul className="space-y-2 text-sm">
                {t.money.after.map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-gold/30 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gold-gradient text-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="font-display text-xl">{t.money.footer}</p>
          </div>
          <ul className="space-y-4">
            {t.money.bullets.map((x) => (
              <li key={x} className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PACKAGES --------------------------- */
function Packages() {
  const { t } = useI18n();
  return (
    <section id="packages" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>06</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{t.packages.title}</h2>
          <div className="divider-gold w-24 mx-auto my-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {t.packages.items.map((p, i) => {
            const featured = i === 1;
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border ${
                  featured
                    ? "bg-primary text-primary-foreground border-gold shadow-elegant lg:scale-[1.03]"
                    : "bg-card text-card-foreground border-border shadow-soft"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-primary text-[11px] uppercase tracking-[0.18em] font-semibold px-4 py-1 rounded-full shadow-gold">
                    {t.packages.popular}
                  </div>
                )}
                <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mt-4 mb-2">
                  <span className="font-display text-5xl">{p.price}</span>
                  <span className={`text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.packages.monthly}</span>
                </div>
                <p className={`text-sm italic mt-2 mb-6 ${featured ? "text-gold-soft" : "text-muted-foreground"}`}>{p.for}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-gold" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#form"
                  className={`block text-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    featured
                      ? "bg-gold-gradient text-primary hover:opacity-95"
                      : "bg-primary text-primary-foreground hover:opacity-95"
                  }`}
                >
                  {t.packages.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CAPACITY --------------------------- */
function Capacity() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionEyebrow>07</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">{t.capacity.title}</h2>
          <p className="text-foreground/80 leading-relaxed">{t.capacity.lead}</p>
        </div>
        <div className="bg-card rounded-3xl p-8 border border-gold/30 shadow-soft text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            <Users className="w-4 h-4" /> {t.capacity.counter}
          </div>
          <div className="font-display text-7xl text-primary">
            8<span className="text-gold">/</span><span className="text-muted-foreground">10</span>
          </div>
          <div className="mt-6 h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-[80%] bg-gold-gradient" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */
function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <SectionEyebrow>08</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{t.faq.title}</h2>
          <div className="divider-gold w-24 mx-auto my-8" />
        </div>
        <div className="space-y-3">
          {t.faq.items.map((q, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              >
                <span className="font-medium">{q.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-primary transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-foreground/75 leading-relaxed">{q.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




/* --------------------------- LEAD FORM --------------------------- */
function LeadForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const subject = `AMANET upit — ${fd.get("name") ?? ""}`;
    const body = Array.from(fd.entries())
      .filter(([k]) => k !== "gdpr")
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    // Open mailto as fallback delivery
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (typeof window !== "undefined") window.location.href = mailto;
    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
    }, 400);
  };

  const f = t.form.fields;

  return (
    <section id="form" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center mb-10">
          <SectionEyebrow>09</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{t.form.title}</h2>
          <p className="text-muted-foreground mt-3">{t.form.subtitle}</p>
        </div>

        {sent ? (
          <div className="bg-card border border-gold/40 rounded-3xl p-10 text-center shadow-soft">
            <div className="h-14 w-14 rounded-full bg-gold-gradient text-primary mx-auto flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>
            <p className="font-display text-xl text-primary">{f.success}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-soft grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label={f.name} required />
              <Field name="email" label={f.email} type="email" required />
              <Field name="phone" label={f.phone} required />
              <Field name="country" label={f.country} required />
              <Field name="city" label={f.city} required />
              <Field name="count" label={f.count} type="number" min={1} max={10} defaultValue={1} required />
            </div>
            <Field name="type" label={f.type} />
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-foreground/80">{f.desc}</label>
              <textarea
                name="desc"
                rows={4}
                required
                maxLength={1000}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-foreground/80">{f.call}</label>
                <select
                  name="call"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  defaultValue="yes"
                >
                  <option value="yes">{f.yes}</option>
                  <option value="no">{f.no}</option>
                </select>
              </div>
              <Field name="time" label={f.time} placeholder={lang === "bs" ? "npr. radnim danom 18-20h" : "z.B. werktags 18-20 Uhr"} />
            </div>
            <label className="flex items-start gap-3 text-xs text-foreground/75 mt-2">
              <input type="checkbox" name="gdpr" required className="mt-0.5 accent-[var(--color-primary)]" />
              <span>{f.gdpr}</span>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition disabled:opacity-60"
            >
              {f.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  defaultValue,
  min,
  max,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  min?: number;
  max?: number;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-xs font-medium text-foreground/80">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        min={min}
        max={max}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
    </div>
  );
}

/* --------------------------- CONTACT --------------------------- */
function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <SectionEyebrow>10</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-3">{t.contact.title}</h2>
        <p className="text-muted-foreground mb-10">{t.contact.primary}</p>
        <div className="grid sm:grid-cols-3 gap-5">
          <ContactCard icon={<Mail className="w-5 h-5" />} label={t.contact.email} value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactCard icon={<Phone className="w-5 h-5" />} label={t.contact.whatsapp} value="+387 67 121 9921" href={WA_LINK(t.wa.msg)} />
          <ContactCard icon={<MapPin className="w-5 h-5" />} label={t.contact.location} value={t.contact.locationVal} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition h-full">
      <div className="h-11 w-11 rounded-full bg-secondary text-primary flex items-center justify-center mx-auto mb-4">{icon}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</div>
      <div className="font-medium break-all">{value}</div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}

/* --------------------------- FOOTER --------------------------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="text-sm text-primary-foreground/75 mt-4 max-w-xs">{t.footer.tagline}</p>
          <p className="text-sm text-primary-foreground/60 mt-1">{t.footer.area}</p>
        </div>
        <div className="text-sm space-y-2">
          <h4 className="font-display text-lg text-gold-soft mb-3">{t.contact.title}</h4>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold-soft"><Mail className="w-4 h-4" />{EMAIL}</a>
          <a href={WA_LINK(t.wa.msg)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold-soft"><Phone className="w-4 h-4" />+387 67 121 9921</a>
          <div className="flex items-center gap-2 text-primary-foreground/80"><MapPin className="w-4 h-4" />{t.contact.locationVal}</div>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-lg text-gold-soft mb-3">Navigacija</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><a href="#top" className="hover:text-gold-soft">{t.footer.links.home}</a></li>
            <li><a href="#how" className="hover:text-gold-soft">{t.footer.links.how}</a></li>
            <li><a href="#packages" className="hover:text-gold-soft">{t.footer.links.packages}</a></li>
            <li><a href="#contact" className="hover:text-gold-soft">{t.footer.links.contact}</a></li>
            <li><a href="#" className="hover:text-gold-soft">{t.footer.links.privacy}</a></li>
            <li><a href="#" className="hover:text-gold-soft">{t.footer.links.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© 2026 AMANET. {t.footer.rights}</span>
          <span className="italic text-gold-soft">„{t.hero.slogan}“</span>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- WHATSAPP FAB --------------------------- */
function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href={WA_LINK(t.wa.msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-105 transition"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden>
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.69 4.61 1.876 6.49L4 29l7.74-1.83A12.92 12.92 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3Zm0 21.6a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-4.59 1.08 1.1-4.47-.23-.36A9.6 9.6 0 1 1 16 24.6Zm5.27-7.18c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36s-1 .98-1 2.39c0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.09 4.9 4.34.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
    </a>
  );
}

/* --------------------------- HELPERS --------------------------- */
function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] mb-4 ${
      tone === "dark" ? "text-gold-soft" : "text-muted-foreground"
    }`}>
      <span className="h-px w-8 bg-gold/60" />
      <span>{children}</span>
    </div>
  );
}
