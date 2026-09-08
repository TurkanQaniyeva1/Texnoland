export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectItem = {
  title: string;
  location: string;
  description: string;
  year: string;
};

export type ReviewItem = {
  name: string;
  role: string;
  quote: string;
};

export const services: ServiceItem[] = [
  { title: "Bərpa Olunan Enerji Sistemlərinin Quraşdırılması", description: "Günəş enerjisi və digər bərpa olunan mənbələrin səmərəli tətbiqi üçün texniki həllər.", icon: "energy" },
  { title: "Elektrik Şəbəkə və Yarımstansiyaların Qurulması", description: "Alçaq, orta və yüksək gərginlikli şəbəkələrin layihələndirilməsi və həyata keçirilməsi.", icon: "grid" },
  { title: "Mühəndis Kommunikasiya İşləri", description: "Böyük layihələrdə rabitə, nəzarət və avtomatlaşdırma sistemlərinin inteqrasiyası.", icon: "network" },
  { title: "Servis və Məsləhət Xidmətləri", description: "İstismarda olan sistemlərin preventive baxımı və dayanıqlığının artırılması.", icon: "service" },
  { title: "İnşaat İşləri", description: "Fərdi yaşayış evləri və ofislərin müasir dizayn dilində inşa edilməsi.", icon: "building" },
  { title: "Enerji Auditi", description: "Enerji itkisini müəyyən etmək və optimallaşdırma yollarını təklif etmək.", icon: "audit" },
  { title: "Elektrik və İstilik Sayğaclarının Quraşdırılması", description: "Dəqiq ölçmə və enerji monitorinqi üçün müasir sayğac həlləri.", icon: "meter" },
];

export const projects: ProjectItem[] = [
  { title: "Bakı Enerji Kompleksi", location: "Bakı", description: "Müasir yarımstansiya və elektrik şəbəkəsi layihəsi.", year: "2024" },
  { title: "Abşeron Solar Park", location: "Abşeron", description: "Bərpa olunan enerji obyektinin nəzərdə tutulan inteqrasiyası.", year: "2023" },
  { title: "Nərimanov İnşaat Həlli", location: "Nərimanov", description: "Ofis binaları üçün mühəndislik və inşaat dəstəyi.", year: "2022" },
];

export const stats = [
  { label: "İllik təcrübə", value: "10+" },
  { label: "Tamamlanmış layihələr", value: "250+" },
  { label: "İşçilərin sayı", value: "120+" },
  { label: "Zəmanət", value: "100%" },
];

export const certificates = [
  { title: "Dövlət lisenziyası", subtitle: "Elektroenergetika sahəsində" },
  { title: "Beynəlxalq standart sertifikatı", subtitle: "ISO və təhlükəsizlik qaydaları" },
  { title: "Enerji efficiency attestatı", subtitle: "Mühəndislik və audit sistemləri" },
];

export const partners = [
  "EnergoTech", "Aquila Group", "GridPro", "NovaBuild", "VoltLine",
];

export const reviews: ReviewItem[] = [
  { name: "Elvin Əliyev", role: "İdarəetmə Direktoru", quote: "Texnoland-un çağdaş yanaşması layihələrimizi həm daha sürətli, həm də daha təhlükəsiz edir." },
  { name: "Nigar Həsənova", role: "İnfrastruktur mütəxəssisi", quote: "Peşəkar komandaları ilə hər addımda etibarlı dəstək alırıq." },
];

export const faqItems = [
  { question: "Şirkət hansı sahələrdə fəaliyyət göstərir?", answer: "Biz elektroenergetika, mühəndis kommunikasiya, inşaat və enerji auditləri sahələrində fəaliyyət göstəririk." },
  { question: "Layihə müddəti nə qədərdir?", answer: "Layihənin ölçüsünə görə planlama mərhələsindən başlayaraq 2 həftədən çox ola bilər." },
  { question: "Həllər beynəlxalq standartlara uyğun mudur?", answer: "Bəli. Bütün işlərdə zəmanət və keyfiyyət standartları prioritet hesab olunur." },
];

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Əsas səhifə", href: "/" },
  {
    label: "Xidmətlər",
    href: "/services",
    children: [
      { label: "Bərpa olunan enerji", href: "/services/renewable-energy", children: [
        { label: "Günəş panelləri", href: "/services/solar-panels" },
        { label: "Külək turbinləri", href: "/services/wind-turbines" },
        { label: "Günəş enerjili işıqlandırma", href: "/services/solar-lighting" },
        { label: "Günəş enerjili suvarma", href: "/services/solar-irrigation" },
        { label: "GES servis xidməti", href: "/services/solar-maintenance" },
      ] },
      { label: "Elektrik şəbəkələri və yarımstansiyalar", href: "/services/electrical-grids", children: [
        { label: "Yüksək gərginlikli şəbəkələr", href: "/services/high-voltage" },
        { label: "Alçaq gərginlikli şəbəkələr", href: "/services/low-voltage" },
        { label: "Elektrik şəbəkələrinin qurulması", href: "/services/grid-construction" },
      ] },
      { label: "Mühəndis kommunikasiya", href: "/services/engineering-communications", children: [
        { label: "Binalarda kommunikasiya", href: "/services/building-communications" },
        { label: "Ağıllı şəbəkə və avtomatika", href: "/services/smart-automation" },
      ] },
      { label: "Servis və məsləhət", href: "/services/consulting", children: [
        { label: "Ölçü və sınaq işləri", href: "/services/testing" },
        { label: "Layihələndirmə və qiymətləndirmə", href: "/services/design" },
        { label: "Texniki məsləhət", href: "/services/technical-consulting" },
      ] },
      { label: "İnşaat işləri", href: "/services/construction", children: [
        { label: "Fərdi mənzil inşaatı", href: "/services/residential-construction" },
        { label: "Təmir işləri", href: "/services/renovation" },
      ] },
      { label: "Enerji auditi", href: "/services/energy-audit" },
      { label: "Sayğacların quraşdırılması", href: "/services/meters" },
    ],
  },
  { label: "Layihələr", href: "/projects" },
  {
    label: "Şirkətimiz",
    href: "/about",
    children: [
      { label: "Haqqımızda", href: "/about" },
      { label: "Məqsədimiz", href: "/about/mission" },
      { label: "Zəmanət", href: "/about/warranty" },
      { label: "Lisenziya və sertifikatlar", href: "/certificates" },
      { label: "Sosial məsuliyyət", href: "/about/social-responsibility" },
      { label: "Ətraf mühit", href: "/about/environment" },
    ],
  },
  {
    label: "Məlumatlar",
    href: "/discover",
    children: [
      { label: "Texnoloji yeniliklər", href: "/discover" },
      { label: "Bərpa olunan enerji", href: "/discover/renewable-energy" },
      { label: "Günəş enerjisi", href: "/discover/solar-energy" },
      { label: "Külək enerjisi", href: "/discover/wind-energy" },
      { label: "Tez-tez verilən suallar", href: "/faq" },
      { label: "Günəş kalkulyatoru", href: "/calculator" },
    ],
  },
  { label: "Təklif alın", href: "/quote" },
  { label: "Əlaqə", href: "/contact" },
];

export const footerLinks = [
  { title: "Şirkət", items: [{ label: "Haqqımızda", href: "/about" }, { label: "FAQ", href: "/faq" }] },
  { title: "Xidmətlər", items: [{ label: "Xidmətlər", href: "/services" }, { label: "Layihələr", href: "/projects" }] },
  { title: "Əlaqə", items: [{ label: "Əlaqə", href: "/contact" }, { label: "Sertifikatlar", href: "/certificates" }] },
];

export type MediaItem = {
  id: string;
  title: string;
  image: string;
  year: string;
  duration: string;
  description: string;
  genre: string[];
  category: string;
  accent: string;
  rating?: number;
};

const mediaBase = {
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  year: "2024",
  duration: "24/7",
  category: "Texnoland",
};

const createMediaItem = (
  id: string,
  title: string,
  description: string,
  genre: string[],
  accent: string,
  image = mediaBase.image,
  rating = 4.8,
): MediaItem => ({
  id,
  title,
  image,
  year: mediaBase.year,
  duration: mediaBase.duration,
  description,
  genre,
  category: mediaBase.category,
  accent,
  rating,
});

export const featuredItems: MediaItem[] = [
  createMediaItem("texnoland-energy", "Texnoland Enerji Həlli", "Mühəndislik və enerji sahəsində uzunmüddətli, səmərəli həllər təqdim edirik.", ["Enerji", "Layihə"], "from-emerald-500/60 to-cyan-500/60"),
  createMediaItem("solar-grid", "Günəş və Şəbəkə İntegrasiyası", "Bərpa olunan enerji mənbələrinin şəbəkəyə inteqrasiyası üçün tam texniki dəstək.", ["Solar", "Şəbəkə"], "from-cyan-500/60 to-blue-500/60"),
  createMediaItem("smart-communications", "Ağıllı Kommunikasiya", "Mühəndislik layihələrində rabitə, nəzarət və avtomatlaşdırma həlləri.", ["Kommunikasiya", "Avtomatlaşdırma"], "from-violet-500/60 to-fuchsia-500/60"),
  createMediaItem("construction-works", "Modern İnşaat Həlli", "Fərdi obyektlər üçün yüksək keyfiyyətli, davamlı inşaat və dizayn dəstəyi.", ["İnşaat", "Dizayn"], "from-amber-500/60 to-orange-500/60"),
];

export const movies: MediaItem[] = featuredItems;
export const series: MediaItem[] = featuredItems.slice(1);
export const trendingItems: MediaItem[] = featuredItems.slice(0, 2);
export const popularItems: MediaItem[] = featuredItems.slice(1, 3);
export const topRatedItems: MediaItem[] = featuredItems.slice(2);
export const upcomingItems: MediaItem[] = featuredItems.slice(0, 1);

export const genres = [
  { slug: "energy", name: "Enerji", description: "Bərpa olunan enerji və elektrik sistemləri həlləri." },
  { slug: "engineering", name: "Mühəndislik", description: "Layihə planlaşdırma, texniki dizayn və icra dəstəyi." },
  { slug: "construction", name: "İnşaat", description: "Modern inşaat işləri və müasir obyektlərin yaradılması." },
  { slug: "communications", name: "Kommunikasiya", description: "Ağıllı monitoring və rabitə sistemləri." },
];

export const notifications = [
  { id: "1", title: "Layihə təqvimi yeniləndi", message: "Abşeron solar layihəsi üçün rəsmi planda dəyişiklik var.", time: "5 dəq", unread: true },
  { id: "2", title: "Yeni sertifikat", message: "Texnoland yeni enerji təhlükəsizlik sertifikatını qəbul edib.", time: "1 saat", unread: false },
];

export const people = [
  { id: "1", name: "Rəşad Əliyev", role: "Baş mühəndis", image: mediaBase.image, description: "Enerji sistemlərinin layihələndirilməsi və idarə olunması üzrə ekspert.", bio: "Rəşad Əliyev enerji sistemlərinin layihələndirilməsi və idarə olunması sahəsində 15 ildən çox təcrübəyə malikdir." },
  { id: "2", name: "Aysel Hüseynova", role: "Proyekt meneceri", image: mediaBase.image, description: "Böyük miqyaslı infrastruktur layihələrində həyata keçirici rol oynayır.", bio: "Aysel Hüseynova mühəndislik layihələrinin planlaşdırılması və icrasına rəhbərlik edir." },
];

export const adminCategories = [
  { id: "1", name: "Enerji", count: 5 },
  { id: "2", name: "İnşaat", count: 3 },
  { id: "3", name: "Kommunikasiya", count: 4 },
];
export const adminMetrics = [
  { label: "Aktiv layihələr", value: "18" },
  { label: "Tamamlanmış mərhələlər", value: "96" },
];
export const adminReviews = [
  { id: "1", title: "Nigar Həsənova", status: "Onaylandı" },
];
export const adminUsers = [
  { id: "1", name: "Admin", status: "Aktiv" },
];
