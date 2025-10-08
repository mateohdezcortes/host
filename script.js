/* ===== THEME: init from storage / system ===== */
const THEME_KEY = 'overlord_theme';
function getSystemTheme(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
function applyTheme(theme){
  if(theme === 'light'){ document.documentElement.setAttribute('data-theme','light'); }
  else{ document.documentElement.removeAttribute('data-theme'); } // dark por defecto
  const btn = document.getElementById('themeToggle');
  if(btn){ btn.textContent = theme==='light' ? '🌞' : '🌙'; btn.title = theme==='light'?'Cambiar a oscuro':'Cambiar a claro'; }
}
let theme = localStorage.getItem(THEME_KEY) || getSystemTheme();
applyTheme(theme);
if(window.matchMedia){
  window.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', (e)=>{
    if(!localStorage.getItem(THEME_KEY)){
      theme = e.matches ? 'light' : 'dark';
      applyTheme(theme);
    }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      theme = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
      applyTheme(theme);
      localStorage.setItem(THEME_KEY, theme);
    });
  }
});

/* ============================
   I18N (ES, EN, FR, PT, DE, IT, JA, KO, ZH, RU)
============================ */
const I18N = {
  es: {
    nav_home:'Inicio', nav_featured:'Destacados', nav_offers:'Ofertas', nav_contact:'Contacto',
    promo_kicker:'Descuento activo',
    hero_title:'Aprovecha 20% de descuento en viajes a Europa antes del 1 de enero de 2026',
    hero_sub:'Reserva desde hoy a meses sin intereses. Atención 24/7 personal altamente capacitado. Más de dos millones de alojamientos y tours.',
    cta_see_offers:'Ver ofertas', cta_search:'Buscar',
    form_type:'Tipo', type_hotel:'Hotel', type_trip:'Viaje',
    form_where:'Busca hotel o lugar', form_checkin:'Fecha de entrada', form_checkout:'Fecha de salida',
    form_adults:'Adultos', form_kids:'Niños', form_airline:'Aerolínea (sugerida)', form_airlogo:'Logo', form_search:'Buscar',
    sec_featured:'Destacados', sec_offers:'Ofertas por región', sec_contact:'Contacto y más',
    sec_disclaimer:'*Los precios mostrados son “desde” y no incluyen IVA. Aplican términos y condiciones.',
    rate_note:'*Tipos de cambio aproximados; los precios finales pueden variar.',
    sec_reserve:'Reserva rápida',
    f_name:'Nombre', f_email:'Email', f_phone:'Teléfono', f_dest:'Destino', f_in:'Entrada', f_out:'Salida', f_pax:'Pasajeros', f_msg:'Mensaje',
    send_email:'Enviar por Email', send_wa:'Enviar por WhatsApp',
    legal_terms:'Términos de uso', legal_privacy:'Privacidad',
    includes:'Incluye',
    see:'Ver',
    book:'Reservar',
    no_matches:'No encontramos coincidencias. Prueba con otra ciudad o país.'
  },
  en: {
    nav_home:'Home', nav_featured:'Featured', nav_offers:'Deals', nav_contact:'Contact',
    promo_kicker:'Active discount',
    hero_title:'Get 20% off on Europe trips before January 1, 2026',
    hero_sub:'Book from today with interest-free installments. 24/7 support by highly trained staff. Over two million stays & tours.',
    cta_see_offers:'See offers', cta_search:'Search',
    form_type:'Type', type_hotel:'Hotel', type_trip:'Trip',
    form_where:'Search hotel or place', form_checkin:'Check-in', form_checkout:'Check-out',
    form_adults:'Adults', form_kids:'Kids', form_airline:'Airline (suggested)', form_airlogo:'Logo', form_search:'Search',
    sec_featured:'Featured', sec_offers:'Regional deals', sec_contact:'Contact & more',
    sec_disclaimer:'*Displayed prices are “from” and do not include taxes. Terms apply.',
    rate_note:'*Approximate exchange rates; final prices may vary.',
    sec_reserve:'Quick reservation',
    f_name:'Full name', f_email:'Email', f_phone:'Phone', f_dest:'Destination', f_in:'Check-in', f_out:'Check-out', f_pax:'Passengers', f_msg:'Message',
    send_email:'Send by Email', send_wa:'Send via WhatsApp',
    legal_terms:'Terms of use', legal_privacy:'Privacy',
    includes:'Includes',
    see:'See',
    book:'Book',
    no_matches:'No matches found. Try another city or country.'
  },
 fr: {
    nav_home:'Accueil', nav_featured:'À la une', nav_offers:'Offres', nav_contact:'Contact',
    promo_kicker:'Promo en cours',
    hero_title:'Profitez de 20% de réduction sur l’Europe avant le 1er janvier 2026',
    hero_sub:'Réservez dès aujourd’hui en plusieurs fois sans intérêt. Assistance 24h/24 par du personnel hautement qualifié. Plus de deux millions d’hébergements et circuits.',
    cta_see_offers:'Voir les offres', cta_search:'Rechercher',
    form_type:'Type', type_hotel:'Hôtel', type_trip:'Voyage',
    form_where:'Rechercher un hôtel ou un lieu', form_checkin:'Arrivée', form_checkout:'Départ',
    form_adults:'Adultes', form_kids:'Enfants', form_airline:'Compagnie (suggestion)', form_airlogo:'Logo', form_search:'Rechercher',
    sec_featured:'À la une', sec_offers:'Offres par région', sec_contact:'Contact & plus',
    sec_disclaimer:'*Prix “à partir de”, taxes non incluses. Conditions applicables.',
    rate_note:'*Taux de change approximatifs ; les prix finaux peuvent varier.',
    sec_reserve:'Réservation rapide',
    f_name:'Nom complet', f_email:'E-mail', f_phone:'Téléphone', f_dest:'Destination', f_in:'Arrivée', f_out:'Départ', f_pax:'Personnes', f_msg:'Message',
    send_email:'Envoyer par e-mail', send_wa:'Envoyer via WhatsApp',
    legal_terms:'Conditions d’utilisation', legal_privacy:'Confidentialité',
    includes:'Comprend',
    see:'Voir',
    book:'Réserver',
    no_matches:'Aucune correspondance. Essayez une autre ville ou un autre pays.'
  },
  pt: {
    nav_home:'Início', nav_featured:'Destaques', nav_offers:'Ofertas', nav_contact:'Contato',
    promo_kicker:'Promoção ativa',
    hero_title:'Aproveite 20% de desconto na Europa antes de 1º de janeiro de 2026',
    hero_sub:'Reserve hoje em parcelas sem juros. Suporte 24/7 com equipe altamente capacitada. Mais de dois milhões de hospedagens e passeios.',
    cta_see_offers:'Ver ofertas', cta_search:'Buscar',
    form_type:'Tipo', type_hotel:'Hotel', type_trip:'Viagem',
    form_where:'Busque hotel ou lugar', form_checkin:'Check-in', form_checkout:'Check-out',
    form_adults:'Adultos', form_kids:'Crianças', form_airline:'Companhia (sugerida)', form_airlogo:'Logo', form_search:'Buscar',
    sec_featured:'Destaques', sec_offers:'Ofertas por região', sec_contact:'Contato e mais',
    sec_disclaimer:'*Preços “a partir de”, impostos não incluídos. Termos aplicáveis.',
    rate_note:'*Taxas de câmbio aproximadas; os preços finais podem variar.',
    sec_reserve:'Reserva rápida',
    f_name:'Nome completo', f_email:'E-mail', f_phone:'Telefone', f_dest:'Destino', f_in:'Entrada', f_out:'Saída', f_pax:'Passageiros', f_msg:'Mensagem',
    send_email:'Enviar por e-mail', send_wa:'Enviar via WhatsApp',
    legal_terms:'Termos de uso', legal_privacy:'Privacidade',
    includes:'Inclui',
    see:'Ver',
    book:'Reservar',
    no_matches:'Nenhum resultado. Tente outra cidade ou país.'
  },
  de: {
    nav_home:'Start', nav_featured:'Highlights', nav_offers:'Angebote', nav_contact:'Kontakt',
    promo_kicker:'Aktiver Rabatt',
    hero_title:'Sparen Sie 20% auf Europareisen bis zum 1. Januar 2026',
    hero_sub:'Buchen Sie ab heute in zinsfreien Raten. 24/7-Support durch hochqualifiziertes Personal. Über zwei Millionen Unterkünfte & Touren.',
    cta_see_offers:'Angebote ansehen', cta_search:'Suchen',
    form_type:'Typ', type_hotel:'Hotel', type_trip:'Reise',
    form_where:'Hotel oder Ort suchen', form_checkin:'Anreise', form_checkout:'Abreise',
    form_adults:'Erwachsene', form_kids:'Kinder', form_airline:'Fluggesellschaft (Vorschlag)', form_airlogo:'Logo', form_search:'Suchen',
    sec_featured:'Highlights', sec_offers:'Angebote nach Region', sec_contact:'Kontakt & mehr',
    sec_disclaimer:'*Preise „ab“, Steuern nicht inklusive. Es gelten Bedingungen.',
    rate_note:'*Ungefähre Wechselkurse; Endpreise können variieren.',
    sec_reserve:'Schnelle Reservierung',
    f_name:'Vollständiger Name', f_email:'E-Mail', f_phone:'Telefon', f_dest:'Ziel', f_in:'Anreise', f_out:'Abreise', f_pax:'Personen', f_msg:'Nachricht',
    send_email:'Per E-Mail senden', send_wa:'Per WhatsApp senden',
    legal_terms:'Nutzungsbedingungen', legal_privacy:'Datenschutz',
    includes:'Enthält',
    see:'Ansehen',
    book:'Buchen',
    no_matches:'Keine Treffer. Versuchen Sie eine andere Stadt oder ein anderes Land.'
  },
  it: {
    nav_home:'Home', nav_featured:'In evidenza', nav_offers:'Offerte', nav_contact:'Contatti',
    promo_kicker:'Sconto attivo',
    hero_title:'Ottieni il 20% di sconto sui viaggi in Europa prima del 1° gennaio 2026',
    hero_sub:'Prenota da oggi con rate senza interessi. Assistenza 24/7 da parte di personale altamente qualificato. Oltre due milioni di soggiorni e tour.',
    cta_see_offers:'Vedi offerte', cta_search:'Cerca',
    form_type:'Tipo', type_hotel:'Hotel', type_trip:'Viaggio',
    form_where:'Cerca hotel o luogo', form_checkin:'Check-in', form_checkout:'Check-out',
    form_adults:'Adulti', form_kids:'Bambini', form_airline:'Compagnia aerea (suggerita)', form_airlogo:'Logo', form_search:'Cerca',
    sec_featured:'In evidenza', sec_offers:'Offerte regionali', sec_contact:'Contatti e altro',
    sec_disclaimer:'*I prezzi visualizzati sono "a partire da" e non includono le tasse. Si applicano termini e condizioni.',
    rate_note:'*Tassi di cambio approssimativi; i prezzi finali possono variare.',
    sec_reserve:'Prenotazione rapida',
    f_name:'Nome completo', f_email:'Email', f_phone:'Telefono', f_dest:'Destinazione', f_in:'Check-in', f_out:'Check-out', f_pax:'Passeggeri', f_msg:'Messaggio',
    send_email:'Invia via Email', send_wa:'Invia via WhatsApp',
    legal_terms:'Termini di utilizzo', legal_privacy:'Privacy',
    includes:'Include',
    see:'Vedi',
    book:'Prenota',
    no_matches:'Nessun risultato trovato. Prova con un\'altra città o paese.'
  },
  ja: {
    nav_home:'ホーム', nav_featured:'注目', nav_offers:'お得情報', nav_contact:'お問い合わせ',
    promo_kicker:'アクティブ割引',
    hero_title:'2026年1月1日までにヨーロッパ旅行で20％オフをゲット',
    hero_sub:'今すぐ分割払いで予約。高度に訓練されたスタッフによる24時間年中無休のサポート。200万を超える宿泊施設とツアー。',
    cta_see_offers:'オファーを見る', cta_search:'検索',
    form_type:'タイプ', type_hotel:'ホテル', type_trip:'旅行',
    form_where:'ホテルまたは場所を検索', form_checkin:'チェックイン', form_checkout:'チェックアウト',
    form_adults:'大人', form_kids:'子供', form_airline:'航空会社（推奨）', form_airlogo:'ロゴ', form_search:'検索',
    sec_featured:'注目', sec_offers:'地域別のお得情報', sec_contact:'お問い合わせ＆その他',
    sec_disclaimer:'*表示価格は「から」で、税金は含まれていません。条件が適用されます。',
    rate_note:'*概算の為替レート。最終価格は異なる場合があります。',
    sec_reserve:'クイック予約',
    f_name:'フルネーム', f_email:'メール', f_phone:'電話', f_dest:'目的地', f_in:'チェックイン', f_out:'チェックアウト', f_pax:'乗客', f_msg:'メッセージ',
    send_email:'メールで送信', send_wa:'WhatsAppで送信',
    legal_terms:'利用規約', legal_privacy:'プライバシー',
    includes:'含む',
    see:'見る',
    book:'予約',
    no_matches:'一致するものが見つかりません。別の都市または国を試してください。'
  },
  ko: {
    nav_home:'홈', nav_featured:'추천', nav_offers:'특가', nav_contact:'문의하기',
    promo_kicker:'활성 할인',
    hero_title:'2026년 1월 1일 이전에 유럽 여행 시 20% 할인 혜택',
    hero_sub:'지금부터 무이자 할부로 예약하세요. 고도로 훈련된 직원이 연중무휴 24시간 지원합니다. 200만 개 이상의 숙박 시설 및 투어.',
    cta_see_offers:'오퍼 보기', cta_search:'검색',
    form_type:'유형', type_hotel:'호텔', type_trip:'여행',
    form_where:'호텔 또는 장소 검색', form_checkin:'체크인', form_checkout:'체크아웃',
    form_adults:'성인', form_kids:'어린이', form_airline:'항공사(추천)', form_airlogo:'로고', form_search:'검색',
    sec_featured:'추천', sec_offers:'지역별 특가', sec_contact:'문의 및 기타',
    sec_disclaimer:'*표시된 가격은 "부터"이며 세금이 포함되어 있지 않습니다. 약관이 적용됩니다.',
    rate_note:'*대략적인 환율; 최종 가격은 다를 수 있습니다.',
    sec_reserve:'빠른 예약',
    f_name:'성명', f_email:'이메일', f_phone:'전화', f_dest:'목적지', f_in:'체크인', f_out:'체크아웃', f_pax:'승객', f_msg:'메시지',
    send_email:'이메일로 보내기', send_wa:'WhatsApp으로 보내기',
    legal_terms:'이용 약관', legal_privacy:'개인정보 보호',
    includes:'포함',
    see:'보기',
    book:'예약',
    no_matches:'일치하는 항목이 없습니다. 다른 도시나 국가를 시도해 보세요.'
  },
  zh: {
    nav_home:'首页', nav_featured:'精选', nav_offers:'优惠', nav_contact:'联系',
    promo_kicker:'有效折扣',
    hero_title:'在2026年1月1日之前预订欧洲旅行可享受20％的折扣',
    hero_sub:'从今天开始分期付款预订。由高素质的员工提供全天候支持。超过200万个住宿和旅游项目。',
    cta_see_offers:'查看优惠', cta_search:'搜索',
    form_type:'类型', type_hotel:'酒店', type_trip:'旅行',
    form_where:'搜索酒店或地点', form_checkin:'入住', form_checkout:'退房',
    form_adults:'成人', form_kids:'儿童', form_airline:'航空公司（建议）', form_airlogo:'标志', form_search:'搜索',
    sec_featured:'精选', sec_offers:'地区优惠', sec_contact:'联系及更多',
    sec_disclaimer:'*显示的价格为“起价”，不含税费。适用条款和条件。',
    rate_note:'*汇率为近似值；最终价格可能会有所不同。',
    sec_reserve:'快速预订',
    f_name:'全名', f_email:'电子邮件', f_phone:'电话', f_dest:'目的地', f_in:'入住', f_out:'退房', f_pax:'乘客', f_msg:'留言',
    send_email:'通过电子邮件发送', send_wa:'通过WhatsApp发送',
    legal_terms:'使用条款', legal_privacy:'隐私',
    includes:'包含',
    see:'查看',
    book:'预订',
    no_matches:'未找到匹配项。请尝试其他城市或国家。'
  },
  ru: {
    nav_home:'Главная', nav_featured:'Избранное', nav_offers:'Предложения', nav_contact:'Контакты',
    promo_kicker:'Активная скидка',
    hero_title:'Получите скидку 20% на поездки по Европе до 1 января 2026 года',
    hero_sub:'Бронируйте уже сегодня с беспроцентной рассрочкой. Круглосуточная поддержка высококвалифицированным персоналом. Более двух миллионов вариантов проживания и туров.',
    cta_see_offers:'Смотреть предложения', cta_search:'Поиск',
    form_type:'Тип', type_hotel:'Отель', type_trip:'Путешествие',
    form_where:'Поиск отеля или места', form_checkin:'Дата заезда', form_checkout:'Дата выезда',
    form_adults:'Взрослые', form_kids:'Дети', form_airline:'Авиакомпания (рекомендуемая)', form_airlogo:'Логотип', form_search:'Поиск',
    sec_featured:'Избранное', sec_offers:'Предложения по регионам', sec_contact:'Контакты и другое',
    sec_disclaimer:'*Показанные цены указаны "от" и не включают налоги. Применяются условия.',
    rate_note:'*Примерные обменные курсы; конечные цены могут отличаться.',
    sec_reserve:'Быстрое бронирование',
    f_name:'Полное имя', f_email:'Электронная почта', f_phone:'Телефон', f_dest:'Направление', f_in:'Заезд', f_out:'Выезд', f_pax:'Пассажиры', f_msg:'Сообщение',
    send_email:'Отправить по электронной почте', send_wa:'Отправить через WhatsApp',
    legal_terms:'Условия использования', legal_privacy:'Конфиденциальность',
    includes:'Включает',
    see:'Смотреть',
    book:'Забронировать',
    no_matches:'Совпадений не найдено. Попробуйте другой город или страну.'
  }
};

// Locales por idioma (ampliado)
const LOCALE_BY_LANG = {
  es:'es-MX', en:'en-US', fr:'fr-FR', pt:'pt-BR', de:'de-DE',
  it:'it-IT', ja:'ja-JP', ko:'ko-KR', zh:'zh-CN', ru:'ru-RU'
};

// ===== Persistencia idioma/moneda
const LANG_KEY='overlord_lang', CURR_KEY='overlord_curr';
let lang = localStorage.getItem(LANG_KEY) || 'es';
let currency = localStorage.getItem(CURR_KEY) || 'MXN';
document.getElementById('lang').value = lang;
document.getElementById('currency').value = currency;

// Tasas aproximadas: base MXN
const RATES = { MXN:1, USD:0.056, EUR:0.052, GBP:0.045, JPY:7.8, CAD:0.075, AUD:0.085, BRL:0.29, CNY:0.39, INR:4.6, RUB:4.3, CHF:0.051, ZAR:1.1, TRY:1.9, KRW:75 };

// ======= Helpers =======
const $  = (q,root=document)=>root.querySelector(q);
const $$ = (q,root=document)=>Array.from(root.querySelectorAll(q));
const t = (k)=> (I18N[lang] && I18N[lang][k]) || I18N.es[k] || k;
function currentLocale(){ return LOCALE_BY_LANG[lang] || 'es-MX'; }

// ======= Mapas de traducción (PAÍS/CIUDAD) =======
const COUNTRY_EN = { FR:'France', ES:'Spain', IT:'Italy', UK:'United Kingdom', DE:'Germany', NL:'Netherlands', CH:'Switzerland', GR:'Greece', PT:'Portugal', CZ:'Czechia', HU:'Hungary', TR:'Türkiye', HR:'Croatia', IS:'Iceland', US:'USA', CA:'Canada', MX:'Mexico', BR:'Brazil', AR:'Argentina', PE:'Peru', CL:'Chile', CO:'Colombia', JP:'Japan', KR:'South Korea', CN:'China', TH:'Thailand', VN:'Vietnam', ID:'Indonesia', SG:'Singapore', AE:'UAE', EG:'Egypt', MA:'Morocco', ZA:'South Africa', KE:'Kenya', TZ:'Tanzania', SC:'Seychelles', AU:'Australia', NZ:'New Zealand' };
const CITY_EN = { paris:'Paris', barcelona:'Barcelona', roma:'Rome', londres:'London', berlin:'Berlin', amsterdam:'Amsterdam', zurich:'Zurich', atenas:'Athens', porto:'Porto', praga:'Prague', budapest:'Budapest', estambul:'Istanbul', dubrovnik:'Dubrovnik', reikiavik:'Reykjavík', nyc:'New York', la:'Los Angeles', miami:'Miami', toronto:'Toronto', vancouver:'Vancouver', cdmx:'Mexico City', cancun:'Cancun', rio:'Rio de Janeiro', buenosaires:'Buenos Aires', cusco:'Cusco', santiago:'Santiago', cartagena:'Cartagena', patagonia:'Patagonia', tokyo:'Tokyo', seoul:'Seoul', beijing:'Beijing', bangkok:'Bangkok', hanoi:'Hanoi', bali:'Bali', singapore:'Singapore', dubai:'Dubai', cairo:'Cairo', marrakech:'Marrakesh', capetown:'Cape Town', nairobi:'Nairobi', zanzibar:'Zanzibar', seychelles:'Seychelles', sydney:'Sydney', auckland:'Auckland' };

const COUNTRY_FR = { FR:'France', ES:'Espagne', IT:'Italie', UK:'Royaume-Uni', DE:'Allemagne', NL:'Pays-Bas', CH:'Suisse', GR:'Grèce', PT:'Portugal', CZ:'République tchèque', HU:'Hongrie', TR:'Turquie', HR:'Croatie', IS:'Islande', US:'États-Unis', CA:'Canada', MX:'Mexique', BR:'Brésil', AR:'Argentine', PE:'Pérou', CL:'Chili', CO:'Colombie', JP:'Japon', KR:'Corée du Sud', CN:'Chine', TH:'Thaïlande', VN:'Vietnam', ID:'Indonésie', SG:'Singapour', AE:'Émirats arabes unis', EG:'Égypte', MA:'Maroc', ZA:'Afrique du Sud', KE:'Kenya', TZ:'Tanzanie', SC:'Seychelles', AU:'Australie', NZ:'Nouvelle-Zélande' };
const CITY_FR = { paris:'Paris', barcelona:'Barcelone', roma:'Rome', londres:'Londres', berlin:'Berlin', amsterdam:'Amsterdam', zurich:'Zurich', atenas:'Athènes', porto:'Porto', praga:'Prague', budapest:'Budapest', estambul:'Istanbul', dubrovnik:'Dubrovnik', reikiavik:'Reykjavík', nyc:'New York', la:'Los Angeles', miami:'Miami', toronto:'Toronto', vancouver:'Vancouver', cdmx:'Mexico', cancun:'Cancún', rio:'Rio de Janeiro', buenosaires:'Buenos Aires', cusco:'Cusco', santiago:'Santiago', cartagena:'Cartagène', patagonia:'Patagonie', tokyo:'Tokyo', seoul:'Séoul', beijing:'Pékin', bangkok:'Bangkok', hanoi:'Hanoï', bali:'Bali', singapore:'Singapour', dubai:'Dubaï', cairo:'Le Caire', marrakech:'Marrakech', capetown:'Le Cap', nairobi:'Nairobi', zanzibar:'Zanzibar', seychelles:'Seychelles', sydney:'Sydney', auckland:'Auckland' };

const COUNTRY_PT = { FR:'França', ES:'Espanha', IT:'Itália', UK:'Reino Unido', DE:'Alemanha', NL:'Países Baixos', CH:'Suíça', GR:'Grécia', PT:'Portugal', CZ:'República Tcheca', HU:'Hungria', TR:'Turquia', HR:'Croácia', IS:'Islândia', US:'EUA', CA:'Canadá', MX:'México', BR:'Brasil', AR:'Argentina', PE:'Peru', CL:'Chile', CO:'Colômbia', JP:'Japão', KR:'Coreia do Sul', CN:'China', TH:'Tailândia', VN:'Vietnã', ID:'Indonésia', SG:'Singapura', AE:'Emirados Árabes Unidos', EG:'Egito', MA:'Marrocos', ZA:'África do Sul', KE:'Quênia', TZ:'Tanzânia', SC:'Seicheles', AU:'Austrália', NZ:'Nova Zelândia' };
const CITY_PT = { paris:'Paris', barcelona:'Barcelona', roma:'Roma', londres:'Londres', berlin:'Berlim', amsterdam:'Amsterdã', zurich:'Zurique', atenas:'Atenas', porto:'Porto', praga:'Praga', budapest:'Budapeste', estambul:'Istambul', dubrovnik:'Dubrovnik', reikiavik:'Reiquiavique', nyc:'Nova Iorque', la:'Los Angeles', miami:'Miami', toronto:'Toronto', vancouver:'Vancouver', cdmx:'Cidade do México', cancun:'Cancún', rio:'Rio de Janeiro', buenosaires:'Buenos Aires', cusco:'Cusco', santiago:'Santiago', cartagena:'Cartagena', patagonia:'Patagônia', tokyo:'Tóquio', seoul:'Seul', beijing:'Pequim', bangkok:'Banguecoque', hanoi:'Hanói', bali:'Bali', singapore:'Singapura', dubai:'Dubai', cairo:'Cairo', marrakech:'Marrakech', capetown:'Cidade do Cabo', nairobi:'Nairobi', zanzibar:'Zanzibar', seychelles:'Seicheles', sydney:'Sydney', auckland:'Auckland' };

const COUNTRY_DE = { FR:'Frankreich', ES:'Spanien', IT:'Italien', UK:'Vereinigtes Königreich', DE:'Deutschland', NL:'Niederlande', CH:'Schweiz', GR:'Griechenland', PT:'Portugal', CZ:'Tschechien', HU:'Ungarn', TR:'Türkei', HR:'Kroatien', IS:'Island', US:'USA', CA:'Kanada', MX:'Mexiko', BR:'Brasilien', AR:'Argentinien', PE:'Peru', CL:'Chile', CO:'Kolumbien', JP:'Japan', KR:'Südkorea', CN:'China', TH:'Thailand', VN:'Vietnam', ID:'Indonesien', SG:'Singapur', AE:'VAE', EG:'Ägypten', MA:'Marokko', ZA:'Südafrika', KE:'Kenia', TZ:'Tansania', SC:'Seychellen', AU:'Australien', NZ:'Neuseeland' };
const CITY_DE = { paris:'Paris', barcelona:'Barcelona', roma:'Rom', londres:'London', berlin:'Berlin', amsterdam:'Amsterdam', zurich:'Zürich', atenas:'Athen', porto:'Porto', praga:'Prag', budapest:'Budapest', estambul:'Istanbul', dubrovnik:'Dubrovnik', reikiavik:'Reykjavík', nyc:'New York', la:'Los Angeles', miami:'Miami', toronto:'Toronto', vancouver:'Vancouver', cdmx:'Mexiko-Stadt', cancun:'Cancún', rio:'Rio de Janeiro', buenosaires:'Buenos Aires', cusco:'Cusco', santiago:'Santiago', cartagena:'Cartagena', patagonia:'Patagonien', tokyo:'Tokio', seoul:'Seoul', beijing:'Peking', bangkok:'Bangkok', hanoi:'Hanoi', bali:'Bali', singapore:'Singapur', dubai:'Dubai', cairo:'Kairo', marrakech:'Marrakesch', capetown:'Kapstadt', nairobi:'Nairobi', zanzibar:'Sansibar', seychelles:'Seychellen', sydney:'Sydney', auckland:'Auckland' };

const COUNTRY_IT = { FR:'Francia', ES:'Spagna', IT:'Italia', UK:'Regno Unito', DE:'Germania', NL:'Paesi Bassi', CH:'Svizzera', GR:'Grecia', PT:'Portogallo', CZ:'Repubblica Ceca', HU:'Ungheria', TR:'Turchia', HR:'Croazia', IS:'Islanda', US:'USA', CA:'Canada', MX:'Messico', BR:'Brasile', AR:'Argentina', PE:'Perù', CL:'Cile', CO:'Colombia', JP:'Giappone', KR:'Corea del Sud', CN:'Cina', TH:'Thailandia', VN:'Vietnam', ID:'Indonesia', SG:'Singapore', AE:'EAU', EG:'Egitto', MA:'Marocco', ZA:'Sudafrica', KE:'Kenya', TZ:'Tanzania', SC:'Seychelles', AU:'Australia', NZ:'Nuova Zelanda' };
const CITY_IT = { paris:'Parigi', barcelona:'Barcellona', roma:'Roma', londres:'Londra', berlin:'Berlino', amsterdam:'Amsterdam', zurich:'Zurigo', atenas:'Atene', porto:'Porto', praga:'Praga', budapest:'Budapest', estambul:'Istanbul', dubrovnik:'Dubrovnik', reikiavik:'Reykjavík', nyc:'New York', la:'Los Angeles', miami:'Miami', toronto:'Toronto', vancouver:'Vancouver', cdmx:'Città del Messico', cancun:'Cancún', rio:'Rio de Janeiro', buenosaires:'Buenos Aires', cusco:'Cusco', santiago:'Santiago', cartagena:'Cartagena', patagonia:'Patagonia', tokyo:'Tokyo', seoul:'Seul', beijing:'Pechino', bangkok:'Bangkok', hanoi:'Hanoi', bali:'Bali', singapore:'Singapore', dubai:'Dubai', cairo:'Il Cairo', marrakech:'Marrakech', capetown:'Città del Capo', nairobi:'Nairobi', zanzibar:'Zanzibar', seychelles:'Seychelles', sydney:'Sydney', auckland:'Auckland' };

const COUNTRY_JA = { FR:'フランス', ES:'スペイン', IT:'イタリア', UK:'イギリス', DE:'ドイツ', NL:'オランダ', CH:'スイス', GR:'ギリシャ', PT:'ポルトガル', CZ:'チェコ', HU:'ハンガリー', TR:'トルコ', HR:'クロアチア', IS:'アイスランド', US:'アメリカ', CA:'カナダ', MX:'メキシコ', BR:'ブラジル', AR:'アルゼンチン', PE:'ペルー', CL:'チリ', CO:'コロンビア', JP:'日本', KR:'韓国', CN:'中国', TH:'タイ', VN:'ベトナム', ID:'インドネシア', SG:'シンガポール', AE:'UAE', EG:'エジプト', MA:'モロッコ', ZA:'南アフリカ', KE:'ケニア', TZ:'タンザニア', SC:'セーシェル', AU:'オーストラリア', NZ:'ニュージーランド' };
const CITY_JA = { paris:'パリ', barcelona:'バルセロナ', roma:'ローマ', londres:'ロンドン', berlin:'ベルリン', amsterdam:'アムステルダム', zurich:'チューリッヒ', atenas:'アテネ', porto:'ポルト', praga:'プラハ', budapest:'ブダペスト', estambul:'イスタンブール', dubrovnik:'ドゥブロヴニク', reikiavik:'レイキャビク', nyc:'ニューヨーク', la:'ロサンゼルス', miami:'マイアミ', toronto:'トロント', vancouver:'バンクーバー', cdmx:'メキシコシティ', cancun:'カンクン', rio:'リオデジャネイロ', buenosaires:'ブエノスアイレス', cusco:'クスコ', santiago:'サンティアゴ', cartagena:'カルタヘナ', patagonia:'パタゴニア', tokyo:'東京', seoul:'ソウル', beijing:'北京', bangkok:'バンコク', hanoi:'ハノイ', bali:'バリ', singapore:'シンガポール', dubai:'ドバイ', cairo:'カイロ', marrakech:'マラケシュ', capetown:'ケープタウン', nairobi:'ナイロビ', zanzibar:'ザンジバル', seychelles:'セーシェル', sydney:'シドニー', auckland:'オークランド' };

const COUNTRY_KO = { FR:'프랑스', ES:'스페인', IT:'이탈리아', UK:'영국', DE:'독일', NL:'네덜란드', CH:'스위스', GR:'그리스', PT:'포르투갈', CZ:'체코', HU:'헝가리', TR:'터키', HR:'크로아티아', IS:'아이슬란드', US:'미국', CA:'캐나다', MX:'멕시코', BR:'브라질', AR:'아르헨티나', PE:'페루', CL:'칠레', CO:'콜롬비아', JP:'일본', KR:'한국', CN:'중국', TH:'태국', VN:'베트남', ID:'인도네시아', SG:'싱가포르', AE:'UAE', EG:'이집트', MA:'모로코', ZA:'남아프리카', KE:'케냐', TZ:'탄자니아', SC:'세이셸', AU:'호주', NZ:'뉴질랜드' };
const CITY_KO = { paris:'파리', barcelona:'바르셀로나', roma:'로마', londres:'런던', berlin:'베를린', amsterdam:'암스테르담', zurich:'취리히', atenas:'아테네', porto:'포르투', praga:'프라하', budapest:'부다페스트', estambul:'이스탄불', dubrovnik:'두브로브니크', reikiavik:'레이캬비크', nyc:'뉴욕', la:'로스앤젤레스', miami:'마이애미', toronto:'토론토', vancouver:'밴쿠버', cdmx:'멕시코시티', cancun:'칸쿤', rio:'리우데자네이루', buenosaires:'부에노스아이레스', cusco:'쿠스코', santiago:'산티아고', cartagena:'카르타헤나', patagonia:'파타고니아', tokyo:'도쿄', seoul:'서울', beijing:'베이징', bangkok:'방콕', hanoi:'하노이', bali:'발리', singapore:'싱가포르', dubai:'두바이', cairo:'카이로', marrakech:'마라케시', capetown:'케이프타운', nairobi:'나이로비', zanzibar:'잔지바르', seychelles:'세이셸', sydney:'시드니', auckland:'오클랜드' };

const COUNTRY_ZH = { FR:'法国', ES:'西班牙', IT:'意大利', UK:'英国', DE:'德国', NL:'荷兰', CH:'瑞士', GR:'希腊', PT:'葡萄牙', CZ:'捷克', HU:'匈牙利', TR:'土耳其', HR:'克罗地亚', IS:'冰岛', US:'美国', CA:'加拿大', MX:'墨西哥', BR:'巴西', AR:'阿根廷', PE:'秘鲁', CL:'智利', CO:'哥伦比亚', JP:'日本', KR:'韩国', CN:'中国', TH:'泰国', VN:'越南', ID:'印度尼西亚', SG:'新加坡', AE:'阿联酋', EG:'埃及', MA:'摩洛哥', ZA:'南非', KE:'肯尼亚', TZ:'坦桑尼亚', SC:'塞舌尔', AU:'澳大利亚', NZ:'新西兰' };
const CITY_ZH = { paris:'巴黎', barcelona:'巴塞罗那', roma:'罗马', londres:'伦敦', berlin:'柏林', amsterdam:'阿姆斯特丹', zurich:'苏黎世', atenas:'雅典', porto:'波尔图', praga:'布拉格', budapest:'布达佩斯', estambul:'伊斯坦布尔', dubrovnik:'杜布罗夫尼克', reikiavik:'雷克雅未克', nyc:'纽约', la:'洛杉矶', miami:'迈阿密', toronto:'多伦多', vancouver:'温哥华', cdmx:'墨西哥城', cancun:'坎昆', rio:'里约热内卢', buenosaires:'布宜诺斯艾利斯', cusco:'库斯科', santiago:'圣地亚哥', cartagena:'卡塔赫纳', patagonia:'巴塔哥尼亚', tokyo:'东京', seoul:'首尔', beijing:'北京', bangkok:'曼谷', hanoi:'河内', bali:'巴厘岛', singapore:'新加坡', dubai:'迪拜', cairo:'开罗', marrakech:'马拉喀什', capetown:'开普敦', nairobi:'内罗毕', zanzibar:'桑给巴尔', seychelles:'塞舌尔', sydney:'悉尼', auckland:'奥克兰' };

const COUNTRY_RU = { FR:'Франция', ES:'Испания', IT:'Италия', UK:'Великобритания', DE:'Германия', NL:'Нидерланды', CH:'Швейцария', GR:'Греция', PT:'Португалия', CZ:'Чешская Республика', HU:'Венгрия', TR:'Турция', HR:'Хорватия', IS:'Исландия', US:'США', CA:'Канада', MX:'Мексика', BR:'Бразилия', AR:'Аргентина', PE:'Перу', CL:'Чили', CO:'Колумбия', JP:'Япония', KR:'Южная Корея', CN:'Китай', TH:'Таиланд', VN:'Вьетнам', ID:'Индонезия', SG:'Сингапур', AE:'ОАЭ', EG:'Египет', MA:'Марокко', ZA:'ЮАР', KE:'Кения', TZ:'Танзания', SC:'Сейшелы', AU:'Австралия', NZ:'Новая Зеландия' };
const CITY_RU = { paris:'Париж', barcelona:'Барселона', roma:'Рим', londres:'Лондон', berlin:'Берлин', amsterdam:'Амстердам', zurich:'Цюрих', atenas:'Афины', porto:'Порту', praga:'Прага', budapest:'Будапешт', estambul:'Стамбул', dubrovnik:'Дубровник', reikiavik:'Рейкьявик', nyc:'Нью-Йорк', la:'Лос-Анджелес', miami:'Майами', toronto:'Торонто', vancouver:'Ванкувер', cdmx:'Мехико', cancun:'Канкун', rio:'Рио-де-Жанейро', buenosaires:'Буэнос-Айрес', cusco:'Куско', santiago:'Сантьяго', cartagena:'Картахена', patagonia:'Патагония', tokyo:'Токио', seoul:'Сеул', beijing:'Пекин', bangkok:'Бангкок', hanoi:'Ханой', bali:'Бали', singapore:'Сингапур', dubai:'Дубай', cairo:'Каир', marrakech:'Марракеш', capetown:'Кейптаун', nairobi:'Найроби', zanzibar:'Занзибар', seychelles:'Сейшелы', sydney:'Сидней', auckland:'Окленд' };


// Índices para lookup por idioma
const COUNTRY_MAPS = { en:COUNTRY_EN, fr:COUNTRY_FR, pt:COUNTRY_PT, de:COUNTRY_DE, it:COUNTRY_IT, ja:COUNTRY_JA, ko:COUNTRY_KO, zh:COUNTRY_ZH, ru:COUNTRY_RU };
const CITY_MAPS    = { en:CITY_EN,    fr:CITY_FR,    pt:CITY_PT,    de:CITY_DE,    it:CITY_IT,    ja:CITY_JA,    ko:CITY_KO,    zh:CITY_ZH,    ru:CITY_RU };

// Traducción de regiones
const REGION_TR = {
  'Europa':       {es:'Europa',       en:'Europe',        fr:'Europe',           pt:'Europa',            de:'Europa', it:'Europa',       ja:'ヨーロッパ', ko:'유럽',      zh:'欧洲',   ru:'Европа'},
  'Norteamérica': {es:'Norteamérica', en:'North America', fr:'Amérique du Nord', pt:'América do Norte',  de:'Nordamerika', it:'Nord America', ja:'北アメリカ', ko:'북아메리카', zh:'北美洲', ru:'Северная Америка'},
  'Sudamérica':   {es:'Sudamérica',   en:'South America', fr:'Amérique du Sud',  pt:'América do Sul',    de:'Südamerika', it:'Sud America', ja:'南アメリカ', ko:'남아메리카', zh:'南美洲', ru:'Южная Америка'},
  'Asia':         {es:'Asia',         en:'Asia',          fr:'Asie',             pt:'Ásia',              de:'Asien', it:'Asia',          ja:'アジア',     ko:'아시아',     zh:'亚洲',   ru:'Азия'},
  'África':       {es:'África',       en:'Africa',        fr:'Afrique',          pt:'África',            de:'Afrika', it:'Africa',       ja:'アフリカ',   ko:'아프리카',   zh:'非洲',   ru:'Африка'},
  'Oceanía':      {es:'Oceanía',      en:'Oceania',       fr:'Océanie',          pt:'Oceania',           de:'Ozeanien', it:'Oceania',    ja:'オセアニア', ko:'오세아니아', zh:'大洋洲', ru:'Океания'},
};

// === Helpers desde el id
const getCitySlug     = (d)=> (d.id || '').split('-')[0];
const getCountryCode  = (d)=> (d.id || '').split('-').pop().toUpperCase();

function trCountry(d){
  const cc = getCountryCode(d);
  const map = COUNTRY_MAPS[lang];
  return map ? (map[cc] || d.country || cc) : (d.country || cc);
}
function trCity(d){
  const slug = getCitySlug(d);
  const map = CITY_MAPS[lang];
  return map ? (map[slug] || d.city || slug) : (d.city || slug);
}
function trRegionVal(r, activeLang){ return (REGION_TR[r] && REGION_TR[r][activeLang]) || r; }
function displayName(d){ return `${trCity(d)}, ${trCountry(d)}`; }

// Palabras días/noches por idioma
const DAYS_WORD  = { es:'días', en:'days', fr:'jours', pt:'dias', de:'Tage', it:'giorni', ja:'日', ko:'일', zh:'天', ru:'дней' };
const NIGHTS_WORD= { es:'noches', en:'nights', fr:'nuits', pt:'noites', de:'Nächte', it:'notti', ja:'泊', ko:'박', zh:'晚', ru:'ночей' };

// Precio mostrado = base MXN * 1.30 * tipo de cambio
function priceShownFromMXN(valueMXN){
  const raised = valueMXN * 1.30;
  const val = raised * (RATES[currency] || 1);
  return val.toLocaleString(currentLocale(), { style:'currency', currency, maximumFractionDigits:0 });
}

/* ===== Traducción de "INCLUDES" por códigos ===== */
// Códigos usados en el dataset:
const INC = {
  es: {
    FLIGHTS:'Vuelos', LODGING:'Hospedaje',
    LOUVRE_SEINE:'Tour por Louvre/Seine', SAGRADA_FAMILIA:'Sagrada Familia', COLOSSEUM_FORUM:'Coliseo/Foro Romano',
    CITY_TOUR:'City Tour', MUSEUMS_INSEL:'Museumsinsel', CANAL_CRUISE:'Paseo en canales', UETLIBERG:'Monte Uetliberg',
    ACROPOLIS_PLAKA:'Acrópolis/Plaka', PORT_WINE_TASTING:'Cata de vino de Oporto', PRAGUE_CASTLE:'Castillo de Praga',
    SZECHENYI_BATHS:'Baños Széchenyi', HAGIA_SOPHIA_BOSPHORUS:'Santa Sofía/Bósforo', CITY_WALLS:'Murallas',
    BLUE_LAGOON:'Laguna Azul', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney opcional',
    SOUTH_BEACH:'South Beach', NIAGARA:'Niágara', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Cristo/Corcovado', TANGO_SHOW:'Show de tango', TRAIN_AGUAS_CALIENTES:'Tren a Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso opcional', WALLED_CITY:'Ciudad amurallada', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'JR Pass parcial', GYEONGBOKGUNG:'Palacio Gyeongbokgung', GREAT_WALL:'Muralla China',
    TEMPLES_MARKETS:'Templos y mercados', HALONG_BAY:'Bahía de Ha-Long', UBUD_TEMPLE:'Ubud/Templos',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Safari en desierto',
    PYRAMIDS_GIZA:'Pirámides/Giza', SOUK_JEMAA:'Zoco/Jemaa el-Fna', TABLE_MOUNTAIN:'Table Mountain',
    MASAI_MARA_SAFARI:'Safari Masái Mara', BEACHES_SPICE:'Playas/Spice Tour', BEACHES_ISLANDS:'Playas/Islas',
    OPERA_HARBOUR:'Opera House/Harbour', HOBBITON_OPT:'Hobbiton opcional'
  },
  en: {
    FLIGHTS:'Flights', LODGING:'Lodging',
    LOUVRE_SEINE:'Louvre/Seine tour', SAGRADA_FAMILIA:'Sagrada Familia', COLOSSEUM_FORUM:'Colosseum/Roman Forum',
    CITY_TOUR:'City Tour', MUSEUMS_INSEL:'Museum Island', CANAL_CRUISE:'Canal cruise', UETLIBERG:'Uetliberg Mountain',
    ACROPOLIS_PLAKA:'Acropolis/Plaka', PORT_WINE_TASTING:'Port wine tasting', PRAGUE_CASTLE:'Prague Castle',
    SZECHENYI_BATHS:'Széchenyi Baths', HAGIA_SOPHIA_BOSPHORUS:'Hagia Sophia/Bosphorus', CITY_WALLS:'City Walls',
    BLUE_LAGOON:'Blue Lagoon', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney optional',
    SOUTH_BEACH:'South Beach', NIAGARA:'Niagara Falls', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Christ the Redeemer/Corcovado', TANGO_SHOW:'Tango show', TRAIN_AGUAS_CALIENTES:'Train to Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso optional', WALLED_CITY:'Walled City', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'Partial JR Pass', GYEONGBOKGUNG:'Gyeongbokgung Palace', GREAT_WALL:'Great Wall',
    TEMPLES_MARKETS:'Temples & markets', HALONG_BAY:'Ha Long Bay', UBUD_TEMPLE:'Ubud/Temples',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Desert safari',
    PYRAMIDS_GIZA:'Pyramids/Giza', SOUK_JEMAA:'Souk/Jemaa el-Fna', TABLE_MOUNTAIN:'Table Mountain',
    MASAI_MARA_SAFARI:'Masai Mara safari', BEACHES_SPICE:'Beaches/Spice Tour', BEACHES_ISLANDS:'Beaches/Islands',
    OPERA_HARBOUR:'Opera House/Harbour', HOBBITON_OPT:'Hobbiton optional'
  },
  fr: {
    FLIGHTS:'Vols', LODGING:'Hébergement',
    LOUVRE_SEINE:'Tour Louvre/Seine', SAGRADA_FAMILIA:'Sagrada Familia', COLOSSEUM_FORUM:'Colisée/Forum Romain',
    CITY_TOUR:'Visite de la ville', MUSEUMS_INSEL:'Île aux Musées', CANAL_CRUISE:'Croisière sur les canaux', UETLIBERG:'Mont Uetliberg',
    ACROPOLIS_PLAKA:'Acropole/Plaka', PORT_WINE_TASTING:'Dégustation de vin de Porto', PRAGUE_CASTLE:'Château de Prague',
    SZECHENYI_BATHS:'Bains Széchenyi', HAGIA_SOPHIA_BOSPHORUS:'Sainte-Sophie/Bosphore', CITY_WALLS:'Murailles',
    BLUE_LAGOON:'Lagune Bleue', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney optionnel',
    SOUTH_BEACH:'South Beach', NIAGARA:'Chutes du Niagara', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Christ Rédempteur/Corcovado', TANGO_SHOW:'Spectacle de tango', TRAIN_AGUAS_CALIENTES:'Train pour Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso optionnel', WALLED_CITY:'Ville fortifiée', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'JR Pass partiel', GYEONGBOKGUNG:'Palais Gyeongbokgung', GREAT_WALL:'Grande Muraille',
    TEMPLES_MARKETS:'Temples et marchés', HALONG_BAY:'Baie d\'Halong', UBUD_TEMPLE:'Ubud/Temples',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Safari dans le désert',
    PYRAMIDS_GIZA:'Pyramides/Gizeh', SOUK_JEMAA:'Souk/Jemaa el-Fna', TABLE_MOUNTAIN:'Table Mountain',
    MASAI_MARA_SAFARI:'Safari Masai Mara', BEACHES_SPICE:'Plages/Spice Tour', BEACHES_ISLANDS:'Plages/Îles',
    OPERA_HARBOUR:'Opéra/Port', HOBBITON_OPT:'Hobbiton optionnel'
  },
  pt: {
    FLIGHTS:'Voos', LODGING:'Hospedagem',
    LOUVRE_SEINE:'Tour Louvre/Seine', SAGRADA_FAMILIA:'Sagrada Família', COLOSSEUM_FORUM:'Coliseu/Fórum Romano',
    CITY_TOUR:'City Tour', MUSEUMS_INSEL:'Ilha dos Museus', CANAL_CRUISE:'Passeio de barco pelos canais', UETLIBERG:'Monte Uetliberg',
    ACROPOLIS_PLAKA:'Acrópole/Plaka', PORT_WINE_TASTING:'Degustação de vinho do Porto', PRAGUE_CASTLE:'Castelo de Praga',
    SZECHENYI_BATHS:'Banhos Széchenyi', HAGIA_SOPHIA_BOSPHORUS:'Santa Sofia/Bósforo', CITY_WALLS:'Muralhas da cidade',
    BLUE_LAGOON:'Lagoa Azul', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney opcional',
    SOUTH_BEACH:'South Beach', NIAGARA:'Cataratas do Niágara', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Cristo Redentor/Corcovado', TANGO_SHOW:'Show de tango', TRAIN_AGUAS_CALIENTES:'Trem para Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso opcional', WALLED_CITY:'Cidade murada', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'JR Pass parcial', GYEONGBOKGUNG:'Palácio Gyeongbokgung', GREAT_WALL:'Grande Muralha',
    TEMPLES_MARKETS:'Templos e mercados', HALONG_BAY:'Baía de Ha Long', UBUD_TEMPLE:'Ubud/Templos',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Safari no deserto',
    PYRAMIDS_GIZA:'Pirâmides/Giza', SOUK_JEMAA:'Souk/Jemaa el-Fna', TABLE_MOUNTAIN:'Table Mountain',
    MASAI_MARA_SAFARI:'Safari Masai Mara', BEACHES_SPICE:'Praias/Spice Tour', BEACHES_ISLANDS:'Praias/Ilhas',
    OPERA_HARBOUR:'Opera House/Harbour', HOBBITON_OPT:'Hobbiton opcional'
  },
  de: {
    FLIGHTS:'Flüge', LODGING:'Unterkunft',
    LOUVRE_SEINE:'Louvre/Seine Tour', SAGRADA_FAMILIA:'Sagrada Familia', COLOSSEUM_FORUM:'Kolosseum/Römisches Forum',
    CITY_TOUR:'Stadtrundfahrt', MUSEUMS_INSEL:'Museumsinsel', CANAL_CRUISE:'Kanalrundfahrt', UETLIBERG:'Uetliberg Berg',
    ACROPOLIS_PLAKA:'Akropolis/Plaka', PORT_WINE_TASTING:'Portweinverkostung', PRAGUE_CASTLE:'Prager Burg',
    SZECHENYI_BATHS:'Széchenyi Bäder', HAGIA_SOPHIA_BOSPHORUS:'Hagia Sophia/Bosporus', CITY_WALLS:'Stadtmauern',
    BLUE_LAGOON:'Blaue Lagune', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney optional',
    SOUTH_BEACH:'South Beach', NIAGARA:'Niagarafälle', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Christus der Erlöser/Corcovado', TANGO_SHOW:'Tangovorführung', TRAIN_AGUAS_CALIENTES:'Zug nach Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso optional', WALLED_CITY:'Stadtmauer', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'Teilweise JR Pass', GYEONGBOKGUNG:'Gyeongbokgung Palast', GREAT_WALL:'Große Mauer',
    TEMPLES_MARKETS:'Tempel & Märkte', HALONG_BAY:'Halong Bucht', UBUD_TEMPLE:'Ubud/Tempel',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Wüstensafari',
    PYRAMIDS_GIZA:'Pyramiden/Gizeh', SOUK_JEMAA:'Souk/Jemaa el-Fna', TABLE_MOUNTAIN:'Tafelberg',
    MASAI_MARA_SAFARI:'Masai Mara Safari', BEACHES_SPICE:'Strände/Spice Tour', BEACHES_ISLANDS:'Strände/Inseln',
    OPERA_HARBOUR:'Opernhaus/Hafen', HOBBITON_OPT:'Hobbiton optional'
  },
  it: {
    FLIGHTS:'Voli', LODGING:'Alloggio',
    LOUVRE_SEINE:'Tour Louvre/Seine', SAGRADA_FAMILIA:'Sagrada Familia', COLOSSEUM_FORUM:'Colosseo/Foro Romano',
    CITY_TOUR:'Tour della città', MUSEUMS_INSEL:'Isola dei Musei', CANAL_CRUISE:'Giro in canale', UETLIBERG:'Monte Uetliberg',
    ACROPOLIS_PLAKA:'Acropoli/Plaka', PORT_WINE_TASTING:'Degustazione di vino di Porto', PRAGUE_CASTLE:'Castello di Praga',
    SZECHENYI_BATHS:'Bagni Széchenyi', HAGIA_SOPHIA_BOSPHORUS:'Santa Sofia/Bosforo', CITY_WALLS:'Mura della città',
    BLUE_LAGOON:'Laguna Blu', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney opzionale',
    SOUTH_BEACH:'South Beach', NIAGARA:'Cascate del Niagara', STANLEY_PARK:'Stanley Park',
    CHRIST_CORCOVADO:'Cristo Redentore/Corcovado', TANGO_SHOW:'Spettacolo di tango', TRAIN_AGUAS_CALIENTES:'Treno per Aguas Calientes',
    VINA_VALPARAISO_OPT:'Viña/Valparaíso opzionale', WALLED_CITY:'Città murata', PERITO_MORENO:'Perito Moreno',
    JR_PASS_PARTIAL:'JR Pass parziale', GYEONGBOKGUNG:'Palazzo Gyeongbokgung', GREAT_WALL:'Grande Muraglia',
    TEMPLES_MARKETS:'Templi e mercati', HALONG_BAY:'Baia di Ha Long', UBUD_TEMPLE:'Ubud/Templi',
    GARDENS_BY_BAY:'Gardens by the Bay', DESERT_SAFARI:'Safari nel deserto',
    PYRAMIDS_GIZA:'Piramidi/Giza', SOUK_JEMAA:'Souk/Jemaa el-Fna', TABLE_MOUNTAIN:'Table Mountain',
    MASAI_MARA_SAFARI:'Safari Masai Mara', BEACHES_SPICE:'Spiagge/Spice Tour', BEACHES_ISLANDS:'Spiagge/Isole',
    OPERA_HARBOUR:'Opera House/Harbour', HOBBITON_OPT:'Hobbiton opzionale' 
  },
  ja: {
    FLIGHTS:'フライト', LODGING:'宿泊',
    LOUVRE_SEINE:'ルーヴル/セーヌ川ツアー', SAGRADA_FAMILIA:'サグラダ・ファミリア', COLOSSEUM_FORUM:'コロッセオ/フォロ・ロマーノ',
    CITY_TOUR:'市内観光', MUSEUMS_INSEL:'博物館島', CANAL_CRUISE:'運河クルーズ', UETLIBERG:'ウートリベルク山',
    ACROPOLIS_PLAKA:'アクロポリス/プラカ地区', PORT_WINE_TASTING:'ポートワイン試飲', PRAGUE_CASTLE:'プラハ城',
    SZECHENYI_BATHS:'セーチェニ温泉', HAGIA_SOPHIA_BOSPHORUS:'アヤソフィア/ボスポラス海峡', CITY_WALLS:'城壁',
    BLUE_LAGOON:'ブルーラグーン', CITYPASS:'シティパス', UNIVERSAL_DISNEY_OPT:'ユニバーサル/ディズニー（オプション）',
    SOUTH_BEACH:'サウスビーチ', NIAGARA:'ナイアガラの滝', STANLEY_PARK:'スタンレーパーク',
    CHRIST_CORCOVADO:'キリスト像/コルコバードの丘', TANGO_SHOW:'タンゴショー', TRAIN_AGUAS_CALIENTES:'アグアスカリエンテス行き列車',
    VINA_VALPARAISO_OPT:'ビーニャ/バルパライソ（オプション）', WALLED_CITY:'城壁都市', PERITO_MORENO:'ペリト・モレノ氷河',
    JR_PASS_PARTIAL:'部分的なJRパス', GYEONGBOKGUNG:'景福宮', GREAT_WALL:'万里の長城',
    TEMPLES_MARKETS:'寺院と市場', HALONG_BAY:'ハロン湾', UBUD_TEMPLE:'ウブド/寺院',
    GARDENS_BY_BAY:'ガーデンズ・バイ・ザ・ベイ', DESERT_SAFARI:'砂漠サファリ',
    PYRAMIDS_GIZA:'ピラミッド/ギザ', SOUK_JEMAA:'スーク/ジェマ・エル・フナ広場', TABLE_MOUNTAIN:'テーブルマウンテン',
    MASAI_MARA_SAFARI:'マサイマラサファリ', BEACHES_SPICE:'ビーチ/スパイスツアー', BEACHES_ISLANDS:'ビーチ/島々',
    OPERA_HARBOUR:'オペラハウス/ハーバー', HOBBITON_OPT:'ホビット村（オプション）'
  },
  ko: {
    FLIGHTS:'항공권', LODGING:'숙박',
    LOUVRE_SEINE:'루브르/세느강 투어', SAGRADA_FAMILIA:'사그라다 파밀리아', COLOSSEUM_FORUM:'콜로세움/포로 로마노',
    CITY_TOUR:'시티 투어', MUSEUMS_INSEL:'뮤지엄 아일랜드', CANAL_CRUISE:'운하 크루즈', UETLIBERG:'우틀리베르크 산',
    ACROPOLIS_PLAKA:'아크로폴리스/플라카 지구', PORT_WINE_TASTING:'포트 와인 시음', PRAGUE_CASTLE:'프라하 성',
    SZECHENYI_BATHS:'세체니 온천', HAGIA_SOPHIA_BOSPHORUS:'하기아 소피아/보스포러스 해협', CITY_WALLS:'성벽',
    BLUE_LAGOON:'블루 라군', CITYPASS:'시티패스', UNIVERSAL_DISNEY_OPT:'유니버설/디즈니 (옵션)',
    SOUTH_BEACH:'사우스 비치', NIAGARA:'나이아가라 폭포', STANLEY_PARK:'스탠리 파크',
    CHRIST_CORCOVADO:'그리스도상/코르코바도 언덕', TANGO_SHOW:'탱고 쇼', TRAIN_AGUAS_CALIENTES:'아구아스 칼리엔테스행 기차',
    VINA_VALPARAISO_OPT:'비냐/발파라이소 (옵션)', WALLED_CITY:'성벽 도시', PERITO_MORENO:'페리토 모레노 빙하',
    JR_PASS_PARTIAL:'부분 JR 패스', GYEONGBOKGUNG:'경복궁', GREAT_WALL:'만리장성',
    TEMPLES_MARKETS:'사원 및 시장', HALONG_BAY:'하롱베이', UBUD_TEMPLE:'우붓/사원',
    GARDENS_BY_BAY:'가든스 바이 더 베이', DESERT_SAFARI:'사막 사파리',
    PYRAMIDS_GIZA:'피라미드/기자', SOUK_JEMAA:'수크/제마 엘프나 광장', TABLE_MOUNTAIN:'테이블 마운틴',
    MASAI_MARA_SAFARI:'마사이 마라 사파리', BEACHES_SPICE:'해변/스파이스 투어', BEACHES_ISLANDS:'해변/섬',
    OPERA_HARBOUR:'오페라 하우스/하버', HOBBITON_OPT:'호빗 마을 (옵션)'
  },
  ru: {
    FLIGHTS:'Рейсы', LODGING:'Проживание',
    LOUVRE_SEINE:'Тур по Лувру/Сене', SAGRADA_FAMILIA:'Саграда Фамилия', COLOSSEUM_FORUM:'Колизей/Римский форум',
    CITY_TOUR:'Обзорная экскурсия', MUSEUMS_INSEL:'Остров музеев', CANAL_CRUISE:'Круиз по каналам', UETLIBERG:'Гора Утлиберг',
    ACROPOLIS_PLAKA:'Акрополь/Плака', PORT_WINE_TASTING:'Дегустация портвейна', PRAGUE_CASTLE:'Пражский град',
    SZECHENYI_BATHS:'Купальни Сечени', HAGIA_SOPHIA_BOSPHORUS:'Айя-София/Босфор', CITY_WALLS:'Городские стены',
    BLUE_LAGOON:'Голубая лагуна', CITYPASS:'CityPASS', UNIVERSAL_DISNEY_OPT:'Universal/Disney (опционально)',
    SOUTH_BEACH:'Саут-Бич', NIAGARA:'Ниагарский водопад', STANLEY_PARK:'Парк Стэнли',
    CHRIST_CORCOVADO:'Статуя Христа/Корковадо', TANGO_SHOW:'Танго-шоу', TRAIN_AGUAS_CALIENTES:'Поезд в Агуас-Кальентес',
    VINA_VALPARAISO_OPT:'Винья/Вальпараисо (опционально)', WALLED_CITY:'Город-крепость', PERITO_MORENO:'Ледник Перито-Морено',
    JR_PASS_PARTIAL:'Частичный JR Pass', GYEONGBOKGUNG:'Дворец Кёнбоккун', GREAT_WALL:'Великая китайская стена',
    TEMPLES_MARKETS:'Храмы и рынки', HALONG_BAY:'Залив Халонг', UBUD_TEMPLE:'Убуд/Храмы',
    GARDENS_BY_BAY:'Сады у залива', DESERT_SAFARI:'Сафари в пустыне',
    PYRAMIDS_GIZA:'Пирамиды/Гиза', SOUK_JEMAA:'Сук/Джемаа эль-Фна', TABLE_MOUNTAIN:'Столовая гора',
    MASAI_MARA_SAFARI:'Сафари в Масаи-Мара', BEACHES_SPICE:'Пляжи/Спайс-Тур', BEACHES_ISLANDS:'Пляжи/Острова',
    OPERA_HARBOUR:'Оперный театр/Гавань', HOBBITON_OPT:'Хоббитон (опционально)'
  }
};
function translateIncCodes(codes, activeLang){
  const dict = INC[activeLang] || INC.es;
  return (codes||[]).map(k => dict[k] || k);
}

// ======= DATASET (precios base MXN) =======
// Includes convertidos a CÓDIGOS
const destinations = [
  // EUROPA
  {id:'paris-fr', name:'París, Francia', type:'viaje', country:'Francia', city:'París', airline:'Air France', priceFrom:26500, region:'Europa', image:'paris.webp', days:15, nights:14, includes:['FLIGHTS','LODGING','LOUVRE_SEINE']},
  {id:'barcelona-es', name:'Barcelona, España', type:'viaje', country:'España', city:'Barcelona', airline:'Iberia', priceFrom:23900, region:'Europa', image:'barcelona.webp', days:10, nights:9, includes:['FLIGHTS','LODGING','SAGRADA_FAMILIA']},
  {id:'roma-it', name:'Roma, Italia', type:'viaje', country:'Italia', city:'Roma', airline:'Alitalia', priceFrom:24900, region:'Europa', image:'roma.webp', days:10, nights:9, includes:['FLIGHTS','LODGING','COLOSSEUM_FORUM']},
  {id:'londres-uk', name:'Londres, Reino Unido', type:'viaje', country:'Reino Unido', city:'Londres', airline:'British Airways', priceFrom:28900, region:'Europa', image:'londres.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','CITY_TOUR']},
  {id:'berlin-de', name:'Berlín, Alemania', type:'viaje', country:'Alemania', city:'Berlín', airline:'Lufthansa', priceFrom:25900, region:'Europa', image:'berlin.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','MUSEUMS_INSEL']},
  {id:'amsterdam-nl', name:'Ámsterdam, Países Bajos', type:'viaje', country:'Países Bajos', city:'Ámsterdam', airline:'KLM', priceFrom:25500, region:'Europa', image:'amsterdam.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','CANAL_CRUISE']},
  {id:'zurich-ch', name:'Zúrich, Suiza', type:'viaje', country:'Suiza', city:'Zúrich', airline:'Swiss', priceFrom:31500, region:'Europa', image:'zurich.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','UETLIBERG']},
  {id:'atenas-gr', name:'Atenas, Grecia', type:'viaje', country:'Grecia', city:'Atenas', airline:'Aegean Airlines', priceFrom:27900, region:'Europa', image:'atenas.webp', days:9, nights:8, includes:['FLIGHTS','LODGING','ACROPOLIS_PLAKA']},
  {id:'porto-pt', name:'Oporto, Portugal', type:'viaje', country:'Portugal', city:'Oporto', airline:'TAP Air Portugal', priceFrom:21900, region:'Europa', image:'oporto.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','PORT_WINE_TASTING']},
  {id:'praga-cz', name:'Praga, Chequia', type:'viaje', country:'Chequia', city:'Praga', airline:'Lufthansa', priceFrom:24900, region:'Europa', image:'praga.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','PRAGUE_CASTLE']},
  {id:'budapest-hu', name:'Budapest, Hungría', type:'viaje', country:'Hungría', city:'Budapest', airline:'Lufthansa', priceFrom:23900, region:'Europa', image:'budapest.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','SZECHENYI_BATHS']},
  {id:'estambul-tr', name:'Estambul, Turquía', type:'viaje', country:'Turquía', city:'Estambul', airline:'Turkish Airlines', priceFrom:25900, region:'Europa', image:'estambul.webp', days:9, nights:8, includes:['FLIGHTS','LODGING','HAGIA_SOPHIA_BOSPHORUS']},
  {id:'dubrovnik-hr', name:'Dubrovnik, Croacia', type:'viaje', country:'Croacia', city:'Dubrovnik', airline:'Croatia Airlines', priceFrom:25500, region:'Europa', image:'dubrovnik.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','CITY_WALLS']},
  {id:'reikiavik-is', name:'Reikiavik, Islandia', type:'viaje', country:'Islandia', city:'Reikiavik', airline:'Icelandair', priceFrom:33900, region:'Europa', image:'reikiavik.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','BLUE_LAGOON']},

  // NORTEAMÉRICA
  {id:'nyc-us', name:'Nueva York, USA', type:'viaje', country:'Estados Unidos', city:'Nueva York', airline:'American Airlines', priceFrom:19900, region:'Norteamérica', image:'nueva-york.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','CITYPASS']},
  {id:'la-us', name:'Los Ángeles, USA', type:'viaje', country:'Estados Unidos', city:'Los Ángeles', airline:'American Airlines', priceFrom:18500, region:'Norteamérica', image:'los-angeles.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','UNIVERSAL_DISNEY_OPT']},
  {id:'miami-us', name:'Miami, USA', type:'viaje', country:'Estados Unidos', city:'Miami', airline:'American Airlines', priceFrom:17500, region:'Norteamérica', image:'miami.webp', days:5, nights:4, includes:['FLIGHTS','LODGING','SOUTH_BEACH']},
  {id:'toronto-ca', name:'Toronto, Canadá', type:'viaje', country:'Canadá', city:'Toronto', airline:'Air Canada', priceFrom:18900, region:'Norteamérica', image:'toronto.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','NIAGARA']},
  {id:'vancouver-ca', name:'Vancouver, Canadá', type:'viaje', country:'Canadá', city:'Vancouver', airline:'Air Canada', priceFrom:19900, region:'Norteamérica', image:'vancouver.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','STANLEY_PARK']},
  {id:'cdmx-mx', name:'Ciudad de México, México', type:'hotel', country:'México', city:'Ciudad de México', airline:null, priceFrom:1200, region:'Norteamérica', image:'cdmx.webp'},
  {id:'cancun-mx', name:'Cancún, México', type:'hotel', country:'México', city:'Cancún', airline:null, priceFrom:1600, region:'Norteamérica', image:'cancun.webp'},

  // SUDAMÉRICA
  {id:'rio-br', name:'Río de Janeiro, Brasil', type:'viaje', country:'Brasil', city:'Río de Janeiro', airline:'LATAM', priceFrom:16900, region:'Sudamérica', image:'rio.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','CHRIST_CORCOVADO']},
  {id:'buenosaires-ar', name:'Buenos Aires, Argentina', type:'viaje', country:'Argentina', city:'Buenos Aires', airline:'LATAM', priceFrom:15900, region:'Sudamérica', image:'buenos-aires.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','TANGO_SHOW']},
  {id:'cusco-pe', name:'Cusco & Machu Picchu, Perú', type:'viaje', country:'Perú', city:'Cusco', airline:'LATAM', priceFrom:18900, region:'Sudamérica', image:'cusco.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','TRAIN_AGUAS_CALIENTES']},
  {id:'santiago-cl', name:'Santiago, Chile', type:'viaje', country:'Chile', city:'Santiago', airline:'LATAM', priceFrom:16900, region:'Sudamérica', image:'santiago.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','VINA_VALPARAISO_OPT']},
  {id:'cartagena-co', name:'Cartagena, Colombia', type:'viaje', country:'Colombia', city:'Cartagena', airline:'LATAM', priceFrom:14900, region:'Sudamérica', image:'cartagena.webp', days:5, nights:4, includes:['FLIGHTS','LODGING','WALLED_CITY']},
  {id:'patagonia-ar', name:'Patagonia, Argentina', type:'viaje', country:'Argentina', city:'El Calafate', airline:'Aeroméxico', priceFrom:28900, region:'Sudamérica', image:'patagonia.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','PERITO_MORENO']},

  // ASIA
  {id:'tokyo-jp', name:'Tokio, Japón', type:'viaje', country:'Japón', city:'Tokio', airline:'Japan Airlines', priceFrom:32900, region:'Asia', image:'tokio.webp', days:9, nights:8, includes:['FLIGHTS','LODGING','JR_PASS_PARTIAL']},
  {id:'seoul-kr', name:'Seúl, Corea del Sur', type:'viaje', country:'Corea del Sur', city:'Seúl', airline:'Korean Air', priceFrom:30900, region:'Asia', image:'seul.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','GYEONGBOKGUNG']},
  {id:'beijing-cn', name:'Pekín, China', type:'viaje', country:'China', city:'Pekín', airline:'Air China', priceFrom:29900, region:'Asia', image:'pekin.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','GREAT_WALL']},
  {id:'bangkok-th', name:'Bangkok, Tailandia', type:'viaje', country:'Tailandia', city:'Bangkok', airline:'Thai Airways', priceFrom:27900, region:'Asia', image:'bangkok.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','TEMPLES_MARKETS']},
  {id:'hanoi-vn', name:'Hanói, Vietnam', type:'viaje', country:'Vietnam', city:'Hanói', airline:'Vietnam Airlines', priceFrom:28900, region:'Asia', image:'hanoi.webp', days:9, nights:8, includes:['FLIGHTS','LODGING','HALONG_BAY']},
  {id:'bali-id', name:'Bali, Indonesia', type:'viaje', country:'Indonesia', city:'Bali', airline:'Garuda Indonesia', priceFrom:29900, region:'Asia', image:'bali.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','UBUD_TEMPLE']},
  {id:'singapore-sg', name:'Singapur', type:'viaje', country:'Singapur', city:'Singapur', airline:'Singapore Airlines', priceFrom:31900, region:'Asia', image:'singapur.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','GARDENS_BY_BAY']},
  {id:'dubai-ae', name:'Dubái, EAU', type:'viaje', country:'Emiratos Árabes Unidos', city:'Dubái', airline:'Emirates', priceFrom:29900, region:'Asia', image:'dubai.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','DESERT_SAFARI']},

  // ÁFRICA
  {id:'cairo-eg', name:'El Cairo, Egipto', type:'viaje', country:'Egipto', city:'El Cairo', airline:'EgyptAir', priceFrom:24900, region:'África', image:'cairo.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','PYRAMIDS_GIZA']},
  {id:'marrakech-ma', name:'Marrakech, Marruecos', type:'viaje', country:'Marruecos', city:'Marrakech', airline:'Royal Air Maroc', priceFrom:21900, region:'África', image:'marrakech.webp', days:6, nights:5, includes:['FLIGHTS','LODGING','SOUK_JEMAA']},
  {id:'capetown-za', name:'Ciudad del Cabo, Sudáfrica', type:'viaje', country:'Sudáfrica', city:'Ciudad del Cabo', airline:'South African Airways', priceFrom:28900, region:'África', image:'ciudad-del-cabo.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','TABLE_MOUNTAIN']},
  {id:'nairobi-ke', name:'Nairobi, Kenia', type:'viaje', country:'Kenia', city:'Nairobi', airline:'Kenya Airways', priceFrom:25900, region:'África', image:'nairobi.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','MASAI_MARA_SAFARI']},
  {id:'zanzibar-tz', name:'Zanzíbar, Tanzania', type:'viaje', country:'Tanzania', city:'Stone Town', airline:'Qatar Airways', priceFrom:27900, region:'África', image:'zanzibar.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','BEACHES_SPICE']},
  {id:'seychelles-sc', name:'Seychelles', type:'viaje', country:'Seychelles', city:'Mahé', airline:'Emirates', priceFrom:35900, region:'África', image:'seychelles.webp', days:7, nights:6, includes:['FLIGHTS','LODGING','BEACHES_ISLANDS']},

  // OCEANÍA
  {id:'sydney-au', name:'Sídney, Australia', type:'viaje', country:'Australia', city:'Sídney', airline:'Qantas', priceFrom:34900, region:'Oceanía', image:'sidney.webp', days:8, nights:7, includes:['FLIGHTS','LODGING','OPERA_HARBOUR']},
  {id:'auckland-nz', name:'Auckland, Nueva Zelanda', type:'viaje', country:'Nueva Zelanda', city:'Auckland', airline:'Air New Zealand', priceFrom:35900, region:'Oceanía', image:'auckland.webp', days:9, nights:8, includes:['FLIGHTS','LODGING','HOBBITON_OPT']}
];

// Logos aerolíneas (.webp)
const AIRLINE_LOGOS = {
  'Air France':'air-france.webp','Alitalia':'alitalia.webp','All Nippon Airways (ANA)':'ana.webp',
  'Aegean Airlines':'aegean.webp','Aeroméxico':'aeromexico.webp','Air Canada':'air-canada.webp',
  'Air China':'air-china.webp','American Airlines':'americanairlines.webp','British Airways':'british-airways.webp',
  'Cathay Pacific':'cathaypacific.webp','Croatia Airlines':'croatia-airlines.webp','EgyptAir':'egyptair.webp',
  'Emirates':'emirates.webp','Garuda Indonesia':'garudaindonesia.webp','Iberia':'iberia.webp',
  'Icelandair':'icelandair.webp','Japan Airlines':'japanairlines.webp','Kenya Airways':'kenya-airways.webp',
  'KLM':'klm.webp','Korean Air':'korean-air.webp','LATAM':'latam.webp','Lufthansa':'lufthansa.webp',
  'Qantas':'qantas.webp','Qatar Airways':'qatar.webp','Royal Air Maroc':'royal-air-maroc.webp',
  'Singapore Airlines':'singapore.webp','South African Airways':'south-african.webp','Swiss':'swiss.webp',
  'TAP Air Portugal':'tap.webp','Thai Airways':'thaiairways.webp','Vietnam Airlines':'vietnamairlines.webp'
};

// ======= Imagen helpers =======
const toWebp = (name) => name ? name.replace(/\.(png|jpe?g)$/i, '.webp') : '';
const imgPath = (name) => name ? ('img/' + toWebp(name)) : '';

// ======= Render =======
const featured = document.getElementById('featured');
const regions  = document.getElementById('regions');

function card(d){
  const nameLocalized = displayName(d);
  const airline = d.airline ? `<span class="badge">${d.airline}</span>`:'';
  const imgSrc = imgPath(d.image);
  const fallback = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%2322c55e'/><stop offset='1' stop-color='%2338bdf8'/></linearGradient></defs><rect width='800' height='450' fill='%23070e1c'/><circle cx='120' cy='90' r='140' fill='url(%25g)' opacity='.35'/><text x='50%' y='52%' fill='%23a3e635' font-size='26' text-anchor='middle' font-family='Inter,Arial'>Overlord’s Tours</text><text x='50%' y='70%' fill='%23cbd5e1' font-size='18' text-anchor='middle' font-family='Inter,Arial'>Imagen no disponible</text></svg>`;

  const nightsWord = NIGHTS_WORD[lang] || NIGHTS_WORD.es;
  const daysWord   = DAYS_WORD[lang]   || DAYS_WORD.es;

  const incLabel = t('includes');
  const incText = translateIncCodes(d.includes, lang).slice(0,2).join(', ') ||
    (lang==='en'?'Flights & Stay':lang==='fr'?'Vols & Hébergement':lang==='pt'?'Voos e Hospedagem':lang==='de'?'Flüge & Unterkunft':lang==='it'?'Voli & Soggiorno':lang==='ja'?'航空券と宿泊':'Vuelos y Hospedaje');

  const details = d.type==='hotel'
      ? (lang==='en'?'Nightly rate (from)':lang==='fr'?'Tarif par nuit (dès)':lang==='pt'?'Diária (a partir de)':lang==='de'?'Preis pro Nacht (ab)':lang==='it'?'Prezzo per notte (da)':'Tarifa por noche (desde)')
      : `${d.days||8} ${daysWord} · ${d.nights||7} ${nightsWord} · ${incLabel}: ${incText}`;

  return `
  <article class="card" tabindex="0" aria-label="${nameLocalized}">
    <div class="card-media" aria-hidden="true">
      <img src="${imgSrc || fallback}" alt="${nameLocalized}" loading="lazy" decoding="async"
           onerror="this.onerror=null;this.src='${fallback}';">
    </div>
    <div class="card-body">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <strong>${nameLocalized}</strong>
        <span class="price">${priceShownFromMXN(d.priceFrom)}</span>
      </div>
      <div class="badges">
        <span class="badge">${d.region}</span>
        <span class="badge">${d.type==='hotel'?t('type_hotel'):t('type_trip')}</span>
        ${airline}
      </div>
      <p class="muted" style="min-height:36px">${details}.</p>
    </div>
    <div class="cta">
      <button class="btn primary" onclick="openReserve('${d.id}')">${t('book')}</button>
      <button class="btn" onclick="whatsapp('${encodeURIComponent(nameLocalized)}')">WhatsApp</button>
    </div>
  </article>`;
}

function renderFeatured(){
  featured.innerHTML = destinations.slice(0,9).map(card).join('');
}
function renderRegions(){
  const byR = destinations.reduce((acc,d)=>{(acc[d.region]??=[]).push(d);return acc;}, {});
  regions.innerHTML = Object.entries(byR).map(([region,items])=>{
    return `<article class="card" aria-label="${region}">
      <div class="card-body">
        <h3 style="margin:0 0 6px">${region}</h3>
        <div class="badges">${items.slice(0,6).map(i=>`<span class='badge'>${i.city||i.name}</span>`).join('')}</div>
      </div>
      <div class="cta"><button class="btn" onclick="filterRegion('${region}')">${t('see')} ${region}</button></div>
    </article>`;
  }).join('');
}
renderFeatured();
renderRegions();

/* ======= Idioma / moneda ======= */
function applyI18n(){
  // Textos UI
  $$('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(I18N[lang] && I18N[lang][k]) el.textContent = I18N[lang][k];
  });

  // Locale en html
  document.documentElement.lang = currentLocale();

  // Mutar dataset al idioma activo (ciudad, país, región, includes)
  localizeDataset(lang);

  // Actualizar placeholders (e.g., París/Cancún traducidos)
  updateExamplePlaceholders();
  
  // Re-render
  renderFeatured();
  renderRegions();
}

// Prefijo "por ejemplo" por idioma
const EX_PREFIX = {
  es:'Ej.:', en:'e.g.,', fr:'Ex. :', pt:'Ex.:', de:'z. B.', it:'Es.:',
  ja:'例：', ko:'예:', zh:'例如：', ru:'Напр.:'
};

// Actualiza placeholders de búsqueda/destino con ciudades localizadas
function updateExamplePlaceholders(){
  const ex1 = destinations.find(x=>x.id==='paris-fr');
  const ex2 = destinations.find(x=>x.id==='cancun-mx');
  const city1 = ex1 ? trCity(ex1) : 'París';
  const city2 = ex2 ? trCity(ex2) : 'Cancún';

  const prefix = EX_PREFIX[lang] || EX_PREFIX.es;
  const ph = `${prefix} ${city1}, ${city2}…`;

  const q = document.getElementById('q');
  const rDest = document.getElementById('rDest');
  if(q) q.setAttribute('placeholder', ph);
  if(rDest) rDest.setAttribute('placeholder', ph);
}

// MUTACIÓN dataset por idioma (con respaldo _backup)
function localizeDataset(activeLang){
  destinations.forEach(d=>{
    if(!d._backup){
      d._backup = {
        name: d.name, city: d.city, country: d.country,
        region: d.region, includes: Array.isArray(d.includes) ? d.includes.slice() : null
      };
    }
    if(activeLang === 'es'){
      d.city    = d._backup.city;
      d.country = d._backup.country;
      d.name    = d._backup.name;
      d.region  = d._backup.region;
      if(d._backup.includes) d.includes = translateIncCodes(d._backup.includes, 'es'); // sólo para mostrar
    } else {
      const city    = trCity(d);
      const country = trCountry(d);
      d.city    = city;
      d.country = country;
      d.name    = `${city}, ${country}`;
      d.region  = trRegionVal(d._backup.region, activeLang);
      if(d._backup.includes) d.includes = translateIncCodes(d._backup.includes, activeLang);
    }
  });
}

document.getElementById('lang').addEventListener('change', e=>{
  lang = e.target.value;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
});
document.getElementById('currency').addEventListener('change', e=>{
  currency = e.target.value;
  localStorage.setItem(CURR_KEY, currency);
  renderFeatured();
});
applyI18n();



/* Chips de moneda */
$$('.currency-chip').forEach(ch=>{
  ch.addEventListener('click', ()=>{
    $$('.currency-chip').forEach(x=>x.classList.remove('active'));
    ch.classList.add('active');
    currency = ch.dataset.cur;
    localStorage.setItem(CURR_KEY, currency);
    $('#currency').value = currency;
    renderFeatured();
  });
});
// Seleccionar chip activo al cargar
($$('.currency-chip').find(x=>x.dataset.cur===currency)||null)?.classList.add('active');

// ======= Toggle Hotel/Viaje =======
const typeSel = document.getElementById('type');
const hotelFields = document.getElementById('hotelFields');
const airlineFields = document.getElementById('airlineFields');
const airlineInput = document.getElementById('airline');
const airLogo = document.getElementById('airLogo');

function updateType(){
  const isTrip = typeSel.value==='viaje';
  airlineFields.hidden = !isTrip;
  hotelFields.hidden = isTrip;
  if(!isTrip){airlineInput.value=''; airLogo.textContent='—';}
}
typeSel.addEventListener('change', updateType);
updateType();

airlineInput.addEventListener('input', ()=>{
  const f = Object.keys(AIRLINE_LOGOS).find(k=>k.toLowerCase().startsWith(airlineInput.value.trim().toLowerCase()));
  if(f){
    airLogo.textContent = '';
    const img = new Image();
    img.alt = f; img.height = 28; img.loading='lazy';
    img.src = 'img/' + AIRLINE_LOGOS[f];
    airLogo.appendChild(img);
  } else {
    airLogo.textContent='—';
  }
});

// ======= Buscador / Autocomplete =======
const q = document.getElementById('q');
const list = document.getElementById('suggestions');
let activeIndex = -1;
const norm = s => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

q.addEventListener('input', ()=>{
  const v = norm(q.value);
  if(!v){list.hidden=true;list.innerHTML='';q.setAttribute('aria-expanded','false');return}
  const res = destinations
    .filter(d=>[d.name,d.city,d.country,d.region,d.airline].filter(Boolean).map(norm).join(' ').includes(v))
    .slice(0,8);
  list.innerHTML = res.map((d,i)=>`<li role="option" id="opt-${i}" ${i===0?'aria-selected="true"':''}>${d.name} · <span class='muted'>${d.region}</span></li>`).join('');
  list.hidden = res.length===0; activeIndex = res.length?0:-1; q.setAttribute('aria-expanded', String(!list.hidden));
});
list.addEventListener('click', e=>{
  const li = e.target.closest('li');
  if(!li) return;
  q.value = li.textContent.replace(/·.*$/,'').trim();
  list.hidden = true; q.setAttribute('aria-expanded','false');
});
q.addEventListener('keydown', e=>{
  const items = [...list.children];
  if(list.hidden || !items.length) return;
  if(e.key==='ArrowDown' || e.key==='ArrowUp'){
    e.preventDefault();
    items[activeIndex]?.removeAttribute('aria-selected');
    activeIndex = e.key==='ArrowDown' ? (activeIndex+1)%items.length : (activeIndex-1+items.length)%items.length;
    items[activeIndex].setAttribute('aria-selected','true');
    items[activeIndex].scrollIntoView({block:'nearest'});
  } else if(e.key==='Enter'){
    e.preventDefault();
    q.value = items[activeIndex].textContent.replace(/·.*$/,'').trim();
    list.hidden = true; q.setAttribute('aria-expanded','false');
  } else if(e.key==='Escape'){
    list.hidden = true; q.setAttribute('aria-expanded','false');
  }
});

// ======= Acciones =======
function filterRegion(region){
  const items = destinations.filter(d=>d.region===region).slice(0,9);
  featured.innerHTML = items.map(card).join('');
  window.location.hash = '#destacados';
}
window.filterRegion = filterRegion;

function whatsapp(name){
  const base = {
    es:'Hola, me interesa',
    en:'Hi, I am interested in',
    fr:'Bonjour, je suis intéressé par',
    pt:'Olá, tenho interesse em',
    de:'Hallo, ich interessiere mich für',
    it:'Ciao, sono interessato a',
    ja:'こんにちは、興味があります：',
    ko:'안녕하세요, 관심 있습니다:',
    zh:'你好，我对以下内容感兴趣：',
    ru:'Здравствуйте, меня интересует'
  }[lang] || 'Hola, me interesa';
  const msg = encodeURIComponent(`${base} ${decodeURIComponent(name)}.`);
  window.open(`https://wa.me/524625556666?text=${msg}`,'_blank');
}
window.whatsapp = whatsapp;

function openReserve(id){
  const d = destinations.find(x=>x.id===id);
  const input = document.getElementById('rDest');
  if(d && input){ input.value = displayName(d); }
  document.getElementById('reserva').scrollIntoView({behavior:'smooth'});
}
window.openReserve = openReserve;

// ======= Validación y envío Reserva =======
function gather(){
  const v = id=>document.getElementById(id).value.trim();
  return {
    name:v('rName'), email:v('rEmail'), phone:v('rPhone'), dest:v('rDest'),
    in:v('rIn'), out:v('rOut'), pax:v('rPax'), msg:v('rMsg')
  };
}
function validateReserve(d){
  if(!d.name || !d.email || !d.dest) return {ok:false, msg:(lang==='en'?'Complete name, email and destination':'Completa nombre, email y destino')};
  if(d.in && d.out && new Date(d.out) < new Date(d.in))
    return {ok:false, msg:(lang==='en'?'Check-out cannot be before check-in':'La salida no puede ser antes de la entrada')};
  return {ok:true};
}
// set min en inputs de fechas
(function(){
  const today = new Date().toISOString().slice(0,10);
  ['checkin','checkout','rIn','rOut'].forEach(id=>{ const el=document.getElementById(id); if(el) el.min=today; });
})();

document.getElementById('sendEmail').addEventListener('click',()=>{
  const d = gather();
  const v = validateReserve(d);
  if(!v.ok){ alert(v.msg); return; }
  const subj = encodeURIComponent(`${(lang==='en'?'Reservation':'Reserva')}: ${d.dest} (${d.in||'open date'})`);
  const body = encodeURIComponent(`Nombre: ${d.name}
Email: ${d.email}
Tel: ${d.phone}
Destino: ${d.dest}
Entrada: ${d.in}
Salida: ${d.out}
Pasajeros: ${d.pax}
Mensaje: ${d.msg}`);
  window.location.href = `mailto:overlordtours@gmail.com?subject=${subj}&body=${body}`;
});
document.getElementById('sendWA').addEventListener('click',()=>{
  const d = gather();
  const v = validateReserve(d);
  if(!v.ok){ alert(v.msg); return; }
  const LABELS_MAP = {
    es:{book:'Quiero reservar', name:'Nombre', notes:'Notas', passengers:'Pasajeros', in:'Entrada', out:'Salida'},
    en:{book:'I want to book', name:'Name', notes:'Notes', passengers:'Passengers', in:'Check-in', out:'Check-out'},
    fr:{book:'Je souhaite réserver', name:'Nom', notes:'Notes', passengers:'Personnes', in:'Arrivée', out:'Départ'},
    pt:{book:'Quero reservar', name:'Nome', notes:'Notas', passengers:'Passageiros', in:'Entrada', out:'Saída'},
    de:{book:'Ich möchte buchen', name:'Name', notes:'Notizen', passengers:'Personen', in:'Anreise', out:'Abreise'},
    it:{book:'Voglio prenotare', name:'Nome', notes:'Note', passengers:'Passeggeri', in:'Check-in', out:'Check-out'},
    ja:{book:'予約したいです', name:'氏名', notes:'備考', passengers:'人数', in:'チェックイン', out:'チェックアウト'},
    ko:{book:'예약하고 싶습니다', name:'이름', notes:'메모', passengers:'승객', in:'체크인', out:'체크아웃'},
    zh:{book:'我想预订', name:'姓名', notes:'备注', passengers:'乘客', in:'入住', out:'退房'},
    ru:{book:'Хочу забронировать', name:'Имя', notes:'Заметки', passengers:'Пассажиры', in:'Заезд', out:'Выезд'},
  };
  const labels = LABELS_MAP[lang] || LABELS_MAP.es;
  const text = encodeURIComponent(`${labels.book} ${d.dest}.
${labels.name}: ${d.name}
Email: ${d.email}
Tel: ${d.phone}
${labels.in}: ${d.in}
${labels.out}: ${d.out}
${labels.passengers}: ${d.pax}
${labels.notes}: ${d.msg}`);
  window.open(`https://wa.me/524625556666?text=${text}`,'_blank');
});

// ======= Título flotante =======
const titleMap = {
  banner:{es:'Inicio', en:'Home', fr:'Accueil', pt:'Início', de:'Start', it:'Home', ja:'ホーム', ko:'홈', zh:'首页', ru:'Главная'},
  destacados:{es:'Destacados', en:'Featured', fr:'À la une', pt:'Destaques', de:'Highlights', it:'In evidenza', ja:'注目', ko:'추천', zh:'精选', ru:'Избранное'},
  ofertas:{es:'Ofertas', en:'Deals', fr:'Offres', pt:'Ofertas', de:'Angebote', it:'Offerte', ja:'お得情報', ko:'특가', zh:'优惠', ru:'Предложения'},
  contacto:{es:'Contacto', en:'Contact', fr:'Contact', pt:'Contato', de:'Kontakt', it:'Contatti', ja:'お問い合わせ', ko:'문의', zh:'联系', ru:'Контакты'}
};
const floating = document.getElementById('floatingTitle');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id = e.target.id;
      floating.textContent = (titleMap[id] && titleMap[id][lang]) || 'Overlord';
    }
  });
},{threshold:0.55});
['banner','destacados','ofertas','contacto'].forEach(id=> io.observe(document.getElementById(id)));

// ======= (Opcional) API real de tipos de cambio =======
// async function refreshRates(){
//   try{
//     const symbols = Object.keys(RATES).filter(k=>k!=='MXN').join(',');
//     const res = await fetch(`https://api.exchangerate.host/latest?base=MXN&symbols=${symbols}`);
//     const data = await res.json();
//     if(data?.rates){
//       Object.assign(RATES, data.rates);
//       renderFeatured();
//     }
//   }catch(e){ console.warn('No se pudo actualizar tasas', e); }
// }
// // refreshRates(); setInterval(refreshRates, 12*60*60*1000);
