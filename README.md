# React-Bus-Tracker
![image](https://user-images.githubusercontent.com/54690370/196819505-6a4a2e00-d892-4dda-8164-4a0223309f43.png)
![image](https://user-images.githubusercontent.com/54690370/196819562-ec8f605b-3291-4ae0-abc2-0ef28a94e07d.png)

Şekilde gösterilen rotada 1 numaralı duraktan 2 numaralı durağa giden 2.5 ₺ ile ücretlendirilirken eğer yolcu 1 numaralı duraktan 3 numaralı durağa kadar giderse 3.2 ₺ ile ücretlendirilecektir. Bu sayede yolcular gittikleri yol kadar ödeme yapacaklardır.

Projenin neredeyse en önemli aşaması mobil uygulamanın geliştirilmesidir. Mobil uygulama daha önce anlatılan web servis ile iki yönlü haberleşecektir. Yani yolcular hem toplu taşımanın mevcut durumunu izleyecek hem de izin verilen ölçekte uygulamanın daha doğru sonuçlar elde etmesi için veri tabanına veri gönderecektir. Bu veriler sadece kullanıcı uygulamayı kullandığı sırada alınacaktır. Elde edilen veriler durak yoğunluklarını yolculara göstermek için kullanılacaktır. Web servisten alından veriler uygulamaya kazandırılması hedeflenen özellikliler: 

4.5.1.	Canlı araç izleme
Yolcular araçların konumlarını canlı olarak izleyebilecek aynı zamanda aracın bulundukları durağa ulaşmasına kalan süreyi de anlık olarak izleyebileceklerdir. Kullanıcı deneyimini arttırmak için Google haritaların sağlamış olduğu Harita SDK’i kullanılanılacaktır.

4.5.2.	Durak yoğunluklarını izleme
Yolcular alternatif rotalar ile daha az bekleme süresi ile hedefine ulaştırmak için yoğunluğu daha az olan duraklara yönlendirilecektir. Bu özellik otobüslerin yoğunluk yükünü dengelerken aynı zamanda kullanıcıya mümkün olabilecek en hızlı ve en konforlu deneyimi yaşatacaktır.

4.5.3.	Araç yoğunluklarını izleme
Durağa gelmesi beklenen aracın indi bindi sayıları hesaplanarak araçtaki kişi sayısı ve araç kapasitesiyle aracın yoğunluğu hesaplanacaktır. Acelesi olan yolcular dolu gelen araçları önceden bilebileceği için alternatif yollara yönlendirilebilecekler.
 

4.5.4.	Kart dolum
Mobil cihazlarda bulunan NFC özelliği kartlar mobil cihaza bir kez tanıtılacak. Kart içerisinde tutulan benzersiz anahtarı kullanarak sanal pos ile kullanıcıdan tahsil edilen tutardaki miktar kartına aktarılacak. Bu özellik NFC bulunmayan telefonlarda kartın üzerinde bulunan kartı numarası girilerek de yapılabilecek.

4.5.5.	Güncel bakiye görüntüleme
Yine tanıtılan kartların güncel bakiye mobil uygulamanın ana ekranında görüntülenebilecek.

4.5.6.	Kapanan yol bilgileri
Şehir içerisinde ulaşımı aksaklığa uğratabilecek yol bilgileri kullanıcı uygulamaya girdiğinde yer alan duyurular bölümünde gösterilecek. Yalnızca kullanıcının rutin olarak kullandığı yollarda kapanma olursa kullanıcı uygulamaya girmese dahil kullanıcıya bildirim gönderilecek.

4.5.7.	Rutin rota değişim bildirimi
Kullanıcının rutin olarak kullandığı araçlar yol kapanması yeni duraklar eklenmesi vb. durumlara bağlı olarak rota değiştirdiğinde kullanıcıya bildirim olarak gönderilecek. Bu sayede kullanıcıların ulaşıma bağlı mağduriyet yaşaması engellenecek.

4.5.8.	Mobil cihaz ile ödeme
Mobil cihaza tanıtılan kart bilgileri ile uygulama açık iken temassız ödeme yapılabilecek Bu özellik kart kaybolması, kart unutulması, veya hızlıca sanal kart oluşturup kullanmak isteyen kullanıcılara çözüm olacaktır. NFC özelliği bulunmayan cihazlarda bu özellik QR kod okutarak çözülecektir.

4.5.9.	Ek seferlerin bildirilmesi
Yoğunluğun artığı hatlarda durak yoğunluklarına bağlı olarak çıkartılan ek seferler kullanıcıya bildirim olarak gönderilecek. 

4.5.10.	Dinamik ücretlendirme
Kullanıcıların gidecekleri yere giderken kullanacakları hattın ne kadar ücretlendirileceğinin bilgisi verilecek. Eğer alternatif rota varsa kullanıcı en ucuz yoldan en pahalıya gibi seçenekleri gözden geçirebilecek.
