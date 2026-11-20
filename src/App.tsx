import { useState, type FormEvent, type ReactNode } from 'react'

const address = 'Avenida Mendonça Júnior, 161 - Centro, Macapá - AP'
const phone = '5596981410576'
const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Encanto do Bebê, ' + address)
const whatsappUrl = 'https://wa.me/' + phone
const instagramUrl = 'https://www.instagram.com/encan_todobebe/'

type IconName = 'arrow' | 'baby' | 'check' | 'clock' | 'heart' | 'instagram' | 'location' | 'menu' | 'shirt' | 'sparkle' | 'whatsapp' | 'close'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const }
  const drawings: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    baby: <><path d="M12 4c-4.4 0-7.5 3.1-7.5 7.1 0 2.8 1.6 5.1 3.9 6.2l.9 2.2h5.4l.9-2.2c2.3-1.1 3.9-3.4 3.9-6.2C19.5 7.1 16.4 4 12 4Z" /><path d="M9 11h.01M15 11h.01M9.5 14.3s1 1.2 2.5 1.2 2.5-1.2 2.5-1.2M8 4.8 6.5 3M16 4.8 17.5 3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    heart: <path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.8Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    shirt: <path d="m8 4 4 2 4-2 5 3-2 5-3-1v9H8v-9l-3 1-2-5 5-3Z" />,
    sparkle: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
    whatsapp: <><path d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3 20l.9-4.7a8.4 8.4 0 1 1 16.5-3.6Z" /><path d="M8.4 8.3c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2.1 2 .2.1.4.1.6-.1l.8-.9c.2-.2.4-.3.6-.2l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.5.5-1.3.8-2.2.6-1-.2-2.3-.7-3.8-2-1.2-1-2-2.3-2.3-3.2-.3-1 .1-2.1.7-2.8Z" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  }
  return <svg {...common}>{drawings[name]}</svg>
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#inicio" className="group flex shrink-0 items-center gap-2.5" aria-label="Encanto do Bebê, início">
    <span className={(inverse ? 'bg-white/15 text-yellow shadow-black/10 ' : 'bg-purple text-white shadow-purple/20 ') + 'grid size-11 place-items-center rounded-2xl shadow-md transition-transform group-hover:-rotate-6'}><Icon name="baby" className="size-6" /></span>
    <span className="flex flex-col leading-none"><span className={(inverse ? 'text-white ' : 'text-ink ') + 'font-display text-lg font-extrabold tracking-tight'}>Encanto <span className={inverse ? 'text-yellow' : 'text-purple'}>do Bebê</span></span><span className={(inverse ? 'text-white/55 ' : 'text-muted ') + 'mt-1 text-[10px] font-bold uppercase tracking-[.2em]'}>Moda infantil</span></span>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const navLinks = [
    { href: '#loja', label: 'Nossa rua' },
    { href: '#vagas', label: 'Trabalhe conosco' },
    { href: '#contato', label: 'Contato e horário' },
  ]

  function sendResume(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = new FormData(form)
    const name = String(values.get('name') ?? '')
    const email = String(values.get('email') ?? '')
    const message = String(values.get('message') ?? '')
    const resume = values.get('resume')
    const fileName = resume instanceof File && resume.size > 0 ? resume.name : 'currículo'
    const text = 'Olá! Gostaria de me candidatar a uma oportunidade na Encanto do Bebê.\\n\\nNome: ' + name + '\\nE-mail: ' + email + '\\n\\nApresentação: ' + (message || '—') + '\\n\\nVou anexar meu currículo (' + fileName + ') nesta conversa.'
    window.open(whatsappUrl + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer')
    setFormStatus('O WhatsApp foi aberto com sua mensagem. Anexe o arquivo do currículo na conversa antes de enviar.')
    form.reset()
  }

  return <div className="overflow-hidden bg-paper text-ink">
    <div className="bg-purple px-4 py-2 text-center text-xs font-bold tracking-wide text-white sm:text-sm"><span className="inline-flex items-center gap-2"><Icon name="sparkle" className="size-4 text-yellow" /> Moda infantil com carinho em Macapá <Icon name="sparkle" className="size-4 text-yellow" /></span></div>
    <header className="sticky top-0 z-40 border-b border-purple/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">{navLinks.map((link) => <a key={link.href} href={link.href} className="rounded-full px-4 py-2.5 text-sm font-bold text-muted transition hover:bg-lilac hover:text-purple">{link.label}</a>)}</nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal/20 transition hover:-translate-y-0.5 hover:bg-[#4ca898] md:inline-flex"><Icon name="whatsapp" /> Fale com a gente</a>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center rounded-xl border border-purple/15 text-purple md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
      {menuOpen && <nav className="grid gap-1 border-t border-purple/10 bg-white px-5 py-3 md:hidden" aria-label="Menu móvel">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-bold text-muted hover:bg-lilac hover:text-purple">{link.label}</a>)}<a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-2 rounded-xl bg-teal px-4 py-3 font-extrabold text-white"><Icon name="whatsapp" /> Fale com a gente</a></nav>}
    </header>

    <main>
      <section id="inicio" className="hero-glow relative scroll-mt-24 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple/10 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-purple shadow-sm"><span className="size-2 rounded-full bg-teal" /> Macapá, Amapá</span>
            <h1 className="text-balance mt-6 font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">Um mundo de carinho em cada <span className="text-purple">pequena descoberta.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Roupinhas e encantos para acompanhar os primeiros passos, as grandes brincadeiras e todos os momentos especiais do seu bebê.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#loja" className="inline-flex items-center justify-center gap-2 rounded-full bg-purple px-6 py-3.5 font-extrabold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5 hover:bg-[#672b73]">Venha nos visitar <Icon name="arrow" /></a>
              <a href="#vagas" className="inline-flex items-center justify-center gap-2 rounded-full border border-purple/15 bg-white/80 px-6 py-3.5 font-extrabold text-purple transition hover:bg-lilac">Faça parte da equipe</a>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-6xl">
            <div className="absolute -inset-3 -rotate-1 rounded-[2rem] bg-gradient-to-r from-pink/60 via-yellow/50 to-blue/40 sm:-inset-4" />
            <div className="soft-shadow relative overflow-hidden rounded-2xl border-[5px] border-white bg-lilac sm:rounded-3xl sm:border-[8px]"><img src="/images/banner-encanto.jpeg" alt="Encanto do Bebê — moda infantil" className="block h-auto w-full" fetchPriority="high" /></div>
            <span className="absolute -right-2 -top-7 grid size-14 rotate-12 place-items-center rounded-2xl bg-yellow text-purple shadow-lg sm:-right-5 sm:-top-6 sm:size-16"><Icon name="sparkle" className="size-8" /></span>
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-muted">
            <span className="inline-flex items-center gap-2"><Icon name="heart" className="size-4 text-pink" /> Escolhido com carinho</span>
            <span className="inline-flex items-center gap-2"><Icon name="shirt" className="size-4 text-blue" /> Moda para os pequenos</span>
            <span className="inline-flex items-center gap-2"><Icon name="location" className="size-4 text-teal" /> No Centro de Macapá</span>
          </div>
        </div>
      </section>

      <section id="loja" className="scroll-mt-24 bg-[#fcfaff] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-purple"><Icon name="location" className="size-4" /> Nossa rua</span>
            <h2 className="text-balance mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Um cantinho especial no coração de Macapá.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">Venha conhecer a loja, escolher com calma e encontrar aquele look especial para o seu pequeno.</p>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-purple/10 bg-white p-5 shadow-sm sm:p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lilac text-purple"><Icon name="location" className="size-6" /></span>
              <div><p className="font-extrabold text-ink">Encanto do Bebê</p><p className="mt-1 leading-6 text-muted">{address}</p><a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-purple hover:underline">Traçar rota no Google Maps <Icon name="arrow" className="size-4" /></a></div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 font-extrabold text-white shadow-lg shadow-blue/20 transition hover:-translate-y-0.5 hover:bg-[#168fba]"><Icon name="location" /> Como chegar <Icon name="arrow" className="size-4" /></a>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-lilac-strong via-pink/50 to-yellow/70" />
            <div className="soft-shadow relative min-h-[21rem] overflow-hidden rounded-3xl border-[7px] border-white bg-gradient-to-br from-[#e6f6f4] via-[#f8ecfb] to-[#fff4d1] p-7 sm:min-h-[25rem] sm:p-9">
              <div className="absolute -right-14 -top-16 size-56 rounded-full bg-pink/20" />
              <div className="absolute -bottom-24 -left-10 size-64 rounded-full bg-blue/10" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 500 400" fill="none" aria-hidden="true"><path d="M-20 296c93-9 108-137 208-124 75 10 26 119 107 119 67 0 67-151 222-160" stroke="#80c5bb" strokeWidth="18" strokeLinecap="round" strokeDasharray="2 15" /><path d="M-20 296c93-9 108-137 208-124 75 10 26 119 107 119 67 0 67-151 222-160" stroke="white" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 15" /></svg>
              <div className="relative flex h-full min-h-[19rem] flex-col justify-between sm:min-h-[23rem]">
                <div className="flex items-center justify-between"><span className="rounded-full bg-white/85 px-4 py-2 text-[10px] font-black tracking-[.18em] text-purple shadow-sm">MACAPÁ · AP</span><span className="grid size-12 place-items-center rounded-2xl bg-yellow text-purple shadow-sm"><Icon name="sparkle" className="size-6" /></span></div>
                <div className="mx-auto grid size-24 place-items-center rounded-full bg-purple text-white shadow-xl shadow-purple/25 ring-8 ring-white/60"><Icon name="location" className="size-11" /></div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-lg backdrop-blur-sm"><p className="text-xs font-black uppercase tracking-[.15em] text-purple">Um endereço cheio de encanto</p><p className="mt-2 font-display text-xl font-black text-ink">Centro de Macapá</p><p className="mt-1 text-sm text-muted">Avenida Mendonça Júnior, 161</p></div>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="absolute -bottom-5 right-4 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-extrabold text-white shadow-lg sm:right-8"><Icon name="whatsapp" /> Tire suas dúvidas</a>
          </div>
        </div>
      </section>

      <section id="vagas" className="relative scroll-mt-24 overflow-hidden bg-lilac px-5 py-20 sm:px-8 sm:py-28">
        <div className="dotted-pattern pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-purple"><Icon name="heart" className="size-4" /> Trabalhe conosco</span>
            <h2 className="text-balance mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Vamos espalhar encanto juntos?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">Estamos sempre felizes em conhecer pessoas que gostam de cuidar, atender e fazer parte de momentos especiais. Envie seu currículo pelo WhatsApp.</p>
            <ul className="mt-7 grid gap-3 text-sm font-bold text-ink">
              <li className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-white text-teal"><Icon name="check" className="size-4" /></span> Conte um pouco sobre você</li>
              <li className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-white text-teal"><Icon name="check" className="size-4" /></span> Anexe seu currículo na conversa</li>
              <li className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-white text-teal"><Icon name="check" className="size-4" /></span> Falamos com você quando surgir uma oportunidade</li>
            </ul>
          </div>
          <form onSubmit={sendResume} className="soft-shadow rounded-[2rem] border border-white/80 bg-white p-6 sm:p-9">
            <div className="mb-6 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-black text-ink">Envie seu currículo</h3><p className="mt-1 text-sm leading-6 text-muted">Preencha seus dados e continue pelo WhatsApp.</p></div><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-yellow/50 text-purple"><Icon name="shirt" className="size-6" /></span></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-bold text-ink">Seu nome<input required name="name" autoComplete="name" placeholder="Nome completo" className="rounded-xl border border-purple/15 bg-[#fdfbff] px-4 py-3 font-normal outline-none transition placeholder:text-muted/60 focus:border-purple focus:ring-4 focus:ring-purple/10" /></label>
              <label className="grid gap-1.5 text-sm font-bold text-ink">Seu e-mail<input required type="email" name="email" autoComplete="email" placeholder="voce@email.com" className="rounded-xl border border-purple/15 bg-[#fdfbff] px-4 py-3 font-normal outline-none transition placeholder:text-muted/60 focus:border-purple focus:ring-4 focus:ring-purple/10" /></label>
            </div>
            <label className="mt-4 grid gap-1.5 text-sm font-bold text-ink">Conte um pouco sobre você<textarea name="message" rows={3} placeholder="Experiências, área de interesse..." className="resize-y rounded-xl border border-purple/15 bg-[#fdfbff] px-4 py-3 font-normal outline-none transition placeholder:text-muted/60 focus:border-purple focus:ring-4 focus:ring-purple/10" /></label>
            <label className="mt-4 grid gap-1.5 text-sm font-bold text-ink">Anexe seu currículo<input required type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="w-full rounded-xl border border-dashed border-purple/25 bg-[#fdfbff] p-3 text-sm font-normal text-muted file:mr-3 file:rounded-full file:border-0 file:bg-lilac file:px-3 file:py-2 file:font-bold file:text-purple" /></label>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 font-extrabold text-white shadow-lg shadow-teal/20 transition hover:-translate-y-0.5 hover:bg-[#4ca898]"><Icon name="whatsapp" /> Continuar pelo WhatsApp <Icon name="arrow" className="size-4" /></button>
            <p className="mt-3 text-center text-xs leading-5 text-muted">O WhatsApp abrirá com sua mensagem. Por segurança, você precisa anexar o currículo novamente na conversa.</p>
            {formStatus && <p role="status" className="mt-3 rounded-xl bg-teal/10 px-4 py-3 text-sm font-semibold text-[#287d70]">{formStatus}</p>}
          </form>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center"><span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-purple"><Icon name="sparkle" className="size-4" /> Contato e horário</span><h2 className="text-balance mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Estamos pertinho. É só chamar!</h2><p className="mt-4 text-base leading-7 text-muted">Fale com a gente pelo canal que preferir. Vamos adorar receber sua mensagem.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group rounded-3xl border border-teal/20 bg-[#f0fbf8] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10"><span className="grid size-12 place-items-center rounded-2xl bg-teal text-white"><Icon name="whatsapp" className="size-6" /></span><p className="mt-5 text-sm font-extrabold text-teal">WHATSAPP</p><h3 className="mt-1 font-display text-xl font-black text-ink">(96) 98141-0576</h3><p className="mt-2 text-sm leading-6 text-muted">Pergunte sobre produtos, horários e oportunidades.</p></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="group rounded-3xl border border-pink/20 bg-[#fff5fa] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-pink/10"><span className="grid size-12 place-items-center rounded-2xl bg-pink text-white"><Icon name="instagram" className="size-6" /></span><p className="mt-5 text-sm font-extrabold text-[#b84a84]">INSTAGRAM</p><h3 className="mt-1 font-display text-xl font-black text-ink">@encan_todobebe</h3><p className="mt-2 text-sm leading-6 text-muted">Acompanhe as novidades e fale com a gente por lá.</p></a>
            <div className="rounded-3xl border border-yellow/40 bg-[#fffaf0] p-7"><span className="grid size-12 place-items-center rounded-2xl bg-yellow text-ink"><Icon name="clock" className="size-6" /></span><p className="mt-5 text-sm font-extrabold text-[#a17b13]">HORÁRIO DE FUNCIONAMENTO</p><h3 className="mt-1 font-display text-xl font-black text-ink">Consulte o horário de hoje</h3><p className="mt-2 text-sm leading-6 text-muted">Chame no WhatsApp para confirmar se a loja está aberta.</p><a href={whatsappUrl + '?text=' + encodeURIComponent('Olá! Qual é o horário de funcionamento da loja hoje?')} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#8b6810] hover:underline">Perguntar agora <Icon name="arrow" className="size-4" /></a></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-[#34233b] px-5 py-9 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><Brand inverse /><p className="text-sm text-white/65">Moda infantil feita de carinho, em Macapá. <span aria-hidden="true">♡</span></p><a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white/85 hover:text-yellow"><Icon name="location" className="size-4" /> Centro, Macapá – AP</a></div>
      <div className="mx-auto mt-7 max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-white/45">© {new Date().getFullYear()} Encanto do Bebê. Todos os direitos reservados.</div>
    </footer>
  </div>
}

export default App
