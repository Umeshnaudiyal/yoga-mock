export type ClassCategory = 'Pilates' | 'Yoga' | 'Private & duet';

export type ClassItem = {
  category: ClassCategory;
  name: string;
  summary: string;
  description: string;
  image: string;
  slug: string;
};

export type CourseItem = {
  name: string;
  shortName: string;
  summary: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
  featured?: boolean;
};

const dhyana = 'https://dhyanadubai.com';
const vinyasa = 'https://www.vinyasayogaashram.com';

export const classItems: ClassItem[] = [
  { category: 'Pilates', name: 'Reformer Pilates', summary: 'Balanced strength & stability.', description: 'Controlled resistance, precise movement, and intentional progression for core engagement and balanced muscle activation.', image: `${dhyana}/assets/img/classes/reformer-landscape.jpg`, slug: 'reformer-pilates' },
  { category: 'Pilates', name: 'Cadillac Pilates', summary: 'Supported movement, deeper alignment.', description: 'Secure, supported movement patterns that build strength and mobility with care for every level.', image: `${dhyana}/assets/img/classes/cadillac-landscape.jpg`, slug: 'cadillac-pilates' },
  { category: 'Pilates', name: 'Mat Pilates', summary: 'Clean, minimal, deeply effective.', description: 'Bodyweight, mindful breathing, and purposeful movement for deep core stability without strain.', image: `${dhyana}/assets/img/classes/mat-pilates-landscape.jpg`, slug: 'mat-pilates' },
  { category: 'Pilates', name: 'Ladder Barrel', summary: 'Spinal mobility & deep core.', description: 'Curved support for deeper stretches, controlled strengthening, better posture, and less everyday stiffness.', image: `${dhyana}/assets/img/classes/ladder-barrel-landscape.jpg`, slug: 'ladder-barrel' },
  { category: 'Pilates', name: 'Chair Pilates', summary: 'Small apparatus, serious strength.', description: 'Balance, leg strength, and whole-body stability on a spring-loaded chair that scales to your level.', image: `${dhyana}/assets/img/classes/chair-pilates-landscape.jpg`, slug: 'chair-pilates' },
  { category: 'Yoga', name: 'Hatha Yoga', summary: 'The foundation of every practice.', description: 'Postures, breathwork, and relaxation at a pace that helps you understand each pose and leave calm and clear.', image: `${dhyana}/assets/img/dummy/d16.jpg`, slug: 'hatha-yoga' },
  { category: 'Yoga', name: 'Hatha Vinyasa', summary: 'Flow with grace.', description: 'Deliberate postures linked by breath and seamless transitions to build balance, strength, and endurance.', image: `${dhyana}/assets/img/classes/vinyasa-landscape.jpg`, slug: 'hatha-vinyasa' },
  { category: 'Yoga', name: 'Ashtanga Yoga', summary: 'Eight limbs, one steady rhythm.', description: 'A set sequence that builds heat, strength, and focus with personal adjustments from your teacher.', image: `${dhyana}/assets/img/classes/ashtanga-landscape.jpg`, slug: 'ashtanga-yoga' },
  { category: 'Yoga', name: 'Iyengar Yoga', summary: 'Precision, alignment and props.', description: 'Accessible alignment work using blocks and straps, often practiced therapeutically for posture and recovery.', image: `${dhyana}/assets/img/classes/iyengar-landscape.jpg`, slug: 'iyengar-yoga' },
  { category: 'Yoga', name: 'Kundalini Yoga', summary: 'Awaken your inner energy.', description: 'Breathwork, gentle movement, mantra, and meditation woven together to restore energy and focus.', image: `${dhyana}/assets/img/dummy/d09.png`, slug: 'kundalini-yoga' },
  { category: 'Yoga', name: 'Yin & Sound', summary: 'Slow down. Find stillness.', description: 'Long supported holds paired with sound to ease stress, open the body, and invite profound rest.', image: `${dhyana}/assets/img/classes/yin-sound-landscape.jpg`, slug: 'yin-sound' },
  { category: 'Yoga', name: 'Kids Yoga', summary: 'Focus, confidence and fun.', description: 'Breathing games, balances, and gentle stretches that help children feel calm and good in their bodies.', image: `${dhyana}/assets/img/classes/kids-yoga-landscape.jpg`, slug: 'kids-yoga' },
  { category: 'Private & duet', name: 'Private Training', summary: 'Your practice, your way.', description: 'A program built around your goals and your pace, ideal for first-timers, recovery, or refining your practice.', image: `${dhyana}/assets/img/classes/private-landscape.jpg`, slug: 'private-training' },
  { category: 'Private & duet', name: 'Duet Sessions', summary: 'Train together, progress together.', description: 'Personal attention from one teacher with the motivation of practicing side by side with someone you trust.', image: `${dhyana}/assets/img/classes/duet-landscape.jpg`, slug: 'duet-sessions' },
];

export const courseItems: CourseItem[] = [
  { name: '100 Hour Yoga Teacher Training', shortName: '100 hour', summary: 'A focused foundation for deepening your own practice and beginning to share it with confidence.', duration: '14 days', price: 'From $399', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/100-hour-teacher-training-vinyasayogaashram.jpg`, slug: '100-hour-teacher-training' },
  { name: '200 Hour Yoga Teacher Training', shortName: '200 hour', summary: 'A complete residential path into authentic teaching, yoga philosophy, anatomy, and a daily practice.', duration: '28 days', price: 'From $1,499', image: `${vinyasa}/dev/wp-content/uploads/2026/08/200-hour-yoga-teacher-training.jpeg`, slug: '200-hour-teacher-training', featured: true },
  { name: '300 Hour Yoga Teacher Training', shortName: '300 hour', summary: 'Advance your teaching with deeper methodology, subtle body studies, and a more refined personal practice.', duration: '28 days', price: 'From $1,899', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/300-hour-teacher-training-vinyasayogaashram.jpg`, slug: '300-hour-teacher-training' },
  { name: '500 Hour Yoga Teacher Training', shortName: '500 hour', summary: 'An immersive professional journey for experienced practitioners ready to embody the full path of yoga.', duration: '56 days', price: 'From $2,999', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/nimg4.jpg`, slug: '500-hour-teacher-training' },
  { name: 'Pre & Postnatal Yoga', shortName: 'pre / postnatal', summary: 'Ancient wisdom and modern anatomy for safe, knowledgeable support through pregnancy and beyond.', duration: '7 days', price: 'From $399', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/img123.jpg`, slug: 'pre-postnatal-yoga' },
  { name: 'Aerial Yoga', shortName: 'aerial yoga', summary: 'Build strength and flexibility while exploring creative movement supported by silk.', duration: '7 days', price: 'From $399', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/vinyasa-yoga-ashram-aerial-yoga-course.jpg?v=124`, slug: 'aerial-yoga' },
  { name: 'Sound Healing', shortName: 'sound healing', summary: 'Learn to use sound, vibration, and presence to support physical, emotional, and mental wellbeing.', duration: '7 days', price: 'From $264', image: `${vinyasa}/dev/wp-content/uploads/2026/09/sound-healing-home.jpeg`, slug: 'sound-healing' },
  { name: 'Yin Yoga', shortName: 'yin yoga', summary: 'A grounding experience in stillness, psychology, emotional body, and letting go.', duration: '7 days', price: 'From $399', image: `${vinyasa}/dev/wp-content/themes/vinyasa-yoga-ashram/images/image/yin-yoga-course-rishikesh.jpg`, slug: 'yin-yoga' },
  { name: 'Breathwork Yoga', shortName: 'breathwork', summary: 'Explore breath through pranayama, anatomy, neuroscience, philosophy, movement, and therapy.', duration: '7 days', price: 'From $399', image: `${vinyasa}/dev/wp-content/uploads/2026/08/breathwork-teacher-training-course-1.jpg`, slug: 'breathwork-yoga' },
];

export const featuredTestimonials = [
  { name: 'Brandi Jones', image: 'https://cdn.riteshyogaa.com/testimonials/dev.webp', quote: 'Ritesh is an exceptional yoga teacher whose calm guidance makes every class enjoyable.' },
  { name: 'Ratiba', image: 'https://cdn.riteshyogaa.com/testimonials/anjali.webp', quote: 'Ritesh has a unique way of making every yoga session feel personal, encouraging, and deeply rewarding.' },
  { name: 'Michael Chang', image: 'https://cdn.riteshyogaa.com/testimonials/2.webp', quote: 'A truly life-changing experience for my chronic back pain and posture.' },
];
