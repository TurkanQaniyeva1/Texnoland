export type CompanyService = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  icon: string;
};

export const companyServices: CompanyService[] = [
  { slug: "renewable-energy", title: "Bərpa olunan enerji sistemləri", summary: "Günəş, külək və suvarma sistemləri üçün layihələndirmə, quraşdırma və servis.", details: "Texnoland enerji ehtiyacını və obyektin xüsusiyyətlərini təhlil edərək səmərəli, dayanıqlı və zəmanətli bərpa olunan enerji sistemləri qurur.", icon: "01" },
  { slug: "electrical-grids", title: "Elektrik şəbəkələri və yarımstansiyalar", summary: "Alçaq, orta və yüksək gərginlikli şəbəkələrin qurulması və texniki xidməti.", details: "Layihələndirmədən sınaq və istismara qədər elektrik infrastrukturu üçün təhlükəsiz və standartlara uyğun həllər təqdim edirik.", icon: "02" },
  { slug: "engineering-communications", title: "Mühəndis kommunikasiya", summary: "Binalar, istehsalat və infrastruktur üçün avtomatika və kommunikasiya sistemləri.", details: "Mühəndis sistemlərini bir-biri ilə əlaqələndirərək idarəolunan, monitorinq edilə bilən və etibarlı obyektlər yaradırıq.", icon: "03" },
  { slug: "consulting", title: "Servis və məsləhət xidmətləri", summary: "Ölçü, sınaq, layihələndirmə, qiymətləndirmə və texniki məsləhət.", details: "Mövcud sistemlərin texniki baxışını keçirir, riskləri müəyyən edir və uzunmüddətli istismar üçün praktik yol xəritəsi hazırlayırıq.", icon: "04" },
  { slug: "construction", title: "İnşaat işləri", summary: "Fərdi yaşayış və qeyri-yaşayış obyektləri üçün inşaat və təmir.", details: "Enerji səmərəliliyi və funksional dizayn prinsiplərini birləşdirən inşaat həlləri təqdim edirik.", icon: "05" },
  { slug: "energy-audit", title: "Enerji auditi", summary: "Enerji itkisini ölçür, səmərəlilik imkanlarını hesablayırıq.", details: "Audit nəticələrinə əsasən obyekt üçün prioritetləşdirilmiş qənaət tədbirləri və investisiya istiqamətləri təqdim olunur.", icon: "06" },
  { slug: "meters", title: "Elektrik və istilik sayğacları", summary: "Dəqiq ölçmə və enerji monitorinqi üçün sayğac həlləri.", details: "Obyektin ehtiyacına uyğun sayğaclaşma, quraşdırma və texniki dəstək xidmətləri göstəririk.", icon: "07" },
];

export type CompanyProject = {
  slug: string;
  title: string;
  location: string;
  type: string;
  capacity?: string;
  description: string;
};

export const companyProjects: CompanyProject[] = [
  { slug: "cebrayil-dostluq-parki", title: "Cəbrayıl rayonu, Dostluq Parkı", location: "Cəbrayıl", type: "Günəş elektrik stansiyası", capacity: "350 kVt", description: "Park ərazisinin enerji ehtiyacını qarşılayan günəş enerji sistemi və texniki infrastruktur." },
  { slug: "nizami-ferdi-yasayis-evi", title: "Nizami rayonu, fərdi yaşayış evi", location: "Bakı, Nizami", type: "On-grid GES", capacity: "38 kVt", description: "Fərdi yaşayış evi üçün enerji qənaətini artıran damüstü günəş sistemi." },
  { slug: "aes-service-company", title: "AES Service Company MMC", location: "Bakı", type: "Günəş enerji sistemi", capacity: "20 kVt", description: "Kommersiya obyektində günəş enerjisinin istifadəsi və şəbəkəyə inteqrasiyası." },
  { slug: "agdam-senaye-bolgesi", title: "Ağdam Sənaye Bölgəsi Avtomatika zavodu", location: "Ağdam", type: "Sənaye GES", capacity: "135 kVt", description: "İstehsalat obyektinin dayanıqlı enerji təminatı üçün günəş elektrik sistemi." },
  { slug: "bilgeh-ferdi-ev", title: "Bilgəh fərdi ev", location: "Bakı, Bilgəh", type: "Fərdi enerji həlli", capacity: "7 kVt", description: "Məişət enerji sərfiyyatını optimallaşdıran kompakt günəş həlli." },
  { slug: "suretli-enerji-doldurma", title: "Sürətli enerji doldurma məntəqələri", location: "Azərbaycan", type: "Elektrik mobilliyi", description: "Elektrikli nəqliyyat üçün müasir enerji doldurma infrastrukturu." },
  { slug: "adY-xidmet-layihesi", title: "Azərbaycan Dəmir Yollarında xidmət layihəsi", location: "Azərbaycan", type: "Texniki servis", description: "Dəmir yolu infrastrukturunda elektrik və mühəndislik xidmətləri." },
  { slug: "agsu-fermer-gunes-enerjisi", title: "Ağsu rayonu fermer üçün Günəş Enerjisi", location: "Ağsu", type: "Kənd təsərrüfatı enerjisi", description: "Fermer təsərrüfatı üçün suvarma və gündəlik ehtiyacları dəstəkləyən günəş sistemi." },
];
