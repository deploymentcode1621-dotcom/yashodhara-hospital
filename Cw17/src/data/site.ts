/**
 * Central hospital information. Update contact details, timings and URLs HERE
 * and the whole website (navbar, footer, buttons, SEO, JSON-LD) updates.
 * Source: hospital brochure, prescription letterheads and reference design.
 */
export const site = {
  name: "Yashodhara Urology Center & Multispeciality Hospital",
  shortName: "Yashodhara Hospital",
  marathiName: "यशोधरा",
  marathiSub: "युरॉलॉजी सेंटर व मल्टीस्पेशालिटी हॉस्पिटल",
  institute: "Yashodhara Institute of Urology, Latur",
  tagline: "Superspeciality Genitourinary Services",
  slogan: "Advanced Technology for Better Care",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com", // TODO: set your real domain
  // Phone numbers
  phone: "02382-227850",
  phoneHref: "tel:+912382227850",
  mobile: "9021186939",
  mobileHref: "tel:+919021186939",
  whatsappNumber: "919021186939", // country code + number, no "+"
  email: "yashodharauroconsult@gmail.com", // from reference design – please confirm
  // Address
  addressLines: [
    "Bus Stand No. 2 Samor, Behind Yashoda Theatre,",
    "Juna Renapur Naka, Ambajogai Road,",
    "Latur, Maharashtra",
  ],
  addressShort: "Ambajogai Road, Latur, Maharashtra",
  addressMarathi:
    "बस स्टॅण्ड क्र. २ समोर, यशोदा थिएटरच्या मागे, जुना रेणापूर नाका, अंबाजोगाई रोड, लातूर",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Yashodhara+Urology+Hospital+Ambajogai+Road+Latur",
  mapsEmbed:
    "https://www.google.com/maps?q=Yashodhara+Urology+Hospital+Ambajogai+Road+Latur&output=embed",
  // Timings (from reference design – please confirm)
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "By Appointment" },
  ],
  yearsBadge: "11 Years of Service (2015 – 2025)",
  // Social links – leave empty until real accounts exist (nothing is shown for empty values)
  social: { facebook: "", instagram: "", youtube: "" },
};

export const dentalSite = {
  name: "Yashodhara Multispeciality Dental Clinic",
  doctor: "Dr. Anushree Dhiraj Hedda",
  qualification: "B.D.S. – Dental Surgeon",
  regNo: "A-16758",
  addressLines: ["Opposite Kayamkhani Function Hall,", "Sham Nagar, Ambajogai Road,", "Latur, Maharashtra"],
  addressMarathi: "कायमखानी फंक्शन हॉल समोर, शाम नगर, अंबाजोगाई रोड, लातूर",
  hours: [{ day: "Daily", time: "11:00 AM – 2:00 PM & 5:00 PM – 8:00 PM" }],
  phone: "02382-227850",
  phoneHref: "tel:+912382227850",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Yashodhara+Dental+Clinic+Sham+Nagar+Ambajogai+Road+Latur",
  mapsEmbed:
    "https://www.google.com/maps?q=Yashodhara+Dental+Clinic+Sham+Nagar+Ambajogai+Road+Latur&output=embed",
};

export const doctor = {
  name: "Dr. Dhiraj Hedda",
  marathi: "डॉ. धीरज हेड्डा",
  title: "Consultant Urologist, Andrologist & Uro-Oncologist",
  qualifications: [
    "M.Ch. (Urology) – T.N.M.C. & Nair Hospital, Mumbai (All India 5th Rank)",
    "M.S. (General Surgery) – T.N.M.C. & Nair Hospital, Mumbai",
    "M.B.B.S. – Government Medical College, Ambajogai",
  ],
  regNo: "1768",
  expertise: [
    "Kidney stone management (PCNL, URSL, ESWL)",
    "Prostate enlargement surgery (TURP / TUIP / TURIS)",
    "Urological cancer diagnosis & treatment",
    "Male infertility & sexual health",
    "Urethral stricture & reconstructive surgery",
    "Paediatric & female urology",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Dental Clinic", href: "/dental-clinic" },
  { label: "Gallery", href: "/gallery" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact Us", href: "/contact" },
];

export const whatsappLink = (text = "Hello, I would like to book an appointment at Yashodhara Hospital, Latur.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
