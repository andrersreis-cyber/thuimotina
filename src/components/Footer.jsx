export default function Footer() {
  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'História', href: '#historia' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Memorial', href: '#memorial' },
  ];

  const produtos = [
    'Prata',
    'Ouro',
    'Amburana',
    'Premium 10 Anos',
  ];

  return (
    <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              THIMOTINA
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Cachaça Artesanal desde 1915
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/cachacathimotina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com/cachacathimotina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Navegação */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-lg mb-4 text-[var(--color-text)]">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Produtos */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-lg mb-4 text-[var(--color-text)]">
              Produtos
            </h3>
            <ul className="flex flex-col gap-2">
              {produtos.map((produto) => (
                <li key={produto}>
                  <a
                    href="https://loja.thimotina.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                  >
                    {produto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-lg mb-4 text-[var(--color-text)]">
              Contato
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <li>(27) 9 9702-2368</li>
              <li>thimotina@thimotina.com.br</li>
              <li>Horário: Seg-Sex, 8h - 16h</li>
              <li>Afonso Cláudio, ES</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[var(--color-text-muted)]">
            &copy; 2024 Cachaça Thimotina. Todos os direitos reservados.
          </p>
          <p className="text-[var(--color-text-subtle)]">
            CNPJ: 27.421.221/0001-90
          </p>
          <p className="text-[var(--color-text-subtle)]">
            Beba com moderação
          </p>
        </div>
      </div>
    </footer>
  );
}
