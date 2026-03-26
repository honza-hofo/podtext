export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  content?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "jak-jsme-tocili-reportaz-v-opustene-tovarne",
    title: "Jak jsme točili reportáž v opuštěné továrně",
    excerpt:
      "Vstoupili jsme do areálu bývalé textilky v severních Čechách. Kamera běžela, vzduch páchl po rezavém železe a starých příbězích. Takhle vznikala naše nejnovější reportáž.",
    category: "Za kamerou",
    author: "Tomáš Horák",
    date: "2026-03-20",
    readingTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=450&fit=crop",
    content: `Vstoupili jsme do areálu bývalé textilky v severních Čechách kolem šesté ráno. Slunce ještě neprorazilo mlhu, která se plazila po podlaze haly jako filmový efekt, o který jsme si ani nemuseli říkat.

Kameraman Petr vytáhl gimbal a začal natáčet. Každý krok na rozbitém betonu se ozýval ozvěnou. Místnost za místností, patro za patrem — továrna vyprávěla svůj příběh bez jediného slova.

## Příprava, která trvala měsíce

Než jsme sem vůbec dorazili, strávili jsme tři měsíce přípravami. Procházeli jsme archivy, mluvili s bývalými zaměstnanci, hledali staré fotografie. Chtěli jsme, aby reportáž nebyla jen o opuštěné budově, ale o lidech, kteří jí dali život.

Marie Dvořáková, která v textilce pracovala třicet let, nám řekla: „Každé ráno jsem šla kolem těch strojů a věděla jsem, že dělám něco, co má smysl. Teď je to jen ticho."

## Technické výzvy

Natáčení v opuštěných budovách má svá specifika. Světlo se mění každou minutu, akustika je nepředvídatelná a nikdy nevíte, jestli podlaha pod vámi vydrží. Vzali jsme s sebou kompaktní LED panely, dva mikrofony a spoustu nervů.

> „Nejlepší záběry vznikají tam, kde se člověk bojí. Tam, kde je třeba překonat sám sebe." — Petr Novotný, kameraman

Výsledkem je patnáctiminutová reportáž, která zachycuje nejen rozklad průmyslové éry, ale hlavně příběhy lidí, kteří za ní stojí. A právě to je pro nás jádro každé dobré reportáže — člověk.`,
  },
  {
    slug: "michal-novak-podnikani-jako-zpusob-mysleni",
    title: "Michal Novák: Podnikání jako způsob myšlení",
    excerpt:
      "Rozhovor s jedním z nejzajímavějších českých podnikatelů o tom, jak přemýšlí o riziku, neúspěchu a budoucnosti malých firem.",
    category: "Rozhovor",
    author: "Klára Malá",
    date: "2026-03-18",
    readingTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    content: `Michal Novák sedí v kavárně na Vinohradech a míchá si espresso. Na první pohled nevypadá jako člověk, který řídí firmu se stem zaměstnanci. Žádný oblek, žádné hodinky za statisíce. Jen tričko, rifle a klidný pohled člověka, který ví, co chce.

## Začátky v garáži

„Začínal jsem v garáži u rodičů, jako každý slušný podnikatel," směje se. „Ale vážně — neměl jsem nic. Žádný kapitál, žádné kontakty. Měl jsem jen nápad a ochotu pracovat šestnáct hodin denně."

Ten nápad? Platforma pro malé výrobce potravin, která jim pomáhá dostat produkty do obchodů. Dnes přes ni prodává více než 400 výrobců po celé republice.

## O neúspěchu

„Neúspěch je součást hry. Důležité je, jak rychle se zvednete. Já jsem padal mnohokrát — první startup zkrachoval, druhý jsme museli pivotovat třikrát. Ale pokaždé jsem se naučil něco, co mi pomohlo dál."

> „Podnikání není o tom mít pravdu. Je to o tom mít odvahu být veřejně v neprávu a učit se z toho."

## Budoucnost

Michal vidí budoucnost optimisticky. „Česko má neuvěřitelný potenciál. Máme šikovné lidi, technické vzdělání, kreativitu. Chybí nám jen odvaha snít ve velkém."`,
  },
  {
    slug: "5-chyb-v-obsahu-na-linkedin",
    title: "5 chyb v obsahu na LinkedIn, které vás stojí klienty",
    excerpt:
      "LinkedIn je nejsilnější B2B platforma. Přesto na ní většina firem dělá stále stejné chyby. Pojďme si je rozebrat — a hlavně ukázat, jak na to lépe.",
    category: "Redakce",
    author: "Jana Veselá",
    date: "2026-03-15",
    readingTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    content: `LinkedIn má v Česku přes 2 miliony uživatelů. Pro B2B firmy je to zlatý důl. Přesto většina firem na něm funguje špatně. Zde je pět nejčastějších chyb.

## 1. Firemní stránka bez osobnosti

Vaše firemní stránka vypadá jako výroční zpráva? To je problém. Lidé chtějí vidět lidi, ne logotypy. Ukažte tým, sdílejte příběhy, buďte autentičtí.

## 2. Příliš mnoho prodeje

Každý druhý příspěvek je „kupte si náš produkt"? LinkedIn není billboardová plocha. Sdílejte hodnotu — tipy, zkušenosti, zajímavá data.

## 3. Nepravidelnost

Jeden post za měsíc nestačí. Algoritmus LinkedIn odměňuje pravidelnost. Ideální je 2–3 příspěvky týdně.

## 4. Ignorování komentářů

Někdo vám napsal komentář a vy neodpověděli? To je jako kdyby k vám přišel zákazník do obchodu a vy se na něj ani nepodívali.

## 5. Žádná strategie

Postujete co vás zrovna napadne? Bez strategie je LinkedIn jen ztráta času. Definujte cílovou skupinu, témata a frekvenci.

> „Content marketing bez strategie je jako auto bez volantu. Jedete, ale nevíte kam."`,
  },
  {
    slug: "nova-era-firemnich-podcastu",
    title: "Nová éra firemních podcastů",
    excerpt:
      "Podcasty už dávno nejsou doménou nadšenců se sluchátky. Firmy je objevily jako mocný nástroj pro budování značky a důvěry u zákazníků.",
    category: "Podcast",
    author: "Martin Černý",
    date: "2026-03-12",
    readingTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop",
    content: `Firemní podcasty zažívají boom. A není divu — je to intimní formát, který buduje důvěru lépe než jakýkoliv reklamní banner.

## Proč podcast?

Podcast je osobní. Posluchač vás má v uchu, často při cestě do práce nebo při vaření. Vzniká vztah, jaký reklama nikdy nevytvoří.

## Co funguje

Nejúspěšnější firemní podcasty nehrají na prodej. Místo toho sdílejí expertise, pozvou zajímavé hosty a mluví o tématech, která jejich publikum skutečně zajímají.

## Naše zkušenost

Za poslední rok jsme pomohli spustit pět firemních podcastů. Každý z nich měl do tří měsíců přes tisíc pravidelných posluchačů. Klíč? Kvalitní zvuk, silný koncept a pravidelnost.

> „Podcast je jako budování přátelství. Trvá to, ale výsledek stojí za to."`,
  },
  {
    slug: "vitana-pribehy-za-receptem",
    title: "Vitana: Příběhy za receptem",
    excerpt:
      "Jak jsme pro Vitanu vytvořili seriál krátkých videí, které ukazují příběhy skutečných lidí za jejich oblíbenými recepty.",
    category: "Komerční",
    author: "Tomáš Horák",
    date: "2026-03-08",
    readingTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop",
  },
  {
    slug: "proc-video-reportaz-funguje-lepe-nez-clanek",
    title: "Proč video reportáž funguje lépe než článek",
    excerpt:
      "Data ukazují, že video reportáže mají o 340 % vyšší engagement než textový obsah. Ale není to jen o číslech — je to o emocích.",
    category: "Reportáž",
    author: "Jana Veselá",
    date: "2026-03-05",
    readingTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
  },
  {
    slug: "rozhovor-s-janem-kovacem-zakladatelem-startupu",
    title: 'Jan Kovač: \u201EKaždý startup potřebuje příběh\u201C',
    excerpt:
      "Zakladatel úspěšného technologického startupu o tom, proč je storytelling důležitější než produkt.",
    category: "Rozhovor",
    author: "Klára Malá",
    date: "2026-03-01",
    readingTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
  },
  {
    slug: "jak-natocit-firemni-video-ktere-nebude-nudit",
    title: "Jak natočit firemní video, které nebude nudit",
    excerpt:
      "Firemní videa mají pověst nudných spotů plných stockových záběrů. Ukážeme vám, jak na to jít jinak.",
    category: "Za kamerou",
    author: "Tomáš Horák",
    date: "2026-02-25",
    readingTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
  },
  {
    slug: "profil-petra-svobodova-reziserka",
    title: "Petra Svobodová: Režisérka, která mění českou reklamu",
    excerpt:
      "Petra Svobodová patří k nové generaci českých režisérek. Její práce pro značky jako Škoda, T-Mobile a Kofola ukazuje, že reklama může být umění.",
    category: "Profil",
    author: "Martin Černý",
    date: "2026-02-20",
    readingTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
  },
  {
    slug: "content-marketing-trendy-2026",
    title: "Content marketing v roce 2026: Co nás čeká?",
    excerpt:
      "AI, personalizace, krátká videa — trendy, které ovládnou content marketing v nadcházejícím roce.",
    category: "Redakce",
    author: "Jana Veselá",
    date: "2026-02-15",
    readingTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
  },
];

export const projects: Project[] = [
  {
    id: "vitana-kampan",
    title: "Vitana — kampaň pro sezónní produkty",
    category: "Firemní video",
    description:
      "Série krátkých spotů pro sociální sítě zaměřená na sezónní produktovou řadu. Natáčení v reálných kuchyních s reálnými lidmi.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
  {
    id: "podcast-podnikani-bez-filtru",
    title: "Podcast: Podnikání bez filtrů",
    category: "Podcast",
    description:
      "Týdenní podcast o podnikání v Česku. Rozhovory s lidmi, kteří staví firmy, dělají chyby a mluví o tom otevřeně.",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
  {
    id: "pid-nocni-provoz",
    title: "PID — reportáž o nočním provozu MHD",
    category: "Reportáž",
    description:
      "Dokumentární reportáž sledující noční provoz pražské MHD. Od dispečinku po poslední tramvaj — kdo drží město v chodu, když spíte?",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
  {
    id: "ceska-sporitelna-medailonky",
    title: "Česká spořitelna — medailonky zaměstnanců",
    category: "Medailonek",
    description:
      "Série portrétních videí představujících zaměstnance České spořitelny. Autentické příběhy lidí, kteří tvoří firmu zevnitř.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
  {
    id: "mall-socialni-site",
    title: "Mall.cz — obsah pro sociální sítě",
    category: "Sociální sítě",
    description:
      "Kompletní správa videoobsahu pro Instagram a TikTok. Reels, stories a short-form videa šitá na míru cílové skupině.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
  {
    id: "deloitte-firemni-report",
    title: "Deloitte — výroční reportáž",
    category: "Firemní video",
    description:
      "Výroční video zachycující klíčové momenty roku — od firemních akcí po charitativní projekty. Moderní střih, dynamický storytelling.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
    videoUrl: "#",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Tomáš Horák",
    role: "Kreativní ředitel & zakladatel",
    bio: "Patnáct let v médiích — od České televize přes komerční produkci až po vlastní studio. Věří, že každý příběh stojí za vyprávění.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Klára Malá",
    role: "Šéfredaktorka",
    bio: "Deset let novinářské praxe v tištěných i online médiích. Specializuje se na rozhovory a longformy. Její texty přečtete jedním dechem.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Martin Černý",
    role: "Vedoucí produkce",
    bio: "Od kameramana po producenta — Martin prošel celým produkčním procesem. Řídí projekty s přesností švýcarských hodinek.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Jana Veselá",
    role: "Content strategistka",
    bio: "Spojení dat a kreativity. Jana navrhuje obsahové strategie, které fungují — měřitelně a dlouhodobě.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export const workflowSteps = [
  {
    number: 1,
    title: "Briefing",
    description:
      "Sejdeme se, poslechneme si váš příběh a pochopíme, čeho chcete dosáhnout. Každý dobrý projekt začíná dobrým zadáním.",
  },
  {
    number: 2,
    title: "Koncept",
    description:
      "Navrhneme kreativní řešení — od scénáře přes vizuální styl až po distribuční plán. Vše schválíme společně.",
  },
  {
    number: 3,
    title: "Produkce",
    description:
      "Natáčíme, píšeme, tvoříme. S profesionálním týmem a technikou, které odpovídají ambicím projektu.",
  },
  {
    number: 4,
    title: "Postprodukce",
    description:
      "Střih, korekce, zvuk, grafika — dotahujeme každý detail, aby výsledek předčil očekávání.",
  },
  {
    number: 5,
    title: "Distribuce",
    description:
      "Pomůžeme obsah dostat k lidem. Sociální sítě, PR, kampaně — příběh neskončí posledním střihem.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
