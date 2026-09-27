// Bilingual content blocks sourced from the Yashodhara Hospital patient brochure.
// Each item carries { en, mr } pairs so the LanguageContext can switch instantly.

export const doctorQualifications = [
  {
    en: 'M.Ch (Urology) — T.N.M.C. & Nair Hospital, Mumbai (All India 5th Rank)',
    mr: 'एम.सी.एच. (युरॉलॉजी) — टी.एन.एम.सी. व नायर हॉस्पिटल, मुंबई (ऑल इंडिया ५वी रँक)',
  },
  {
    en: 'M.S. (General Surgery) — T.N.M.C. & Nair Hospital, Mumbai',
    mr: 'एम.एस. (जनरल सर्जरी) — टी.एन.एम.सी. व नायर हॉस्पिटल, मुंबई',
  },
  {
    en: 'M.B.B.S. — Government Medical College, Ambajogai',
    mr: 'एम.बी.बी.एस. — शासकीय वैद्यकीय महाविद्यालय, अंबाजोगाई',
  },
];

export const homeQuickServices = [
  {
    key: 'stones',
    en: { title: 'Kidney Stone Treatment', body: 'PCNL, URSL, ESWL & Cystolithotripsy for stones of every size.' },
    mr: { title: 'मुतखडा उपचार', body: 'सर्व आकाराच्या मुतखड्यांसाठी PCNL, URSL, ESWL व सिस्टोलिथोट्रिप्सी.' },
    icon: 'stone',
  },
  {
    key: 'prostate',
    en: { title: 'Prostate Clinic', body: 'Medical management and endoscopic TURP/TUIP for enlarged prostate.' },
    mr: { title: 'प्रोस्टेट क्लिनिक', body: 'वाढलेल्या प्रोस्टेटसाठी औषधोपचार व एंडोस्कोपिक TURP/TUIP.' },
    icon: 'prostate',
  },
  {
    key: 'oncology',
    en: { title: 'Uro-Oncology', body: 'Diagnosis & treatment of kidney, bladder, prostate, testis and penile cancer.' },
    mr: { title: 'युरो-ऑन्कोलॉजी', body: 'किडनी, मूत्राशय, प्रोस्टेट, अंडकोष व लिंगाच्या कर्करोगाचे निदान व उपचार.' },
    icon: 'ribbon',
  },
  {
    key: 'andrology',
    en: { title: 'Andrology', body: 'Male infertility work-up (TESA/PESA) and treatment for sexual disorders.' },
    mr: { title: 'एन्ड्रोलॉजी', body: 'पुरुष वंध्यत्व तपासणी (TESA/PESA) व लैंगिक समस्यांवर उपचार.' },
    icon: 'andro',
  },
  {
    key: 'female',
    en: { title: 'Female Urology', body: 'Recurrent UTI, stress incontinence and urine leakage care for women.' },
    mr: { title: 'महिला युरॉलॉजी', body: 'महिलांसाठी वारंवार होणारा युटीआय, लघवीवरील ताबा कमी होणे यावर उपचार.' },
    icon: 'female',
  },
  {
    key: 'pediatric',
    en: { title: 'Paediatric Urology', body: 'PUJO, posterior urethral valve, undescended testis & hypospadias.' },
    mr: { title: 'बालरोग युरॉलॉजी', body: 'PUJO, पोस्टिरिअर युरेथ्रल व्हॉल्व्ह, अनडिसेंडेड टेस्टिस व हायपोस्पेडिया.' },
    icon: 'child',
  },
  {
    key: 'general',
    en: { title: 'General Urology & Surgery', body: 'Hydrocele, varicocele, circumcision and penile curvature correction.' },
    mr: { title: 'जनरल युरॉलॉजी व सर्जरी', body: 'हायड्रोसील, व्हॅरिकोसील, सुंता व लिंगाच्या वक्रतेवर उपचार.' },
    icon: 'general',
  },
  {
    key: 'dental',
    en: { title: 'Dental Clinic', body: 'RCT, implants, crowns, dentures & orthodontics for the whole family.' },
    mr: { title: 'डेंटल क्लिनिक', body: 'संपूर्ण कुटुंबासाठी आरसीटी, इम्प्लांट, क्राऊन, कवळी व ऑर्थोडोन्टिक्स.' },
    icon: 'tooth',
    href: '/dental',
  },
];

export const stoneTreatments = [
  {
    en: {
      title: 'PCNL (Percutaneous Nephrolithotomy)',
      body: 'For stones larger than 1.5–2 cm. A small incision is made in the back and the stone is fragmented with a lithoclast or laser and removed — avoiding a large open surgery.',
    },
    mr: {
      title: 'पीसीएनएल (PCNL)',
      body: '१.५ ते २ सेमी पेक्षा मोठ्या आकाराच्या किडनी स्टोनसाठी ही पद्धत वापरली जाते. यात भुलेखाली पाठीत एक लहानसा छेद देऊन लिथोक्लास्ट किंवा लेझरद्वारे खड्याचे बारीक तुकडे करून काढले जातात. यामुळे मोठ्या ऑपरेशनचे टाके टाळता येतात.',
    },
  },
  {
    en: {
      title: 'URSL (Uretero-Renoscopy)',
      body: 'Endoscopic treatment for stones stuck in the ureter. Stones larger than 6 mm can suddenly block the ureter and cause severe pain; if untreated, this can lead to pus formation (pyonephrosis) or a non-functioning kidney.',
    },
    mr: {
      title: 'युरेटेरो रिनोस्कोपी (URSL)',
      body: 'सुमारे ६ मि.मी. पेक्षा मोठे मुतखडे सहसा मूत्रनलिकेत अडकतात, ज्यामुळे रुग्णास असह्य वेदना होतात. अशा अडकलेल्या खड्यांचा वेळीच उपचार न केल्यास किडनीत पू होण्याची (Pyonephrosis) किंवा किडनी निकामी होण्याची शक्यता वाढते. असे खडे दुर्बिणीद्वारे (Ureteroscope) मूत्रनलिकेला इजा न पोहोचवता काढले जातात.',
    },
  },
  {
    en: {
      title: 'Lithotripsy (ESWL)',
      body: 'A modern, comfortable way to break select small-to-medium stones without any surgery. Focused electromagnetic shock waves shatter the stone, and the fragments pass out naturally in urine.',
    },
    mr: {
      title: 'लिथोट्रीप्सी (ESWL)',
      body: 'काही विशिष्ट व लहान असलेले स्टोन ऑपरेशनशिवाय काढण्याची सुलभ व आधुनिक पद्धत. मशीनमधील इलेक्ट्रोमॅग्नेटिक लहरींची ऊर्जा निर्माण होते व ती मुतखड्यावर केंद्रित करून मुतखडा फोडून त्याचा भुगा केला जातो व लघवीद्वारे बाहेर फेकला जातो.',
    },
  },
  {
    en: {
      title: 'Cystolithotripsy',
      body: 'Even large stones in the urinary bladder can be removed by this method without any cut on the body.',
    },
    mr: {
      title: 'सिस्टोलिथोट्रीप्सी',
      body: 'मूत्राशयातील मोठे खडेही या पद्धतीने कोठेही चिरा न देता काढता येतात.',
    },
  },
  {
    en: {
      title: 'Medical Management & Prevention',
      body: 'If detected early, and the stone size is small, medical management and preventive dietary guidance can be very effective — part of our Kidney Stone Prevention Programme since 2015.',
    },
    mr: {
      title: 'औषधोपचार',
      body: 'मुतखडा लवकर निदर्शनास आल्यास व लहान असल्यास औषधोपचार व प्रतिबंधात्मक उपायांनी प्रभावी नियंत्रण शक्य आहे — "किडनी स्टोन प्रिव्हेन्शन प्रोग्रॅम २०१५" या यशोधरा हॉस्पिटलच्या उपक्रमांतर्गत.',
    },
  },
];

export const serviceSections = [
  {
    key: 'cystoscopy',
    en: { title: 'Cystoscopy', subtitle: 'Endoscopic examination of the urinary tract' },
    mr: { title: 'सिस्टोस्कोपी', subtitle: 'दुर्बिणीद्वारे मूत्रमार्गाची तपासणी' },
    items: [
      { en: 'For patients with recurrent urinary infections', mr: 'वारंवार लघवीचा जंतुसंसर्ग असणाऱ्या रुग्णांसाठी' },
      { en: 'For patients with burning or discomfort during urination', mr: 'वारंवार लघवीला जळजळ / त्रास होणाऱ्या रुग्णांसाठी' },
    ],
  },
  {
    key: 'prostate',
    en: { title: 'Prostate Clinic', subtitle: 'Diagnosis and treatment of prostate gland disease' },
    mr: { title: 'प्रोस्टेट क्लिनिक', subtitle: 'प्रोस्टेट ग्रंथीच्या आजाराचे निदान व उपचार' },
    items: [
      { en: 'Medical Management, investigations & screening for prostatic diseases', mr: 'औषधांद्वारे उपचार, तपासणी व प्रोस्टेट आजारांसाठी स्क्रीनिंग' },
      { en: 'Endoscopic surgery for prostate enlargement — TURP, TUIP, TURIS (PKRP/PKEP), the most popular and modern endoscopic technique', mr: 'प्रोस्टेट वाढीसाठी दुर्बिणीद्वारे शस्त्रक्रिया — TURP, TUIP, TURIS (PKRP/PKEP), सर्वाधिक प्रचलित व आधुनिक दुर्बिणीद्वारे शस्त्रक्रिया' },
    ],
  },
  {
    key: 'stricture',
    en: { title: 'Urethral Stricture', subtitle: 'Treatment for narrowing of the urinary passage' },
    mr: { title: 'मूत्रमार्गातील अडथळा (Urethral Stricture)', subtitle: 'मूत्रमार्गावरील अडथळ्यावर उपचार' },
    items: [
      { en: 'Endoscopic management for stricture urethra (DVIU)', mr: 'मूत्रमार्गावरील अडथळ्यावर दुर्बिणीद्वारे निदान व उपचार (DVIU)' },
      { en: 'Urethroplasty — reconstructive surgery for the urinary passage', mr: 'मूत्रमार्गाची प्लास्टिक सर्जरी / मूत्रमार्ग नवनिर्माण शस्त्रक्रिया (Urethroplasty)' },
    ],
  },
  {
    key: 'oncology',
    en: { title: 'Uro-Oncology', subtitle: 'Comprehensive care for urinary tract cancers' },
    mr: { title: 'मूत्रमार्गाचे कॅन्सर (Uro-Oncology)', subtitle: 'मूत्रमार्गाच्या कर्करोगावर सर्वसमावेशक उपचार' },
    items: [
      { en: 'Kidney cancer — diagnosis and treatment', mr: 'किडनी कॅन्सर — निदान व उपचार' },
      { en: 'Bladder cancer — diagnosis and endoscopic tumour resection (TURBT)', mr: 'मूत्राशय (Bladder) कॅन्सर — दुर्बिणीद्वारे मूत्राशयाच्या कॅन्सरचे निदान व बिनटाक्याची शस्त्रक्रिया (TURBT)' },
      { en: 'Prostate cancer — diagnosis and treatment', mr: 'प्रोस्टेट कॅन्सर — निदान व उपचार' },
      { en: 'Testis cancer', mr: 'अंडकोषाचा (Testis) कॅन्सर' },
      { en: 'Penile cancer', mr: 'पुरुषलिंगाचा (Penis) कॅन्सर' },
      { en: 'Preventive oncology — PSA screening for high-risk and senior citizens', mr: 'प्रिव्हेन्टिव्ह ऑन्कॉलॉजी — PSA स्क्रीनिंग (हाय रिस्क व ज्येष्ठ नागरिकांसाठी)' },
    ],
  },
  {
    key: 'andrology',
    en: { title: 'Andrology', subtitle: 'Comprehensive treatment for male infertility and sexual disorders, per international guidelines' },
    mr: { title: 'पुरुष वंध्यत्व व लैंगिक समस्या (Andrology)', subtitle: 'आंतरराष्ट्रीय मान्यताप्राप्त शास्त्रीय पद्धतीने निदान व उपचार' },
    items: [
      { en: 'Male infertility — Oligospermia (low sperm count)', mr: 'पुरुष वंध्यत्व — ऑलिगोस्पर्मीया (शुक्रजंतूची संख्या कमी असणे)' },
      { en: 'Azoospermia (absence of sperm)', mr: 'अझूस्पर्मीया (शुक्रजंतू अजिबात नसणे)' },
      { en: 'Asthenospermia (poor sperm motility)', mr: 'अस्थेनोस्पर्मीया (शुक्रजंतूंची हालचाल कमी असणे)' },
      { en: 'Testicular biopsy, Vaso-Vasostomy, TESA/PESA', mr: 'टेस्टिक्युलर बायोप्सी, वासो-वासोस्टोमी, TESA/PESA' },
      { en: 'Sexual problems — impotence and erectile dysfunction', mr: 'लैंगिक समस्या — इम्पोटन्स व इरेक्टाइल डिसफंक्शन' },
    ],
  },
  {
    key: 'female',
    en: { title: 'Female Urology', subtitle: "Urinary tract conditions specific to women" },
    mr: { title: 'स्त्रियांचे मूत्रमार्गाचे विकार (Female Urology)', subtitle: 'महिलांशी संबंधित मूत्रमार्गाच्या समस्या' },
    items: [
      { en: 'Frequent burning sensation during urination', mr: 'लघवीला नेहमी जळजळ होणे' },
      { en: 'Recurrent UTI with lower abdomen pain', mr: 'वारंवार लघवीला जंतुसंसर्ग होऊन ओटी पोटात दुखणे (Recurrent UTI)' },
      { en: 'Stress urinary incontinence — leakage while coughing or sneezing', mr: 'खोकल्याने/शिंकल्याने लघवी होणे (SUI)' },
      { en: 'Loss of bladder control', mr: 'लघवीवर ताबा नसणे' },
    ],
  },
  {
    key: 'pediatric',
    en: { title: 'Paediatric Urology', subtitle: "Congenital and childhood urinary tract conditions" },
    mr: { title: 'लहान मुलांचे मूत्र विकार (Paediatric Urology)', subtitle: 'जन्मजात व बालपणातील मूत्रमार्ग समस्या' },
    items: [
      { en: 'Congenital urinary obstruction / kidney swelling (PUJO)', mr: 'जन्मजात मूत्रमार्गातील अडथळा / किडनीवरील सूज (PUJO)' },
      { en: 'Posterior Urethral Valve (PUV)', mr: 'मूत्रमार्गावरील पडदा (Posterior Urethral Valve)' },
      { en: 'Undescended testis', mr: 'अंडकोष योग्य ठिकाणी नसणे (Undescended Testis)' },
      { en: 'Hypospadias — misplaced urinary opening', mr: 'अयोग्य ठिकाणी लघवीची जागा उघडणे (Hypospadias)' },
      { en: 'Endoscopic treatment for kidney stones in children', mr: 'लहान मुलांमधील किडनी स्टोनचे दुर्बिणीद्वारे उपचार/शस्त्रक्रिया' },
    ],
  },
  {
    key: 'general',
    en: { title: 'General Urology & Surgery', subtitle: 'Common surgical urology conditions' },
    mr: { title: 'जनरल युरॉलॉजी', subtitle: 'सर्वसामान्य शस्त्रक्रिया आवश्यक असलेले आजार' },
    items: [
      { en: 'Hydrocele / Spermatocele (fluid-filled swelling)', mr: 'अंडकोषाच्या गाठी / मूत्रमार्गाच्या गाठी (हायड्रोसील, स्पर्मेटोसील इ.)' },
      { en: 'Varicocele (dilated testicular veins)', mr: 'अंडकोषातील नसांच्या गाठी (व्हॅरीकोसील)' },
      { en: 'Circumcision', mr: 'सर्कमसिजन' },
      { en: 'Penile curvature correction', mr: 'लिंगाची वक्रता (Penile Curvatures)' },
    ],
  },
  {
    key: 'other',
    en: { title: 'Other Superspeciality Services', subtitle: 'Additional advanced procedures' },
    mr: { title: 'इतर सुपरस्पेशालिटी सेवा', subtitle: 'अतिरिक्त प्रगत उपचार सुविधा' },
    items: [
      { en: 'Kidney transplant — counselling and guidance', mr: 'मूत्रपिंड प्रत्यारोपण (Kidney Transplant) संबंधी मार्गदर्शन' },
      { en: 'A-V Fistula surgery for dialysis patients', mr: 'डायलिसीससाठी लागणारी फिस्टुलाची शस्त्रक्रिया (A-V Fistula)' },
      { en: 'Neurogenic bladder — diagnosis & treatment', mr: 'लघवीच्या पिशवीच्या विकाराचे (Neurogenic Bladder) निदान व उपचार' },
      { en: 'Incontinence management', mr: 'लघवी गळण्यावर उपचार (Incontinence)' },
      { en: 'Reconstructive surgery for congenital or acquired urinary tract defects', mr: 'मूत्रमार्गातील व्यंग (जन्मतः किंवा नंतर उदभवलेले दूर करणे) — रिकन्स्ट्रक्टिव्ह सर्जरी' },
      { en: 'Uroflowmetry — urine flow rate graph', mr: 'युरोफ्लोमेट्री (लघवीतील अडथळ्याचा ग्राफ)' },
      { en: 'Laparoscopic urology', mr: 'लॅप्रोस्कोपीक युरॉलॉजी' },
    ],
  },
];

export const dentalServices = [
  { en: 'Root Canal Treatment (R.C.T.)', mr: 'रूट कॅनाल ट्रिटमेंट (R.C.T.)', icon: 'root-canal' },
  { en: 'Fixed Ceramic Crown & Bridge', mr: 'कायमस्वरूपी कृत्रिम दंत उपचार (Fixed Ceramic Crown & Bridge)', icon: 'crown' },
  { en: 'Dental Implant', mr: 'हिरड्यात स्टिलचा स्क्रू बसवून त्यावर सिरॅमिक कॅप (Dental Implant)', icon: 'implant' },
  { en: 'Complete Denture', mr: 'कृत्रिम कवळी बसवणे (Complete Denture)', icon: 'denture' },
  { en: 'Light Cure Filling', mr: 'दाताच्या संधाची फिलिंग (Light Cure Filling)', icon: 'filling' },
  { en: 'Dental X-ray (RVG)', mr: 'दंत क्ष-किरण (Dental X-ray, RVG)', icon: 'xray' },
  { en: 'Orthodontic Treatment', mr: 'वेडेवाकडे दात सरळ करणे (Orthodontic T/t)', icon: 'braces' },
  { en: 'Ultrasonic Scaling', mr: 'हिरड्यांच्या विकारावरील उपचार व शस्त्रक्रिया (Ultrasonic Scaling)', icon: 'scaling' },
  { en: 'Disimpaction & Oral Surgery', mr: 'अक्कल दाढेवरील उपचार व शस्त्रक्रिया (Disimpaction & Oral Surgery)', icon: 'surgery' },
  { en: 'Teeth Bleaching', mr: 'पान-तंबाखू सेवनामुळे दातावर पिवळसर व तपकिरी डागांवर उपचार (Bleaching)', icon: 'whitening' },
];

export const equipment = [
  { en: 'Cystoscope', mr: 'सिस्टोस्कोप', image: '/images/cystoscope.png' },
  { en: "Wolfe Nephroscope", mr: 'वुल्फ नेफ्रोस्कोप', image: '/images/nephroscope.png' },
  { en: 'Ureteroscope (Storz, Germany)', mr: 'युरेटेरोस्कोप (Storz, जर्मनी)', image: '/images/ureteroscope.png' },
  { en: 'TURP Set', mr: 'टीयूआरपी संच', image: '/images/turp_set.png' },
  { en: 'Lithoclast', mr: 'लिथोक्लास्ट', image: '/images/lithoclast.png' },
  { en: 'Stryker Digital Camera Unit', mr: 'स्ट्रायकर डिजिटल कॅमेरा युनिट', image: '/images/camera_unit.png' },
  { en: "Allenger's C-Arm (9\" Image Intensifier)", mr: 'ॲलेंजर्स सी-आर्म (९ इंच इमेज इंटेन्सिफायर)', image: '/images/carm.png' },
  { en: 'Uroflowmetry Unit', mr: 'युरोफ्लोमेट्री युनिट', image: '/images/uroflometry.png' },
  { en: 'Stryker Endo-Laparoscopy Unit', mr: 'स्ट्रायकर एंडो-लॅप्रोस्कोपी युनिट', image: '/images/laparoscopy_unit.png' },
  { en: 'Modern Operation Theatre', mr: 'अत्याधुनिक ऑपरेशन थिएटर', image: '/images/operation_theatre.png' },
];

export const facilityList = [
  { en: 'Cystoscopy — endoscopic examination of the urinary tract', mr: 'दुर्बिणीद्वारे मूत्रमार्गाची तपासणी (सिस्टोस्कोपी)' },
  { en: 'Dedicated Kidney Stone Removal Centre', mr: 'मुतखडा निवारण केंद्र' },
  { en: 'Advanced endoscopic treatment for all stone types (PCNL, URS)', mr: 'दुर्बिणीद्वारे सर्व प्रकारच्या मुतखड्यावर अत्याधुनिक उपचार (PCNL, URS)' },
  { en: 'Stone fragmentation by shock waves (ESWL)', mr: 'मशीनमधील किरणांद्वारे मुतखडा विच्छेदन (ESWL)' },
  { en: 'Non-surgical stone removal facility', mr: 'ऑपरेशनशिवाय मुतखडा काढण्याची सोय' },
  { en: 'Endoscopic prostate gland treatment (TURP)', mr: 'प्रोस्टेट ग्रंथीच्या आजारावर दुर्बिणीद्वारे उपचार (TURP)' },
  { en: 'Endoscopic treatment for urinary tract obstruction (VIU)', mr: 'लघवीतील अडथळ्यावर दुर्बिणीद्वारे उपचार (VIU)' },
  { en: 'Reconstructive plastic surgery of the urinary tract', mr: 'मूत्रमार्गाची प्लास्टिक सर्जरी' },
  { en: 'Male infertility diagnosis & treatment', mr: 'पुरुष वंध्यत्व-निदान व उपचार' },
  { en: 'Sexual health disorder management', mr: 'लैंगिक समस्या निवारण' },
  { en: 'A-V Fistula surgery for dialysis patients', mr: 'डायलिसीससाठी लागणारी फिस्टुलाची शस्त्रक्रिया (A-V Fistula)' },
  { en: 'Kidney transplant counselling & guidance', mr: 'किडनी प्रत्यारोपण (Transplant) सल्ला व मार्गदर्शन' },
  { en: 'Urinary tract cancer diagnosis & treatment (kidney, bladder, prostate)', mr: 'मूत्रमार्ग (किडनी, मूत्राशय, प्रोस्टेट) कॅन्सर निदान व उपचार' },
  { en: 'Genital (penis, testis) tumour & cancer treatment', mr: 'जननेंद्रियाच्या (पेनिस, टेस्टिस) गाठी व कॅन्सर उपचार' },
  { en: "Children's urinary disorders", mr: 'लहान मुलांचे मूत्रविकार' },
  { en: "Women's urinary disorders", mr: 'स्त्रियांचे लघवीचे आजार' },
  { en: 'Laparoscopic urology', mr: 'लॅप्रोस्कोपीक युरॉलॉजी' },
  { en: 'Uroflowmetry (urine flow rate graph)', mr: 'युरोफ्लोमेट्री (लघवीतील अडथळ्याचा ग्राफ)' },
  { en: 'All types of kidney & urinary tract surgery', mr: 'किडनी व मूत्रमार्गाच्या सर्व प्रकारच्या शस्त्रक्रिया' },
  { en: 'General urology & general surgery', mr: 'जनरल युरॉलॉजी व जनरल सर्जरी' },
];

export const timeline = [
  { year: '2015', en: 'Yashodhara Urology Center founded on Ambajogai Road, Latur.', mr: 'अंबाजोगाई रोड, लातूर येथे यशोधरा युरॉलॉजी सेंटरची स्थापना.' },
  { year: '2015', en: 'Kidney Stone Prevention Programme launched for early detection.', mr: 'लवकर निदानासाठी "किडनी स्टोन प्रिव्हेन्शन प्रोग्रॅम" सुरू.' },
  { year: '—', en: 'Empanelled under PM-JAY and MJPJAY for cashless treatment.', mr: 'कॅशलेस उपचारासाठी PM-JAY व MJPJAY अंतर्गत नोंदणी.' },
  { year: '—', en: 'Yashodhara Multispeciality Dental Clinic opened under Dr. Anushree Hedda.', mr: 'डॉ. अनुश्री हेड्डा यांच्या मार्गदर्शनाखाली यशोधरा मल्टीस्पेशालिटी डेंटल क्लिनिक सुरू.' },
  { year: '2026', en: 'Celebrating 11+ years of advanced urology care in Latur.', mr: 'लातूरमध्ये ११+ वर्षांची अत्याधुनिक युरॉलॉजी सेवा साजरी.' },
];

export const contactInfo = {
  urology: {
    name: { en: 'Yashodhara Urology Multispeciality Hospital', mr: 'यशोधरा युरॉलॉजी मल्टीस्पेशालिटी हॉस्पिटल' },
    doctor: { en: 'Dr. Dheeraj Hedda (M.Ch Urology)', mr: 'डॉ. धीरज हेड्डा (एम.सी.एच. युरॉलॉजी)' },
    address: {
      en: 'Opp. Bus Stand No. 2, Behind Yashoda Theatre, Old Renapur Naka, Ambajogai Road, Latur',
      mr: 'बस स्टँड क्र. २ समोर, यशोदा थिएटरच्या मागे, जुना रेणापूर नाका, अंबाजोगाई रोड, लातूर',
    },
    phone: '02382-227850',
    mobile: '9021186939',
    email: 'yashodharauroconsult@gmail.com',
    mapQuery: 'Yashodhara Institute of Urology, Ambajogai Road, Latur',
  },
  dental: {
    name: { en: 'Yashodhara Multispeciality Dental Clinic', mr: 'यशोधरा मल्टीस्पेशालिटी डेंटल क्लिनिक' },
    doctor: { en: 'Dr. Anushree Dhiraj Hedda (BDS)', mr: 'डॉ. अनुश्री धीरज हेड्डा (बी.डी.एस.)' },
    address: {
      en: 'Opp. Kaymkhani Function Hall, Sham Nagar, Ambajogai Road, Latur',
      mr: 'कायमखानी फंक्शन हॉल समोर, शाम नगर, अंबाजोगाई रोड, लातूर',
    },
    phone: '02382-227850',
    mapQuery: 'Ambajogai Road, Sham Nagar, Latur',
  },
};

export const departments = [
  { en: 'Kidney Stone Treatment', mr: 'मुतखडा उपचार' },
  { en: 'Prostate Clinic', mr: 'प्रोस्टेट क्लिनिक' },
  { en: 'Uro-Oncology', mr: 'युरो-ऑन्कोलॉजी' },
  { en: 'Andrology / Male Infertility', mr: 'एन्ड्रोलॉजी / पुरुष वंध्यत्व' },
  { en: 'Female Urology', mr: 'महिला युरॉलॉजी' },
  { en: 'Paediatric Urology', mr: 'बालरोग युरॉलॉजी' },
  { en: 'General Urology & Surgery', mr: 'जनरल युरॉलॉजी व सर्जरी' },
  { en: 'Dental Clinic', mr: 'डेंटल क्लिनिक' },
];
