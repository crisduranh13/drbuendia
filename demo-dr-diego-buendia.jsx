import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Stethoscope,
  Cpu,
  ShieldCheck,
  Activity,
  Bone,
  GraduationCap,
  Award,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

/* ---------- Design tokens ----------
Base:      #FFFFFF / #FAFAF9 (off-white)
Ink:       #14171B
Muted:     #5B6470
Line:      #E6E4DF
Accent:    #1F3B57 (azul discreto / "bata clínica")
Accent 2:  #2C557C (hover)
Display:   Fraunces (serif editorial, cálido pero clínico)
Body:      Inter
------------------------------------ */

const WHATSAPP = "https://wa.link/jefn18";

const IMG = {
  hero: "https://images.unsplash.com/photo-1685997180450-242a65624238?auto=format&fit=crop&w=2400&q=80",
  doctor: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=80",
  s1: "https://images.unsplash.com/photo-1539815208687-a0f05e15d601?auto=format&fit=crop&w=1200&q=80",
  s2: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80",
  s3: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
  s4: "https://images.unsplash.com/photo-1579154491781-5e199df316aa?auto=format&fit=crop&w=1200&q=80",
  s5: "https://images.unsplash.com/photo-1514416309827-bfb0cf433a2d?auto=format&fit=crop&w=1200&q=80",
  s6: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80",
  p1: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1000&q=80",
  p2: "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?auto=format&fit=crop&w=1000&q=80",
  p3: "https://images.unsplash.com/photo-1685997180450-242a65624238?auto=format&fit=crop&w=1000&q=80",
  cta: "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?auto=format&fit=crop&w=2000&q=80",
};

const especialidades = [
  {
    icon: Bone,
    img: IMG.s1,
    title: "Cirugía de Columna Vertebral",
    text: "Cirugía avanzada de columna para aliviar el dolor y devolver la movilidad en casos severos.",
  },
  {
    icon: Activity,
    img: IMG.s2,
    title: "Enfermedades de la Columna",
    text: "Diagnóstico y tratamiento de hernias discales, escoliosis y otras condiciones degenerativas.",
  },
  {
    icon: Cpu,
    img: IMG.s3,
    title: "Cirugía Ortopédica Robótica",
    text: "Precisión asistida por robótica en procedimientos ortopédicos de alta complejidad.",
  },
  {
    icon: ShieldCheck,
    img: IMG.s4,
    title: "Colocación de Prótesis",
    text: "Prótesis de cadera, rodilla y otras articulaciones para restaurar función y calidad de vida.",
  },
  {
    icon: Stethoscope,
    img: IMG.s5,
    title: "Cirugía Artroscópica",
    text: "Procedimientos mínimamente invasivos con recuperación más rápida y segura.",
  },
  {
    icon: Activity,
    img: IMG.s6,
    title: "Lesiones Deportivas",
    text: "Terapias especializadas enfocadas en la recuperación rápida del deportista.",
  },
];

const procedimientos = [
  { img: IMG.p1, title: "Esguinces, fracturas y luxaciones", text: "Inmovilización, rehabilitación y cirugía cuando es necesaria, para una recuperación funcional completa." },
  { img: IMG.p2, title: "Lesiones de ligamentos y tendones", text: "Incluye ligamento cruzado anterior y lesión del manguito rotador, con enfoque conservador o quirúrgico." },
  { img: IMG.p3, title: "Artrosis de rodilla y cadera", text: "Manejo del desgaste articular con terapias que reducen el dolor y previenen mayor daño." },
  { img: IMG.s5, title: "Cirugía de rodilla", text: "Procedimientos ortopédicos especializados para restaurar la función articular." },
  { img: IMG.s3, title: "Infiltraciones", text: "Manejo farmacológico personalizado para controlar el dolor osteoarticular." },
  { img: IMG.s1, title: "Desgaste de cartílago", text: "Diagnóstico y tratamiento temprano para preservar la articulación." },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function DrDiegoBuendiaDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const T = {
    ink: "#14171B",
    muted: "#5B6470",
    line: "#E6E4DF",
    off: "#FAFAF9",
    accent: "#1F3B57",
    accent2: "#2C557C",
  };

  const display = { fontFamily: "'Fraunces', serif" };
  const body = { fontFamily: "'Inter', sans-serif" };

  const navItems = ["Inicio", "Especialidades", "Procedimientos", "Sobre el Doctor", "Blog", "Contacto"];

  return (
    <div style={{ ...body, background: "#FFFFFF", color: T.ink }} className="w-full min-h-screen relative">
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.08) translateY(0px); }
          100% { transform: scale(1.16) translateY(-18px); }
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .spine-dot { transition: background 0.4s ease, transform 0.4s ease; }
        .card-hover:hover .card-img { transform: scale(1.06); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -24px rgba(20,23,27,0.18); }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Signature spine guide — desktop only */}
      <div
        aria-hidden="true"
        className="hidden lg:flex fixed left-6 top-0 bottom-0 flex-col items-center justify-center z-10 pointer-events-none"
      >
        <div style={{ width: 1, height: "40vh", background: T.line }} />
        <div className="flex flex-col gap-3 py-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="spine-dot"
              style={{
                width: 5,
                height: 5,
                borderRadius: 999,
                background: i === 3 ? T.accent : T.line,
              }}
            />
          ))}
        </div>
        <div style={{ width: 1, height: "40vh", background: T.line }} />
      </div>

      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4"
      >
        <nav
          className="w-full max-w-6xl flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500"
          style={{
            background: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${scrolled ? T.line : "rgba(255,255,255,0.4)"}`,
            boxShadow: scrolled ? "0 8px 30px -12px rgba(20,23,27,0.12)" : "none",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 34, height: 34, background: T.accent }}
            >
              <span style={{ ...display, color: "#fff", fontSize: 15 }}>DB</span>
            </div>
            <span style={{ ...display, fontSize: 16, letterSpacing: 0.2 }}>Dr. Diego Buendía</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Blog" ? "#" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[13px] tracking-wide uppercase hover:opacity-60 transition-opacity"
                style={{ color: T.ink, fontWeight: 500, letterSpacing: "0.06em" }}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1 rounded-full px-5 py-2 text-[13px] font-medium text-white transition-colors"
            style={{ background: T.accent }}
          >
            Agendar cita
          </a>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div
            className="lg:hidden absolute top-20 left-4 right-4 rounded-3xl p-6 flex flex-col gap-4 z-50"
            style={{ background: "#fff", border: `1px solid ${T.line}`, boxShadow: "0 20px 50px -20px rgba(0,0,0,0.2)" }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Blog" ? "#" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
                style={{ color: T.ink }}
              >
                {item}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-center rounded-full py-3 text-sm font-medium text-white" style={{ background: T.accent }}>
              Agendar cita
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative w-full h-screen min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ animation: "kenburns 20s ease-in-out infinite alternate" }}>
          <img src={IMG.hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.35) 40%, rgba(10,14,20,0.85) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <Reveal>
            <p
              className="text-[12px] sm:text-[13px] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.18em", fontWeight: 500 }}
            >
              Ortopedia · Traumatología · Cirugía de Columna — Coyoacán, CDMX
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="text-white leading-[1.02]"
              style={{ ...display, fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 400, maxWidth: 900 }}
            >
              Devolver movilidad,<br />con precisión y calma.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p
              className="mt-6 max-w-xl text-base sm:text-lg"
              style={{ color: "rgba(255,255,255,0.82)", fontWeight: 300 }}
            >
              Más de 20 años de experiencia en el tratamiento integral de lesiones y enfermedades del
              sistema musculoesquelético, con enfoque en cirugía de columna.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
                style={{ background: T.accent }}
              >
                Agendar cita <ArrowUpRight size={16} />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)", backdropFilter: "blur(6px)" }}
              >
                Ver especialidades
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {["Atención especializada", "Cirugía de columna", "Neurocirugía", "Tecnología avanzada"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div style={{ width: 5, height: 5, borderRadius: 999, background: "#fff" }} />
                  <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="relative py-24 sm:py-32 px-6 sm:px-8" style={{ background: T.off }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[12px] uppercase mb-4" style={{ color: T.accent, letterSpacing: "0.18em", fontWeight: 600 }}>
              Áreas de atención
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{ ...display, fontSize: "clamp(1.9rem, 3.6vw, 3rem)", fontWeight: 400, maxWidth: 720 }}>
              Me especializo en el manejo de:
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialidades.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div
                  className="card-hover rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500"
                  style={{ background: "#fff", border: `1px solid ${T.line}` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={e.img} alt="" className="card-img w-full h-full object-cover transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,23,27,0) 50%, rgba(20,23,27,0.35) 100%)" }} />
                    <div
                      className="absolute bottom-4 left-4 flex items-center justify-center rounded-full"
                      style={{ width: 38, height: 38, background: "rgba(255,255,255,0.92)" }}
                    >
                      <e.icon size={17} color={T.accent} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[16px] mb-2" style={{ ...display, fontWeight: 500 }}>{e.title}</h3>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: T.muted, fontWeight: 300 }}>{e.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTOS */}
      <section id="procedimientos" className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[12px] uppercase mb-4" style={{ color: T.accent, letterSpacing: "0.18em", fontWeight: 600 }}>
              Tratamientos frecuentes
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{ ...display, fontSize: "clamp(1.9rem, 3.6vw, 3rem)", fontWeight: 400, maxWidth: 720 }}>
              Procedimientos que devuelven calidad de vida
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedimientos.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card-hover rounded-3xl overflow-hidden transition-all duration-500" style={{ border: `1px solid ${T.line}` }}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.img} alt="" className="card-img w-full h-full object-cover transition-transform duration-700" />
                  </div>
                  <div className="p-6" style={{ background: "#fff" }}>
                    <h3 className="text-[15.5px] mb-2" style={{ ...display, fontWeight: 500 }}>{p.title}</h3>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: T.muted, fontWeight: 300 }}>{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE EL DOCTOR */}
      <section id="sobre-el-doctor" className="py-24 sm:py-32 px-6 sm:px-8" style={{ background: T.off }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={IMG.doctor} alt="Dr. Diego Buendía" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[12px] uppercase mb-4" style={{ color: T.accent, letterSpacing: "0.18em", fontWeight: 600 }}>
                ¿Por qué elegirme?
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 style={{ ...display, fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 400 }}>
                Formación sólida. Atención personalizada.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: T.muted, fontWeight: 300, maxWidth: 480 }}>
                Mi práctica está respaldada por una formación académica sólida en instituciones de
                referencia, y por el compromiso diario de mantenerme informado sobre los últimos
                avances en medicina ortopédica.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { icon: GraduationCap, text: "Médico Cirujano — UNAM" },
                  { icon: Award, text: "Especialidad en Ortopedia — UNAM" },
                  { icon: Bone, text: "Alta especialidad en Cirugía de Columna Vertebral — UNAM" },
                  { icon: Stethoscope, text: "Maestría en Ciencias de la Salud, enfoque en Bioética" },
                  { icon: GraduationCap, text: "Maestría en Administración de Instituciones de Salud — IEU" },
                ].map((c) => (
                  <div key={c.text} className="flex items-start gap-3">
                    <c.icon size={17} color={T.accent} className="mt-0.5 flex-shrink-0" />
                    <span className="text-[14px]" style={{ color: T.ink, fontWeight: 400 }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-10 flex gap-10 pt-8" style={{ borderTop: `1px solid ${T.line}` }}>
                {[
                  { n: "20+", l: "años de experiencia" },
                  { n: "UNAM", l: "formación académica" },
                  { n: "1:1", l: "atención especializada" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ ...display, fontSize: 26, color: T.accent }}>{s.n}</div>
                    <div className="text-[12px] mt-1" style={{ color: T.muted }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-40 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.cta} alt="" className="w-full h-full object-cover" style={{ opacity: 0.14 }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 400, color: T.ink }}>
              Agenda tu consulta y descubre cómo mejorar tu movilidad
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-[15px]" style={{ color: T.muted, fontWeight: 300 }}>
              Tratamientos avanzados y personalizados, pensados para tu calidad de vida.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-10 rounded-full px-9 py-4 text-sm font-medium text-white"
              style={{ background: T.accent }}
            >
              ¡Agenda aquí! <ChevronRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="px-6 sm:px-8 py-16" style={{ background: T.ink, color: "#fff" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <span style={{ ...display, fontSize: 20 }}>Dr. Diego Buendía</span>
            <p className="mt-3 text-[13px] max-w-xs" style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
              Especialista en Ortopedia, Traumatología y Cirugía de Columna. Coyoacán, Ciudad de México.
            </p>
            <div className="flex gap-4 mt-6">
              <Facebook size={17} style={{ color: "rgba(255,255,255,0.6)" }} />
              <Instagram size={17} style={{ color: "rgba(255,255,255,0.6)" }} />
              <Linkedin size={17} style={{ color: "rgba(255,255,255,0.6)" }} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[13px]" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>
            <div>
              <p className="uppercase text-[11px] mb-3" style={{ letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)" }}>Contacto</p>
              <div className="flex items-center gap-2 mb-2"><Phone size={13} /> 55 5199 6805</div>
              <p style={{ color: "rgba(255,255,255,0.45)" }}>Urgencias: 55 1048 9471</p>
            </div>
            <div>
              <p className="uppercase text-[11px] mb-3" style={{ letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)" }}>Navegación</p>
              {["Inicio", "Especialidades", "Sobre el Doctor"].map((n) => (
                <p key={n} className="mb-2">{n}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11.5px]" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}>
          <span>© 2026 Dr. Diego Buendía. Demo visual — no representa el sitio final.</span>
          <span>Aviso de privacidad</span>
        </div>
      </footer>
    </div>
  );
}
