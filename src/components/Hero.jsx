import heroImg from '../assets/hero-lineup.webp'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Linha completa de cachaças Thimotina"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
        {/* Warm ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(161,98,7,0.12) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-24 text-center">
        {/* Badge */}
        <span className="animate-fade-in-up delay-100 opacity-0 inline-block rounded-full border border-primary px-6 py-2 text-xs font-medium uppercase tracking-widest text-primary-light">
          DESDE 1915 &middot; AFONSO CL&Aacute;UDIO, ES
        </span>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-200 opacity-0 font-serif text-7xl font-bold leading-none md:text-9xl text-gradient-gold">
          THIMOTINA
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-300 opacity-0 font-serif text-2xl italic text-text-muted md:text-4xl">
          Cacha&ccedil;a Artesanal Capixaba
        </p>

        {/* Paragraph */}
        <p className="animate-fade-in-up delay-400 opacity-0 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
          Quatro gera&ccedil;&otilde;es preservando a arte da destila&ccedil;&atilde;o artesanal.
          Mais de um s&eacute;culo de tradi&ccedil;&atilde;o em cada gota.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 opacity-0 mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#historia"
            className="rounded-full border border-primary px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary-light transition-all duration-300 hover:bg-primary hover:text-bg cursor-pointer"
          >
            Conhe&ccedil;a Nossa Hist&oacute;ria
          </a>
          <a
            href="/loja"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wider text-bg transition-all duration-300 hover:bg-primary-light cursor-pointer"
          >
            Visite Nossa Loja
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up delay-600 opacity-0 mt-12 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-text-subtle">
            Role para descobrir
          </span>
          <svg
            className="h-5 w-5 animate-bounce text-primary-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Selo 100% Capixaba ── */}
      <span className="absolute bottom-6 right-6 z-10 rounded-full border border-border px-4 py-1.5 text-[10px] font-medium uppercase tracking-wider text-text-subtle opacity-60">
        100% Capixaba
      </span>

      {/* ── Bottom divider ── */}
      <div className="divider-gold absolute bottom-0 left-0 w-full" />
    </section>
  );
}
