import { useEffect } from "react";

const imageBase = "https://images.unsplash.com";

const agraPlaces = [
  {
    title: "Taj Mahal",
    desc: "World famous white marble monument and symbol of love built by Shah Jahan.",
    image: `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-landmark",
    timing: "6 AM - 6:30 PM",
    location: "Agra",
  },
  {
    title: "Agra Fort",
    desc: "Massive Mughal fort with royal palaces, courtyards and history.",
    image: `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-fort-awesome",
    timing: "6 AM - 6 PM",
    location: "Agra Fort",
  },
  {
    title: "Mehtab Bagh",
    desc: "Beautiful sunset garden with panoramic Taj Mahal riverfront views.",
    image: `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-tree-city",
    timing: "8 AM - 6 PM",
    location: "Yamuna River",
  },
  {
    title: "Fatehpur Sikri",
    desc: "UNESCO heritage Mughal city famous for Buland Darwaza and Jama Masjid.",
    image: `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-building-columns",
    timing: "6 AM - 6 PM",
    location: "40 KM from Agra",
  },
  {
    title: "Itmad-ud-Daulah",
    desc: "Known as Baby Taj, famous for intricate marble inlay work.",
    image: `${imageBase}/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-monument",
    timing: "8 AM - 12 AM",
    location: "Agra",
  },
  {
    title: "Akbar Tomb",
    desc: "Historic tomb of Emperor Akbar with Mughal gardens and architecture.",
    image: `${imageBase}/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80`,
    icon: "fa-place-of-worship",
    timing: "6 AM - 6 PM",
    location: "Sikandra",
  },
];

const faqs = [
  {
    question: "What is the best time to visit Agra?",
    answer: "October to March is considered the best time to visit Agra because the weather remains pleasant for Taj Mahal sightseeing, Agra Fort tours and outdoor photography.",
  },
  {
    question: "How many days are enough for Agra sightseeing?",
    answer: "1 to 2 days are enough to explore the major attractions in Agra including Taj Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri and local markets.",
  },
  {
    question: "Is Taj Mahal open every day?",
    answer: "Taj Mahal remains closed every Friday. It is open from sunrise to sunset on all other days for tourists and visitors.",
  },
  {
    question: "Can I book Agra local sightseeing by private cab?",
    answer: "Yes, private cab tours are one of the most popular ways to explore Agra comfortably with hotel pickup, driver assistance and flexible sightseeing.",
  },
  {
    question: "What are the top places to visit near Agra?",
    answer: "Mathura, Vrindavan, Fatehpur Sikri and Bharatpur Bird Sanctuary are among the most popular places to visit near Agra.",
  },
  {
    question: "Which is better for Taj Mahal visit — sunrise or sunset?",
    answer: "Sunrise is highly recommended because the crowd is lower and the soft morning light creates the best photography experience at Taj Mahal.",
  },
];

const tocItems = [
  ["Top Attractions", "top-attractions"],
  ["Travel Tips", "travel-tips"],
  ["Timing & Fee Table", "timings-table"],
  ["About Agra", "about-agra"],
  ["Travel FAQs", "travel-faqs"],
  ["Contact Expert", "contact-expert"],
];

export default function PlacesToVisitAgraPage() {
  useEffect(() => {
    const existing = document.getElementById("font-awesome-cdn");
    if (!existing) {
      const link = document.createElement("link");
      link.id = "font-awesome-cdn";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-700 antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-3 md:px-5">
            <div className="flex items-center gap-6 text-[12px] text-slate-500">
              <span className="flex items-center gap-2"><i className="fa-solid fa-phone text-slate-400" /> +91 9999999999</span>
              <span className="hidden items-center gap-2 md:flex"><i className="fa-solid fa-envelope text-slate-400" /> hello@mustindiatravel.com</span>
            </div>
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/20">Plan My Trip</button>
          </div>
        </div>
        <div className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-4 md:px-5">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"><i className="fa-solid fa-location-dot text-[18px]" /></span>
              <div><h2 className="text-[18px] font-bold tracking-[-0.03em] text-indigo-700 md:text-[24px]">Must India</h2><p className="text-[13px] font-semibold text-indigo-700">Travel</p></div>
            </div>
            <nav className="hidden items-center gap-8 text-[13px] font-medium text-slate-600 lg:flex">
              <a href="#">India Tours</a><a href="#">Destinations</a><a href="#">Holiday Themes</a><a href="#">Travel Guide</a><a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0f172a]">
        <div className="absolute inset-0">
          <img src={`${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80`} alt="Agra" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/30" />
        </div>
        <div className="relative mx-auto max-w-[1380px] px-4 py-10 md:px-5 md:py-14">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200 backdrop-blur-xl"><i className="fa-solid fa-location-dot" /> Agra Travel Guide</div>
            <h1 className="mt-7 text-[34px] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[58px]">Discover The Best Places To Visit In Agra</h1>
            <p className="mt-7 max-w-[680px] text-[15px] leading-8 text-slate-300 md:text-[17px]">Explore iconic Mughal monuments, heritage sites, gardens and cultural attractions in Agra including Taj Mahal, Agra Fort, Fatehpur Sikri and Mehtab Bagh with complete travel tips and sightseeing information.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[["10+", "Top Attractions", "fa-camera-retro"], ["2M+", "Annual Visitors", "fa-users"], ["UNESCO", "World Heritage", "fa-award"]].map(([number, text, icon]) => (
                <div key={text} className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl"><i className={`fa-solid ${icon} text-[18px] text-sky-200`} /><h3 className="mt-4 text-[24px] font-semibold text-white">{number}</h3><p className="mt-1 text-[13px] text-slate-300">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-4 py-7 md:px-5 md:py-10">
        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] lg:sticky lg:top-24 lg:h-fit">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">Quick Navigation</p>
            <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-slate-950">Table Of Contents</h3>
            <div className="mt-5 space-y-3">
              {tocItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">{label}<i className="fa-solid fa-arrow-right text-[11px]" /></a>
              ))}
            </div>
          </aside>

          <div>
            <div id="top-attractions" className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between scroll-mt-28">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-600">Top Attractions In Agra</p>
                <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.05em] text-slate-950 md:text-[48px]">Explore Agra's Most Famous Tourist Attractions</h2>
              </div>
            </div>

            <div className="space-y-5">
              {agraPlaces.map((place) => (
                <article key={place.title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.045)]">
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="relative h-[240px] overflow-hidden lg:h-[320px]">
                      <img src={place.image} alt={place.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-indigo-600 shadow-lg"><i className={`fa-solid ${place.icon}`} /></span>
                        <div><p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">Famous Attraction</p><h3 className="mt-1 text-[18px] font-semibold text-white">{place.title}</h3></div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-5 md:p-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[11px] font-semibold text-emerald-700"><i className="fa-solid fa-ticket" /> Entry Available</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-2 text-[11px] font-semibold text-indigo-700"><i className="fa-solid fa-clock" /> {place.timing}</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600"><i className="fa-solid fa-location-dot" /> {place.location}</span>
                      </div>
                      <h3 className="mt-4 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-slate-950">{place.title}</h3>
                      <p className="mt-3 text-[14px] leading-7 text-slate-600">{place.desc} Explore Mughal architecture, local culture, history, photography spots, entry details, nearby attractions, shopping areas and guided sightseeing experiences in Agra.</p>
                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {[["fa-camera", "Photography"], ["fa-clock", "2 Hrs"], ["fa-car-side", "Private Cab"], ["fa-user-group", "Family"]].map(([icon, text]) => (
                          <div key={text} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white shadow-sm"><i className={`fa-solid ${icon} text-[12px] text-slate-500`} /></span><p className="text-[11px] font-semibold leading-none text-slate-700">{text}</p></div>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2"><button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-[13px] font-medium text-white shadow-xl shadow-indigo-500/20">Read More</button><button className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-[13px] font-medium text-slate-700 shadow-sm">Plan Visit</button></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div id="travel-tips" className="mt-7 grid gap-5 md:grid-cols-3 scroll-mt-28">
              {[["Best Time To Visit", "October to March is ideal for Agra sightseeing.", "fa-calendar-days"], ["Nearest Airport", "Agra Airport & Delhi International Airport", "fa-plane-departure"], ["Ideal Trip Duration", "1-2 Days recommended for Agra exploration", "fa-clock"]].map(([title, desc, icon]) => (
                <div key={title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600"><i className={`fa-solid ${icon}`} /></span><h3 className="mt-4 text-[20px] font-semibold tracking-[-0.03em] text-slate-950">{title}</h3><p className="mt-3 text-[13px] leading-7 text-slate-600">{desc}</p></div>
              ))}
            </div>

            <div id="timings-table" className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] scroll-mt-28">
              <div className="border-b border-slate-200 px-5 py-5 md:px-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-600">Agra Tourist Places Information</p>
                <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">Places To Visit In Agra Timings & Entry Fee Table</h3>
                <p className="mt-3 max-w-[850px] text-[14px] leading-7 text-slate-600">Check complete Agra sightseeing information including Taj Mahal opening timing, Agra Fort ticket price, Fatehpur Sikri entry fee, weekly closing day and tourist visiting hours.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-slate-50"><tr>{["Place Name", "Opening Time", "Ticket Price", "Closed Day", "Famous For"].map((heading) => <th key={heading} className="border-b border-slate-200 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">{heading}</th>)}</tr></thead>
                  <tbody>{[["Taj Mahal", "6 AM - 6:30 PM", "₹50 / ₹1100", "Friday", "World Wonder"], ["Agra Fort", "6 AM - 6 PM", "₹50 / ₹650", "Open Daily", "Mughal Fort"], ["Mehtab Bagh", "8 AM - 6 PM", "₹30", "Open Daily", "Taj Sunset View"], ["Fatehpur Sikri", "6 AM - 6 PM", "₹50 / ₹610", "Open Daily", "Buland Darwaza"], ["Itmad-ud-Daulah", "8 AM - 12 AM", "₹30", "Open Daily", "Baby Taj"], ["Akbar Tomb", "6 AM - 6 PM", "₹30", "Open Daily", "Mughal Tomb"]].map((row, index) => <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>{row.map((cell, idx) => <td key={idx} className="border-b border-slate-100 px-5 py-5 text-[13px] leading-7 text-slate-700">{idx === 0 ? <span className="font-semibold text-slate-950">{cell}</span> : cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-agra" className="mx-auto max-w-[1380px] px-4 pb-8 md:px-5 md:pb-10 scroll-mt-28">
        <div className="grid gap-7 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">Agra Travel Information</p>
            <h2 className="mt-2 text-[34px] font-semibold tracking-[-0.04em] text-slate-950">About Agra Tourism</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>Agra is one of the most visited tourist destinations in India and is globally famous for the Taj Mahal. Located in Uttar Pradesh on the banks of Yamuna River, Agra offers Mughal architecture, heritage monuments, local markets and historical attractions.</p>
              <p>Along with Taj Mahal, travelers can explore Agra Fort, Mehtab Bagh, Itmad-ud-Daulah and Fatehpur Sikri. The city is also known for marble handicrafts, Mughlai cuisine and luxury heritage hotels.</p>
              <p>Most travelers visit Agra as part of Golden Triangle Tour covering Delhi, Agra and Jaipur. Private cab tours and same day Agra tours from Delhi are highly popular among domestic and international travelers.</p>
              <p>Agra is well connected by Yamuna Expressway, Gatimaan Express and major domestic highways which makes the city one of the easiest weekend destinations from Delhi NCR.</p>
            </div>
          </div>
          <div id="travel-faqs" className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)] md:p-8 scroll-mt-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">Travel FAQs</p>
            <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.04em] text-slate-950">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/40">
                  <div className="flex items-start justify-between gap-4">
                    <div><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm"><i className="fa-solid fa-circle-question text-[13px]" /></span><h3 className="text-[14px] font-semibold leading-6 text-slate-900">{faq.question}</h3></div><p className="mt-4 pl-12 text-[13px] leading-7 text-slate-600">{faq.answer}</p></div>
                    <span className="mt-1 text-slate-400"><i className="fa-solid fa-plus text-[12px]" /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-expert" className="mx-auto max-w-[1380px] px-4 pb-8 md:px-5 md:pb-10 scroll-mt-28">
        <div className="mb-7 overflow-hidden rounded-[30px] border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-violet-50 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-600">Need Help Planning Your Agra Trip?</p><h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-[42px]">Talk To Must India Travel Experts</h2><p className="mt-4 max-w-[720px] text-[14px] leading-8 text-slate-600 md:text-[15px]">Get customized Agra tour packages, Taj Mahal sunrise tours, private cab booking, hotel assistance and complete Golden Triangle travel planning with our local travel experts.</p><div className="mt-6 flex flex-wrap gap-3"><a href="tel:+919999999999" className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-[13px] font-semibold text-slate-900 shadow-xl"><i className="fa-solid fa-phone-volume text-indigo-600" />+91 99999 99999</a><a href="https://wa.me/919999999999" className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-[13px] font-semibold text-slate-700 shadow-sm"><i className="fa-brands fa-whatsapp text-[16px] text-green-500" />WhatsApp Support</a></div></div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[["fa-envelope", "Email Us", "hello@mustindiatravel.com"], ["fa-headset", "24/7 Support", "Travel experts available"], ["fa-location-dot", "Office", "Agra, Uttar Pradesh"]].map(([icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm"><i className={`fa-solid ${icon}`} /></span><div><h3 className="text-[14px] font-semibold text-slate-900">{title}</h3><p className="mt-1 text-[12px] leading-6 text-slate-500">{text}</p></div></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1380px] px-4 py-10 md:px-5">
          <div className="grid gap-8 rounded-[34px] border border-slate-200 bg-[#f8fafc] p-7 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"><i className="fa-solid fa-location-dot text-[18px]" /></span><div><h2 className="text-[22px] font-bold tracking-[-0.03em] text-indigo-700">Must India</h2><p className="text-[13px] font-semibold text-indigo-700">Travel</p></div></div><p className="mt-5 max-w-[320px] text-[13px] leading-7 text-slate-600">Discover India with premium private tours, customized holiday packages and luxury travel experiences.</p></div>
            <div><h3 className="text-[15px] font-semibold text-slate-950">Top Destinations</h3><div className="mt-5 space-y-3 text-[13px] text-slate-600"><p>Agra Tours</p><p>Delhi Tours</p><p>Jaipur Tours</p><p>Kashmir Tours</p><p>Kerala Tours</p></div></div>
            <div><h3 className="text-[15px] font-semibold text-slate-950">Travel Themes</h3><div className="mt-5 space-y-3 text-[13px] text-slate-600"><p>Family Holidays</p><p>Luxury Tours</p><p>Honeymoon Tours</p><p>Pilgrimage Tours</p><p>Adventure Tours</p></div></div>
            <div><h3 className="text-[15px] font-semibold text-slate-950">Contact</h3><div className="mt-5 space-y-4 text-[13px] text-slate-600"><p className="flex items-center gap-3"><i className="fa-solid fa-phone text-slate-400" /> +91 9999999999</p><p className="flex items-center gap-3"><i className="fa-solid fa-envelope text-slate-400" /> hello@mustindiatravel.com</p><button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/20">WhatsApp Support</button></div></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
