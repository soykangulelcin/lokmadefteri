# 🍽️ LokmaDefteri - Her Lokmada Mutluluk

Bu dökümentasyon, Web Tasarım Ödevi kapsamında geliştirilen
"LokmaDefteri" web uygulamasının mimari yapısını,
kullanılan ileri seviye CSS3/JavaScript teknolojilerini,
harici API entegrasyonunu ve responsive arayüz isterlerine
yönelik teknik çözümleri en ince ayrıntısına kadar açıklamaktadır.

---

## 📂 BÖLÜM 1: Ödev Sahibi ve Geliştirici Bilgileri

* **Geliştirici Adı Soyadı:** Soykan GÜLELÇİN
* **Ödev Statüsü:** Web Tasarım Ödevi (Dönem İçi Standart Ödev Çalışması)
* **Ödev Teması:** Ev Yapımı Tarifler, Dünya Mutfakları ve Bartın Lezzetlerini
  Kategorili Filtreleme, Favori Sistemi, Karanlık Tema ve Günlük API Entegrasyonu
  ile Sunan Tek Sayfalı (Single-Page) Dinamik Tarif Platformu

---

## 🛠️ BÖLÜM 2: Kullanılan Teknolojiler ve Versiyon Kontrolü

Ödevin ön yüz mimarisi ve versiyon takibi tamamen modern
web standartlarına ve endüstriyel pratiklerine uygun olarak
yapılandırılmıştır:

* **HTML5:** `nav`, `section`, `footer` gibi anlamsal (Semantic) etiketler
  kullanılarak SEO ve erişilebilirlik standartlarına uygun arayüz iskeleti kurulmuştur.
* **CSS3:** Modüler stil yönetimi, CSS özel değişkenleri (Custom Properties / CSS Variables),
  keyframe animasyonları ve responsive katmanlar sıfırdan kodlanmıştır.
  Herhangi bir harici UI kütüphanesi yükü bindirilmediği için maksimum performans
  elde edilmiştir.
* **Modern JavaScript (ES6+):** `async/await` tabanlı API çağrıları, tarayıcı
  olay tetikleyicileri (Event Listeners), dinamik DOM manipülasyonları ve
  `localStorage` kalıcı veri yönetimi etkin olarak kullanılmıştır.
* **TheMealDB REST API:** Günlük rastgele yemek tariflerini gerçek zamanlı olarak
  çeken harici bir REST API entegrasyonu `fetch()` ile gerçekleştirilmiştir.
* **Git & GitHub:** Ödevin tüm geliştirme süreçleri lokalde Git yazılımı ile
  takip edilmiş ve GitHub üzerinde uzak depoya güvenli bir şekilde aktarılmıştır.

---

## 💻 BÖLÜM 3: Terminal Üzerinden Git Sürüm Kontrol Yönetimi

Projenin yerel bilgisayardaki geliştirme aşamalarından itibaren terminal
üzerinde aşağıdaki komut mimarisi sırasıyla işletilerek sürüm kontrolü yapılmıştır:

> 📂 **1. Yerel Deponun Başlatılması**
> ```bash
> git init
> # Proje kök dizininde boş bir Git
> # reposu oluşturuldu. Değişiklikler
> # anlık olarak izlenmeye başlandı.
> ```

> 🔍 **2. Dosyaların Takip Listesine Alınması**
> ```bash
> git add .
> # Projedeki tüm HTML, CSS, JS ve görsel
> # dosyaları hazırlık alanına
> # güvenle dahil edildi.
> ```

> 💾 **3. Değişikliklerin Yerel Depoya Kaydedilmesi**
> ```bash
> git commit -m "LokmaDefteri ilk yükleme"
> # Hazırlık alanındaki tüm dosyalar
> # yerel Git veritabanına kalıcı
> # olarak mühürlendi.
> ```

> 🔗 **4. Uzak Depo Bağlantısı ve Push**
> ```bash
> git branch -M main
> git remote add origin https://github.com/caner-mercan/lokmadefteri.git
> git push -u origin main
> # Ana dal main yapıldı, GitHub
> # uzak sunucu adresi bağlandı ve
> # tüm kodlar yüklendi.
> ```

---

## 🌐 BÖLÜM 4: Canlı Yayın Adresi (GitHub Pages)

Projenin internet ortamındaki dağıtımı GitHub Pages altyapısı
üzerinden gerçekleştirilmiştir. GitHub deposundaki `main` dalı
(branch) ile Pages servisi arasında otomatik dağıtım bağlantısı kurulmuştur.
`main` dalına atılan her `git push` komutu, projenin en güncel halini
sıfır kesintiyle canlıya alır.

> 🚀 **Canlı Önizleme Adresi (GitHub Pages)**
> 👉 [LokmaDefteri Canlı Site](https://soykangulelcin.github.io/lokmadefteri/)

---

## 🔌 BÖLÜM 5: TheMealDB REST API Entegrasyonu

Kullanıcı deneyimini zenginleştirmek ve projeye gerçek zamanlı
veri akışı kazandırmak amacıyla harici bir REST API entegrasyonu
gerçekleştirilmiştir:

* **API Kaynağı:** [TheMealDB](https://www.themealdb.com/) — Ücretsiz, kayıtsız, açık kaynaklı yemek veritabanı
* **Kullanılan Endpoint:**
  ```
  GET https://www.themealdb.com/api/json/v1/1/random.php
  ```
* **Asenkron Veri Çekme Mimarisi:** JavaScript'in modern `fetch()` fonksiyonu
  ve `async/await` sözdizimi kullanılarak HTTP GET isteği gönderilmiş,
  dönen JSON verisi parse edilerek DOM'a dinamik olarak enjekte edilmiştir.
* **Çekilen Veri Alanları:** Yemek adı (`strMeal`), görsel URL'i (`strMealThumb`),
  menşei ülke (`strArea`), kategori (`strCategory`), 20'ye kadar malzeme
  (`strIngredient1`...`strIngredient20`) ve YouTube video bağlantısı (`strYoutube`)
* **Hata Yönetimi:** API isteği başarısız olduğunda kullanıcıya
  bilgilendirme mesajı gösterilmekte; yükleme süresince dönen
  spinner animasyonu ile görsel geri bildirim sağlanmaktadır.

---

## 🌙 BÖLÜM 6: CSS Değişkenleri ile Karanlık / Aydınlık Tema Mimarisi

Kullanıcının göz konforunu ön planda tutmak ve modern web standartlarını
karşılamak amacıyla CSS Custom Properties (Özel Değişkenler) tabanlı
çift tema sistemi kurgulanmıştır:

* **`:root` Değişken Havuzu:** Aydınlık tema için tüm renk, arka plan
  ve gölge değerleri CSS değişkeni olarak tanımlanmıştır.
* **`html.dark-mode` Katmanı:** JavaScript ile `html` etiketine `.dark-mode`
  sınıfı eklendiğinde, aynı değişkenler karanlık tema renkleriyle
  ezilir (override). Bu yaklaşım sayesinde tüm tema geçişi yalnızca
  bir sınıf değişikliğiyle sağlanır.
* **`localStorage` Kalıcılığı:** Kullanıcının seçtiği tema tercihi
  `localStorage`'a yazılır. Sayfa yenilense veya tarayıcı kapatılıp
  açılsa dahi tema seçimi korunur.
* **CSS Transition:** Tüm renk ve arka plan değişimleri `transition: 0.35s ease`
  ile yumuşatılmış, ani geçişler önlenmiştir.

---

## ❤️ BÖLÜM 7: localStorage Tabanlı Favori Sistemi

Kullanıcının beğendiği tarifleri kalıcı olarak saklayabilmesi
amacıyla tarayıcı tabanlı bir veri yönetim katmanı oluşturulmuştur:

* **Veri Saklama:** Favoriye eklenen tariflerin adları JSON formatında
  `localStorage`'a yazılır. Tarayıcı oturumu kapatılıp açılsa dahi
  veriler kaybolmaz.
* **Favori Paneli:** Sağdan kayan (slide-in) bir panel ile tüm favori
  tarifler listelenir; listedeki herhangi bir tarife tıklanarak
  doğrudan modal açılır.
* **Anlık Sayaç:** Navbar'daki favori butonunda, eklenen tarif sayısını
  gösteren dinamik bir rozet (badge) bulunur; her ekleme/çıkarma işleminde
  anlık olarak güncellenir.

---

## 🗂️ BÖLÜM 8: Kategori Filtreleme ve Dünya Mutfakları Mimarisi

Tarif kartlarının kullanıcı tarafından kolayca keşfedilebilmesi
amacıyla çok katmanlı bir filtreleme sistemi tasarlanmıştır:

* **Ana Kategori Filtrelemesi:** Tatlılar, Ekmekler, Kurabiyeler,
  Çorbalar, Salatalar, Bartın Lezzetleri ve Dünya Mutfakları
  kategorileri `data-category` HTML5 özel veri niteliğiyle etiketlenmiştir.
  JavaScript, bu niteliği okuyarak ilgisiz kartları `display: none`
  ile gizler.
* **Dünya Mutfakları İkinci Katman:** Dünya Mutfakları seçildiğinde
  ülke kartları görünür. Bir ülkeye tıklandığında o ülkenin yemekleri
  filtrelenir; üst navigasyon çubuğundaki "Geri Dön" butonu ile ülke
  seçim ekranına dönülebilir. Desteklenen ülkeler: 🇹🇷 Türkiye,
  🇮🇹 İtalya, 🇫🇷 Fransa, 🇯🇵 Japonya, 🇲🇽 Meksika, 🇪🇸 İspanya

---

## 🎨 BÖLÜM 9: Animasyon ve Geçiş Efektleri

Kullanıcının arayüzle kurduğu etkileşimin kalitesini artırmak
amacıyla CSS3 animasyon ve geçiş teknikleri uygulanmıştır:

* **`fadeIn` Keyframe Animasyonu:** Kategori filtrelemesi ve dünya
  mutfakları geçişlerinde elemanlar dikey eksende `translateY(10px)`
  konumundan yumuşakça yerleşir.
* **Kart Hover Efekti:** Tarif kartları üzerine gelindiğinde
  `translateY(-5px)` dönüşümü ile hafif yükselme hissi verilir.
* **Favori Paneli Giriş Animasyonu:** Panel sağdan `translateX(100%)`
  konumundan `translateX(0)` konumuna 0.25 saniyelik animasyonla girer.
* **Modal Overlay:** Tarif detay penceresi açıldığında arka plan
  `rgba(0,0,0,0.7)` yarı saydam katmanla örtülür, kaydırma kilitlenir.

---

## 📱 BÖLÜM 10: Çoklu Ekran Adaptasyonu (Responsive Tasarım)

Platformun tüm cihaz jenerasyonlarında (Mobil, Tablet, Masaüstü)
görsel bir kırılma yaşamadan çalışması esnek yerleşim algoritmaları
ile garanti altına alınmıştır:

* **CSS Grid Sistemi:** Tarif kartları `grid-template-columns: repeat(3, 300px)`
  ile masaüstünde 3 sütun halinde dizilir.
* **Medya Sorguları:** `max-width: 768px` kırılma noktasında grid 2 sütuna,
  navbar butonları alt satıra, modal genişliği %95'e adapte olur.
  `max-width: 480px` kırılma noktasında kart görselleri ve yazı boyutları
  küçük ekran için yeniden ölçeklenir.

---

## 📂 BÖLÜM 11: Detaylı Klasör ve Proje Dosya Yapısı

Proje dizini, tarayıcıların ve bulut sunucuların hiyerarşik
olarak dosyaları kayıpsız okuyabilmesi için kök dizinde
şu yapıda organize edilmiştir:

```
lokmadefteri/
├── index.html         → Ana sayfa; tüm HTML yapısı ve kart tanımları
├── style.css          → Tipografi, renk teorisi, animasyon ve layout yönetimi
├── script.js          → Tüm tarif verileri, API entegrasyonu ve JS fonksiyonları
├── README.md          → Proje dökümentasyonu (bu dosya)
└── images/
    ├── cheesecake.jpg
    ├── brownie.jpg
    ├── tiramisu.jpg
    └── ...            → Tüm tarif görselleri
```

---

## 💻 BÖLÜM 12: Yerel Geliştirme Ortamı

Projenin yerel bilgisayarda sorunsuz test edilebilmesi için
iki temel yaklaşım benimsenmiştir:

> 📄 **Doğrudan Tarayıcı ile Açma**
> Proje saf HTML5/CSS3/JS mimarisiyle kurulduğu için
> `index.html` dosyasına çift tıklanarak herhangi bir
> modern tarayıcıda doğrudan çalıştırılabilir.

> 🔌 **Yerel HTTP Sunucusu (VS Code Live Server)**
> Geliştirme ortamında Visual Studio Code editörü ve
> Live Server eklentisi (Ritwick Dey) kullanılmıştır.
> Bu mekanizma `http://127.0.0.1:5500` adresinde yerel
> bir ağ soketi açar ve her dosya kaydetme işleminde
> tarayıcıya otomatik yenileme (Hot-Reload) sinyali gönderir.

---

*💛 Bartın'dan sevgilerle yapıldı.*
