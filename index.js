const lead__title = document.querySelector('.lead__title');
const lead__subtitle = document.querySelector('.lead__subtitle');
const lead__figcaption = document.querySelector('.lead__figcaption');
const intro__title = document.querySelector('.intro__title');
const intro__paragraph = document.querySelector('.intro__paragraph');
const intro__list_item1 = document.querySelector('.intro__list-item1');
const intro__list_item2 = document.querySelector('.intro__list-item2');
const intro__list_item3 = document.querySelector('.intro__list-item3');
const intro__list_item4 = document.querySelector('.intro__list-item4');
const intro__list_item5 = document.querySelector('.intro__list-item5');
const places__place_title1 = document.querySelector('.places__place-title1');
const cursh__p1 = document.querySelector('[data-kursh-p="1"]');
const cursh__p2 = document.querySelector('[data-kursh-p="2"]');
const places__place_title2 = document.querySelector('.places__place-title2');
const kolsky_paragraph1 = document.querySelector('[data-kolsky-paragraph="1"]');
const kolsky_paragraph2 = document.querySelector('[data-kolsky-paragraph="2"]');
const places__place_title3 = document.querySelector('.places__place-title3');
const altay_paragraph1 = document.querySelector('[data-altay-paragraph="1"]');
const altay_paragraph2 = document.querySelector('[data-altay-paragraph="2"]');
const places__place_title4 = document.querySelector('.places__place-title4');
const baikal_paragraph1 = document.querySelector('[data-baikal-paragraph="1"]');
const baikal_paragraph2 = document.querySelector('[data-baikal-paragraph="2"]');
const places__place_title5 = document.querySelector('.places__place-title5');
const karelia_paragraph = document.querySelector('[data-karelia="1"]');
const cover_title = document.querySelector('.cover__title');
const cover__subtitle = document.querySelector('.cover__subtitle');
const mapsLink = document.querySelector('[data-maps]');
const weatherLink = document.querySelector('[data-weather]');
const sheduleLink = document.querySelector('[data-schedule]');
const calendarLink = document.querySelector('[data-calendar]');
const travelsLink = document.querySelector('[data-travels]');
const copyRights = document.querySelector('.footer__copyrights');

let state = 'ru';

const translate = () => {
  if (state === 'ru') {
    ruButton.classList.add('header__lang-link_active');
    enButton.classList.remove('header__lang-link_active');
    document.title = 'Путешествия по России';
    lead__title.textContent = 'Путешествия по России';
    lead__subtitle.textContent =
      'Настоящая страна не в выпусках новостей, а здесь.';
    lead__figcaption.textContent = 'ваша полка — верхняя';
    intro__title.textContent = 'Чего мы там не видели?';
    intro__paragraph.textContent = `По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют
    провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая
    вселенная
    с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты
    можно
    без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая
    молодая
    мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной
    стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.`;
    intro__list_item1.innerHTML = `<li class="intro__list-item intro__list-item1">
    Часовых поясов <span class="intro__numbers">11</span>
  </li>`;
    intro__list_item2.innerHTML = `<li class="intro__list-item intro__list-item2">Объектов природного наследия ЮНЕСКО <span
  class="intro__numbers">12</span></li>`;
    intro__list_item3.innerHTML = `<li class="intro__list-item intro__list-item3">Объектов культурного наследия ЮНЕСКО <span
  class="intro__numbers">16</span></li>`;
    intro__list_item4.innerHTML = `<li class="intro__list-item intro__list-item4">Природных заповедников <span class="intro__numbers">105</span>
  </li>`;
    intro__list_item5.innerHTML = `<li class="intro__list-item intro__list-item5">Аэропортов <span class="intro__numbers">241</span></li>`;
    places__place_title1.textContent = 'Куршская коса';
    cursh__p1.textContent = `Здесь, посреди лесов и песчаных дюн, вы сможете увидеть
    два водных
    горизонта — спокойного Куршского
    залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на
    краю российского анклава.`;
    cursh__p2.textContent = `На этом Калининградская область не заканчивается. Для
    путешественника и
    исследователя там же по соседству
    — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских
    городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального,
    прохладного моря.`;
    places__place_title2.textContent = 'Кольский';
    kolsky_paragraph1.textContent = `Почти весь полуостров находится за Полярным
    кругом. Саамская тундра, от
    которой на юг —
    тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.`;
    kolsky_paragraph2.textContent = `Возможно, вы смотрели Звягинцева и даже слышали
    историю арктического
    фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках
    географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов
    вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом
    в Мурманск.`;
    places__place_title3.textContent = 'Алтай';
    altay_paragraph1.textContent = `Алтай — одно из красивейших мест в России.
    В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и
    озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным
    воздухом.`;
    altay_paragraph2.textContent = `Климат на Алтае умеренный, поэтому ехать сюда
    лучше всего летом. Так вы
    увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на
    равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.`;
    places__place_title4.textContent = 'Байкал';
    baikal_paragraph1.textContent = `Всем известен Байкал как крупнейшее озеро
    в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в
    России.`;
    baikal_paragraph2.textContent = `Конечно, это всё так. Но Байкал ещё идеальное
    место для соревнований по
    скийорингу. Это такой вид спорта, когда лыжник привязывает себя
    к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале
    «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.`;
    places__place_title5.textContent = 'Карелия';
    karelia_paragraph.textContent = `Сибирь заканчивается не на Урале, а в Карелии:
    образующая тайгу сибирская
    лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских
    национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем
    полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный.
    В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья
    в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.`;
    cover_title.innerHTML = `<h2 class="cover__title">До Байкала &nbsp;«на собаках»</h2>`;
    cover__subtitle.textContent = `По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на
    электричках.`;
    mapsLink.textContent = 'Карты';
    weatherLink.textContent = 'Погода';
    sheduleLink.textContent = 'Расписания';
    calendarLink.textContent = 'Календарь';
    travelsLink.textContent = 'Путешествия';
    copyRights.innerHTML = `<p class="footer__copyrights">&copy;2022. Александров Артем</p>`;
  } else {
    ruButton.classList.remove('header__lang-link_active');
    enButton.classList.add('header__lang-link_active');
    document.title = 'Traveling around Russia';
    lead__title.textContent = 'Traveling around Russia';
    lead__subtitle.textContent =
      'The real country is not in the news, but here.';
    lead__figcaption.textContent = 'your place is the top';
    intro__title.textContent = "What haven't we seen there yet?";
    intro__paragraph.textContent = `According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan
    spend a holiday in your home country. Like, what haven’t we seen here at home? In fact, Russia is a whole
    Universe
    with the gentle sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau. And also see all these beauties
    Can
    without millions in your account, a foreign passport and many hours of flights. Like, for example, Vera Bashmakova - brave
    young
    a mother who grabbed three children in her arms, put them in her Lada and drove 20 thousand kilometers around her native
    country. We have selected and described some interesting places worthy of your holiday.`;
    intro__list_item1.innerHTML = `<li class="intro__list-item intro__list-item1">
        Time zones <span class="intro__numbers">11</span>
      </li>`;
    intro__list_item2.innerHTML = `<li class="intro__list-item intro__list-item2">UNESCO Natural Heritage Sites <span
  class="intro__numbers">12</span></li>`;
    intro__list_item3.innerHTML = `<li class="intro__list-item intro__list-item3">UNESCO cultural heritage sites <span
  class="intro__numbers">16</span></li>`;
    intro__list_item4.innerHTML = `<li class="intro__list-item intro__list-item4">Nature reserves <span class="intro__numbers">105</span>
  </li>`;
    intro__list_item5.innerHTML = `<li class="intro__list-item intro__list-item5">Airports <span class="intro__numbers">241</span></li>`;
    places__place_title1.textContent = 'Curonian Spit';
    cursh__p1.textContent = `Here, among forests and sand dunes, you can see
    two water
    horizon - calm Curonian
    the bay on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on
    edge of the Russian enclave.`;
    cursh__p2.textContent = `The Kaliningrad region does not end there. For
    traveler and
    researcher right next door
    - the westernmost point of Russia, the Baltic Spit, - and the German heritage of a scattering of small coastal
    cities. The atmosphere of these places eliminates fuss, immersing you in the tranquility of nature and the smell of steel,
    cool sea.`;
    places__place_title2.textContent = 'Kolsky';
    kolsky_paragraph1.textContent = `Almost the entire peninsula is located beyond the Polar
    all around. Sami tundra, from
    which to the south -
    taiga, and to the north - the Arctic Ocean, pretending to be the Barents Sea.`;
    kolsky_paragraph2.textContent = `You may have watched Zvyagintsev and even heard
    Arctic history
    festival in Teriberka. Perhaps the word “Khibiny” did not remain under the snow of school memories of lessons
    geography. Perhaps you were not interested in the ultra-deep well piercing the earth's crust, but from apatites
    Apathy has been covering you for a long time. But your dream of seeing the Northern Lights begins to come true with a ticket
    to Murmansk.`;
    places__place_title3.textContent = 'Altai';
    altay_paragraph1.textContent = `Altai is one of the most beautiful places in Russia.
    Primarily because of the mountains: if you drive along the ridge, you will see slopes strewn with pine trees, mountain rivers and
    lakes And if you open the windows in your car, you will be able to get acquainted with the invisible miracle of these places - the mountain
    air.`;
    altay_paragraph2.textContent = `The climate in Altai is moderate, so go here
    best in summer. So you
    you will see all the diversity of local flora and fauna. Elks roam through the forests of Altai, eagles fly over the ridges, and
    Roe deer graze on the plains. And the famous Pallas' cat is also an inhabitant of the Altai region.`;
    places__place_title4.textContent = 'Baikal';
    baikal_paragraph1.textContent = `Everyone knows Baikal as the largest lake
    in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in
    Russia.`;
    baikal_paragraph2.textContent = `Of course, this is all true. But Baikal is still perfect
    place for competitions
    skioring. This is a sport where the skier ties himself
    to the motorcycle, and the tandem tries to develop as much speed as possible on the ice. In March 2019 at the festival
    The Baikal Mile set a world record of 197.011 km/h.`;
    places__place_title5.textContent = 'Karelia';
    karelia_paragraph.textContent = `Siberia ends not in the Urals, but in Karelia:
    taiga-forming Siberian
    larch does not grow west of Vodlozero. But here it reaches 30 meters - Karelian forests
    National parks, due to impassable swamps, have never known the axe. Some pine trees are already older than
    half a millennium. Touch a living creature that saw the sun before Ivan the Terrible saw it.
    In a virgin forest you won’t find a trail for a hundred kilometers. And on rare paths there are trees
    a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here.`;
    cover_title.innerHTML = `<h2 class="cover__title">To Baikal <br> «on dogs»</h2>`;
    cover__subtitle.textContent = `Based on the educational topic about the Trans-Siberian Railway - a journey from the capital to Baikal by
    by train.`;
    mapsLink.textContent = 'Maps';
    weatherLink.textContent = 'Weather';
    sheduleLink.textContent = 'Schedule';
    calendarLink.textContent = 'Calendar';
    travelsLink.textContent = 'Travels';
    copyRights.innerHTML = `<p class="footer__copyrights">&copy;2022. Artem Aleksandrov</p>`;
  }
};

const enButton = document.querySelector('#en');
const ruButton = document.querySelector('#ru');
ruButton.addEventListener('click', (e) => {
  e.preventDefault();
  state = 'ru';
  localStorage.setItem('language', 'ru');
  translate();
});
enButton.addEventListener('click', (e) => {
  e.preventDefault();
  state = 'en';
  localStorage.setItem('language', 'en');
  translate();
});

const checkLanguage = () => {
  if (localStorage.getItem('language')) {
    state = localStorage.getItem('language');
    translate();
  }
};

checkLanguage();
