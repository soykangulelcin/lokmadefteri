const recipes = {
    // TATLILAR
    "Cheesecake": {
        ingredients: ["700g tam yağlı labne peyniri (oda sıcaklığında)", "400ml sıvı krema (%35 yağlı)", "200g toz şeker", "4 adet büyük boy yumurta", "1 yemek kaşığı un", "1 paket vanilin", "Bir tutam tuz"],
        steps: `1. Fırını 220°C (alt-üst ayar) ısıtarak başlayın. Kelepçeli kalıbın içine ıslatılıp sıkılmış yağlı kağıdı kenarları dışarı taşacak şekilde yerleştirin.\n2. Geniş bir kapta labne ve şekeri düşük hızda sadece şeker eriyene kadar karıştırın. Fazla çırpıp hava kabarcığı oluşturmamaya özen gösterin.\n3. Yumurtaları tek tek karışıma ekleyin, her yumurtadan sonra kısa süre çırpın.\n4. Kremayı ekleyip homojen bir kıvam alana kadar spatulayla karıştırın.\n5. Unu eleyerek ekleyin ve son kez nazikçe karıştırıp kalıba dökün.\n6. Üzeri iyice yanık rengi alana kadar (yaklaşık 25-28 dakika) pişirin. Orta kısmı hafif sallanıyor olmalı.`,
        tips: "Kullanacağınız tüm malzemelerin oda sıcaklığında olması pürüzsüz bir kıvam için şarttır. Pastayı fırından çıkardıktan sonra oda sıcaklığında soğutun ve mutlaka bir gece buzdolabında dinlendirin."
    },
    "Brownie": {
        ingredients: ["200g kaliteli bitter çikolata (en az %54 kakao)", "150g tuzsuz tereyağı", "160g toz şeker", "3 adet yumurta", "100g un", "30g kakao", "Yarım çay kaşığı deniz tuzu"],
        steps: `1. Tereyağı ve parçalanmış çikolataları benmari usulü veya mikrodalgada yakmadan eritin. Kenara alıp ılımaya bırakın.\n2. Yumurta ve şekeri derin bir kapta 3-4 dakika boyunca rengi açılana kadar çırpın.\n3. Ilımış çikolata karışımını yumurtalı karışıma yavaşça ekleyin.\n4. Kuru malzemeleri (un, kakao, tuz) eleyerek ekleyin ve spatula ile alttan üste doğru nazikçe yedirin.\n5. 180°C fırında yaklaşık 20-22 dakika pişirin.`,
        tips: "Brownie'nin piştiğini anlamak için kürdan testi yapın; kürdan tamamen kuru çıkmamalı, hafif nemli kırıntılar olmalı. Islak doku için fırında fazla tutmayın!"
    },
    "Tiramisu": {
        ingredients: ["1 paket kedi dili bisküvi", "2 su bardağı sert filtre kahve", "400g mascarpone veya labne", "200ml soğuk sıvı krema", "4 yemek kaşığı pudra şekeri", "Üzeri için bol kakao"],
        steps: `1. Kahveyi hazırlayın ve içine bir tatlı kaşığı şeker ekleyip soğumaya bırakın.\n2. Soğuk kremayı pudra şekeri ile birlikte sertleşene kadar çırpın.\n3. Ayrı bir kapta labneyi karıştırın ve çırpılmış kremaya spatula ile söndürmeden ekleyin.\n4. Kedi dillerini kahveye hızlıca batırıp çıkarın (çok bekletirseniz hamur olur) ve kaba dizin.\n5. Üzerine kremanın yarısını yayın, bir kat daha bisküvi dizip kalan kremayı ekleyin.`,
        tips: "Tiramisu bekledikçe güzelleşir. Servis yapmadan hemen önce kakao elerseniz, kakaonun nemlenip kararmasını önlemiş olursunuz."
    },
    "Sütlaç": {
        ingredients: ["1 litre tam yağlı süt", "1 çay bardağı pirinç", "2 su bardağı su (pirinci haşlamak için)", "1 su bardağı toz şeker", "1 yemek kaşığı buğday nişastası", "1 yumurta sarısı (üzerinin kızarması için)"],
        steps: `1. Pirinci yıkayıp su ile tamamen yumuşayıp suyunu çekene kadar haşlayın.\n2. Sütü ve şekeri ekleyip kaynamaya bırakın.\n3. Nişastayı az miktarda sütle açın, içine yumurta sarısını ekleyip çırpın. Bu karışımı tencereye yavaşça dökün.\n4. 5-10 dakika daha kısık ateşte pişirip kaselere paylaştırın.\n5. Kaseleri içinde su olan fırın tepsisine dizin ve sadece üst ızgarayı açarak 200°C'de kızartın.`,
        tips: "Fırın tepsisine koyduğunuz su, sütlacın fırında kurumasını engeller ve alt kısmının pişmeye devam etmesini durdurur."
    },
    "Magnolia": {
        ingredients: ["1 litre süt", "1 su bardağı şeker", "2 yemek kaşığı nişasta", "1 yemek kaşığı un", "2 adet yumurta sarısı", "1 paket vanilin", "200ml sıvı krema", "Bebe bisküvisi ve taze çilek"],
        steps: `1. Tencereye süt, şeker, un, nişasta ve yumurta sarılarını alın. Sürekli karıştırarak koyulaşana kadar pişirin.\n2. Ocaktan aldıktan sonra vanilini ekleyin ve soğumaya bırakın.\n3. Muhallebi tamamen soğuyunca içine soğuk sıvı kremayı ekleyin ve mikserle 3-4 dakika çırpın.\n4. Bisküvileri rondodan geçirin. Kapların altına bisküvi, kenarlarına çilek dilimleri, orta kısma muhallebi şeklinde katlar oluşturun.`,
        tips: "Muhallebiye kremayı eklemeden önce muhallebinin tamamen soğuk olduğundan emin olun; aksi halde krema söner."
    },
    "Profiterol": {
        ingredients: ["125g tereyağı", "1 su bardağı su", "1 su bardağı un", "3-4 adet yumurta", "Kreması için: 500ml süt, 2 kaşık un, 1 kaşık nişasta, 1 yumurta", "Üzerine: Çikolata sosu"],
        steps: `1. Su ve tereyağını kaynatın. Unu birden ekleyip helva gibi toparlanana kadar 2-3 dakika karıştırarak pişirin. Hamuru soğumaya bırakın.\n2. Hamur soğuyunca yumurtaları teker teker ekleyerek mikserle yedirin.\n3. Sıkma torbasıyla tepsiye küçük toplar dizin. 180°C fırında 40 dakika pişirin.\n4. İç kremayı pişirip soğutun. Pişen hamurların içine doldurup üzerine çikolata sosu dökün.`,
        tips: "En kritik nokta: Hamurlar pişerken fırın kapağını asla açmayın! Aksi halde sönerler."
    },

    // EKMEKLER
    "Ekşi Mayalı Ekmek": {
        ingredients: ["400g ekmeklik un", "280ml oda sıcaklığında su", "80g aktif ekşi maya", "9g tuz"],
        steps: `1. Un ve suyu karıştırıp 1 saat otoliz yapın.\n2. Aktif ekşi mayayı ekleyip yoğurun, 30 dk sonra tuzu ekleyin.\n3. 3 saat boyunca her 45 dakikada bir zarf katlama yapın.\n4. Tezgaha alıp şekil verin ve sepete koyup buzdolabında 12-16 saat soğuk fermantasyon uygulayın.\n5. Döküm tencerede 230°C'de kapağı kapalı 20 dk, kapağı açık 20 dk pişirin.`,
        tips: "Döküm tencereyi fırınla birlikte en az 45 dakika boyunca maksimum ısıda önceden ısıtın."
    },
    "Foccacia": {
        ingredients: ["500g ekmeklik un", "400ml ılık su", "7g kuru maya", "1 tatlı kaşığı bal", "1 çay bardağı zeytinyağı", "Taze biberiye, siyah zeytin, çeri domates", "Deniz tuzu"],
        steps: `1. Su, maya ve balı karıştırıp 5 dk bekletin. Un ve tuzu ekleyip cıvık bir hamur yoğurun.\n2. Hamuru bol zeytinyağlı kaba alıp buzdolabında geceden mayalandırın.\n3. Tepsiye yayıp parmaklarınızla derin çukurlar açın, zeytin, domates ve biberiye serpin.\n4. 220°C fırında altın sarısı olana kadar 20-25 dakika pişirin.`,
        tips: "Parmak bastırma aşamasında ellerinizi bolca zeytinyağı ile ıslatın."
    },
    "Ciabatta": {
        ingredients: ["500g un", "400ml soğuk su", "4g kuru maya", "12g tuz", "20ml zeytinyağı"],
        steps: `1. Un, maya ve suyun çoğunu karıştırın. Tuzu ve kalan suyu katlama tekniğiyle yoğurun.\n2. Hamuru her 30 dakikada bir, 4 kez katlayarak gözenekleri oluşturun.\n3. Tezgahı unlayıp hamuru hiç söndürmeden dikdörtgen porsiyonlara kesin.\n4. 230°C'de fırına ilk esnada buhar vererek 20 dakika pişirin.`,
        tips: "İçindeki devasa gözenekleri yakalamak için şekil verirken içindeki gazı kaçırmamalısınız."
    },
    "Hamburger Ekmeği": {
        ingredients: ["500g un", "1 su bardağı ılık süt", "Yarım çay bardağı su", "1 paket kuru maya", "1 yemek kaşığı şeker", "1 tatlı kaşığı tuz", "50g yumuşak tereyağı", "1 yumurta"],
        steps: `1. Maya, şeker, süt ve suyu karıştırın. Un, yumurta ve tuzu ekleyip yoğurun.\n2. Tereyağını parça parça yedirerek pürüzsüz olana kadar yoğurun. 1 saat mayalayın.\n3. Bezeler yapıp tepsiye dizin, 30 dk tepsi mayasından sonra su sürüp susam serpin.\n4. 190°C fırında 15-18 dakika pişirin.`,
        tips: "Tereyağını hamura glüten bağını oluşturduktan sonra (yoğurmanın ortasında) ekleyin."
    },
    "Sandviç Ekmeği": {
        ingredients: ["500g un", "250ml ılık su", "50ml zeytinyağı", "1 paket instant maya", "1 tatlı kaşığı şeker", "1.5 tatlı kaşığı tuz"],
        steps: `1. Tüm malzemeleri derin bir kapta birleştirip pürüzsüz bir hamur elde edene kadar yoğurun.\n2. 45 dakika oda sıcaklığında mayalandırın.\n3. Hamuru parçalara ayırıp rulo yaparak uzun sandviç şekli verin.\n4. Tepside 25 dakika daha mayalandırdıktan sonra 200°C fırında 15-20 dakika pişirin.`,
        tips: "Fırından çıktıktan hemen sonra ekmeklerin üzerine nemli bir bez kapatırsanız kabukları yumuşacık kalır."
    },
    "Baget Ekmek": {
        ingredients: ["500g un", "350ml soğuk su", "5g kuru maya", "10g tuz"],
        steps: `1. Malzemeleri yoğurup sert bir hamur yapın, 2 saat mayalandırın.\n2. Hamuru 3 parçaya bölün, uzun rulo yapıp uçlarını sivriltin.\n3. Bez arasında 45 dk son mayalanmaya bırakıp jiletle kesikler atın.\n4. 240°C fırında, tabana kaynar su dökerek buhar eşliğinde 25 dakika pişirin.`,
        tips: "Çıtır baget kabuğunun sırrı fırın içine verilen yoğun buhardır."
    },
    "Pita Ekmeği": {
        ingredients: ["360g un", "240ml ılık su", "1 paket instant maya", "1 tatlı kaşığı şeker", "1 tatlı kaşığı tuz", "1 yemek kaşığı zeytinyağı"],
        steps: `1. Hamuru yoğurup 1 saat mayalayın.\n2. 8 bezeye bölüp merdaneyle tabak büyüklüğünde yarım cm kalınlığında açın.\n3. Önceden 250°C'ye ısıtılmış fırın tepsisine hamurları dizin.\n4. 4-5 dakika içinde balon gibi şişecektir, kızarmasını beklemeden alın.`,
        tips: "İçinin boş kalıp cep oluşturması için fırın tepsisinin çok sıcak olması gerekir."
    },
    "Bazlama": {
        ingredients: ["5 su bardağı un", "2 su bardağı ılık su", "1 çay bardağı süt", "1 paket kuru maya", "1 yemek kaşığı şeker", "1 tatlı kaşığı tuz"],
        steps: `1. Cıvık ve yumuşak bir hamur yoğurup 50 dk mayalandırın.\n2. Bezeleri unlu tezgahta elinizle kalınca açın.\n3. Isınmış tavaya koyun ve üzerinde küçük kabarcıklar çıktığı an hemen çevirin. Sık sık çevirerek şişirin.`,
        tips: "Bazlamanın yumuşak kalması için tavada 15-20 saniyede bir arkalı önlü çevirin."
    },
    "Çiçek Ekmek": {
        ingredients: ["500g un", "1.5 su bardağı su", "1 paket instant maya", "1 yemek kaşığı şeker", "1 tatlı kaşığı tuz", "3 yemek kaşığı sıvı yağ"],
        steps: `1. Hamuru yoğurup 45 dakika mayalayın.\n2. 7-8 bezeye ayırıp yuvarlak tepsinin ortasından başlayarak çiçek şeklinde dizin.\n3. Tepside 30 dakika mayalandırıp yumurta sarısı sürün ve susam serpin.\n4. 190°C fırında 25-30 dakika pişirin.`,
        tips: "Tepsi mayası verirken bezelerin kabarma payını düşünerek aralarında azıcık boşluk bırakın."
    },
    "Mısır Ekmeği": {
        ingredients: ["500g ince mısır unu", "1 su bardağı beyaz un", "1 paket kabartma tozu", "1 tatlı kaşığı tuz", "1 yemek kaşığı şeker", "Yarım su bardağı sıvı yağ", "2 su bardağı kaynar su"],
        steps: `1. Kuru malzemeleri harmanlayın, yağ ve kaynar suyu yavaşça ekleyerek kaşıkla karıştırın.\n2. Yağlanmış tepsiye hamuru yayıp üzerini düzeltin ve dilimleyin.\n3. 190°C fırında üzeri çatlayana kadar 40-45 dakika pişirin.`,
        tips: "Mısır ununu kaynar suyla ıslatmak mısırın acılığını alır ve dağılmasını önler."
    },
    "Fougasse": {
        ingredients: ["500g un", "320ml su", "7g kuru maya", "10g tuz", "30ml zeytinyağı", "50g doğranmış siyah zeytin"],
        steps: `1. Hamuru yoğurup zeytinleri ekleyin, 1 saat mayalayın.\n2. Hamuru oval yaprak şeklinde açıp bıçakla yaprak damarı gibi kesikler açıp delikleri genişletin.\n3. Tepside 15 dk dinlendirip zeytinyağı sürün, 220°C fırında 15-18 dakika pişirin.`,
        tips: "Fırından çıkar çıkmaz üzerine fırça ile tekrar zeytinyağı sürün."
    },
    "Shokupan": {
        ingredients: ["Tangzhong: 20g un + 100ml su", "Ana Hamur: 350g un, 1 paket maya, 30g şeker, 5g tuz, 1 yumurta, 110ml süt, 30g tereyağı"],
        steps: `1. Tangzhong malzemelerini tavada muhallebi gibi pişirip soğutun.\n2. Tereyağı hariç tüm malzemeyi Tangzhong ile yoğurun, sonra yağı ekleyip 10 dk daha yoğurun.\n3. 3 parçaya bölüp rulo yapın ve baton kalıba dizin. Kalıbı doldurana kadar mayalandırıp 180°C fırında 30 dk pişirin.`,
        tips: "Tangzhong tekniği unun içindeki nemi hapseder ve ekmeğin günlerce pamuk gibi kalmasını sağlar."
    },

    // COOKIES
    "Chocolate Chip Cookie": {
        ingredients: ["150g tereyağı", "100g esmer şeker", "50g beyaz şeker", "1 adet yumurta", "220g un", "1 tatlı kaşığı nişasta", "1 paket vanilin", "Yarım çay kaşığı karbonat", "150g parça çikolata"],
        steps: `1. Tereyağı ve şekerleri krema kıvamına gelene kadar çırpın.\n2. Yumurtayı ekleyin, kuru malzemeleri eleyerek katın.\n3. Çikolataları ekleyip buzdolabında 30 dakika dinlendirin.\n4. 180°C fırında 10-12 dakika pişirin.`,
        tips: "Kurabiyeleri fırından çıkar çıkmaz ellemeyin, tepside 5 dakika soğumasını bekleyin."
    },
    "Levain Cookie": {
        ingredients: ["230g soğuk tereyağı", "150g esmer şeker", "100g toz şeker", "2 adet yumurta", "350g un", "1 tatlı kaşığı nişasta", "Yarım çay kaşığı karbonat", "200g cevis", "250g parça çikolata"],
        steps: `1. Soğuk tereyağı ve şekerleri düşük hızda karıştırın. Yumurtaları ekleyin.\n2. Kuru malzemeleri, çikolata ve cevizleri ekleyip sadece karışana kadar yoğurun.\n3. Devasa toplar yapıp dondurucuda 1 saat bekletin ve 210°C fırında 12-15 dakika pişirin.`,
        tips: "Levain tarzı kurabiyelerin sırrı tereyağının soğuk olması ve yüksek ısıda kısa süre pişmesidir."
    },
    "Red Velvet Cookie": {
        ingredients: ["115g tereyağı", "150g şeker", "1 adet yumurta", "1 tatlı kaşığı kırmızı gıda boyası", "160g un", "20g kakao", "100g beyaz çikolata"],
        steps: `1. Malzemeleri çırpıp kırmızı gıda boyasını ekleyin. Hamuru yoğurup beyaz çikolataları ekleyin.\n2. Buzdolabında soğuttuktan sonra 180°C fırında 10-11 dakika pişirin.`,
        tips: "Beyaz çikolataların kararmaması için kurabiye toplarının üzerine ekstra çikolata saplayabilirsiniz."
    },
    "Lemon Cookie": {
        ingredients: ["100g tereyağı", "120g şeker", "1 adet yumurta", "1 limonun kabuğu ve suyu", "250g un", "1 çay kaşığı kabartma tozu", "Pudra şeker"],
        steps: `1. Tereyağı, şeker ve limon kabuğunu çırpıp yumurta ile limon suyunu ekleyin.\n2. Unla hamur yapıp yuvarlayın, önce şekere sonra bolca pudra şekerine bulayıp 170°C'de 12 dakika pişirin.`,
        tips: "Çatlak görünümün kaybolmaması için pudra şekerine buladıktan sonra bekletmeden pişirin."
    },
    "Van Stapele Cookie": {
        ingredients: ["115g tereyağı", "130g esmer şeker", "1 adet yumurta", "150g un", "40g kakao", "Yarım çay kaşığı karbonat", "Beyaz çikolata blokları"],
        steps: `1. Kakaolu kurabiye hamurunu hazırlayın.\n2. Hamurdan bezeler alıp ortasına büyük bir parça beyaz çikolata koyup kapatın ve 180°C'de 10 dakika pişirin.`,
        tips: "Sıcakken servis edildiğinde ortasındaki beyaz çikolata akışkan olacaktır."
    },
    "Lemon Blueberry Cheesecake Cookie": {
        ingredients: ["115g tereyağı", "100g şeker", "1 limon kabuğu", "1 yumurta", "200g un", "50g taze yaban mersini", "100g labne, 2 kaşık pudra şekeri"],
        steps: `1. Labne ve pudra şekerini dondurucuda küçük porsiyonlar halinde dondurun.\n2. Hamuru limon kabuğuyla hazırlayın, ortasına donmuş dolguyu koyup kapatın ve 180°C'de 12-14 dakika pişirin.`,
        tips: "Yaban mersinlerinin hamuru boyamaması için en son aşamada çok hafifçe karışıma ekleyin."
    },
    "Strawberry Cheesecake Cookies": {
        ingredients: ["115g tereyağı", "100g şeker", "1 yumurta", "200g un", "50g taze çilek", "50g bebe bisküvisi", "Donmuş labne dolgusu"],
        steps: `1. Hamura unla beraber bisküvi kırıntılarını ve çilek parçalarını ekleyin.\n2. Ortasına donmuş şekerli labne dolgusu koyup kapatın ve 180°C fırında 12 dakika pişirin.`,
        tips: "Çilekleri doğradıktan sonra kağıt havlu üzerinde iyice kurutup hamura ekleyin."
    },
    "Linzer Cookie": {
        ingredients: ["150g tereyağı", "80g pudra şekeri", "1 yumurta sarısı", "200g un", "50g toz badem", "1 çay kaşığı tarçın", "Marmelat"],
        steps: `1. Hamuru yoğurup açın, yuvarlak kesin. Yarısının ortasını küçük kalp kalıbıyla boşaltın.\n2. 175°C fırında 10 dakika pişirin.\n3. Alt tabanlara marmelat sürüp üst tabanları birleştirin.`,
        tips: "Kurabiyeleri birleştirmeden önce üst kapaklara pudra şekeri elerseniz marmelat temiz kalır."
    },
    "Cookies and Cream Cookies": {
        ingredients: ["115g tereyağı", "120g esmer şeker", "1 yumurta", "180g un", "Yarım paket kırılmış Oreo", "80g beyaz çikolata"],
        steps: `1. Kurabiye hamurunun içine elinizle böldüğünüz bisküvileri ve beyaz çikolataları ekleyin.\n2. Kaşıkla tepsiye dizip 180°C fırında 10-12 dakika pişirin.`,
        tips: "Fırına vermeden önce üzerlerine de birer parça bisküvi bastırabilirsiniz."
    },

    // ÇORBALAR
    "Kelle Paça Çorbası": {
        ingredients: ["1 kg kelle ve paça", "2 yemek kaşığı un", "2 yemek kaşığı tereyağı", "4 diş sarımsak", "3 yemek kaşığı sirke", "Tuz, karabiber, pul biber", "Su"],
        steps: `1. Kelle ve paçayı iyice temizleyip bol suda yumuşayana kadar haşlayın.\n2. Etleri kemiklerinden ayırıp küçük parçalara bölün.\n3. Tereyağında unu kokusu çıkana kadar kavurun, haşlama suyunu yavaş yavaş ekleyin.\n4. Etleri ekleyip kıvam alana kadar kaynatın. Sarımsak, sirke ve baharatla servis edin.`,
        tips: "Haşlama suyunu süzerek kullanırsanız çorbanın kıvamı daha pürüzsüz olur."
    },
    "Mercimek Çorbası": {
        ingredients: ["1 su bardağı kırmızı mercimek", "1 adet soğan", "1 adet havuç", "1 yemek kaşığı un", "2 yemek kaşığı tereyağı", "6 su bardağı su veya et suyu", "Tuz, karabiber, pul biber"],
        steps: `1. Soğanı ve havucu doğrayıp tereyağında kavurun.\n2. Unu ekleyip kısa süre karıştırın.\n3. Mercimeği ve suyu ekleyip mercimekler dağılana kadar pişirin.\n4. Blenderdan geçirip baharatlarını ekleyin.`,
        tips: "Servis ederken limon suyu eklerseniz çorbanın lezzeti daha canlı olur."
    },
    "Tarhana Çorbası": {
        ingredients: ["4 yemek kaşığı tarhana", "1 yemek kaşığı salça", "2 yemek kaşığı tereyağı", "5 su bardağı su", "1 diş sarımsak", "Tuz, nane, pul biber"],
        steps: `1. Tarhanayı 1 su bardağı soğuk suyla açın.\n2. Tereyağında salça ve sarımsağı kavurun.\n3. Kalan suyu ve açılmış tarhanayı ekleyin.\n4. Kaynayana kadar sürekli karıştırın, kıvam alınca baharatları ekleyin.`,
        tips: "Tarhanayı soğuk suyla açmak topaklanmasını önler."
    },
    "Yayla Çorbası": {
        ingredients: ["1 çay bardağı pirinç", "1 su bardağı yoğurt", "1 yemek kaşığı un", "1 yumurta sarısı", "6 su bardağı su", "2 yemek kaşığı tereyağı", "Nane, tuz"],
        steps: `1. Pirinci suyla yumuşayana kadar haşlayın.\n2. Yoğurt, un ve yumurta sarısını ayrı kapta çırpın.\n3. Sıcak sudan azar azar ekleyerek terbiyeyi ılıtın.\n4. Terbiyeyi tencereye ekleyip karıştırarak pişirin. Üzerine naneli tereyağı gezdirin.`,
        tips: "Yoğurdun kesilmemesi için terbiyeyi tencereye eklerken çorbayı sürekli karıştırın."
    },
    "Ezogelin Çorbası": {
        ingredients: ["1 su bardağı kırmızı mercimek", "2 yemek kaşığı pirinç", "2 yemek kaşığı bulgur", "1 adet soğan", "1 yemek kaşığı salça", "2 yemek kaşığı tereyağı", "Nane, pul biber, tuz"],
        steps: `1. Soğanı tereyağında kavurup salçayı ekleyin.\n2. Mercimek, pirinç ve bulguru yıkayıp tencereye alın.\n3. Su ekleyip tüm bakliyatlar yumuşayana kadar pişirin.\n4. Baharatları ekleyip birkaç dakika daha kaynatın.`,
        tips: "Biraz kuru nane ve limonla servis etmek çorbanın klasik lezzetini tamamlar."
    },
    "Domates Çorbası": {
        ingredients: ["5 adet domates veya 2 su bardağı domates püresi", "1 yemek kaşığı un", "2 yemek kaşığı tereyağı", "4 su bardağı su veya tavuk suyu", "Yarım su bardağı süt", "Tuz, karabiber", "Rendelenmiş kaşar"],
        steps: `1. Tereyağında unu hafifçe kavurun.\n2. Domates püresini ekleyip birkaç dakika pişirin.\n3. Suyu ekleyip kaynatın, ardından blenderdan geçirin.\n4. Sütü ekleyip kısa süre daha pişirin. Kaşarla servis edin.`,
        tips: "Domatesin ekşiliğini dengelemek için çok küçük bir tutam şeker ekleyebilirsiniz."
    },
    "Kremalı Mantar Çorbası": {
        ingredients: ["400g mantar", "1 adet soğan", "2 yemek kaşığı un", "2 yemek kaşığı tereyağı", "4 su bardağı su veya tavuk suyu", "1 paket krema", "Tuz, karabiber"],
        steps: `1. Soğanı ve mantarı tereyağında suyunu salıp çekene kadar soteleyin.\n2. Unu ekleyip kokusu çıkana kadar kavurun.\n3. Suyu ekleyip karıştırarak kaynatın.\n4. Kremayı ekleyip kısık ateşte birkaç dakika pişirin.`,
        tips: "Mantarları yüksek ateşte sotelerseniz kararmadan daha yoğun lezzet verir."
    },
    "Tavuk Suyu Çorbası": {
        ingredients: ["1 adet tavuk göğsü veya but", "1 çay bardağı tel şehriye", "1 yemek kaşığı un", "1 yemek kaşığı tereyağı", "5 su bardağı tavuk suyu", "Tuz, karabiber, limon"],
        steps: `1. Tavuğu haşlayıp suyunu ayırın ve etini didikleyin.\n2. Tereyağında unu hafifçe kavurun.\n3. Tavuk suyunu ekleyip karıştırın.\n4. Şehriyeyi ve didiklenmiş tavuğu ekleyip şehriyeler yumuşayana kadar pişirin.`,
        tips: "Servis ederken limon ve karabiber eklemek çorbayı daha ferah yapar."
    },
    "Balık Çorbası": {
        ingredients: ["500g beyaz etli balık", "1 adet havuç", "1 adet patates", "1 adet soğan", "1 yemek kaşığı un", "2 yemek kaşığı zeytinyağı", "Limon suyu, tuz, karabiber"],
        steps: `1. Balığı soğanla birlikte haşlayıp suyunu süzün.\n2. Balığı kılçıklarından ayırıp parçalara bölün.\n3. Havuç ve patatesi küçük doğrayıp balık suyunda yumuşatın.\n4. Unu zeytinyağında kavurup çorbaya ekleyin, balıkları ilave edip kısa süre kaynatın.`,
        tips: "Kılçık kalmaması için balığı çorbaya eklemeden önce dikkatlice ayıklayın."
    },

    // SALATALAR
    "Gavurdağı Salatası": {
        ingredients: ["3 adet domates", "2 adet salatalık", "1 adet kırmızı soğan", "1 su bardağı ceviz", "Maydanoz", "Nar ekşisi", "Zeytinyağı, tuz, sumak"],
        steps: `1. Domates, salatalık ve soğanı küçük küçük doğrayın.\n2. Maydanozu ince kıyın, cevizi iri parçalar halinde ekleyin.\n3. Nar ekşisi, zeytinyağı, tuz ve sumakla sos hazırlayın.\n4. Tüm malzemeleri karıştırıp bekletmeden servis edin.`,
        tips: "Cevizi servis öncesi eklerseniz kıtırlığını korur."
    },
    "Sezar Salata": {
        ingredients: ["1 adet marul", "1 adet tavuk göğsü", "Kıtır ekmek", "Parmesan veya eski kaşar", "3 yemek kaşığı yoğurt", "1 yemek kaşığı mayonez", "Sarımsak, limon suyu, tuz"],
        steps: `1. Tavuğu baharatlayıp tavada pişirin ve dilimleyin.\n2. Marulu iri parçalar halinde doğrayın.\n3. Yoğurt, mayonez, sarımsak ve limonla sos hazırlayın.\n4. Marul, tavuk, kıtır ekmek ve peyniri sosla birleştirin.`,
        tips: "Marulu yıkadıktan sonra iyice kurutursanız sos salatayı sulandırmaz."
    },
    "Patates Salatası": {
        ingredients: ["5 adet patates", "4 dal taze soğan", "Maydanoz", "Dereotu", "Zeytinyağı", "Limon suyu", "Tuz, pul biber, karabiber"],
        steps: `1. Patatesleri haşlayıp küp küp doğrayın.\n2. Yeşillikleri ince kıyın.\n3. Zeytinyağı, limon ve baharatlarla sos hazırlayın.\n4. Tüm malzemeleri nazikçe karıştırın.`,
        tips: "Patatesleri sıcakken soslarsanız lezzeti daha iyi içine çeker."
    },
    "Kısır": {
        ingredients: ["2 su bardağı ince bulgur", "1,5 su bardağı sıcak su", "1 yemek kaşığı domates salçası", "1 yemek kaşığı biber salçası", "Taze soğan, maydanoz, marul", "Nar ekşisi, limon, zeytinyağı", "Tuz, pul biber, kimyon"],
        steps: `1. Bulguru sıcak suyla ıslatıp kapağını kapatarak şişmeye bırakın.\n2. Salçaları ve baharatları ekleyip yoğurun.\n3. Yeşillikleri ince kıyıp karışıma ekleyin.\n4. Nar ekşisi, limon ve zeytinyağıyla lezzetlendirin.`,
        tips: "Yeşillikleri bulgur tamamen soğuduktan sonra ekleyin ki canlı kalsın."
    },
    "Akdeniz Salatası": {
        ingredients: ["Marul ve roka", "Çeri domates", "Salatalık", "Beyaz peynir", "Siyah zeytin", "Mısır", "Zeytinyağı, limon, tuz"],
        steps: `1. Yeşillikleri iri doğrayın.\n2. Domates, salatalık, zeytin ve mısırı ekleyin.\n3. Üzerine beyaz peynir serpiştirin.\n4. Zeytinyağı, limon ve tuzla soslayın.`,
        tips: "Peyniri en son eklerseniz salatanın görüntüsü daha temiz olur."
    },
    "Rus Salatası": {
        ingredients: ["2 adet patates", "2 adet havuç", "1 su bardağı bezelye", "5 adet kornişon turşu", "4 yemek kaşığı mayonez", "2 yemek kaşığı yoğurt", "Tuz"],
        steps: `1. Patates ve havucu küçük küpler halinde doğrayıp haşlayın.\n2. Bezelyeyi haşlayın, turşuları doğrayın.\n3. Mayonez ve yoğurdu karıştırıp sos hazırlayın.\n4. Tüm malzemeleri sosla birleştirip soğuk servis edin.`,
        tips: "Sebzeleri fazla haşlamayın; hafif diri kalırsa salatanın dokusu daha iyi olur."
    },
    "Çoban Salatası": {
        ingredients: ["3 adet domates", "2 adet salatalık", "1 adet soğan", "2 adet yeşil biber", "Maydanoz", "Zeytinyağı", "Limon suyu, tuz"],
        steps: `1. Domates, salatalık, soğan ve biberi küçük doğrayın.\n2. Maydanozu ince kıyın.\n3. Zeytinyağı, limon ve tuzla sos hazırlayın.\n4. Tüm malzemeleri karıştırıp servis edin.`,
        tips: "Soğanı sumakla ovalarsanız tadı yumuşar ve salataya güzel aroma verir."
    },
    "Semizotu Salatası": {
        ingredients: ["1 demet semizotu", "1 su bardağı yoğurt", "1 diş sarımsak", "2 yemek kaşığı zeytinyağı", "Tuz", "Ceviz veya pul biber"],
        steps: `1. Semizotunu ayıklayıp yıkayın ve kurutun.\n2. Yoğurt, sarımsak ve tuzu karıştırın.\n3. Semizotunu yoğurtlu sosla birleştirin.\n4. Üzerine zeytinyağı gezdirip cevizle servis edin.`,
        tips: "Semizotunu doğramak yerine elle ayırırsanız daha diri kalır."
    },
    "Zeytin Salatası": {
        ingredients: ["2 su bardağı yeşil zeytin", "1 adet domates", "2 dal taze soğan", "Maydanoz", "Ceviz", "Nar ekşisi", "Zeytinyağı, pul biber"],
        steps: `1. Zeytinleri dilimleyin veya çekirdeklerini çıkarın.\n2. Domates, taze soğan ve maydanozu doğrayın.\n3. Ceviz, nar ekşisi, zeytinyağı ve pul biber ekleyin.\n4. Tüm malzemeleri karıştırıp servis edin.`,
        tips: "Zeytinler çok tuzluysa salataya eklemeden önce kısa süre suda bekletebilirsiniz."
    },
    // BARTIN YÖRESEL LEZZETLERİ
    "Amasra Salatası": {
        ingredients: ["En az 20 çeşit taze mevsim yeşilliği", "1 adet kırmızı pancar turşusu", "1 adet havuç", "1 adet salatalık ve domates", "Sızma zeytinyağı, sirke, limon suyu", "Siyah zeytin ve mor soğan"],
        steps: `1. Yeşillikleri doğrayıp kaseye yayın.\n2. Havuç ve pancarı incecik rendeleyin.\n3. Yeşilliklerin üzerine rendelenmiş malzemeleri renk cümbüşü oluşturacak şekilde yerleştirip süsleyin.\n4. Servisten hemen önce sosunu dökün.`,
        tips: "Sosunu asla önceden dökmeyin, salatayı söndürür."
    },
    "Pumpum Çorbası": {
        ingredients: ["1 su bardağı mısır unu", "2 su bardağı soğuk su", "3 su bardağı et suyu", "1 su bardağı süt", "2 yemek kaşığı tereyağı", "100g kavrulmuş kıyma veya şarküteri", "Kıtır ekmek, pul biber"],
        steps: `1. Mısır ununu, soğuk suyu ve et suyunu tencerede çırpıp ocağa alın.\n2. Kaynayana kadar karıştırarak pişirin, ardından yavaşça sütü ekleyin.\n3. Kavrulmuş kıymayı ekleyip kısık ateşte 5-10 dakika daha kaynatın. Kıtır ekmekle servis edin.`,
        tips: "Mısır ununun topaklanmaması için ocağın altını yakmadan önce soğuk suyla tamamen açın."
    },
    "Tavuklu Köy Böreği": {
        ingredients: ["3 adet el açması köy yufkası", "1 bütün tavuk göğsü (haşlanmış)", "2 su bardağı tavuk suyu", "1 kuru soğan", "3 yemek kaşığı tereyağı", "Baharatlar"],
        steps: `1. Soğanı kavurup didiklenmiş tavuk etleriyle soteleyin.\n2. İlk yufkayı tepsiye serip tavuk suyuyla ıslatın, ikinci yufkayı parçalayıp serin ve iç harcı yayın.\n3. Üçüncü yufkayı kapatıp ıslatın, kalan tavuk suyunu ve erimiş tereyağını gezdirip 190°C'de pişirin.`,
        tips: "Yufkaları ıslatırken kullandığınız tavuk suyunun ılık olmasına dikkat edin."
    },
    "Kabak Burması": {
        ingredients: ["4 adet baklavalık yufka", "500g bal kabağı (rendelenmiş)", "1 su bardağı şeker", "1 su bardağı ceviz içi", "150g tereyağı", "Şerbet: 2.5 bardak şeker, 2.5 bardak su, limon"],
        steps: `1. Şerbeti kaynatıp soğumaya bırakın.\n2. Rendelenmiş bal kabağı, şeker ve cevizi harmanlayıp yufkaya serpiştirin.\n3. Oklavaya sarıp büzerek burma şekli verin, tepsiye dizip üzerine erimiş tereyağı dökerek 180°C'de pişirin. Sıcak tatlıya soğuk şerbet dökün.`,
        tips: "Tatlının hamur olmaması için fırından çıkan böreğin sıcak, şerbetin ise tamamen soğuk olması şarttır."
    },
    "Bartın Beyaz Baklavası": {
        ingredients: ["Hamur: 1 yumurta, 1 çay bardağı süt, 1 çay bardağı yağ, 1 kaşık sirke, un", "Nişasta (açmak için)", "2.5 su bardağı ceviz", "250g tereyağı", "Şerbet: 4 bardak şeker, 4 bardak su"],
        steps: `1. İncecik yufkalar açıp aralarına ceviz serpiştirerek tepsiye dizin.\n2. Dilimleyip üzerine eritilmiş saf tereyağı dökün.\n3. 150°C fırında, baklavanın rengini sarartıp karartmadan, beyaz kalacak şekilde 1.5 - 2 saat ağır ağır pişirin. Ilık baklavaya sıcak şerbet dökün.`,
        tips: "Bu baklavanın tescilli özelliği beyaz kalmasıdır, yüksek ısıda pişirmeyin."
    },
    "Döşemeli Mancar": {
        ingredients: ["2 demet mancar yaprağı (kara lahana)", "1 su bardağı bulgur", "2 kuru soğan", "Salça, yağ", "Baharatlar, kemikli et (isteğe bağlı)"],
        steps: `1. Mancar yapraklarını haşlayıp doğrayın. Soğan, salça ve bulgurla bir iç harç hazırlayın.\n2. Tencere tabanına yaprak serip üzerine harç dökün. Bir kat yaprak, bir kat harç şeklinde döşeyin.\n3. Üzerine sıcak su ekleyip kısık ateşte yapraklar lokum gibi olana kadar pişirin.`,
        tips: "Kısık ateşte, kendi buharını çok kaçırmadan ağır ağır pişirmek lezzetini ikiye katlar."
    },

    // ================= DÜNYA MUTFAKLARI TARİFLERİ =================
    // TÜRKİYE
    "İskender Kebap": {
        ingredients: ["500g ince dilimlenmiş yaprak et/döner", "1 adet pide/tırnak pide", "2 yemek kaşığı tereyağı (üzeri için)", "Sos için: 2 yemek kaşığı domates salçası, 1 kaşık tereyağı, sıcak su", "Yanınna: Süzme yoğurt, közlenmiş biber ve domates"],
        steps: `1. Pideleri küp küp doğrayıp fırında hafifçe kıtırlaştırın ve servis tabağının tabanına dizin.\n2. Sos tenceresinde tereyağını eritin, salçayı kavurup sıcak su ekleyerek akışkan bir sos elde edin. Sosun yarısını pidelerin üzerine gezdirin.\n3. Tavada yaprak etleri yüksek ateşte kurutmadan hızlıca soteleyin.\n4. Etleri pidelerin üzerine yerleştirip kalan sıcak sosu dökün. Yanına yoğurt, közlenmiş biber ekleyin. Servis anında üzerine kızgın tereyağı gezdirin.`,
        tips: "Pidelerin sosu tamamen emmesi ama hamurlaşmaması için salçalı sosun çok kaynar olması gerekir."
    },
    "Hünkar Beğendi": {
        ingredients: ["Kuşbaşı kuzu eti (500g)", "1 kuru soğan, 2 diş sarımsak", "1 yemek kaşığı salça, 2 domates", "Beğendi için: 3 büyük boy bostan patlıcanı, 1.5 yemek kaşığı un, 1.5 yemek kaşığı tereyağı, 1.5 su bardağı süt, 1 çay bardağı rendeltilmiş kaşar, muskat cevizi"],
        steps: `1. Etleri soğan, sarımsak, salça ve domatesle birlikte yumuşayana kadar kısık ateşte pişirin.\n2. Patlıcanları ocakta veya fırında közleyip kabuklarını soyun ve incecik kıyın.\n3. Beğendi için tereyağında unu kokusu çıkana kadar kavurun. Kıydığınız patlıcanları ekleyip ezerek karıştırın.\n4. Sütü yavaş yavaş ekleyerek çırpın, kıvam alınca kaşar peyniri, tuz ve azıcık muskat rendesi ekleyip ocaktan alın. Tabana beğendiyi, üzerine eti koyup servis edin.`,
        tips: "Patlıcanları ocak ateşinde közlemek o nefis füme/is kokusunu beğendiye tam olarak kazandırır."
    },
    "Mantı": {
        ingredients: ["Hamur için: 3 su bardağı un, 1 yumurta, 1 çay bardağı ılık su, tuz", "İç harç: 250g kıyma, 1 rendelenmiş soğan, karabiber, tuz", "Üzerine: Sarımsaklı yoğurt, tereyağı, pul biber, nane, sumak"],
        steps: `1. Sert bir mantı hamuru yoğurup 20 dk dinlendirin. Hamuru açıp küçük kareler halinde kesin.\n2. Kıymalı harçtan ortalarına koyup dört köşesinden bohça gibi kapatın.\n3. Kaynayan tuzlu suda mantılar üste çıkana kadar (yaklaşık 8-10 dakika) haşlayın.\n4. Süzüp tabağa alın, sarımsaklı yoğurt ve kızdırılmış baharatlı tereyağı ile servis yapın.`,
        tips: "Hamurun haşlanırken açılmaması için kapatırken kenarlarına iyice bastırın ve hamuru cıvık yapmayın."
    },
    "Karnıyarık": {
        ingredients: ["6 adet küçük boy patlıcan", "250g kıyma", "1 soğan, 2 diş sarımsak", "2 domates, 3 yeşil biber", "1 kaşık salça", "Kızartmak için sıvı yağ"],
        steps: `1. Patlıcanları alacalı soyup tuzlu suda bekletin, kurulayıp yağda bütün olarak kızartın.\n2. İç harç için soğan, sarımsak, kıyma ve biberleri kavurun. Salça ve domatesleri ekleyip iç harcı pişirin.\n3. Kızaran patlıcanları tepsiye dizip ortalarını bıçakla yarın. İçlerine kıymalı harcı doldurun.\n4. Üzerlerine biber ve domates dilimi koyup salçalı sıcak su ekleyerek 190°C fırında 20-25 dakika pişirin.`,
        tips: "Patlıcanların yağı fazla çekmemesi için kızartmadan önce tamamen kuru olduklarından emin olun."
    },
    "Çökertme Kebabı": {
        ingredients: ["400g jülyen doğranmış biftek/et", "4 adet büyük boy patates", "Sarımsaklı yoğurt", "Domates sosu, tereyağı", "Kızartmak için bol sıvı yağ"],
        steps: `1. Patatesleri kibrit çöpü inceliğinde (kibrit patates) doğrayıp nişastası gidene kadar yıkayın ve buzlu suda bekletip iyice kurulayın. Bol yağda çıtır çıtır kızartın.\n2. Etleri yüksek ateşte kendi suyuyla soteyip tereyağı ve baharat ekleyerek pişirin.\n3. Servis tabağının tabanına çıtır patatesleri dizin, üzerine sarımsaklı yoğurt gezdirin.\n4. En üste sıcak etleri yerleştirip domates sosu ve kızgın tereyağı dökerek sıcak servis edin.`,
        tips: "Patateslerin çıtırlığını kaybetmemesi için yoğurdu ve eti tam servis esnasında patatesin üzerine dökün."
    },
    "Perde Pilavı": {
        ingredients: ["Hamur: 2 yumurta, 3 kaşık yoğurt, yarım çay bardağı sıvı yağ, un, tuz", "İç pilav: 2 bardak pirinç, haşlanmış tavuk etleri, dolmalık fıstık, kuş üzümü, badem, tereyağı, yenibahar, karabiber"],
        steps: `1. Pilav tenceresinde fıstık, üzüm ve pirinci tereyağında kavurup tavuk suyuyla diri bir pilav pişirin. Didilmiş tavukları ve baharatları ekleyin.\n2. Perde pilavı kalıbını veya ısıya dayanıklı bir kabı tereyağı ile bolca yağlayıp soyulmuş bademleri tabana yapıştırın.\n3. Açtığınız hamuru kabın içine kenarları sarkacak şekilde serin. İçine ılık pilavı doldurup sarkan hamurlarla üzerini kapatın.\n4. 190°C fırında hamur tamamen kızarana kadar pişirin. Ters çevirip dilimleyerek servis edin.`,
        tips: "Pilavın fırında da pişmeye devam edeceğini hesap ederek ocaktayken suyunu biraz az verip hafif diri bırakın."
    },

    // İTALYA
    "Lasagna Alla Bolognese": {
        ingredients: ["Lasagna yaprakları", "Bolonez Sos: 400g kıyma, 1 havuç, 1 kereviz sapı, 1 soğan, 2 bardak domates püresi, zeytinyağı", "Beşamel Sos: 2 kaşık tereyağı, 2 kaşık un, 2.5 bardak süt, muskat cevizi", "Bolca parmesan ve mozzarella peyniri"],
        steps: `1. Bolonez için havuç, kereviz ve soğanı incecik kıyıp zeytinyağında kavurun, kıymayı ekleyin. Domates püresi ekleyip kısık ateşte en az 1 saat tıngırdatın.\n2. Beşamel sosu tereyağı, un ve sütle pürüzsüz pişirip muskat rendeleyin.\n3. Fırın kabına sırasıyla beşamel, lasagna yaprağı, bolonez sos, beşamel ve peynir şeklinde kat kat dizin.\n4. 180°C fırında üzeri altın sarısı olup kabarcıklar çıkarana kadar 30-35 dakika pişirin.`,
        tips: "Bolonez sosu ne kadar kısık ateşte ve uzun süre pişerse İtalyan orijinal lezzetine o kadar yaklaşır."
    },
    "Risotto Ai Funghi": {
        ingredients: ["1 su bardağı Arborio pirinci", "300g mantar (porçini veya kestane)", "1 küçük soğan", "Yarım su bardağı beyaz üzüm suyu (veya sirke alternatifi/sek sıcak su)", "Yaklaşık 4 su bardağı sıcak tavuk/sebze suyu", "2 yemek kaşığı tereyağı, yarım su bardağı rende parmesan"],
        steps: `1. Tavada zeytinyağında ince doğranmış soğanları ve mantarları soteleyin.\n2. Arborio pirincini ekleyip 2 dakika kavurun. Varsa üzüm suyunu ekleyip tamamen çektirin.\n3. Sıcak tavuk suyunu HER SEFERİNDE BİRER KEPÇE ekleyerek pirinç suyu çektikçe karıştırarak eklemeye devam edin (yaklaşık 18-20 dk).\n4. Pirinçler nişastasını salıp krema kıvamı alınca ocaktan indirin, tereyağı ve parmesanı ekleyip hızla karıştırarak (Mantecatura) kapağını kapatıp 2 dk dinlendirin.`,
        tips: "Risotto asla yıkanmaz! Arborio pirincinin dışındaki nişasta risottonun o kremsi dokusunu sağlayan ana unsurdur."
    },
    "Carbonara": {
        ingredients: ["200g spagetti", "100g Guanciale (veya kaliteli dana füme et)", "2 adet yumurta sarısı + 1 tam yumurta", "1 su bardağı rende Pecorino Romano veya Parmesan peyniri", "Bolca taze çekilmiş tane karabiber"],
        steps: `1. Makarnayı tuzlu kaynar suda "al dente" (hafif diri) olacak şekilde haşlayın.\n2. Tavada küçük doğranmış etleri kendi yağında çıtırlaşana kadar kavurun, ocağı kapatın.\n3. Bir kasede yumurtaları ve peyniri karıştırıp macun kıvamına getirin, bol karabiber ekleyin.\n4. Haşlanan makarnayı etlerin olduğu tavaya alın. Sıcak makarna suyundan yarım kepçe ekleyin. İlk sıcaklığı geçince yumurtalı karışımı döküp HIZLICA çırparak krema kıvamı almasını sağlayın. Servis edin.`,
        tips: "KREMA ASLA KULLANILMAZ. Sosun kremamsı dokusu sıcak makarna suyu, peynir ve yumurtanın doğru ısıda birleşmesiyle oluşur."
    },
    "Gnocchi": {
        ingredients: ["3 adet büyük boy unlu patates", "1 su bardağı un", "1 yumurta sarısı", "Tuz", "Sos için: Adaçayı, tereyağı ve parmesan"],
        steps: `1. Patatesleri kabuklarıyla haşlayın veya fırınlayın (nem kalmamalı). Kabuklarını soyup püre eziciyle pürüzsüz ezin.\n2. Azar azar un, tuz ve yumurta sarısını ekleyip yumuşak, ele yapışmayan bir hamur yapın (fazla yoğurmayın, sertleşir).\n3. Hamurdan şeritler yapıp küçük parçalar kesin, çatalla şekil verin.\n4. Kaynayan suda gnocchiler su yüzeyine çıkana kadar pişirin. Tavada adaçayı ile köpürtülmüş tereyağına alıp soteleyin, parmesanla servis edin.`,
        tips: "Patatesleri haşlamak yerine fırınlamak gnocchinin hamur olmasını engeller, un miktarını minimumda tutmanızı sağlar."
    },
    "Osso Buco": {
        ingredients: ["4 adet osso buco (dana incik dilimi)", "1 soğan, 1 havuç, 1 kereviz sapı", "2 diş sarımsak", "1 su bardağı domates püresi", "Et suyu", "Gremolata için: Limon kabuğu rendesi, maydanoz, ince kıyılmış sarımsak"],
        steps: `1. Etlerin kenarlarına kesikler atın (pişerken kıvrılmasın), unlayıp kızgın zeytinyağında arkalı önlü mühürleyin ve kenara alın.\n2. Aynı tavada küp doğranmış soğan, havuç ve kerevizi soteleyin. Domates püresi ve et suyunu ekleyin.\n3. Etleri tekrar tencereye alın. Kapağını kapatıp kısık ateşte et kemikten ayrılacak kadar lokum gibi (2-2.5 saat) pişirin.\n4. Servis ederken üzerine taze maydanoz, sarımsak ve limon kabuğundan oluşan Gremolata karışımını serpin.`,
        tips: "Osso buco geleneksel olarak Safranlı Risotto (Risotto alla Milanese) ile harika bir uyum yakalar."
    },
    "Neapolitan Pizza": {
        ingredients: ["500g Tipo 00 pizza unu", "325ml soğuk su", "3g taze maya", "10g tuz", "Sos: San Marzano domates püresi, taze fesleğen, manda mozzarellası, zeytinyağı"],
        steps: `1. Un, su ve mayayı karıştırıp yoğurun, tuzu ekleyip pürüzsüz bir hamur yapın. Bezeler halinde 24 saat buzdolabında soğuk fermantasyon yapın.\n2. Hamuru elinizle ortadan kenarlara doğru basarak açın (kenarları hava dolu ve kalın kalmalı, merdane kullanmayın).\n3. Üzerine domates sosu, mozzarella, fesleğen ve zeytinyağı ekleyin.\n4. Maksimum dereceye ısıtılmış fırında pizza taşı üzerinde 5-6 dakika (varsa pizza fırınında 90 saniyede) pişirin.`,
        tips: "Merdane kullanırsanız kenarlardaki o devasa hava kabarcıklarını (cornicione) söndürürsünüz, kesinlikle elle açın."
    },

    // FRANSA
    "Beef Bourguignon": {
        ingredients: ["800g iri kuşbaşı dana kürek eti", "200g arpacık soğan", "200g kestane mantarı", "2 havuç, 2 diş sarımsak", "1 yemek kaşığı un, 2 kaşık tereyağı", "Et suyu, kekik, defne yaprağı"],
        steps: `1. Etleri yüksek ateşte döküm tencerede tereyağında mühürleyip kenara alın.\n2. Aynı tencerede havuç ve arpacık soğanları soteleyin, un ekleyip 1 dk kavurun.\n3. Et suyunu, sarımsağı ve otları ekleyin. Etleri tencereye geri koyun.\n4. Kapağı kapalı şekilde kısık ateşte (veya fırında) etler çatalla dağılacak kıvama gelene kadar 2.5-3 saat pişirin. Son yarım saatte sote mantarları ekleyin.`,
        tips: "Yemeğin sosunun kadife gibi koyu bir kıvam alması için unun un kokusu gidene kadar iyi kavrulması önemlidir."
    },
    "Ratatouille": {
        ingredients: ["1 adet kabak, 1 adet patlıcan, 1 adet domates (hepsi eşit çapta ve ince dilimlenmiş)", "Sos için: 2 domates, 1 kapya biber, 1 soğan, zeytinyağı, sarımsak, kekik"],
        steps: `1. Sos için soğan, sarımsak, biber ve domatesleri soteleyip pürüzsüz olana kadar rondodan geçirin ve fırın kabının tabanına yayın.\n2. Kabak, patlıcan ve domates dilimlerini sırasıyla üst üste gelecek şekilde bir yelpaze gibi fırın kabına sarmal olarak dizin.\n3. Üzerine zeytinyağı, tuz ve kekik gezdirip pişirme kağıdı kapatın.\n4. 180°C fırında sebzeler yumuşayana kadar 40 dk pişirin, son 10 dk kağıdı alıp üzerini hafifçe kızartın.`,
        tips: "Sebzelerin tamamen aynı kalınlıkta dilimlenmesi (mandolin rende ile) hem görsel hem de aynı sürede pişmeleri için önemlidir."
    },
    "Coq au Vin": {
        ingredients: ["4 adet bütün tavuk baget veya but", "150g jülyen dana füme et", "200g mantar, 10 adet arpacık soğan", "2 diş sarımsak, 1 kaşık salça, 2 kaşık un", "Tavuk suyu, taze kekik"],
        steps: `1. Derin tencerede füme etleri çıtırlaştırıp yağını bırakmasını sağlayın, etleri alın.\n2. Aynı yağda tavuk parçalarını arkalı önlü nar gibi mühürleyin ve kenara alın.\n3. Tencereye arpacık soğan, mantar ve havuçları atıp soteleyin, un ve salça ekleyin.\n4. Tavuk suyunu tencereye döküp tavukları ve füme etleri ekleyin, kısık ateşte tavuk lokum gibi olana kadar 45-50 dakika pişirin.`,
        tips: "Bu yemek geleneksel olarak şarapla pişer, ev ortamında yoğun lezzeti yakalamak için tavuk suyunun çok kaliteli ve konsantre olması gerekir."
    },
    "Fransız Soğan Çorbası": {
        ingredients: ["4 adet büyük boy sarı soğan", "3 yemek kaşığı tereyağı", "1 yemek kaşığı un", "4 su bardağı kaliteli et/kemik suyu", "Üzerine: Baget ekmek dilimleri ve bolca Gravyer veya Gruyere peyniri rendesi"],
        steps: `1. Soğanları piyazlık doğrayın. Tereyağında kısık ateşte en az 40-45 dakika karamel rengi alana kadar sürekli karıştırarak karamelize edin.\n2. Karamelize olan soğanlara un ekleyip 2 dk kavurun.\n3. Sıcak et suyunu ekleyin, tuz karabiber atıp kısık ateşte 20 dk tıngırdatın.\n4. Çorbayı fırın kaselerine paylaştırın. Üzerine birer dilim baget ekmeği koyup bolca peynir serpin. 200°C fırında peynir eriyip kızarana kadar fırınlayın.`,
        steps: `1. Soğanları piyazlık doğrayın. Tereyağında kısık ateşte en az 40-45 dakika karamel rengi alana kadar sürekli karıştırarak karamelize edin.\n2. Karamelize olan soğanlara un ekleyip 2 dk kavurun.\n3. Sıcak et suyunu ekleyin, tuz karabiber atıp kısık ateşte 20 dk tıngırdatın.\n4. Çorbayı fırın kaselerine paylaştırın. Üzerine birer dilim baget ekmeği koyup bolca peynir serpin. 200°C fırında peynir eriyip kızarana kadar fırınlayın.`,
        tips: "Soğanları asla yüksek ateşte yakmayın. Sabırla kısık ateşte kendi şekerini salmasını (karamelizasyon) sağlamalısınız."
    },
    "Confit de Canard": {
        ingredients: ["2 adet ördek budu", "Kaba tuz, taze biberiye, kekik, 3 diş sarımsak", "Eritilmiş ördek yağı (budun üzerini tamamen kapatacak miktarda)"],
        steps: `1. Ördek butlarını tuz ve otlarla marine edip buzdolabında 1 gece bekletin, ertesi gün tuzu tamamen yıkayıp kurulayın.\n2. Fırın kabına butları koyun, sarımsak ve otları ekleyip üzerini erimiş ördek yağı ile tamamen kapatın.\n3. 110°C gibi çok düşük ısılı bir fırında, yağ kaynamayacak şekilde (sadece çok hafif tıngırdayarak) ağır ağır 4 saat pişirin.\n4. Pişen etleri yağdan çıkarıp tavada yüksek ateşte sadece derisi çıtır çıtır olana kadar arkalı önlü soteleyin.`,
        tips: "Confit bir eski saklama ve pişirme tekniğidir. Et düşük ısıda kendi yağında piştiği için lif lif ayrılır ve inanılmaz yumuşak olur."
    },
    "Quiche Lorraine": {
        ingredients: ["Tart hamuru: 200g un, 100g soğuk tereyağı, 1 yumurta, 2 kaşık buzlu su", "İç dolgu: 150g dana füme et, 1 küçük soğan, 200ml krema, 3 yumurta, 1 bardak rende Gravyer peyniri, muskat"],
        steps: `1. Tart hamuru malzemelerini hızla toparlayıp streçleyin, dolapta 30 dk dinlendirip kalıba yayın, çatal batırıp 180°C'de 15 dk kör pişirme (üzerine ağırlık koyarak) yapın.\n2. Tavada füme etleri ve soğanları soteleyin.\n3. Bir kapta krema, yumurta, tuz, karabiber ve muskat rendesini çırpın.\n4. Hamurun tabanına etli harcı ve peyniri yayın, üzerine kremalı karışımı döküp 180°C fırında üzeri altın sarısı olana kadar 30 dakika pişirin.`,
        tips: "Tart hamurunun gevrek olması için tereyağının çok soğuk olması ve hamurun çok fazla yoğrulmaması gerekir."
    },

    // JAPONYA
    "Geleneksel Ramen": {
        ingredients: ["Ramen eriştesi (Noodle)", "Et suyu: 500g kemikli tavuk/et, taze zencefil, 4 diş sarımsak, yeşil soğan, soya sosu, mirin", "Üzerine: Haşlanmış yumurta (Ramen Egg), ince dilimlenmiş et/tavuk, yeşil soğan filizleri, susam yağı"],
        steps: `1. Kemikleri, zencefili, sarımsağı ve soğanları su ile en az 4-5 saat (geleneksel olarak tescilli doku için kemik iliği eriyene kadar çok uzun süre) kaynatıp süzün.\n2. Elde edilen yoğun et suyunu soya sosu ve mirin ile tatlandırarak Ramen çorba tabanını hazırlayın.\n3. Erişteleri ayrı bir yerde haşlayıp servis kasesine alın.\n4. Üzerine kaynar çorba suyunu dökün. Soya sosunda marine edilmiş yarım haşlanmış yumurta, et dilimleri ve taze soğanla süsleyip susam yağı gezdirin.`,
        tips: "Ramen yumurtasının içinin krema kıvamında kalması için tam 6 dakika haşlayıp hemen buzlu suya alın, ardından soya soslu karışımda bekletin."
    },
    "Sushi": {
        ingredients: ["2 su bardağı Sushi pirinci", "2.5 su bardağı su", "Pirinci sosu: 4 kaşık pirinç sirkesi, 2 kaşık şeker, 1 kaşık tuz", "Nori yaprağı (Yosun)", "İçine: Taze somon, avokado, salatalık, krem peynir"],
        steps: `1. Pirinci nişastası gidene kadar yıkayıp suyla pişirin. Sıcakken sirkeli şekerli sosu döküp tahta kaşıkla alt üst ederek soğutun.\n2. Bambu matın üzerine nori yaprağını serin.\n3. Ellerinizi sirkeli suyla ıslatıp pirinci norinin üzerine ince bir katman halinde yayın (üstten 1-2 cm boşluk bırakın).\n4. Orta kısma uzun şeritler halinde somon, avokado ve salatalık yerleştirip mat yardımıyla sıkıca rulo yapın. Keskin bir bıçakla dilimleyin.`,
        tips: "Sushi pirincini karıştırırken pirinç tanelerini ezmemek için metal kaşık değil ahşap veya plastik spatula kullanın."
    },
    "Chicken Katsu Curry": {
        ingredients: ["2 adet tavuk göğsü", "Bulamak için: Un, çırpılmış yumurta, Panko ekmek kırıntısı", "Köri Sosu: 1 soğan, 1 havuç, 1 patates, 2 diş sarımsak, 2 yemek kaşığı köri, 1 kaşık un, 2 bardak tavuk suyu"],
        steps: `1. Sos için soğan, havuç ve patatesi soteleyin, un ve köri ekleyip kavurun. Tavuk suyunu ekleyip sebzeler yumuşayana kadar pişirin, ardından pürüzsüz olana dek blenderdan geçirin.\n2. Tavuk göğüslerini inceltin, sırasıyla un, yumurta ve çıtırlık veren Japon ekmek kırıntısı Panko'ya bulayıp kızgın yağda altın sarısı olana kadar kızartın.\n3. Tavuğu dilimleyin.\n4. Servis tabağına sade pirinç pilavı (Gohan) koyun, yanına tavuğu dizin ve üzerine sıcak köri sosunu bolca dökün.`,
        tips: "Panko normal ekmek kırıntısına göre daha iri ve gevrek yapıda olduğu için tavuğun fırınlanmış gibi çıtır kalmasını sağlar."
    },
    "Takoyaki": {
        ingredients: ["1 su bardağı un, 1.5 su bardağı dashi (veya tavuk suyu), 1 yumurta", "İçi için: Haşlanmış ahtapot parçaları (veya karides/tavuk küpleri), yeşil soğan, zencefil turşusu", "Sos: Takoyaki sosu, mayonez, katsuobushi (palamut kurusu kırıntısı)"],
        steps: `1. Un, dashi ve yumurtayı çırparak cıvık bir hamur elde edin.\n2. Özel Takoyaki tavasını iyice yağlayıp kızdırın, kalıpların tamamına hamuru dökün.\n3. Her deliğin içine birer parça ahtapot, taze soğan ve zencefil serpiştirin.\n4. Hamur alt kısımdan pişmeye başlayınca bir çöp şiş yardımıyla topları 90 derece çevirin, taşan hamurları içeri ittirerek tam bir küre formu alana kadar sürekli çevirerek pişirin. Üzerine soslar dökerek sıcak servis edin.`,
        tips: "Çevirme aşamasında hızlı davranmak ve tavadaki boşluklara azıcık daha hamur takviyesi yapmak tam yuvarlak toplar elde etmenizi sağlar."
    },
    "Okonomiyaki": {
        ingredients: ["2 bardak incecik kıyılmış beyaz lahana", "1 su bardağı un, Yarım bardak dashi veya su, 2 yumurta", "100g ince dilimlenmiş dana füme et veya karides", "Üzerine: Okonomiyaki sosu, mayonez, yeşil soğan"],
        steps: `1. Un, dashi ve yumurtayı çırpın, içine kıyılmış lahanaları ekleyip kaşıkla güzelce harmanlayın.\n2. Yağlanmış sıcak tavaya bu harcı yuvarlak kalın bir krep gibi yayın.\n3. Üzerine et dilimlerini dizin. Alt tarafı iyice kızarınca dikkatlice ters çevirip etlerin olduğu tarafı da pişirin.\n4. Servis tabağına alıp üzerine Okonomiyaki sosu ve mayonezi zikzaklar çizerek dökün, taze soğan serpin.`,
        tips: "Lahanaların sulanmaması için sosu ve lahanayı pişirmeden hemen önce birleştirin."
    },
    "Gyudon": {
        ingredients: ["300g çok ince dilimlenmiş dana eti (antrikot)", "1 adet kuru soğan", "Sos: Yarım bardak dashi veya su, 3 kaşık soya sosu, 2 kaşık mirin, 1 kaşık şeker", "Servis için: Sıcak sade pilav, yumurta sarısı, taze soğan"],
        steps: `1. Sos malzemelerini (dashi, soya sosu, mirin, şeker) geniş bir tavaya alıp kaynatın.\n2. Piyazlık doğranmış soğanları ekleyip yumuşayana kadar sosun içinde 5 dk pişirin.\n3. İncecik et dilimlerini tavaya yayın, etlerin rengi dönüp sosu hafifçe çekene kadar yüksek ateşte kısa süre (3-4 dk) pişirin.\n4. Büyük bir kasenin tabanına sıcak pilavı koyun, üzerine sosuyla birlikte etli soğanlı harcı dökün. Ortasına taze yumurta sarısı koyup taze soğanla servis edin.`,
        tips: "Etlerin kasapta neredeyse yaprak döner inceliğinde (pastırma gibi) dilimlenmesi yemeğin saniyeler içinde sosu çekerek pişmesi için elzemdir."
    },

    // MEKSİKA
    "Birria Tacos": {
        ingredients: ["1 kg dana gerdan veya incik", "3 adet kurutulmuş biber (capsicum/pul biber türevi), 1 soğan, 4 diş sarımsak", "Kimyon, kişniş, tarçın, karanfil, domates sosu", "Taco ekmekleri, rende mozzarella, doğranmış mor soğan, kişniş"],
        steps: `1. Biberleri sıcak suda yumuşatın. Soğan, sarımsak, domates sosu ve baharatlarla pürüzsüz olana kadar blenderdan geçirip sosu hazırlayın.\n2. Etleri döküm tencereye alın, sosu döküp üzerini geçecek kadar su ekleyin. Kapağı kapalı 3 saat et lif lif ayrılana kadar pişirin.\n3. Etleri tencereden alıp didikleyin. Tenceredeki et suyunu (consome) bir kaseye süzün.\n4. Taco ekmeğini bu yağlı et suyuna batırıp sıcak tavaya serin. Üzerine peynir ve didiklenmiş et koyun. İkiye katlayıp iki tarafını da çıtırlaştırın. Yanında sosuyla servis edin.`,
        tips: "Taco ekmeğini et suyunun üzerindeki o aromatik yağlı tabakaya batırmak taco kabuğunun muazzam lezzetli ve çıtır olmasını sağlar."
    },
    "Enchiladas": {
        ingredients: ["6 adet tortilla ekmeği", "300g haşlanmış didiklenmiş tavuk", "1 soğan, 1 bardak haşlanmış mısır", "Sos: 2 bardak domates sosu, pul biber, kimyon, sarımsak", "Üzerine: Bolca rende cheddar veya kaşar peyniri"],
        steps: `1. Sos malzemelerini tavada kaynatıp lezzetleri özleştirin.\n2. Tavukları, soğan ve mısırla soteleyip bu sosun 2 kaşığı ile karıştırın.\n3. Tortilla ekmeklerinin içine bu tavuklu harçtan koyup rulo şeklinde sarın ve fırın kabına yan yana dizin.\n4. Kalan domates sosunun tamamını tortillaların üzerine gezdirin, bolca peynir serpiştirip 190°C fırında peynirler kızarana kadar 20-25 dakika pişirin.`,
        tips: "Tortillaların fırında kurumaması için domates sosunun her yere eşit şekilde sürüldüğünden emin olun."
    },
    "Quesadilla": {
        ingredients: ["2 adet büyük boy tortilla ekmeği", "200g jülyen doğranmış tavuk veya et", "1 adet kapya biber, 1 yeşil biber, 1 küçük soğan", "Meksika baharatları (kimyon, sarımsak tozu, pul biber)", "Bolca rende mozzarella ve cheddar peyniri"],
        steps: `1. Biber ve soğanları piyazlık doğrayıp yüksek ateşte soteleyin. Etleri ekleyip baharatlarla pişirin.\n2. Temiz bir tavaya bir adet tortillayı serin. Üzerine peynirin yarısını serpiştirin.\n3. Pişen etli sebzeli harcı peynirin üzerine yayın, kalan peynirleri de ekleyip ikinci tortillayı üzerine kapatın.\n4. Kısık-orta ateşte tortillanın altı çıtırlaşınca geniş bir tabak yardımıyla ters çevirip diğer tarafını da peynirler tamamen eriyene kadar çıtır çıtır pişirin. Üçgen dilimleyin.`,
        tips: "Quesadilla'yı çevirirken içinin dağılmaması için peynirleri kenarlara yakın koyun, eriyen peynir yapıştırıcı görevi görür."
    },
    "Chilli Con Carne": {
        ingredients: ["400g kıyma", "1 adet kuru soğan, 2 diş sarımsak", "1 su bardağı haşlanmış kırmızı Meksika fasulyesi (kidney beans)", "Yarım su bardağı haşlanmış mısır", "2 su bardağı domates püresi, 1 kaşık salça, kimyon, pul biber, yarım küp bitter çikolata"],
        steps: `1. Tencerede soğan ve sarımsakları kavurun, kıymayı ekleyip suyunu çekene kadar soteleyin.\n2. Salça, domates püresi ve bol kimyonu ekleyip karıştırın. Kısık ateşte sos koyulaşana kadar 20 dk pişirin.\n3. Haşlanmış kırmızı fasulyeyi ve mısırı ekleyip 10 dakika daha tıngırdatın.\n4. Ocaktan indirmeden hemen önce minik bir parça bitter çikolata ekleyip karıştırın (sosun rengini ve derinliğini artırır). Pilav veya nacho ile servis edin.`,
        tips: "Meksika fasulyelerinin dağılmaması için yemeğe en son aşamada, fasulyeler zaten haşlanmış olduğu için ekleyin."
    },
    "Fajita": {
        ingredients: ["500g jülyen doğranmış antrikot veya tavuk göğsü", "1 adet kapya biber, 1 adet sarı biber, 1 adet yeşil biber, 1 büyük soğan", "Marine için: Zeytinyağı, limon suyu, sarımsak, kimyon, karabiber", "Servis için tortilla ve avokado sosu (Guacamole)"],
        steps: `1. Etleri marine malzemeleriyle en az 2 saat dinlendirin.\n2. Döküm tavayı dumansı bir ısıya gelene kadar maksimum ateşte kızdırın.\n3. Marine olan etleri tavaya atıp yüksek ateşte hızlıca (3-4 dk) soteleyip kenara alın (eti kurutmayın).\n4. Aynı tavaya piyazlık doğranmış renkli biberleri ve soğanları atıp hafif diri kalacak şekilde (al dente) soteleyin. Etleri tekrar tavaya ekleyip karıştırın ve cızırdayan döküm tavada tortillalar eşliğinde servis edin.`,
        tips: "Fajita'nın sırrı sebzelerin ve etlerin ezilmeden, çok yüksek ısıda dışının karamelize içinin sulu kalmasıdır."
    },
    "Mole Poblano": {
        ingredients: ["4 adet tavuk kalçalı but", "1 soğan, 2 diş sarımsak, 2 domates", "Kavrulmuş badem, susam, kuru üzüm, kimyon, kişniş, tarçın", "50g bitter çikolata (%70 kakao)", "Tavuk suyu"],
        steps: `1. Tavukları bol suda haşlayın, suyunu süzüp kenara ayırın. Tavuk butlarını tavada az yağda hafifçe kızartın.\n2. Sos için soğan, sarımsak, domates, badem, susam, kuru üzüm ve baharatları tavuk suyu ekleyerek blenderda pürüzsüz bir püre haline getirin.\n3. Bu püreyi tencereye alıp kısık ateşte sos kıvamına gelene kadar pişirin. İçine çikolatayı ekleyip eriyene kadar karıştırın.\n4. Kızarmış tavukları bu yoğun çikolatalı baharatlı sosun içine atıp 15 dakika sosla birlikte tıngırdatın. Üzerine susam serperek servis edin.`,
        tips: "Meksika'nın en özel sosudur; çikolata tatlılık için değil, baharatların acılığını dengelemek ve sosa gövde kazandırmak için kullanılır."
    },

    // İSPANYA
    "Seafood Paella": {
        ingredients: ["1.5 su bardağı Bomba veya Calasparra pirinci (alternatif pilavlık)", "200g karides, 200g kalamar, 10-12 adet midye", "1 adet kapya biber, 1 soğan, 2 domates rendesi, 2 diş sarımsak", "Geniş bir tutam Safran (sıcak suda bekletilmiş)", "3 su bardağı sıcak balık/sebze suyu, bezelye"],
        steps: `1. Geniş ve sığ paella tavasında zeytinyağında kalamar ve karidesleri soteleyip kenara alın.\n2. Aynı tavada soğan, sarımsak ve biberleri ezip domates rendesini ekleyerek "Sofrito" adı verilen lezzet tabanını oluşturun.\n3. Pirinci ekleyin (asla yıkamayın). Safranlı suyu ve sıcak balık suyunu ekleyip karıştırın. Deniz ürünlerini ve bezelyeyi pirinçlerin üzerine dekoratifçe dizin.\n4. Kapağını Kapatmadan, pirinçler suyu çekene kadar orta-kısık ateşte pişirin. Altında hafif çıtır bir tabaka (Socarrat) oluşunca ocaktan alıp bezle kapatarak 5 dk dinlendirin.`,
        tips: "Paella pişerken RİSOTTO GİBİ SÜREKLİ KARIŞTIRILMAZ. Pirinçleri bir kez dizdikten sonra kaşığı bırakmalı ve suyun kendi kendine çekmesini beklemelisiniz."
    },
    "Gazpacho": {
        ingredients: ["5 adet olgun büyük boy domates", "1 adet salatalık", "1 adet yeşil dolmalık biber", "1 küçük kırmızı soğan, 2 diş sarımsak", "2 dilim bayat ekmek içi", "Yarım çay bardağı kaliteli zeytinyağı, 2 yemek kaşığı üzüm sirkesi, soğuk su"],
        steps: `1. Domateslerin kabuklarını soyun. Salatalık, biber, soğan ve sarımsakları kabaca doğrayın.\n2. Tüm sebzeleri, ekmek içini, zeytinyağını, sirkeyi, tuz ve karabiberi güçlü bir blendere alın.\n3. Tamamen pürüzsüz, ipeksi bir sıvı kıvam alana kadar en az 3-4 dakika blenderı çalıştırın. Kıvamı koyu gelirse azıcık soğuk su ekleyin.\n4. Sosu ince bir süzgeçten süzüp buzdolabında en az 2 saat buz gibi olana kadar soğutun. Kadeh veya kaselerde zeytinyağı gezdirerek servis edin.`,
        tips: "Gazpacho pişirilmeyen soğuk bir yaz çorbasıdır. Lezzetin zirve yapması için domateslerin tarla ve tam olgun olması şarttır."
    },
    "Tortilla de Patatas": {
        ingredients: ["4 adet büyük boy patates", "2 adet büyük boy kuru soğan", "5 adet yumurta", "Bolca zeytinyağı (patatesleri pişirmek için)", "Tuz"],
        steps: `1. Patatesleri ince yarım ay (ince dilim) şeklinde doğrayın. Soğanları da piyazlık doğrayın.\n2. Tavaya bol zeytinyağı alın. Patates ve soğanları yağda kızartmadan, zeytinyağının içinde konfi yapar gibi kısık ateşte yumuşayana kadar (haşlar gibi) pişirin ve süzün.\n3. Geniş bir kapta yumurtaları tuzla çırpın. Sıcak patates ve soğanları yumurtanın içine ekleyip kaşıkla karıştırın ve 10 dakika patateslerin yumurtayı emmesi için bekletin.\n4. Yapışmaz tavaya az zeytinyağı döküp karışımı yayın. Kısık ateşte altı pişince bir kapak yardımıyla ters çevirip diğer yüzünü de içi sulu kalacak şekilde pişirin.`,
        tips: "İspanyol omletinin içi tamamen kuru olmamalıdır, hafif nemli ve sulu kalması orijinal dokusunun sırrıdır."
    },
    "Patatas Bravas": {
        ingredients: ["4 adet büyük boy patates (iri küp doğranmış)", "Kızartmak için sıvı yağ", "Salsa Brava Sosu: 1 soğan, 2 diş sarımsak, 1 yemek kaşığı acı toz biber/pimenton, 1 kaşık un, 1.5 bardak et suyu", "Alioli Sos: 3 kaşık mayonez, 2 diş ezilmiş sarımsak, limon suyu"],
        steps: `1. Küp patatesleri tuzlu suda 5 dk haşlayıp süzün ve kurulayın. Ardından bol kızgın yağda dışı çıtır içi lokum gibi olana kadar kızartın.\n2. Brava sos için soğan ve sarımsağı zeytinyağında soteleyin, toz biberi ve unu ekleyip 1 dk kavurun. Et suyunu ekleyip koyulaşana kadar pişirin, blenderdan geçirin.\n3. Alioli için mayonez, sarımsak ve limonu homojen karıştırın.\n4. Çıtır patatesleri tabağa alın, üzerine salsa brava ve alioli soslarını gezdirerek sıcak servis yapın.`,
        tips: "Patatesleri önce haşlayıp sonra kızartmak, iç kısımlarının püre gibi yumuşacık, dışının ise cam gibi çıtır olmasını sağlar."
    },
    "Gambas al Ajillo": {
        ingredients: ["400g temizlenmiş karides", "6 diş sarımsak (ince dilimlenmiş)", "1 adet kurutulmuş acı biber (veya pul biber)", "Yarım çay bardağı sızma zeytinyağı", "Taze maydanoz, tuz"],
        steps: `1. Toprak bir kaba veya küçük bir tavaya zeytinyağını alın. Sarımsakları ve acı biberleri ekleyip ocağı yakın.\n2. Sarımsaklar yanmadan, yağın içinde kokusunu ve aromasını bırakana kadar kısık ateşte hafifçe çıtırlaştırın.\n3. Ocağın ateşini yükseltip iyice kurulanmış karidesleri tavaya atın.\n4. Karideslerin rengi pembeleşip kıvrılana kadar arkalı önlü sadece 2-3 dakika soteleyin. Tuz atıp ince kıyılmış maydanoz serperek yağı cızırdarken masaya getirin.`,
        tips: "Karideslerin tavaya girmeden önce tamamen kuru olması gerekir; ıslak kalırlarsa yağı sulandırır ve o şef dokusunu bozarlar."
    },
    "Pollo al Ajillo": {
        ingredients: ["1 kg parça tavuk (but veya kemikli küçük parçalar)", "8-10 diş sarımsak (kabukları hafifçe çatlatılmış bütün)", "1 su bardağı tavuk suyu (veya kuru beyaz üzüm suyu alternatifi)", "Taze biberiye, kekik, zeytinyağı, tuz, karabiber"],
        steps: `1. Tavuk parçalarını tuz ve karabiberle lezzetlendirin. Geniş bir tavada bol zeytinyağında tavukların derileri çıtırlaşana kadar arkalı önlü nar gibi kızartın ve tavukları kenara alın.\n2. Aynı tavaya bütün sarımsakları atıp kabuklarıyla zeytinyağında altın sarısı olana kadar soteleyin.\n3. Tavukları tencereye geri alın, biberiye ve kekiği ekleyin. Tavuk suyunu dökün.\n4. Tencerenin kapağını kapatıp kısık ateşte tavuklar sosu çekip yumuşayana kadar yaklaşık 25-30 dakika pişirin. Sos kremamsı bir kıvam alacaktır.`,
        tips: "Sarımsakları kabuklarıyla hafifçe ezerek pişirmek, sosa yanık tadı vermeden yumuşacık, fırınlanmış sarımsak aroması katmasını sağlar."
    }
};

function scrollToRecipes() {
    document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
}

let currentRecipeName = "";

function getFavorites() {
    return JSON.parse(localStorage.getItem("lokmaFavorites") || "[]");
}

function saveFavorites(favs) {
    localStorage.setItem("lokmaFavorites", JSON.stringify(favs));
    updateFavCount();
    renderFavoritesList();
}

function updateFavCount() {
    const favs = getFavorites();
    const countEl = document.getElementById("fav-count");
    if (countEl) {
        countEl.textContent = favs.length;
        countEl.style.display = favs.length > 0 ? "inline-block" : "none";
    }
}

function toggleFavorite() {
    const favs = getFavorites();
    const idx = favs.indexOf(currentRecipeName);
    if (idx === -1) {
        favs.push(currentRecipeName);
    } else {
        favs.splice(idx, 1);
    }
    saveFavorites(favs);
    updateFavBtn();
}

function updateFavBtn() {
    const favs = getFavorites();
    const btn = document.getElementById("fav-btn");
    if (!btn) return;
    if (favs.includes(currentRecipeName)) {
        btn.textContent = "❤️ Favorilerden Çıkar";
        btn.classList.add("is-fav");
    } else {
        btn.textContent = "🤍 Favorilere Ekle";
        btn.classList.remove("is-fav");
    }
}

function renderFavoritesList() {
    const favs = getFavorites();
    const list = document.getElementById("favorites-list");
    if (!list) return;
    if (favs.length === 0) {
        list.innerHTML = '<p class="fav-empty">Henüz favori tarif eklemediniz.</p>';
        return;
    }
    list.innerHTML = favs.map(name => `
        <div class="fav-item" onclick="openFavRecipe('${name.replace(/'/g, "\\'")}')">
            <span class="fav-item-name">🍴 ${name}</span>
            <button class="fav-remove-btn" onclick="removeFav(event, '${name.replace(/'/g, "\\'")}')">✕</button>
        </div>
    `).join("");
}

function openFavRecipe(name) {
    toggleFavoritesPanel();
    openRecipe(name);
}

function removeFav(e, name) {
    e.stopPropagation();
    const favs = getFavorites().filter(f => f !== name);
    saveFavorites(favs);
}

function toggleFavoritesPanel() {
    const panel = document.getElementById("favorites-panel");
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden")) {
        renderFavoritesList();
    }
}

function openRecipe(name) {
    const r = recipes[name];
    if (!r) return;

    currentRecipeName = name;
    document.getElementById("title").textContent = name;
    
    const ing = document.getElementById("ingredients");
    ing.innerHTML = "";
    r.ingredients.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        ing.appendChild(li);
    });

    document.getElementById("steps").textContent = r.steps;
    document.getElementById("tips").textContent = r.tips;
    document.getElementById("modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    updateFavBtn();
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) closeModal();
}

// Sayfa yüklenince favori sayısını göster
document.addEventListener("DOMContentLoaded", updateFavCount);

// ANA KATEGORİ FİLTRELEME FONKSİYONU
function filterCategory(category, element) {
    const cats = document.querySelectorAll('.cat');
    cats.forEach(c => c.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        document.querySelector('.cat').classList.add('active');
    }

    // Dünya mutfağı navigasyon alanını resetle
    document.getElementById("world-nav").classList.add("hidden");

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Eğer Dünya Mutfakları seçildiyse: sadece ÜLKE KARTLARINI göster, yemek kartlarını gizle
        if (category === 'dunya') {
            if (card.classList.contains('country-card')) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        } 
        // Diğer kategoriler seçildiyse: klasik filtreleme yap, dünya mutfağı kartlarının hepsini gizle
        else {
            if (card.classList.contains('country-card') || card.classList.contains('food-card')) {
                card.style.display = "none";
            } else if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = ""; 
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// BİR ÜLKEYE TIKLANDIĞINDA O ÜLKENİN YEMEKLERİNİ GÖSTEREN FONKSİYON
function filterCountryFoods(countryCode, countryTitle) {
    // Ülke kartlarını gizle
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(c => c.style.display = 'none');

    // Üst navigasyon barını ve butonunu aktif et
    document.getElementById("current-country-title").textContent = countryTitle;
    document.getElementById("world-nav").classList.remove("hidden");

    // Sadece seçilen ülkenin yemek kartlarını göster
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach(f => {
        if (f.classList.contains(countryCode + '-food')) {
            f.style.display = "";
        } else {
            f.style.display = "none";
        }
    });
    
    scrollToRecipes();
}

// YEMEK LİSTESİNDEN TEKRAR ÜLKE SEÇİM EKRANINA DÖNÜŞ FONKSİYONU
function showCountrySelection() {
    // Üst navigasyonu gizle
    document.getElementById("world-nav").classList.add("hidden");

    // Yemek kartlarını gizle, ülke kartlarını tekrar göster
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach(f => f.style.display = "none");

    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(c => c.style.display = "");

    scrollToRecipes();
}
// ================= KARANLIK / AYDINLIK TEMA =================
function toggleTheme() {
    const html = document.getElementById("html-root");
    const btn = document.getElementById("theme-btn");
    const isDark = html.classList.toggle("dark-mode");
    localStorage.setItem("lokmaTheme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️ Aydınlık" : "🌙 Karanlık";
}

// Sayfa yüklenince kaydedilmiş temayı uygula
(function() {
    const saved = localStorage.getItem("lokmaTheme");
    if (saved === "dark") {
        document.getElementById("html-root").classList.add("dark-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.textContent = "☀️ Aydınlık";
    }
})();

// ================= GÜNLÜK MENÜ - TheMealDB API =================
async function fetchDailyMeal() {
    const loading = document.getElementById("daily-loading");
    const content = document.getElementById("daily-content");
    const error   = document.getElementById("daily-error");

    // Yükleniyor göster
    loading.classList.remove("hidden");
    content.classList.add("hidden");
    error.classList.add("hidden");

    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (!response.ok) throw new Error("API hatası");
        const data = await response.json();
        const meal = data.meals[0];

        // İsim, görsel, ülke, kategori
        document.getElementById("daily-name").textContent = meal.strMeal;
        document.getElementById("daily-img").src = meal.strMealThumb;
        document.getElementById("daily-country").textContent = "🌍 " + (meal.strArea || "Bilinmiyor");
        document.getElementById("daily-category").textContent = "🍽 " + (meal.strCategory || "");

        // Malzemeleri çek (API'de strIngredient1...20 şeklinde geliyor)
        const ingList = document.getElementById("daily-ingredients");
        ingList.innerHTML = "";
        for (let i = 1; i <= 20; i++) {
            const ing    = meal["strIngredient" + i];
            const measure = meal["strMeasure" + i];
            if (ing && ing.trim()) {
                const li = document.createElement("li");
                li.textContent = (measure ? measure.trim() + " " : "") + ing.trim();
                ingList.appendChild(li);
            }
        }

        // YouTube linki
        const ytBtn = document.getElementById("daily-youtube");
        if (meal.strYoutube) {
            ytBtn.href = meal.strYoutube;
            ytBtn.classList.remove("hidden");
        } else {
            ytBtn.classList.add("hidden");
        }

        loading.classList.add("hidden");
        content.classList.remove("hidden");

    } catch (err) {
        loading.classList.add("hidden");
        error.classList.remove("hidden");
        console.error("TheMealDB API hatası:", err);
    }
}

// Bugünün tarihini göster
function setDailyDate() {
    const el = document.getElementById("daily-date");
    if (!el) return;
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    el.textContent = now.toLocaleDateString("tr-TR", options);
}

// Sayfa açılınca çalıştır
document.addEventListener("DOMContentLoaded", () => {
    updateFavCount();
    setDailyDate();
    fetchDailyMeal();
});