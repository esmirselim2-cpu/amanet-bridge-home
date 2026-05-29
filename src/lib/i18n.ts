import { createContext, useContext } from "react";

export type Lang = "bs" | "de";

export const translations = {
  bs: {
    nav: { how: "Kako funkcioniše", packages: "Paketi", faq: "FAQ", contact: "Kontakt", cta: "Pošaljite upit" },
    hero: {
      eyebrow: "Premium concierge za porodice u dijaspori",
      title: "Vaši roditelji nisu sami kada vi niste tu.",
      subtitle:
        "AMANET pomaže porodicama iz dijaspore da brinu o svojim roditeljima u Srebreniku i okolini kroz redovne posjete, kupovinu lijekova i namirnica, plaćanje računa, pratnju doktoru i transparentno izvještavanje.",
      cta1: "Zakažite informativni poziv",
      cta2: "Pošaljite upit",
      note: "Trenutno dostupno za područje Srebrenika i okoline.",
      slogan: "Kad vi niste tu, mi jesmo.",
    },
    problem: {
      title: "Kada živite daleko, briga nikada ne prestaje.",
      points: [
        "Roditelji žive sami, a vi ste u Njemačkoj, Austriji ili Švicarskoj.",
        "Teško je znati kako su zaista — telefonski razgovor ne kaže sve.",
        "Mali problemi postaju veliki kada ste stotinama kilometara daleko.",
        "Uvijek ostaje isto pitanje: „Ko će otići ako nešto zatreba?“",
      ],
    },
    solution: {
      title: "AMANET je vaša produžena ruka u Srebreniku.",
      kicker: "Mi nismo —",
      notList: ["dom za njegu", "medicinska ustanova", "hitna služba"],
      areList: [
        "Redovna prisutnost i obilazak roditelja",
        "Kupovina lijekova i namirnica",
        "Plaćanje računa",
        "Pratnja doktoru u Srebreniku",
        "Organizacija pomoći i koordinacija",
        "Transparentno izvještavanje porodice",
      ],
      areTitle: "Mi jesmo —",
    },
    how: {
      title: "Jednostavno, transparentno i bez komplikacija.",
      steps: [
        { t: "Upit ili poziv", d: "Pošaljete upit ili zakažete besplatan informativni poziv." },
        { t: "Razgovor o potrebama", d: "Zajedno definišemo potrebe vaše porodice." },
        { t: "Odabir paketa", d: "Dogovaramo odgovarajući paket podrške." },
        { t: "Redovne posjete", d: "Počinju planirane posjete vašim roditeljima." },
        { t: "Izvještaj nakon posjete", d: "Dobijate fotografije računa, potvrde i kratku informaciju o posjeti." },
        { t: "Mjesečni izvještaj", d: "Na kraju mjeseca dobijate detaljan pregled svih aktivnosti." },
      ],
    },
    visit: {
      title: "Šta je posjeta?",
      lead:
        "AMANET ne prodaje pojedinačne zadatke. AMANET prodaje posjete i prisutnost. Jedna posjeta podrazumijeva jedan izlazak na adresu korisnika.",
      includesTitle: "Tokom jedne posjete mogu se obaviti:",
      includes: [
        "Kupovina namirnica",
        "Kupovina lijekova",
        "Plaćanje računa",
        "Razgovor sa korisnikom",
        "Osnovna provjera stanja",
        "Dostava potrebnih stvari",
      ],
      foot: "Sve navedeno računa se kao jedna posjeta.",
    },
    money: {
      title: "Vaš novac ostaje pod vašom kontrolom.",
      lead:
        "Za kupovine i plaćanja koristi se posebna platna kartica namijenjena isključivo potrebama vaših roditelja. Kartica nije povezana sa glavnim računom klijenta.",
      forTitle: "Kartica služi samo za:",
      for: ["Lijekove", "Namirnice", "Račune", "Unaprijed dogovorene troškove"],
      afterTitle: "Nakon svake kupovine porodica dobija:",
      after: ["Fotografiju računa", "Potvrdu kupovine", "Informaciju o posjeti"],
      bullets: [
        "Nema depozita",
        "Nema gotovine",
        "Nema skrivenih troškova",
        "Svaka kupovina ima račun",
        "Svaka posjeta se evidentira",
      ],
      footer: "Transparentnost je temelj povjerenja.",
    },
    packages: {
      title: "Odaberite nivo podrške koji odgovara vašoj porodici.",
      monthly: "KM mjesečno",
      popular: "Najpopularniji",
      cta: "Pošaljite upit",
      items: [
        {
          name: "AMANET BASIC",
          price: "199",
          for: "Namijenjeno roditeljima koji su uglavnom samostalni.",
          features: [
            "2 posjete mjesečno",
            "Kupovina lijekova tokom posjete",
            "Kupovina namirnica tokom posjete",
            "Plaćanje računa tokom posjete",
            "Fotografije računa i potvrda",
            "Kratki izvještaj nakon svake posjete",
          ],
        },
        {
          name: "AMANET STANDARD",
          price: "399",
          for: "Porodicama koje žele sedmični kontakt sa roditeljima.",
          features: [
            "4 posjete mjesečno",
            "Kupovina lijekova tokom posjete",
            "Kupovina namirnica tokom posjete",
            "Plaćanje računa tokom posjete",
            "Fotografije računa i potvrda",
            "Mjesečni izvještaj",
            "Prioritet planiranja termina",
          ],
        },
        {
          name: "AMANET PREMIUM",
          price: "699",
          for: "Porodicama kojima je potreban češći kontakt i podrška.",
          features: [
            "8 posjeta mjesečno",
            "4 telefonske provjere između posjeta",
            "2 pratnje doktoru u Srebreniku mjesečno",
            "Kupovina lijekova tokom posjeta",
            "Kupovina namirnica tokom posjeta",
            "Plaćanje računa tokom posjeta",
            "Fotografije računa i potvrda",
            "Detaljan mjesečni izvještaj",
          ],
        },
      ],
    },
    capacity: {
      title: "Kvalitet ispred kvantiteta.",
      lead:
        "AMANET namjerno radi sa ograničenim brojem porodica. Svaka porodica zaslužuje punu pažnju.",
      counter: "Dostupna mjesta",
    },
    faq: {
      title: "Često postavljana pitanja",
      items: [
        { q: "Da li AMANET pruža medicinsku njegu?", a: "Ne. AMANET nije medicinska ustanova niti služba njege. Pružamo organizacionu podršku, pratnju i prisustvo. Za medicinske intervencije sarađujemo sa lokalnim zdravstvenim ustanovama." },
        { q: "Kako funkcioniše kartica za kupovine?", a: "Koristimo posebnu platnu karticu rezervisanu isključivo za potrebe vaših roditelja, sa unaprijed dogovorenim limitima i namjenama. Kartica nije povezana sa vašim glavnim računom." },
        { q: "Da li moram slati svoju glavnu karticu?", a: "Ne. Nikada ne tražimo vašu ličnu karticu, PIN-ove niti pristup vašem bankovnom računu." },
        { q: "Kako dobijam izvještaje?", a: "Nakon svake posjete dobijate kratki izvještaj, fotografije računa i potvrde putem WhatsApp-a ili emaila. Na kraju mjeseca šaljemo zbirni izvještaj." },
        { q: "Šta ako roditelj ne želi pomoć?", a: "Pristupamo s poštovanjem i strpljenjem. Prvi sastanak je upoznavanje — bez obaveze. Tempo gradimo prema vašim roditeljima." },
        { q: "Da li postoji ugovor?", a: "Da, potpisujemo jednostavan mjesečni ugovor koji jasno definiše obaveze, paket i način izvještavanja. Bez dugoročnog vezivanja." },
        { q: "Kako se štite lični podaci?", a: "Podaci se obrađuju u skladu sa GDPR principima, čuvaju se sigurno i koriste isključivo za pružanje usluge." },
        { q: "Da li radite van Srebrenika?", a: "Trenutno opslužujemo Srebrenik, Špionicu, Tinju, Donji Srebrenik, Rapatnicu, Ćehaje i okolna naselja." },
      ],
    },
    form: {
      title: "Pošaljite upit",
      subtitle: "Odgovaramo u najkraćem mogućem roku, obično isti dan.",
      fields: {
        name: "Ime i prezime",
        email: "Email",
        phone: "Telefon / WhatsApp",
        country: "Država iz koje se javljate",
        city: "Grad u kojem žive roditelji",
        count: "Broj roditelja kojima treba podrška",
        type: "Vrsta pomoći koja vam je potrebna",
        desc: "Kratki opis situacije",
        call: "Želite li zakazati informativni poziv?",
        time: "Preferirani termin poziva",
        gdpr: "Saglasan/na sam sa obradom mojih podataka u skladu sa politikom privatnosti.",
        submit: "Pošaljite upit",
        success: "Hvala vam. Vaš upit je zaprimljen. Kontaktirat ćemo vas u najkraćem mogućem roku.",
        yes: "Da",
        no: "Ne",
      },
    },
    schedule: {
      title: "Zakažite besplatan 15-minutni informativni razgovor.",
      lead: "Bez obaveze. Samo razgovor da razumijemo situaciju vaše porodice.",
      cta: "Otvorite kalendar",
    },
    contact: {
      title: "Kontakt",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Lokacija",
      locationVal: "Srebrenik, Bosna i Hercegovina",
      primary: "Primarni kontakt je WhatsApp i email.",
    },
    footer: {
      tagline: "Podrška porodicama u dijaspori",
      area: "Srebrenik i okolina",
      rights: "Sva prava zadržana.",
      links: { home: "Početna", how: "Kako funkcioniše", packages: "Paketi", contact: "Kontakt", privacy: "Politika privatnosti", terms: "Uslovi korištenja" },
    },
    wa: {
      msg: "Pozdrav. Zainteresovan/a sam za AMANET uslugu za roditelje u Srebreniku i želim više informacija.",
    },
  },
  de: {
    nav: { how: "So funktioniert es", packages: "Pakete", faq: "FAQ", contact: "Kontakt", cta: "Anfrage senden" },
    hero: {
      eyebrow: "Premium-Concierge für Familien in der Diaspora",
      title: "Ihre Eltern sind nicht allein, wenn Sie nicht da sein können.",
      subtitle:
        "AMANET unterstützt Familien aus der Diaspora bei der Betreuung ihrer Eltern in Srebrenik und Umgebung — durch regelmäßige Besuche, Einkauf von Medikamenten und Lebensmitteln, Begleichung von Rechnungen, Arztbegleitung und transparente Berichte.",
      cta1: "Informationsgespräch vereinbaren",
      cta2: "Anfrage senden",
      note: "Derzeit verfügbar für Srebrenik und Umgebung.",
      slogan: "Wenn Sie nicht da sein können, sind wir da.",
    },
    problem: {
      title: "Wenn Sie weit weg leben, hört die Sorge nie auf.",
      points: [
        "Ihre Eltern leben allein, während Sie in Deutschland, Österreich oder der Schweiz sind.",
        "Es ist schwer zu wissen, wie es ihnen wirklich geht — ein Telefonat sagt nicht alles.",
        "Kleine Probleme werden groß, wenn man Hunderte Kilometer entfernt ist.",
        "Es bleibt immer die Frage: „Wer geht hin, wenn etwas gebraucht wird?“",
      ],
    },
    solution: {
      title: "AMANET ist Ihre verlängerte Hand in Srebrenik.",
      kicker: "Wir sind nicht —",
      notList: ["ein Pflegeheim", "eine medizinische Einrichtung", "ein Notdienst"],
      areTitle: "Wir sind —",
      areList: [
        "Regelmäßige Präsenz und Besuche bei Ihren Eltern",
        "Einkauf von Medikamenten und Lebensmitteln",
        "Begleichung von Rechnungen",
        "Begleitung zum Arzt in Srebrenik",
        "Organisation und Koordination der Hilfe",
        "Transparente Berichte an die Familie",
      ],
    },
    how: {
      title: "Einfach, transparent und ohne Komplikationen.",
      steps: [
        { t: "Anfrage oder Anruf", d: "Sie senden eine Anfrage oder vereinbaren ein kostenloses Informationsgespräch." },
        { t: "Bedarfsgespräch", d: "Gemeinsam definieren wir die Bedürfnisse Ihrer Familie." },
        { t: "Paketauswahl", d: "Wir wählen das passende Unterstützungspaket." },
        { t: "Regelmäßige Besuche", d: "Die geplanten Besuche bei Ihren Eltern beginnen." },
        { t: "Bericht nach jedem Besuch", d: "Sie erhalten Fotos der Quittungen, Bestätigungen und einen kurzen Besuchsbericht." },
        { t: "Monatsbericht", d: "Am Monatsende erhalten Sie eine ausführliche Übersicht aller Aktivitäten." },
      ],
    },
    visit: {
      title: "Was ist ein Besuch?",
      lead:
        "AMANET verkauft keine einzelnen Aufgaben. AMANET verkauft Besuche und Präsenz. Ein Besuch bedeutet einen Termin an der Adresse Ihrer Eltern.",
      includesTitle: "Während eines Besuchs können erledigt werden:",
      includes: [
        "Einkauf von Lebensmitteln",
        "Einkauf von Medikamenten",
        "Begleichung von Rechnungen",
        "Gespräch mit den Eltern",
        "Grundlegende Wohlbefindenskontrolle",
        "Lieferung benötigter Dinge",
      ],
      foot: "All das zählt als ein Besuch.",
    },
    money: {
      title: "Ihr Geld bleibt unter Ihrer Kontrolle.",
      lead:
        "Für Einkäufe und Zahlungen verwenden wir eine separate Bankkarte, die ausschließlich für die Bedürfnisse Ihrer Eltern bestimmt ist. Die Karte ist nicht mit Ihrem Hauptkonto verbunden.",
      forTitle: "Die Karte wird ausschließlich verwendet für:",
      for: ["Medikamente", "Lebensmittel", "Rechnungen", "Vorab vereinbarte Ausgaben"],
      afterTitle: "Nach jedem Einkauf erhält die Familie:",
      after: ["Foto der Quittung", "Kaufbestätigung", "Information zum Besuch"],
      bullets: [
        "Keine Kaution",
        "Kein Bargeld",
        "Keine versteckten Kosten",
        "Jeder Einkauf hat eine Quittung",
        "Jeder Besuch wird dokumentiert",
      ],
      footer: "Transparenz ist die Grundlage des Vertrauens.",
    },
    packages: {
      title: "Wählen Sie das Unterstützungsniveau, das zu Ihrer Familie passt.",
      monthly: "KM monatlich",
      popular: "Beliebteste Wahl",
      cta: "Anfrage senden",
      items: [
        {
          name: "AMANET BASIC",
          price: "199",
          for: "Für Eltern, die größtenteils selbstständig sind.",
          features: [
            "2 Besuche pro Monat",
            "Einkauf von Medikamenten während des Besuchs",
            "Einkauf von Lebensmitteln während des Besuchs",
            "Begleichung von Rechnungen während des Besuchs",
            "Fotos der Quittungen und Bestätigungen",
            "Kurzbericht nach jedem Besuch",
          ],
        },
        {
          name: "AMANET STANDARD",
          price: "399",
          for: "Für Familien, die wöchentlichen Kontakt zu ihren Eltern wünschen.",
          features: [
            "4 Besuche pro Monat",
            "Einkauf von Medikamenten während des Besuchs",
            "Einkauf von Lebensmitteln während des Besuchs",
            "Begleichung von Rechnungen während des Besuchs",
            "Fotos der Quittungen und Bestätigungen",
            "Monatsbericht",
            "Priorität bei der Terminplanung",
          ],
        },
        {
          name: "AMANET PREMIUM",
          price: "699",
          for: "Für Familien, die häufigeren Kontakt und Unterstützung benötigen.",
          features: [
            "8 Besuche pro Monat",
            "4 telefonische Kontrollen zwischen den Besuchen",
            "2 Arztbegleitungen in Srebrenik pro Monat",
            "Einkauf von Medikamenten",
            "Einkauf von Lebensmitteln",
            "Begleichung von Rechnungen",
            "Fotos der Quittungen und Bestätigungen",
            "Ausführlicher Monatsbericht",
          ],
        },
      ],
    },
    capacity: {
      title: "Qualität vor Quantität.",
      lead:
        "AMANET arbeitet bewusst mit einer begrenzten Anzahl von Familien. Jede Familie verdient volle Aufmerksamkeit.",
      counter: "Verfügbare Plätze",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Bietet AMANET medizinische Pflege an?", a: "Nein. AMANET ist weder eine medizinische Einrichtung noch ein Pflegedienst. Wir bieten organisatorische Unterstützung, Begleitung und Präsenz. Für medizinische Eingriffe arbeiten wir mit lokalen Gesundheitseinrichtungen zusammen." },
        { q: "Wie funktioniert die Einkaufskarte?", a: "Wir verwenden eine separate Bankkarte, ausschließlich für die Bedürfnisse Ihrer Eltern, mit vorher vereinbarten Limits und Verwendungszwecken. Die Karte ist nicht mit Ihrem Hauptkonto verbunden." },
        { q: "Muss ich meine Hauptkarte senden?", a: "Nein. Wir verlangen niemals Ihre persönliche Karte, PINs oder Zugang zu Ihrem Bankkonto." },
        { q: "Wie erhalte ich die Berichte?", a: "Nach jedem Besuch erhalten Sie einen Kurzbericht, Fotos der Quittungen und Bestätigungen per WhatsApp oder E-Mail. Am Monatsende senden wir einen zusammenfassenden Bericht." },
        { q: "Was, wenn ein Elternteil keine Hilfe möchte?", a: "Wir gehen respektvoll und geduldig vor. Das erste Treffen ist ein Kennenlernen — ohne Verpflichtung. Wir richten unser Tempo nach Ihren Eltern." },
        { q: "Gibt es einen Vertrag?", a: "Ja, wir unterzeichnen einen einfachen monatlichen Vertrag, der Leistungen, Paket und Berichterstattung klar regelt. Keine langfristige Bindung." },
        { q: "Wie werden persönliche Daten geschützt?", a: "Die Daten werden gemäß DSGVO-Grundsätzen verarbeitet, sicher gespeichert und ausschließlich zur Erbringung der Dienstleistung verwendet." },
        { q: "Arbeiten Sie auch außerhalb von Srebrenik?", a: "Derzeit betreuen wir Srebrenik, Špionica, Tinja, Donji Srebrenik, Rapatnica, Ćehaje und umliegende Orte." },
      ],
    },
    form: {
      title: "Anfrage senden",
      subtitle: "Wir antworten so schnell wie möglich, in der Regel am selben Tag.",
      fields: {
        name: "Vor- und Nachname",
        email: "E-Mail",
        phone: "Telefon / WhatsApp",
        country: "Land, aus dem Sie sich melden",
        city: "Stadt, in der Ihre Eltern leben",
        count: "Anzahl der Eltern, die Unterstützung benötigen",
        type: "Art der benötigten Hilfe",
        desc: "Kurze Beschreibung der Situation",
        call: "Möchten Sie ein Informationsgespräch vereinbaren?",
        time: "Bevorzugter Anrufzeitpunkt",
        gdpr: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.",
        submit: "Anfrage senden",
        success: "Vielen Dank. Ihre Anfrage ist eingegangen. Wir melden uns so schnell wie möglich bei Ihnen.",
        yes: "Ja",
        no: "Nein",
      },
    },
    schedule: {
      title: "Vereinbaren Sie ein kostenloses 15-minütiges Informationsgespräch.",
      lead: "Ohne Verpflichtung. Nur ein Gespräch, um die Situation Ihrer Familie zu verstehen.",
      cta: "Kalender öffnen",
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      location: "Standort",
      locationVal: "Srebrenik, Bosnien und Herzegowina",
      primary: "Bevorzugter Kontakt ist WhatsApp und E-Mail.",
    },
    footer: {
      tagline: "Unterstützung für Familien in der Diaspora",
      area: "Srebrenik und Umgebung",
      rights: "Alle Rechte vorbehalten.",
      links: { home: "Startseite", how: "So funktioniert es", packages: "Pakete", contact: "Kontakt", privacy: "Datenschutz", terms: "Nutzungsbedingungen" },
    },
    wa: {
      msg: "Hallo. Ich interessiere mich für den AMANET-Service für meine Eltern in Srebrenik und hätte gerne weitere Informationen.",
    },
  },
};

export type Dict = typeof translations.bs;

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "bs",
  setLang: () => {},
  t: translations.bs,
});

export const useI18n = () => useContext(I18nContext);
