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
  { title: "Günəş panellərinin quraşdırılması", description: "Mütəxəssis komandamız tərəfindən yüksək məhsuldarlıq və uzunömürlü təsir göstərən fotovoltaik sistemlər qururuq.", icon: "energy" },
  { title: "Külək turbinlərinin quraşdırılması", description: "Ağır hava şəraitinə qarşı etibarlı, ölçü və texniki tələblərə uyğun külək enerjisi çözümləri.", icon: "grid" },
  { title: "Günəş enerjili işıqlandırma dirəkləri", description: "Məsafə və işıqlandırma ehtiyaclarına uyğun günəş enerjili infrastrukturlar.", icon: "meter" },
  { title: "Günəş enerjili suvarma sistemləri", description: "Sahə suvarma ehtiyaclarını optimallaşdıran avtomatlaşdırılmış həllər.", icon: "service" },
  { title: "Günəş elektrik stansiyalarına servis", description: "Texniki monitorinq, preventiv xidmət və enerji sistemlərinin davamlılığı.", icon: "service" },
  { title: "Elektrik Şəbəkə və Yarımstansiyaların Qurulması", description: "Alçaq, orta və yüksək gərginlikli şəbəkələrin layihələndirilməsi və həyata keçirilməsi.", icon: "grid" },
  { title: "Yüksək gərginlikli şəbəkələr", description: "Yüksək gərginlikli elektrik ötürmə və paylama mexanizmlərinin layihələndirilməsi.", icon: "grid" },
  { title: "Alçaq gərginlikli şəbəkələr", description: "Doğrudan istifadəçilərə xidmət edən nöqtələrdə etibarlı paylama həlləri.", icon: "grid" },
  { title: "Elektrik şəbəkələrinin qurulması", description: "Şəbəkə təminatı, kadrlaşdırma və obyektin enerjisini tam şəkildə yükləmək üçün həllər.", icon: "grid" },
  { title: "Mühəndis Kommunikasiya İşləri", description: "Böyük layihələrdə rabitə, nəzarət və avtomatlaşdırma sistemlərinin inteqrasiyası.", icon: "network" },
  { title: "Binalarda mühəndis kommunikasiya işləri", description: "Bina daxilində rabitə, idarəetmə və təhlükəsizlik sistemlərinin quraşdırılması.", icon: "network" },
  { title: "Ağıllı şəbəkə və avtomatlaşdırma", description: "Enerji, monitoring və kontrol proseslərini tam avtomatlaşdırmağa yönəlik həllər.", icon: "network" },
  { title: "Servis və Məsləhət Xidmətləri", description: "İstismarda olan sistemlərin preventive baxımı və dayanıqlığının artırılması.", icon: "service" },
  { title: "1000 V-a qədər ölçü və sınaq", description: "Təhlükəsizlik, uyğunluq və performans yoxlamaları üçün dəqiq ölçmə xidmətləri.", icon: "audit" },
  { title: "Layihələndirmə və qiymətləndirmə", description: "Texniki, iqtisadi və həyata keçirilməsi baxımından obyekt üçün optimal qiymətləndirmə.", icon: "audit" },
  { title: "Mühəndis axtarışları və texniki məsləhət", description: "Layihələrin mürəkkəblik dərəcəsinə uyğun, mütəxəssis dəstək və axtarış xidmətləri.", icon: "service" },
  { title: "İnşaat İşləri", description: "Fərdi yaşayış evləri və ofislərin müasir dizayn dilində inşa edilməsi.", icon: "building" },
  { title: "Fərdi mənzil inşaatı", description: "Aylıq və mərhələli inşaat planlaşdırması ilə yaşayış məqsədli obyektlərin qurulması.", icon: "building" },
  { title: "Yaşayış və qeyri-yaşayış sahələrinin təmiri", description: "Mühəndislik, elektrik və kommunikasiya sistemlərinin kompleks təmiri və yenidənqurulması.", icon: "building" },
  { title: "Enerji Auditi", description: "Enerji itkisini müəyyən etmək və optimallaşdırma yollarını təklif etmək.", icon: "audit" },
  { title: "Elektrik və istilik sayğaclarının quraşdırılması", description: "Dəqiq ölçmə və enerji monitorinqi üçün müasir sayğac həlləri.", icon: "meter" },
];

export const projects: ProjectItem[] = [
  { title: "Bakı Enerji Kompleksi", location: "Bakı", description: "Müasir yarımstansiya və elektrik şəbəkəsi layihəsi.", year: "2024" },
  { title: "Abşeron Solar Park", location: "Abşeron", description: "Bərpa olunan enerji obyektinin nəzərdə tutulan inteqrasiyası.", year: "2023" },
  { title: "Nərimanov İnşaat Həlli", location: "Nərimanov", description: "Ofis binaları üçün mühəndislik və inşaat dəstəyi.", year: "2022" },
  { title: "Qaradağ Mühəndis Kompaksiyası", location: "Qaradağ", description: "Yüksək güclü şəbəkə və monitorinq sistemləri üçün kompleks həllər.", year: "2024" },
  { title: "Sumqayıt Günəş Enerji Parkı", location: "Sumqayıt", description: "Daimi enerjidəyişikliklərə uyğun modern günəş enerjisi obyekti.", year: "2023" },
  { title: "Şəki İnfrastruktur Layihəsi", location: "Şəki", description: "İctimai və yaşayış zonalarında elektrik və infrastruktur dəstəyi.", year: "2022" },
];

export const portfolioItems = [
  { id: "solar-farm", title: "Günəş elektr stansiyası", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80" },
  { id: "smart-grid", title: "Ağıllı şəbəkə", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
  { id: "energy-center", title: "Enerji mərkəzi", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" },
  { id: "infrastructure", title: "İnfrastruktur", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" },
];

export const newsArticles = [
  { id: "innovation-1", title: "Günəş enerjisi ilə yeni istehsal həlli", category: "Texnoloji yeniliklər", date: "14 Aprel 2026", description: "Enerji istehsalını optimallaşdıran sürətli və səmərəli müasir yanaşma." },
  { id: "innovation-2", title: "Ağıllı şəbəkə monitorinqi", category: "İnnovasiya", date: "03 Mart 2026", description: "Realtim monitorinq və avtomatlaşdırma ilə qazancların artımı." },
  { id: "innovation-3", title: "Davamlı infrastruktur layihələri", category: "Sərmayə", date: "18 Fevral 2026", description: "Gələcək nəsillər üçün daha dayanıqlı və təhlükəsiz infrastrukturlar yaratmaq." },
  { id: "innovation-4", title: "Enerji auditinin iqtisadi faydası", category: "Audit", date: "09 Yanvar 2026", description: "Müəssisələrdə enerjiyə qənaət edən sistemlərin reallığı və faydalılığı." },
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

export const navItems = [
  { label: "Əsas səhifə", href: "/" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Layihələr", href: "/projects" },
  { label: "Şirkətimiz", href: "/about" },
  { label: "Məlumatlar", href: "/faq" },
  { label: "Təklif alın", href: "/quote" },
  { label: "Əlaqə", href: "/contact" },
];

export const footerLinks = [
  { title: "Şirkət", items: [{ label: "Haqqımızda", href: "/about" }, { label: "FAQ", href: "/faq" }, { label: "Təklif alın", href: "/quote" }] },
  { title: "Xidmətlər", items: [{ label: "Xidmətlər", href: "/services" }, { label: "Layihələr", href: "/projects" }, { label: "Günəş kalkulyatoru", href: "/calculator" }] },
  { title: "Əlaqə", items: [{ label: "Əlaqə", href: "/contact" }, { label: "Məlumatlar", href: "/faq" }, { label: "Profil", href: "/profile" }] },
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
