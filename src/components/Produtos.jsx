import prataImg from '../assets/prata.webp'
import ouroImg from '../assets/ouro.webp'
import amburanaImg from '../assets/amburana.webp'
import premiumImg from '../assets/premium.webp'

const produtos = [
  {
    nome: 'Cachaça Prata',
    descricao: 'Pura e cristalina, destilada com cuidado artesanal. Medalha Prata Expo Cachaça 2021.',
    preco: 60,
    volume: '670ml',
    badge: 'Clássica',
    medalha: 'Prata 2021',
    imagem: prataImg,
    portrait: true,
  },
  {
    nome: 'Cachaça Ouro',
    descricao: 'Envelhecida por 2 anos em barris de carvalho, cor dourada e sabor encorpado.',
    preco: 80,
    volume: '700ml',
    badge: 'Envelhecida',
    imagem: ouroImg,
    portrait: false,
  },
  {
    nome: 'Cachaça Amburana',
    descricao: 'Descansada em madeira de amburana, aroma único e final adocicado.',
    preco: 60,
    volume: '700ml',
    badge: 'Especial',
    imagem: amburanaImg,
    portrait: false,
  },
  {
    nome: 'Premium 10 Anos',
    descricao: 'Dez anos de envelhecimento em carvalho. Edição limitada premiada. Medalha Ouro Expo Cachaça 2020.',
    preco: 330,
    volume: '700ml',
    badge: 'Exclusiva',
    medalha: 'Ouro 2020',
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
        background: portrait
          ? 'radial-gradient(ellipse at center, rgba(120,80,30,0.7) 0%, rgba(70,45,15,0.6) 40%, rgba(28,25,23,0.95) 80%)'
          : 'linear-gradient(180deg, rgba(28,25,23,0.3) 0%, rgba(12,10,9,0.9) 100%)',
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
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-primary-light font-sans uppercase tracking-wider">
                  {produto.volume}
                </span>
                {produto.medalha && (
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider bg-primary/20 text-primary-light px-2 py-0.5 rounded-full">
                    {produto.medalha}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl text-text mb-2">
                {produto.nome}
              </h3>
              <p className="font-sans text-sm text-text-muted mb-4 flex-1">
                {produto.descricao}
              </p>

              {/* CTA */}
              <a
                href="/loja"
                className="inline-block text-center rounded-full border border-primary text-primary-light font-semibold py-2.5 px-6 transition-all duration-300 hover:bg-primary hover:text-bg cursor-pointer"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
