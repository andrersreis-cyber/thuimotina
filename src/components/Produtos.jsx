import prataImg from '../assets/prata.webp'
import ouroImg from '../assets/ouro.webp'
import amburanaImg from '../assets/amburana.webp'
import premiumImg from '../assets/premium.webp'

const produtos = [
  {
    nome: 'Cachaça Prata',
    descricao: 'Pura e cristalina, destilada com cuidado artesanal. Sabor suave e marcante.',
    preco: 60,
    badge: 'Clássica',
    imagem: prataImg,
    portrait: true,
  },
  {
    nome: 'Cachaça Ouro',
    descricao: 'Envelhecida em barris de carvalho, cor dourada e sabor encorpado.',
    preco: 80,
    badge: 'Envelhecida',
    imagem: ouroImg,
    portrait: false,
  },
  {
    nome: 'Cachaça Amburana',
    descricao: 'Descansada em madeira de amburana, aroma único e final adocicado.',
    preco: 60,
    badge: 'Especial',
    imagem: amburanaImg,
    portrait: true,
  },
  {
    nome: 'Premium 10 Anos',
    descricao: 'Dez anos de envelhecimento. Nossa joia mais preciosa, edição limitada.',
    preco: 330,
    badge: 'Exclusiva',
    imagem: premiumImg,
    portrait: false,
  },
]

function ProductImage({ src, alt, portrait }) {
  if (!src) {
    return (
      <div className="flex items-center justify-center h-[300px] bg-gradient-to-b from-bg-surface to-bg">
        <div
          className="w-16 h-44 rounded-md border border-primary/40"
          style={{
            background:
              'linear-gradient(180deg, rgba(217,119,6,0.15) 0%, rgba(12,10,9,0.8) 100%)',
            boxShadow: '0 0 24px rgba(161,98,7,0.12)',
          }}
        >
          <div className="w-6 h-5 mx-auto -mt-1 rounded-t-sm bg-primary-dark/60" />
        </div>
      </div>
    )
  }
  return (
    <div
      className="h-[300px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(28,25,23,0.3) 0%, rgba(12,10,9,0.9) 100%)',
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full transition-transform duration-500 hover:scale-105 ${
          portrait ? 'object-contain' : 'object-cover'
        }`}
        loading="lazy"
      />
    </div>
  )
}

export default function Produtos() {
  return (
    <section id="produtos" className="bg-gradient-dark-reverse py-24 md:py-32 px-4 glow-accent">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <span className="reveal inline-block text-primary-light text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-4">
          Linha Completa
        </span>
        <h2 className="reveal font-serif text-5xl md:text-6xl text-gradient-gold mb-4">
          Nossos Produtos
        </h2>
        <p className="reveal text-text-muted text-lg md:text-xl font-sans max-w-2xl mx-auto">
          Quatro expressões únicas da tradição centenária capixaba
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {produtos.map((produto, index) => (
          <div
            key={produto.nome}
            className="reveal glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Product image */}
            <div className="relative">
              <ProductImage src={produto.imagem} alt={produto.nome} portrait={produto.portrait} />
              <span className="absolute top-3 right-3 bg-primary text-bg text-xs font-semibold px-3 py-1 rounded-full">
                {produto.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-serif text-2xl text-text mb-2">
                {produto.nome}
              </h3>
              <p className="font-sans text-sm text-text-muted mb-6 flex-1">
                {produto.descricao}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-sm text-text-muted font-sans">R$</span>
                <span className="text-3xl font-bold text-primary-light font-serif">
                  {produto.preco}
                </span>
              </div>

              {/* CTA */}
              <a
                href="https://loja.thimotina.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center rounded-full bg-primary text-bg font-semibold py-2.5 px-6 transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
