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
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="text-[25px] font-black tracking-[-0.03em] text-slate-950 md:text-[28px]">{title}</h2>
      {href ? <a href={href} className={`whitespace-nowrap text-[13px] font-extrabold ${activeTheme.text} hover:opacity-80`}>View All →</a> : null}
    </div>
  );
}

function MegaMenu({ columns, activeTheme, ctaTitle = "Need a custom India tour?", ctaText = "Share date, budget and destination. Our expert will create a plan." }) {
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
                  <span>
                    <b className="block text-[13px] font-black text-slate-950">{name}</b>
                    <small className="text-[12px] font-semibold text-slate-500">{desc}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-5 rounded-xl bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
        <b className="text-[16px]">{ctaTitle}</b>
        <span className="ml-3 text-[13px] font-semibold text-white/85">{ctaText}</span>
        <a href="#" className="float-right rounded-lg bg-white px-4 py-2 text-[12px] font-black text-slate-900">Plan Now</a>
      </div>
    </div>
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
        <button onClick={() => setOpen(true)} className={`fixed bottom-24 right-7 z-[90] flex items-center gap-3 rounded-full bg-gradient-to-r ${activeTheme.primary} px-5 py-4 text-[14px] font-black text-white shadow-2xl shadow-slate-900/20`}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">💬</span>
          Plan Trip
        </button>
      )}

      {open && (
        <div className="fixed bottom-24 right-7 z-[90] w-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 max-sm:right-4 max-sm:w-[calc(100vw-2rem)]">
          <div className={`bg-gradient-to-r ${activeTheme.primary} p-4 text-white`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/75">Must India Travel Assistant</p>
                <h3 className="mt-1 text-[18px] font-black">Create Your Tour Plan</h3>
              </div>
              <button onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg">×</button>
            </div>
          </div>

          <div className="max-h-[430px] overflow-y-auto p-4">
            <div className="mb-3 rounded-2xl bg-slate-50 p-3 text-[13px] font-semibold leading-6 text-slate-700">
              Hi 👋 I can help you plan your India tour. Please answer a few quick questions and our travel expert will contact you.
            </div>

            {questions.slice(0, Math.min(step, questions.length)).map((q) => (
              <div key={q.key} className="mb-3">
                <div className="mb-1 text-[12px] font-bold text-slate-500">{q.label}</div>
                <div className={`ml-auto w-fit max-w-[86%] rounded-2xl ${activeTheme.light} px-4 py-2 text-[13px] font-bold text-slate-800`}>{lead[q.key]}</div>
              </div>
            ))}

            {step < questions.length ? (
              <div className="rounded-2xl border border-slate-200 p-3">
                <label className="mb-2 block text-[13px] font-black text-slate-900">{current.label}</label>
                <input
                  value={lead[current.key]}
                  onChange={(e) => setLead({ ...lead, [current.key]: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  placeholder={current.placeholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-semibold outline-none focus:border-slate-400 focus:bg-white"
                />
                <button onClick={handleNext} disabled={!canNext} className={`mt-3 w-full rounded-xl bg-gradient-to-r ${activeTheme.primary} px-4 py-3 text-[13px] font-black text-white disabled:cursor-not-allowed disabled:opacity-40`}>
                  {isLast ? "Generate My Lead" : "Next Question"}
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h4 className="text-[16px] font-black text-emerald-700">Lead Ready ✅</h4>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-slate-700">Your tour requirement is ready. Click below to send it on WhatsApp or connect this form with your backend API later.</p>
                <button onClick={handleSubmitLead} className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-3 text-[13px] font-black text-white">Send Lead on WhatsApp</button>
                <button onClick={() => { setStep(0); setLead({ destination: "", date: "", travellers: "", budget: "", name: "", phone: "" }); }} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-black text-slate-700">Create Another Lead</button>
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
      <h3 className="mb-4 text-[15px] font-black">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => <li key={link}><a href="#" className="text-[13px] font-medium text-slate-300 hover:text-white">{link}</a></li>)}
      </ul>
    </div>
  );
}

export default function HomePagePreview() {
  const [theme, setTheme] = useState("indigo");
  const activeTheme = colorThemes[theme];

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="fixed left-5 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl backdrop-blur lg:flex">
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">Theme</span>
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
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-2 text-[12px] font-semibold text-slate-700">
          <div className="flex items-center gap-5">
            <a href="tel:18001234567" className={`${activeTheme.text} hover:opacity-80`}>☎ Toll Free: <b className={activeTheme.text}>1800-123-4567</b></a>
            <span className="hidden sm:inline-flex">🎧 24/7 Support</span>
            <a href="mailto:hello@mustindiatravel.com" className={`hidden md:inline-flex ${activeTheme.text} hover:opacity-80`}>✉ hello@mustindiatravel.com</a>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <a href="#">Offers</a><a href="#">Travel Guide</a><a href="#">Contact Us</a><button>INR⌄</button><a href="#">Login / Sign Up</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600 text-white shadow-lg">📍</span>
            <span className="leading-[0.95]"><b className="block text-[22px] font-black text-indigo-700">Must India</b><b className="block text-[22px] font-black text-indigo-700">Travel</b></span>
          </a>
          <nav className="relative hidden items-center gap-8 text-[14px] font-bold text-slate-800 lg:flex">
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>Explore Tours⌄</a>
              <MegaMenu columns={tourMegaMenu} activeTheme={activeTheme} />
            </div>
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>Destinations⌄</a>
              <MegaMenu columns={destinationMegaMenu} activeTheme={activeTheme} ctaTitle="Choose your dream destination" ctaText="Explore India’s most loved places with ready and custom tour plans." />
            </div>
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>Themes⌄</a>
              <MegaMenu columns={themeMegaMenu} activeTheme={activeTheme} ctaTitle="Travel by your mood" ctaText="Pick honeymoon, family, luxury, adventure, spiritual or wildlife experiences." />
            </div>
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>India Zones⌄</a>
              <MegaMenu columns={zoneMegaMenu} activeTheme={activeTheme} ctaTitle="Explore India zone wise" ctaText="Plan North, South, East, West, Central or North East India holidays easily." />
            </div>
            <div className="group relative py-3">
              <a href="#" className={`${activeTheme.text} hover:opacity-80`}>Festival Tours⌄</a>
              <MegaMenu columns={festivalMegaMenu} activeTheme={activeTheme} ctaTitle="Book festival tours early" ctaText="Limited seats for Holi, Janmashtami, Diwali, Pushkar Fair and seasonal trips." />
            </div>
            <a href="#" className={`py-3 ${activeTheme.text} hover:opacity-80`}>Top Deals</a>
            <a href="#" className={`py-3 ${activeTheme.text} hover:opacity-80`}>Blog</a>
          </nav>
          <a href="#" className={`rounded-lg bg-gradient-to-r ${activeTheme.primary} px-7 py-3 text-[14px] font-black text-white shadow-lg`}>Plan My Trip</a>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-[#f8fbff] pb-9 pt-8">
        <div className="mx-auto max-w-[1360px] px-5">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="pt-2">
              <p className="text-[14px] font-bold uppercase tracking-wide text-slate-500">Travel India, discover your soul</p>
              <h1 className="mt-5 max-w-[430px] text-[48px] font-black leading-[1.04] tracking-[-0.04em] text-slate-950 md:text-[58px]">Incredible India Awaits You</h1>
              <p className="mt-5 max-w-[450px] text-[16px] font-medium leading-7 text-slate-600">Explore the breathtaking beauty, rich culture and unforgettable experiences across India.</p>
              <div className="mt-8 grid max-w-[520px] grid-cols-2 gap-5 sm:grid-cols-4">
                {[["🛡️", "Best Price", "Guaranteed"],["✈️", "Expert Travel", "Support"],["👥", "10,000+", "Happy Travellers"],["📍", "100+", "Destinations"]].map(([icon, title, sub]) => (
                  <div key={title} className="flex items-center gap-3"><span className="text-[25px]">{icon}</span><p className="text-[12px] font-extrabold leading-tight text-slate-800">{title}<br /><span className="text-slate-500">{sub}</span></p></div>
                ))}
              </div>
            </div>
            <div className="grid h-[360px] grid-cols-[1.45fr_.85fr_.85fr] grid-rows-2 gap-4">
              <div className="relative row-span-2 overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
                <img src={heroVideos[0].poster} alt={heroVideos[0].title} className="absolute inset-0 h-full w-full object-cover" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroVideos[0].poster}
                  className="relative z-[1] h-full w-full object-cover opacity-95"
                >
                  <source src={heroVideos[0].src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-[12px] font-black backdrop-blur">{heroVideos[0].tag}</span>
                  <h3 className="text-[26px] font-black leading-tight">{heroVideos[0].title}</h3>
                </div>
              </div>

              {heroVideos.slice(1).map((video) => (
                <div key={video.title} className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                  <img src={video.poster} alt={video.title} className="absolute inset-0 h-full w-full object-cover" />
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="relative z-[1] h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 text-white">
                    <span className="mb-1 inline-flex rounded-full bg-white/15 px-2 py-1 text-[10px] font-black backdrop-blur">{video.tag}</span>
                    <h3 className="text-[14px] font-black leading-tight">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative z-10 mt-6 overflow-hidden rounded-3xl border ${activeTheme.border} bg-white shadow-2xl shadow-indigo-950/10`}>
            <div className="border-b border-slate-100 bg-[#f8fbff] px-6 py-5 text-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className={`text-[12px] font-black uppercase tracking-[0.22em] ${activeTheme.text}`}>Tour Search</p>
                  <h2 className="mt-1 text-[26px] font-black tracking-[-0.03em] text-slate-950">Find Your Best India Holiday in Seconds</h2>
                </div>
                <span className={`rounded-full border ${activeTheme.border} bg-white px-4 py-2 text-[12px] font-black ${activeTheme.text}`}>Destination + Date + Tour Type</span>
              </div>
            </div>
            <div className="p-6">
              <form className="grid gap-4 lg:grid-cols-[1.25fr_.8fr_.8fr_.95fr_auto]">
                <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50"><span className="mb-2 block text-[12px] font-black text-slate-700">Destination</span><span className="flex items-center gap-3"><span className="text-[20px]">📍</span><input placeholder="Where do you want to go?" className="w-full bg-transparent text-[15px] font-bold outline-none placeholder:text-slate-400" /></span></label>
                <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50"><span className="mb-2 block text-[12px] font-black text-slate-700">Travel Date</span><input type="date" className="w-full bg-transparent text-[15px] font-bold outline-none" /></label>
                <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3"><span className="mb-2 block text-[12px] font-black text-slate-700">Duration</span><select className="w-full bg-transparent text-[15px] font-bold outline-none"><option>Any Duration</option><option>2-4 Days</option><option>5-7 Days</option><option>8+ Days</option></select></label>
                <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3"><span className="mb-2 block text-[12px] font-black text-slate-700">Tour Type</span><select className="w-full bg-transparent text-[15px] font-bold outline-none"><option>Family Tour</option><option>Honeymoon Tour</option><option>Festival Tour</option><option>Pilgrimage Tour</option><option>Wildlife Tour</option></select></label>
                <button type="button" className={`rounded-2xl bg-gradient-to-r ${activeTheme.primary} px-8 py-4 text-[15px] font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:opacity-95 lg:mt-0`}>Search Tours</button>
              </form>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] font-bold text-slate-600"><b className="text-slate-950">Popular Searches:</b>{['Kashmir Tour','Kerala Backwaters','Rajasthan Tour','Festival Tours','Mathura Vrindavan'].map((item) => <a key={item} href="#" className={`rounded-full border ${activeTheme.border} ${activeTheme.light} px-4 py-1.5 ${activeTheme.text} hover:opacity-80`}>{item}</a>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-7"><div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-4 px-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">{quickCategories.map(([a,b,icon,color,bg]) => <a key={a} href="#" className="rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-xl"><span className={`mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full ${bg} ${color} text-[22px]`}>{icon}</span><b className="block text-[13px] leading-tight">{a}</b><span className="text-[12px] font-semibold text-slate-500">{b}</span></a>)}</div></section>

      <section className="mx-auto max-w-[1360px] px-5 py-8"><SectionTitle title="Explore India Zone Wise Tours" href="#" activeTheme={activeTheme} /><div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">{zones.map(([name, desc, count, img]) => <a href="#" key={name} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className="h-32"><img src={img} alt={name} className="h-full w-full object-cover" /></div><div className="p-4"><h3 className="text-[15px] font-black">{name}</h3><p className="mt-1 truncate text-[12px] font-medium text-slate-500">{desc}</p><span className={`mt-2 block text-[12px] font-black ${activeTheme.text}`}>{count}</span></div></a>)}</div></section>

      <section className="mx-auto max-w-[1360px] px-5 py-5"><SectionTitle title="Choose Tours by Travel Theme" href="#" activeTheme={activeTheme} /><div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">{themes.map(([name, sub, icon, color, bg]) => <a href="#" key={name} className="rounded-xl border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:shadow-xl"><span className={`mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full ${bg} ${color} text-[24px]`}>{icon}</span><h3 className="text-[15px] font-black">{name}</h3><p className="mt-1 text-[12px] font-medium text-slate-500">{sub}</p></a>)}</div></section>

      <section className="mx-auto max-w-[1360px] px-5 py-8">
        <SectionTitle title="Trending Holiday Deals & Best Offers" href="#" activeTheme={activeTheme} />
        <div className="flex snap-x gap-5 overflow-x-auto pb-3 [scrollbar-width:none]">
          {bestPackageSlides.map(([title, desc, cta, img]) => (
            <a key={title} href="#" className="group relative h-64 min-w-[88%] snap-start overflow-hidden rounded-2xl bg-slate-900 shadow-xl md:min-w-[48%] lg:min-w-[32%]">
              <img src={img} alt={title} className="h-full w-full object-cover opacity-75 transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-[70%] flex-col justify-center p-7 text-white">
                <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-[12px] font-black backdrop-blur">Limited Time Offer</span>
                <h2 className="text-[28px] font-black leading-tight">{title}</h2>
                <p className="mt-3 text-[14px] font-semibold leading-6 text-white/85">{desc}</p>
                <span className="mt-5 w-fit rounded-lg bg-white px-5 py-3 text-[13px] font-black text-indigo-700">{cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-8">
        <SectionTitle title="Top Deals Packages with Big Discounts" href="#" activeTheme={activeTheme} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {topDeals.map(([title, discount, oldPrice, newPrice, duration, badge, img]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <a href="#">
                <div className="relative h-40">
                  <img src={img} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-rose-600 px-3 py-1 text-[12px] font-black text-white">{discount}</span>
                  <span className={`absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-black ${activeTheme.text}`}>{badge}</span>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-1 text-[15px] font-black text-slate-950">{title}</h3>
                  <p className="mt-1 text-[12px] font-bold text-slate-500">{duration}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <span className="block text-[12px] font-bold text-slate-400 line-through">{oldPrice}</span>
                      <b className="text-[19px] font-black text-slate-950">{newPrice}</b>
                    </div>
                    <span className={`rounded-md ${activeTheme.light} px-3 py-2 text-[12px] font-black ${activeTheme.text}`}>Book Now</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-8">
        <SectionTitle title="Festival Special Tours Across India" href="#" activeTheme={activeTheme} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {festivalTours.map(([title, route, duration, price, icon, img]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <a href="#">
                <div className="relative h-44">
                  <img src={img} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-black ${activeTheme.text}`}>{icon} Festival Special</span>
                </div>
                <div className="p-4">
                  <h3 className="text-[17px] font-black text-slate-950">{title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-500">📍 {route}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[12px] font-bold text-slate-500">{duration}</span>
                    <b className="text-[14px] text-slate-950">{price}</b>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-8"><SectionTitle title="Top Trending Monthly Tours" href="#" activeTheme={activeTheme} /><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{trendingTours.map(([title,duration,rating,reviews,price,img]) => <article key={title} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"><a href="#"><div className="relative h-36"><img src={img} alt={title} className="h-full w-full object-cover" /><button className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-slate-500">♡</button></div><div className="p-3"><h3 className="line-clamp-1 text-[13px] font-black">{title}</h3><p className="mt-1 text-[12px] font-semibold text-slate-500">{duration}</p><div className="mt-2 text-[12px] font-bold text-slate-600"><span className="text-amber-500">★ {rating}</span> ({reviews})</div><p className="mt-1 text-[12px] font-semibold text-slate-500">From <b className="text-[14px] text-slate-950">₹{price}</b></p><span className={`mt-3 block rounded-md border ${activeTheme.border} px-3 py-2 text-center text-[12px] font-black ${activeTheme.text}`}>View Details</span></div></a></article>)}</div></section>

      <section className="mx-auto max-w-[1360px] px-5 py-8"><SectionTitle title="Real Traveller Reviews & Experiences" href="#" activeTheme={activeTheme} /><div className="grid gap-5 lg:grid-cols-3">{reviews.map((review) => <article key={review.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-3 flex items-start justify-between gap-3"><div className="flex items-center gap-3"><img src={review.image} alt={review.name} className="h-11 w-11 rounded-full object-cover" /><div><h3 className="text-[14px] font-black">{review.name}</h3><p className="text-[12px] font-semibold text-slate-500">{review.city}</p></div></div><span className="text-[13px] text-amber-400">★★★★★</span></div><p className="text-[13px] font-medium leading-6 text-slate-600">“{review.text}”</p><div className="mt-4 grid grid-cols-3 gap-2">{travellerGallery.slice(0,3).map((img) => <div key={img} className="h-20 overflow-hidden rounded-lg"><img src={img} alt="Traveller review" className="h-full w-full object-cover" /></div>)}</div></article>)}</div><div className="mt-6 grid gap-4 border-y border-slate-100 py-5 sm:grid-cols-2 md:grid-cols-5">{[["10,000+","Happy Travellers","👤"],["25,000+","Tours Completed","☑"],["100+","Expert Team","👥"],["4.8/5","Overall Ratings","⭐"],["24/7","Customer Support","🎧"]].map(([num,label,icon]) => <div key={label} className="flex items-center justify-center gap-3 text-center"><span className="text-[25px]">{icon}</span><div><b className="block text-[21px] font-black">{num}</b><span className="text-[12px] font-semibold text-slate-500">{label}</span></div></div>)}</div></section>

      <section className="mx-auto grid max-w-[1360px] gap-6 px-5 py-5 lg:grid-cols-[1fr_1.45fr_1fr]"><div><SectionTitle title="Traveller Moments Gallery" href="#" activeTheme={activeTheme} /><div className="grid grid-cols-3 gap-2">{travellerGallery.map((img) => <div key={img} className="h-24 overflow-hidden rounded-lg"><img src={img} alt="Traveller gallery" className="h-full w-full object-cover" /></div>)}</div></div><div><SectionTitle title="Next Show Your Reel Here & Book Trip" href="#" activeTheme={activeTheme} /><div className="grid grid-cols-4 gap-3">{reelCards.map(([img,views]) => <a key={img} href="#" className="group relative h-52 overflow-hidden rounded-xl bg-slate-900"><img src={img} alt="Instagram reel" className="h-full w-full object-cover opacity-75" /><span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/30 text-white">▶</span><span className="absolute bottom-3 left-3 text-[12px] font-black text-white">▶ {views}</span></a>)}</div></div><div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-7 text-white shadow-xl"><h2 className="text-[26px] font-black leading-tight">Book Your Dream Trip With Must India Travel</h2><ul className="mt-5 space-y-3 text-[14px] font-semibold text-white/90"><li>✓ Best Price Guarantee</li><li>✓ Customizable Packages</li><li>✓ 24/7 Travel Support</li><li>✓ Secure & Easy Booking</li></ul><a href="#" className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-4 text-[14px] font-black text-indigo-700">Book My Trip Now →</a></div></section>

      <section className="mx-auto max-w-[1360px] px-5 py-8"><SectionTitle title="Frequently Asked Questions" href="#" activeTheme={activeTheme} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{faqs.map(([q,a]) => <details key={q} className="group rounded-lg border border-slate-200 bg-white px-4 py-3"><summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-black">{q}<span>⌄</span></summary><p className="mt-3 text-[13px] font-medium leading-6 text-slate-600">{a}</p></details>)}</div></section>

      <ChatLeadBot activeTheme={activeTheme} />

      <footer className="mt-4 bg-[#0b1a36] text-white"><div className="mx-auto grid max-w-[1360px] gap-8 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1.35fr]"><div><a href="#" className="mb-4 flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 via-sky-500 to-indigo-600">📍</span><span className="leading-[0.95]"><b className="block text-[21px]">Must India</b><b className="block text-[21px]">Travel</b></span></a><p className="max-w-[270px] text-[13px] font-medium leading-6 text-slate-300">Your trusted travel partner for exploring the incredible beauty of India. We create unforgettable memories that last a lifetime.</p><div className="mt-5 flex gap-3">{['f','ig','yt','x','p'].map((s) => <a key={s} href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[13px] hover:bg-white/20">{s}</a>)}</div></div><FooterCol title="Top Destinations" links={["Kashmir Tours","Kerala Tours","Rajasthan Tours","Himachal Tours","Goa Tours","Uttarakhand Tours","North East Tours","Wildlife Tours"]} /><FooterCol title="Travel Themes" links={["Honeymoon Packages","Family Holidays","Adventure Tours","Pilgrimage Tours","Luxury Tours","Group Tours","Weekend Getaways","Beach Holidays"]} /><FooterCol title="Quick Links" links={["About Us","Why Choose Us","Travel Guide","Blog","Terms & Conditions","Privacy Policy","Refund Policy","Careers"]} /><FooterCol title="Support" links={["Contact Us","FAQs","Booking Process","Payment Options","Cancellation Policy","Travel Insurance","Customer Support"]} /><div><h3 className="mb-4 text-[15px] font-black">Subscribe Newsletter</h3><p className="mb-4 text-[13px] font-medium leading-6 text-slate-300">Get the best travel deals & offers straight to your inbox.</p><form className="flex overflow-hidden rounded-lg bg-white p-1"><input type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-[13px] font-semibold text-slate-900 outline-none" /><button className={`rounded-md ${activeTheme.solid} px-4 py-3 text-[12px] font-black text-white`}>Subscribe</button></form><div className="mt-5 flex gap-2 text-[11px] font-black text-slate-900">{['VISA','MC','PayPal','UPI'].map((p) => <span key={p} className="rounded bg-white px-2 py-1">{p}</span>)}</div></div></div><div className="border-t border-white/10 py-5 text-center text-[12px] font-semibold text-slate-400">© 2026 Must India Travel. All Rights Reserved.</div><a href="#" className={`fixed bottom-7 right-7 grid h-12 w-12 place-items-center rounded-full ${activeTheme.solid} text-white shadow-xl`}>↑</a></footer>
    </main>
  );
}
