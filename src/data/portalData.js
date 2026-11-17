export const UNIVERSITY_INFO = {
  name: "Koneru Lakshmaiah Education Foundation",
  shortName: "KL University",
  acronym: "KLEF",
  portalName: "SAMVAD 360",
  tagline: "Your University. Your Processes. Your Voice.",
  description: "A unified digital gateway to navigate university processes, discover student services and connect with the right institutional resources.",
  accreditation: "NAAC A++ Graded (3.57 CGPA) • Category-I Deemed to be University • UGC / AICTE Approved",
  ranking: "NIRF Top 35 University • 50+ Years of Academic Heritage",
  campuses: [
    { id: "vaddeswaram", name: "Green Fields Campus, Vaddeswaram, Guntur / Vijayawada (AP)" },
    { id: "hyderabad", name: "Aziznagar Campus, Hyderabad (Telangana)" }
  ],
  sacName: "Student Activity Center (SAC)",
  councilName: "KL University Student Council",
  academicYear: "2026 - 2027",
  sdgCommitment: "UN Sustainable Development Goal 16: Peace, Justice & Strong Institutions"
};

export const QUICK_SERVICES = [
  {
    id: "od-approval",
    title: "On-Duty (OD) Attendance",
    category: "Academic & SAC",
    sla: "24 - 48 Hours",
    description: "Apply for OD attendance for participating in technical hackathons, cultural fests, sports meets, or SAC events.",
    icon: "CalendarCheck",
    actionText: "Apply OD",
    popular: true,
    steps: 3
  },
  {
    id: "hall-ticket",
    title: "Hall Ticket Clearance",
    category: "Examinations",
    sla: "Instant - 24 Hours",
    description: "Verify fee dues, attendance eligibility (>75%), library clearance, and download semester end exam admit card.",
    icon: "FileBadge",
    actionText: "Verify Clearance",
    popular: true,
    steps: 2
  },
  {
    id: "bonafide-cert",
    title: "Bonafide & Study Certificate",
    category: "Registrar Office",
    sla: "1 - 2 Working Days",
    description: "Digital verified bonafide certificate with QR code for passport, bank education loan, bus pass, or visa processing.",
    icon: "Award",
    actionText: "Request Certificate",
    popular: true,
    steps: 2
  },
  {
    id: "hostel-pass",
    title: "Hostel Outing & Leave Pass",
    category: "Residential Life",
    sla: "Same Day Approval",
    description: "Biometric and parent SMS verified gate pass for local outing, home town leave, or medical emergencies.",
    icon: "Home",
    actionText: "Generate Pass",
    popular: true,
    steps: 2
  },
  {
    id: "club-event",
    title: "Club Event Hosting & Budget",
    category: "SAC & Student Affairs",
    sla: "3 - 5 Working Days",
    description: "Submit event proposal, venue requisition (Open Air Theatre, R&D Auditorium), faculty advisor nod, and budget sanction.",
    icon: "Sparkles",
    actionText: "Propose Event",
    popular: false,
    steps: 4
  },
  {
    id: "grievance-voice",
    title: "SAMVAD Grievance Redressal",
    category: "Student Ombudsman",
    sla: "Strict 72-Hour SLA",
    description: "Confidential escalation portal for academic discrepancies, hostel concerns, infrastructure, or administrative redressal.",
    icon: "ShieldAlert",
    actionText: "File Grievance",
    popular: true,
    steps: 3
  },
  {
    id: "re-eval",
    title: "Exam Re-evaluation & Script",
    category: "Controller of Exams",
    sla: "5 - 7 Working Days",
    description: "Apply for answer script digital photocopy, re-totaling, and expert re-evaluation for semester assessments.",
    icon: "FileText",
    actionText: "Apply Re-eval",
    popular: false,
    steps: 3
  },
  {
    id: "fee-scholarship",
    title: "Merit Scholarship Renewal",
    category: "Finance & Accounts",
    sla: "3 - 4 Working Days",
    description: "Submit CGPA proof, fee receipt, and income affidavit for KL University Merit / Sports / Special concessions.",
    icon: "CreditCard",
    actionText: "Submit Renewal",
    popular: false,
    steps: 3
  }
];

export const PROCESS_CATEGORIES = [
  { id: "all", name: "All Processes", count: 14 },
  { id: "academic", name: "Academics & Examination", count: 4 },
  { id: "sac", name: "SAC, Clubs & Activities", count: 3 },
  { id: "admin", name: "Registrar & Certificates", count: 3 },
  { id: "hostel", name: "Hostels & Campus Facilities", count: 2 },
  { id: "grievance", name: "Ombudsman & Grievance", count: 2 }
];

export const UNIVERSITY_PROCESSES = [
  {
    id: "proc-01",
    title: "On-Duty (OD) Attendance Approval",
    code: "KLU-ACAD-OD",
    category: "academic",
    department: "Dean Student Affairs & SAC",
    sla: "48 Hours",
    difficulty: "Standard",
    targetAudience: "All Undergrad & Postgrad Students",
    summary: "Formal attendance exemption granted for students representing KL University at national hackathons, cultural fest competitions, inter-university sports, or council-managed initiatives.",
    prerequisites: [
      "Official event invitation letter / confirmation brochure",
      "Prior endorsement by Faculty Club Advisor or Dept Head",
      "Minimum 65% aggregate attendance in coursework prior to event"
    ],
    documentsRequired: [
      "Event acceptance / participation proof (PDF)",
      "Team roster endorsed by SAC Convenor",
      "Parent consent form (for outstation travel)"
    ],
    workflow: [
      { step: 1, role: "Student / Club Lead", action: "Submit event details and attached formal invitation letter", duration: "Day 0" },
      { step: 2, role: "Faculty Club In-charge", action: "Verify academic eligibility and recommend endorsement", duration: "Day 1" },
      { step: 3, role: "Director / Associate Dean (SAC)", action: "Validate university delegation and approve quota", duration: "Day 2" },
      { step: 4, role: "ERP Attendance Controller", action: "Automated biometric waiver and credit onto ERP portal", duration: "Immediate" }
    ],
    authority: "Dr. P. V. Chalapathi, Dean (Student Affairs)",
    location: "Student Activity Center (SAC), R&D Block, Ground Floor"
  },
  {
    id: "proc-02",
    title: "Hall Ticket & Examination Clearance",
    code: "KLU-EXAM-HT",
    category: "academic",
    department: "Controller of Examinations (CoE)",
    sla: "Instant to 24 Hours",
    difficulty: "Essential",
    targetAudience: "Semester Assessment Candidates",
    summary: "Systematic multi-departmental clearance (Tuition fee dues, Biometric attendance >= 75%, Library no-dues, Departmental lab approval) required to sit for End-Semester Examinations.",
    prerequisites: [
      "Zero outstanding tuition & examination fees",
      "75% minimum classroom & lab attendance (65% with valid medical/OD exemption)",
      "Return of all borrowed Central Library books"
    ],
    documentsRequired: [
      "Student Identity Card number",
      "Online fee payment transaction receipt"
    ],
    workflow: [
      { step: 1, role: "Student Portal", action: "Initiate digital clearance check across integrated ERP sub-systems", duration: "Instant" },
      { step: 2, role: "Finance & Accounts", action: "Automated ledger reconciliation and fee due verification", duration: "< 2 hours" },
      { step: 3, role: "HoD Academic Approval", action: "Approval of attendance condonation if medical OD is on record", duration: "< 12 hours" },
      { step: 4, role: "CoE System", action: "Cryptographically signed QR-coded Admit Card unlocked for print", duration: "Immediate" }
    ],
    authority: "Dr. A. S. C. S. Sastry, Controller of Examinations",
    location: "Administrative Block, Ground Floor, CoE Section"
  },
  {
    id: "proc-03",
    title: "Digital Bonafide & Study Certificate",
    code: "KLU-REG-BON",
    category: "admin",
    department: "Office of the Registrar",
    sla: "24 - 48 Hours",
    difficulty: "Easy",
    targetAudience: "Currently Enrolled Students",
    summary: "Official institutional declaration certifying current academic enrollment, discipline, branch, academic year, and residence status. Valid for passport, embassy visas, bank loans, and state scholarships.",
    prerequisites: [
      "Active enrollment status without pending disciplinary holds",
      "Updated student profile in ERP database"
    ],
    documentsRequired: [
      "Purpose statement (Bank Loan / Passport / Higher Studies / Travel concession)",
      "Self-attested ID card copy"
    ],
    workflow: [
      { step: 1, role: "Student", action: "Select certificate template and specify addressed authority", duration: "Day 0" },
      { step: 2, role: "Registrar Verification Desk", action: "Cross-check registration credentials and matriculation number", duration: "Day 1" },
      { step: 3, role: "Digital Seal & Dispatch", action: "Affix KL University digital seal and issue download link + verification QR", duration: "Day 2" }
    ],
    authority: "Dr. K. Subba Rao, Registrar",
    location: "Central Administrative Complex, Room C-202"
  },
  {
    id: "proc-04",
    title: "Student Activity Center (SAC) Event & Budget Approval",
    code: "KLU-SAC-EVT",
    category: "sac",
    department: "Student Activity Center (SAC)",
    sla: "3 - 5 Working Days",
    difficulty: "Comprehensive",
    targetAudience: "SAC Club Presidents & Domain Convenors",
    summary: "End-to-end institutional workflow to book campus auditoriums, request audio-visual equipment, invite external industry dignitaries, and obtain budget sanction for club events.",
    prerequisites: [
      "Registered active club status under SAC portfolio",
      "Resolution passed in Club Executive Committee meeting",
      "Event must not clash with University Mid-Semester Examinations"
    ],
    documentsRequired: [
      "Detailed Event Concept Note with timeline & expected footfall",
      "Itemized Budget Sheet signed by Faculty Club In-charge",
      "External Guest Speaker Bio & KYC Profile"
    ],
    workflow: [
      { step: 1, role: "Club Secretary", action: "Upload event proposal and tentative budget blueprint", duration: "Day 0" },
      { step: 2, role: "Faculty Advisor", action: "Review academic alignment and recommend to SAC", duration: "Day 1 - 2" },
      { step: 3, role: "Dean (Student Affairs)", action: "Venue reservation approval & administrative security clearance", duration: "Day 3" },
      { step: 4, role: "Finance Office", action: "Budget sanction disbursement or vendor purchase order release", duration: "Day 5" }
    ],
    authority: "Er. P. Sai Vijay, Director - SAC",
    location: "Student Activity Center (SAC), R&D Block, Ground Floor"
  },
  {
    id: "proc-05",
    title: "SAMVAD 360 Institutional Grievance Redressal",
    code: "KLU-OMBUD-GRIEV",
    category: "grievance",
    department: "Student Grievance Redressal Cell & Ombudsman",
    sla: "Strict 72 Hours (Initial Response)",
    difficulty: "High Priority",
    targetAudience: "All Students, Scholars & Council Members",
    summary: "Guaranteed confidential escalation pathway under the supervision of KL University Student Ombudsman. Covers classroom assessment issues, hostel amenities, harassment prevention, and unfair administrative decisions.",
    prerequisites: [
      "Specific incident date, location, and relevant context",
      "Prior attempt to resolve with immediate department (optional but recommended)"
    ],
    documentsRequired: [
      "Supporting documentation or communications (screenshots/emails)",
      "Choice of identity disclosure: Full or Confidential Anonymous"
    ],
    workflow: [
      { step: 1, role: "Student Voice", action: "File grievance with category tag and escalation priority", duration: "Immediate" },
      { step: 2, role: "Council Ombudsman", action: "Independent assessment, assigned ticket number, and initial inquiry call", duration: "< 24 Hours" },
      { step: 3, role: "Department Inquiry", action: "Fact-finding query served to respondent university department", duration: "< 48 Hours" },
      { step: 4, role: "Resolution Board", action: "Official binding resolution order published and student feedback sought", duration: "< 72 Hours" }
    ],
    authority: "Hon'ble University Ombudsman & Student Grievance Committee",
    location: "Ethics & Welfare Block, Suite 005"
  },
  {
    id: "proc-06",
    title: "Hostel Outing, Leave & Biometric Gate Pass",
    code: "KLU-HOSTEL-PASS",
    category: "hostel",
    department: "Chief Warden & Residential Welfare Office",
    sla: "Same-Day / Under 4 Hours",
    difficulty: "Easy",
    targetAudience: "Hostel Residents (Boys & Girls Campuses)",
    summary: "Digital gate-pass management for day-outings in Vijayawada/Guntur city or extended leave travel to hometown, backed by automated two-factor SMS approval from registered guardians.",
    prerequisites: [
      "Valid biometric profile on hostel access gates",
      "Zero active curfew or disciplinary violations"
    ],
    documentsRequired: [
      "Departure and return timestamps",
      "Destination address and emergency contact",
      "Guardian authorization confirmation via SMS/OTP"
    ],
    workflow: [
      { step: 1, role: "Hostelite", action: "Submit leave request via SAMVAD 360 portal", duration: "Day 0" },
      { step: 2, role: "Parent Gateway", action: "Automated SMS notification sent to registered guardian for OTP consent", duration: "< 30 mins" },
      { step: 3, role: "Hostel Warden", action: "Verification and gate RFID permission unlocked on student ID card", duration: "< 2 hours" },
      { step: 4, role: "Main Security Gate", action: "Biometric thumb scan / QR swipe at security checkpoint", duration: "Immediate" }
    ],
    authority: "Dr. B. K. Sharma, Chief Hostel Warden",
    location: "Vaddeswaram Hostel Administration Office"
  },
  {
    id: "proc-07",
    title: "Semester Examination Script Re-evaluation",
    code: "KLU-EXAM-REV",
    category: "academic",
    department: "Office of the Controller of Examinations",
    sla: "7 Working Days",
    difficulty: "Standard",
    targetAudience: "Students seeking assessment review",
    summary: "Transparency mechanism enabling students to inspect digitized answer scripts and submit for blind re-evaluation by an external subject matter expert panel.",
    prerequisites: [
      "Result declared within the past 15 working days",
      "Payment of statutory re-evaluation fee as per university ordinance"
    ],
    documentsRequired: [
      "Semester grade memo",
      "Online fee transaction slip"
    ],
    workflow: [
      { step: 1, role: "Student", action: "Select course code and request digital answer script copy", duration: "Day 0" },
      { step: 2, role: "CoE Archive", action: "High-resolution PDF of evaluated script uploaded to student dashboard", duration: "Day 2" },
      { step: 3, role: "External Panel", action: "Blind re-assessment by independent university professor", duration: "Day 5" },
      { step: 4, role: "Revised Grade Card", action: "Updated grade issued if mark variation is >= 5%", duration: "Day 7" }
    ],
    authority: "Controller of Examinations Section",
    location: "Administrative Block, 1st Floor"
  },
  {
    id: "proc-08",
    title: "Merit & Sports Fee Concession Renewal",
    code: "KLU-FIN-SCHOL",
    category: "admin",
    department: "Finance, Accounts & Scholarship Desk",
    sla: "4 - 5 Working Days",
    difficulty: "Detailed",
    targetAudience: "Eligible scholarship beneficiaries",
    summary: "Annual institutional renewal of tuition fee waivers granted for exceptional academic merit (CGPA >= 9.0), sports national representations, or economically underprivileged backgrounds.",
    prerequisites: [
      "Minimum required CGPA as per scholarship award criteria",
      "Clear academic record with zero backlogs in current academic year"
    ],
    documentsRequired: [
      "Consolidated Grade Sheet of previous academic year",
      "Original fee receipt of previous semester",
      "Sports representation certificate (if applicable)"
    ],
    workflow: [
      { step: 1, role: "Scholar", action: "Submit renewal petition and attach verified grade transcripts", duration: "Day 0" },
      { step: 2, role: "Scholarship Scrutiny Cell", action: "Verify academic compliance and attendance standing", duration: "Day 2" },
      { step: 3, role: "Finance Officer", action: "Recompute tuition fee dues and adjust ledger credit voucher", duration: "Day 4" }
    ],
    authority: "Shri. M. Venkateswara Rao, Chief Financial Officer",
    location: "Finance Block, Ground Floor"
  }
];

export const SAC_VERTICALS = [
  {
    id: "tech",
    name: "Technology & Innovation",
    icon: "Cpu",
    tagline: "Building the next generation of engineers, founders and innovators.",
    clubsCount: 8,
    membersCount: "4,200+",
    leadName: "Aryan Varma",
    leadRole: "Council Technology Secretary",
    color: "#641B32",
    accent: "#C5A15A",
    clubs: [
      { name: "Focus Club", focus: "Full-Stack Web & Mobile Architecture", members: 920, rating: "4.9/5" },
      { name: "KLU Robotics", focus: "Autonomous Systems & Drone Technologies", members: 640, rating: "4.8/5" },
      { name: "Cyber Knights", focus: "Ethical Hacking, Red Teaming & CTF Competitions", members: 780, rating: "4.9/5" },
      { name: "AI Spectrum", focus: "Machine Learning, LLMs & Deep Tech", members: 860, rating: "4.9/5" }
    ]
  },
  {
    id: "culture",
    name: "Arts & Culture",
    icon: "Music",
    tagline: "Celebrating Indian heritage, music, theatrical arts and classical expression.",
    clubsCount: 6,
    membersCount: "3,100+",
    leadName: "Samyuktha Reddy",
    leadRole: "Cultural Affairs Secretary",
    color: "#7A243D",
    accent: "#E2CFA5",
    clubs: [
      { name: "Swara Musical Society", focus: "Carnatic, Hindustani & Contemporary Fusion Bands", members: 620, rating: "4.9/5" },
      { name: "Narthana Dance Troupe", focus: "Classical, Folk & Modern Choreography", members: 580, rating: "4.8/5" },
      { name: "Vyuha Dramatics", focus: "Street Theatre, Stage Plays & Scriptwriting", members: 430, rating: "4.7/5" },
      { name: "Chitra Fine Arts", focus: "Painting, Digital Illustration & Sculpting", members: 390, rating: "4.8/5" }
    ]
  },
  {
    id: "sports",
    name: "Sports & Athletics",
    icon: "Trophy",
    tagline: "Championing physical fitness, national tournament glory and team resilience.",
    clubsCount: 7,
    membersCount: "2,800+",
    leadName: "K. Rithvik",
    leadRole: "University Sports Captain",
    color: "#42101F",
    accent: "#C5A15A",
    clubs: [
      { name: "KL Strikers (Cricket)", focus: "Inter-University & National Tournament Squads", members: 740, rating: "4.9/5" },
      { name: "KL Hoopers (Basketball)", focus: "South Zone Inter-University League", members: 420, rating: "4.8/5" },
      { name: "KL Shuttle Club", focus: "State & National Badminton Championships", members: 530, rating: "4.7/5" },
      { name: "Fitness & Martial Arts", focus: "Taekwondo, Strength Training & Crossfit", members: 610, rating: "4.8/5" }
    ]
  },
  {
    id: "social",
    name: "Social Welfare & Outreach",
    icon: "HeartHandshake",
    tagline: "Transforming surrounding communities through youth-driven grassroots action.",
    clubsCount: 5,
    membersCount: "3,600+",
    leadName: "Meghana Chowdary",
    leadRole: "Social Action Secretary",
    color: "#641B32",
    accent: "#E2CFA5",
    clubs: [
      { name: "NSS & Youth Red Cross", focus: "Rural Education, Health Camps & Blood Drives", members: 1100, rating: "4.9/5" },
      { name: "Prakruthi Eco Club", focus: "Campus Sustainability, Tree Plantation & Waste Audits", members: 590, rating: "4.8/5" },
      { name: "Safe Hands Society", focus: "Mental Health Advocacy & Peer Support Groups", members: 480, rating: "4.8/5" }
    ]
  },
  {
    id: "literary",
    name: "Literary, Oratory & MUN",
    icon: "BookOpen",
    tagline: "Nurturing diplomats, eloquent orators, debaters and critical thinkers.",
    clubsCount: 4,
    membersCount: "1,900+",
    leadName: "Aditya Nambiar",
    leadRole: "Literary & Debate Convenor",
    color: "#7A243D",
    accent: "#C5A15A",
    clubs: [
      { name: "KLU Model UN", focus: "Diplomacy, International Law & Geopolitics", members: 520, rating: "4.9/5" },
      { name: "Toastmasters International", focus: "Public Speaking & Executive Communication", members: 460, rating: "4.8/5" },
      { name: "Samvaad Literary Guild", focus: "Creative Writing, Poetry Slams & Book Reviews", members: 380, rating: "4.7/5" }
    ]
  },
  {
    id: "innovation",
    name: "Entrepreneurship & Startups",
    icon: "Rocket",
    tagline: "Incubating student ventures with seed grants, patents and mentorship.",
    clubsCount: 4,
    membersCount: "2,200+",
    leadName: "Pranav Teja",
    leadRole: "Incubation Liaison Secretary",
    color: "#42101F",
    accent: "#E2CFA5",
    clubs: [
      { name: "KL E-Cell (TBI)", focus: "Venture Ideation, Pitch Competitions & Angel Funding", members: 670, rating: "4.9/5" },
      { name: "Product Crafters", focus: "Product Management, UX Research & Prototype Labs", members: 510, rating: "4.8/5" }
    ]
  }
];

export const SAC_EVENTS = [
  {
    id: "evt-01",
    title: "SAMSKRUTHI 2026: National Cultural Fest",
    domain: "Arts & Culture",
    dates: "March 20 - 22, 2026",
    venue: "Main Open Air Theatre (OAT), Vaddeswaram Campus",
    expectedFootfall: "15,000+ Students",
    badge: "Flagship Annual Mega Fest",
    status: "Registrations Open",
    description: "The grandest cultural celebration in Southern India featuring 45+ competitive disciplines across classical dance, rock bands, fashion walk, and celebrity night concerts."
  },
  {
    id: "evt-02",
    title: "KL HACK-A-THON 4.0: 36hr Innovation Sprint",
    domain: "Technology & Innovation",
    dates: "April 12 - 13, 2026",
    venue: "R&D Block Central Labs & Auditorium",
    expectedFootfall: "800+ Developers",
    badge: "Cash Prize: ₹5,00,000",
    status: "Team Shortlisting",
    description: "Organized by Focus & Cyber Knights clubs on AI-driven governance, fintech DPI, and smart campus IoT systems with direct industry hiring."
  },
  {
    id: "evt-03",
    title: "Surabhi Inter-University Sports League",
    domain: "Sports & Athletics",
    dates: "February 27 - March 1, 2026",
    venue: "KL Central Indoor Stadium & Athletic Track",
    expectedFootfall: "60+ Universities",
    badge: "Official Tournament",
    status: "Fixture Drawn",
    description: "Multi-discipline athletic championship hosting cricket, volleyball, badminton, and basketball teams across 5 South Indian states."
  }
];

export const STUDENT_COUNCIL_ROSTER = [
  {
    role: "President",
    name: "Srihari Kothari",
    branch: "Computer Science & Engineering",
    year: "Final Year",
    badge: "Council Executive Head",
    quote: "Ensuring every KL student navigates their university journey with transparent processes, institutional dignity, and collective pride."
  },
  {
    role: "General Secretary",
    name: "Ananya Deshmukh",
    branch: "Electronics & Communication",
    year: "Pre-Final Year",
    badge: "Administrative Coordinator",
    quote: "Bridging the dialogue between students, departmental deans, and senior university governance with accountability."
  },
  {
    role: "Academic Secretary",
    name: "P. Tarun Kumar",
    branch: "Mechanical Engineering",
    year: "Pre-Final Year",
    badge: "Curricular Advocate",
    quote: "Championing student interests in curriculum revisions, exam schedules, and fair academic evaluation standards."
  },
  {
    role: "Student Ombudsman",
    name: "Dr. K. R. C. Murthy (Faculty) & Tanya Sen (Student Rep)",
    branch: "Legal Studies & Council",
    year: "Institutional Ombudsman",
    badge: "Confidential Grievance Oversight",
    quote: "Neutral, impartial, and bound to SDG 16 principles of justice, ethics, and zero retaliation."
  }
];

export const OFFICIAL_DIRECTORY = [
  {
    title: "Dean, Student Affairs",
    name: "Prof. Dr. P. V. Chalapathi",
    office: "Student Affairs Complex, Room 104, Vaddeswaram",
    email: "dean.studentaffairs@kluniversity.in",
    extension: "Ext: 1102 / 1104",
    hours: "09:30 AM - 05:00 PM (Mon-Sat)"
  },
  {
    title: "Director, Student Activity Center (SAC)",
    name: "Er. P. Sai Vijay",
    office: "Student Activity Center (SAC), R&D Block, Ground Floor",
    email: "director.sac@kluniversity.in",
    extension: "Ext: 1250",
    hours: "10:00 AM - 06:00 PM (Mon-Sat)"
  },
  {
    title: "Controller of Examinations (CoE)",
    name: "Dr. A. S. C. S. Sastry",
    office: "Administrative Block, Examination Wing, Room A-108",
    email: "coe@kluniversity.in",
    extension: "Ext: 1088 / 1090",
    hours: "10:00 AM - 04:30 PM"
  },
  {
    title: "Office of the Registrar",
    name: "Dr. K. Subba Rao",
    office: "Central Administration Complex, Room C-202",
    email: "registrar@kluniversity.in",
    extension: "Ext: 1001",
    hours: "09:00 AM - 05:00 PM"
  },
  {
    title: "Dean, Academics",
    name: "Dr. N. Venkatram",
    office: "Academic Block 1, Suite 305",
    email: "dean.academics@kluniversity.in",
    extension: "Ext: 1155",
    hours: "09:30 AM - 04:30 PM"
  },
  {
    title: "Anti-Ragging Squad & Women's Forum",
    name: "Dr. M. Suman (Convenor)",
    office: "Welfare & Ethics Cell, Ground Floor",
    email: "antiragging@kluniversity.in | womensforum@kluniversity.in",
    extension: "24x7 Helpline: 1800-425-4566",
    hours: "Round the Clock Emergency Response"
  }
];

export const VERIFIED_UPDATES = [
  {
    id: "notif-01",
    refNo: "KLEF/RO/2026/CIR-142",
    title: "Schedule for End-Semester Even Examinations & Hall Ticket Generation",
    department: "Controller of Examinations",
    date: "November 14, 2026",
    badge: "Official Circular",
    priority: "High",
    summary: "All eligible students must complete course feedback and verify no-dues status by November 28, 2026. Hall tickets will be downloadable via SAMVAD 360 starting December 01."
  },
  {
    id: "notif-02",
    refNo: "KLEF/SAC/2026/PET-088",
    title: "Student Council Resolution on 24x7 Central Library & Digital Reading Rooms",
    department: "Student Council & Library Committee",
    date: "November 11, 2026",
    badge: "Council Communiqué",
    priority: "Normal",
    summary: "Following the Council petition presented to the Vice-Chancellor, the Central Library will remain operational 24x7 with automated biometric access and security patrols during the examination month."
  },
  {
    id: "notif-03",
    refNo: "KLEF/SAC/2026/OD-RULES",
    title: "Updated Guidelines for Hackathon & Tech Fest OD Attendance Sanction",
    department: "Directorate of SAC",
    date: "November 08, 2026",
    badge: "Policy Update",
    priority: "Normal",
    summary: "OD requests submitted less than 48 hours prior to event departure will now be processed automatically if the team is recognized under SAC Technology domain roster."
  }
];

export const SDG16_METRICS = {
  transparencyScore: "98.4%",
  averageSlaResolution: "38.2 Hours",
  casesResolvedThisYear: "2,410",
  activeCouncilPetitions: "14",
  studentRepRatio: "1 Rep per 60 Students",
  commitments: [
    {
      title: "Zero Retaliation Guarantee",
      desc: "Every grievance submitted through SAMVAD 360 is protected by encrypted anonymization protocols and university ombudsman confidentiality."
    },
    {
      title: "Time-Bound SLA Accountability",
      desc: "All administrative processes hold publicly visible turnaround SLAs. Delays automatically escalate to the respective Dean after 48 hours."
    },
    {
      title: "Democratic Student Representation",
      desc: "Student Council members participate directly in Academic Council and Board of Management policy meetings."
    }
  ]
};

export const SAMPLE_STUDENT_APPLICATIONS = [
  {
    id: "KLU-PROC-2026-8841",
    processTitle: "On-Duty (OD) Attendance Approval",
    appliedDate: "15 Nov 2026",
    status: "Approved",
    currentStage: "ERP Attendance Credited",
    slaRemaining: "Completed in 21 hrs",
    department: "Dean Student Affairs",
    applicant: "K. Varun Teja (2300031900)"
  },
  {
    id: "KLU-PROC-2026-9012",
    processTitle: "Bonafide & Study Certificate (Passport)",
    appliedDate: "16 Nov 2026",
    status: "In Progress",
    currentStage: "Digital Seal Verification (Registrar Office)",
    slaRemaining: "14 hrs remaining",
    department: "Registrar Office",
    applicant: "K. Varun Teja (2300031900)"
  },
  {
    id: "KLU-GRIEV-2026-0419",
    processTitle: "Hostel Wi-Fi Bandwidth Upgrade in Block E",
    appliedDate: "13 Nov 2026",
    status: "Under Review",
    currentStage: "Network Operations Center Dispatch",
    slaRemaining: "4 hrs remaining",
    department: "Infrastructure & Hostels",
    applicant: "Anonymous Student Voice"
  }
];

export const SAMPLE_ADMIN_KPI = {
  totalPendingRequests: 42,
  averageResolutionHrs: 28.4,
  slaComplianceRate: "97.8%",
  activeGrievances: 7,
  departmentStats: [
    { name: "Academic Affairs", pending: 12, resolved: 310, compliance: "98.2%" },
    { name: "Student Activity Center", pending: 8, resolved: 240, compliance: "99.1%" },
    { name: "Registrar Office", pending: 11, resolved: 412, compliance: "96.5%" },
    { name: "Examination Wing (CoE)", pending: 6, resolved: 520, compliance: "97.4%" },
    { name: "Hostels & Residential", pending: 5, resolved: 180, compliance: "98.0%" }
  ]
};
