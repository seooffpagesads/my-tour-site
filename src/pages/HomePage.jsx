import { useEffect, useState } from "react";

const imageBase = "https://images.unsplash.com";

const colorThemes = {
  indigo: {
    primary: "from-indigo-600 to-violet-600",
    solid: "bg-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
  },
  emerald: {
    primary: "from-emerald-500 to-teal-600",
    solid: "bg-emerald-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  rose: {
    primary: "from-rose-500 to-pink-600",
    solid: "bg-rose-600",
    light: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
  },
  orange: {
    primary: "from-orange-500 to-amber-500",
    solid: "bg-orange-500",
    light: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  sky: {
    primary: "from-sky-500 to-cyan-600",
    solid: "bg-sky-600",
    light: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-100",
  },
};

const heroVideos = [
  {
    src: "https://cdn.pixabay.com/video/2023/04/08/158054-815940675_large.mp4",
    poster: "https://cdn.pixabay.com/video/2023/04/08/158054-815940675_tiny.jpg",
    title: "Rishikesh River Rafting",
    tag: "Adventure Escapes",
  },
  {
    src: "https://cdn.pixabay.com/video/2022/12/04/141631-777930604_large.mp4",
    poster: "https://cdn.pixabay.com/video/2022/12/04/141631-777930604_tiny.jpg",
    title: "Wildlife Safari Experience",
    tag: "Tiger Safari Tours",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-hot-air-balloon-1562142877873?download=1080p",
    poster: `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80`,
    title: "Luxury Rajasthan Experience",
    tag: "Royal Heritage Tours",
  },
  {
    src: "https://cdn.pixabay.com/video/2023/04/08/158054-815940675_large.mp4",
    poster: `${imageBase}/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80`,
    title: "Romantic Honeymoon Moments",
    tag: "Couple Special Tours",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-traveling-through-the-mountains-1562142871541?download=1080p",
    poster: `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80`,
    title: "Mountain Road Trip Adventure",
    tag: "Epic Himalayan Journeys",
  },
];

const tourMegaMenu = [
  {
    title: "Holiday Packages",
    items: [
      ["Kashmir Tours", "Snow valleys & family holidays", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Kerala Tours", "Backwaters, hills & Ayurveda", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["Rajasthan Tours", "Palaces, deserts & heritage", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Goa Tours", "Beach stays & nightlife", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "Travel Themes",
    items: [
      ["Family Holidays", "Safe tours for all ages", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Honeymoon Trips", "Private romantic escapes", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["Pilgrimage Tours", "Temples and holy cities", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`],
      ["Wildlife Safaris", "Tiger reserves & jungles", `${imageBase}/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "India Zones",
    items: [
      ["North India", "Kashmir, Himachal, Agra", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["South India", "Kerala, Tamil Nadu, Karnataka", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["West India", "Rajasthan, Gujarat, Goa", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["North East India", "Assam, Meghalaya, Sikkim", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
    ],
  },
];

const destinationMegaMenu = [
  {
    title: "Most Booked Destinations",
    items: [
      ["Kashmir", "Srinagar, Gulmarg, Pahalgam", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Kerala", "Munnar, Alleppey, Kochi", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["Rajasthan", "Jaipur, Jodhpur, Udaipur", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Goa", "North Goa, South Goa", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "Spiritual Destinations",
    items: [
      ["Varanasi", "Ganga Aarti & temples", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
      ["Mathura Vrindavan", "Krishna Janmabhoomi & Braj", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`],
      ["Ayodhya", "Ram Mandir darshan", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`],
      ["Haridwar Rishikesh", "Ganga, yoga & rafting", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "Hill & Nature Escapes",
    items: [
      ["Himachal", "Shimla, Manali, Dharamshala", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Uttarakhand", "Nainital, Mussoorie, Chopta", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Sikkim", "Gangtok, Pelling, Lachung", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Meghalaya", "Shillong, Cherrapunji", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
    ],
  },
];

const themeMegaMenu = [
  {
    title: "By Travel Style",
    items: [
      ["Honeymoon Tours", "Private stays & romantic plans", `${imageBase}/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=220&q=80`],
      ["Family Holidays", "Comfortable trips for all ages", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Luxury Tours", "Premium hotels and cars", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Group Tours", "Best for friends and teams", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "By Experience",
    items: [
      ["Adventure Tours", "Rafting, trekking & camping", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Wildlife Tours", "Safari & jungle lodges", `${imageBase}/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=220&q=80`],
      ["Beach Tours", "Goa, Kerala & island vibes", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`],
      ["Heritage Tours", "Forts, palaces & monuments", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "By Purpose",
    items: [
      ["Pilgrimage Tours", "Temples and holy cities", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`],
      ["Weekend Trips", "Short escapes from your city", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Senior Citizen Tours", "Slow-paced, comfortable tours", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
      ["Custom Tours", "Plan exactly your way", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
    ],
  },
];

const zoneMegaMenu = [
  {
    title: "North & Himalaya",
    items: [
      ["North India", "Delhi, Agra, Jaipur, Kashmir", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Himachal", "Manali, Shimla, Dharamshala", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Uttarakhand", "Rishikesh, Mussoorie, Nainital", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Ladakh", "Leh, Nubra, Pangong", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "South & West India",
    items: [
      ["South India", "Kerala, Tamil Nadu, Karnataka", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["West India", "Rajasthan, Gujarat, Goa", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Central India", "MP wildlife and heritage", `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=220&q=80`],
      ["Beach India", "Goa, Kerala, Andaman", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "East & North East",
    items: [
      ["East India", "Odisha, Bengal, Sikkim", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
      ["North East", "Assam, Meghalaya, Arunachal", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Sikkim Darjeeling", "Tea gardens and mountains", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Odisha Tours", "Puri, Konark, Bhubaneswar", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
    ],
  },
];

const festivalMegaMenu = [
  {
    title: "Spiritual Festivals",
    items: [
      ["Holi in Mathura", "Barsana, Nandgaon, Vrindavan", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
      ["Janmashtami", "Mathura and Vrindavan special", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=220&q=80`],
      ["Diwali in Varanasi", "Ganga Aarti and Dev Deepawali", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
      ["Kumbh & Snan Tours", "Haridwar, Prayagraj, Nashik", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "Cultural Festivals",
    items: [
      ["Pushkar Fair", "Camel fair and Rajasthan culture", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Desert Festival", "Jaisalmer music and dunes", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=220&q=80`],
      ["Hornbill Festival", "Nagaland tribal culture", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80`],
      ["Onam Kerala", "Backwaters and culture", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
    ],
  },
  {
    title: "Seasonal Trips",
    items: [
      ["New Year Goa", "Beach parties and holiday stays", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=220&q=80`],
      ["Christmas Kerala", "Family holiday in South India", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
      ["Summer Hill Trips", "Manali, Kashmir, Sikkim", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=220&q=80`],
      ["Monsoon Packages", "Kerala and Western Ghats", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=220&q=80`],
    ],
  },
];

const quickCategories = [
  ["Weekend Getaways", "Near You", "🎟️", "text-emerald-500", "bg-emerald-50"],
  ["Honeymoon", "Packages", "♡", "text-rose-500", "bg-rose-50"],
  ["Family", "Holidays", "👨‍👩‍👧", "text-orange-500", "bg-orange-50"],
  ["Adventure", "Tours", "🥾", "text-indigo-500", "bg-indigo-50"],
  ["Pilgrimage", "Tours", "🛕", "text-amber-500", "bg-amber-50"],
  ["Wildlife", "Safaris", "🐅", "text-green-500", "bg-green-50"],
  ["Luxury", "Escapes", "🏛️", "text-fuchsia-500", "bg-fuchsia-50"],
  ["Group", "Tours", "👥", "text-blue-500", "bg-blue-50"],
  ["Custom Tour", "Packages", "🧳", "text-orange-500", "bg-orange-50"],
];

const zones = [
  ["North India", "Jammu, Himachal, Uttarakhand...", "120+ Tours", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["South India", "Kerala, Tamil Nadu, Karnataka...", "90+ Tours", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80`],
  ["East India", "Goa, Odisha, West Bengal...", "75+ Tours", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=80`],
  ["West India", "Rajasthan, Gujarat, Maharashtra...", "110+ Tours", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
  ["Central India", "Madhya Pradesh, Chhattisgarh...", "65+ Tours", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`],
  ["North East India", "Assam, Meghalaya, Sikkim...", "60+ Tours", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
];

const themes = [
  ["Honeymoon", "Romantic Getaways", "♡", "text-rose-500", "bg-rose-50"],
  ["Adventure", "Thrilling Experiences", "🧭", "text-orange-500", "bg-orange-50"],
  ["Family", "Fun for Everyone", "👨‍👩‍👧", "text-emerald-500", "bg-emerald-50"],
  ["Pilgrimage", "Spiritual Journeys", "🛕", "text-orange-500", "bg-orange-50"],
  ["Wildlife", "Into the Wilderness", "🐅", "text-green-600", "bg-green-50"],
  ["Luxury", "Premium Experiences", "🧳", "text-indigo-500", "bg-indigo-50"],
  ["Beach", "Sun & Sand", "🏖️", "text-sky-500", "bg-sky-50"],
  ["Cultural", "Heritage & Culture", "🎭", "text-red-500", "bg-red-50"],
];

const festivalTours = [
  ["Holi Festival Tour", "Mathura • Vrindavan • Barsana", "3 Days / 2 Nights", "From ₹8,999", "🌈", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80`],
  ["Janmashtami Special", "Mathura • Gokul • Vrindavan", "2 Days / 1 Night", "From ₹6,499", "🛕", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`],
  ["Diwali in Varanasi", "Varanasi • Sarnath", "4 Days / 3 Nights", "From ₹11,999", "🪔", `${imageBase}/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80`],
  ["Pushkar Fair Tour", "Jaipur • Pushkar • Ajmer", "5 Days / 4 Nights", "From ₹14,999", "🐪", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
];

const topDeals = [
  ["Kashmir Family Deal", "Save 20%", "₹15,999", "₹12,999", "5 Days / 4 Nights", "Limited Seats", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80`],
  ["Kerala Couple Offer", "Save 18%", "₹12,499", "₹9,999", "4 Days / 3 Nights", "Best Seller", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80`],
  ["Rajasthan Royal Deal", "Save 15%", "₹19,999", "₹16,999", "6 Days / 5 Nights", "Hot Deal", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80`],
  ["Goa Beach Flash Sale", "Save 25%", "₹10,499", "₹7,999", "3 Days / 2 Nights", "Weekend Deal", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80`],
  ["Himachal Hill Deal", "Save 22%", "₹8,499", "₹6,499", "4 Days / 3 Nights", "Trending", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80`],
];

const bestPackageSlides = [
  ["Best of India Holiday Deals", "Flat discounts on Kashmir, Kerala, Rajasthan and Goa packages.", "Explore Deals", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`],
  ["Festival Season Special Tours", "Book Holi, Janmashtami, Diwali and Pushkar Fair packages early.", "View Festival Tours", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80`],
  ["Custom Family Trip Offers", "Plan safe, comfortable and fully customized family holidays in India.", "Plan My Trip", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80`],
];

const trendingTours = [
  ["Kashmir Paradise Tour", "5 Days / 4 Nights", "4.8", "2.3K", "12,999", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Kerala Backwaters Experience", "4 Days / 3 Nights", "4.7", "1.8K", "9,999", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80`],
  ["Rajasthan Royal Tour", "6 Days / 5 Nights", "4.7", "2.1K", "16,999", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
  ["Goa Beach Getaway", "3 Days / 2 Nights", "4.6", "1.6K", "7,999", `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=80`],
  ["Himachal Hill Escape", "4 Days / 3 Nights", "4.6", "1.4K", "6,499", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Uttarakhand Divine Yatra", "5 Days / 4 Nights", "4.7", "1.2K", "7,499", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["North East Discovery", "6 Days / 5 Nights", "4.8", "980", "13,499", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Wildlife Safari India", "4 Days / 3 Nights", "4.5", "1.3K", "8,999", `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=500&q=80`],
];

const weekendTours = [
  ["Rishikesh Weekend Trip", "2 Days / 1 Night", "4.7", "860", "4,999", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Jaipur Weekend Escape", "2 Days / 1 Night", "4.8", "1.1K", "5,499", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
  ["Agra Same Weekend Tour", "2 Days / 1 Night", "4.7", "920", "4,299", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`],
  ["Nainital Weekend Tour", "3 Days / 2 Nights", "4.6", "780", "6,999", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Mussoorie Short Break", "3 Days / 2 Nights", "4.6", "690", "6,499", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
];

const superSpecialTours = [
  ["Golden Triangle Special", "5 Days / 4 Nights", "4.9", "2.6K", "18,999", `${imageBase}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80`],
  ["Kashmir Premium Deal", "6 Days / 5 Nights", "4.9", "2.4K", "19,999", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Kerala Luxury Escape", "5 Days / 4 Nights", "4.8", "1.9K", "17,999", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80`],
  ["Rajasthan Heritage Special", "7 Days / 6 Nights", "4.8", "1.7K", "22,999", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
  ["Varanasi Spiritual Special", "4 Days / 3 Nights", "4.7", "1.2K", "11,999", `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80`],
];

const hillStationTours = [
  ["Shimla Manali Tour", "6 Days / 5 Nights", "4.8", "2.1K", "14,999", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Darjeeling Gangtok Tour", "6 Days / 5 Nights", "4.7", "1.5K", "16,499", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Munnar Hill Station Tour", "4 Days / 3 Nights", "4.7", "1.2K", "9,999", `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80`],
  ["Ooty Kodaikanal Tour", "5 Days / 4 Nights", "4.6", "960", "12,999", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Kashmir Valley Hills", "5 Days / 4 Nights", "4.9", "2.3K", "15,999", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
];

const bikeTrips = [
  ["Leh Ladakh Bike Trip", "8 Days / 7 Nights", "4.8", "1.8K", "24,999", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Manali to Leh Bike Ride", "9 Days / 8 Nights", "4.9", "2.0K", "29,999", `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80`],
  ["Spiti Valley Bike Trip", "7 Days / 6 Nights", "4.7", "1.2K", "21,999", `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80`],
  ["Rajasthan Bike Circuit", "6 Days / 5 Nights", "4.6", "880", "18,999", `${imageBase}/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80`],
  ["Rishikesh Adventure Ride", "3 Days / 2 Nights", "4.6", "730", "8,999", `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=500&q=80`],
];

const reviews = [
  { name: "Neha Sharma", city: "Delhi, India", image: `${imageBase}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80`, text: "Our Kashmir trip with Must India Travel was absolutely amazing. Everything was well planned and the support was excellent." },
  { name: "Rahul Verma", city: "Mumbai, India", image: `${imageBase}/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80`, text: "The Kerala backwaters experience was beyond our expectations. Highly professional team and great hospitality." },
  { name: "Amit & Priya", city: "Bengaluru, India", image: `${imageBase}/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80`, text: "We booked our honeymoon package through Must India Travel. It was a trip of a lifetime." },
];

const travellerGallery = [
  `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80`,
  `${imageBase}/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=300&q=80`,
  `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80`,
  `${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=300&q=80`,
  `${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300&q=80`,
  `${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=300&q=80`,
];

const reelCards = [
  [`${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80`, "12.4K"],
  [`${imageBase}/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300&q=80`, "8.7K"],
  [`${imageBase}/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=300&q=80`, "15.2K"],
  [`${imageBase}/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=300&q=80`, "10.1K"],
];

const faqs = [
  ["What is the best time to visit India?", "October to March is best for most regions, while summer is good for hill stations and monsoon is beautiful for Kerala and Western Ghats."],
  ["How can I book a tour with Must India Travel?", "Search packages, choose your destination and submit the enquiry form. Our travel expert will contact you with a customized quotation."],
  ["Do you provide 24/7 customer support?", "Yes, our support team assists travellers before and during the trip."],
  ["Are your tour packages customizable?", "Yes, every package can be customized by date, hotel category, transport, sightseeing and budget."],
  ["Are flights included in tour packages?", "Flights are optional and can be included or excluded based on your requirement."],
  ["Do you offer group discounts?", "Yes, group discounts are available depending on destination, date, hotel category and group size."],
];

function SectionTitle({ title, href, activeTheme }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="text-[23px] font-semibold tracking-[-0.035em] text-slate-950 md:text-[26px]">{title}</h2>
      {href ? <a href={href} className={`whitespace-nowrap text-[13px] font-medium ${activeTheme.text} hover:opacity-80`}>View All →</a> : null}
    </div>
  );
}

function MegaMenu({ columns, activeTheme, ctaTitle = "Need a custom India tour?", ctaText = "Share date, budget and destination. Our expert will create a plan." }) {
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
                  <span>
                    <b className="block text-[13px] font-medium text-slate-950">{name}</b>
                    <small className="text-[12px] font-normal text-slate-500">{desc}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-5 rounded-xl bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
        <b className="text-[15px] font-medium">{ctaTitle}</b>
        <span className="ml-3 text-[13px] font-normal text-white/85">{ctaText}</span>
        <a href="#" className="float-right rounded-lg bg-white px-4 py-2 text-[12px] font-medium text-slate-700">Plan Now</a>
      </div>
    </div>
  );
}

function CompactTourSection({ title, tours, activeTheme }) {
  return (
    <section className="mx-auto max-w-[1380px] px-5 py-7">
      <SectionTitle title={title} href="#" activeTheme={activeTheme} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {tours.map(([title, duration, rating, reviews, price, img]) => (
          <article key={title} className="overflow-hidden rounded-xl border border-slate-200/75 bg-white shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <a href="#">
              <div className="relative h-36">
                <img src={img} alt={title} className="h-full w-full object-cover" />
                <button className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-slate-500">♡</button>
              </div>
              <div className="p-3">
                <h3 className="line-clamp-1 text-[13px] font-semibold">{title}</h3>
                <p className="mt-1 text-[12px] font-normal text-slate-500">{duration}</p>
                <div className="mt-2 text-[12px] font-normal text-slate-600"><span className="text-amber-500">★ {rating}</span> ({reviews})</div>
                <p className="mt-1 text-[12px] font-normal text-slate-500">From <b className="text-[14px] font-semibold text-slate-950">₹{price}</b></p>
                <span className={`mt-3 block rounded-md border ${activeTheme.border} px-3 py-2 text-center text-[12px] font-medium ${activeTheme.text}`}>View Details</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChatLeadBot({ activeTheme }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({
    destination: "",
    date: "",
    travellers: "",
    budget: "",
    name: "",
    phone: "",
  });
  const questions = [
    { key: "destination", label: "Where do you want to travel?", placeholder: "e.g. Kashmir, Kerala, Rajasthan" },
    { key: "date", label: "When are you planning to travel?", placeholder: "e.g. 15 June 2026" },
    { key: "travellers", label: "How many travellers?", placeholder: "e.g. 2 adults, 1 child" },
    { key: "budget", label: "Approx budget per person?", placeholder: "e.g. ₹15,000 per person" },
    { key: "name", label: "Your name?", placeholder: "Enter your full name" },
    { key: "phone", label: "Your WhatsApp / mobile number?", placeholder: "Enter 10 digit mobile number" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  const current = questions[step];
  const isLast = step === questions.length - 1;
  const canNext = current ? lead[current.key]?.trim().length > 0 : true;

  const handleNext = () => {
    if (!canNext) return;
    if (!isLast) setStep((s) => s + 1);
    else setStep(questions.length);
  };

  const handleSubmitLead = () => {
    const message = `New Tour Lead:%0AName: ${lead.name}%0APhone: ${lead.phone}%0ADestination: ${lead.destination}%0ATravel Date: ${lead.date}%0ATravellers: ${lead.travellers}%0ABudget: ${lead.budget}`;
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} className={`fixed bottom-5 right-4 z-[90] flex items-center gap-2 rounded-full bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[12px] font-medium text-white shadow-xl shadow-slate-900/15 md:bottom-24 md:right-7 md:gap-3 md:px-5 md:py-4 md:text-[13px]`}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">💬</span>
          Plan Trip
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-4 z-[90] max-h-[82vh] w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 md:bottom-24 md:right-7 md:w-[360px]">
          <div className={`bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/75">Must India Travel Assistant</p>
                <h3 className="mt-1 text-[18px] font-semibold">Create Your Tour Plan</h3>
              </div>
              <button onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg">×</button>
            </div>
          </div>

          <div className="max-h-[430px] overflow-y-auto p-4">
            <div className="mb-3 rounded-2xl bg-slate-50 p-3 text-[13px] font-normal leading-6 text-slate-700">
              Hi 👋 I can help you plan your India tour. Please answer a few quick questions and our travel expert will contact you.
            </div>

            {questions.slice(0, Math.min(step, questions.length)).map((q) => (
              <div key={q.key} className="mb-3">
                <div className="mb-1 text-[12px] font-medium text-slate-500">{q.label}</div>
                <div className={`ml-auto w-fit max-w-[86%] rounded-2xl ${activeTheme.light} px-4 py-2 text-[13px] font-medium text-slate-800`}>{lead[q.key]}</div>
              </div>
            ))}

            {step < questions.length ? (
              <div className="rounded-2xl border border-slate-200 p-3">
                <label className="mb-2 block text-[13px] font-medium text-slate-700">{current.label}</label>
                <input
                  value={lead[current.key]}
                  onChange={(e) => setLead({ ...lead, [current.key]: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  placeholder={current.placeholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-normal outline-none focus:border-slate-400 focus:bg-white"
                />
                <button onClick={handleNext} disabled={!canNext} className={`mt-3 w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[13px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-40`}>
                  {isLast ? "Generate My Lead" : "Next Question"}
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h4 className="text-[16px] font-semibold text-emerald-700">Lead Ready ✅</h4>
                <p className="mt-2 text-[13px] font-normal leading-6 text-slate-700">Your tour requirement is ready. Click below to send it on WhatsApp or connect this form with your backend API later.</p>
                <button onClick={handleSubmitLead} className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-3 text-[13px] font-medium text-white">Send Lead on WhatsApp</button>
                <button onClick={() => { setStep(0); setLead({ destination: "", date: "", travellers: "", budget: "", name: "", phone: "" }); }} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">Create Another Lead</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[15px] font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => <li key={link}><a href="#" className="text-[13px] font-normal text-slate-600 hover:text-slate-950">{link}</a></li>)}
      </ul>
    </div>
  );
}

export default function HomePagePreview() {
  const [theme, setTheme] = useState("indigo");
  const activeTheme = colorThemes[theme];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-700 antialiased tracking-[-0.01em]">
      <div className="fixed left-5 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl backdrop-blur lg:flex">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Theme</span>
        {Object.entries(colorThemes).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`h-10 w-10 rounded-full bg-gradient-to-br ${value.primary} transition hover:scale-110 ${theme === key ? 'ring-4 ring-slate-200' : ''}`}
            aria-label={key}
          />
        ))}
      </div>
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-2 text-[12px] font-normal text-slate-500">
          <div className="flex items-center gap-5">
            <a href="tel:18001234567" className="text-slate-600 transition hover:text-slate-900">☎ Toll Free: <b className="font-medium text-slate-700">1800-123-4567</b></a>
            <span className="hidden sm:inline-flex">🎧 24/7 Support</span>
            <a href="mailto:hello@mustindiatravel.com" className="hidden text-slate-600 transition hover:text-slate-900 md:inline-flex">✉ hello@mustindiatravel.com</a>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <a href="#">Offers</a><a href="#">Travel Guide</a><a href="#">Contact Us</a><button>INR⌄</button><a href="#">Login / Sign Up</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600 text-white shadow-lg">📍</span>
            <span className="leading-[0.95]"><b className="block text-[17px] font-semibold text-indigo-700">Must India</b><b className="block text-[17px] font-semibold text-indigo-700">Travel</b></span>
          </a>
          <nav className="relative hidden items-center gap-9 text-[13px] font-normal tracking-[-0.01em] text-slate-600 lg:flex">
            <div className="group relative py-3">
              <a href="#" className="text-slate-600 transition hover:text-slate-950">Explore Tours⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>
            <div className="group relative py-3">
              <a href="#" className="text-slate-600 transition hover:text-slate-950">Destinations⌄</a>
              <MegaMenu columns={destinationMegaMenu} activeTheme={activeTheme} ctaTitle="Choose your dream destination" ctaText="Explore India’s most loved places with ready and custom tour plans." />
            </div>
            <div className="group relative py-3">
              <a href="#" className="text-slate-600 transition hover:text-slate-950">Themes⌄</a>
              <MegaMenu columns={themeMegaMenu} activeTheme={activeTheme} ctaTitle="Travel by your mood" ctaText="Pick honeymoon, family, luxury, adventure, spiritual or wildlife experiences." />
            </div>
            <div className="group relative py-3">
              <a href="#" className="text-slate-600 transition hover:text-slate-950">India Zones⌄</a>
              <MegaMenu columns={zoneMegaMenu} activeTheme={activeTheme} ctaTitle="Explore India zone wise" ctaText="Plan North, South, East, West, Central or North East India holidays easily." />
            </div>
            <div className="group relative py-3">
              <a href="#" className="text-slate-600 transition hover:text-slate-950">Festival Tours⌄</a>
              <MegaMenu columns={festivalMegaMenu} activeTheme={activeTheme} ctaTitle="Book festival tours early" ctaText="Limited seats for Holi, Janmashtami, Diwali, Pushkar Fair and seasonal trips." />
            </div>
            <a href="#" className="py-3 text-slate-600 transition hover:text-slate-950">Top Deals</a>
            <a href="#" className="py-3 text-slate-600 transition hover:text-slate-950">Blog</a>
          </nav>
          <a href="#" className={`rounded-full bg-gradient-to-r ${activeTheme.primary} px-6 py-3 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/15 transition hover:-translate-y-0.5`}>Plan My Trip</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#eef2ff_0%,#ffffff_34%,#f8fafc_100%)] pb-12 pt-10">
        <div className="pointer-events-none absolute left-[-90px] top-[-90px] h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-24 right-[-120px] h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1380px] px-5">
          <div className="grid items-center gap-7 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="pt-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[12px] font-medium text-slate-600 shadow-sm backdrop-blur">
                <span className={`grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${activeTheme.primary} text-[11px] text-white`}>✓</span>
                India’s curated holiday marketplace
              </div>

              <p className={`text-[12px] font-medium uppercase tracking-[0.24em] ${activeTheme.text}`}>Travel India, beautifully planned</p>
              <h1 className="mt-4 max-w-[520px] text-[44px] font-semibold leading-[1.04] tracking-[-0.06em] text-slate-950 md:text-[56px]">
                Discover India with journeys made for your style
              </h1>
              <p className="mt-5 max-w-[500px] text-[16px] font-normal leading-8 text-slate-600">
                Explore private tours, festival journeys, hill escapes, wildlife safaris and custom India holidays with expert planning and premium support.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#" className={`rounded-full bg-gradient-to-r ${activeTheme.primary} px-6 py-3.5 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/15 transition hover:-translate-y-0.5`}>Explore Packages</a>
                <a href="#" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-[13px] font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">Create Custom Trip</a>
              </div>

              <div className="mt-4 grid max-w-[560px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[["10K+", "Travellers"], ["100+", "Routes"], ["4.8/5", "Rating"], ["24/7", "Support"]].map(([num, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-200/75 bg-white/80 px-4 py-3 shadow-[0_8px_26px_rgba(15,23,42,0.04)] backdrop-blur">
                    <b className="block text-[17px] font-semibold tracking-[-0.04em] text-slate-950">{num}</b>
                    <span className="text-[12px] font-normal text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-3 z-20 hidden max-w-[200px] rounded-2xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur lg:block">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600">Today’s pick</p>
                <b className="mt-1 block text-[14px] font-semibold text-slate-700">Kashmir, Kerala & Rajasthan</b>
              </div>
              <div className="absolute bottom-3 right-3 z-20 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur lg:block">
                <p className="text-[12px] font-normal text-slate-500">Trusted by travellers</p>
                <b className="text-[18px] font-semibold text-slate-950">★★★★★ 4.8</b>
              </div>

              <div className="grid h-auto grid-cols-2 gap-3 lg:h-[430px] lg:grid-cols-[1.5fr_.82fr_.82fr] lg:grid-rows-2 lg:gap-4">
                <div className="relative col-span-2 h-[260px] overflow-hidden rounded-[24px] bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.12)] lg:col-span-1 lg:row-span-2 lg:h-auto lg:rounded-[34px] lg:shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
                  <img src={heroVideos[0].poster} alt={heroVideos[0].title} className="absolute inset-0 h-full w-full object-cover" />
                  <video autoPlay muted loop playsInline preload="metadata" poster={heroVideos[0].poster} className="relative z-[1] h-full w-full object-cover opacity-95">
                    <source src={heroVideos[0].src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white lg:p-6">
                    <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[12px] font-medium backdrop-blur">{heroVideos[0].tag}</span>
                    <h3 className="text-[20px] font-semibold leading-tight lg:text-[25px]">{heroVideos[0].title}</h3>
                    <p className="mt-2 max-w-sm text-[12px] leading-5 text-white/75 lg:text-[13px] lg:leading-6">Handpicked travel moments from India’s most loved experiences.</p>
                  </div>
                </div>

                {heroVideos.slice(1).map((video) => (
                  <div key={video.title} className="group relative h-[140px] overflow-hidden rounded-[20px] bg-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.10)] lg:h-auto lg:rounded-[26px] lg:shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
                    <img src={video.poster} alt={video.title} className="absolute inset-0 h-full w-full object-cover" />
                    <video autoPlay muted loop playsInline preload="metadata" poster={video.poster} className="relative z-[1] h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105">
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-2.5 text-white lg:p-3">
                      <span className="mb-1 inline-flex rounded-full bg-white/15 px-2 py-1 text-[10px] font-medium backdrop-blur">{video.tag}</span>
                      <h3 className="text-[12px] font-medium leading-tight lg:text-[14px] lg:font-semibold">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative z-10 mt-4 overflow-hidden rounded-3xl border ${activeTheme.border} bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)]`}>
            <div className="border-b border-slate-100 bg-white px-6 py-5 text-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className={`text-[11px] font-medium uppercase tracking-[0.24em] ${activeTheme.text}`}>Tour Search</p>
                  <h2 className="mt-1 text-[24px] font-medium tracking-[-0.04em] text-slate-950">Find Your Best India Holiday in Seconds</h2>
                </div>
                <span className={`rounded-full border ${activeTheme.border} bg-white px-4 py-2 text-[12px] font-medium ${activeTheme.text}`}>Destination + Date + Tour Type</span>
              </div>
            </div>
            <div className="p-6">
              <form className="grid gap-3 lg:grid-cols-[1.25fr_.78fr_.78fr_.9fr_auto]">
                <label className="rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-2.5 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Destination</span><span className="flex items-center gap-3"><span className="text-[17px]">📍</span><input placeholder="Where do you want to go?" className="w-full bg-transparent text-[13px] font-medium outline-none placeholder:text-slate-600" /></span></label>
                <label className="rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-2.5 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Travel Date</span><input type="date" className="w-full bg-transparent text-[13px] font-medium outline-none" /></label>
                <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Duration</span><select className="w-full bg-transparent text-[13px] font-medium outline-none"><option>Any Duration</option><option>2-4 Days</option><option>5-7 Days</option><option>8+ Days</option></select></label>
                <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Tour Type</span><select className="w-full bg-transparent text-[13px] font-medium outline-none"><option>Family Tour</option><option>Honeymoon Tour</option><option>Festival Tour</option><option>Pilgrimage Tour</option><option>Wildlife Tour</option></select></label>
                <button type="button" className={`rounded-xl bg-gradient-to-r ${activeTheme.primary} px-7 py-3 text-[13px] font-medium text-white shadow-lg shadow-indigo-500/10 transition hover:-translate-y-0.5 hover:opacity-95 lg:mt-0`}>Search Tours</button>
              </form>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] font-normal text-slate-600"><b className="font-medium text-slate-950">Popular Searches:</b>{['Kashmir Tour', 'Kerala Backwaters', 'Rajasthan Tour', 'Festival Tours', 'Mathura Vrindavan'].map((item) => <a key={item} href="#" className={`rounded-full border ${activeTheme.border} ${activeTheme.light} px-4 py-1.5 ${activeTheme.text} hover:opacity-80`}>{item}</a>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-5"><div className="mx-auto grid max-w-[1380px] grid-cols-2 gap-4 px-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">{quickCategories.map(([a, b, icon, color, bg]) => <a key={a} href="#" className="rounded-xl border border-slate-200/75 bg-white p-4 text-center shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"><span className={`mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full ${bg} ${color} text-[22px]`}>{icon}</span><b className="block text-[13px] font-medium leading-tight">{a}</b><span className="text-[12px] font-normal text-slate-500">{b}</span></a>)}</div></section>

      <section className="mx-auto max-w-[1380px] px-5 py-7"><SectionTitle title="Explore India Zone Wise Tours" href="#" activeTheme={activeTheme} /><div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">{zones.map(([name, desc, count, img]) => <a href="#" key={name} className="overflow-hidden rounded-xl border border-slate-200/75 bg-white shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"><div className="h-32"><img src={img} alt={name} className="h-full w-full object-cover" /></div><div className="p-4"><h3 className="text-[15px] font-semibold">{name}</h3><p className="mt-1 truncate text-[12px] font-normal text-slate-500">{desc}</p><span className={`mt-2 block text-[12px] font-medium ${activeTheme.text}`}>{count}</span></div></a>)}</div></section>

      <section className="mx-auto max-w-[1380px] px-5 py-6"><SectionTitle title="Choose Tours by Travel Theme" href="#" activeTheme={activeTheme} /><div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">{themes.map(([name, sub, icon, color, bg]) => <a href="#" key={name} className="rounded-xl border border-slate-200/75 bg-white p-5 text-center shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"><span className={`mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full ${bg} ${color} text-[24px]`}>{icon}</span><h3 className="text-[15px] font-semibold">{name}</h3><p className="mt-1 text-[12px] font-normal text-slate-500">{sub}</p></a>)}</div></section>

      <section className="mx-auto max-w-[1380px] px-5 py-7">
        <SectionTitle title="Trending Holiday Deals & Best Offers" href="#" activeTheme={activeTheme} />
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 sm:gap-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          {bestPackageSlides.map(([title, desc, cta, img]) => (
            <a key={title} href="#" className="group relative h-60 min-w-[92%] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-slate-900 shadow-[0_14px_45px_rgba(15,23,42,0.10)] sm:h-64 md:min-w-[48%] lg:min-w-[32%]">
              <img src={img} alt={title} className="h-full w-full object-cover opacity-75 transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-[70%] flex-col justify-center p-6 text-white">
                <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium backdrop-blur">Limited Time Offer</span>
                <h2 className="text-[26px] font-semibold leading-tight">{title}</h2>
                <p className="mt-3 text-[14px] font-normal leading-6 text-white/85">{desc}</p>
                <span className="mt-5 w-fit rounded-lg bg-white px-5 py-3 text-[13px] font-medium text-indigo-700">{cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-7">
        <SectionTitle title="Top Deals Packages with Big Discounts" href="#" activeTheme={activeTheme} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {topDeals.map(([title, discount, oldPrice, newPrice, duration, badge, img]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200/75 bg-white shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <a href="#">
                <div className="relative h-40">
                  <img src={img} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-rose-600 px-3 py-1 text-[12px] font-medium text-white">{discount}</span>
                  <span className={`absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium ${activeTheme.text}`}>{badge}</span>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-[12px] font-normal text-slate-500">{duration}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <span className="block text-[12px] font-normal text-slate-600 line-through">{oldPrice}</span>
                      <b className="text-[19px] font-semibold text-slate-950">{newPrice}</b>
                    </div>
                    <span className={`rounded-md ${activeTheme.light} px-3 py-2 text-[12px] font-medium ${activeTheme.text}`}>Book Now</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-7">
        <SectionTitle title="Festival Special Tours Across India" href="#" activeTheme={activeTheme} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {festivalTours.map(([title, route, duration, price, icon, img]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200/75 bg-white shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <a href="#">
                <div className="relative h-44">
                  <img src={img} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium ${activeTheme.text}`}>{icon} Festival Special</span>
                </div>
                <div className="p-4">
                  <h3 className="text-[17px] font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-[13px] font-normal text-slate-500">📍 {route}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[12px] font-normal text-slate-500">{duration}</span>
                    <b className="text-[14px] font-semibold text-slate-950">{price}</b>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-7"><SectionTitle title="Top Trending Monthly Tours" href="#" activeTheme={activeTheme} /><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{trendingTours.map(([title, duration, rating, reviews, price, img]) => <article key={title} className="overflow-hidden rounded-xl border border-slate-200/75 bg-white shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"><a href="#"><div className="relative h-36"><img src={img} alt={title} className="h-full w-full object-cover" /><button className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-slate-500">♡</button></div><div className="p-3"><h3 className="line-clamp-1 text-[13px] font-semibold">{title}</h3><p className="mt-1 text-[12px] font-normal text-slate-500">{duration}</p><div className="mt-2 text-[12px] font-normal text-slate-600"><span className="text-amber-500">★ {rating}</span> ({reviews})</div><p className="mt-1 text-[12px] font-normal text-slate-500">From <b className="text-[14px] font-semibold text-slate-950">₹{price}</b></p><span className={`mt-3 block rounded-md border ${activeTheme.border} px-3 py-2 text-center text-[12px] font-medium ${activeTheme.text}`}>View Details</span></div></a></article>)}</div></section>

      <CompactTourSection title="Weekend Tours for Short Escapes" tours={weekendTours} activeTheme={activeTheme} />
      <CompactTourSection title="Super Special India Tour Packages" tours={superSpecialTours} activeTheme={activeTheme} />
      <CompactTourSection title="Hill Station Tour Packages" tours={hillStationTours} activeTheme={activeTheme} />
      <CompactTourSection title="Bike Trips & Adventure Riding Tours" tours={bikeTrips} activeTheme={activeTheme} />

      <section className="mx-auto max-w-[1380px] px-5 py-7"><SectionTitle title="Real Traveller Reviews & Experiences" href="#" activeTheme={activeTheme} /><div className="grid gap-5 lg:grid-cols-3">{reviews.map((review) => <article key={review.name} className="rounded-2xl border border-slate-200/75 bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.04)]"><div className="mb-3 flex items-start justify-between gap-3"><div className="flex items-center gap-3"><img src={review.image} alt={review.name} className="h-11 w-11 rounded-full object-cover" /><div><h3 className="text-[14px] font-semibold">{review.name}</h3><p className="text-[12px] font-normal text-slate-500">{review.city}</p></div></div><span className="text-[12px] text-amber-400">★★★★★</span></div><p className="text-[13px] font-normal leading-7 text-slate-600">“{review.text}”</p><div className="mt-4 grid grid-cols-3 gap-2">{travellerGallery.slice(0, 3).map((img) => <div key={img} className="h-20 overflow-hidden rounded-lg"><img src={img} alt="Traveller review" className="h-full w-full object-cover" /></div>)}</div></article>)}</div><div className="mt-4 grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:grid-cols-2 md:grid-cols-5 md:border-y md:border-x-0 md:rounded-none md:bg-transparent md:p-0 md:py-5 md:shadow-none">
        {[["10,000+", "Happy Travellers", "👤"], ["25,000+", "Tours Completed", "☑"], ["100+", "Expert Team", "👥"], ["4.8/5", "Overall Ratings", "⭐"], ["24/7", "Customer Support", "🎧"]].map(([num, label, icon], index) => (
          <div key={label} className={`${index === 4 ? 'col-span-2 sm:col-span-2 md:col-span-1' : ''} flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-left md:justify-center md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-center`}>
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-[21px] ${index === 0 ? 'bg-indigo-50 text-indigo-600' : index === 1 ? 'bg-emerald-50 text-emerald-600' : index === 2 ? 'bg-violet-50 text-violet-600' : index === 3 ? 'bg-amber-50 text-amber-500' : 'bg-sky-50 text-sky-600'} md:bg-transparent md:text-[25px]`}>
              {icon}
            </span>
            <div>
              <b className="block text-[20px] font-semibold leading-tight text-slate-950 md:text-[21px]">{num}</b>
              <span className="mt-1 block text-[11px] font-normal leading-tight text-slate-500 md:text-[12px]">{label}</span>
            </div>
          </div>
        ))}
      </div></section>

      <section className="mx-auto grid max-w-[1380px] gap-5 px-5 py-5 lg:grid-cols-[0.9fr_1.4fr_1fr]"><div><SectionTitle title="Traveller Moments Gallery" href="#" activeTheme={activeTheme} /><div className="grid grid-cols-3 gap-2">{travellerGallery.map((img) => <div key={img} className="h-24 overflow-hidden rounded-lg"><img src={img} alt="Traveller gallery" className="h-full w-full object-cover" /></div>)}</div></div><div><SectionTitle title="Next Show Your Reel Here & Book Trip" href="#" activeTheme={activeTheme} /><div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">{reelCards.map(([img, views]) => <a key={img} href="#" className="group relative h-40 overflow-hidden rounded-[16px] bg-slate-900 sm:h-52 sm:rounded-xl"><img src={img} alt="Instagram reel" className="h-full w-full object-cover opacity-75" /><span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/30 text-[13px] text-white backdrop-blur sm:h-12 sm:w-12">▶</span><span className="absolute bottom-2 left-2 rounded-full bg-black/35 px-2 py-1 text-[10px] font-medium text-white backdrop-blur sm:bottom-3 sm:left-3 sm:text-[12px]">▶ {views}</span></a>)}</div></div><div className="rounded-[22px] bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-500/15 sm:p-7"><h2 className="text-[21px] font-semibold leading-tight sm:text-[24px]">Book Your Dream Trip With Must India Travel</h2><ul className="mt-4 space-y-2.5 text-[13px] font-normal text-white/90 sm:mt-5 sm:text-[14px]"><li>✓ Best Price Guarantee</li><li>✓ Customizable Packages</li><li>✓ 24/7 Travel Support</li><li>✓ Secure & Easy Booking</li></ul><a href="#" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-[13px] font-medium text-indigo-700 sm:mt-5 sm:py-4 sm:text-[14px]">Book My Trip Now →</a></div></section>

      <section className="mx-auto max-w-[1380px] px-5 py-7"><SectionTitle title="Frequently Asked Questions" href="#" activeTheme={activeTheme} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{faqs.map(([q, a]) => <details key={q} className="group rounded-lg border border-slate-200 bg-white px-4 py-3"><summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-medium">{q}<span>⌄</span></summary><p className="mt-3 text-[13px] font-normal leading-6 text-slate-600">{a}</p></details>)}</div></section>

      <ChatLeadBot activeTheme={activeTheme} />

      <footer className="mt-4 border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800"><div className="mx-auto grid max-w-[1380px] gap-6 px-5 py-6 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1.35fr]"><div><a href="#" className="mb-4 flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600">📍</span><span className="leading-[0.95]"><b className="block text-[17px] font-semibold">Must India</b><b className="block text-[17px] font-semibold">Travel</b></span></a><p className="max-w-[270px] text-[13px] font-normal leading-6 text-slate-600">Your trusted travel partner for exploring the incredible beauty of India. We create unforgettable memories that last a lifetime.</p><div className="mt-5 flex gap-3">{['f', 'ig', 'yt', 'x', 'p'].map((s) => <a key={s} href="#" className="grid h-8 w-8 place-items-center rounded-full bg-slate-300/70 text-[13px] text-slate-700 hover:bg-slate-400/70">{s}</a>)}</div></div><FooterCol title="Top Destinations" links={["Kashmir Tours", "Kerala Tours", "Rajasthan Tours", "Himachal Tours", "Goa Tours", "Uttarakhand Tours", "North East Tours", "Wildlife Tours"]} /><FooterCol title="Travel Themes" links={["Honeymoon Packages", "Family Holidays", "Adventure Tours", "Pilgrimage Tours", "Luxury Tours", "Group Tours", "Weekend Getaways", "Beach Holidays"]} /><FooterCol title="Quick Links" links={["About Us", "Why Choose Us", "Travel Guide", "Blog", "Terms & Conditions", "Privacy Policy", "Refund Policy", "Careers"]} /><FooterCol title="Support" links={["Contact Us", "FAQs", "Booking Process", "Payment Options", "Cancellation Policy", "Travel Insurance", "Customer Support"]} /><div><h3 className="mb-4 text-[15px] font-semibold">Subscribe Newsletter</h3><p className="mb-4 text-[13px] font-normal leading-6 text-slate-600">Get the best travel deals & offers straight to your inbox.</p><form className="flex overflow-hidden rounded-xl border border-slate-300 bg-white p-1"><input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-3 text-[13px] font-normal text-slate-800 outline-none placeholder:text-slate-400" /><button className={`rounded-md ${activeTheme.solid} px-4 py-3 text-[12px] font-medium text-white`}>Subscribe</button></form><div className="mt-5 flex gap-2 text-[11px] font-medium text-slate-700">{['VISA', 'MC', 'PayPal', 'UPI'].map((p) => <span key={p} className="rounded bg-white px-2 py-1">{p}</span>)}</div></div></div><div className="border-t border-slate-300 py-5 text-center text-[12px] font-normal text-slate-600">© 2026 Must India Travel. All Rights Reserved.</div><a href="#" className={`fixed bottom-7 right-7 hidden h-12 w-12 place-items-center rounded-full ${activeTheme.solid} text-white shadow-xl md:grid`}>↑</a></footer>
    </main>
  );
}
