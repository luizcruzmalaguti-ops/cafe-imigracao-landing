import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Croissant, Cake, MapPin, Clock, Phone, Instagram, Star, Heart, Utensils, ShoppingBag, Bike } from "lucide-react";

import heroImg from "@/assets/hero-cafe.jpg";
import mesaImg from "@/assets/mesa-cafe.jpg";
import boloImg from "@/assets/bolo.jpg";
import baristaImg from "@/assets/barista.jpg";

const WHATSAPP =
  "https://wa.me/5519982405142?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20no%20Caf%C3%A9%20Imigra%C3%A7%C3%A3o.";
const INSTAGRAM = "https://instagram.com/cafe_imigracao";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Av.+da+Ind%C3%BAstria,+563+-+Jardim+P%C3%A9rola,+Santa+B%C3%A1rbara+d%27Oeste+-+SP,+13450-000";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Imigração — Cafeteria em Santa Bárbara d'Oeste" },
      {
        name: "description",
        content:
          "Onde tradição e sabor acolhem você. Café artesanal, bolos caseiros e café da manhã em Santa Bárbara d'Oeste – SP. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Café Imigração — Cafeteria em Santa Bárbara d'Oeste" },
      {
        property: "og:description",
        content: "Café, sabores e memórias. Refeição no local, para viagem e entrega.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Café Imigração",
          telephone: "+5519982405142",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. da Indústria, 563 - Jardim Pérola",
            addressLocality: "Santa Bárbara d'Oeste",
            addressRegion: "SP",
            postalCode: "13450-000",
            addressCountry: "BR",
          },
          openingHours: "Mo-Su 08:00-17:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "2" },
          sameAs: [INSTAGRAM],
        }),
      },
    ],
  }),
});

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

const menu = [
  {
    icon: Coffee,
    title: "Cafés especiais",
    items: ["Espresso", "Cappuccino cremoso", "Café coado da casa", "Latte com calda de caramelo"],
  },
  {
    icon: Croissant,
    title: "Café da manhã",
    items: ["Pão na chapa", "Pão de queijo quentinho", "Tapioca recheada", "Sanduíches artesanais"],
  },
  {
    icon: Cake,
    title: "Doces & bolos",
    items: ["Bolos caseiros do dia", "Tortas geladas", "Fatias confeitadas", "Biscoitos da vovó"],
  },
];

const servicos = [
  { icon: Utensils, label: "Refeição no local" },
  { icon: ShoppingBag, label: "Para viagem" },
  { icon: Bike, label: "Entrega" },
];

const avaliacoes = [
  {
    nome: "Cliente Google",
    texto:
      "Atendimento maravilhoso e café delicioso. Um lugar aconchegante para começar bem o dia.",
  },
  {
    nome: "Cliente Google",
    texto: "Tudo muito caseiro e bem feito. Os bolos são simplesmente perfeitos com o café.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <Coffee className="h-4 w-4" />
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              Café Imigração
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Fazer pedido
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="bg-warm pt-28 pb-16 sm:pt-32 lg:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
                Santa Bárbara d'Oeste · SP
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Onde tradição e sabor acolhem você
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Café, sabores e memórias. Um cantinho feito de grãos selecionados, receitas de
                família e o cheiro de bolo saindo do forno.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Pedir pelo WhatsApp
                </a>
                <a
                  href="#cardapio"
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Ver o cardápio
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-caramel" /> 08:00 às 17:00
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-gold text-gold" /> 5,0 no Google
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Xícara de cappuccino sobre mesa de madeira na Café Imigração"
                width={1600}
                height={1104}
                className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-soft"
              />
              <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:block">
                <p className="font-display text-lg">Feito com carinho</p>
                <p className="text-xs text-muted-foreground">todos os dias, desde cedo</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
            {servicos.map((s) => (
              <div key={s.label} className="flex items-center justify-center gap-3">
                <s.icon className="h-5 w-5 shrink-0 text-caramel" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={baristaImg}
                alt="Barista extraindo espresso"
                loading="lazy"
                width={912}
                height={912}
                className="mt-8 aspect-square w-full rounded-[1.5rem] object-cover shadow-card"
              />
              <img
                src={mesaImg}
                alt="Mesa de café da manhã com pães, bolo e café"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-square w-full rounded-[1.5rem] object-cover shadow-card"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-caramel uppercase">Nossa história</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Um café que guarda histórias de quem chegou e ficou
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                O Café Imigração nasceu do gosto simples de receber bem. Cada xícara é preparada com
                calma, cada receita passa pelas mãos de quem cozinha para a própria família — e a
                mesa está sempre posta para quem quiser sentar e conversar.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Da primeira visita ao café de todo dia, a ideia é a mesma: transformar uma pausa em
                memória.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-5">
                <Heart className="h-5 w-5 shrink-0 text-caramel" />
                <p className="text-sm text-muted-foreground">
                  Comida preparada na hora, café artesanal e um atendimento que lembra o seu nome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIO */}
        <section id="cardapio" className="bg-warm py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.2em] text-caramel uppercase">Cardápio</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Sabores da casa
              </h2>
              <p className="mt-4 text-muted-foreground">
                Uma seleção do que sai da nossa cozinha todos os dias. Consulte as novidades do dia
                pelo WhatsApp.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {menu.map((m) => (
                <article
                  key={m.title}
                  className="rounded-[1.5rem] border border-border bg-card p-7 shadow-card"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-caramel">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{m.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {m.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-caramel" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-12 grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card shadow-card md:grid-cols-2">
              <img
                src={boloImg}
                alt="Fatia de bolo caseiro servida com café"
                loading="lazy"
                width={912}
                height={912}
                className="h-full max-h-80 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold">Bolo do dia + café</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A dupla preferida da casa. Peça o sabor do dia e reserve a sua fatia antes que
                  acabe.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Reservar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              5,0 estrelas no Google
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Com base em 2 avaliações</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {avaliacoes.map((a, i) => (
                <blockquote
                  key={i}
                  className="rounded-[1.5rem] border border-border bg-card p-7 text-left shadow-card"
                >
                  <p className="leading-relaxed text-muted-foreground">"{a.texto}"</p>
                  <footer className="mt-5 text-sm font-medium">{a.nome}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-warm py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.2em] text-caramel uppercase">Visite</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Te esperamos por aqui
              </h2>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <span className="text-muted-foreground">
                    Av. da Indústria, 563 - Jardim Pérola
                    <br />
                    Santa Bárbara d'Oeste - SP, 13450-000
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <span className="text-muted-foreground">Todos os dias, das 08:00 às 17:00</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <a href="tel:+5519982405142" className="text-muted-foreground hover:text-foreground">
                    (19) 98240-5142
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    @cafe_imigracao
                  </a>
                </li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Como chegar
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
              <iframe
                title="Mapa do Café Imigração"
                src="https://www.google.com/maps?q=Av.%20da%20Ind%C3%BAstria%2C%20563%20-%20Jardim%20P%C3%A9rola%2C%20Santa%20B%C3%A1rbara%20d'Oeste%20-%20SP&output=embed"
                loading="lazy"
                className="h-80 w-full lg:h-full"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-espresso py-12 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <span className="font-display text-xl">Café Imigração</span>
          <p className="text-sm opacity-75">Onde tradição e sabor acolhem você 🤍</p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm opacity-75 transition-opacity hover:opacity-100"
          >
            <Instagram className="h-4 w-4" /> @cafe_imigracao
          </a>
          <p className="mt-4 text-xs opacity-50">
            © {new Date().getFullYear()} Café Imigração · Santa Bárbara d'Oeste – SP
          </p>
        </div>
      </footer>
    </div>
  );
}
