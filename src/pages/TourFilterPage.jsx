import { useEffect, useState } from "react";

const imageBase = "https://images.unsplash.com";

const tours = [
  ["Golden Triangle Tour", "Delhi • Agra • Jaipur", "6 Days / 5 Nights", "₹18,999", "4.9", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80`],
  ["Kashmir Paradise", "Srinagar • Gulmarg • Pahalgam", "5 Days / 4 Nights", "₹22,999", "4.8", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`],
  ["Kerala Backwaters", "Cochin • Munnar • Alleppey", "4 Days / 3 Nights", "₹16,999", "4.7", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80`],
  ["Rajasthan Heritage", "Jaipur • Jodhpur • Udaipur", "7 Days / 6 Nights", "₹26,999", "4.9", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80`],
  ["Goa Beach Escape", "North Goa • South Goa", "3 Days / 2 Nights", "₹9,999", "4.6", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80`],
  ["Himachal Hills", "Shimla • Manali", "5 Days / 4 Nights", "₹17,499", "4.8", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80`],
  ["Varanasi Spiritual", "Varanasi • Sarnath", "3 Days / 2 Nights", "₹11,999", "4.7", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80`],
  ["Andaman Islands", "Port Blair • Havelock", "5 Days / 4 Nights", "₹29,999", "4.9", `${imageBase}/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80`],
  ["Uttarakhand Tour", "Haridwar • Rishikesh • Mussoorie", "6 Days / 5 Nights", "₹19,999", "4.7", `${imageBase}/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80`],
  ["South India Temple", "Madurai • Rameshwaram", "5 Days / 4 Nights", "₹20,999", "4.8", `${imageBase}/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80`],
];

const filters = {
  destinations: ["Kashmir", "Kerala", "Rajasthan", "Goa", "Himachal", "Varanasi"],
  themes: ["Family", "Honeymoon", "Luxury", "Adventure", "Pilgrimage"],
  duration: ["2-4 Days", "5-7 Days", "8-10 Days", "10+ Days"],
};

export default function MustIndiaTravelTourFilterPage() {
  const [view, setView] = useState("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-slate-400" />
                Toll Free: 1800-123-4567
              </span>

              <span className="hidden items-center gap-2 md:flex">
                <i className="fa-solid fa-headset text-slate-400" />
                24/7 Support
              </span>

              <span className="hidden items-center gap-2 lg:flex">
                <i className="fa-solid fa-envelope text-slate-400" />
                hello@mustindiatravel.com
              </span>
            </div>

            <div className="hidden items-center gap-5 text-[12px] text-slate-500 md:flex">
              <a href="#">Offers</a>
              <a href="#">Travel Guide</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-4 md:px-5">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                <i className="fa-solid fa-location-dot text-[18px]" />
              </span>

              <div>
                <h2 className="text-[18px] font-bold leading-none tracking-[-0.03em] text-indigo-700 md:text-[24px]">
                  Must India
                </h2>
                <p className="mt-1 text-[13px] font-semibold text-indigo-700">
                  Travel
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-[13px] font-medium text-slate-600 lg:flex">
              <a href="#" className="transition hover:text-slate-950">Explore Tours</a>
              <a href="#" className="transition hover:text-slate-950">Destinations</a>
              <a href="#" className="transition hover:text-slate-950">Themes</a>
              <a href="#" className="transition hover:text-slate-950">India Zones</a>
              <a href="#" className="transition hover:text-slate-950">Festival Tours</a>
              <a href="#" className="transition hover:text-slate-950">Top Deals</a>
              <a href="#" className="transition hover:text-slate-950">Blog</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-slate-200 bg-white px-5 py-3 text-[13px] font-medium text-slate-700 shadow-sm lg:block">
                Login
              </button>

              <button className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:scale-[1.02]">
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-5 px-4 py-6 md:px-5 md:py-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">
              India Tour Packages
            </p>

            <h1 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.05em] text-slate-950 md:text-[48px]">
              Explore India Tour Packages
            </h1>

            <p className="mt-4 max-w-[760px] text-[15px] leading-8 text-slate-600">
              Discover handpicked India holiday packages with private cab, hotels, sightseeing and fully customizable itineraries.
            </p>
          </div>

          <div className="hidden flex-wrap gap-3 lg:flex">
            <button
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-[13px] font-medium shadow-sm transition ${view === "grid" ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white" : "border border-slate-200 bg-white text-slate-700"}`}
            >
              <i className="fa-solid fa-grid-2" /> Grid View
            </button>

            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-[13px] font-medium shadow-sm transition ${view === "list" ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white" : "border border-slate-200 bg-white text-slate-700"}`}
            >
              <i className="fa-solid fa-list" /> List View
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-4 py-6 md:px-5 md:py-7">
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-medium text-slate-700 shadow-sm"
          >
            <i className="fa-solid fa-sliders" /> Filters
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`grid h-11 w-11 place-items-center rounded-2xl border text-[13px] shadow-sm transition ${view === "grid" ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white" : "border-slate-200 bg-white text-slate-700"}`}
            >
              <i className="fa-solid fa-grid-2" />
            </button>

            <button
              onClick={() => setView("list")}
              className={`grid h-11 w-11 place-items-center rounded-2xl border text-[13px] shadow-sm transition ${view === "list" ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white" : "border-slate-200 bg-white text-slate-700"}`}
            >
              <i className="fa-solid fa-list" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[300px_1fr] lg:items-start">
          {mobileFiltersOpen && (
              <div className="fixed inset-0 z-[80] bg-slate-950/40 backdrop-blur-sm lg:hidden" onClick={() => setMobileFiltersOpen(false)} />
            )}

          <aside className={`fixed inset-y-0 left-0 z-[90] w-[88%] max-w-[340px] overflow-y-auto border-r border-slate-200 bg-white p-5 shadow-2xl transition duration-300 lg:sticky lg:top-24 lg:z-auto lg:block lg:max-h-[calc(100vh-120px)] lg:w-auto lg:max-w-none lg:translate-x-0 lg:rounded-[30px] lg:border lg:shadow-[0_14px_40px_rgba(15,23,42,0.05)] ${mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}`}>
              <div className="mb-5 flex items-center justify-between lg:hidden">
                <h3 className="text-[18px] font-semibold text-slate-950">Tour Filters</h3>

                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  Search Filters
                </p>
                <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-slate-950">
                  Find Tours
                </h2>
              </div>

              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                <i className="fa-solid fa-sliders" />
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="mb-2 block text-[13px] font-medium text-slate-700">
                  Search Tour
                </label>

                <div className="relative">
                  <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-[13px] outline-none"
                  />
                </div>
              </div>

              {Object.entries(filters).map(([title, options]) => (
                <div key={title}>
                  <h3 className="mb-3 text-[14px] font-semibold capitalize text-slate-950">
                    {title}
                  </h3>

                  <div className="space-y-2.5">
                    {options.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-[13px] text-slate-600"
                      >
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-medium text-white shadow-lg">
                Apply Filters
              </button>
            </div>
          </aside>

          <div>
            <div className={view === "grid" ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
              {tours.map(([title, route, duration, price, rating, image]) => (
                <article
                  key={title}
                  className={`overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] ${view === "list" ? "flex flex-col md:flex-row" : ""}`}
                >
                  <div className={`relative overflow-hidden ${view === "list" ? "md:w-[340px] shrink-0" : "h-[240px]"}`}>
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-amber-600 shadow-sm">
                      <i className="fa-solid fa-star mr-1" /> {rating} Rating
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.03em] text-slate-950">
                          {title}
                        </h3>

                        <p className="mt-2 flex items-center gap-2 text-[13px] text-slate-500">
                          <i className="fa-solid fa-route text-[11px]" /> {route}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                          Starting From
                        </p>

                        <h4 className="mt-1 text-[22px] font-semibold text-slate-950">
                          {price}
                        </h4>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {[
                        ["fa-clock", duration],
                        ["fa-hotel", "Hotel Included"],
                        ["fa-car-side", "Private Cab"],
                        ["fa-utensils", "Breakfast"],
                      ].map(([icon, text]) => (
                        <span
                          key={text}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                        >
                          <i className={`fa-solid ${icon} text-[11px]`} />
                          {text}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-dashed border-slate-200 pt-4">
                      <div className="grid grid-cols-2 gap-3 text-[12px] sm:grid-cols-4">
                        <div className="rounded-2xl bg-slate-50 p-3 text-center">
                          <i className="fa-solid fa-hotel text-[14px] text-slate-500" />
                          <p className="mt-2 font-semibold text-slate-800">4★ Hotel</p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-3 text-center">
                          <i className="fa-solid fa-car-side text-[14px] text-slate-500" />
                          <p className="mt-2 font-semibold text-slate-800">Private Cab</p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-3 text-center">
                          <i className="fa-solid fa-utensils text-[14px] text-slate-500" />
                          <p className="mt-2 font-semibold text-slate-800">Breakfast</p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-3 text-center">
                          <i className="fa-solid fa-user-group text-[14px] text-slate-500" />
                          <p className="mt-2 font-semibold text-slate-800">Family Tour</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      <button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-medium text-white shadow-lg">
                        <i className="fa-solid fa-file-lines mr-2" /> View Itinerary
                      </button>

                      <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-[13px] font-medium text-slate-700 shadow-sm">
                        <i className="fa-solid fa-paper-plane mr-2" /> Enquiry Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-2 max-w-[1380px] px-4 pb-8 md:px-5">
        <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">Traveller Reviews</p>
              <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.04em] text-slate-950">What Travellers Say</h2>
            </div>

            <button className="w-fit rounded-full border border-slate-200 bg-white px-5 py-3 text-[13px] font-medium text-slate-700 shadow-sm">
              View All Reviews
            </button>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Rahul Sharma", "Delhi", "Excellent tour planning and very professional cab service.", "4.9"],
              ["Maria Lopez", "Spain", "Hotels, sightseeing and support everything was smooth.", "4.8"],
              ["Amit Verma", "Mumbai", "One of the best Golden Triangle experiences for family.", "5.0"],
            ].map(([name, city, text, rating]) => (
              <div key={name} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-[15px] font-semibold text-white">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-slate-950">{name}</h3>
                      <p className="text-[12px] text-slate-500">{city}</p>
                    </div>
                  </div>

                  <div className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-amber-600 shadow-sm">
                    ★ {rating}
                  </div>
                </div>

                <p className="mt-5 text-[13px] leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">Why Must India Travel</p>
            <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.04em] text-slate-950">Trusted India Travel Company</h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["12K+", "Happy Travellers", "fa-users"],
                ["250+", "Tour Packages", "fa-earth-asia"],
                ["4.9/5", "Verified Ratings", "fa-star"],
                ["24/7", "Travel Support", "fa-headset"],
              ].map(([value, text, icon]) => (
                <div key={text} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <i className={`fa-solid ${icon} text-[18px] text-slate-500`} />
                  <h3 className="mt-3 text-[24px] font-semibold text-slate-950">{value}</h3>
                  <p className="mt-1 text-[12px] text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">Travel FAQs</p>
            <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">Frequently Asked Questions</h2>

            <div className="mt-6 space-y-4">
              {[
                "Can I customize the itinerary?",
                "Are hotels included in the package?",
                "Do you provide private cab service?",
                "Is airport pickup included?",
              ].map((faq) => (
                <div key={faq} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-[13px] font-medium text-slate-700">
                  {faq}
                  <i className="fa-solid fa-plus text-[12px] text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-4 pb-8 md:px-5">
        <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">
                India Travel Guide
              </p>
              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.04em] text-slate-950">
                Explore More India Travel Categories
              </h2>
            </div>
          </div>

          <div className="mt-7 space-y-7">
            {[
              {
                title: "Best Selling Pilgrimage Packages",
                links: [
                  "Kedarnath Tour Package","Vaishno Devi Tour Package","Tirupati Package","Amarnath Yatra Package","Murudeshwar Tour Packages","Do Dham Yatra Package","Vrindavan Tour Package","Dwarka Tour Package","Mathura Tour Package","Varanasi Packages","Badrinath Tour Package","Somnath Tour Package"
                ]
              },
              {
                title: "Best Time to Visit in India",
                links: [
                  "Best Time to Visit Goa","Best Time to Visit Manali","Best Time to Visit Kashmir","Best Time to Visit Jaipur","Best Time to Visit Kerala","Best Time to Visit Darjeeling","Best Time to Visit Ooty","Best Time to Visit Leh","Best Time to Visit Shimla","Best Time to Visit Mussoorie","Best Time to Visit Udaipur","Best Time to Visit Coorg"
                ]
              },
              {
                title: "Top International Tour Packages",
                links: [
                  "Dubai Tour Packages","Singapore Tour Packages","Thailand Tour Packages","Bali Tour Packages","Europe Tour Packages","Maldives Tour Packages","Mauritius Tour Packages","Vietnam Tour Packages","Japan Tour Packages","Australia Tour Packages","Turkey Tour Packages","Bhutan Tour Packages"
                ]
              }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                  {section.title}
                </h3>

                <div className="mt-4 grid gap-x-6 gap-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {section.links.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-[14px] font-medium text-indigo-600 transition hover:text-indigo-800 hover:underline"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[820px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">
                SEO Travel Content
              </p>

              <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.04em] text-slate-950">
                India Tour Packages with Private Cab & Customized Itineraries
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-8 text-slate-600">
                <p>
                  Must India Travel offers customized India tour packages for family holidays, honeymoon trips, spiritual journeys, luxury vacations and private Golden Triangle tours. Our expertly planned itineraries include hotel booking, private cab transfers, local sightseeing, tour guides and flexible travel planning according to your budget and travel style.
                </p>

                <p>
                  Explore popular destinations like Kashmir, Kerala, Rajasthan, Goa, Himachal, Varanasi, Ayodhya, Rishikesh, South India temples and wildlife destinations with professionally managed travel services. We focus on premium travel experiences, fast customer support and carefully selected hotels for a smooth India holiday experience.
                </p>

                <div className="hidden" id="seo-read-more-content">
                  <p>
                    Our India holiday packages are designed for international travellers, couples, families and group tours looking for comfortable transportation, verified accommodations and local destination expertise. Whether you want a short weekend getaway or a long India tour itinerary, our travel specialists help create personalized holiday experiences with complete support before and during the trip.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('seo-read-more-content');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
                className="mt-6 rounded-full border border-slate-200 bg-white px-6 py-3 text-[13px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Read More
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:w-[320px] lg:grid-cols-1">
              {[
                ["250+", "India Tour Packages", "fa-earth-asia"],
                ["12K+", "Happy Travellers", "fa-users"],
                ["4.9/5", "Verified Reviews", "fa-star"],
              ].map(([number, text, icon]) => (
                <div key={text} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <i className={`fa-solid ${icon} text-[18px] text-slate-500`} />
                  <h3 className="mt-3 text-[26px] font-semibold text-slate-950">{number}</h3>
                  <p className="mt-1 text-[13px] text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-6 border-t border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1380px] px-4 py-12 md:px-5">
          <div className="grid gap-8 rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                  <i className="fa-solid fa-location-dot text-[18px]" />
                </span>

                <div>
                  <h2 className="text-[22px] font-bold tracking-[-0.03em] text-indigo-700">
                    Must India
                  </h2>
                  <p className="text-[13px] font-semibold text-indigo-700">Travel</p>
                </div>
              </div>

              <p className="mt-5 max-w-[320px] text-[13px] leading-7 text-slate-600">
                Discover India with expertly curated private tours, luxury stays, pilgrimage journeys and customized holiday experiences.
              </p>

              <div className="mt-6 flex gap-3">
                {["facebook-f", "instagram", "x-twitter", "youtube"].map((icon) => (
                  <button
                    key={icon}
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-indigo-600 hover:text-white"
                  >
                    <i className={`fa-brands fa-${icon}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-950">Top Destinations</h3>

              <div className="mt-5 space-y-3 text-[13px] text-slate-600">
                <p>Kashmir Tours</p>
                <p>Kerala Tours</p>
                <p>Rajasthan Tours</p>
                <p>Goa Packages</p>
                <p>Himachal Tours</p>
                <p>Varanasi Tours</p>
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-950">Travel Themes</h3>

              <div className="mt-5 space-y-3 text-[13px] text-slate-600">
                <p>Family Holidays</p>
                <p>Luxury Tours</p>
                <p>Honeymoon Tours</p>
                <p>Pilgrimage Tours</p>
                <p>Adventure Trips</p>
                <p>Wildlife Tours</p>
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-950">Contact Us</h3>

              <div className="mt-5 space-y-4 text-[13px] text-slate-600">
                <p className="flex items-start gap-3">
                  <i className="fa-solid fa-phone mt-1 text-slate-400" />
                  +91 9999999999
                </p>

                <p className="flex items-start gap-3">
                  <i className="fa-solid fa-envelope mt-1 text-slate-400" />
                  hello@mustindiatravel.com
                </p>

                <p className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot mt-1 text-slate-400" />
                  New Delhi, India
                </p>

                <button className="mt-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/20">
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 text-center text-[12px] text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Must India Travel. All Rights Reserved.</p>

            <div className="flex items-center justify-center gap-5">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
