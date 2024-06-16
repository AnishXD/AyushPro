import hos1 from "../assets/hos1.jpg";


// Define your data arrays
export const hospitals = [
  {
    "id": "001",
    "name": "Sunrise Hospital",
    "location": "45, Hilltop Lane, Springdale, California – 90210",
    "specialties": ["Cardiology", "Pediatrics", "Dermatology", "Oncology", "ENT"],
    "rating": 4.2,
    "contact": {
      "phone": "+1 123-456-7890",
      "email": "info@sunrisehospital.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus magna. Nulla facilisi. Fusce fermentum odio at risus varius consequat.",
    "website": "https://sunrisehospital.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 6pm",
      "Sat": "9am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Echocardiography",
      "Immunizations",
      "Dermabrasion",
      "Chemotherapy",
      "Tonsillectomy"
    ]
  },
  {
    "id": "002",
    "name": "Green Meadows Clinic",
    "location": "78, Forest Avenue, Woodland, Texas – 75001",
    "specialties": ["Family Medicine", "Orthopedics", "Psychiatry", "Dentistry"],
    "rating": 4.5,
    "contact": {
      "phone": "+1 987-654-3210",
      "email": "contact@greenmeadowsclinic.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus magna. Nullam nec aliquam ex, ac suscipit lacus.",
    "website": "https://greenmeadowsclinic.com/",
    "hoursOfOperation": {
      "Mon-Sat": "8am – 7pm",
      "Sun": "Closed"
    },
    "services": [
      "Annual Physicals",
      "Fracture Care",
      "Cognitive Behavioral Therapy",
      "Root Canal Treatment"
    ]
  },
  {
    "id": "003",
    "name": "Blue Sky Medical Center",
    "location": "15, Horizon Street, Clearview, Arizona – 85001",
    "specialties": ["Ophthalmology", "Urology", "Rheumatology"],
    "rating": 4.0,
    "contact": {
      "phone": "+1 555-123-4567",
      "email": "hello@blueskycenter.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod laoreet felis vel tristique. Sed at ligula nec ligula lobortis rhoncus nec in risus.",
    "website": "https://blueskycenter.com/",
    "hoursOfOperation": {
      "Mon-Fri": "10am – 5pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Cataract Surgery",
      "Prostate Screening",
      "Physical Therapy"
    ]
  },
  {
    "id": "004",
    "name": "Evergreen Wellness Clinic",
    "location": "102, Maple Avenue, Greenvale, Florida – 32003",
    "specialties": ["Internal Medicine", "Dermatology", "Nutrition"],
    "rating": 4.8,
    "contact": {
      "phone": "+1 888-765-4321",
      "email": "info@evergreenwellness.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi sed magna vestibulum fermentum. Cras consectetur, ligula nec consequat elementum.",
    "website": "https://evergreenwellness.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 6pm",
      "Sat": "10am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Diabetes Management",
      "Skin Biopsy",
      "Nutritional Counseling"
    ]
  },
  {
    "id": "005",
    "name": "Golden Heart Clinic",
    "location": "25, Sunflower Road, Sunnyville, Nevada – 89502",
    "specialties": ["Cardiology", "Geriatrics", "Pulmonology"],
    "rating": 4.3,
    "contact": {
      "phone": "+1 777-321-6549",
      "email": "info@goldenheartclinic.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac lorem dignissim, ultricies risus in, fringilla quam. Proin auctor tincidunt turpis.",
    "website": "https://goldenheartclinic.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 7pm",
      "Sat": "9am – 4pm",
      "Sun": "Closed"
    },
    "services": [
      "Echocardiogram",
      "Alzheimer's Care",
      "Asthma Treatment"
    ]
  },
  {
    "id": "006",
    "name": "Rainbow Pediatrics",
    "location": "37, Rainbow Avenue, Colorland, Colorado – 80301",
    "specialties": ["Pediatrics"],
    "rating": 4.9,
    "contact": {
      "phone": "+1 999-888-7777",
      "email": "hello@rainbowpediatrics.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lectus vel nisi elementum, at efficitur libero tincidunt. Aliquam erat volutpat.",
    "website": "https://rainbowpediatrics.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 5pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Newborn Care",
      "Vaccinations",
      "Developmental Screening"
    ]
  },
  {
    "id": "007",
    "name": "Mountain View Psychiatry",
    "location": "63, Summit Drive, Hilltop, Montana – 59001",
    "specialties": ["Psychiatry", "Psychology"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 111-222-3333",
      "email": "contact@mountainviewpsych.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo sollicitudin, consectetur est vel, pellentesque dolor. Sed maximus mauris.",
    "website": "https://mountainviewpsych.com/",
    "hoursOfOperation": {
      "Mon-Fri": "10am – 6pm",
      "Sat": "11am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Cognitive Behavioral Therapy",
      "Psychiatric Evaluation",
      "Stress Management"
    ]
  },
  {
    "id": "008",
    "name": "Ocean Dental Care",
    "location": "88, Seaside Avenue, Waterside, Oregon – 97001",
    "specialties": ["Dentistry", "Orthodontics", "Oral Surgery"],
    "rating": 4.4,
    "contact": {
      "phone": "+1 333-555-7777",
      "email": "info@oceandentalcare.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate mi vel sapien convallis, at hendrerit ligula facilisis. Duis dignissim.",
    "website": "https://oceandentalcare.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 5pm",
      "Sat": "9am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Teeth Cleaning",
      "Braces Installation",
      "Wisdom Tooth Extraction"
    ]
  },
  {
    "id": "009",
    "name": "City Wellness Center",
    "location": "10, Downtown Boulevard, Metro City, New York – 10001",
    "specialties": ["General Medicine", "Physical Therapy", "Chiropractic Care", "Nutrition"],
    "rating": 4.8,
    "contact": {
      "phone": "+1 222-444-6666",
      "email": "info@citywellness.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lectus purus. Suspendisse at justo at enim commodo malesuada.",
    "website": "https://citywellness.com/",
    "hoursOfOperation": {
      "Mon-Sat": "9am – 7pm",
      "Sun": "Closed"
    },
    "services": [
      "Physical Exams",
      "Massage Therapy",
      "Spinal Adjustment"
    ]
  },
  {
    "id": "010",
    "name": "Green Leaf Pharmacy",
    "location": "55, Maple Leaf Street, Evergreen, Washington – 98001",
    "specialties": ["Pharmacy"],
    "rating": 4.3,
    "contact": {
      "phone": "+1 444-777-9999",
      "email": "info@greenleafpharmacy.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lectus vitae ipsum feugiat, nec tristique nulla aliquam. Maecenas semper.",
    "website": "https://greenleafpharmacy.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 7pm",
      "Sat": "10am – 4pm",
      "Sun": "Closed"
    },
    "services": [
      "Prescription Refills",
      "Medical Supplies"
    ]
  },
  {
    "id": "011",
    "name": "Silver Lake Veterinary Clinic",
    "location": "20, Lakeside Drive, Silverwood, Idaho – 83867",
    "specialties": ["Veterinary Medicine", "Pet Surgery", "Dental Care"],
    "rating": 4.9,
    "contact": {
      "phone": "+1 555-888-2222",
      "email": "info@silverlakevet.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor nec felis vestibulum dignissim. Fusce consequat massa nec elit placerat.",
    "website": "https://silverlakevet.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Pet Vaccinations",
      "Spaying and Neutering",
      "Dental Cleaning"
    ]
  },
  {
    "id": "012",
    "name": "Sunset Eye Clinic",
    "location": "30, Sunset Boulevard, Seaside, California – 93955",
    "specialties": ["Ophthalmology", "Optometry", "LASIK Surgery"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 777-999-4444",
      "email": "contact@sunseteyeclinic.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu gravida libero. Sed in leo euismod, posuere orci id, venenatis tellus.",
    "website": "https://sunseteyeclinic.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 5pm",
      "Sat": "10am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Eye Exams",
      "Cataract Surgery",
      "Contact Lens Fitting"
    ]
  },
  {
    "id": "013",
    "name": "Happy Smiles Dental Center",
    "location": "40, Joyful Avenue, Sunnytown, Florida – 33001",
    "specialties": ["Dentistry", "Orthodontics", "Cosmetic Dentistry"],
    "rating": 4.5,
    "contact": {
      "phone": "+1 888-333-5555",
      "email": "info@happysmiles.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis sem vel semper suscipit. Ut suscipit enim ut lectus egestas ultricies.",
    "website": "https://happysmiles.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Teeth Whitening",
      "Braces",
      "Dental Implants"
    ]
  },
  {
    "id": "014",
    "name": "Nature's Health Pharmacy",
    "location": "50, Green Avenue, Meadowville, Oregon – 97002",
    "specialties": ["Pharmacy", "Health Supplements"],
    "rating": 4.4,
    "contact": {
      "phone": "+1 777-444-9999",
      "email": "info@natureshealthpharmacy.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nibh id dolor lobortis, eget efficitur tortor interdum. Sed non tortor.",
    "website": "https://natureshealthpharmacy.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 7pm",
      "Sat": "10am – 5pm",
      "Sun": "Closed"
    },
    "services": [
      "Prescription Filling",
      "Natural Supplements",
      "Health Consultations"
    ]
  },
  {
    "id": "015",
    "name": "Riverfront Physical Therapy",
    "location": "60, Riverside Drive, Waterview, Washington – 98101",
    "specialties": ["Physical Therapy", "Sports Rehabilitation"],
    "rating": 4.6,
    "contact": {
      "phone": "+1 333-999-7777",
      "email": "info@riverfrontpt.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus tortor ac eros placerat, nec aliquam dui tempus. Vivamus ac ligula.",
    "website": "https://riverfrontpt.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Injury Rehabilitation",
      "Manual Therapy",
      "Fitness Training"
    ]
  },
  {
    "id": "016",
    "name": "Everest Women's Health Center",
    "location": "70, Summit Road, Peakview, Montana – 59002",
    "specialties": ["Obstetrics", "Gynecology", "Women's Health"],
    "rating": 4.8,
    "contact": {
      "phone": "+1 111-777-3333",
      "email": "info@everestwomenshealth.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula odio vel dolor ultricies, eget hendrerit nisl hendrerit. Aliquam ac tempus.",
    "website": "https://everestwomenshealth.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 5pm",
      "Sat": "9am – 12pm",
      "Sun": "Closed"
    },
    "services": [
      "Prenatal Care",
      "Birth Control Consultation",
      "Menopause Management"
    ]
  },
  {
    "id": "017",
    "name": "Sunny Days Behavioral Health Clinic",
    "location": "80, Sunshine Street, Brightville, Colorado – 80302",
    "specialties": ["Psychiatry", "Counseling", "Addiction Treatment"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 999-222-8888",
      "email": "info@sunnydaysclinic.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat, velit et suscipit efficitur, velit libero congue mi, nec vulputate eros.",
    "website": "https://sunnydaysclinic.com/",
    "hoursOfOperation": {
      "Mon-Fri": "10am – 6pm",
      "Sat": "11am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Individual Therapy",
      "Substance Abuse Counseling",
      "Anxiety Management"
    ]
  },
  {
    "id": "018",
    "name": "Pine Grove Chiropractic Center",
    "location": "90, Pinecrest Avenue, Forestville, Nevada – 89503",
    "specialties": ["Chiropractic Care", "Spinal Manipulation", "Pain Relief"],
    "rating": 4.3,
    "contact": {
      "phone": "+1 777-888-5555",
      "email": "info@pinegrovechiro.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nunc lacinia, dictum lorem eget, varius urna. Nullam ut tristique est.",
    "website": "https://pinegrovechiro.com/",
    "hoursOfOperation": {
      "Mon-Wed": "9am – 5pm",
      "Thu": "Closed",
      "Fri": "9am – 6pm",
      "Sat": "10am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Spinal Adjustment",
      "Physical Therapy",
      "Pain Management"
    ]
  },
  {
    "id": "019",
    "name": "Harbor View Dermatology",
    "location": "100, Harbor Drive, Seaview, Texas – 75002",
    "specialties": ["Dermatology", "Cosmetic Procedures", "Skin Cancer Treatment"],
    "rating": 4.6,
    "contact": {
      "phone": "+1 999-444-8888",
      "email": "info@harborviewderm.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor ipsum vel ex volutpat, id efficitur orci efficitur. Nulla facilisi.",
    "website": "https://harborviewderm.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Acne Treatment",
      "Botox Injections",
      "Mohs Surgery"
    ]
  },
  {
    "id": "020",
    "name": "Highland Orthopedic Center",
    "location": "110, Highland Avenue, Hillcrest, Arizona – 85002",
    "specialties": ["Orthopedics", "Sports Medicine", "Joint Replacement"],
    "rating": 4.4,
    "contact": {
      "phone": "+1 333-777-9999",
      "email": "info@highlandortho.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada urna vitae aliquet malesuada. Nullam vehicula, sem vitae euismod.",
    "website": "https://highlandortho.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 5pm",
      "Sat": "9am – 12pm",
      "Sun": "Closed"
    },
    "services": [
      "Sports Injury Treatment",
      "Knee Surgery",
      "Physical Therapy"
    ]
  },
  {
    "id": "021",
    "name": "Maple Grove Pediatrics",
    "location": "120, Maple Avenue, Grovetown, Georgia – 30813",
    "specialties": ["Pediatrics", "Adolescent Medicine", "Developmental Pediatrics"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 777-888-9999",
      "email": "info@maplegrovepediatrics.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus mauris quis felis posuere, eget hendrerit tortor placerat.",
    "website": "https://maplegrovepediatrics.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 5pm",
      "Sat": "9am – 12pm",
      "Sun": "Closed"
    },
    "services": [
      "Well-child Visits",
      "Vaccinations",
      "Behavioral Assessments"
    ]
  },
  {
    "id": "022",
    "name": "Lakeview Cardiology Associates",
    "location": "130, Lakeview Drive, Waterside, Illinois – 60001",
    "specialties": ["Cardiology", "Interventional Cardiology", "Electrophysiology"],
    "rating": 4.9,
    "contact": {
      "phone": "+1 888-555-7777",
      "email": "info@lakeviewcardiology.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique est at ex consectetur, sed sollicitudin nisl ultricies.",
    "website": "https://lakeviewcardiology.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 6pm",
      "Sat": "10am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Echocardiography",
      "Coronary Angioplasty",
      "Implantable Cardioverter Defibrillator (ICD) Insertion"
    ]
  },
  {
    "id": "023",
    "name": "Cascade Wellness Center",
    "location": "140, Cascade Street, Mountainview, Oregon – 97003",
    "specialties": ["Family Medicine", "Geriatrics", "Preventive Care"],
    "rating": 4.5,
    "contact": {
      "phone": "+1 333-777-5555",
      "email": "info@cascadewellness.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu sapien fringilla, fermentum lorem nec, cursus risus.",
    "website": "https://cascadewellness.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 7pm",
      "Sat": "9am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Annual Physicals",
      "Chronic Disease Management",
      "Health Screenings"
    ]
  },
  {
    "id": "024",
    "name": "Pacific Coast Dermatology",
    "location": "150, Pacific Highway, Shoreline, California – 93958",
    "specialties": ["Dermatology", "Skin Cancer Treatment", "Cosmetic Procedures"],
    "rating": 4.6,
    "contact": {
      "phone": "+1 777-999-3333",
      "email": "info@pacificcoastderm.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem in ligula convallis sollicitudin.",
    "website": "https://pacificcoastderm.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 5pm",
      "Sat": "10am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Skin Cancer Screening",
      "Botox Injections",
      "Laser Hair Removal"
    ]
  },
  {
    "id": "025",
    "name": "Valley Wellness Physical Therapy",
    "location": "160, Valley Road, Hillcrest, Texas – 75003",
    "specialties": ["Physical Therapy", "Sports Rehabilitation", "Post-Surgical Recovery"],
    "rating": 4.8,
    "contact": {
      "phone": "+1 999-888-7777",
      "email": "info@valleywellnesspt.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel enim dapibus, convallis felis at, tincidunt libero.",
    "website": "https://valleywellnesspt.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 12pm",
      "Sun": "Closed"
    },
    "services": [
      "Injury Rehabilitation",
      "Manual Therapy",
      "Strength Training"
    ]
  },
  {
    "id": "026",
    "name": "Golden Gate Psychiatry Clinic",
    "location": "170, Golden Gate Avenue, Bayview, California – 94101",
    "specialties": ["Psychiatry", "Mental Health Counseling", "Addiction Treatment"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 888-333-7777",
      "email": "info@goldengatepsych.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique felis id enim tristique, at congue urna dapibus.",
    "website": "https://goldengatepsych.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 6pm",
      "Sat": "10am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Medication Management",
      "Individual Therapy",
      "Group Counseling"
    ]
  },
  {
    "id": "027",
    "name": "Sunrise Dental Clinic",
    "location": "180, Sunrise Boulevard, Horizon, Florida – 33002",
    "specialties": ["Dentistry", "Oral Surgery", "Cosmetic Dentistry"],
    "rating": 4.5,
    "contact": {
      "phone": "+1 777-555-8888",
      "email": "info@sunrisedentalclinic.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis mi id ante ultrices, in lobortis tellus vestibulum.",
    "website": "https://sunrisedentalclinic.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 6pm",
      "Sat": "9am – 3pm",
      "Sun": "Closed"
    },
    "services": [
      "Teeth Cleaning",
      "Wisdom Tooth Extraction",
      "Dental Implants"
    ]
  },
  {
    "id": "028",
    "name": "Mountain View Family Medicine",
    "location": "190, Mountain Avenue, Summitville, Colorado – 80301",
    "specialties": ["Family Medicine", "Pediatrics", "Internal Medicine"],
    "rating": 4.6,
    "contact": {
      "phone": "+1 999-777-4444",
      "email": "info@mountainviewfamilymed.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed arcu non velit accumsan aliquet. Fusce scelerisque sodales.",
    "website": "https://mountainviewfamilymed.com/",
    "hoursOfOperation": {
      "Mon-Fri": "8am – 7pm",
      "Sat": "9am – 1pm",
      "Sun": "Closed"
    },
    "services": [
      "Primary Care",
      "Immunizations",
      "Chronic Disease Management"
    ]
  },
  {
    "id": "029",
    "name": "Riverfront Women's Health Clinic",
    "location": "200, Riverfront Road, Waterview, Wisconsin – 53501",
    "specialties": ["Obstetrics", "Gynecology", "Women's Health"],
    "rating": 4.7,
    "contact": {
      "phone": "+1 333-888-9999",
      "email": "info@riverfrontwomen.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sapien in risus tincidunt, id fermentum ex luctus.",
    "website": "https://riverfrontwomen.com/",
    "hoursOfOperation": {
      "Mon-Fri": "9am – 5pm",
      "Sat": "10am – 12pm",
      "Sun": "Closed"
    },
    "services": [
      "Prenatal Care",
      "Birth Control Consultation",
      "Menopause Management"
    ]
  },
  {
    "id": "030",
    "name": "Green Valley Orthodontics",
    "location": "210, Green Valley Road, Evergreen, Nevada – 89501",
    "specialties": ["Orthodontics", "Braces", "Invisalign"],
    "rating": 4.4,
    "contact": {
      "phone": "+1 777-999-4444",
      "email": "info@greenvalleyortho.com"
    },
    "imageUrl": hos1,
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue vehicula, congue magna id, vulputate lectus.",
    "website": "https://greenvalleyortho.com/",
    "hoursOfOperation": {
      "Mon-Wed": "9am – 5pm",
      "Thu": "Closed",
      "Fri": "9am – 6pm",
      "Sat": "10am – 2pm",
      "Sun": "Closed"
    },
    "services": [
      "Braces Installation",
      "Clear Aligner Therapy",
      "Retainers"
    ]
  }
];


  