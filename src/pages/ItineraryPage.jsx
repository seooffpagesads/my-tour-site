import { useEffect, useRef, useState } from "react";

const imageBase = "https://images.unsplash.com";

const colorThemes = {
  indigo: { primary: "from-indigo-600 to-violet-600", solid: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  emerald: { primary: "from-emerald-500 to-teal-600", solid: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  rose: { primary: "from-rose-500 to-pink-600", solid: "bg-rose-600", light: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
  orange: { primary: "from-orange-500 to-amber-500", solid: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
  sky: { primary: "from-sky-500 to-cyan-600", solid: "bg-sky-600", light: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
};

const megaCols = [
  { title: "Holiday Packages", items: [["Kashmir Tours", "Snow valleys & family holidays", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`], ["Kerala Tours", "Backwaters, hills & Ayurveda", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`], ["Rajasthan Tours", "Palaces, deserts & heritage", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`], ["Goa Tours", "Beach stays & nightlife", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`]] },
  { title: "Travel Themes", items: [["Family Holidays", "Safe tours for all ages", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`], ["Honeymoon Trips", "Private romantic escapes", `${imageBase}/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=220&q=80`], ["Pilgrimage Tours", "Temples and holy cities", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`], ["Wildlife Safaris", "Tiger reserves & jungles", `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=220&q=80`]] },
  { title: "India Zones", items: [["North India", "Kashmir, Himachal, Agra", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`], ["South India", "Kerala, Tamil Nadu", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`], ["West India", "Rajasthan, Gujarat, Goa", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`], ["North East", "Assam, Meghalaya, Sikkim", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`]] },
];

const overview = [
  ["Duration", "6 Days / 5 Nights", "fa-clock"],
  ["Route", "Delhi • Agra • Jaipur", "fa-route"],
  ["Best Time", "Oct to Mar", "fa-calendar-days"],
  ["Tour Type", "Private Guided Tour", "fa-user-group"],
  ["Pickup", "Delhi Airport / Hotel", "fa-car-side"],
  ["Language", "English / Hindi", "fa-language"],
];

const highlights = [
  ["Private AC cab with professional driver", "fa-car-side"],
  ["Guided Taj Mahal sunrise visit in Agra", "fa-camera-retro"],
  ["Amber Fort, City Palace and Hawa Mahal sightseeing", "fa-landmark"],
  ["Handpicked hotels with breakfast options", "fa-hotel"],
  ["Flexible itinerary with shopping and local food stops", "fa-bag-shopping"],
  ["24/7 trip assistance through phone and WhatsApp", "fa-headset"],
];

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival in Delhi & Local Sightseeing",
    text: "Arrive in Delhi and meet your private driver at airport, railway station or hotel. Start the tour with India Gate, Parliament House drive-pass, Humayun’s Tomb, Qutub Minar and Lotus Temple depending on arrival time. Evening is free for rest or local market exploration.",
    stay: "Hotel The Grand Delhi or Similar",
    meal: "CP Plan"
  },
  {
    day: "Day 02",
    title: "Delhi to Agra via Expressway",
    text: "After breakfast, drive to Agra by Yamuna Expressway. Check in at hotel and visit Agra Fort, Mehtab Bagh and local marble handicraft markets. The evening view of the Taj Mahal from the riverside is a beautiful photography moment.",
    stay: "Hotel Clarks Shiraz Agra or Similar",
    meal: "CP Plan"
  },
  {
    day: "Day 03",
    title: "Taj Mahal Sunrise & Agra to Jaipur",
    text: "Visit Taj Mahal early morning for sunrise. Return to hotel for breakfast and later drive towards Jaipur. On the way, visit Fatehpur Sikri or Abhaneri Stepwell if time permits. Check in at Jaipur hotel and relax.",
    stay: "Hotel Royal Orchid Jaipur or Similar",
    meal: "CP Plan"
  },
  {
    day: "Day 04",
    title: "Jaipur Forts, Palaces & Heritage Tour",
    text: "Explore Amber Fort, Jal Mahal, City Palace, Jantar Mantar, Hawa Mahal and local bazaars. Jaipur is famous for gemstones, textiles, handicrafts and traditional Rajasthani food. Optional cultural dinner can be arranged in the evening.",
    stay: "Hotel Royal Orchid Jaipur or Similar",
    meal: "CP Plan"
  },
  {
    day: "Day 05",
    title: "Jaipur Leisure, Optional Experiences & Drive to Delhi",
    text: "Spend the morning at leisure or choose optional experiences such as Nahargarh Fort, Patrika Gate, elephant village visit or shopping. Later drive back to Delhi and check in at hotel for overnight stay.",
    stay: "Hotel The Grand Delhi or Similar",
    meal: "CP Plan"
  },
  {
    day: "Day 06",
    title: "Departure from Delhi",
    text: "After breakfast, our driver will drop you at Delhi Airport, railway station or your preferred location. Tour ends with beautiful memories of India’s Golden Triangle journey.",
    stay: "Checkout",
    meal: "Breakfast Included"
  },
];

const inclusions = ["Private air-conditioned cab", "Driver allowance, fuel and tolls", "Hotel pickup and drop", "Sightseeing as per itinerary", "Parking and state tax", "24/7 travel support"];
const exclusions = ["Monument entry tickets", "Lunch and dinner", "Camera/video fees", "Personal expenses", "Guide charges unless added", "Anything not mentioned in inclusions"];
const notes = ["Taj Mahal remains closed every Friday.", "Hotel check-in and check-out depend on hotel policy.", "Rates may change during festival dates and long weekends.", "Itinerary can be customized as per arrival time, hotel category and travel style."];
const terms = ["Booking confirmation requires advance payment as per package policy.", "Cancellation charges may apply depending on cancellation date and hotel rules.", "No refund for unused sightseeing, meals or transfers after tour starts.", "Vehicle will be used only as per itinerary and permitted travel route."];

const gallery = [
  `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80`,
  `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`,
];

const similarTours = [
  ["Golden Triangle with Varanasi", "8 Days / 7 Nights", "₹24,999", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`],
  ["Delhi Agra Jaipur Tour", "5 Days / 4 Nights", "₹18,999", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`],
  ["Rajasthan Heritage Tour", "7 Days / 6 Nights", "₹22,999", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
];

const reviews = [
  ["Neha Sharma", "Delhi", "A very smooth and well-managed tour. Driver was polite, hotels were clean and the itinerary was comfortable for family travel."],
  ["Rahul Verma", "Mumbai", "The Golden Triangle experience was excellent. Taj Mahal sunrise and Jaipur sightseeing were the best parts of the trip."],
  ["Amit & Priya", "Bengaluru", "Everything was planned properly. The team was responsive on WhatsApp throughout the journey."],
];

const tags = ["Golden Triangle Tour", "Delhi Agra Jaipur", "Family Tour", "Private Cab Tour", "Taj Mahal Tour", "Rajasthan Tour", "India Tour Package"];

const pageSectionLinks = [
  ["Tour Overview", "#tour-overview", "fa-map-location-dot"],
  ["Highlights", "#tour-highlights", "fa-medal"],
  ["Inclusions", "#inclusions", "fa-circle-check"],
  ["Exclusions", "#exclusions", "fa-circle-xmark"],
  ["Notes", "#important-notes", "fa-circle-info"],
  ["Terms", "#terms-conditions", "fa-file-contract"],
  ["Gallery", "#traveller-gallery", "fa-images"],
  ["Reviews", "#traveller-reviews", "fa-star-half-stroke"],
];

const topSellingGoldenTriangleTours = [
  ["Golden Triangle with Varanasi", "8 Days / 7 Nights", "Delhi • Agra • Jaipur • Varanasi", "₹24,999", "4.9", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=420&q=80`],
  ["Classic Delhi Agra Jaipur", "5 Days / 4 Nights", "Delhi • Agra • Jaipur", "₹18,999", "4.8", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=420&q=80`],
  ["Golden Triangle with Pushkar", "7 Days / 6 Nights", "Delhi • Agra • Jaipur • Pushkar", "₹22,499", "4.7", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=420&q=80`],
  ["Luxury Golden Triangle Tour", "6 Days / 5 Nights", "5 Star Hotels • Private Cab", "₹39,999", "4.9", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=420&q=80`],
  ["Golden Triangle Wildlife Tour", "8 Days / 7 Nights", "Jaipur • Ranthambore • Agra", "₹31,999", "4.8", `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=420&q=80`],
];

function SectionTitle({ title, subtitle, activeTheme, icon = "fa-route" }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <span className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm ${activeTheme.text}`}>
        <i className={`fa-solid ${icon} text-[16px]`} />
      </span>
      <div>
        {subtitle ? <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${activeTheme.text}`}>{subtitle}</p> : null}
        <h2 className="mt-1 text-[24px] font-semibold tracking-[-0.035em] text-slate-950 md:text-[28px]">{title}</h2>
      </div>
    </div>
  );
}

function MegaMenu({ columns, activeTheme }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[1040px] -translate-x-1/2 translate-y-4 rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-2xl shadow-slate-900/10 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
      <div className="grid grid-cols-3 gap-5">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className={`mb-3 text-[12px] font-medium uppercase tracking-[0.16em] ${activeTheme.text}`}>{col.title}</h3>
            <div className="space-y-3">
              {col.items.map(([name, desc, img]) => (
                <a key={name} href="#" className="flex gap-3 rounded-xl p-2 transition hover:bg-slate-50">
                  <img src={img} alt={name} className="h-14 w-16 rounded-lg object-cover" />
                  <span><b className="block text-[13px] font-medium text-slate-950">{name}</b><small className="text-[12px] font-normal text-slate-500">{desc}</small></span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-5 rounded-xl bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
        <b className="text-[15px] font-medium">Need a custom India tour?</b>
        <span className="ml-3 text-[13px] font-normal text-white/85">Share date, budget and destination. Our expert will create a plan.</span>
        <a href="#enquiry" className="float-right rounded-lg bg-white px-4 py-2 text-[12px] font-medium text-slate-700">Plan Now</a>
      </div>
    </div>
  );
}

function Header({ activeTheme }) {
  return (
    <>
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-2 text-[12px] font-normal text-slate-500">
          <div className="flex items-center gap-5"><a href="tel:18001234567" className="text-slate-600 hover:text-slate-900">☎ Toll Free: <b className="font-medium text-slate-700">1800-123-4567</b></a><span className="hidden sm:inline-flex">🎧 24/7 Support</span><a href="mailto:hello@mustindiatravel.com" className="hidden text-slate-600 hover:text-slate-900 md:inline-flex">✉ hello@mustindiatravel.com</a></div>
          <div className="hidden items-center gap-5 md:flex"><a href="#">Offers</a><a href="#">Travel Guide</a><a href="#">Contact Us</a><button>INR⌄</button><a href="#">Login / Sign Up</a></div>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600 text-white">📍</span><span className="leading-[0.95]"><b className="block text-[20px] font-semibold text-indigo-700">Must India</b><b className="block text-[20px] font-semibold text-indigo-700">Travel</b></span></a>
          <nav className="relative hidden items-center gap-9 text-[13px] font-normal text-slate-600 lg:flex">
            {["Explore Tours", "Destinations", "Themes", "India Zones", "Festival Tours"].map((m) => <div key={m} className="group relative py-3"><a href="#" className="text-slate-600 hover:text-slate-950">{m}⌄</a><MegaMenu columns={megaCols} activeTheme={activeTheme} /></div>)}
            <a href="#" className="py-3 text-slate-600 hover:text-slate-950">Top Deals</a><a href="#" className="py-3 text-slate-600 hover:text-slate-950">Blog</a>
          </nav>
          <a href="#enquiry" className={`rounded-full bg-gradient-to-r ${activeTheme.primary} px-6 py-3 text-[13px] font-medium text-white shadow-lg`}>Plan My Trip</a>
        </div>
      </header>
    </>
  );
}

function SectionScrollNav({ activeTheme }) {
  return (
    <section className="sticky top-[74px] z-40 border-y border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1380px] px-4 py-3 md:px-5">
        <div className="flex gap-2 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {pageSectionLinks.map(([label, href, icon]) => (
            <a
              key={href}
              href={href}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-950"
            >
              <i className={`fa-solid ${icon} ${activeTheme.text} text-[12px]`} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySidebar({ activeTheme }) {
  return (
    <aside id="enquiry" className="sticky top-24 space-y-4 self-start">
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
        <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${activeTheme.text}`}>Quick Enquiry</p>
        <h3 className="mt-1 flex items-center gap-2 text-[22px] font-semibold tracking-[-0.035em] text-slate-950"><i className="fa-solid fa-paper-plane text-[18px] text-slate-500" />Get Custom Quote</h3>
        <form className="mt-4 space-y-3">
          {["Full Name", "Email Address", "Mobile / WhatsApp Number", "Arrival Date", "Number of Pax"].map((p) => <input key={p} placeholder={p} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none focus:border-slate-300" />)}
          <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none"><option>Hotel Category</option><option>Budget</option><option>3 Star</option><option>4 Star</option><option>5 Star Luxury</option></select>
          <textarea placeholder="Message / Special Requirement" rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none" />
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><span className="rounded-lg bg-white px-3 py-2 text-[13px] font-semibold text-slate-700 shadow-sm">8 + 3 =</span><input placeholder="Captcha" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none" /></div>
          <button type="button" className={`w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-5 py-3.5 text-[13px] font-medium text-white shadow-lg`}>Submit Enquiry</button>
        </form>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="flex items-center gap-2 text-[17px] font-semibold text-slate-950"><i className="fa-solid fa-headset text-slate-500" />Need instant help?</h3>
        <div className="mt-4 space-y-3 text-[13px] text-slate-600">
          <a href="tel:18001234567" className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><i className="fa-solid fa-phone text-slate-500" />1800-123-4567</a>
          <a href="mailto:hello@mustindiatravel.com" className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><i className="fa-solid fa-envelope text-slate-500" />hello@mustindiatravel.com</a>
          <a href="https://wa.me/919999999999" className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-[13px] font-medium text-white"><i className="fa-brands fa-whatsapp" /> Book on WhatsApp</a>
          <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-medium text-slate-700"><i className="fa-solid fa-file-pdf text-slate-500" /> Download Itinerary PDF</button>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${activeTheme.text}`}>Top Selling</p>
            <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.035em] text-slate-950">Golden Triangle Tours</h3>
          </div>
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl ${activeTheme.light} ${activeTheme.text}`}>
            <i className="fa-solid fa-fire-flame-curved text-[16px]" />
          </span>
        </div>

        <div className="space-y-3">
          {topSellingGoldenTriangleTours.map(([title, duration, route, price, rating, image]) => (
            <a key={title} href="#" className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <div className="relative h-[86px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-amber-600 shadow-sm">
                  <i className="fa-solid fa-star mr-1 text-[9px]" />{rating}
                </span>
              </div>

              <div className="min-w-0 flex-1 py-1">
                <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-slate-950">{title}</h4>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] font-normal text-slate-500">
                  <i className="fa-regular fa-clock text-[10px]" /> {duration}
                </p>
                <p className="mt-1 line-clamp-1 text-[11px] font-normal text-slate-500">
                  <i className="fa-solid fa-route mr-1 text-[10px]" /> {route}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <b className="text-[13px] font-semibold text-slate-950">{price}</b>
                  <span className={`rounded-lg ${activeTheme.light} px-2.5 py-1 text-[10px] font-medium ${activeTheme.text}`}>View</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function FooterCol({ title, links }) {
  return <div><h3 className="mb-4 text-[15px] font-semibold">{title}</h3><ul className="space-y-2">{links.map((link) => <li key={link}><a href="#" className="text-[13px] font-normal text-slate-600 hover:text-slate-950">{link}</a></li>)}</ul></div>;
}

function Footer({ activeTheme }) {
  return (
    <footer className="mt-4 border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800">
      <div className="mx-auto grid max-w-[1380px] gap-6 px-5 py-6 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1.35fr]">
        <div><a href="#" className="mb-4 flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600">📍</span><span className="leading-[0.95]"><b className="block text-[17px] font-semibold">Must India</b><b className="block text-[17px] font-semibold">Travel</b></span></a><p className="max-w-[270px] text-[13px] leading-6 text-slate-600">Your trusted travel partner for exploring the incredible beauty of India. We create unforgettable memories that last a lifetime.</p><div className="mt-5 flex gap-3">{["f", "ig", "yt", "x", "p"].map((s) => <a key={s} href="#" className="grid h-8 w-8 place-items-center rounded-full bg-slate-300/70 text-[13px] text-slate-700 hover:bg-slate-400/70">{s}</a>)}</div></div>
        <FooterCol title="Top Destinations" links={["Kashmir Tours", "Kerala Tours", "Rajasthan Tours", "Himachal Tours", "Goa Tours", "Uttarakhand Tours", "North East Tours", "Wildlife Tours"]} />
        <FooterCol title="Travel Themes" links={["Honeymoon Packages", "Family Holidays", "Adventure Tours", "Pilgrimage Tours", "Luxury Tours", "Group Tours", "Weekend Getaways", "Beach Holidays"]} />
        <FooterCol title="Quick Links" links={["About Us", "Why Choose Us", "Travel Guide", "Blog", "Terms & Conditions", "Privacy Policy", "Refund Policy", "Careers"]} />
        <FooterCol title="Support" links={["Contact Us", "FAQs", "Booking Process", "Payment Options", "Cancellation Policy", "Travel Insurance", "Customer Support"]} />
        <div><h3 className="mb-4 text-[15px] font-semibold">Subscribe Newsletter</h3><p className="mb-4 text-[13px] leading-6 text-slate-600">Get the best travel deals & offers straight to your inbox.</p><form className="flex overflow-hidden rounded-xl border border-slate-300 bg-white p-1"><input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-3 text-[13px] text-slate-800 outline-none placeholder:text-slate-400" /><button className={`rounded-md ${activeTheme.solid} px-4 py-3 text-[12px] font-medium text-white`}>Subscribe</button></form><div className="mt-5 flex gap-2 text-[11px] font-medium text-slate-700">{["VISA", "MC", "PayPal", "UPI"].map((p) => <span key={p} className="rounded bg-white px-2 py-1">{p}</span>)}</div></div>
      </div>
      <div className="border-t border-slate-300 py-5 text-center text-[12px] text-slate-600">© 2026 Must India Travel. All Rights Reserved.</div>
    </footer>
  );
}

function ChatLeadBot({ activeTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOpen(true), 4500); return () => clearTimeout(t); }, []);
  return open ? <div className="fixed bottom-5 right-4 z-[90] max-h-[82vh] w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 md:bottom-24 md:right-7 md:w-[360px]"><div className={`bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}><div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/75">Must India Travel Assistant</p><h3 className="mt-1 text-[18px] font-semibold">Create Your Tour Plan</h3></div><button onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg">×</button></div></div><div className="p-4"><p className="rounded-2xl bg-slate-50 p-3 text-[13px] leading-6 text-slate-700">Hi 👋 Tell us your destination, date and budget. Our travel expert will contact you.</p><input placeholder="Destination" className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none" /><input placeholder="Mobile / WhatsApp Number" className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none" /><button className={`mt-3 w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[13px] font-medium text-white`}>Generate Lead</button></div></div> : <button onClick={() => setOpen(true)} className={`fixed bottom-5 right-4 z-[90] flex items-center gap-2 rounded-full bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[12px] font-medium text-white shadow-xl md:bottom-24 md:right-7 md:px-5 md:py-4 md:text-[13px]`}><span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">💬</span>Plan Trip</button>;
}

export default function TourItineraryPagePreview() {
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

  const [theme, setTheme] = useState("indigo");
  const activeTheme = colorThemes[theme];

  return (
    <>
      <style>{`
        @keyframes scrollTags {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>

      <main className="min-h-screen overflow-x-hidden bg-white text-slate-700 antialiased tracking-[-0.01em]">
      <div className="fixed left-5 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl backdrop-blur lg:flex">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Theme</span>
        {Object.entries(colorThemes).map(([key, value]) => <button key={key} onClick={() => setTheme(key)} className={`h-10 w-10 rounded-full bg-gradient-to-br ${value.primary} transition hover:scale-110 ${theme === key ? "ring-4 ring-slate-200" : ""}`} />)}
      </div>

      <Header activeTheme={activeTheme} />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#eef2ff_0%,#ffffff_38%,#f8fafc_100%)] py-8 md:py-12">
        <div className="mx-auto max-w-[1380px] px-5">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-slate-500"><a href="#" className="inline-flex items-center gap-1.5"><i className="fa-solid fa-house text-[11px]" />Home</a><span>/</span><a href="#" className="inline-flex items-center gap-1.5"><i className="fa-solid fa-suitcase-rolling text-[11px]" />India Tour Packages</a><span>/</span><span className="inline-flex items-center gap-1.5 text-slate-800"><i className="fa-solid fa-location-dot text-[11px]" />Golden Triangle Tour</span></nav>
              <p className={`text-[12px] font-medium uppercase tracking-[0.24em] ${activeTheme.text}`}>Private India Tour Itinerary</p>
              <h1 className="mt-4 max-w-[720px] text-[40px] font-semibold leading-[1.05] tracking-[-0.06em] text-slate-950 md:text-[58px]">Golden Triangle India Tour Package</h1>
              <p className="mt-5 max-w-[690px] text-[16px] font-normal leading-8 text-slate-600">Explore Delhi, Agra and Jaipur with a private cab, comfortable hotels, guided sightseeing and flexible trip planning. This itinerary is designed for families, couples and first-time India travellers who want a smooth, premium and memorable journey.</p>
              <div className="mt-7 flex flex-wrap gap-3"><a href="#enquiry" className={`rounded-full bg-gradient-to-r ${activeTheme.primary} px-6 py-3.5 text-[13px] font-medium text-white shadow-lg`}><i className="fa-solid fa-calendar-check mr-2" />Book This Tour</a><a href="#itinerary" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-[13px] font-medium text-slate-700 shadow-sm"><i className="fa-solid fa-list-check mr-2" />View Day Wise Plan</a></div>

              <div className="mt-7 overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="grid gap-0 lg:grid-cols-[1.15fr_.85fr]">
                  <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r lg:p-6">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r ${activeTheme.primary} text-white shadow-lg`}>
                        <i className="fa-solid fa-award text-[18px]" />
                      </span>
                      <div>
                        <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${activeTheme.text}`}>Why Travellers Book This Tour</p>
                        <h3 className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">Premium Golden Triangle Experience</h3>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        ["Private AC Cab", "fa-car-side"],
                        ["Handpicked Hotels", "fa-hotel"],
                        ["Taj Mahal Sunrise", "fa-camera-retro"],
                        ["Flexible Itinerary", "fa-route"],
                      ].map(([text, icon]) => (
                        <div key={text} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm">
                            <i className={`fa-solid ${icon} text-[13px]`} />
                          </span>
                          <span className="text-[13px] font-medium text-slate-700">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 lg:p-6">
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Starting Price</p>
                          <h3 className="mt-1 text-[32px] font-semibold tracking-[-0.05em] text-slate-950">₹18,999</h3>
                          <p className="text-[12px] text-slate-500">Per person • Minimum 2 travellers</p>
                        </div>
                        <span className={`rounded-2xl bg-gradient-to-r ${activeTheme.primary} px-3 py-2 text-[11px] font-medium text-white shadow-lg`}>
                          Best Seller
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Taj Mahal, Agra", "Sunrise marble monument experience", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80`, "col-span-2 h-[260px] md:h-[320px]"],
                ["Hawa Mahal, Jaipur", "Royal pink city heritage", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80`, "h-[170px] md:h-[210px]"],
                ["Delhi Heritage", "Capital city monuments and culture", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80`, "h-[170px] md:h-[210px]"],
              ].map(([title, desc, image, size]) => (
                <a key={title} href="#" className={`group relative overflow-hidden rounded-[26px] bg-slate-900 shadow-[0_16px_45px_rgba(15,23,42,0.12)] ${size}`}>
                  <img src={image} alt={title} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white md:p-5">
                    <span className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur">
                      Golden Triangle Highlight
                    </span>
                    <h3 className="text-[18px] font-semibold leading-tight md:text-[22px]">{title}</h3>
                    <p className="mt-1 text-[12px] font-normal leading-5 text-white/80 md:text-[13px]">{desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionScrollNav activeTheme={activeTheme} />

      <section className="mx-auto max-w-[1380px] px-4 py-5 md:px-5 md:py-7">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {overview.map(([label, value, icon]) => (
            <div
              key={label}
              className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)] md:rounded-2xl md:p-4"
            >
              <div className="flex flex-col items-start md:block">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 shadow-sm md:h-11 md:w-11">
                  <i className={`fa-solid ${icon} text-[15px] md:text-[17px]`} />
                </span>

                <div className="mt-3 min-w-0 w-full">
                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400 md:text-[11px] md:tracking-[0.14em]">
                    {label}
                  </p>

                  <h3 className="mt-1 text-[14px] leading-5 font-semibold text-slate-950 break-words md:text-[14px] md:leading-6">
                    {value}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1380px] gap-7 px-5 py-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-7">
          <section id="tour-overview" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <SectionTitle title="Tour Overview" subtitle="Complete trip summary" activeTheme={activeTheme} icon="fa-map-location-dot" />
            <p className="text-[15px] font-normal leading-8 text-slate-600">This Golden Triangle tour covers three iconic cities of North India: Delhi, Agra and Jaipur. The route combines Mughal monuments, royal palaces, cultural bazaars, local food, photography points and comfortable private transfers. The itinerary is fully customizable with hotel category, guide service, arrival date and number of travellers.</p>
          </section>

          <section id="tour-highlights" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <SectionTitle title="Tour Highlights" subtitle="Why travellers love it" activeTheme={activeTheme} icon="fa-medal" />
            <div className="grid gap-3 md:grid-cols-2">
              {highlights.map(([text, icon]) => (
                <div key={text} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm">
                    <i className={`fa-solid ${icon} text-[14px]`} />
                  </span>
                  <p className="text-[13px] leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="itinerary" className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <SectionTitle title="Day Wise Itinerary" subtitle="Detailed paragraph wise plan" activeTheme={activeTheme} icon="fa-timeline" />
            <div className="space-y-5">
              {itinerary.map((item) => (
                <article key={item.day} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${activeTheme.primary} px-4 py-2 text-[12px] font-medium text-white`}>
                      <i className="fa-solid fa-location-dot text-[11px]" />
                      {item.day}
                    </span>

                    <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[14px] font-normal leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] text-slate-700 shadow-sm">
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500">
                        <i className="fa-solid fa-hotel text-[11px]" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">Stay</p>
                        <b className="block text-[12px] font-semibold text-slate-900">{item.stay}</b>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] text-slate-700 shadow-sm">
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500">
                        <i className="fa-solid fa-utensils text-[11px]" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">Meal</p>
                        <b className="block text-[12px] font-semibold text-slate-900">{item.meal}</b>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div id="inclusions" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Inclusions" subtitle="Included services" activeTheme={activeTheme} icon="fa-circle-check" /><ul className="space-y-3">{inclusions.map((x) => <li key={x} className="flex gap-3 text-[14px] text-slate-600"><i className="fa-solid fa-circle-check mt-1 text-emerald-500" />{x}</li>)}</ul></div>
            <div id="exclusions" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Exclusions" subtitle="Not included" activeTheme={activeTheme} icon="fa-circle-xmark" /><ul className="space-y-3">{exclusions.map((x) => <li key={x} className="flex gap-3 text-[14px] text-slate-600"><i className="fa-solid fa-circle-xmark mt-1 text-rose-500" />{x}</li>)}</ul></div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div id="important-notes" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Important Notes" subtitle="Before booking" activeTheme={activeTheme} icon="fa-circle-info" /><ul className="space-y-3">{notes.map((x) => <li key={x} className="flex gap-3 text-[14px] leading-7 text-slate-600"><i className="fa-solid fa-circle-info mt-1 text-slate-500" />{x}</li>)}</ul></div>
            <div id="terms-conditions" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Terms & Conditions" subtitle="Booking rules" activeTheme={activeTheme} icon="fa-file-contract" /><ul className="space-y-3">{terms.map((x) => <li key={x} className="flex gap-3 text-[14px] leading-7 text-slate-600"><i className="fa-solid fa-file-contract mt-1 text-slate-500" />{x}</li>)}</ul></div>
          </section>

          <section id="traveller-gallery" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Traveller Gallery" subtitle="Real trip moments" activeTheme={activeTheme} icon="fa-images" /><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{gallery.map((img) => <div key={img} className="h-40 overflow-hidden rounded-2xl"><img src={img} alt="Golden Triangle tour gallery" className="h-full w-full object-cover transition hover:scale-105" /></div>)}</div></section>

          <section id="traveller-reels" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Traveller Reels" subtitle="Short video moments" activeTheme={activeTheme} icon="fa-video" /><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{gallery.slice(0,4).map((img, i) => <a href="#" key={img} className="relative h-52 overflow-hidden rounded-2xl bg-slate-900"><img src={img} alt="Travel reel" className="h-full w-full object-cover opacity-75" /><span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur"><i className="fa-solid fa-play text-[13px]" /></span><span className="absolute bottom-3 left-3 rounded-full bg-black/35 px-2 py-1 text-[11px] font-medium text-white">{["12.4K", "8.7K", "15.2K", "10.1K"][i]}</span></a>)}</div></section>

          <section id="traveller-reviews" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Traveller Reviews" subtitle="Guest experiences" activeTheme={activeTheme} icon="fa-star-half-stroke" /><div className="grid gap-4 md:grid-cols-3">{reviews.map(([name, city, text]) => <article key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center justify-between gap-3"><div><h3 className="text-[14px] font-semibold text-slate-950">{name}</h3><p className="text-[12px] text-slate-500">{city}</p></div><span className="inline-flex gap-0.5 text-[11px] text-amber-400"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></span></div><p className="mt-3 text-[13px] leading-7 text-slate-600">“{text}”</p></article>)}</div></section>

          <section id="similar-tours" className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7"><SectionTitle title="Similar Tours" subtitle="You may also like" activeTheme={activeTheme} icon="fa-compass" /><div className="grid gap-4 md:grid-cols-3">{similarTours.map(([title, duration, price, img]) => <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><img src={img} alt={title} className="h-40 w-full object-cover" /><div className="p-4"><h3 className="text-[13px] font-semibold text-slate-950">{title}</h3><p className="mt-1 text-[12px] text-slate-500">{duration}</p><div className="mt-3 flex items-center justify-between"><b className="text-[16px] font-semibold text-slate-950">{price}</b><span className={`rounded-lg ${activeTheme.light} px-3 py-2 text-[12px] font-medium ${activeTheme.text}`}>View</span></div></div></article>)}</div></section>
        </div>

        <EnquirySidebar activeTheme={activeTheme} />
      </section>

      <section id="more-india-tours" className="mx-auto max-w-[1380px] scroll-mt-28 px-5 py-7">
        <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.05)] md:p-7">
          <SectionTitle title="Explore More India Tours" subtitle="Internal travel links" activeTheme={activeTheme} icon="fa-link" />

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="flex items-center gap-2 text-[16px] font-semibold text-slate-950">
                <i className="fa-solid fa-location-dot text-slate-500" /> Popular Destinations
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Delhi Tours", "Agra Tours", "Jaipur Tours", "Varanasi Tours", "Rishikesh Tours", "Kerala Tours", "Kashmir Tours", "Goa Tours"].map((item) => (
                  <a key={item} href="#" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="flex items-center gap-2 text-[16px] font-semibold text-slate-950">
                <i className="fa-solid fa-suitcase-rolling text-slate-500" /> Related Tour Packages
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Golden Triangle Tour", "Delhi Agra Jaipur Tour", "Golden Triangle with Varanasi", "Rajasthan Heritage Tour", "North India Tour", "Luxury India Tour", "Family India Tour", "Private Cab Tour"].map((item) => (
                  <a key={item} href="#" className={`rounded-full border ${activeTheme.border} bg-white px-4 py-2 text-[12px] font-medium ${activeTheme.text} transition hover:opacity-80`}>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="flex items-center gap-2 text-[16px] font-semibold text-slate-950">
                <i className="fa-solid fa-tags text-slate-500" /> Travel Themes
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Honeymoon Tours", "Pilgrimage Tours", "Wildlife Safari", "Hill Station Tours", "Weekend Trips", "Festival Tours", "Group Tours", "Custom Tour Packages"].map((item) => (
                  <a key={item} href="#" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
                    #{item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatLeadBot activeTheme={activeTheme} />
      <Footer activeTheme={activeTheme} />
    </main>
    </>
  );
}
