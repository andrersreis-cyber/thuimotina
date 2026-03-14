import { useState } from 'react'
import { Link } from 'react-router-dom'
import lojaPremiumImg from '../assets/loja-premium.webp'
import lojaLineupImg from '../assets/loja-lineup.webp'
import lojaPrataImg from '../assets/loja-prata.webp'
import lojaAmburanaImg from '../assets/loja-amburana.webp'
import lojaOuroImg from '../assets/loja-ouro.webp'
import lojaTrioMixImg from '../assets/loja-trio-mix.webp'

const produtos = [
  {
    id: 'premium',
    nome: 'Cachaça Premium 10 Anos',
    descricao: 'Envelhecida por 10 anos em barris de Carvalho Europeu e Americano. Nossa joia mais preciosa, edição limitada premiada.',
    preco: 330,
    volume: '700ml',
    badge: 'Premiada',
    imagem: lojaPremiumImg,
    destaque: true,
    categoria: 'individual',
    parcelas: '3x R$ 110,00',
  },
  {
    id: 'kit-ouro',
    nome: 'Kit Cachaça Ouro',
    descricao: 'Três garrafas da nossa cachaça envelhecida em barris de carvalho. Cor dourada e sabor encorpado.',
    preco: 240,
    volume: '3x 700ml',
    badge: 'Kit',
    imagem: lojaOuroImg,
    destaque: false,
    categoria: 'kit',
    parcelas: '3x R$ 80,00',
  },
  {
    id: 'kit-prata',
    nome: 'Kit Cachaça Prata',
    descricao: 'Três garrafas da clássica Prata. Pura e cristalina, destilada com cuidado artesanal. Medalha Prata Expo Cachaça 2021.',
    preco: 180,
    volume: '3x 670ml',
    badge: 'Medalha 2021',
    imagem: lojaPrataImg,
    destaque: false,
    categoria: 'kit',
    parcelas: '3x R$ 60,00',
  },
  {
    id: 'kit-amburana',
    nome: 'Kit Cachaça Amburana',
    descricao: 'Três garrafas da cachaça descansada em madeira de amburana. Aroma único e final adocicado.',
    preco: 180,
    volume: '3x 700ml',
    badge: 'Kit',
    imagem: lojaAmburanaImg,
    destaque: false,
    categoria: 'kit',
    parcelas: '3x R$ 60,00',
  },
  {
    id: 'kit-classico',
    nome: 'Kit Ouro + Prata + Amburana',
    descricao: 'Três expressões da tradição Thimotina. Perfeito para presentear ou degustar a linha completa.',
    preco: 200,
    volume: '3x 700ml',
    badge: 'Mais Vendido',
    imagem: lojaLineupImg,
    destaque: false,
    categoria: 'kit',
    parcelas: '3x R$ 66,67',
  },
  {
    id: 'kit-premium',
    nome: 'Kit Premium + Prata + Ouro',
    descricao: 'A seleção definitiva. Inclui a premiada Premium 10 Anos junto com as clássicas Prata e Ouro.',
    preco: 410,
    volume: '3x 700ml',
    badge: 'Kit Premium',
    imagem: lojaTrioMixImg,
    destaque: true,
    categoria: 'kit',
    parcelas: '3x R$ 136,67',
  },
]

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'individual', label: 'Garrafas' },
  { id: 'kit', label: 'Kits' },
]

export default function Loja() {
  const [filtro, setFiltro] = useState('todos')

  const produtosFiltrados =
    filtro === 'todos'
      ? produtos
      : produtos.filter((p) => p.categoria === filtro)

  return (
    <div className="min-h-dvh" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg)]/95 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex flex-col items-start leading-none">
            <span className="font-serif text-2xl font-bold tracking-[0.15em] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent">
              THIMOTINA
            </span>
            <span className="text-[var(--color-text-muted)] text-[10px] tracking-[0.25em] uppercase mt-0.5">
              loja online
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden md:inline-flex items-center gap-2 text-sm font-sans text-text-muted hover:text-primary-light transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Voltar ao Site
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5527997022368&text=Olá! Gostaria de fazer um pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-light)] px-6 py-2 text-sm font-sans font-semibold uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:bg-[var(--color-primary)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir via WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 text-center glow-accent">
        <span className="inline-block text-primary-light text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-4">
          Loja Online
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-gradient-gold mb-4">
          Nossos Produtos
        </h1>
        <p className="text-text-muted font-sans text-lg max-w-2xl mx-auto mb-10">
          Cachaça artesanal desde 1915. Entrega para todo o Brasil.
          Parcelamento em até 3x sem juros.
        </p>

        {/* Filtros */}
        <div className="flex items-center justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltro(cat.id)}
              className={`rounded-full px-6 py-2 text-sm font-sans font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filtro === cat.id
                  ? 'bg-primary-light text-bg'
                  : 'border border-border text-text-muted hover:border-primary-light hover:text-primary-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className={`glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col ${
                produto.destaque ? 'ring-1 ring-primary-light/30' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-primary text-bg text-xs font-semibold px-3 py-1 rounded-full">
                  {produto.badge}
                </span>
                {produto.destaque && (
                  <div className="absolute top-3 left-3 bg-primary-light text-bg text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Destaque
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-primary-light font-sans uppercase tracking-wider mb-1">
                  {produto.volume}
                </span>
                <h3 className="font-serif text-2xl text-text mb-2">
                  {produto.nome}
                </h3>
                <p className="font-sans text-sm text-text-muted mb-6 flex-1">
                  {produto.descricao}
                </p>

                {/* Price */}
                {produto.preco ? (
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-text-muted font-sans">R$</span>
                      <span className="text-3xl font-bold text-primary-light font-serif">
                        {produto.preco}
                      </span>
                    </div>
                    {produto.parcelas && (
                      <p className="text-xs text-text-muted font-sans mt-1">
                        ou {produto.parcelas} sem juros
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mb-5">
                    <span className="text-sm text-primary-light font-sans font-medium">
                      Consulte o preço
                    </span>
                  </div>
                )}

                {/* CTA */}
                <a
                  href={`https://api.whatsapp.com/send?phone=5527997022368&text=${encodeURIComponent(
                    `Olá! Gostaria de comprar: ${produto.nome}${produto.preco ? ` (R$ ${produto.preco})` : ''}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-center rounded-full bg-primary text-bg font-semibold py-2.5 px-6 transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Bar */}
      <section className="border-t border-border py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span className="font-sans text-sm font-semibold text-text uppercase tracking-wider">
                Entrega Nacional
              </span>
            </div>
            <p className="font-sans text-xs text-text-muted">
              Enviamos para todo o Brasil
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span className="font-sans text-sm font-semibold text-text uppercase tracking-wider">
                3x Sem Juros
              </span>
            </div>
            <p className="font-sans text-xs text-text-muted">
              Parcelamento facilitado
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-sans text-sm font-semibold text-text uppercase tracking-wider">
                100% Artesanal
              </span>
            </div>
            <p className="font-sans text-xs text-text-muted">
              Desde 1915, tradição em cada garrafa
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="font-sans text-xs text-text-subtle">
          Cachaça Thimotina &copy; {new Date().getFullYear()} &middot; Afonso Cláudio, ES &middot;{' '}
          <Link to="/" className="text-primary-light hover:underline">
            thimotina.com.br
          </Link>
        </p>
        <p className="font-sans text-[10px] text-text-subtle mt-2">
          BEBA COM MODERAÇÃO. VENDA PROIBIDA PARA MENORES DE 18 ANOS.
        </p>
      </footer>
    </div>
  )
}
