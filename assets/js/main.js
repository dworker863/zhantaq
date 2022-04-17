document.addEventListener("DOMContentLoaded", function() {
(function () {
  $('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
  });
})();

$('.start').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.header-link').click(function () {
  $('#checkbox').prop('checked', false);
});

let onlyText = document.getElementById('name-field');

onlyText.addEventListener('keydown', function (e) {
  if (e.key.match(/[0-9]/)) {
    return e.preventDefault();
  }
});
onlyText.addEventListener('input', function (e) {
  onlyText.value.replace(/[0-9]/g, '');
});

var groupsAlmaty = [
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [43.218262, 76.927819],
        logo: 'images/esentai_gurme.webp',
        name: 'Esentai Gourmet',
        address:
          'Аль-Фараби, <strong>77/8</strong>, ТЦ <strong>ESENTAI MALL</strong>',
      },
      {
        center: [43.259491, 76.942247],
        logo: 'images/ubiley.webp',
        name: 'Юбилейный',
        address: 'Абылай хана, <strong>74</strong>',
      },
      {
        center: [43.249004, 76.941773],
        logo: 'images/stolichny.webp',
        name: 'Столичный',
        address: 'Абылай хана, <strong>121</strong>',
      },
      {
        center: [43.200745, 76.892991],
        logo: 'images/desertik.webp',
        name: 'Desertik.kz',
        address:
          'Розыбакиева, <strong>263</strong>, <strong>2</strong> этаж, ТРЦ <strong>Mega Center Alma-Ata</strong>',
      },
      {
        center: [43.239191, 76.959969],
        logo: 'images/alani.webp',
        name: 'Ресторан Alani',
        address: 'Луганского, <strong>19</strong>',
      },
      {
        center: [43.256153, 76.887765],
        logo: 'images/toi-mart.webp',
        name: 'Дискаунтер «TOIMART»',
        address: 'Розыбакиева, <strong>4</strong>',
      },
      {
        center: [43.247312, 76.951002],
        logo: 'images/toi-mart.webp',
        name: 'Супермаркет «TOIMART»',
        address: 'Кунаева, <strong>153</strong>',
      },
    ],
  },
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [43.231992, 76.899222],
        logo: 'images/toi-mart.webp',
        name: 'Супермаркет «TOIMART»',
        address: 'Жандосова, <strong>21/171</strong>',
      },
      {
        center: [43.247312, 76.951002],
        logo: 'images/toi-mart.webp',
        name: 'Супермаркет «TOIMART»',
        address: 'Навои, <strong>328</strong>',
      },
      {
        center: [43.247312, 76.951002],
        logo: 'images/toi-mart.webp',
        name: 'Супермаркет «TOIMART»',
        address: 'Бакшалы, <strong>7/29</strong>',
      },
      {
        center: [43.232106, 76.875037],
        logo: 'images/toi-mart.webp',
        name: 'Супермаркет «TOIMART»',
        address: 'Сатпаева, <strong>90/21</strong>',
      },
      {
        center: [43.260671, 76.813305],
        logo: 'images/toi-mart.webp',
        name: 'TOIMART Атлетика',
        address: 'мкр. Нуркент, <strong>5</strong> к<strong>20-22</strong>',
      },
      {
        center: [43.237701, 76.915646],
        logo: 'images/chocofood.webp',
        name: 'Chocofood',
        address: 'сервис доставки еды',
      },
      {
        center: [43.260671, 76.813305],
        logo: 'images/glovo.webp',
        name: 'Glovo Kazakhstan',
        address: 'Служба доставки',
      },
      {
        center: [43.211149, 76.92001],
        logo: 'images/metabody.webp',
        name: 'Клиника “Metabody”',
        address:
          'Аль-Фараби <strong>140А/3</strong>, комплекс <strong>Villa Dei Fiori</strong>',
      },
    ],
  },
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [43.229951, 76.959374],
        logo: 'images/energy.webp',
        name: 'Energy Life',
        address:
          'Достык, <strong>97</strong>, <strong>EMS</strong>-фитнес студии',
      },
      {
        center: [43.24608, 76.935114],
        logo: 'images/bear-bar.webp',
        name: 'Bear bar store',
        address: 'Шевченко, <strong>85</strong>',
      },
      {
        center: [43.246107, 76.935187],
        logo: 'images/miras.webp',
        name: 'Miras store',
        address: 'ул. Шевченко, <strong>85</strong>',
      },
      {
        center: [43.313167, 76.9751],
        logo: 'images/miras.webp',
        name: 'Miras store',
        address: 'Кульджинский тракт, <strong>16/8</strong>',
      },
      {
        center: [43.23377, 76.975342],
        logo: 'images/abay.webp',
        name: 'Ресторан ABAY',
        address: '​Омаровой, <strong>41/2</strong>​',
      },
      {
        center: [43.24295, 76.942583],
        logo: 'images/daily.webp',
        name: 'Daily Coffee',
        address: 'Абылай хана, <strong>147</strong>',
      },
      {
        center: [43.239705, 76.955091],
        logo: 'images/local.webp',
        name: 'Local Coffee & Pizza',
        address: 'Валиханова, <strong>170</strong>',
      },
      {
        center: [43.238878, 76.954837],
        logo: 'images/urban.webp',
        name: 'Urban Coffee',
        address: 'Сатпаева, <strong>4</strong>a',
      },
      {
        center: [43.238697, 76.952083],
        logo: 'images/social.webp',
        name: 'Social Coffee',
        address: 'Сатпаева, <strong>10</strong>',
      },
      {
        center: [43.244895, 76.946904],
        logo: 'images/mongol.webp',
        name: 'Mongol Chill Out Bar',
        address: 'Курмангазы, <strong>43</strong>',
      },
      {
        center: [43.163206, 77.051503],
        logo: 'images/shymbulak.webp',
        name: 'Станция «Медеу - Чимбулак»',
        address: 'Керей-Жанибек Хандар, <strong>640/1​</strong>',
      },
      {
        center: [43.262378, 76.983885],
        logo: 'images/compass.webp',
        name: 'Compass',
        address: 'Сагадата Нурмагамбетова, <strong>520</strong>',
      },
      {
        center: [43.272053, 76.931271],
        logo: 'images/compass.webp',
        name: 'Compass',
        address: 'Коммунальная, <strong>8</strong>',
      },
      {
        center: [43.411032, 76.982527],
        logo: 'images/compass.webp',
        name: 'Compass',
        address: 'Трасса Алматы-Капчагай, <strong>5/1</strong>',
      },
      {
        center: [43.177832, 76.849063],
        logo: 'images/магазин.webp',
        name: 'Келеке',
        address: '​Кали Надырова, <strong>1</strong>',
      },
      {
        center: [43.220756, 76.891723],
        logo: 'images/магазин.webp',
        name: 'КелекЕ',
        address: 'Розыбакиева, <strong>153</strong>а',
      },
    ],
  },
];

const groupsNur = [
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [51.126198,71.471725],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address:
          'Тауелсиздик, <strong>48</strong>, Мечеть <strong>Әзірет Султан</strong>',
      },
      {
        center: [51.156659,71.516614],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address: 'Қобыланды батыр, <strong>3</strong>, Мечеть <strong>Aq Meshit</strong> цокольный этаж',
      },
      {
        center: [51.145263,71.406965],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address: 'Қорғалжын, <strong>3</strong>',
      },
      {
        center: [51.126573,71.415544],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address: 'Қабанбай батыр, <strong>36</strong>',
      },
      {
        center: [51.148704,71.472839],
        logo: 'images/caviar-house-icon.webp',
        name: 'Caviar Hause',
        address: 'Петрова, <strong>24</strong>, <strong>Евразия-1</strong> цокольный этаж, 099 бутик',
      },
      {
        center: [51.13825,71.410747],
        logo: 'images/caviar-house-icon.webp',
        name: 'Caviar Hause',
        address: 'Туран, <strong>24</strong>, <strong>ТРЦ Сарыарқа</strong>',
      },
      {
        center: [51.083909,71.440652],
        logo: 'images/caviar-house-icon.webp',
        name: 'Caviar Hause',
        address: 'Фариза Онгарсынова, <strong>6</strong>',
      },
      {
        center: [51.127415, 71.40136],
        logo: 'images/магазин.webp',
        name: 'Алкомаркет',
        address: 'Сығанақ',
      },
      {
        center: [51.139545,71.369721],
        logo: 'images/магазин.webp',
        name: 'магазин Ақшам',
        address: 'Ильяса Омарова <strong>23</strong>',
      },
      {
        center: [51.123374, 71.524875],
        logo: 'images/магазин.webp',
        name: 'Магазин Нағипа',
        address: 'Құлагер',
      },
      {
        center: [51.129138, 71.368257],
        logo: 'images/магазин.webp',
        name: 'Мини маркет Базар',
        address: 'Е-11 <strong>10/1</strong>',
      },
      {
        center: [51.124504,71.395062],
        logo: 'images/магазин.webp',
        name: 'Алко Холл',
        address: 'Толе би <strong>46</strong>',
      },
    ],
  },
]

const groupsTaraz = [
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [43.005980, 71.805417],
        logo: 'images/магазин.webp',
        name: 'Арзан маркет',
        address: 'Село <strong>Ақшолақ</strong>',
      },
      {
        center: [42.971689, 71.529981],
        logo: 'images/магазин.webp',
        name: 'супермаркет Достық Март',
        address: 'Село <strong>Байзак</strong>',
      },
      {
        center: [42.973024, 71.527782],
        logo: 'images/магазин.webp',
        name: 'магазин Тулпар',
        address: 'Село <strong>Байзак</strong>',
      },
      {
        center: [42.974693, 71.525296],
        logo: 'images/магазин.webp',
        name: 'магазин Арсен',
        address: 'Село <strong>Байзак</strong>',
      },
      {
        center: [42.981822, 71.526230],
        logo: 'images/магазин.webp',
        name: 'Байзақ маркет',
        address: 'Село <strong>Байзак</strong>',
      },
      {
        center: [42.972873, 71.524213],
        logo: 'images/магазин.webp',
        name: 'магазин Алихан',
        address: 'Село <strong>Байзак</strong>',
      },
      {
        center: [43.014940, 71.509240],
        logo: 'images/магазин.webp',
        name: 'магазин Үміт',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [43.013242, 71.519711],
        logo: 'images/магазин.webp',
        name: 'минимаркет Керемет',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [42.993760, 71.432613],
        logo: 'images/магазин.webp',
        name: 'магазин Аяулым',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [42.996705, 71.512198],
        logo: 'images/магазин.webp',
        name: 'магазин Жанерке',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [42.917185, 71.359155],
        logo: 'images/магазин.webp',
        name: 'магазин Дүкен',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [43.023834, 71.516006],
        logo: 'images/магазин.webp',
        name: 'магазин Мақсат',
        address: 'Село <strong>Сарыкемер</strong>',
      },     
      {
        center: [43.001023, 71.507524],
        logo: 'images/магазин.webp',
        name: 'магазин Бақдаулет',
        address: 'Село <strong>Сарыкемер</strong>',
      },
      {
        center: [43.011757, 71.516964],
        logo: 'images/магазин.webp',
        name: 'минимаркет Дастархан',
        address: 'Село <strong>Сарыкемер</strong>',
      }, 
      {
        center: [42.993229, 72.091612],
        logo: 'images/магазин.webp',
        name: 'магазин Жанна',
        address: 'Село <strong>Акыртөбе</strong>',
      },  
      {
        center: [42.987857, 72.108333],
        logo: 'images/магазин.webp',
        name: 'магазин Фарт',
        address: 'Село <strong>Акыртөбе</strong>',
      },
      {
        center: [42.995324, 72.104060],
        logo: 'images/магазин.webp',
        name: 'магазин Балжан',
        address: 'Село <strong>Акыртөбе</strong>',
      },
      {
        center: [42.619024, 70.755815],
        logo: 'images/магазин.webp',
        name: 'минимаркет Арман',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.621383, 70.760228],
        logo: 'images/магазин.webp',
        name: 'минимаркет Айала',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.626073, 70.755874],
        logo: 'images/магазин.webp',
        name: 'магазин Салтанат',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.619962, 70.762288],
        logo: 'images/магазин.webp',
        name: 'магазин Ляззат',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.623570, 70.772616],
        logo: 'images/магазин.webp',
        name: 'минимаркет Шағын 7',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.617152, 70.776922],
        logo: 'images/магазин.webp',
        name: 'магазин Акниет',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.614436, 70.779926],
        logo: 'images/магазин.webp',
        name: 'минимаркет Аружан',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.624578, 70.766399],
        logo: 'images/магазин.webp',
        name: 'минимаркет МЕР',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.628967, 70.776248],
        logo: 'images/магазин.webp',
        name: 'минимаркет Шолпанай',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.622954, 70.771264],
        logo: 'images/магазин.webp',
        name: 'минимаркет Жасыл',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.621202, 70.770668],
        logo: 'images/магазин.webp',
        name: 'магазин Ахан',
        address: 'Село <strong>Бауржан Момышулы</strong>',
      },
      {
        center: [42.629038, 70.679321],
        logo: 'images/магазин.webp',
        name: 'минимаркет Мөлдір',
        address: 'Село <strong>Карасаз</strong>',
      },
      {
        center: [42.633538, 70.676488],
        logo: 'images/магазин.webp',
        name: 'минимаркет Ерсайын',
        address: 'Село <strong>Карасаз</strong>',
      },
      {
        center: [42.631954, 70.685501],
        logo: 'images/магазин.webp',
        name: 'минимаркет Мансұр',
        address: 'Село <strong>Карасаз</strong>',
      },
      {
        center: [42.636960, 70.695285],
        logo: 'images/магазин.webp',
        name: 'магазин Жанна',
        address: 'Село <strong>Карасаз</strong>',
      },
      {
        center: [43.079590, 71.455256],
        logo: 'images/магазин.webp',
        name: 'магазин Жібек жолы',
        address: 'Село <strong>Мырзатай</strong>',
      },
      {
        center: [43.083944, 71.451191],
        logo: 'images/магазин.webp',
        name: 'минимаркет Береке',
        address: 'Село <strong>Мырзатай</strong>',
      },
      {
        center: [42.976272, 71.423573],
        logo: 'images/магазин.webp',
        name: 'магазин Сұлтан',
        address: 'Село <strong>Бурыл</strong>',
      },
      {
        center: [42.965275, 71.420754],
        logo: 'images/магазин.webp',
        name: 'магазин Сәтті',
        address: 'Село <strong>Бурыл</strong>',
      },
      {
        center: [42.973527, 71.422971],
        logo: 'images/магазин.webp',
        name: 'магазин Ажар',
        address: 'Село <strong>Бурыл</strong>',
      },
      {
        center: [42.891432, 71.362642],
        logo: 'images/магазин.webp',
        name: 'супермаркет Куаныш',
        address: 'Арай <strong>2</strong>',
      },
      {
        center: [42.906952,71.342979],
        logo: 'images/магазин.webp',
        name: 'супермаркет Меруерт',
        address: 'Рахимова <strong>63</strong>',
      },
      {
        center: [42.896573, 71.323949],
        logo: 'images/магазин.webp',
        name: 'супермаркет Алатау',
        address: 'Тауке хана',
      },
      {
        center: [42.894096, 71.319906],
        logo: 'images/магазин.webp',
        name: 'супермаркет Балнур',
        address: 'Тауке хана',
      },
      {
        center: [42.900656, 71.330326],
        logo: 'images/магазин.webp',
        name: 'минимаркет Салтанат',
        address: 'Тауке хана',
      },
      {
        center: [42.900485, 71.330797],
        logo: 'images/магазин.webp',
        name: 'минимаркет Раушан',
        address: 'Тауке хана',
      },
      {
        center: [42.876941,71.31628],
        logo: 'images/магазин.webp',
        name: 'магазин Nasip',
        address: 'Мукан Атабаева <strong>103</strong>',
      },
      {
        center: [42.877932, 71.370988],
        logo: 'images/магазин.webp',
        name: 'магазин Eco Vido',
        address: 'Ташкентская <strong>191</strong>',
      },
      {
        center: [42.894459,71.373323],
        logo: 'images/магазин.webp',
        name: 'магазин Eco Vido',
        address: 'Айтиева <strong>12</strong>',
      },
      {
        center: [42.899142, 71.38731],
        logo: 'images/магазин.webp',
        name: 'Оптовая точка напитков',
        address: 'Байзак батыра <strong>13</strong>',
      },
      {
        center: [42.909250, 71.452298],
        logo: 'images/магазин.webp',
        name: 'магазин Береке',
        address: 'Барысхан <strong>151</strong>',
      },
      {
        center: [42.884137,71.336799],
        logo: 'images/магазин.webp',
        name: 'Оптовая точка напитков',
        address: 'Шостакович',
      },
      {
        center: [42.899737,71.367421],
        logo: 'images/pixel-cinema-icon.webp',
        name: 'кинотеатр Pixel-cinema',
        address: 'Толе би <strong>63</strong>',
      },
      {
        center: [42.921639,71.413011],
        logo: 'images/магазин.webp',
        name: 'магазин Бакбереке',
        address: 'Мамбет батыра',
      },
      {
        center: [42.886011,71.307683],
        logo: 'images/магазин.webp',
        name: 'минимаркет Нур',
        address: 'Тауке хана',
      },
    ],
  },
]

const groupsКок = [
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [53.308122, 69.386582],
        logo: 'images/магазин.webp',
        name: 'магазин Арай',
        address: 'Назарбаева <strong>3/7</strong>',
      },
      {
        center: [53.308316, 69.385298],
        logo: 'images/магазин.webp',
        name: 'магазин Расул',
        address: 'Назарбаева <strong>3</strong>',
      },
      {
        center: [53.279925, 69.369065],
        logo: 'images/магазин.webp',
        name: 'минимаркет Женіс',
        address: 'Акана-Сері <strong>51</strong>',
      },
      {
        center: [53.292161, 69.394946],
        logo: 'images/магазин.webp',
        name: 'минимаркет Астана',
        address: 'Габдулина <strong>30</strong>',
      },

    ]
  }
]

const groupsShym = [
  {
    style: 'islands#redIcon',
    items: [      
      {
        center: [42.362812, 69.63573],
        logo: 'images/qurma-icon.webp',
        name: 'Qurma',
        address: 'Назарбаева <strong>53а</strong>',
      },
      {
        center: [42.318193, 69.588224],
        logo: 'images/kausar-icon.webp',
        name: 'Каусар',
        address: 'Момышулы <strong>5</strong>',
      },
      {
        center: [42.318615, 69.589748],
        logo: 'images/mizam-icon.webp',
        name: 'Мизам',
        address: 'Момышулы <strong>6</strong>',
      },
      {
        center: [42.290791, 69.601104],
        logo: 'images/doni-icon.webp',
        name: 'Дони-халал',
        address: 'Камал <strong>11/1</strong>',
      },
      {
        center: [42.321461, 69.604927],
        logo: 'images/khankebab-icon.webp',
        name: 'Khan Kebab',
        address: 'Қазыбек би <strong>49</strong>',
      },
      {
        center: [42.336332, 69.599573],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Спортивный <strong>23</strong>',
      },
      {
        center: [42.318814, 69.594192],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Тәуке хан <strong>14</strong>',
      },
      {
        center: [42.35004, 69.588523],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Рыскулова <strong>49Б</strong>',
      },
      {
        center: [42.316108, 69.593473],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Туркестанская улица <strong>2/2</strong>',
      },
      {
        center: [42.307591, 69.583100],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Жангельдина <strong>3</strong>',
      },
      {
        center: [42.309267, 69.581517],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Қалдаяков <strong>1</strong>',
      },
      {
        center: [42.305186, 69.614638],
        logo: 'images/alidoner-icon.webp',
        name: 'Ali Doner Kebab',
        address: 'Төле би <strong>39</strong>',
      },
      {
        center: [42.317481, 69.588883],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'Момышулы <strong>3</strong>',
      },
      {
        center: [42.339258, 69.639736],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'Рыскулова <strong>49а</strong>',
      },
      {
        center: [42.325867, 69.639275],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'Уалиханова <strong>213/13</strong>',
      },
      {
        center: [42.314634, 69.587895],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'площадь Аль-Фараби <strong>3/1</strong>',
      },
      {
        center: [42.345683, 69.614570],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'ОСО Hyper house',
      },
      {
        center: [42.319401, 69.596051],
        logo: 'images/thepapa-icon.webp',
        name: 'The Папа',
        address: 'Тәуке хан <strong>13</strong>',
      },
      {
        center: [42.325114, 69.576028],
        logo: 'images/магазин.webp',
        name: 'Мейман',
        address: 'Мангельдина <strong>284</strong>',
      },
    ]
  }
]

const centerAlmaty = [43.2455, 76.9163];
const centerNur = [51.1577, 71.4299];
const centerTaraz = [42.8996, 71.3927];
const centerKok = [53.2851, 69.3755];
const centerShym = [42.3155, 69.5869];

setTimeout(() => {
  ymaps.ready(() => init(groupsAlmaty, centerAlmaty, 'mapAlmaty', '.map-Almaty', 20));
  ymaps.ready(() => init(groupsNur, centerNur, 'mapNur', '.map-Nur', 20));
  ymaps.ready(() => init(groupsTaraz, centerTaraz, 'mapTaraz', '.map-Taraz', 20));
  ymaps.ready(() => init(groupsКок, centerKok, 'mapKok', '.map-Kok', 20));
  ymaps.ready(() => init(groupsShym, centerShym, 'mapShym', '.map-Shym', 20));
}, 4000);

function init(groups, center, mapId, mapLeft, zoom) {
  // Создание экземпляра карты.
  var myMap = new ymaps.Map(
      mapId,
      {
        center,
        zoom,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    ),
    // Контейнер для меню.
    menu = $('<ul class="menu"/>');

  for (var i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i]);
  }

  function createMenuGroup(group) {
    // Пункт меню.
    var menuItem = $(
        '<li><a style="display: none;" href="#">' + group.name + '</a></li>',
      ),
      // Коллекция для геообъектов группы.
      collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
      // Контейнер для подменю.
      submenu = $('<ul class="submenu"/>');

    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection);
    // Добавляем подменю.
    menuItem
      .append(submenu)
      // Добавляем пункт в меню.
      .appendTo(menu)
      // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
      .find('a')
      .bind('click', function () {
        if (collection.getParent()) {
          myMap.geoObjects.remove(collection);
          submenu.hide();
        } else {
          myMap.geoObjects.add(collection);
          submenu.show();
        }
      });
    for (var j = 0, m = group.items.length; j < m; j++) {
      createSubMenu(group.items[j], collection, submenu);
    }
  }
  function createSubMenu(item, collection, submenu) {
    // Пункт подменю.
    var submenuItem = $(`
            <a href="#" class="find-btn">
                <li>
                    <div class="menu-left">
                        <div class="menu-left-img">
                            <img src=${item.logo}>
                        </div>
                    </div>
                    <div class="menu-right">
                        <a href="#" class="menu-title">${item.name}</a>
                        <p class="map-address">${item.address}</p>
                    </div>
                </li>
            </a>
        `),
      // Создаем метку.
      placemark = new ymaps.Placemark(item.center, {
        balloonContent: item.name,
      });

    // Добавляем метку в коллекцию.
    collection.add(placemark);
    // Добавляем пункт в подменю.
    submenuItem
      .appendTo(submenu)
      // При клике по пункту подменю открываем/закрываем баллун у метки.
      .find('a')
      .bind('click', function () {
        if (!placemark.balloon.isOpen()) {
          placemark.balloon.open();
        } else {
          placemark.balloon.close();
        }
        return false;
      });
  }

  // Добавляем меню в тэг BODY.
  menu.appendTo($(mapLeft));
  // Выставляем масштаб карты чтобы были видны все группы.
  myMap.setBounds(myMap.geoObjects.getBounds());

  $('.nur-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapAlmaty').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'hidden');
    $('#mapKok').css('visibility', 'hidden');
    $('#mapShym').css('visibility', 'hidden');
    $('#mapNur').css('visibility', 'visible');
    $('.map-Almaty').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Kok').css('display', 'none');
    $('.map-Shym').css('display', 'none');
    $('.map-Nur').css('display', 'block');
  })

  $('.almaty-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'hidden');
    $('#mapKok').css('visibility', 'hidden');
    $('#mapShym').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Kok').css('display', 'none');
    $('.map-Shym').css('display', 'none');
    $('.map-Almaty').css('display', 'block');
  })

  $('.taraz-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'hidden');
    $('#mapKok').css('visibility', 'hidden');
    $('#mapShym').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Almaty').css('display', 'none');
    $('.map-Kok').css('display', 'none');
    $('.map-Shym').css('display', 'none');
    $('.map-Taraz').css('display', 'block');
  })

  $('.kok-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'hidden');
    $('#mapShym').css('visibility', 'hidden');
    $('#mapKok').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Almaty').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Shym').css('display', 'none');
    $('.map-Kok').css('display', 'block');
  })

  $('.shym-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'hidden');
    $('#mapKok').css('visibility', 'hidden');
    $('#mapShym').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Almaty').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Kok').css('display', 'none');
    $('.map-Shym').css('display', 'block');
  })
}
});