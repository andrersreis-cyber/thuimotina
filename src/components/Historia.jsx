import { useEffect, useRef } from 'react'
import historiaImg from '../assets/historia.webp'

const milestones = [
  {
    year: '1915',
    title: 'A Fundação',
    description:
      'Fundada por Francisco Thimóteo Dias, apenas 24 anos após a emancipação de Afonso Cláudio-ES. O nome herdou o sobrenome do fundador, e a caricatura da logomarca é uma homenagem à sua esposa.',
  },
  {
    year: '1977',
    title: 'Segunda Geração',
    description:
      'Nério Dias, filho do fundador, assume a administração e conduz a destilaria preservando a receita e a essência artesanal que define a Thimotina.',
  },
  {
    year: '1978',
    title: 'Terceira Geração',
    description:
      'Paulo Roberto Soares, genro casado com a filha Jovita, assume e moderniza a produção sem comprometer a tradição. A Thimotina conquista o paladar capixaba.',
  },
  {
    year: '2005',
    title: 'Quarta Geração',
    description:
      'Paulo Roberto Dias Soares, bisneto do fundador, leva a empresa a mais de 100 anos de tradição. Uma das fábricas de cachaça mais antigas do Espírito Santo ainda em funcionamento.',
  },
]

export default function Historia() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-dark overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={historiaImg}
          alt="Barris de envelhecimento da Thimotina"
          className="h-full w-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/50 to-bg/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="reveal inline-block text-primary-light text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-4">
            Desde 1915
          </span>
          <h2 className="reveal font-serif text-5xl md:text-6xl text-gradient-gold mb-4">
            Nossa História
          </h2>
          <p className="reveal text-text-muted font-sans text-lg md:text-xl max-w-xl mx-auto mb-8">
            Mais de um século preservando a arte da destilação artesanal capixaba
          </p>
          <div className="reveal glass-card rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <p className="font-sans text-text-muted leading-relaxed text-sm md:text-base">
              A Cachaça Thimotina iniciou seu funcionamento em 1915, apenas 24 anos após a emancipação
              política do município de Afonso Cláudio–ES. Este fato faz dela uma das fábricas de cachaça mais
              antigas do Estado do Espírito Santo ainda em funcionamento. O processo mantém características
              artesanais de fabricação, passados de geração em geração, com moagem de canas frescas e sem
              queima, com fermentação natural e envelhecimento em barris de madeira{' '}
              <span className="text-primary-light">(Carvalho Francês, Carvalho Americano e Amburana)</span>.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line — centered on md+, left-aligned on mobile */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-light via-primary to-primary-dark
                        left-4 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={milestone.year} className="relative">
                  {/* Golden dot on the timeline */}
                  <div
                    className="absolute top-8 left-4 md:left-1/2 -translate-x-1/2 z-10
                                w-4 h-4 rounded-full bg-primary-light border-2 border-primary-dark
                                shadow-[0_0_12px_rgba(217,119,6,0.4)]"
                  />

                  {/* Milestone card */}
                  <div
                    className={`reveal ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven
                        ? 'md:mr-auto md:pr-4'
                        : 'md:ml-auto md:pl-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                      <span className="block font-serif text-6xl md:text-7xl text-gradient-gold leading-none mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-text mb-3">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-text-muted leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
