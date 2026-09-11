"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  MessageCircle,
} from "lucide-react";

/* ---------- Design tokens ----------
Base:      #FFFFFF / #FAFAF9 (off-white)
Ink:       #14171B
Muted:     #5B6470
Line:      #E6E4DF
Accent:    #1F3B57 (azul discreto / "bata clínica")
Display:   Fraunces
Body:      Inter
------------------------------------ */

const WHATSAPP = "https://wa.link/jefn18";

const IMG = {
  drCuadrado: "https://vende24siete.com/images/dr_cuadrado.jpg",
  logoWhite: "https://vende24siete.com/images/logo_doctor_white_png_.png",
  logoBlue: "https://vende24siete.com/images/logo_doctor_blue_png_.png",
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
  {
    img: IMG.p1,
    title: "Esguinces, fracturas y luxaciones",
    text: "Inmovilización, rehabilitación y cirugía cuando es necesaria, para una recuperación funcional completa.",
  },
  {
    img: IMG.p2,
    title: "Lesiones de ligamentos y tendones",
    text: "Incluye ligamento cruzado anterior y lesión del manguito rotador, con enfoque conservador o quirúrgico.",
  },
  {
    img: IMG.p3,
    title: "Artrosis de rodilla y cadera",
    text: "Manejo del desgaste articular con terapias que reducen el dolor y previenen mayor daño.",
  },
  {
    img: IMG.s5,
    title: "Cirugía de rodilla",
    text: "Procedimientos ortopédicos especializados para restaurar la función articular.",
  },
  {
    img: IMG.s3,
    title: "Infiltraciones",
    text: "Manejo farmacológico personalizado para controlar el dolor osteoarticular.",
  },
  {
    img: IMG.s1,
    title: "Desgaste de cartílago",
    text: "Diagnóstico y tratamiento temprano para preservar la articulación.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function DemoDrDiegoBuendia() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "Inicio",
    "Biografía",
    "Especialidades",
    "Procedimientos",
    "Contacto",
  ];

  return (
    <div className="w-full min-h-screen relative bg-white text-ink font-sans selection:bg-accent selection:text-white">
      
      {/* WhatsApp Flotante (Glassmorphism) */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3 sm:px-5 sm:py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-2xl hover:bg-white/90 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white group-hover:scale-105 transition-transform duration-300">
          <MessageCircle size={20} />
          {/* Ping animation suave */}
          <span className="absolute inset-0 rounded-full bg-accent opacity-40 animate-ping"></span>
        </div>
        <span className="hidden sm:block text-accent font-medium text-[14px]">
          Atención rápida
        </span>
      </a>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4">
        <nav
          className="w-full max-w-6xl flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500 border"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.85)"
              : "rgba(255,255,255,0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: scrolled ? "#E6E4DF" : "rgba(255,255,255,0.2)",
            boxShadow: scrolled
              ? "0 8px 30px -12px rgba(20,23,27,0.12)"
              : "none",
          }}
        >
          <div className="flex items-center gap-3">
             <img src={IMG.logoBlue} alt="Logo" className={`h-8 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 hidden sm:block'}`} />
             {!scrolled && (
                <span className="font-display text-[18px] text-white tracking-wide drop-shadow-md">
                  Dr. Diego Buendía
                </span>
             )}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`text-[13px] tracking-wide uppercase hover:opacity-60 transition-opacity font-medium ${scrolled ? 'text-ink' : 'text-white drop-shadow-md'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1 rounded-full px-6 py-2.5 text-[13px] font-medium text-white bg-accent hover:bg-accent/90 transition-colors"
          >
            Agendar cita
          </a>

          <button
            className={`lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden absolute top-20 left-4 right-4 rounded-3xl p-6 flex flex-col gap-4 z-50 bg-white/95 backdrop-blur-xl border border-line shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {item}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-full py-3.5 text-sm font-medium text-white bg-accent"
            >
              Agendar cita
            </a>
          </div>
        )}
      </header>

      {/* HERO: Textos Originales + Video */}
      <section
        id="inicio"
        className="relative w-full h-screen min-h-[640px] flex items-end overflow-hidden bg-ink"
      >
        {/* Video Background (Iframe CSS Trick) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-105"
            src="https://www.youtube.com/embed/lUYHpzxYC5s?autoplay=1&mute=1&loop=1&playlist=lUYHpzxYC5s&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media"
            title="Video Quirófano"
          />
        </div>
        
        {/* Gradients para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <Reveal>
            <p className="text-[12px] sm:text-[13px] uppercase mb-5 text-white/80 tracking-[0.18em] font-medium">
              Ortopedia · Traumatología · Cirugía de Columna — Coyoacán, CDMX
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="text-white leading-[1.02] font-display font-normal"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: 900 }}
            >
              Devolver movilidad,
              <br />
              con precisión y calma.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 font-light">
              Más de 20 años de experiencia en el tratamiento integral de
              lesiones y enfermedades del sistema musculoesquelético, con
              enfoque en cirugía de columna.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-accent hover:bg-accent/90 transition-colors"
              >
                Agendar cita <ArrowUpRight size={16} />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/35 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Ver especialidades
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {[
                "Atención especializada",
                "Cirugía de columna",
                "Neurocirugía",
                "Tecnología avanzada",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] rounded-full bg-white" />
                  <span className="text-[13px] text-white/85 font-normal">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN BIOGRAFÍA (NUEVA) */}
      <section id="biografía" className="py-24 sm:py-36 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
              <img
                src={IMG.drCuadrado}
                alt="Dr. Diego Buendía en consulta"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.2em] font-semibold">
                Sobre el Doctor
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-tight text-ink">
                Mi vocación es mejorar tu calidad de vida.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-muted font-light">
                <p>
                  En mi práctica médica, me especializo en el diagnóstico, tratamiento y prevención de una amplia gama de lesiones y trastornos del sistema musculoesquelético. 
                </p>
                <p>
                  Mi experiencia abarca desde la atención de problemas comunes, como fracturas y esguinces, hasta el manejo quirúrgico y conservador de condiciones complejas, incluyendo lesiones deportivas y enfermedades degenerativas (artrosis, artritis).
                </p>
                <p className="text-ink font-medium">
                  Mi compromiso es ofrecerte un plan médico trazado a la medida de tus necesidades, priorizando siempre tu bienestar, seguridad y pronta recuperación.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
               <img src={IMG.logoBlue} alt="Firma Dr. Buendía" className="h-12 w-auto mt-10 opacity-80" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section
        id="especialidades"
        className="relative py-24 sm:py-32 px-6 sm:px-8 bg-off"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <Reveal>
                <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.18em] font-semibold">
                  Áreas de atención
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display font-normal max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] leading-tight">
                  Especialidades <br/> Médicas y Quirúrgicas
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
               <p className="max-w-md text-muted font-light text-[15px]">
                 Tecnología de vanguardia y técnicas mínimamente invasivas para asegurar los mejores resultados funcionales.
               </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialidades.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="group rounded-[2rem] overflow-hidden h-full flex flex-col bg-white border border-line hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center justify-center rounded-full w-12 h-12 bg-white/95 shadow-sm">
                      <e.icon size={22} className="text-accent" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-[18px] mb-3 font-display font-medium text-ink">
                      {e.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-muted font-light">
                      {e.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTOS */}
      <section id="procedimientos" className="py-24 sm:py-32 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.18em] font-semibold text-center">
              Tratamientos Frecuentes
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.6vw,3rem)] text-center max-w-2xl mx-auto mb-16">
              Procedimientos que devuelven calidad de vida
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {procedimientos.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-[17px] mb-2 font-display font-medium text-ink group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted font-light">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-40 px-6 sm:px-8 overflow-hidden bg-accent">
        <div className="absolute inset-0">
          <img
            src={IMG.cta}
            alt="Fondo Quirófano"
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-normal text-white text-[clamp(2rem,4.5vw,3.8rem)] leading-tight">
              Da el primer paso hacia una vida sin dolor.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 text-[16px] sm:text-[18px] text-white/80 font-light max-w-2xl mx-auto">
              Agenda tu consulta hoy mismo y diseñemos juntos el plan de tratamiento adecuado para ti.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-10 rounded-full px-10 py-5 text-[15px] font-medium text-accent bg-white hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Agendar cita por WhatsApp <ChevronRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="px-6 sm:px-8 pt-20 pb-10 bg-ink text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img src={IMG.logoWhite} alt="Dr. Diego Buendía Logo" className="h-12 w-auto mb-6" />
            <p className="text-[14px] text-white/60 font-light leading-relaxed mb-8">
              Especialista en Ortopedia, Traumatología y Cirugía de Columna. Devolviendo movilidad y calidad de vida con un enfoque humano y tecnología de punta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[12px] uppercase tracking-[0.15em] text-white/40 mb-6 font-semibold">Navegación</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70 font-light">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#biografía" className="hover:text-white transition-colors">Sobre el Doctor</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#procedimientos" className="hover:text-white transition-colors">Procedimientos</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h4 className="text-[12px] uppercase tracking-[0.15em] text-white/40 mb-6 font-semibold">Contacto y Citas</h4>
            <div className="flex flex-col gap-5 text-[14px] text-white/70 font-light">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-white/40 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Consultorio</p>
                  <p>55 5199 6805</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity size={18} className="text-white/40 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Urgencias</p>
                  <p>55 1048 9471</p>
                </div>
              </div>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 inline-block text-center rounded-full py-3 px-6 text-sm font-medium text-ink bg-white hover:bg-white/90 transition-colors w-fit"
              >
                Escribir mensaje
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white/40 font-light">
          <p>© {new Date().getFullYear()} Dr. Diego Buendía. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}