/* OTEL BİLGİLERİ VERİ OBJESİ
    Oda detaylarını buradan tek bir noktadan güncelleyebilirsiniz.
*/
const roomData = {
    'standard-suite': {
        category: 'Ekonomik Konfor',
        title: 'Standart Lüx Suit Tek Kişilik Oda',
        description: 'Standart lüx suit tek kişilik odamız, Malatya merkezde iş seyahati yapan misafirler ve huzurlu bir konaklama arayan çiftler için günlük kiralık daire rahatlığını otel güvenliğiyle birleştirir. Ferah planı, sade tasarımı ve düzenli yaşam alanı sayesinde kısa ya da orta süreli konaklamalarda yüksek verim ve konfor sunar.',
        size: '35 m²',
        beds: '1 King Size',
        images: [
            'images/tekkisilik1.jpeg',
            'images/tekkisilik2.jpeg',
            'images/tekkisilik3.jpeg',
        ],
        features: ['Ücretsiz Wi-Fi', 'Minibar', 'Klima', 'Kasa', 'Kettle', 'Akıllı TV']
    },
    'deluxe-king': {
        category: 'Seçkin Tercih',
        title: 'Deluxe King 3 kişilik Oda',
        description: 'Deluxe King odamız, aileler ve geniş alan ihtiyacı duyan misafirler için Malatya suit otel deneyimini üst seviyeye taşır. Ferah balkon, konfor odaklı mobilyalar ve kullanışlı yerleşim planı sayesinde hem şehir ziyaretlerinde hem uzun süreli konaklamalarda premium bir yaşam alanı sunar.',
        size: '45 m²',
        beds: '1 Super King, 1 Tek Kişilik',
        images: [
            'images/uckısılık1.jpeg',
            'images/uckısılık2.jpeg',
            'images/uckısılık3.jpeg',
        ],
        features: ['Panoramik Manzara', 'Jakuzi', 'Kettle', 'Çalışma Masası', 'Akıllı TV', 'Premium Minibar']
    },
    'executive-penthouse': {
        category: 'Ekonomik Konfor',
        title: 'Standart Suit 2 Kişilik Oda',
        description: 'Standart suit 2 kişilik odamız, Malatya’da lüks konaklama arayan çiftler ve sakin bir atmosfer isteyen misafirler için özenle hazırlanmıştır. Günlük kiralık daire esnekliğini otel standartlarıyla buluşturan bu oda tipi, zarif dekorasyonu ve işlevsel konforuyla şehir merkezine yakın seçkin bir alternatif oluşturur.',
        size: '30 m²',
        beds: '2 Ayrı Tek Kişilik Yatak',
        images: [
            'images/2kısılık1.jpeg',
            'images/2kısılık2.jpeg',
            'images/2kısılık3.jpeg',
        ],
        features: ['Ücretsiz Wi-Fi', 'Minibar', 'Klima', 'Kasa', 'Kettle', 'Akıllı TV']
    }
};

/* NAVBAR SCROLL EFFECT */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar-custom');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

/* HERO PARALLAX EFFECT */
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.hero-parallax-bg');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
});

/* DARK/LIGHT MODE TOGGLE */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });
}

function enableLightMode() {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    if (themeIcon) themeIcon.classList.replace('bi-moon-stars', 'bi-sun');
    localStorage.setItem('theme', 'light');
}

function enableDarkMode() {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    if (themeIcon) themeIcon.classList.replace('bi-sun', 'bi-moon-stars');
    localStorage.setItem('theme', 'dark');
}

/* ROOM DETAIL PANEL LOGIC */
function openRoomDetail(id) {
    const data = roomData[id];
    if (!data) return;

    document.getElementById('panelCategory').innerText = data.category;
    document.getElementById('panelTitle').innerText = data.title;
    document.getElementById('panelDesc').innerText = data.description;
    document.getElementById('panelSize').innerText = data.size;
    document.getElementById('panelBeds').innerText = data.beds;

    const imgContainer = document.getElementById('panelImages');
    imgContainer.innerHTML = data.images.map((img, i) => `
        <div class="carousel-item h-100 ${i === 0 ? 'active' : ''}">
            <img src="${img}" alt="Yakamoz Suit Otel Malatya ${data.title} gorseli ${i + 1}" class="d-block w-100 h-100" style="object-fit:cover;" loading="lazy">
        </div>
    `).join('');

    const featContainer = document.getElementById('panelFeatures');
    featContainer.innerHTML = data.features.map(f => `
        <li class="col-md-6 small"><i class="bi bi-check2 text-gold me-2"></i>${f}</li>
    `).join('');

    document.getElementById('roomDetailPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRoomDetail() {
    document.getElementById('roomDetailPanel').classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* PRELOADER HİDE */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
});