/**
 * ─────────────────────────────────────────────────────────────
 *  SİTE VERİ DOSYASI
 *  Bu şablonu başka bir avukatlık ofisi için kullanmak istediğinizde
 *  YALNIZCA bu dosyayı düzenlemeniz yeterlidir. Bileşenler tüm
 *  metin, iletişim ve medya bilgilerini buradan okur.
 * ─────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Kimlik ──────────────────────────────────────────────────
  officeName: "OVA HUKUK ve DANIŞMANLIK",
  officeNameShort: "Ova Hukuk ve Danışmanlık",
  slogan: "Uyuşmazlıkta çözüm, savunmada kararlılık.",
  description:
    "Amasya merkezli Ova Hukuk ve Danışmanlık; arabuluculuk, ceza, aile, ticaret, idare, iş ve gayrimenkul hukuku alanlarında 10 yıllık tecrübeyle hukuki danışmanlık ve avukatlık hizmeti sunar.",
  founded: "2016",
  city: "Amasya",
  experience: "10 Yıllık Hukuki Tecrübe",
  experienceYears: 10,

  // ── Medya (public klasöründen) ──────────────────────────────
  media: {
    logo: "/logo.png",
    heroVideo: "/hero.mp4",
    aboutImage: "/ornek.png", // jenerik yer tutucu — URL uyumluluğu için ASCII ad
    articleImage: "/terazi.jpeg",
  },

  // ── Navigasyon ──────────────────────────────────────────────
  nav: [
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "Faaliyet Alanları", href: "#faaliyet-alanlari" },
    { label: "Bağlantılar", href: "#baglantilar" },
    { label: "Makaleler", href: "#makaleler" },
    { label: "İletişim", href: "#iletisim" },
  ],

  // ── Avukatlar ───────────────────────────────────────────────
  lawyers: [
    {
      name: "Av. Ova TASLAK",
      bar: "Amasya Barosu",
      registryNo: "000",
    },
    {
      name: "Av. Örnek TASLAK",
      bar: "Amasya Barosu",
      registryNo: "001",
    },
  ],

  // ── Hakkımızda metni ────────────────────────────────────────
  about: {
    eyebrow: "Hakkımızda",
    title: "On yıllık birikim, iki imza, tek ilke: özenli savunma.",
    paragraphs: [
      "2016 yılından bu yana Amasya'da, müvekkillerimizin haklarını titizlikle savunuyor; her dosyayı kendi hikâyesi, kendi hassasiyeti ile ele alıyoruz.",
      "Arabuluculuk başta olmak üzere ceza, aile, ticaret, idare, iş ve gayrimenkul hukuku alanlarında; şeffaf iletişim, düzenli bilgilendirme ve güçlü hazırlık ilkeleriyle çalışıyoruz.",
    ],
  },

  // ── Faaliyet Alanları ───────────────────────────────────────
  // icon: lucide-react ikon adı (components/PracticeAreas.jsx içindeki
  // ICONS haritasında karşılığı bulunmalıdır)
  practiceAreas: [
    {
      title: "Şirketler ve Ticaret Hukuku",
      icon: "Building2",
      featured: true,
      description:
        "Şirket kuruluşundan kurumsal yönetime, ticari sözleşmelerden ortaklık uyuşmazlıklarına kadar işletmelerin tüm hukuki süreçlerini bütüncül bir yaklaşımla yönetiyoruz. Riskleri doğmadan tespit eden, ticari hedefleri koruyan ve sürdürülebilir büyümeyi destekleyen çözümler üretiyoruz.",
    },
    {
      title: "Arabuluculuk",
      icon: "Handshake",
      description:
        "Dava şartı ve ihtiyari arabuluculuk süreçlerinde; tarafların menfaatini gözeten, hızlı, gizli ve kalıcı çözümler.",
    },
    {
      title: "Ceza Hukuku",
      icon: "Gavel",
      description:
        "Soruşturma ve kovuşturmanın her aşamasında etkin savunma ve titiz hak takibi.",
    },
    {
      title: "Aile Hukuku",
      icon: "HeartHandshake",
      description:
        "Boşanma, velayet, nafaka ve mal paylaşımında hassasiyetle yürütülen süreç yönetimi.",
    },
    {
      title: "İdare Hukuku",
      icon: "Landmark",
      description:
        "İptal ve tam yargı davaları ile idari işlemlere karşı etkili hukuki koruma.",
    },
    {
      title: "İş Hukuku",
      icon: "Briefcase",
      description:
        "İşçi–işveren uyuşmazlıkları, kıdem ve ihbar tazminatı, işe iade davaları.",
    },
    {
      title: "Gayrimenkul Hukuku",
      icon: "KeyRound",
      description:
        "Tapu iptali ve tescil, kamulaştırma, kira uyuşmazlıkları ve mülkiyet davaları.",
    },
    {
      title: "Miras Hukuku",
      icon: "ScrollText",
      description:
        "Mirasçılık belgesi, vasiyetname, tenkis ve miras paylaşımında titizlikle yürütülen süreçler.",
    },
    {
      title: "Borçlar Hukuku",
      icon: "FileSignature",
      description:
        "Sözleşmelerin hazırlanması ve denetimi, alacak ve tazminat talepleri, sözleşmeden doğan uyuşmazlıklar.",
    },
    {
      title: "Tüketici Hukuku",
      icon: "ShoppingBag",
      description:
        "Ayıplı mal ve hizmet, abonelik ve mesafeli satış sözleşmelerinden doğan uyuşmazlıklarda hak takibi.",
    },
    {
      title: "İcra ve İflas Hukuku",
      icon: "Banknote",
      description:
        "Alacak takibi, haciz ve itiraz süreçleri, menfi tespit davaları ile iflas ve konkordato işlemleri.",
    },
    {
      title: "Sigorta Hukuku",
      icon: "ShieldCheck",
      description:
        "Kasko, trafik ve hayat sigortası uyuşmazlıkları, tazminat talepleri ve poliçeden doğan davaların takibi.",
    },
  ],

  // ── Resmî & Hızlı Bağlantılar ───────────────────────────────
  // color: pilin ikon/parlama rengi (kurum kimlik rengi ya da uyumlu canlı ton)
  quickLinks: [
    // TODO: Instagram bağlantılarını ("#") gerçek hesaplarla güncelleyin
    {
      label: "Av. Ova — Instagram",
      href: "#",
      icon: "Instagram",
      color: "#E1306C",
    },
    {
      label: "Av. Örnek — Instagram",
      href: "#",
      icon: "Instagram",
      color: "#E1306C",
    },
    {
      label: "e-Devlet",
      href: "https://www.turkiye.gov.tr",
      icon: "Globe",
      color: "#E03A3E",
    },
    {
      label: "Vatandaş UYAP",
      href: "https://vatandas.uyap.gov.tr",
      icon: "FileSearch",
      color: "#3D8BFD",
    },
    {
      label: "Türkiye Barolar Birliği",
      href: "https://www.barobirlik.org.tr",
      icon: "Scale",
      color: "#C8102E",
    },
    {
      label: "Adalet Bakanlığı",
      href: "https://www.adalet.gov.tr",
      icon: "Landmark",
      color: "#E4B04A",
    },
    {
      label: "Amasya Barosu",
      href: "https://www.amasyabarosu.org.tr",
      icon: "Gavel",
      color: "#37B26C",
    },
  ],

  // ── Çalışma Prensiplerimiz ─────────────────────────────────
  // icon: lucide-react ikon adı (components/WorkingPrinciples.jsx içindeki
  // ICONS haritasında karşılığı bulunmalıdır)
  principles: [
    {
      title: "Gizlilik",
      icon: "Lock",
      text: "Müvekkillerimize ait tüm bilgi ve belgeler, avukatlık mesleğinin sır saklama yükümlülüğü çerçevesinde titizlikle korunur. Dosya içeriği ve görüşme detayları hiçbir koşulda üçüncü kişilerle paylaşılmaz.",
    },
    {
      title: "Şeffaflık",
      icon: "Eye",
      text: "Sürecin her aşamasında müvekkillerimizi düzenli, açık ve anlaşılır biçimde bilgilendiririz. Dosyanın durumu, izlenen yöntem ve olası sonuçlar hakkında gerçekçi bir iletişim kurmayı esas alırız.",
    },
    {
      title: "Hukuki Etik",
      icon: "Scale",
      text: "Tüm çalışmalarımızı Avukatlık Kanunu ve Türkiye Barolar Birliği meslek kuralları çerçevesinde yürütür; mesleğin onuruna, yargıya duyulan güvene ve meslektaşlık ilkelerine özen gösteririz.",
    },
  ],

  // ── Makaleler ───────────────────────────────────────────────
  // Tüm makaleler ortak /terazi.jpeg kapak görselini kullanır.
  // content: "Devamını Oku" modal penceresinde gösterilen paragraflar
  articles: [
    {
      title: "Arabuluculuk Toplantısına Nasıl Hazırlanılır?",
      tag: "Arabuluculuk",
      date: "10 Temmuz 2026",
      excerpt:
        "Uyuşmazlığın doğru belgeler ve gerçekçi çözüm seçenekleriyle masaya taşınması için toplantı öncesinde atılması gereken adımlar.",
      image: "/terazi.jpeg",
      content: [
        "Arabuluculuk görüşmesinden önce uyuşmazlığın kronolojisini çıkarmak; sözleşme, yazışma, ödeme belgesi ve ihtar gibi kayıtları düzenlemek, müzakerenin daha verimli ilerlemesini sağlar. Talebin yalnızca toplam tutarı değil, dayanakları ve öncelikleri de açıkça belirlenmelidir.",
        "Toplantıya tek bir sonuç beklentisiyle katılmak yerine, kabul edilebilir alternatifleri ve vazgeçilmez koşulları önceden değerlendirmek önemlidir. Varılacak anlaşmanın kapsamı, ödeme planı, gizlilik ve temerrüt sonuçları somut biçimde yazılmalıdır.",
      ],
      href: "#",
    },
    {
      title: "Ceza Soruşturmasında İfade Verirken Bilinmesi Gerekenler",
      tag: "Ceza Hukuku",
      date: "26 Haziran 2026",
      excerpt:
        "İfade alma sürecinde susma, müdafi yardımından yararlanma ve tutanağı inceleme haklarının neden kritik olduğunu açıklıyoruz.",
      image: "/terazi.jpeg",
      content: [
        "Ceza soruşturmasında verilen ilk ifade, dosyanın sonraki aşamalarını etkileyebilir. Kişi, isnadı ve haklarını anlamalı; bilmediği veya emin olmadığı hususlarda tahminde bulunmamalı ve beyanının tutanağa doğru geçirilip geçirilmediğini kontrol etmelidir.",
        "Müdafi yardımı yalnızca duruşma aşamasına özgü değildir. İfade öncesinde dosyanın koşullarını değerlendirmek, hukuka uygun delilleri belirlemek ve savunma stratejisini tutarlı biçimde kurmak olası hak kayıplarını önlemeye yardımcı olur.",
      ],
      href: "#",
    },
    {
      title: "Boşanma Davasında Velayet ve Nafaka Nasıl Değerlendirilir?",
      tag: "Aile Hukuku",
      date: "12 Haziran 2026",
      excerpt:
        "Çocuğun üstün yararı, tarafların ekonomik koşulları ve dava sürecinde alınabilecek geçici önlemler üzerine temel bir rehber.",
      image: "/terazi.jpeg",
      content: [
        "Velayet değerlendirmesinde anne veya babanın talebinden önce çocuğun üstün yararı gözetilir. Çocuğun yaşı, eğitim düzeni, yaşam çevresi, bakım koşulları ve gerektiğinde uzman incelemeleri birlikte ele alınır.",
        "Tedbir, iştirak ve yoksulluk nafakası farklı amaçlara ve koşullara sahiptir. Talebin hazırlanmasında düzenli giderlerin, gelir durumunun ve çocuğun ihtiyaçlarının belgelenmesi; kararın somut verilere dayanmasına katkı sağlar.",
      ],
      href: "#",
    },
    {
      title: "Şirket Ortakları Arasındaki Uyuşmazlıklar Nasıl Yönetilir?",
      tag: "Şirketler Hukuku",
      date: "29 Mayıs 2026",
      excerpt:
        "Yönetim yetkisi, kâr dağıtımı, bilgi alma hakkı ve pay devri kaynaklı anlaşmazlıklarda izlenebilecek hukuki yollar.",
      image: "/terazi.jpeg",
      content: [
        "Ortaklar arasındaki uyuşmazlıklar çoğu zaman şirket sözleşmesindeki yetki sınırlarının belirsizliği, bilgi paylaşımının aksaması veya ticari beklentilerin farklılaşmasıyla ortaya çıkar. Şirket kayıtları, genel kurul kararları ve ortaklar arasındaki yazılı mutabakatlar birlikte incelenmelidir.",
        "Uyuşmazlık büyümeden önce karar alma, pay devri, rekabet yasağı ve ayrılma mekanizmalarının açık kurallara bağlanması şirketin faaliyetini korur. Dava, arabuluculuk veya sözleşmesel çözüm seçenekleri somut şirket yapısına göre değerlendirilmelidir.",
      ],
      href: "#",
    },
    {
      title: "İş Sözleşmesinin Feshinde Geçerli Neden ve İspat",
      tag: "İş Hukuku",
      date: "15 Mayıs 2026",
      excerpt:
        "Fesih bildiriminin hazırlanması, performans kayıtları, savunma süreci ve işçi-işveren açısından delillerin korunması.",
      image: "/terazi.jpeg",
      content: [
        "İş sözleşmesinin sona erdirilmesinde fesih nedeninin açık, tutarlı ve somut olaylarla desteklenebilir olması önem taşır. Yazılı bildirimler, görev tanımları, performans değerlendirmeleri ve işyeri kayıtları uyuşmazlığın çözümünde belirleyici olabilir.",
        "İşçi açısından bordro, mesai kaydı ve yazışmaların; işveren açısından ise uygulanan prosedür ve bildirimlerin düzenli saklanması gerekir. Fesih öncesi ve sonrası süreler dosyanın özelliğine göre ayrıca değerlendirilmelidir.",
      ],
      href: "#",
    },
    {
      title: "Tapu İptali ve Tescil Davalarında Delil Stratejisi",
      tag: "Gayrimenkul Hukuku",
      date: "30 Nisan 2026",
      excerpt:
        "Tapu kayıtları, sözleşmeler, ödeme belgeleri ve tanık anlatımlarının mülkiyet uyuşmazlıklarındaki rolünü inceliyoruz.",
      image: "/terazi.jpeg",
      content: [
        "Tapu iptali ve tescil talepleri farklı hukuki nedenlere dayanabilir. Bu nedenle tapu geçmişi, resmi belgeler, taraflar arasındaki sözleşmeler ve ödeme hareketleri uyuşmazlığın başlangıcından itibaren birlikte değerlendirilmelidir.",
        "Taşınmazın fiili kullanımı, devir süreci ve tarafların gerçek iradesi hakkındaki deliller davanın niteliğine göre önem kazanır. Talep ve delillerin doğru hukuki sebep altında sunulması, yargılama stratejisinin temelini oluşturur.",
      ],
      href: "#",
    },
    {
      title: "Kira Uyuşmazlıklarında Tahliye ve Kira Bedelinin Belirlenmesi",
      tag: "Gayrimenkul Hukuku",
      date: "17 Nisan 2026",
      excerpt:
        "Kiracı ve kiraya veren açısından ihtar, ödeme kayıtları, tahliye sebepleri ve kira bedeline ilişkin uyuşmazlıklar.",
      image: "/terazi.jpeg",
      content: [
        "Kira ilişkisinde sözleşme, ödeme kayıtları ve taraflar arasındaki bildirimler uyuşmazlığın çerçevesini belirler. Tahliye talebinin dayanağı ile kira bedeline ilişkin talepler birbirinden farklı koşullara ve usullere tabi olabilir.",
        "İhtarların zamanında ve doğru içerikle gönderilmesi, ödemelerin açıklamalı şekilde yapılması ve teslim durumunun belgelenmesi olası bir uyuşmazlıkta önem taşır. Süreç başlatılmadan önce somut sözleşme ve güncel koşullar birlikte incelenmelidir.",
      ],
      href: "#",
    },
    {
      title: "Ticari Sözleşmelerde Cezai Şart ve Teminat Dengesi",
      tag: "Ticaret Hukuku",
      date: "3 Nisan 2026",
      excerpt:
        "Sözleşme ihlallerine karşı cezai şart, garanti, kefalet ve ödeme güvencelerinin doğru kurgulanması neden önemlidir?",
      image: "/terazi.jpeg",
      content: [
        "Ticari sözleşmelerde cezai şart, tarafları yükümlülüklerini zamanında yerine getirmeye teşvik eder; ancak tek başına her riski ortadan kaldırmaz. Teslim, kabul, ödeme ve fesih koşullarının ölçülebilir şekilde yazılması gerekir.",
        "Teminat türü seçilirken işlemin büyüklüğü, tarafların konumu ve olası ihlal senaryoları değerlendirilmelidir. Belirsiz veya birbiriyle çelişen hükümler, uyuşmazlık çıktığında sözleşmenin koruyucu etkisini azaltabilir.",
      ],
      href: "#",
    },
    {
      title: "Miras Paylaşımında Ortaklığın Giderilmesi Süreci",
      tag: "Miras Hukuku",
      date: "20 Mart 2026",
      excerpt:
        "Miras kalan taşınmazlarda anlaşmalı paylaşım, satış ve ortaklığın giderilmesi seçeneklerinin temel farkları.",
      image: "/terazi.jpeg",
      content: [
        "Birden fazla mirasçının hak sahibi olduğu taşınmazlarda kullanım, giderler ve satış konusunda görüş ayrılıkları yaşanabilir. Tapu ve mirasçılık kayıtları çıkarıldıktan sonra paylaşımın anlaşmayla mümkün olup olmadığı değerlendirilmelidir.",
        "Uzlaşma sağlanamadığında ortaklığın giderilmesi süreci gündeme gelebilir. Taşınmazın aynen bölünmeye uygunluğu, üzerindeki haklar ve satışın ekonomik sonuçları incelenerek mirasçılar için en uygun yol belirlenmelidir.",
      ],
      href: "#",
    },
    {
      title: "Ayıplı Mal ve Hizmetlerde Tüketicinin Başvuru Yolları",
      tag: "Tüketici Hukuku",
      date: "6 Mart 2026",
      excerpt:
        "Fatura, servis kaydı ve satıcı yazışmalarının korunması; onarım, değişim ve bedel taleplerinin hazırlanması üzerine bir rehber.",
      image: "/terazi.jpeg",
      content: [
        "Satın alınan malın veya hizmetin vaat edilen özellikleri taşımaması hâlinde sorunun ne zaman fark edildiği ve satıcıya nasıl bildirildiği önemlidir. Fatura, sözleşme, reklam içeriği, servis formu ve yazışmalar düzenli biçimde saklanmalıdır.",
        "Tüketicinin başvurabileceği yol; uyuşmazlığın tutarı, ürünün niteliği ve talep edilen çözüme göre değişebilir. Başvuruda olayın kronolojisinin, seçilen talebin ve destekleyici belgelerin açıkça sunulması sürecin sağlıklı ilerlemesini sağlar.",
      ],
      href: "#",
    },
  ],

  // ── Sıkça Sorulan Sorular ───────────────────────────────────
  // Yanıtlar yalnızca genel bilgilendirme amaçlıdır; baro reklam
  // yasağı gereği vaat, garanti veya yönlendirme içermemelidir.
  faq: [
    {
      question: "Vekaletname nasıl çıkartılır?",
      answer:
        "Avukatınıza vekalet verebilmek için Türkiye sınırları içerisindeki herhangi bir notere giderek genel dava vekaletnamesi düzenletebilirsiniz. Yurt dışında ise bu işlem konsolosluklar aracılığıyla yapılmaktadır.",
    },
    {
      question: "Anlaşmalı boşanma süreci ne kadar sürer?",
      answer:
        "Tarafların tüm şartlarda (nafaka, velayet, tazminat vb.) tam olarak mutabık kalması halinde, dava genellikle ilk celsede ve ortalama 1 ila 3 ay içerisinde sonuçlanmaktadır.",
    },
    {
      question: "İhtarname nedir, nasıl gönderilir?",
      answer:
        "Hukuki bir uyuşmazlıkta karşı tarafa haklarınızı hatırlatmak, bir durumu bildirmek veya temerrüde düşürmek amacıyla noter aracılığıyla gönderilen resmî bir belgedir.",
    },
  ],

  // ── İletişim ────────────────────────────────────────────────
  // NAP tutarlılığı: adres ve telefon, Google İşletme Profili kaydıyla
  // birebir aynı tutulmalıdır (app/layout.js içindeki şema dahil).
  contact: {
    address:
      "Örnek Mahallesi, Adalet Caddesi, Hukuk Plaza Kat:5 No:10, Merkez/Amasya",
    phones: [{ label: "0505 505 05 05", tel: "+905055050505" }],
    email: "info@ovahukuk.com",
    whatsapp: "+905055050505",
    whatsappUrl: "https://wa.me/905055050505",
    // Demo şablonu: harita sorgusu genel bir adliye lokasyonunu hedefler.
    // Gerçek ofis için Google İşletme Profili adıyla değiştirin.
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Amasya Merkez Adliyesi"),
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Amasya+Merkez+Adliyesi&output=embed",
  },

  // ── Alt bilgi ───────────────────────────────────────────────
  footer: {
    disclaimer:
      "Bu internet sitesinde yer alan bilgiler yalnızca bilgilendirme amaçlıdır; hukuki tavsiye niteliği taşımaz.",
  },
};

export default siteData;
