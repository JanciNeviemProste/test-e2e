import './App.css'

const breeds = [
  {
    emoji: '🐕',
    name: 'Zlatý retriever',
    trait: 'Priateľský & Verný',
    desc: 'Ideálny rodinný pes, miluje deti a je ľahko cvičiteľný. Zlatý retriever je symbolom lásky a oddanosti.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    emoji: '🐩',
    name: 'Pudel',
    trait: 'Inteligentný & Elegantný',
    desc: 'Jeden z najinteligentnejších psov na svete. Pudel exceluje v cvičení a má hypoalergénnu srsť.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    emoji: '🐾',
    name: 'Border kólia',
    trait: 'Energický & Bystrý',
    desc: 'Najinteligentnejšie plemeno psa. Border kólia potrebuje veľa pohybu a mentálnu stimuláciu.',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    emoji: '🦮',
    name: 'Labrador',
    trait: 'Laskavý & Spoľahlivý',
    desc: 'Najpopulárnejší pes na svete. Labrádor je skvelý ako rodinný pes, sprievodca aj záchranár.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    emoji: '🐶',
    name: 'Beagle',
    trait: 'Zvedavý & Veselý',
    desc: 'Malý pes s veľkou osobnosťou. Beagle je zvedavý, hravý a miluje dobrodružstvá s rodinou.',
    color: 'from-rose-400 to-red-400',
  },
  {
    emoji: '🐕‍🦺',
    name: 'Nemecký ovčiak',
    trait: 'Odvážny & Ochranný',
    desc: 'Verný strážca a inteligentný pracovný pes. Nemecký ovčiak je obľúbený u polície aj v rodinách.',
    color: 'from-yellow-500 to-amber-600',
  },
]

const facts = [
  { icon: '❤️', text: 'Psy znižujú stres a krvný tlak u svojich majiteľov' },
  { icon: '🧠', text: 'Psy rozumejú viac ako 150 slov a gest' },
  { icon: '👃', text: 'Čuch psa je 10 000× citlivejší než ľudský' },
  { icon: '🏃', text: 'Pravidelná prechádzka so psom zlepšuje fyzické zdravie' },
  { icon: '😊', text: 'Mazlenie so psom uvoľňuje oxytocín – hormón šťastia' },
  { icon: '🌙', text: 'Psy spia 12–14 hodín denne a snia podobne ako ľudia' },
]

const careCards = [
  {
    icon: '🏃',
    title: 'Pohyb a cvičenie',
    items: [
      'Každodenné prechádzky minimálne 30 minút',
      'Hry a aktivity podľa plemena',
      'Sociálny kontakt s inými psami',
      'Plavanie a agility pre aktívne plemená',
    ],
    gradient: 'from-blue-50 to-sky-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: '🥗',
    title: 'Výživa a strava',
    items: [
      'Kvalitné granule alebo prirodzená strava',
      'Pravidelné porcie podľa veľkosti psa',
      'Čerstvá voda vždy k dispozícii',
      'Vyhnite sa čokoláde a cibuľi',
    ],
    gradient: 'from-green-50 to-emerald-50',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: '🩺',
    title: 'Zdravotná starostlivosť',
    items: [
      'Pravidelné návštevy veterinára',
      'Očkovanie a odčervovanie',
      'Ochrana pred kliešťami a blchami',
      'Čistenie zubov a uší',
    ],
    gradient: 'from-rose-50 to-pink-50',
    accent: 'text-rose-600',
    border: 'border-rose-100',
  },
  {
    icon: '🎓',
    title: 'Výchova a tréning',
    items: [
      'Začnite so základnými povely od šteniatka',
      'Pozitívne posilnenie funguje najlepšie',
      'Dôslednosť a trpezlivosť sú kľúčové',
      'Socializácia s ľuďmi a zvieratami',
    ],
    gradient: 'from-purple-50 to-violet-50',
    accent: 'text-purple-600',
    border: 'border-purple-100',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-bold text-xl text-amber-700">PsíSvet</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#plemena" className="hover:text-amber-600 transition-colors">Plemená</a>
            <a href="#fakty" className="hover:text-amber-600 transition-colors">Fakty</a>
            <a href="#starostlivost" className="hover:text-amber-600 transition-colors">Starostlivosť</a>
          </div>
          <a
            href="#kontakt"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Kontaktujte nás
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl" />
          <div className="absolute top-40 -left-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-300/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🐕</span>
            <span>Najlepší priatelia človeka</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Svet plný{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              psej lásky
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Objavte krásu a rozmanitosť psích plemien. Každý pes je jedinečný
            a prináša do života radosť, lásku a nezabudnuteľné chvíle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plemena"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Preskúmať plemená 🐾
            </a>
            <a
              href="#starostlivost"
              className="bg-white hover:bg-amber-50 text-gray-800 border-2 border-amber-200 hover:border-amber-400 px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:shadow-md"
            >
              Ako sa starať
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { num: '400+', label: 'Plemien psov' },
              { num: '1B+', label: 'Psov na svete' },
              { num: '15 000', label: 'Rokov domestikácie' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-amber-600">{s.num}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Breeds section */}
      <section id="plemena" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Obľúbené plemená
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Od malých spoločníkov až po veľkých strážcov — každé plemeno má svoju jedinečnú krásu a charakter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breeds.map((breed) => (
              <article
                key={breed.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-40 bg-gradient-to-br ${breed.color} flex items-center justify-center`}>
                  <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 select-none">
                    {breed.emoji}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{breed.name}</h3>
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {breed.trait}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed">{breed.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facts section */}
      <section id="fakty" className="py-20 px-6 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Vedeli ste, že...
            </h2>
            <p className="text-amber-100 text-lg max-w-xl mx-auto">
              Zaujímavé fakty o psoch, ktoré vás prekvapia a potešia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facts.map((fact) => (
              <div
                key={fact.text}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-colors"
              >
                <span className="text-4xl mb-3 block select-none">{fact.icon}</span>
                <p className="text-white font-medium leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care section */}
      <section id="starostlivost" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Starostlivosť o psa
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Zdravý a šťastný pes potrebuje lásku, výchovu a pravidelnú starostlivosť.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careCards.map((card) => (
              <div
                key={card.title}
                className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 border ${card.border}`}
              >
                <div className="text-5xl mb-4 select-none">{card.icon}</div>
                <h3 className={`text-2xl font-bold mb-5 ${card.accent}`}>{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-xs font-bold text-gray-600">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="kontakt" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-white/10 text-6xl select-none" aria-hidden="true">🐾</div>
            <div className="absolute bottom-4 right-4 text-white/10 text-6xl select-none" aria-hidden="true">🐾</div>

            <span className="text-5xl block mb-4 select-none">🐕</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Nájdite svojho ideálneho spoločníka
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Máte otázky o psích plemienach alebo starostlivosti? Sme tu pre vás.
              Kontaktujte nás a pomôžeme vám nájsť dokonalého psieho priateľa.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-cta" className="sr-only">Váš e-mail</label>
              <input
                id="email-cta"
                type="email"
                placeholder="Váš e-mail..."
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-7 py-3 rounded-xl font-bold transition-all hover:shadow-lg whitespace-nowrap"
              >
                Napíšte nám
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl select-none">🐾</span>
            <span className="font-bold text-gray-700">PsíSvet</span>
            <span>— Váš sprievodca svetom psov</span>
          </div>
          <p>© 2026 PsíSvet. Vytvorené s láskou pre všetkých milovníkov psov.</p>
        </div>
      </footer>
    </div>
  )
}
