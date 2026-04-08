export default function Numeros() {
  const stats = [
    { value: '110+', label: 'Anos de Tradição', suffix: '' },
    { value: '4', label: 'Gerações', suffix: '' },
    { value: 'Artesanal', label: '', suffix: '' },
    { value: '4', label: 'Expressões Únicas', suffix: '' },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden glow-accent">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(161,98,7,0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-center font-serif text-4xl md:text-5xl text-gradient-gold mb-4">
          Thimotina em Números
        </h2>
        <p className="text-center font-sans text-text-muted text-lg mb-12 max-w-xl mx-auto">
          Uma história que se mede em gerações, tradição e qualidade
        </p>

        {/* Top Divider */}
        <div className="divider-gold mx-auto mb-16 w-full" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <p className="mb-3 text-5xl font-bold md:text-7xl font-serif text-gradient-gold">
                {stat.value}
              </p>

              {/* Decorative line */}
              <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-primary-light to-transparent" />

              {/* Label */}
              <p className="text-sm uppercase tracking-widest font-sans text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="divider-gold mx-auto mt-16 w-full" />
      </div>
    </section>
  );
}
