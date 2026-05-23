/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, WhyChooseReason, WellnessProgram, Testimonial, GalleryItem, FAQ, HealthTip } from './types';

export const servicesData: Service[] = [
  {
    id: 'nicu',
    title: 'Neonatal Intensive Care (NICU)',
    gujaratiTitle: 'નવજાત સઘન સંભાળ વિભાગ (NICU)',
    description: 'Level-III advanced intensive care for premature, low birth weight, and critically-ill newborns.',
    iconName: 'ShieldAlert',
    category: 'neonatal',
    details: [
      '24/7 dedicated neonatologist availability',
      'High-frequency incubators and warmers',
      'Advanced neonatal mechanical ventilators',
      'Surfactant replacement therapy',
      'Continuous multipara monitors and phototherapy',
      'Trained neonatal nursing ratio of 1:1 or 1:2'
    ]
  },
  {
    id: 'ped-consult',
    title: 'Pediatric Consultation',
    gujaratiTitle: 'બાળરોગ નિષ્ણાત પરામર્શ',
    description: 'Expert, compassionate clinical consultation for infants, children, and adolescents up to age 18.',
    iconName: 'Stethoscope',
    category: 'pediatric',
    details: [
      'Comprehensive diagnosis of acute & chronic illnesses',
      'Guidance from senior pediatric experts',
      'Warm, kid-friendly clinical environment',
      'Thorough analysis of medical history',
      'Gentle physical examinations'
    ]
  },
  {
    id: 'vaccination',
    title: 'Vaccination Center',
    gujaratiTitle: 'રસીકરણ કેન્દ્ર',
    description: 'Complete immunization programs adhering strictly to IAP (Indian Academy of Pediatrics) guidelines.',
    iconName: 'Syringe',
    category: 'preventive',
    details: [
      'Strict cold-chain maintenance for maximum vaccine efficacy',
      'Painless vaccine choices available',
      'Digital vaccine reminder notifications for parents',
      'Post-vaccination observation and safety monitoring',
      'Catch-up vaccination planning for missed doses'
    ]
  },
  {
    id: 'newborn-care',
    title: 'Newborn Care & Support',
    gujaratiTitle: 'નવજાત બાળકની સંભાળ',
    description: 'Specialized checkups, screening, and guidance for parents during the initial golden months of a baby\'s life.',
    iconName: 'Baby',
    category: 'neonatal',
    details: [
      'Newborn thermal care and cord management guidance',
      'Lactation & breastfeeding counseling for mothers',
      'Newborn metabolic and hearing screening tests',
      'Growth & weight tracking milestones',
      'Umbilical cord care and bathing protocols'
    ]
  },
  {
    id: 'emergency',
    title: 'Child Emergency Care',
    gujaratiTitle: 'બાળકોની કટોકટીની સંભાળ',
    description: 'Immediate resuscitation, emergency management, and triage for acute pediatric injuries and crises.',
    iconName: 'HeartPulse',
    category: 'general',
    details: [
      'Dedicated pediatric emergency department (ER)',
      'Triage by seasoned pediatric trauma clinicians',
      'Emergency medicines, oxygen and life-support ready',
      'Fast-track admission to NICU/PICU',
      'Ambulance coordination with portable emergency transport'
    ]
  },
  {
    id: 'fever-infection',
    title: 'Fever & Infection Treatment',
    gujaratiTitle: 'તાવ અને ચેપની સારવાર',
    description: 'Accurate profiling and clinical management of pediatric infectious diseases, fevers, and viral outbreaks.',
    iconName: 'Thermometer',
    category: 'pediatric',
    details: [
      'Diagnosis of dengue, malaria, typhoid, and seasonal viral fevers',
      'Hydration management and rapid lab diagnosis',
      'Evidence-based antibiotic usage guidelines (preventing overuse)',
      'Symptomatic relief care plans for parents to follow at home',
      'Inpatient care with clean, sanitized medical suites'
    ]
  },
  {
    id: 'nutrition',
    title: 'Child Nutrition Guidance',
    gujaratiTitle: 'બાળ પોષણ માર્ગદર્શન',
    description: 'Tailored dietary schedules and nutrition consultations to combat picking eating, malnutrition, or childhood obesity.',
    iconName: 'Apple',
    category: 'preventive',
    details: [
      'Weaning foods and complementary feeding schedules (6+ months)',
      'Diet charts tailored to your child\'s physical activity',
      'Correction of micronutrient deficiencies (Anemia, Vitamin D, etc.)',
      'Management of food allergies and intolerances (e.g., lactose/gluten)',
      'Healthy snacking ideas to replace processed junk food'
    ]
  },
  {
    id: 'growth-monitor',
    title: 'Growth Monitoring',
    gujaratiTitle: 'વિકાસ મોનીટરીંગ',
    description: 'Regular physical and psychological milestone tracking using WHO growth charts to ensure natural progression.',
    iconName: 'TrendingUp',
    category: 'preventive',
    details: [
      'Precise measurement of height, weight, and head circumference',
      'Tracking of motor, language, cognitive, and social milestones',
      'Early detection of growth hormone deficiencies',
      'Assessment of developmental delays with specialized clinical tools',
      'Actionable correction plans for developmental pacing'
    ]
  },
  {
    id: 'asthma-allergy',
    title: 'Asthma & Allergy Care',
    gujaratiTitle: 'અસ્થમા અને એલર્જી સંભાળ',
    description: 'Therapies, counseling, and long-term control pathways for pediatric asthma, wheezing, and allergic rhinitis.',
    iconName: 'Wind',
    category: 'pediatric',
    details: [
      'Nebulization facilities in emergency and routine zones',
      'Diagnosis of environmental, dust, pollen, and food allergy triggers',
      'Inhaler technique checking and child-friendly spacer coaching',
      'Asthma Action Plans designed for school and domestic caregivers',
      'Safe, age-appropriate allergen avoidance guidelines'
    ]
  },
  {
    id: 'picu',
    title: 'Pediatric ICU Support',
    gujaratiTitle: 'પીડિયાટ્રિક આઈસીયુ (PICU) સપોર્ટ',
    description: 'State-of-the-art life support monitoring systems and expert care for older infants and children in critical states.',
    iconName: 'Activity',
    category: 'pediatric',
    details: [
      'Advanced continuous cardiorespiratory monitoring',
      'Intervention for trauma, severe breathing difficulty, and seizures',
      'Expert pediatric ICU nursing with focused direct oversight',
      'In-house diagnostic and arterial blood gas analysis support',
      'Comfort-centered pediatric pain management'
    ]
  },
  {
    id: 'developmental',
    title: 'Developmental Checkups',
    gujaratiTitle: 'વિકાસાત્મક તપાસ',
    description: 'Early screenings for autism, ADHD, speech delays, and behavioral trends to facilitate timely early intervention.',
    iconName: 'Smile',
    category: 'preventive',
    details: [
      'Standardized developmental quotient tests',
      'Speech therapist and child behaviorist recommendations',
      'Play-based interactive assessment models',
      'Sensory integration screening',
      'Supportive parental counseling and guidance guides'
    ]
  },
  {
    id: 'preventive-care',
    title: 'Preventive Child Healthcare',
    gujaratiTitle: 'નિવારક બાળ આરોગ્ય સંભાળ',
    description: 'Comprehensive health packages, wellness routines, and preventative exams to stop illnesses before they start.',
    iconName: 'ShieldPlus',
    category: 'preventive',
    details: [
      'Routine seasonal physical assessments',
      'Ophthalmic and dental pre-screenings for school kids',
      'Hygiene, handwashing, and sanitary guidelines',
      'Eradication of worm infestations (De-worming campaigns)',
      'Immune-health boosting advisory and preventive check charts'
    ]
  }
];

export const reasonsData: WhyChooseReason[] = [
  {
    id: 'emergency-247',
    title: '24×7 Emergency Support',
    description: 'Fully prepared emergency room ready for active neonatal and pediatric trauma situations anytime, day or night.',
    iconName: 'Clock',
    highlight: 'Always Prepared'
  },
  {
    id: 'experts',
    title: 'Expert Pediatric & Neonatal Team',
    description: 'Respected child caretakers and neonatologists with extensive backgrounds in handling difficult infant profiles.',
    iconName: 'Users',
    highlight: 'Highly Experienced'
  },
  {
    id: 'nicu-level3',
    title: 'Advanced Level-3 NICU',
    description: 'Equipped with ultra-modern incubators, nitric oxide inhalation systems, high-frequency ventilators, and phototherapy.',
    iconName: 'Cpu',
    highlight: 'Next-Gen Technology'
  },
  {
    id: 'child-friendly',
    title: 'Child-Friendly Environment',
    description: 'Warm, cartoon-themed interiors, colorful consultation desks, and play areas to drastically reduce clinician fear in children.',
    iconName: 'Sparkles',
    highlight: 'Zero Dr-Fear'
  },
  {
    id: 'nurses',
    title: 'Experienced Pediatric Nursing Staff',
    description: 'Our nurses are trained specifically in pediatric communication - handling tiny veins gently and consoling anxious parents.',
    iconName: 'Award',
    highlight: 'Gentle & Patient'
  },
  {
    id: 'hygiene',
    title: 'Hygienic & Safe Infrastructure',
    description: 'Multiple disinfection schedules daily, clean filtered clinical air, and isolated waiting spots for children with high fever.',
    iconName: 'ShieldCheck',
    highlight: '100% Sanitized'
  },
  {
    id: 'trusted',
    title: 'Trusted by over 15,000+ Families',
    description: 'Deeply trusted and recommended across central Gujarat with a phenomenal 4.5 star rating on real reviews.',
    iconName: 'Heart',
    highlight: 'Community Choice'
  },
  {
    id: 'equipment',
    title: 'Modern Medical Equipment',
    description: 'Precision clinical infusion pumps, micro-testing, pediatric pulse oximeters, and modern ultrasound capabilities.',
    iconName: 'Layers',
    highlight: 'Premium Quality'
  }
];

export const wellnessProgramsData: WellnessProgram[] = [
  {
    id: 'p1',
    title: 'Comprehensive Immunization Program',
    description: 'A complete scheduled package covering all core and optional vaccines recommended by the Indian Academy of Pediatrics.',
    ageScope: '0 to 12 Years',
    schedule: 'Adhering to strict age milestones',
    benefits: [
      'Electronic cold-chain tracking for zero efficacy loss',
      'Free pediatric developmental baseline screen on vaccine days',
      'Digital certificate of vaccination stored online'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'p2',
    title: 'Infant Milestones Monitoring Plan',
    description: 'Routine sensory-motor checkups mapping auditory response, visual tracking, social smile, and neck-holding progression.',
    ageScope: '0 to 2 Years',
    schedule: 'Quarterly Checkups',
    benefits: [
      'Detect early signs of developmental delays',
      'Personalized baby massage and sleep routine consultations',
      'Introduction guidelines for weaning solid foods'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'p3',
    title: 'Healthy Sprout Nutrition Program',
    description: 'Solving picky-eating habits, nutrient deficiencies, and physical growth issues with custom-made infant nutrition diets.',
    ageScope: '1 to 5 Years',
    schedule: 'Bi-Monthly Follow-ups',
    benefits: [
      'Body Mass Index and Muscle fat analysis',
      'Tasty kid-approved recipes packed with Iron, Calcium & Vitamins',
      'Continuous nutritionist checkups on WhatsApp'
    ],
    iconName: 'Apple'
  },
  {
    id: 'p4',
    title: 'Preventive Little-Champion Health Package',
    description: 'Annual holistic evaluation checking lung sound, vision acuity, bone density, thyroid, and dental hygiene.',
    ageScope: '5 to 15 Years',
    schedule: 'Once a Year',
    benefits: [
      'Comprehensive biochemical urine and blood screening',
      'Postural monitoring and physical fitness advice',
      'Stress and cognitive screen helpful for school'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'p5',
    title: 'Newborn Transition Support Package',
    description: 'Home-prep, cord care, and maternal recovery guidelines designed to make the initial month of motherhood hassle-free.',
    ageScope: 'First 30 Days of Life',
    schedule: 'Weekly Consultations',
    benefits: [
      'Continuous clinical vitals check for the baby and mother',
      'Practical demonstration of bathing and holding techniques',
      'Emergency fever warning sign detection checklist'
    ],
    iconName: 'Baby'
  },
  {
    id: 'p6',
    title: 'Seasonal Allergy & Flu Guard Protection',
    description: 'Providing preemptive flu shots, inhalant allergen screening, and immune-building protocols before monsoon & winter cycles.',
    ageScope: '6 Months to 18 Years',
    schedule: 'Pre-Monsoon & Post-Diwali',
    benefits: [
      'Influenza quadrivalent vaccination included',
      'Vitamin and nutrient immune booster support',
      'Respiratory counseling for cold-sensitive kids'
    ],
    iconName: 'Wind'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Sneha Patel',
    childName: 'Aarav Patel',
    age: '12-Day-Old Baby',
    rating: 5,
    highlight: 'Life-saving NICU care for our newborn!',
    comment: 'Our son Aarav was born prematurely at 32 weeks and required immediate NICU support. The Level-III NICU facilities at Lotus Hospital are world-class. The team of neonatologists were reassuring, transparent, and extremely professional. The 24-hour pediatric nurses kept us updated constantly. Today, Aarav is home and completely healthy.',
    location: 'Gotri, Vadodara',
    date: 'May 12, 2026'
  },
  {
    id: 't2',
    parentName: 'Rajesh Shah',
    childName: 'Meera Shah',
    age: '4 Years',
    rating: 5,
    highlight: 'The most family-friendly hospital in Gujarat',
    comment: 'Meera is terrified of doctors, but the custom comic-themed treatment rooms and play zones at Lotus Hospital work miracles. Dr. treated her with so much patience and warmth during her pneumonia diagnosis. The nursing staff makes children feel secure. The entire environment is exceptionally clean and spacious.',
    location: 'Harni Road, Vadodara',
    date: 'April 20, 2026'
  },
  {
    id: 't3',
    parentName: 'Pooja Trivedi',
    childName: 'Kavya Trivedi',
    age: '1.5 Years',
    rating: 5,
    highlight: 'Prompt emergency support late at night',
    comment: 'Kavya had a severe febrile seizure with very high fever at 2 AM. We brought her in severe panic. The Emergency Trauma department acted within seconds, cooled her body down, and medicated her immediately. We stayed for observation. I am incredibly grateful to Lotus Hospital\'s 24-hours quick pediatric response team.',
    location: 'Waghodia Road, Vadodara',
    date: 'March 15, 2026'
  },
  {
    id: 't4',
    parentName: 'Amit Gadhvi',
    childName: 'Reyansh Gadhvi',
    age: '6 Months',
    rating: 5,
    highlight: 'Extremely professional and structured vaccination',
    comment: 'The vaccination pricing is transparent. Best of all, they keep a strict digital checklist log and send automatic reminders via SMS. The doctors checked Reyansh\'s general developmental markers on vaccine day too. The entire billing process is quick, clean, and highly professional.',
    location: 'New VIP Road, Vadodara',
    date: 'February 28, 2026'
  }
];

export const galleryItemsData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Advanced Neonatal ICU (NICU)',
    description: 'Level-3 NICU equipped with world-class incubators, clinical warmers, and continuous bedside monitors.',
    category: 'neonatal',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g2',
    title: 'Colorful Pediatric Consultation Room',
    description: 'Designed specifically with child-friendly themes, toys, and soft lighting to reduce anxiety.',
    category: 'pediatric',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g3',
    title: 'Spacious & Safe Kids Play Zone',
    description: 'Playful waiting room with safe toys, child blocks, and interactive wall games to keep siblings happy.',
    category: 'facility',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g4',
    title: 'Lotus Hospital Front Facade',
    description: 'Our hospital located at Bilipatra Complex, Harni road. 24/7 prominent signage and ambulance space.',
    category: 'facility',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g5',
    title: 'Pediatric General Treatment Ward',
    description: 'Hygienic, comfortable beds for small children with parent recliners and individual TV screens.',
    category: 'care',
    imageUrl: 'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g6',
    title: 'Advanced NICU Protective Care Suite',
    description: 'Pristine containment rooms for post-op surgical neonatologist checkups.',
    category: 'neonatal',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
  }
];

export const faqsData: FAQ[] = [
  {
    id: 'f1',
    question: 'Is emergency pediatric care available 24×7?',
    answer: 'Yes, Lotus Hospital provides fully integrated round-the-clock (24 Hours, 365 Days) pediatric and neonatal emergency care. A resident pediatric specialist, anesthesiologist, and advanced trauma nurses are in-house for cases like febrile seizures, severe respiratory distress, or trauma.',
    category: 'emergency'
  },
  {
    id: 'f2',
    question: 'Do you provide NICU support and what level is it?',
    answer: 'We feature an advanced Level-III Neonatal Intensive Care Unit (NICU). It handles the most complex infant profiles, including severe respiratory distress syndrome, micro-preemie babies born as early as 26-28 weeks, hypoxic-ischemic encephalopathy, and congenital conditions.',
    category: 'nicu'
  },
  {
    id: 'f3',
    question: 'Are all core pediatric vaccinations available?',
    answer: 'Yes. We stock all official immunizations recommended by the WHO and the Indian Academy of Pediatrics (IAP). Our cold-chain storage uses specialized clinical grade systems to guarantee maximum safety and vaccine potency.',
    category: 'vaccines'
  },
  {
    id: 'f4',
    question: 'How do you structure the appointment booking and waiting times?',
    answer: 'You can book your hospital appointment easily via this website, over phone call (+91 70697 80800), or walk in directly. Online bookings receive high-priority slots to ensure waiting time does not exceed 10-15 minutes in our sanitized waiting corridors.',
    category: 'appointments'
  },
  {
    id: 'f5',
    question: 'Which areas from Vadodara can access Lotus Hospital quickly?',
    answer: 'We are situated in Bilipatra Complex on Harni-Warasiya Ring Road, opposing Banker\'s Hospital. This central location offers superfast highway access to families from Harni, Warasiya, Bapunagar, Waghodia Road, VIP Road, Gotri, and nearby rural parts of Vadodara district.',
    category: 'general'
  },
  {
    id: 'f6',
    question: 'Are cash-less insurance or government healthcare cards supported?',
    answer: 'Yes! We support multiple private TPA mediclaim insurance providers for cashless child and NICU admissions. Please connect with our active reception on-site with your policy paper to initiate pre-authorization within 1 hour.',
    category: 'general'
  }
];

export const healthTipsData: HealthTip[] = [
  {
    id: 'tip1',
    title: 'Newborn Bathing & Care: Best Clinical Practices',
    summary: 'Essential guidelines on when and how to give your neonate their first bath to prevent thermal stress.',
    category: 'newborn',
    readTime: '3 min read',
    author: 'Chief Neonatologist, Lotus',
    date: 'May 18, 2026',
    iconName: 'Baby',
    content: [
      'Maintain umbilical cord dry: Until the umbilical cord naturally detaches (usually 5 to 14 days), stick purely to sponge-bathing.',
      'Water Temperature: Prepare lukewarm water. Check the warmth using your inner elbow — it should feel pleasantly warm, not hot (around 37°C).',
      'Infant Shivering: Keep rooms warm and draft-free during dressing. Towel dry their heads immediately to preserve core warmth.'
    ]
  },
  {
    id: 'tip2',
    title: 'Managing High Fevers in Children: Immediate Steps',
    summary: 'A quick emergency guide for parents when their toddler starts running a high temperature above 100.4°F.',
    category: 'safety',
    readTime: '4 min read',
    author: 'Pediatric Emergency Lead',
    date: 'May 12, 2026',
    iconName: 'Thermometer',
    content: [
      'Avoid cold ice water sponging: Quick extreme cooling triggers severe inner-body shivering, which clinical studies prove spikes core temperature further. Stick to room-temperature tap water sponging on forehead, groin and armpits.',
      'Encourage Fluid Intake: Offer sips of fresh water, breastmilk, or oral rehydration solution (ORS). Dehydration worsens fevers quickly.',
      'Check emergency symptoms: Immediately drive to Lotus hospital if you observe stiff neck, continuous vomiting, breathing struggle, or if your infant is younger than 3 months.'
    ]
  },
  {
    id: 'tip3',
    title: 'Superfoods for Kids: Cultivating Immuno-Strength',
    summary: 'How to enrich your infant or toddler\'s nutritional palette with iron, calcium, and vitamin-rich fresh veggies.',
    category: 'nutrition',
    readTime: '5 min read',
    author: 'Child Nutrition Counselor',
    date: 'May 05, 2026',
    iconName: 'Apple',
    content: [
      'Introduce Single Fruit Purees: When starting complementary feeding at 6 months, introduce mashed apple or banana for 3 consecutive days to rule out infant allergies before checking other recipes.',
      'Millets and Pulses: High-protein ragi, khichdi, and lentil purees fuel muscle and cognitive bone growth exceptionally well for toddlers.',
      'Limit Sugars: Restrict packaged juices or cookies. Focus on pureed organic fruits and natural yogurt sets instead.'
    ]
  },
  {
    id: 'tip4',
    title: 'Surviving Season-Change Asthma & Allergic Cough',
    summary: 'Actionable tips to protect children with respiratory sensitivity against Vadodara\'s dusty wind phases.',
    category: 'seasonal',
    readTime: '4 min read',
    author: 'Pulmonary Pediatrician',
    date: 'April 28, 2026',
    iconName: 'Wind',
    content: [
      'Keep dust allergens out: Close home windows during mid-afternoon wind phases. Regularly wash pillows and favorite soft plush toys at 60°C.',
      'Consistent Spacers/Inhalers: If your child suffers daily asthma profiles, never cease prescribed control doses without asking your Lotus physician first.',
      'Warm hydration: Encourage drinking mild warm water to loosen mucus buildup in respiratory pathways naturally.'
    ]
  }
];
