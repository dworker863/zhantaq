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
    ],
  },
]

const groupsTaraz = [
  {
    style: 'islands#redIcon',
    items: [
      {
        center: [42.8996, 71.3927],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address:
          'Тауелсиздик, <strong>48</strong>, Мечеть <strong>Әзірет Султан</strong>',
      },
      {
        center: [42.8996, 71.3627],
        logo: 'images/mumtaz-icon.webp',
        name: 'Мумтаз',
        address:
          'Тауелсиздик, <strong>48</strong>, Мечеть <strong>Әзірет Султан</strong>',
      },      
    ],
  },
]

const centerAlmaty = [43.2455, 76.9163];
const centerNur = [51.1577, 71.4299];
const centerTaraz = [42.8996, 71.3927];

// [51.157738,71.429947];


setTimeout(() => {
  ymaps.ready(() => init(groupsAlmaty, centerAlmaty, 'mapAlmaty', '.map-Almaty', 20));
  ymaps.ready(() => init(groupsNur, centerNur, 'mapNur', '.map-Nur', 20));
  ymaps.ready(() => init(groupsTaraz, centerTaraz, 'mapTaraz', '.map-Taraz', 20));
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
    $('#mapNur').css('visibility', 'visible');
    $('.map-Almaty').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Nur').css('display', 'block');
  })

  $('.almaty-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Taraz').css('display', 'none');
    $('.map-Almaty').css('display', 'block');
  })

  $('.taraz-btn').on('click', function(e) {
    e.preventDefault();
    $('#mapNur').css('visibility', 'hidden');
    $('#mapAlmaty').css('visibility', 'hidden');
    $('#mapTaraz').css('visibility', 'visible');
    $('.map-Nur').css('display', 'none');
    $('.map-Almaty').css('display', 'none');
    $('.map-Taraz').css('display', 'block');
  })
}
});