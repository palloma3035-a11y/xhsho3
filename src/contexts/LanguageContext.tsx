// Language context for multi-language support (DE, SQ, EN, AR, TR)
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'de' | 'sq' | 'en' | 'ar' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.prayerTimes': 'Gebetszeiten',
    'nav.services': 'Angebote',
    'nav.events': 'Veranstaltungen',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.leadership': 'Vorstand',
    'nav.donate': 'Spenden',
    
    // Hero
    'hero.welcome': 'Willkommen bei uns',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'Ein Ort des Friedens, des Gebets und der Gemeinschaft für Muslime in Osnabrück und Umgebung.',
    'hero.viewPrayerTimes': 'Gebetszeiten ansehen',
    'hero.learnMore': 'Mehr erfahren',
    'hero.more': 'Mehr',
    
    // Prayer Times
    'prayer.title': 'Gebetszeiten',
    'prayer.subtitle': 'Tägliche Gebete',
    'prayer.fajr': 'Fajr',
    'prayer.dhuhr': 'Dhuhr',
    'prayer.asr': 'Asr',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isha',
    'prayer.jumuah': "Jumu'ah Gebet",
    'prayer.jumuahSub': 'Freitagsgebet',
    'prayer.khutbah': 'Khutbah beginnt um',
    'prayer.loading': 'Gebetszeiten werden geladen...',
    'prayer.error': 'Fehler beim Laden der Gebetszeiten',
    
    // About
    'about.label': 'Über uns',
    'about.title': 'Unsere Moschee,',
    'about.titleHighlight': ' Ihre Gemeinschaft',
    'about.p1': 'Die Xhamia Shqiptare Diaspora Osnabrück ist seit vielen Jahren ein spirituelles Zuhause für die albanische muslimische Gemeinschaft in Osnabrück und Umgebung.',
    'about.p2': 'Unser Ziel ist es, einen einladenden Raum zu bieten, in dem Muslime aller Hintergründe zusammenkommen können, um zu beten, zu lernen und als Gemeinschaft zu wachsen.',
    'about.p3': 'Wir legen großen Wert auf die Bewahrung unserer religiösen und kulturellen Identität, während wir gleichzeitig die Integration in die deutsche Gesellschaft fördern.',
    'about.since': 'Seit 2019',
    'about.serving': 'Helfen Sie uns, eine neue Moschee zu bauen',
    'about.community': 'Gemeinschaft',
    'about.communityDesc': 'Wir fördern ein starkes Gefühl der Zugehörigkeit und gegenseitigen Unterstützung.',
    'about.education': 'Bildung',
    'about.educationDesc': 'Islamische Bildung für alle Altersgruppen in deutscher und albanischer Sprache.',
    'about.integration': 'Integration',
    'about.integrationDesc': 'Brücken bauen zwischen Kulturen und Generationen in unserer Stadt.',
    
    // Services
    'services.label': 'Unsere Angebote',
    'services.title': 'Dienste für die Gemeinschaft',
    'services.description': 'Wir bieten verschiedene religiöse und soziale Dienste für unsere Gemeinde an.',
    'services.jumuah': "Jumu'ah Gebet",
    'services.jumuahDesc': 'Jeden Freitag laden wir Sie herzlich zum gemeinsamen Freitagsgebet ein. Die Khutbah wird auf Albanisch und Deutsch gehalten.',
    'services.jumuahTime': '13:00 - 14:00 Uhr',
    'services.islamic': 'Islamunterricht',
    'services.islamicDesc': 'Religionsunterricht für Kinder und Jugendliche. Quran-Unterricht, islamische Grundlagen und Ethik.',
    'services.islamicTime': 'Samstags & Sonntags',
    'services.community': 'Gemeinschaftsaktivitäten',
    'services.communityDesc': 'Regelmäßige Treffen, Vorträge, und soziale Veranstaltungen für die ganze Familie.',
    'services.communityTime': 'Nach Ankündigung',
    'services.nikah': 'Nikah & Janazah',
    'services.nikahDesc': 'Durchführung von islamischen Eheschließungen und Begleitung bei Trauerfällen nach islamischen Traditionen.',
    'services.nikahTime': 'Nach Vereinbarung',
    
    // Events
    'events.label': 'Aktuelles',
    'events.title': 'Veranstaltungen & Ankündigungen',
    'events.upcoming': 'Kommende Veranstaltungen',
    'events.announcements': 'Ankündigungen',
    'events.allAnnouncements': 'Alle Ankündigungen',
    'events.lecture': 'Islamischer Vortrag',
    'events.lectureDesc': 'Thema: Die Bedeutung von Geduld im Islam',
    'events.lectureTime': 'Jeden Samstag',
    'events.eid': 'Eid al-Fitr (vorläufig)',
    'events.eidDesc': 'Festgebet zum Ende des Ramadan',
    'events.eidTime': 'Nach Ankündigung',
    'events.iftar': 'Gemeinschafts-Iftar',
    'events.iftarDesc': 'Gemeinsames Fastenbrechen während des Ramadan',
    'events.ann1': 'Der Quran-Unterricht beginnt wieder am 8. Januar 2025.',
    'events.ann2': 'Spenden für Hilfe werden entgegengenommen.',
    'events.ann3': 'Neue Gebetszeiten ab Januar auf unserer Website.',
    
    // Donation
    'donate.title': 'Unterstützen Sie unsere Moschee',
    'donate.description': 'Helfen Sie uns, eine neue Moschee für unsere Gemeinde zu bauen. Ihre Spende macht einen Unterschied.',
    'donate.bankDetails': 'Bankverbindung',
    'donate.accountHolder': 'Kontoinhaber:',
    'donate.bank': 'Bank:',
    'donate.germany': 'Deutschland',
    'donate.note': 'Jede Spende, ob groß oder klein, bringt uns dem Traum einer neuen Moschee näher. Möge Allah Ihre Großzügigkeit belohnen. 🤲',
    'donate.cta': 'Jetzt spenden',
    
    // Gallery
    'gallery.label': 'Galerie',
    'gallery.title': 'Unsere zukünftige Moschee',
    'gallery.description': 'Die Moschee, die wir InshaAllah bauen werden - Eindrücke aus unserer Vision und Gemeinschaft.',
    'gallery.mosque': 'Unsere zukünftige Moschee',
    'gallery.prayer': 'Gemeinschaftsgebet',
    'gallery.quran': 'Quran-Unterricht',
    'gallery.community': 'Gemeinschaftsleben',
    'gallery.education': 'Islamische Bildung',
    'gallery.events': 'Veranstaltungen',
    
    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Besuchen Sie uns',
    'contact.description': 'Wir freuen uns auf Ihren Besuch. Bei Fragen stehen wir Ihnen gerne zur Verfügung.',
    'contact.info': 'Kontaktinformationen',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.hours': 'Öffnungszeiten',
    'contact.hoursValue': 'Täglich: 30 Min vor Fajr bis nach Isha',
    'contact.whatsapp': 'WhatsApp kontaktieren',
    'contact.formTitle': 'Nachricht senden',
    'contact.formName': 'Ihr Name',
    'contact.formEmail': 'Ihre E-Mail',
    'contact.formMessage': 'Ihre Nachricht',
    'contact.formSubmit': 'Nachricht senden',
    'contact.formSending': 'Wird gesendet...',
    'contact.formSuccess': 'Nachricht gesendet',
    'contact.formSuccessDesc': 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
    
    // Leadership
    'leadership.label': 'Unsere Führung',
    'leadership.title': 'Vorstand & Imam',
    'leadership.description': 'Das Team, das unsere Moschee und Gemeinschaft leitet.',
    'leadership.board': 'Aktueller Vorstand',
    'leadership.president': 'Vorsitzender',
    'leadership.vicePresident': 'Stellvertretender Vorsitzender',
    'leadership.treasurer': 'Kassenwart',
    'leadership.secretary': 'Schriftführer',
    'leadership.advisor': 'Berater',
    'leadership.imam': 'Imam der Moschee',
    'leadership.imamTitle': 'Imam',
    'leadership.imamDesc': 'Unser Imam leitet die Gebete, hält die Freitagspredigt und steht der Gemeinde für religiöse Fragen und Beratung zur Verfügung.',

    // Footer
    'footer.tagline': 'Ein Ort des Friedens und der Gemeinschaft für Muslime in Osnabrück.',
    'footer.quickLinks': 'Schnellzugriff',
    'footer.ourServices': 'Unsere Dienste',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.madeWith': 'Mit',
    'footer.forCommunity': 'für unsere Gemeinschaft',
  },
  sq: {
    // Navbar
    'nav.home': 'Ballina',
    'nav.about': 'Rreth nesh',
    'nav.prayerTimes': 'Kohët e namazit',
    'nav.services': 'Shërbimet',
    'nav.events': 'Ngjarjet',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Kontakti',
    'nav.leadership': 'Kryesia',
    'nav.donate': 'Dhuro',
    
    // Hero
    'hero.welcome': 'Mirësevini',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'Një vend paqeje, lutjeje dhe bashkësie për muslimanët në Osnabrück dhe rrethinë.',
    'hero.viewPrayerTimes': 'Shiko kohët e namazit',
    'hero.learnMore': 'Mëso më shumë',
    'hero.more': 'Më shumë',
    
    // Prayer Times
    'prayer.title': 'Kohët e namazit',
    'prayer.subtitle': 'Namazet ditore',
    'prayer.fajr': 'Sabahu',
    'prayer.dhuhr': 'Dreka',
    'prayer.asr': 'Ikindia',
    'prayer.maghrib': 'Akshami',
    'prayer.isha': 'Jacia',
    'prayer.jumuah': 'Namazi i Xhumasë',
    'prayer.jumuahSub': 'Namazi i së premtes',
    'prayer.khutbah': 'Hutbeja fillon në',
    'prayer.loading': 'Duke ngarkuar kohët e namazit...',
    'prayer.error': 'Gabim gjatë ngarkimit të kohëve të namazit',
    
    // About
    'about.label': 'Rreth nesh',
    'about.title': 'Xhamia jonë,',
    'about.titleHighlight': ' Bashkësia juaj',
    'about.p1': 'Xhamia Shqiptare Diaspora Osnabrück ka qenë për shumë vite shtëpia shpirtërore e bashkësisë muslimane shqiptare në Osnabrück dhe rrethinë.',
    'about.p2': 'Qëllimi ynë është të ofrojmë një hapësirë mikpritëse ku muslimanët e të gjitha prejardhjeveve mund të bashkohen për të falur, për të mësuar dhe për të rritur si bashkësi.',
    'about.p3': 'Ne vlerësojmë shumë ruajtjen e identitetit tonë fetar dhe kulturor, duke promovuar njëkohësisht integrimin në shoqërinë gjermane.',
    'about.since': 'Që nga 2019',
    'about.serving': 'Na ndihmoni të ndërtojmë një xhami të re',
    'about.community': 'Bashkësia',
    'about.communityDesc': 'Ne promovojmë një ndjenjë të fortë përkatësie dhe mbështetje të ndërsjellë.',
    'about.education': 'Arsimimi',
    'about.educationDesc': 'Arsimim islamik për të gjitha moshat në gjermanisht dhe shqip.',
    'about.integration': 'Integrimi',
    'about.integrationDesc': 'Ndërtojmë ura midis kulturave dhe brezave në qytetin tonë.',
    
    // Services
    'services.label': 'Shërbimet tona',
    'services.title': 'Shërbime për bashkësinë',
    'services.description': 'Ne ofrojmë shërbime të ndryshme fetare dhe sociale për bashkësinë tonë.',
    'services.jumuah': 'Namazi i Xhumasë',
    'services.jumuahDesc': 'Çdo të premte ju ftojmë përzemërsisht në namazin e xhumasë. Hutbeja mbahet në shqip dhe gjermanisht.',
    'services.jumuahTime': '13:00 - 14:00',
    'services.islamic': 'Mësim-besimi',
    'services.islamicDesc': 'Mësim fetar për fëmijë dhe të rinj. Mësimi i Kuranit, bazat islame dhe etika.',
    'services.islamicTime': 'Të shtunave & të dielave',
    'services.community': 'Aktivitete të komunitetit',
    'services.communityDesc': 'Takime të rregullta, ligjërata dhe ngjarje sociale për të gjithë familjen.',
    'services.communityTime': 'Sipas njoftimit',
    'services.nikah': 'Nikah & Xhenaze',
    'services.nikahDesc': 'Kryerja e martesave islame dhe përcjellja në raste vdekjesh sipas traditave islame.',
    'services.nikahTime': 'Me marrëveshje',
    
    // Events
    'events.label': 'Aktuale',
    'events.title': 'Ngjarjet & Njoftimet',
    'events.upcoming': 'Ngjarjet e ardhshme',
    'events.announcements': 'Njoftimet',
    'events.allAnnouncements': 'Të gjitha njoftimet',
    'events.lecture': 'Ligjëratë islame',
    'events.lectureDesc': 'Tema: Rëndësia e durimit në Islam',
    'events.lectureTime': 'Çdo të shtunë',
    'events.eid': 'Bajrami i Madh (përafërsisht)',
    'events.eidDesc': 'Namazi i Bajramit në fund të Ramazanit',
    'events.eidTime': 'Sipas njoftimit',
    'events.iftar': 'Iftar i përbashkët',
    'events.iftarDesc': 'Çelja e agjërimit së bashku gjatë Ramazanit',
    'events.ann1': 'Mësimi i Kuranit fillon përsëri më 8 janar 2025.',
    'events.ann2': 'Pranohen dhurata për ndihmë.',
    'events.ann3': 'Kohët e reja të namazit nga janari në faqen tonë.',
    
    // Donation
    'donate.title': 'Mbështetni xhaminë tonë',
    'donate.description': 'Na ndihmoni të ndërtojmë një xhami të re për bashkësinë tonë. Dhurata juaj bën ndryshim.',
    'donate.bankDetails': 'Të dhënat bankare',
    'donate.accountHolder': 'Mbajtësi i llogarisë:',
    'donate.bank': 'Banka:',
    'donate.germany': 'Gjermani',
    'donate.note': 'Çdo dhuratë, e madhe apo e vogël, na afron ëndrrës së një xhamie të re. Allahu ju shpërbleftë për bujarinë tuaj. 🤲',
    'donate.cta': 'Dhuro tani',
    
    // Gallery
    'gallery.label': 'Galeria',
    'gallery.title': 'Xhamia jonë e ardhshme',
    'gallery.description': 'Xhamia që do të ndërtojmë InshaAllah - Vizionet tona dhe jeta e bashkësisë.',
    'gallery.mosque': 'Xhamia jonë e ardhshme',
    'gallery.prayer': 'Namazi i përbashkët',
    'gallery.quran': 'Mësimi i Kuranit',
    'gallery.community': 'Jeta e bashkësisë',
    'gallery.education': 'Arsimimi islamik',
    'gallery.events': 'Ngjarjet',
    
    // Contact
    'contact.label': 'Kontakti',
    'contact.title': 'Na vizitoni',
    'contact.description': 'Jemi të lumtur t\'ju presim. Për pyetje jemi në dispozicionin tuaj.',
    'contact.info': 'Informacione kontakti',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.email': 'Email',
    'contact.hours': 'Orari i punës',
    'contact.hoursValue': 'Përditë: 30 min para sabahut deri pas jacisë',
    'contact.whatsapp': 'Kontakto në WhatsApp',
    'contact.formTitle': 'Dërgo mesazh',
    'contact.formName': 'Emri juaj',
    'contact.formEmail': 'Email-i juaj',
    'contact.formMessage': 'Mesazhi juaj',
    'contact.formSubmit': 'Dërgo mesazhin',
    'contact.formSending': 'Duke dërguar...',
    'contact.formSuccess': 'Mesazhi u dërgua',
    'contact.formSuccessDesc': 'Faleminderit! Do t\'ju kontaktojmë së shpejti.',
    
    // Leadership
    'leadership.label': 'Udhëheqja',
    'leadership.title': 'Kryesia & Imami',
    'leadership.description': 'Ekipi që udhëheq xhaminë dhe bashkësinë tonë.',
    'leadership.board': 'Kryesia aktuale e Xhamisë',
    'leadership.president': 'Kryetar',
    'leadership.vicePresident': 'Nënkryetar',
    'leadership.treasurer': 'Arkatar',
    'leadership.secretary': 'Sekretar',
    'leadership.advisor': 'Këshilltar',
    'leadership.imam': 'Imami i Xhamisë',
    'leadership.imamTitle': 'Imam',
    'leadership.imamDesc': 'Imami ynë udhëheq namazet, mban hutben e xhumasë dhe qëndron në dispozicion të bashkësisë për pyetje fetare dhe këshillim.',

    // Footer
    'footer.tagline': 'Një vend paqeje dhe bashkësie për muslimanët në Osnabrück.',
    'footer.quickLinks': 'Lidhje të shpejta',
    'footer.ourServices': 'Shërbimet tona',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.',
    'footer.madeWith': 'Me',
    'footer.forCommunity': 'për bashkësinë tonë',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.prayerTimes': 'Prayer Times',
    'nav.services': 'Services',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.leadership': 'Leadership',
    'nav.donate': 'Donate',
    
    // Hero
    'hero.welcome': 'Welcome',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'A place of peace, prayer and community for Muslims in Osnabrück and the surrounding area.',
    'hero.viewPrayerTimes': 'View Prayer Times',
    'hero.learnMore': 'Learn More',
    'hero.more': 'More',
    
    // Prayer Times
    'prayer.title': 'Prayer Times',
    'prayer.subtitle': 'Daily Prayers',
    'prayer.fajr': 'Fajr',
    'prayer.dhuhr': 'Dhuhr',
    'prayer.asr': 'Asr',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isha',
    'prayer.jumuah': "Jumu'ah Prayer",
    'prayer.jumuahSub': 'Friday Prayer',
    'prayer.khutbah': 'Khutbah begins at',
    'prayer.loading': 'Loading prayer times...',
    'prayer.error': 'Error loading prayer times',
    
    // About
    'about.label': 'About Us',
    'about.title': 'Our Mosque,',
    'about.titleHighlight': ' Your Community',
    'about.p1': 'The Xhamia Shqiptare Diaspora Osnabrück has been a spiritual home for the Albanian Muslim community in Osnabrück and the surrounding area for many years.',
    'about.p2': 'Our goal is to provide a welcoming space where Muslims of all backgrounds can come together to pray, learn and grow as a community.',
    'about.p3': 'We place great value on preserving our religious and cultural identity while promoting integration into German society.',
    'about.since': 'Since 2019',
    'about.serving': 'Help us build a new mosque',
    'about.community': 'Community',
    'about.communityDesc': 'We foster a strong sense of belonging and mutual support.',
    'about.education': 'Education',
    'about.educationDesc': 'Islamic education for all ages in German and Albanian.',
    'about.integration': 'Integration',
    'about.integrationDesc': 'Building bridges between cultures and generations in our city.',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Services for the Community',
    'services.description': 'We offer various religious and social services for our community.',
    'services.jumuah': "Jumu'ah Prayer",
    'services.jumuahDesc': 'Every Friday we warmly invite you to the congregational Friday prayer. The Khutbah is held in Albanian and German.',
    'services.jumuahTime': '1:00 - 2:00 PM',
    'services.islamic': 'Islamic Education',
    'services.islamicDesc': 'Religious education for children and youth. Quran lessons, Islamic basics and ethics.',
    'services.islamicTime': 'Saturdays & Sundays',
    'services.community': 'Community Activities',
    'services.communityDesc': 'Regular meetings, lectures, and social events for the whole family.',
    'services.communityTime': 'As announced',
    'services.nikah': 'Nikah & Janazah',
    'services.nikahDesc': 'Conducting Islamic marriages and accompaniment in cases of death according to Islamic traditions.',
    'services.nikahTime': 'By appointment',
    
    // Events
    'events.label': 'News',
    'events.title': 'Events & Announcements',
    'events.upcoming': 'Upcoming Events',
    'events.announcements': 'Announcements',
    'events.allAnnouncements': 'All Announcements',
    'events.lecture': 'Islamic Lecture',
    'events.lectureDesc': 'Topic: The Importance of Patience in Islam',
    'events.lectureTime': 'Every Saturday',
    'events.eid': 'Eid al-Fitr (tentative)',
    'events.eidDesc': 'Eid prayer at the end of Ramadan',
    'events.eidTime': 'To be announced',
    'events.iftar': 'Community Iftar',
    'events.iftarDesc': 'Breaking fast together during Ramadan',
    'events.ann1': 'Quran lessons resume on January 8, 2025.',
    'events.ann2': 'Donations for aid are being accepted.',
    'events.ann3': 'New prayer times from January on our website.',
    
    // Donation
    'donate.title': 'Support Our Mosque',
    'donate.description': 'Help us build a new mosque for our community. Your donation makes a difference.',
    'donate.bankDetails': 'Bank Details',
    'donate.accountHolder': 'Account Holder:',
    'donate.bank': 'Bank:',
    'donate.germany': 'Germany',
    'donate.note': 'Every donation, big or small, brings us closer to our dream of a new mosque. May Allah reward your generosity. 🤲',
    'donate.cta': 'Donate Now',
    
    // Gallery
    'gallery.label': 'Gallery',
    'gallery.title': 'Our Future Mosque',
    'gallery.description': 'The mosque we will build InshaAllah - Glimpses of our vision and community.',
    'gallery.mosque': 'Our Future Mosque',
    'gallery.prayer': 'Congregational Prayer',
    'gallery.quran': 'Quran Lessons',
    'gallery.community': 'Community Life',
    'gallery.education': 'Islamic Education',
    'gallery.events': 'Events',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Visit Us',
    'contact.description': 'We look forward to your visit. For questions, we are happy to help.',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening Hours',
    'contact.hoursValue': 'Daily: 30 min before Fajr until after Isha',
    'contact.whatsapp': 'Contact on WhatsApp',
    'contact.formTitle': 'Send a Message',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Your Message',
    'contact.formSubmit': 'Send Message',
    'contact.formSending': 'Sending...',
    'contact.formSuccess': 'Message Sent',
    'contact.formSuccessDesc': 'Thank you! We will get back to you soon.',
    
    // Leadership
    'leadership.label': 'Our Leadership',
    'leadership.title': 'Board & Imam',
    'leadership.description': 'The team that leads our mosque and community.',
    'leadership.board': 'Current Mosque Board',
    'leadership.president': 'President',
    'leadership.vicePresident': 'Vice President',
    'leadership.treasurer': 'Treasurer',
    'leadership.secretary': 'Secretary',
    'leadership.advisor': 'Advisor',
    'leadership.imam': 'Mosque Imam',
    'leadership.imamTitle': 'Imam',
    'leadership.imamDesc': 'Our Imam leads the prayers, delivers the Friday sermon, and is available to the community for religious questions and counseling.',

    // Footer
    'footer.tagline': 'A place of peace and community for Muslims in Osnabrück.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forCommunity': 'for our community',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.prayerTimes': 'مواقيت الصلاة',
    'nav.services': 'خدماتنا',
    'nav.events': 'الفعاليات',
    'nav.gallery': 'معرض الصور',
    'nav.contact': 'اتصل بنا',
    'nav.leadership': 'الإدارة',
    'nav.donate': 'تبرع',
    
    // Hero
    'hero.welcome': 'أهلاً وسهلاً',
    'hero.title': 'المسجد الألباني',
    'hero.subtitle': 'الجالية في أوسنابروك',
    'hero.description': 'مكان للسلام والصلاة والأخوة للمسلمين في أوسنابروك والمناطق المحيطة.',
    'hero.viewPrayerTimes': 'مواقيت الصلاة',
    'hero.learnMore': 'اعرف المزيد',
    'hero.more': 'المزيد',
    
    // Prayer Times
    'prayer.title': 'مواقيت الصلاة',
    'prayer.subtitle': 'الصلوات اليومية',
    'prayer.fajr': 'الفجر',
    'prayer.dhuhr': 'الظهر',
    'prayer.asr': 'العصر',
    'prayer.maghrib': 'المغرب',
    'prayer.isha': 'العشاء',
    'prayer.jumuah': 'صلاة الجمعة',
    'prayer.jumuahSub': 'صلاة يوم الجمعة',
    'prayer.khutbah': 'تبدأ الخطبة في',
    'prayer.loading': 'جاري تحميل مواقيت الصلاة...',
    'prayer.error': 'خطأ في تحميل مواقيت الصلاة',
    
    // About
    'about.label': 'من نحن',
    'about.title': 'مسجدنا،',
    'about.titleHighlight': ' مجتمعكم',
    'about.p1': 'المسجد الألباني في أوسنابروك هو البيت الروحي للجالية المسلمة الألبانية في أوسنابروك والمناطق المحيطة منذ سنوات عديدة.',
    'about.p2': 'هدفنا هو توفير مكان ترحيبي حيث يمكن للمسلمين من جميع الخلفيات أن يجتمعوا للصلاة والتعلم والنمو كمجتمع.',
    'about.p3': 'نحن نولي أهمية كبيرة للحفاظ على هويتنا الدينية والثقافية مع تعزيز الاندماج في المجتمع الألماني.',
    'about.since': 'منذ عام 2019',
    'about.serving': 'ساعدونا في بناء مسجد جديد',
    'about.community': 'المجتمع',
    'about.communityDesc': 'نعزز الشعور بالانتماء والدعم المتبادل.',
    'about.education': 'التعليم',
    'about.educationDesc': 'التعليم الإسلامي لجميع الأعمار باللغتين الألمانية والألبانية.',
    'about.integration': 'الاندماج',
    'about.integrationDesc': 'بناء جسور بين الثقافات والأجيال في مدينتنا.',
    
    // Services
    'services.label': 'خدماتنا',
    'services.title': 'خدمات للمجتمع',
    'services.description': 'نقدم خدمات دينية واجتماعية متنوعة لمجتمعنا.',
    'services.jumuah': 'صلاة الجمعة',
    'services.jumuahDesc': 'كل يوم جمعة ندعوكم بحرارة لصلاة الجمعة الجماعية. تُلقى الخطبة باللغتين الألبانية والألمانية.',
    'services.jumuahTime': '1:00 - 2:00 ظهراً',
    'services.islamic': 'التعليم الإسلامي',
    'services.islamicDesc': 'تعليم ديني للأطفال والشباب. دروس القرآن والأساسيات الإسلامية والأخلاق.',
    'services.islamicTime': 'السبت والأحد',
    'services.community': 'أنشطة المجتمع',
    'services.communityDesc': 'لقاءات منتظمة ومحاضرات وفعاليات اجتماعية لجميع أفراد العائلة.',
    'services.communityTime': 'حسب الإعلان',
    'services.nikah': 'النكاح والجنازة',
    'services.nikahDesc': 'إجراء عقود الزواج الإسلامي والمرافقة في حالات الوفاة وفقاً للتقاليد الإسلامية.',
    'services.nikahTime': 'بموعد مسبق',
    
    // Events
    'events.label': 'الأخبار',
    'events.title': 'الفعاليات والإعلانات',
    'events.upcoming': 'الفعاليات القادمة',
    'events.announcements': 'الإعلانات',
    'events.allAnnouncements': 'جميع الإعلانات',
    'events.lecture': 'محاضرة إسلامية',
    'events.lectureDesc': 'الموضوع: أهمية الصبر في الإسلام',
    'events.lectureTime': 'كل يوم سبت',
    'events.eid': 'عيد الفطر (مبدئي)',
    'events.eidDesc': 'صلاة العيد في نهاية رمضان',
    'events.eidTime': 'سيتم الإعلان لاحقاً',
    'events.iftar': 'إفطار جماعي',
    'events.iftarDesc': 'إفطار جماعي خلال شهر رمضان',
    'events.ann1': 'تستأنف دروس القرآن في 8 يناير 2025.',
    'events.ann2': 'نستقبل التبرعات للمساعدة.',
    'events.ann3': 'مواقيت الصلاة الجديدة من يناير على موقعنا.',
    
    // Donation
    'donate.title': 'ادعم مسجدنا',
    'donate.description': 'ساعدونا في بناء مسجد جديد لمجتمعنا. تبرعك يحدث فرقاً.',
    'donate.bankDetails': 'التفاصيل البنكية',
    'donate.accountHolder': 'صاحب الحساب:',
    'donate.bank': 'البنك:',
    'donate.germany': 'ألمانيا',
    'donate.note': 'كل تبرع، كبيراً كان أم صغيراً، يقربنا من حلمنا ببناء مسجد جديد. جزاكم الله خيراً على كرمكم. 🤲',
    'donate.cta': 'تبرع الآن',
    
    // Gallery
    'gallery.label': 'معرض الصور',
    'gallery.title': 'مسجدنا المستقبلي',
    'gallery.description': 'المسجد الذي سنبنيه إن شاء الله - لمحات من رؤيتنا ومجتمعنا.',
    'gallery.mosque': 'مسجدنا المستقبلي',
    'gallery.prayer': 'الصلاة الجماعية',
    'gallery.quran': 'دروس القرآن',
    'gallery.community': 'حياة المجتمع',
    'gallery.education': 'التعليم الإسلامي',
    'gallery.events': 'الفعاليات',
    
    // Contact
    'contact.label': 'اتصل بنا',
    'contact.title': 'زوروناا',
    'contact.description': 'نتطلع لزيارتكم. نحن سعداء بالإجابة على استفساراتكم.',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursValue': 'يومياً: 30 دقيقة قبل الفجر حتى بعد العشاء',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.formTitle': 'أرسل رسالة',
    'contact.formName': 'اسمك',
    'contact.formEmail': 'بريدك الإلكتروني',
    'contact.formMessage': 'رسالتك',
    'contact.formSubmit': 'إرسال الرسالة',
    'contact.formSending': 'جاري الإرسال...',
    'contact.formSuccess': 'تم إرسال الرسالة',
    'contact.formSuccessDesc': 'شكراً لك! سنتواصل معك قريباً.',
    
    // Leadership
    'leadership.label': 'قيادتنا',
    'leadership.title': 'مجلس الإدارة والإمام',
    'leadership.description': 'الفريق الذي يقود مسجدنا ومجتمعنا.',
    'leadership.board': 'مجلس إدارة المسجد الحالي',
    'leadership.president': 'الرئيس',
    'leadership.vicePresident': 'نائب الرئيس',
    'leadership.treasurer': 'أمين الصندوق',
    'leadership.secretary': 'السكرتير',
    'leadership.advisor': 'المستشار',
    'leadership.imam': 'إمام المسجد',
    'leadership.imamTitle': 'إمام',
    'leadership.imamDesc': 'يقود إمامنا الصلوات ويلقي خطبة الجمعة وهو متاح للمجتمع للإجابة على الأسئلة الدينية والإرشاد.',

    // Footer
    'footer.tagline': 'مكان للسلام والأخوة للمسلمين في أوسنابروك.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.ourServices': 'خدماتنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.madeWith': 'صنع بـ',
    'footer.forCommunity': 'لمجتمعنا',
  },
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.prayerTimes': 'Namaz Vakitleri',
    'nav.services': 'Hizmetler',
    'nav.events': 'Etkinlikler',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    'nav.leadership': 'Yönetim',
    'nav.donate': 'Bağış',
    
    // Hero
    'hero.welcome': 'Hoş Geldiniz',
    'hero.title': 'Arnavut Camii',
    'hero.subtitle': 'Osnabrück Diasporası',
    'hero.description': 'Osnabrück ve çevresindeki Müslümanlar için barış, ibadet ve kardeşlik mekânı.',
    'hero.viewPrayerTimes': 'Namaz Vakitlerini Gör',
    'hero.learnMore': 'Daha Fazla Bilgi',
    'hero.more': 'Daha Fazla',
    
    // Prayer Times
    'prayer.title': 'Namaz Vakitleri',
    'prayer.subtitle': 'Günlük Namazlar',
    'prayer.fajr': 'Sabah',
    'prayer.dhuhr': 'Öğle',
    'prayer.asr': 'İkindi',
    'prayer.maghrib': 'Akşam',
    'prayer.isha': 'Yatsı',
    'prayer.jumuah': 'Cuma Namazı',
    'prayer.jumuahSub': 'Cuma Namazı',
    'prayer.khutbah': 'Hutbe şu saatte başlar:',
    'prayer.loading': 'Namaz vakitleri yükleniyor...',
    'prayer.error': 'Namaz vakitleri yüklenirken hata oluştu',
    
    // About
    'about.label': 'Hakkımızda',
    'about.title': 'Camimiz,',
    'about.titleHighlight': ' Cemaatiniz',
    'about.p1': 'Osnabrück Arnavut Camii, yıllardır Osnabrück ve çevresindeki Arnavut Müslüman topluluğunun manevi evidir.',
    'about.p2': 'Amacımız, her kesimden Müslümanın bir araya gelerek ibadet edebileceği, öğrenebileceği ve toplum olarak büyüyebileceği misafirperver bir alan sunmaktır.',
    'about.p3': 'Dini ve kültürel kimliğimizi korumaya büyük önem verirken, Alman toplumuna entegrasyonu da teşvik ediyoruz.',
    'about.since': "2019'dan beri",
    'about.serving': 'Yeni bir cami inşa etmemize yardım edin',
    'about.community': 'Cemaat',
    'about.communityDesc': 'Güçlü bir aidiyet duygusu ve karşılıklı destek ortamı oluşturuyoruz.',
    'about.education': 'Eğitim',
    'about.educationDesc': 'Almanca ve Arnavutça olarak her yaş için İslami eğitim.',
    'about.integration': 'Entegrasyon',
    'about.integrationDesc': 'Şehrimizde kültürler ve nesiller arasında köprüler kuruyoruz.',
    
    // Services
    'services.label': 'Hizmetlerimiz',
    'services.title': 'Cemaat İçin Hizmetler',
    'services.description': 'Cemaatimiz için çeşitli dini ve sosyal hizmetler sunuyoruz.',
    'services.jumuah': 'Cuma Namazı',
    'services.jumuahDesc': 'Her Cuma sizi cemaatle Cuma namazına davet ediyoruz. Hutbe Arnavutça ve Almanca olarak verilmektedir.',
    'services.jumuahTime': '13:00 - 14:00',
    'services.islamic': 'İslami Eğitim',
    'services.islamicDesc': 'Çocuklar ve gençler için din eğitimi. Kuran dersleri, İslami temeller ve ahlak.',
    'services.islamicTime': 'Cumartesi ve Pazar',
    'services.community': 'Cemaat Etkinlikleri',
    'services.communityDesc': 'Tüm aile için düzenli toplantılar, dersler ve sosyal etkinlikler.',
    'services.communityTime': 'Duyuruya göre',
    'services.nikah': 'Nikah ve Cenaze',
    'services.nikahDesc': 'İslami geleneklere uygun nikah akdi ve cenaze işlemlerinde refakat.',
    'services.nikahTime': 'Randevu ile',
    
    // Events
    'events.label': 'Güncel',
    'events.title': 'Etkinlikler ve Duyurular',
    'events.upcoming': 'Yaklaşan Etkinlikler',
    'events.announcements': 'Duyurular',
    'events.allAnnouncements': 'Tüm Duyurular',
    'events.lecture': 'İslami Ders',
    'events.lectureDesc': 'Konu: İslamda Sabrın Önemi',
    'events.lectureTime': 'Her Cumartesi',
    'events.eid': 'Ramazan Bayramı (tahmini)',
    'events.eidDesc': 'Ramazanın sonunda Bayram namazı',
    'events.eidTime': 'Duyurulacak',
    'events.iftar': 'Cemaat İftarı',
    'events.iftarDesc': 'Ramazanda birlikte iftar açma',
    'events.ann1': 'Kuran dersleri 8 Ocak 2025\'te yeniden başlıyor.',
    'events.ann2': 'Yardım için bağışlar kabul edilmektedir.',
    'events.ann3': 'Ocak ayından itibaren yeni namaz vakitleri sitemizde.',
    
    // Donation
    'donate.title': 'Camimizi Destekleyin',
    'donate.description': 'Cemaatimiz için yeni bir cami inşa etmemize yardım edin. Bağışınız fark yaratır.',
    'donate.bankDetails': 'Banka Bilgileri',
    'donate.accountHolder': 'Hesap Sahibi:',
    'donate.bank': 'Banka:',
    'donate.germany': 'Almanya',
    'donate.note': 'Her bağış, büyük ya da küçük, bizi yeni cami hayalimize yaklaştırır. Allah cömertliğinizi mükâfatlandırsın. 🤲',
    'donate.cta': 'Şimdi Bağış Yap',
    
    // Gallery
    'gallery.label': 'Galeri',
    'gallery.title': 'Gelecekteki Camimiz',
    'gallery.description': "İnşallah inşa edeceğimiz cami - Vizyonumuzdan ve cemaatimizden görüntüler.",
    'gallery.mosque': 'Gelecekteki Camimiz',
    'gallery.prayer': 'Cemaatle Namaz',
    'gallery.quran': 'Kuran Dersleri',
    'gallery.community': 'Cemaat Hayatı',
    'gallery.education': 'İslami Eğitim',
    'gallery.events': 'Etkinlikler',
    
    // Contact
    'contact.label': 'İletişim',
    'contact.title': 'Bizi Ziyaret Edin',
    'contact.description': 'Ziyaretinizi bekliyoruz. Sorularınız için size yardımcı olmaktan mutluluk duyarız.',
    'contact.info': 'İletişim Bilgileri',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.hours': 'Açılış Saatleri',
    'contact.hoursValue': 'Her gün: Sabah namazından 30 dk önce - Yatsıdan sonra',
    'contact.whatsapp': 'WhatsApp ile İletişim',
    'contact.formTitle': 'Mesaj Gönder',
    'contact.formName': 'Adınız',
    'contact.formEmail': 'E-posta Adresiniz',
    'contact.formMessage': 'Mesajınız',
    'contact.formSubmit': 'Mesaj Gönder',
    'contact.formSending': 'Gönderiliyor...',
    'contact.formSuccess': 'Mesaj Gönderildi',
    'contact.formSuccessDesc': 'Teşekkürler! En kısa sürede size döneceğiz.',
    
    // Leadership
    'leadership.label': 'Yönetimimiz',
    'leadership.title': 'Yönetim Kurulu ve İmam',
    'leadership.description': 'Camimizi ve cemaatimizi yöneten ekip.',
    'leadership.board': 'Mevcut Cami Yönetim Kurulu',
    'leadership.president': 'Başkan',
    'leadership.vicePresident': 'Başkan Yardımcısı',
    'leadership.treasurer': 'Sayman',
    'leadership.secretary': 'Sekreter',
    'leadership.advisor': 'Danışman',
    'leadership.imam': 'Cami İmamı',
    'leadership.imamTitle': 'İmam',
    'leadership.imamDesc': 'İmamımız namazları kıldırır, Cuma hutbesini verir ve dini sorular ve rehberlik için cemaatimizin hizmetindedir.',

    // Footer
    'footer.tagline': "Osnabrück'teki Müslümanlar için barış ve kardeşlik mekânı.",
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.ourServices': 'Hizmetlerimiz',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.madeWith': 'ile yapıldı',
    'footer.forCommunity': 'cemaatimiz için',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
