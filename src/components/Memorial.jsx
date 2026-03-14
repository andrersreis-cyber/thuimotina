import memorialImg from '../assets/memorial.webp'

export default function Memorial() {
  const cards = [
    {
      title: 'Visitas Guiadas',
      description:
        'Conheça todo o processo de produção com nossos especialistas',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Degustação',
      description:
        'Prove nossas cachaças premiadas diretamente da fonte',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M8 22h8" />
          <path d="M12 11v11" />
          <path d="M20 2H4l2 9a6 6 0 0 0 12 0L20 2Z" />
        </svg>
      ),
    },
    {
      title: 'Loja Local',
      description:
        'Leve para casa garrafas exclusivas disponíveis apenas na fábrica',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="memorial"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-surface) 50%, var(--color-bg) 100%)`,
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={memorialImg}
          alt="Interior do memorial Thimotina"
          className="h-full w-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Window Frame */}
        <div
          className="rounded-3xl p-8 md:p-16"
          style={{
            border: '1px solid var(--color-primary)',
            backgroundColor: 'rgba(28, 25, 23, 0.6)',
          }}
        >
          {/* Header */}
          <div className="reveal mb-12 text-center">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.3em] mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-primary-light)',
              }}
            >
              Experiência
            </span>
            <h2
              className="mb-4 text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: 'var(--font-serif)',
                background: `linear-gradient(135deg, var(--color-primary-light), var(--color-primary))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Memorial e Cachaçaria
            </h2>
            <p
              className="mb-6 text-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text-muted)',
              }}
            >
              Conheça de perto nossa história centenária
            </p>
            <p
              className="reveal mx-auto max-w-3xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text-muted)',
              }}
            >
              Paulo Roberto Dias Soares inaugurou o Memorial e Cachaçaria Francisco
              Thimóteo Dias, um espaço para o acolhimento de turistas que tem interesse
              de conhecer e realizar um tour pela empresa e toda a sua infraestrutura de
              produção desde a matéria prima até o produto final acabado. A empresa criou
              o espaço visando também contribuir para a divulgação da cultura da cachaça
              e história da família Dias &amp; Soares.
            </p>
          </div>

          {/* Info Cards */}
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="reveal glass-card flex flex-col items-center rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    border: '2px solid var(--color-primary)',
                    color: 'var(--color-primary-light)',
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-bold"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-text)',
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal text-center">
            <a
              href="mailto:thimotina@thimotina.com.br"
              className="inline-block rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-bg)',
              }}
            >
              Agende sua Visita
            </a>
          </div>

          {/* Contact Info */}
          <div className="reveal mt-10 text-center">
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span style={{ color: 'var(--color-primary-light)' }}>
                  Telefone:
                </span>{' '}
                (27) 9 9702-2368
              </p>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span style={{ color: 'var(--color-primary-light)' }}>
                  E-mail:
                </span>{' '}
                thimotina@thimotina.com.br
              </p>
              <p
                className="mt-2 text-sm font-semibold tracking-wide uppercase"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-primary-light)',
                }}
              >
                Afonso Cláudio, Espírito Santo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
