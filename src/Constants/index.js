import { facebook, instagram, shieldTick, support, twitter, career, contactSupport, instructor, onlineuniversity, globallearning, internship, professionaldevelopment } from "../assets/icons";
import { GraduationCap, Award, Banknote, Globe2, Users } from 'lucide-react';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#universities", label: "Universities" },
    { href: "#contact-us", label: "Contact Us" },
    
    
];


export const services = [
    {
        imgURL: support,
        label: "Affordable Options ",
        subtext: "Find budget-friendly MBBS programs with scholarships and financial aid options."
    },
    {
        imgURL: shieldTick,
        label: "Trusted Information",
        subtext: "Get accurate and up-to-date details about MBBS programs abroad, including universities, fees, and admission requirements."
    },
    {
        imgURL: career,
        label: "Expert Guidance",
        subtext: "Your experienced consultants help you choose the best country, university, and application process tailored to your needs."
    },
];

export const advantages = [
    {
        imgURL: contactSupport,
        label: "24/7 Support ",
        subtext: "Our team is always available to assist you."
    },
    {
        imgURL: instructor,
        label: "Student Community",
        subtext: "Connect, read reviews, and learn from student experiences."
    },
    {
        imgURL: onlineuniversity,
        label: "Top Universities",
        subtext: "Find top medical colleges abroad with course and fee details."
    },
    {
        imgURL: globallearning,
        label: "Worldwide Recognition ",
        subtext: "Study at globally accredited medical universities."
    },
    {
        imgURL: internship,
        label: "Internship Opportunities",
        subtext: "Gain hands-on experience in top hospitals."
    },
    {
        imgURL: professionaldevelopment,
        label: "Career Growth",
        subtext: "Bright future with international medical exposure."
    }
];


export const content = {
  introduction: `MBBSGlobe stands as a beacon of excellence in medical education abroad, helping aspiring doctors achieve their dreams through comprehensive support and guidance. With over a decade of experience, we've successfully placed thousands of students in prestigious medical universities worldwide. Our commitment to quality education, transparent processes, and student success has made us a trusted name in international medical education. We understand that choosing to study medicine abroad is a significant decision, and we're here to make your journey seamless and rewarding.`,
  
  sections: [
    {
      title: "Why Choose Us",
      icon: Award,
      points: [
        "15+ years of expertise in medical education counseling",
        "100% visa assistance with proven track record",
        "Dedicated student support team available 24/7",
        "Direct university partnerships ensuring authentic admissions",
        "Comprehensive pre-departure orientation programs"
      ]
    },
    {
      title: "Top Study Destinations",
      icon: Globe2,
      points: [
        "Russia - Known for advanced medical infrastructure",
        "Georgia - Offering EU-recognized medical degrees",
        "Philippines - English-medium instruction with clinical exposure",
        "Kazakhstan - Modern facilities with affordable education",
        "Kyrgyzstan - WHO-recognized universities with practical training"
      ]
    },
    {
      title: "Scholarship Opportunities",
      icon: Banknote,
      points: [
        "Merit-based scholarships up to 50% tuition waiver",
        "Early bird application discounts",
        "Sports and cultural achievement grants",
        "Need-based financial aid programs",
        "Research excellence scholarships"
      ]
    },
    {
      title: "Student Benefits",
      icon: Users,
      points: [
        "Guaranteed clinical rotations in teaching hospitals",
        "International student exchange programs",
        "Language support and cultural integration",
        "Career guidance and USMLE preparation",
        "Alumni network access worldwide"
      ]
    },
    {
      title: "Academic Advantages",
      icon: GraduationCap,
      points: [
        "WHO and MCI recognized programs",
        "Hands-on clinical training from year one",
        "Advanced medical simulation laboratories",
        "International faculty members",
        "Research opportunities with published papers"
      ]
    }
  ]
};



export const universities = {
  Russia: [
    { name: "Kazan Federal University", url: "https://kpfu.ru/eng" },
    { name: "First Moscow State Medical University", url: "https://www.sechenov.ru/eng/" },
    { name: "Crimea Federal University", url: "https://cfuv.ru/en" },
    { name: "Volgograd State Medical University", url: "https://www.volgmed.ru/en/" },
  ],
  Uzbekistan: [
    { name: "Tashkent Medical Academy", url: "https://tma.uz/en/" },
    { name: "Samarkand State Medical University", url: "https://www.sammi.uz/en/" },
    { name: "Bukhara State Medical Institute", url: "https://bsmi.uz/en/" },
  ],
  Kazakhstan: [
    { name: "Al-Farabi Kazakh National University", url: "https://www.kaznu.kz/en/" },
    { name: "Kazakh National Medical University", url: "https://kaznmu.kz/eng/" },
    { name: "South Kazakhstan Medical Academy", url: "https://skma.edu.kz/en/" },
  ],
  Philippines: [
    { name: "University of Santo Tomas", url: "https://www.ust.edu.ph/" },
    { name: "Emilio Aguinaldo College", url: "https://eac.edu.ph/" },
    { name: "AMA School of Medicine", url: "https://www.amaes.edu.ph/" },
  ],
  Georgia: [
    { name: "Tbilisi State Medical University", url: "https://tsmu.edu/" },
    { name: "Batumi Shota Rustaveli State University", url: "https://bsu.edu.ge/en/" },
    { name: "David Tvildiani Medical University", url: "https://dtmu.ge/" },
  ],
  Kyrgyzstan: [
    { name: "Osh State University", url: "https://www.oshsu.kg/" },
    { name: "Kyrgyz State Medical Academy", url: "https://www.kgma.kg/" },
    { name: "International School of Medicine", url: "https://ism.edu.kg/" },
  ],
  Egypt: [
    { name: "Cairo University", url: "https://cu.edu.eg/Home" },
    { name: "Ain Shams University", url: "https://www.asu.edu.eg/" },
    { name: "Alexandria University", url: "https://alexu.edu.eg/" },
    { name: "Mansoura University", url: "https://www.mans.edu.eg/en" },
  ]
};


  export const stories = [
    {
      name: "Rahul",
      year: "2023",
      university: "Kazan Federal University",
      country: "Russia",
      quote: "Studying MBBS abroad was a dream come true. The exposure to international healthcare practices has shaped my medical career significantly.",
      gender: "male",
      specialty: "Cardiology",
      stats: { clinicalHours: 2500, surgeries: 10, research: 1 }
    },
    {
      name: "Priya",
      year: "2023",
      university: "Tashkent Medical Academy",
      country: "Uzbekistan",
      quote: "The quality of education and practical training I received was exceptional. Now I'm confidently pursuing my medical career.",
      gender: "female",
      specialty: "Pediatrics",
      stats: { clinicalHours: 2300, surgeries: 20, research: 2 }
    },
    {
      name: "Kumar",
      year: "2022",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      quote: "The international exposure and hands-on clinical experience helped me develop into a competent medical professional.",
      gender: "male",
      specialty: "Neurology",
      stats: { clinicalHours: 2700, surgeries: 30, research: 3 }
    },
    {
      name: "Iniya",
      year: "2022",
      university: "Osh State University",
      country: "Kyrgyzstan",
      quote: "The journey was transformative. The multicultural environment and modern facilities exceeded my expectations.",
      gender: "female",
      specialty: "Surgery",
      stats: { clinicalHours: 2800, surgeries: 40, research: 4 }
    },
    {
      name: "Rajesh",
      year: "2023",
      university: "Alexandria University",
      country: "Egypt",
      quote: "The clinical rotations and practical exposure were incredible. I'm grateful for this life-changing opportunity.",
      gender: "male",
      specialty: "Orthopedics",
      stats: { clinicalHours: 2600, surgeries: 50, research: 5 }
    },
    {
      name: "Avanthika",
      year: "2022",
      university: "Samarkand State Medical University",
      country: "Uzbekistan",
      quote: "The support system and quality of education helped me achieve my dream of becoming a doctor.",
      gender: "female",
      specialty: "Research",
      stats: { clinicalHours: 2400, surgeries: 60, research: 6 }
    }
  ];
  





export const footerLinks = [
    {
        title: "Top Universities",
        links: [
            { name: "Russia", link: "/" },
            { name: "Uzbekistan", link: "/" },
            { name: "Kazakhstan", link: "/" },
            { name: "Philippines", link: "/" },
            { name: "Georgia", link: "/" },
            { name: "Egypt", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "support@mbbsglobe.com", link: "support@mbbsglobe.com" },
            { name: "+91 9985456525", link: "tel:919985456525" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];