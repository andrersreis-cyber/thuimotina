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
        'Leve para casa nossas cachaças artesanais, disponíveis também na loja online',
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
              Paulo Roberto inaugurou o Memorial e Cachaçaria Francisco
              Thimóteo Dias, um espaço para o acolhimento de turistas que tem interesse
              em conhecer e realizar um tour pela empresa e toda a sua infraestrutura em
              produção desde a matéria prima até o produto final acabado. A empresa criou
              o espaço visando também contribuir para a divulgação da cultura da cachaça
              e história da família.
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
              href="https://api.whatsapp.com/send?phone=5527997022368&text=Olá! Gostaria de agendar uma visita ao Memorial e Cachaçaria Thimotina."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-bg)',
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span style={{ color: 'var(--color-primary-light)' }}>
                  Horário:
                </span>{' '}
                Seg-Sex, 8h às 16h
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
