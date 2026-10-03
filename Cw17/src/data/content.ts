import {
  Gem, Activity, ShieldPlus, Scissors, Mars, Venus, Baby, Stethoscope, Microscope, ClipboardList,
  Syringe, Building2, Radio, BedDouble, Clock, Sparkles, Waves, Smile, Crown, Layers, Zap, Scan,
  Wrench, Droplets, Sun, type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string; title: string; short: string; icon: LucideIcon; group: string; points: string[];
};

/** All urology services are taken from the hospital brochure. */
export const services: Service[] = [
  {
    slug: "kidney-stone", title: "Kidney Stone Treatment", icon: Gem, group: "Urology",
    short: "Advanced endoscopic management of all types of kidney and ureteric stones.",
    points: ["PCNL (Percutaneous Nephrolithotomy)", "URSL (Ureterorenoscopy)", "ESWL (Shock Wave Lithotripsy)", "Cystolithotripsy for bladder stones", "Medical management & stone prevention"],
  },
  {
    slug: "prostate", title: "Prostate Clinic", icon: Activity, group: "Urology",
    short: "Diagnosis and treatment of prostate problems, with medical and endoscopic options.",
    points: ["Medical management & screening", "Endoscopic surgery: TURP / TUIP / TURIS (PKRP / PKEP)", "Treatment of prostate enlargement (BPH)"],
  },
  {
    slug: "uro-oncology", title: "Uro-Oncology", icon: ShieldPlus, group: "Uro-Oncology",
    short: "Diagnosis and treatment of cancers of the urinary tract and male reproductive system.",
    points: ["Kidney cancer", "Bladder cancer – TURBT", "Prostate cancer", "Testis & penile cancer", "Preventive oncology – PSA screening"],
  },
  {
    slug: "stricture", title: "Urethral Stricture", icon: Wrench, group: "Urology",
    short: "Endoscopic and reconstructive treatment for narrowing of the urinary passage.",
    points: ["DVIU – Endoscopic management of stricture", "Urethroplasty / urethral reconstruction"],
  },
  {
    slug: "cystoscopy", title: "Cystoscopy", icon: Microscope, group: "Urology",
    short: "Telescopic examination of the urinary tract for recurrent infection or urinary trouble.",
    points: ["For recurrent urinary tract infections", "For recurrent burning or discomfort while passing urine"],
  },
  {
    slug: "andrology", title: "Andrology & Male Infertility", icon: Mars, group: "Andrology",
    short: "Comprehensive treatment for male infertility and sexual disorders.",
    points: ["Oligospermia / Azoospermia / Asthenospermia", "Testicular biopsy, TESA / PESA", "Vaso-vasostomy", "Impotence & erectile problems"],
  },
  {
    slug: "female-urology", title: "Female Urology", icon: Venus, group: "Urology",
    short: "Care for urinary problems commonly faced by women.",
    points: ["Recurrent urinary tract infection (UTI)", "Stress urinary incontinence (SUI)", "Frequent burning or urgency", "Loss of bladder control"],
  },
  {
    slug: "paediatric", title: "Paediatric Urology", icon: Baby, group: "Pediatric Urology",
    short: "Gentle diagnosis and surgery for urinary problems in children.",
    points: ["PUJO – blockage / kidney swelling", "Posterior urethral valve", "Undescended testis", "Hypospadias", "Endoscopic treatment of kidney stones in children"],
  },
  {
    slug: "general-urology", title: "General Urology", icon: Stethoscope, group: "General Urology",
    short: "Day-to-day urological conditions and common surgical procedures.",
    points: ["Hydrocele & spermatocele", "Varicocele", "Circumcision", "Penile curvature"],
  },
  {
    slug: "other", title: "Other Urological Services", icon: ClipboardList, group: "General Urology",
    short: "Supportive and specialised procedures for complex urological needs.",
    points: ["Kidney transplant guidance", "A-V fistula surgery for dialysis", "Neurogenic bladder care", "Incontinence treatment", "Reconstructive urinary tract surgery", "Uroflowmetry"],
  },
];

export const quickCategories = [
  { label: "Kidney Stone", icon: Gem }, { label: "Prostate", icon: Activity },
  { label: "Urinary Infection", icon: Droplets }, { label: "Male Infertility", icon: Mars },
  { label: "Urethral Stricture", icon: Wrench }, { label: "Uro-Oncology", icon: ShieldPlus },
  { label: "Paediatric Urology", icon: Baby }, { label: "Female Urology", icon: Venus },
];

export const whyChoose = [
  { icon: Stethoscope, title: "Specialist Expertise", text: "Consultant urologist, andrologist and uro-oncologist with M.Ch. (Urology) from T.N.M.C. & Nair Hospital, Mumbai." },
  { icon: Microscope, title: "Advanced Endoscopic Care", text: "PCNL, URSL, ESWL, TURP and other minimally invasive procedures for faster recovery." },
  { icon: Layers, title: "Complete Genitourinary Care", text: "Urology, andrology, female and paediatric urology, and uro-oncology under one roof." },
  { icon: Clock, title: "Serving Latur Since 2015", text: "More than a decade of dedicated urological care for patients of Latur and nearby districts." },
  { icon: Sparkles, title: "Clean & Safe Environment", text: "A hygienic, patient-friendly hospital focused on comfort and safety." },
  { icon: Building2, title: "Government Scheme Support", text: "Associated with PM-JAY and MJPJAY health schemes. Please confirm eligibility with the hospital." },
];

export type Facility = { title: string; text: string; icon: LucideIcon; image: string };
export const facilities: Facility[] = [
  { title: "Operation Theatre", icon: Scissors, image: "/images/facility-1.jpg", text: "Operation theatre equipped for endoscopic and laparoscopic urological surgeries." },
  { title: "Endoscopy Unit", icon: Microscope, image: "/images/facility-2.jpg", text: "Cystoscopy, ureteroscopy and other endoscopic diagnosis and treatment." },
  { title: "Diagnostic Services", icon: Scan, image: "/images/facility-3.jpg", text: "Diagnostic support including uroflowmetry and imaging for accurate evaluation." },
  { title: "IPD / Patient Care", icon: BedDouble, image: "/images/facility-4.jpg", text: "In-patient care with close monitoring, comfort and post-operative support." },
  { title: "ESWL – Lithotripsy", icon: Zap, image: "/images/facility-5.jpg", text: "Shock wave lithotripsy to break suitable kidney stones without an operation." },
  { title: "Clean & Safe Environment", icon: Sparkles, image: "/images/facility-6.jpg", text: "A clean, hygienic hospital environment for patients and families." },
];

export const dentalServices = [
  { title: "Root Canal Treatment (R.C.T.)", icon: Syringe, text: "Treatment to save a badly infected or damaged tooth." },
  { title: "Crown & Bridge (Fixed Ceramic)", icon: Crown, text: "Permanent artificial teeth to restore appearance and function." },
  { title: "Dental Implant", icon: Wrench, text: "A screw is placed in the jawbone and topped with a ceramic cap." },
  { title: "Complete Denture", icon: Smile, text: "Artificial teeth to replace a full set of missing teeth." },
  { title: "Light Cure (Tooth-coloured) Filling", icon: Sun, text: "Tooth-coloured fillings for cavities." },
  { title: "Dental X-ray, RVG", icon: Radio, text: "Digital dental X-ray (RVG) for clear diagnosis." },
  { title: "Orthodontic Treatment", icon: Layers, text: "Correction of crooked or irregular teeth." },
  { title: "Ultrasonic Scaling", icon: Waves, text: "Treatment and procedures for gum disease." },
  { title: "Disimpaction & Oral Surgery", icon: Scissors, text: "Treatment and surgery for impacted wisdom teeth." },
  { title: "Bleaching", icon: Sparkles, text: "Treatment for stains and discolouration caused by water, paan or tobacco." },
];

export type GalleryItem = { src: string; alt: string; category: "Hospital" | "Facilities" | "Procedures" | "Dental" };
/** Replace the files in /public/images (same filenames) or edit the list below. */
export const gallery: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", alt: "Yashodhara Hospital building, Latur", category: "Hospital" },
  { src: "/images/gallery-2.jpg", alt: "Hospital reception area", category: "Hospital" },
  { src: "/images/gallery-3.jpg", alt: "Operation theatre", category: "Facilities" },
  { src: "/images/gallery-4.jpg", alt: "Endoscopy suite", category: "Facilities" },
  { src: "/images/gallery-5.jpg", alt: "Patient room", category: "Facilities" },
  { src: "/images/gallery-6.jpg", alt: "Diagnostic room", category: "Facilities" },
  { src: "/images/gallery-7.jpg", alt: "Dental treatment chair", category: "Dental" },
  { src: "/images/gallery-8.jpg", alt: "Yashodhara Dental Clinic", category: "Dental" },
  { src: "/images/gallery-9.jpg", alt: "Consultation room", category: "Hospital" },
  { src: "/images/gallery-10.jpg", alt: "ESWL lithotripsy unit", category: "Procedures" },
  { src: "/images/gallery-11.jpg", alt: "Hospital corridor", category: "Hospital" },
  { src: "/images/gallery-12.jpg", alt: "Hospital team", category: "Procedures" },
];
