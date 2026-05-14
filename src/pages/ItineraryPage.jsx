import { useEffect, useState } from "react";

const imageBase = "https://images.unsplash.com";

const colorThemes = {
  indigo: { primary: "from-indigo-600 to-violet-600", solid: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  emerald: { primary: "from-emerald-500 to-teal-600", solid: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  rose: { primary: "from-rose-500 to-pink-600", solid: "bg-rose-600", light: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
  orange: { primary: "from-orange-500 to-amber-500", solid: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
  sky: { primary: "from-sky-500 to-cyan-600", solid: "bg-sky-600", light: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
};

const tourMegaMenu = [
  { title: "Popular Tours", items: [["Golden Triangle", "Delhi, Agra, Jaipur", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=220&q=80`], ["Kashmir Tour", "Srinagar, Gulmarg, Pahalgam", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`], ["Kerala Tour", "Munnar, Alleppey, Kochi", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`], ["Rajasthan Tour", "Jaipur, Jodhpur, Udaipur", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`]] },
  { title: "Tour Themes", items: [["Family Holidays", "Safe & comfortable plans", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`], ["Honeymoon Tours", "Private romantic stays", `${imageBase}/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=220&q=80`], ["Festival Tours", "Holi, Diwali, Janmashtami", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`], ["Wildlife Tours", "Safari & jungle lodges", `${imageBase}/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=220&q=80`]] },
  { title: "India Zones", items: [["North India", "Delhi, Agra, Kashmir", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`], ["South India", "Kerala, Tamil Nadu", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`], ["West India", "Rajasthan, Goa, Gujarat", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`], ["North East", "Assam, Meghalaya, Sikkim", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`]] },
];

const itineraryDays = [
  { day: "Day 01", title: "Arrival in Delhi — Welcome to India", location: "Delhi", meals: "Dinner", stay: "4 Star Hotel in Delhi", drive: "Airport transfer", image: `${imageBase}/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80`, details: "Meet our representative at Delhi airport or railway station. Complete hotel check-in and start with India Gate, Qutub Minar, Lotus Temple and Connaught Place. Evening free for local markets and food experiences." },
  { day: "Day 02", title: "Delhi to Agra — Taj Mahal & Agra Fort", location: "Agra", meals: "Breakfast", stay: "Heritage Hotel in Agra", drive: "Approx 4 hrs", image: `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80`, details: "Drive to Agra via Yamuna Expressway. Visit the Taj Mahal, Agra Fort and Mehtab Bagh during sunset. Explore marble handicrafts and local Mughlai food options in the evening." },
  { day: "Day 03", title: "Agra to Jaipur via Fatehpur Sikri", location: "Jaipur", meals: "Breakfast", stay: "Boutique Hotel in Jaipur", drive: "Approx 5 hrs", image: `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80`, details: "After breakfast, proceed to Jaipur with an en-route visit to Fatehpur Sikri. Reach Jaipur by evening, check in and enjoy leisure time around the Pink City markets." },
  { day: "Day 04", title: "Jaipur Sightseeing — Forts, Palaces & Culture", location: "Jaipur", meals: "Breakfast", stay: "Boutique Hotel in Jaipur", drive: "Local sightseeing", image: `${imageBase}/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=900&q=80`, details: "Visit Amber Fort, City Palace, Jantar Mantar, Hawa Mahal and Jal Mahal photo stop. Evening reserved for shopping, traditional food and optional cultural dinner." },
  { day: "Day 05", title: "Jaipur to Delhi — Departure", location: "Delhi", meals: "Breakfast", stay: "Not included", drive: "Approx 5 hrs", image: `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80`, details: "After breakfast, drive back to Delhi. Drop at airport, railway station or hotel with beautiful memories of your Golden Triangle India tour." },
];

const inclusions = ["Private AC vehicle for complete tour", "Hotel accommodation with breakfast", "Driver allowance, toll tax and parking", "Local sightseeing as per itinerary", "24/7 travel support during trip", "Customizable day-wise itinerary"];
const exclusions = ["Flight or train tickets", "Monument entry tickets", "Lunch, dinner and personal expenses", "Guide charges unless added", "Camera fee or adventure activity cost", "Anything not mentioned in inclusions"];

const hotels = [
  ["Delhi", "The Metropolitan Style Hotel", "4 Star", `${imageBase}/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80`],
  ["Agra", "Heritage Boutique Stay", "4 Star", `${imageBase}/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80`],
  ["Jaipur", "Royal Haveli Experience", "Heritage", `${imageBase}/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80`],
];

const gallery = [
  `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`,
];

const tourHighlights = [
  ["Private Golden Triangle route", "Delhi, Agra and Jaipur covered in one smooth journey", "🏛️"],
  ["Taj Mahal timing support", "Early morning or flexible Taj Mahal visit planning", "🌅"],
  ["AC vehicle with driver", "Clean private cab with experienced route driver", "🚘"],
  ["Handpicked hotel stays", "Comfortable hotels with breakfast and verified locations", "🏨"],
  ["Flexible local time", "Shopping, food and cultural stops can be adjusted", "🛍️"],
  ["Live travel assistance", "Phone and WhatsApp support during the complete trip", "📞"],
];

const routeStops = ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur", "Delhi"];

const terms = [
  "Package price is based on minimum 2 travellers and selected hotel category.",
  "Monument tickets, guide fee and meals not mentioned in inclusions are extra.",
  "Hotel rooms are subject to availability at the time of booking confirmation.",
  "Cancellation and refund policy will be shared before final booking confirmation.",
  "Itinerary can be modified due to weather, traffic, local rules or operational reasons.",
];

const reviews = [
  ["Amit Sharma", "Delhi", "The itinerary was perfectly planned. Taj Mahal sunrise and Jaipur sightseeing were the best parts of our family trip.", "4.9", `${imageBase}/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80`],
  ["Priya Mehta", "Mumbai", "Hotels, driver and support were excellent. We changed our plan midway and the team handled it smoothly.", "5.0", `${imageBase}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80`],
  ["Rohit & Neha", "Bengaluru", "Very comfortable Golden Triangle tour. The route was not rushed and the booking team was always available on WhatsApp.", "4.8", `${imageBase}/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80`],
];

const blogs = [
  ["Best Time to Visit Delhi Agra Jaipur", "Plan your Golden Triangle tour with ideal weather, festivals and travel tips.", "6 min read", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`],
  ["Taj Mahal Travel Guide for First-Time Visitors", "Timings, entry tips, photography points and common mistakes to avoid.", "8 min read", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`],
  ["Jaipur Sightseeing Places You Should Not Miss", "A simple guide to forts, palaces, markets and cultural experiences in Jaipur.", "7 min read", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
];

const faqs = [
  ["Can I customize this itinerary?", "Yes, hotels, duration, sightseeing, vehicle type and route can be customized as per your budget and travel style."],
  ["Is this tour suitable for family travellers?", "Yes, this itinerary is designed for families, couples, senior citizens and small groups with comfortable travel timing."],
  ["Are monument tickets included?", "No, monument tickets are normally paid directly by travellers. They can be added on request."],
  ["Which vehicle will be provided?", "Vehicle depends on group size. Sedan, SUV, Innova Crysta, Tempo Traveller or coach can be arranged."],
  ["How do I confirm booking?", "Submit the enquiry form or chat with our team. After final quotation, booking can be confirmed with advance payment."],
];

function MegaMenu({ columns, activeTheme }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[1040px] -translate-x-1/2 translate-y-4 rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-2xl shadow-slate-900/10 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
      <div className="grid grid-cols-3 gap-5">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className={`mb-3 text-[13px] font-black uppercase tracking-[0.14em] ${activeTheme.text}`}>{col.title}</h3>
            <div className="space-y-3">
              {col.items.map(([name, desc, img]) => (
                <a key={name} href="#" className="flex gap-3 rounded-xl p-2 transition hover:bg-slate-50">
                  <img src={img} alt={name} className="h-14 w-16 rounded-lg object-cover" />
                  <span><b className="block text-[13px] font-black text-slate-950">{name}</b><small className="text-[12px] font-semibold text-slate-500">{desc}</small></span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-5 rounded-xl bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
        <b className="text-[16px]">Need custom itinerary?</b>
        <span className="ml-3 text-[13px] font-semibold text-white/85">Share your date, budget and destination to get a personalized plan.</span>
        <a href="#enquiry" className="float-right rounded-lg bg-white px-4 py-2 text-[12px] font-black text-slate-900">Plan Now</a>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, activeTheme }) {
  return (
    <div className="mb-6">
      {eyebrow ? <p className={`mb-1 text-[12px] font-black uppercase tracking-[0.2em] ${activeTheme.text}`}>{eyebrow}</p> : null}
      <h2 className="text-[28px] font-black tracking-[-0.04em] text-slate-950 md:text-[34px]">{title}</h2>
      {text ? <p className="mt-2 max-w-3xl text-[15px] font-medium leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function ChatLeadBot({ activeTheme }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({ destination: "", date: "", travellers: "", budget: "", name: "", phone: "" });
  const questions = [
    ["destination", "Which destination are you planning?", "e.g. Golden Triangle, Kashmir, Kerala"],
    ["date", "What is your travel date?", "e.g. 15 June 2026"],
    ["travellers", "How many travellers?", "e.g. 2 adults, 1 child"],
    ["budget", "Approx budget per person?", "e.g. ₹20,000"],
    ["name", "Your name?", "Enter your full name"],
    ["phone", "Your WhatsApp number?", "Enter mobile number"],
  ];
  useEffect(() => { const timer = setTimeout(() => setOpen(true), 4500); return () => clearTimeout(timer); }, []);
  const current = questions[step];
  const done = step >= questions.length;
  const next = () => { if (!current || !lead[current[0]].trim()) return; setStep(step + 1); };
  return (
    <>
      {!open && <button onClick={() => setOpen(true)} className={`fixed bottom-24 right-7 z-[90] rounded-full bg-gradient-to-r ${activeTheme.primary} px-5 py-4 text-[14px] font-black text-white shadow-2xl`}>💬 Plan Trip</button>}
      {open && <div className="fixed bottom-24 right-7 z-[90] w-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl max-sm:right-4 max-sm:w-[calc(100vw-2rem)]">
        <div className={`bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}><div className="flex justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/75">Travel Assistant</p><h3 className="text-[18px] font-black">Create Your Tour Lead</h3></div><button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full bg-white/15">×</button></div></div>
        <div className="p-4">
          <div className="mb-3 rounded-2xl bg-slate-50 p-3 text-[13px] font-semibold leading-6 text-slate-700">Hi 👋 Answer quick questions and our travel expert will contact you.</div>
          {!done ? <div className="rounded-2xl border border-slate-200 p-3"><label className="mb-2 block text-[13px] font-black">{current[1]}</label><input value={lead[current[0]]} onChange={(e) => setLead({ ...lead, [current[0]]: e.target.value })} onKeyDown={(e) => e.key === "Enter" && next()} placeholder={current[2]} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none" /><button onClick={next} className={`mt-3 w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[13px] font-black text-white`}>Next</button></div> : <div className="rounded-2xl bg-emerald-50 p-4"><h4 className="font-black text-emerald-700">Lead Ready ✅</h4><button onClick={() => window.open(`https://wa.me/919999999999?text=New Tour Lead:%0AName: ${lead.name}%0APhone: ${lead.phone}%0ADestination: ${lead.destination}%0ADate: ${lead.date}%0ATravellers: ${lead.travellers}%0ABudget: ${lead.budget}`, "_blank")} className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-3 text-[13px] font-black text-white">Send Lead on WhatsApp</button></div>}
        </div>
      </div>}
    </>
  );
}

export default function TourItineraryPage() {
  const [theme, setTheme] = useState("indigo");
  const activeTheme = colorThemes[theme];
  const [activeDay, setActiveDay] = useState(0);

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="fixed left-5 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl backdrop-blur lg:flex">
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">Theme</span>
        {Object.entries(colorThemes).map(([key, value]) => <button key={key} onClick={() => setTheme(key)} className={`h-10 w-10 rounded-full bg-gradient-to-br ${value.primary} transition hover:scale-110 ${theme === key ? "ring-4 ring-slate-200" : ""}`} aria-label={key} />)}
      </div>

      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-2 text-[12px] font-semibold text-slate-700">
          <div className="flex items-center gap-5"><a href="tel:18001234567" className={`${activeTheme.text} hover:opacity-80`}>☎ Toll Free: <b>1800-123-4567</b></a><span className="hidden sm:inline-flex">🎧 24/7 Support</span><a href="mailto:hello@mustindiatravel.com" className={`hidden md:inline-flex ${activeTheme.text}`}>✉ hello@mustindiatravel.com</a></div>
          <div className="hidden items-center gap-5 md:flex"><a href="#">Offers</a><a href="#">Travel Guide</a><a href="#">Contact Us</a><a href="#">Login / Sign Up</a></div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2"><span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${activeTheme.primary} text-white shadow-lg`}>📍</span><span className="leading-[0.95]"><b className={`block text-[22px] font-black ${activeTheme.text}`}>Must India</b><b className={`block text-[22px] font-black ${activeTheme.text}`}>Travel</b></span></a>
          <nav className="relative hidden items-center gap-8 text-[14px] font-bold text-slate-800 lg:flex">
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>Explore Tours⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>

            <div className="group relative py-3">
              <a href="#" className="hover:opacity-80">Destinations⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>

            <div className="group relative py-3">
              <a href="#" className="hover:opacity-80">Themes⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>

            <div className="group relative py-3">
              <a href="#" className="hover:opacity-80">India Zones⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>

            <div className="group relative py-3">
              <a href="#" className="hover:opacity-80">Festival Tours⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>

            <a href="#" className="py-3 hover:opacity-80">Top Deals</a>
            <a href="#" className="py-3 hover:opacity-80">Blog</a>
          </nav>
          <a href="#enquiry" className={`rounded-lg bg-gradient-to-r ${activeTheme.primary} px-7 py-3 text-[14px] font-black text-white shadow-lg`}>Get Quote</a>
        </div>
      </header>

      <section className="bg-gradient-to-b from-[#f8fbff] to-white pb-8 pt-6">
        <div className="mx-auto max-w-[1360px] px-5">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[12px] font-bold text-slate-500">
            <a href="#" className="hover:text-slate-900">Home</a><span>/</span><a href="#" className="hover:text-slate-900">India Tour Packages</a><span>/</span><span className={activeTheme.text}>Golden Triangle Tour Itinerary</span>
          </div>

          <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className={`${activeTheme.light} ${activeTheme.text} rounded-full px-4 py-2 text-[12px] font-black`}>Best Seller</span>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-[12px] font-black text-emerald-600">Free Cancellation</span>
                <span className="rounded-full bg-amber-50 px-4 py-2 text-[12px] font-black text-amber-600">Part Payment Available</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-[12px] font-black text-slate-600">Private Tour</span>
              </div>
              <h1 className="max-w-4xl text-[38px] font-black leading-[1.06] tracking-[-0.04em] text-slate-950 md:text-[54px]">Golden Triangle India Tour Itinerary</h1>
              <p className="mt-4 max-w-3xl text-[16px] font-medium leading-8 text-slate-600">A beautifully planned Delhi, Agra and Jaipur itinerary for travellers who want India’s monuments, culture, food, shopping and comfortable private transport in one perfect trip.</p>
              <div className="mt-6 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
                {[["5 Days", "Duration", "🗓️"], ["Delhi • Agra • Jaipur", "Route", "📍"], ["Private Cab", "Transport", "🚘"], ["4.8/5", "Traveller Rating", "⭐"]].map(([a, b, icon]) => (
                  <div key={b} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-md">
                    <span className="mb-2 block text-xl">{icon}</span><b className="block text-[16px] font-black text-slate-950">{a}</b><span className="text-[12px] font-bold text-slate-500">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3"><a href="#itinerary" className={`rounded-2xl bg-gradient-to-r ${activeTheme.primary} px-6 py-4 text-[13px] font-black text-white shadow-lg`}>View Day Plan</a><a href="#enquiry" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-[13px] font-black text-slate-700 hover:bg-slate-50">Get Custom Quote</a></div>
            </div>
            <div className="relative h-[430px] overflow-hidden rounded-[32px] bg-slate-900 shadow-2xl">
              <img src={`${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80`} alt="Golden Triangle India Tour" className="h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur"><p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Starting Price</p><b className="text-[22px] font-black text-slate-950">₹18,999</b><span className="text-[12px] font-bold text-slate-500"> / person</span></div>
              <div className="absolute bottom-5 left-5 right-5 text-white"><p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/75">Signature India Route</p><h2 className="mt-1 text-[28px] font-black">Delhi • Agra • Jaipur</h2><div className="mt-4 flex flex-wrap gap-2">{routeStops.map((stop, index) => <span key={`${stop}-${index}`} className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-black backdrop-blur">{index + 1}. {stop}</span>)}</div></div>
            </div>
          </div>
          <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 md:grid-cols-5">{routeStops.map((stop, index) => (<div key={`${stop}-route`} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${activeTheme.primary} text-[12px] font-black text-white`}>{index + 1}</span><div><b className="block text-[13px] font-black text-slate-950">{stop}</b><small className="text-[11px] font-bold text-slate-500">Route stop</small></div></div>))}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-7 px-5 py-8 lg:grid-cols-[1fr_380px]">
        <div>
          <section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-100 pb-4 max-sm:flex-col max-sm:items-start">
              <div><p className={`mb-1 text-[11px] font-black uppercase tracking-[0.18em] ${activeTheme.text}`}>Tour Highlights</p><h2 className="text-[28px] font-black tracking-[-0.04em] text-slate-950">Why Travellers Choose This Tour</h2></div>
              <div className="flex flex-wrap gap-2"><a href="#enquiry" className={`rounded-xl bg-gradient-to-r ${activeTheme.primary} px-5 py-3 text-[12px] font-black text-white shadow-lg`}>Customize Tour</a><a href="https://wa.me/919999999999" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-[12px] font-black text-slate-700 hover:bg-slate-50">WhatsApp Expert</a></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tourHighlights.map(([title, desc, icon]) => (<div key={title} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-slate-200 hover:bg-white hover:shadow-md"><div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${activeTheme.primary} text-sm text-white shadow-md`}>{icon}</div><div><h3 className="text-[13px] font-black leading-5 text-slate-900">{title}</h3><p className="mt-1 text-[11px] font-semibold leading-5 text-slate-500">{desc}</p></div></div>))}
            </div>
          </section>

          <div id="itinerary" />
          <SectionTitle eyebrow="Day wise plan" title="Your Complete 5-Day Tour Itinerary" text="Each day is structured for comfortable travel, sightseeing, local experience and enough flexibility for custom changes." activeTheme={activeTheme} />
          <div className="space-y-5">
            {itineraryDays.map((item, index) => (
              <article key={item.day} className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-xl ${activeDay === index ? activeTheme.border : 'border-slate-200'}`}>
                <button onClick={() => setActiveDay(activeDay === index ? -1 : index)} className="flex w-full flex-col gap-4 p-4 text-left md:flex-row">
                  <div className="relative shrink-0 overflow-hidden rounded-2xl md:w-64">
                    <img src={item.image} alt={item.title} className="h-44 w-full object-cover transition duration-500 hover:scale-105" />
                    <span className={`absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black ${activeTheme.text} backdrop-blur`}>{item.day}</span>
                  </div>
                  <span className="flex-1 py-1">
                    <div className="flex items-start justify-between gap-4"><h3 className="text-[24px] font-black tracking-[-0.03em] text-slate-950">{item.title}</h3><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${activeTheme.light} text-[13px] font-black ${activeTheme.text}`}>{activeDay === index ? '−' : '+'}</span></div>
                    <p className="mt-2 text-[14px] font-medium leading-7 text-slate-600">{item.details}</p>
                    <span className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">{[["📍", item.location], ["🍽️", item.meals], ["🏨", item.stay], ["🚗", item.drive]].map(([icon, text]) => <small key={text} className="rounded-xl bg-slate-50 px-3 py-2 text-[12px] font-bold text-slate-600">{icon} {text}</small>)}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>

          <section className="mt-10"><SectionTitle eyebrow="Stay options" title="Suggested Hotels for This Tour" text="Hotel category can be changed to budget, 3-star, 4-star, 5-star or luxury heritage as per your requirement." activeTheme={activeTheme} /><div className="grid gap-5 md:grid-cols-3">{hotels.map(([city, name, type, img]) => <article key={city} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><img src={img} alt={name} className="h-40 w-full object-cover" /><div className="p-4"><span className={`text-[12px] font-black ${activeTheme.text}`}>{city}</span><h3 className="mt-1 text-[16px] font-black">{name}</h3><p className="mt-1 text-[13px] font-semibold text-slate-500">{type} • Breakfast Included</p></div></article>)}</div></section>

          <section className="mt-10"><SectionTitle eyebrow="Gallery" title="Tour Gallery & Travel Moments" text="A visual preview of the monuments, culture and experiences covered in this route." activeTheme={activeTheme} /><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{gallery.map((img, i) => <div key={img} className={`overflow-hidden rounded-2xl ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}><img src={img} alt="Tour gallery" className={`${i === 0 ? 'h-[330px]' : 'h-40'} w-full object-cover transition hover:scale-105`} /></div>)}</div></section>

          <section className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"><div className="mb-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">✓</span><h2 className="text-[24px] font-black text-emerald-700">Tour Inclusions</h2></div><ul className="space-y-3">{inclusions.map((x) => <li key={x} className="flex gap-3 text-[14px] font-bold leading-6 text-slate-700"><span className="mt-0.5 text-emerald-600">✓</span>{x}</li>)}</ul></div>
            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm"><div className="mb-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-50 text-xl text-rose-600">×</span><h2 className="text-[24px] font-black text-rose-700">Tour Exclusions</h2></div><ul className="space-y-3">{exclusions.map((x) => <li key={x} className="flex gap-3 text-[14px] font-bold leading-6 text-slate-700"><span className="mt-0.5 text-rose-600">×</span>{x}</li>)}</ul></div>
          </section>

          <section className="mt-10"><SectionTitle eyebrow="Reviews" title="Guest Reviews from Recent Golden Triangle Travellers" text="Real-style review cards designed to increase trust and help visitors take faster enquiry action." activeTheme={activeTheme} />
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map(([name, city, text, rating, img]) => (
                <article key={name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3"><img src={img} alt={name} className="h-12 w-12 rounded-full object-cover" /><div><h3 className="text-[14px] font-black text-slate-950">{name}</h3><p className="text-[12px] font-bold text-slate-500">{city}</p></div></div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[12px] font-black text-amber-600">★ {rating}</span>
                  </div>
                  <p className="text-[13px] font-medium leading-6 text-slate-600">“{text}”</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10"><SectionTitle eyebrow="Travel blog" title="Latest Travel Guides for This Route" text="Helpful travel articles that support SEO, answer user questions and improve internal linking for package pages." activeTheme={activeTheme} />
            <div className="grid gap-5 md:grid-cols-3">
              {blogs.map(([title, text, read, img]) => (
                <article key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={img} alt={title} className="h-44 w-full object-cover" />
                  <div className="p-5"><span className={`text-[12px] font-black ${activeTheme.text}`}>{read}</span><h3 className="mt-2 text-[18px] font-black leading-snug text-slate-950">{title}</h3><p className="mt-2 text-[13px] font-medium leading-6 text-slate-600">{text}</p><a href="#" className={`mt-4 inline-flex text-[13px] font-black ${activeTheme.text}`}>Read Blog →</a></div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10"><SectionTitle eyebrow="Terms" title="Important Terms & Conditions" text="Clear booking terms help travellers understand pricing, inclusions and travel responsibilities before confirmation." activeTheme={activeTheme} />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3">
                {terms.map((term) => <li key={term} className="flex gap-3 text-[13px] font-semibold leading-6 text-slate-700"><span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${activeTheme.light} text-[11px] ${activeTheme.text}`}>i</span>{term}</li>)}
              </ul>
            </div>
          </section>

          <section className="mt-10"><SectionTitle eyebrow="Questions" title="Frequently Asked Questions" text="Clear answers before you book your India tour package." activeTheme={activeTheme} /><div className="grid gap-4 md:grid-cols-2">{faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-slate-200 bg-white p-4"><summary className="cursor-pointer text-[14px] font-black text-slate-950">{q}</summary><p className="mt-3 text-[13px] font-medium leading-6 text-slate-600">{a}</p></details>)}</div></section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start" id="enquiry">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
            <div className={`bg-gradient-to-r ${activeTheme.primary} p-5 text-white`}><p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/75">Instant Quote</p><h2 className="mt-1 text-[24px] font-black">Customize This Tour</h2><p className="mt-2 text-[13px] font-semibold text-white/85">Get best price with hotel, cab and sightseeing customization.</p></div>
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 text-[12px] font-bold text-slate-600">Usually replies within <b className={activeTheme.text}>10 minutes</b></div>
            <form className="space-y-3 p-5">
              <input placeholder="Full Name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white" />
              <input placeholder="Mobile / WhatsApp Number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white" />
              <div className="grid grid-cols-2 gap-3"><input placeholder="Travel Date" type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white" /><select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white"><option>2 Travellers</option><option>Family with Kids</option><option>Group Tour</option></select></div>
              <textarea placeholder="Tell us your hotel category, budget or special request" rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white" />
              <button type="button" className={`w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-5 py-4 text-[14px] font-black text-white shadow-lg`}>Send Enquiry</button>
              <a href="https://wa.me/919999999999" className="block w-full rounded-xl bg-emerald-600 px-5 py-4 text-center text-[14px] font-black text-white">Chat on WhatsApp</a>
            </form>
          </div>
          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-[20px] font-black">Package Price</h3><p className="mt-2 text-[13px] font-semibold text-slate-500">Starting from</p><div className="mt-1 text-[32px] font-black text-slate-950">₹18,999 <span className="text-[13px] text-slate-500">/ person</span></div><div className="mt-4 rounded-2xl bg-emerald-50 p-3 text-[12px] font-bold text-emerald-700">Save more with early booking and group travellers.</div><ul className="mt-4 space-y-2 text-[13px] font-bold text-slate-600"><li>✓ Private cab included</li><li>✓ Hotel with breakfast</li><li>✓ No hidden charges</li><li>✓ Customizable itinerary</li></ul></div>
          <div className="mt-5 grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-[20px] font-black">Need Help Now?</h3><a href="tel:18001234567" className={`rounded-xl border ${activeTheme.border} ${activeTheme.light} px-4 py-3 text-center text-[14px] font-black ${activeTheme.text}`}>☎ Call: 1800-123-4567</a><a href="https://wa.me/919999999999" className="rounded-xl bg-emerald-600 px-4 py-3 text-center text-[14px] font-black text-white">💬 WhatsApp: +91 99999 99999</a><p className="text-center text-[12px] font-semibold text-slate-500">Get itinerary, hotel options and latest price instantly.</p></div>
          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-[18px] font-black">Why Book with Us?</h3><div className="mt-4 space-y-3">{['Verified hotels', 'Experienced drivers', 'Flexible payment', 'Live trip support'].map((x) => <div key={x} className="flex items-center gap-3 text-[13px] font-bold text-slate-600"><span className={`grid h-7 w-7 place-items-center rounded-lg ${activeTheme.light} ${activeTheme.text}`}>✓</span>{x}</div>)}</div></div>
        </aside>
      </section>

      <ChatLeadBot activeTheme={activeTheme} />
      <footer className="mt-8 bg-[#0b1a36] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.9fr_.9fr_.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${activeTheme.primary} text-xl text-white shadow-xl`}>
                  📍
                </span>
                <div>
                  <h3 className="text-[24px] font-black">Must India Travel</h3>
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-slate-400">India Tour Portal</p>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-[13px] font-medium leading-7 text-slate-300">
                SEO-optimized India travel portal with customized tour packages, luxury holidays, pilgrimage tours, wildlife safaris and private transport services.
              </p>

              <div className="mt-6 flex gap-3">
                {['FB','IG','YT','WA'].map((x) => (
                  <a key={x} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[12px] font-black transition hover:bg-white/20">
                    {x}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[15px] font-black">Top Destinations</h3>
              {['Kashmir','Kerala','Rajasthan','Goa','Varanasi','Leh Ladakh'].map((x) => (
                <a key={x} href="#" className="block py-2 text-[13px] font-medium text-slate-300 hover:text-white">
                  {x}
                </a>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-[15px] font-black">Travel Themes</h3>
              {['Family Tours','Honeymoon Tours','Wildlife Tours','Pilgrimage Tours','Luxury Tours','Adventure Tours'].map((x) => (
                <a key={x} href="#" className="block py-2 text-[13px] font-medium text-slate-300 hover:text-white">
                  {x}
                </a>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-[15px] font-black">Quick Links</h3>
              {['About Us','Contact Us','Travel Blog','FAQ','Terms & Conditions','Privacy Policy'].map((x) => (
                <a key={x} href="#" className="block py-2 text-[13px] font-medium text-slate-300 hover:text-white">
                  {x}
                </a>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-[15px] font-black">Need Help Planning?</h3>

              <div className="space-y-3">
                <a href="tel:18001234567" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                  <span className="text-lg">📞</span>
                  <span>
                    <b className="block text-[13px] font-black">Call Us</b>
                    <small className="text-[12px] font-semibold text-slate-400">1800-123-4567</small>
                  </span>
                </a>

                <a href="https://wa.me/919999999999" className="flex items-center gap-3 rounded-2xl bg-emerald-600 p-4 transition hover:bg-emerald-500">
                  <span className="text-lg">💬</span>
                  <span>
                    <b className="block text-[13px] font-black">WhatsApp Expert</b>
                    <small className="text-[12px] font-semibold text-white/80">Instant Tour Assistance</small>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-[12px] font-semibold text-slate-400 md:flex-row">
            <p>© 2026 Must India Travel. All Rights Reserved.</p>
            <p>Built with latest 2026 SEO & Core Web Vitals optimization.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
