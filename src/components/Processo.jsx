import processoImg from '../assets/processo.webp'

export default function Processo() {
  const steps = [
    {
      number: '01',
      title: 'Colheita',
      description:
        'Cana-de-açúcar selecionada e fresca, cultivada nas terras férteis de Afonso Cláudio.',
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
          <path d="M12 22V2" />
          <path d="M9 5c0-1 1-2 3-2s3 1 3 2" />
          <path d="M7 9c0-1.5 2-3 5-3s5 1.5 5 3" />
          <path d="M5 14c0-2 3-4 7-4s7 2 7 4" />
          <path d="M4 19c0-2 3.5-4 8-4s8 2 8 4" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Destilação',
      description:
        'Processo artesanal em alambique de cobre, tirando cabeça e cauda, preservando o coração, o que garante aroma e sabor únicos.',
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
          <path d="M12 2c1 3 4 5 4 9a4 4 0 0 1-8 0c0-4 3-6 4-9Z" />
          <path d="M12 15v7" />
          <path d="M8 22h8" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Envelhecimento',
      description:
        'Descanso em barris de carvalho e umburana, onde o tempo faz sua mágica.',
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
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Envase',
      description:
        'Tira manual com controle de qualidade em cada garrafa.',
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
          <path d="M10 2h4" />
          <path d="M10 2v4c0 1-2 3-2 5v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-9c0-2-2-4-2-5V2" />
          <path d="M8 16h8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="processo"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={processoImg}
          alt="Processo de produção da cachaça Thimotina"
          className="h-full w-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/40 to-bg/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal mb-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-primary-light)',
            }}
          >
            Produção Artesanal
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
            Da Cana ao Copo
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text-muted)',
            }}
          >
            Um processo artesanal que honra mais de um século de tradição
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {/* Dashed connector line (desktop: horizontal, mobile: vertical) */}
              {index < steps.length - 1 && (
                <>
                  <div
                    className="absolute top-12 left-[calc(50%+2.5rem)] hidden h-0 md:block"
                    style={{
                      width: 'calc(100% - 5rem)',
                      borderTop: '2px dashed var(--color-primary)',
                    }}
                  />
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:hidden"
                    style={{
                      width: '2px',
                      height: '10px',
                      background: 'var(--color-primary)',
                    }}
                  />
                </>
              )}

              {/* Step Card */}
              <div
                className="reveal glass-card flex w-full flex-col items-center rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {/* Step Number */}
                <span
                  className="mb-3 text-sm font-semibold tracking-widest"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-primary-light)',
                  }}
                >
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    border: '2px solid var(--color-primary)',
                    color: 'var(--color-primary-light)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-2xl font-bold"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-text)',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
