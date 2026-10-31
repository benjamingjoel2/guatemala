/**
 * Privacy policy, booking terms and cookie policy, per locale. Plain text; [text](/path)
 * becomes a link. A lawyer should review these before launch.
 */
export type LegalDoc = { title: string; description: string; sections: { h: string; p: string[] }[] };
export type LegalSet = { privacy: LegalDoc; terms: LegalDoc; cookies: LegalDoc };

export const legalUpdated: Record<string, string> = {"en": "30 October 2026", "fr": "30 octobre 2026", "de": "30. Oktober 2026", "es": "30 de octubre de 2026"};

export const legal: Record<string, LegalSet> = {
  "en": {
    "privacy": {
      "title": "Privacy policy",
      "description": "How Antigua & Beyond collects, uses and protects the personal details you send us.",
      "sections": [
        {
          "h": "Who we are",
          "p": [
            "This website is run by Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. In this policy \"we\", \"us\" and \"our\" mean Antigua & Beyond.",
            "For anything about your personal data, email antiguaandbeyond@tourground.com."
          ]
        },
        {
          "h": "What we collect",
          "p": [
            "Only what you choose to send us: through the enquiry form, through the trip planner, your name, email address, phone number if you give one, travel dates, the size of your party, your interests, budget and notes; through the contact form, your name, email address and message; through the newsletter signup, your email address. If you write to us by email, we keep that correspondence.",
            "If you book, we also collect what is needed to arrange the trip, such as the names of everyone travelling, dates of birth and passport details where suppliers require them, dietary and access needs, and emergency contacts.",
            "Please do not send payment card details or detailed health information by email or through the form."
          ]
        },
        {
          "h": "Why we use it",
          "p": [
            "To answer your enquiry, plan a trip with you and, if you go ahead, book and run it. The legal basis is the steps you ask us to take before entering into a contract, the performance of that contract, your consent where we ask for it, and our legitimate interest in replying to people who contact us.",
            "We do not sell your details, and we only send you news or offers if you ask us to."
          ]
        },
        {
          "h": "Who we share it with",
          "p": [
            "Your enquiry reaches us through our website's server (hosted by Vercel Inc., United States) and our email delivery provider, Resend (United States).",
            "If you book, we share only what is needed with the hotels, lodges, transport companies, guides and local partners in Guatemala who deliver your trip, and with your travel insurer if you ask us to. Some of them are outside your own country; where that is the case, we share the minimum needed to deliver the service you have asked for.",
            "We may also disclose information where the law requires it."
          ]
        },
        {
          "h": "Cookies and local storage",
          "p": [
            "We do not use analytics or advertising cookies on this website. See the [cookie policy](/cookies/) for what the site stores in your browser."
          ]
        },
        {
          "h": "How long we keep it",
          "p": [
            "We keep enquiries that do not become a booking for 24 months from our last contact, then delete them. Booking records are kept for as long as accounting and consumer law require, usually six years after the trip."
          ]
        },
        {
          "h": "How we protect it",
          "p": [
            "Your details are kept in password-protected email and file storage that only the people planning your trip can reach. The website is served over an encrypted connection (HTTPS)."
          ]
        },
        {
          "h": "Your rights",
          "p": [
            "You can ask to see the personal data we hold about you, to correct or delete it, to restrict or object to how we use it, to receive a copy in a portable format, or to withdraw your consent at any time. Email antiguaandbeyond@tourground.com and we will reply within one month.",
            "If you are unhappy with how we handle your data, please tell us first so that we can put it right. You also have the right to complain to the data-protection authority in the country where you live."
          ]
        },
        {
          "h": "Changes to this policy",
          "p": [
            "We will update this page if the way we use personal data changes. Last updated 30 October 2026."
          ]
        }
      ]
    },
    "terms": {
      "title": "Booking terms",
      "description": "The terms that apply when you enquire about, and book, a tailor-made trip with Antigua & Beyond.",
      "sections": [
        {
          "h": "About these terms",
          "p": [
            "These terms apply to every trip planned by Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. Please read them before you book. Your written quote and booking confirmation form part of the contract, together with these terms.",
            "Everything on this website, including itineraries, timings, seasons and experiences, describes the kind of trip we plan. It is not an offer you can accept."
          ]
        },
        {
          "h": "Enquiries and quotes",
          "p": [
            "Sending an enquiry is free and creates no obligation for you or for us.",
            "We reply with ideas and questions, then shape the trip with you. When it is right, we send a written quote. A quote is valid for the period stated on it. Prices for flights, accommodation and services can change until the trip is confirmed, and we will tell you before you commit if they do."
          ]
        },
        {
          "h": "Booking and payment",
          "p": [
            "Your booking is confirmed when you accept the quote in writing, pay the deposit stated on it, and we send you a written confirmation. The person who makes the booking accepts these terms for everyone travelling and must be 18 or over.",
            "The balance is due by the date shown on your quote and confirmation. If it is not paid on time, we may treat the booking as cancelled by you, and the cancellation charges below apply."
          ]
        },
        {
          "h": "Changes by you",
          "p": [
            "If you want to change your trip after it is confirmed, tell us in writing. We will do our best to help. Changes are not always possible, and any extra costs charged by suppliers, plus a reasonable fee for our time, will be passed on to you."
          ]
        },
        {
          "h": "Cancellation by you",
          "p": [
            "You can cancel at any time by telling us in writing. The deposit is non-refundable. The closer to departure you cancel, the higher the charge, up to the full cost of the trip, because accommodation, transport and other services are reserved and paid for on your behalf. The charges that apply to your trip are set out on your quote and confirmation.",
            "Travel insurance may cover cancellation charges in some circumstances."
          ]
        },
        {
          "h": "Changes and cancellation by us",
          "p": [
            "We plan carefully, but sometimes we have to change part of a trip, for example because of weather, road or route closures, or a supplier that cannot honour a booking. We will tell you as soon as possible and offer a comparable alternative.",
            "If we have to make a significant change or cancel your trip, you can accept the change, take a comparable alternative if one is available, or cancel and receive a full refund of the money you have paid us."
          ]
        },
        {
          "h": "Events beyond anyone's control",
          "p": [
            "We are not liable for changes, delays or cancellations caused by events beyond our reasonable control, such as war or threat of war, civil unrest, natural disaster, epidemics, government action, airport or border closures, or severe weather. Where such an event affects your trip, we will help you make other arrangements and pass on any refunds we receive from suppliers."
          ]
        },
        {
          "h": "Travel insurance",
          "p": [
            "Comprehensive travel insurance is a condition of booking. It must cover medical treatment, repatriation and cancellation, and any activities in your trip. Please send us your policy details before you travel."
          ]
        },
        {
          "h": "Passports, visas and health",
          "p": [
            "You are responsible for holding a valid passport, any visas or travel authorisations, and any vaccinations or health documents required for Guatemala and for any country you pass through. Entry rules change, so check them with the relevant embassy and your government's travel advice before you book and again before you travel.",
            "Please tell us before booking about any medical condition or mobility need that could affect your trip, so that we can plan around it."
          ]
        },
        {
          "h": "Your responsibilities",
          "p": [
            "Please follow local laws and customs, the instructions of guides, drivers, crews and other suppliers, and the safety advice we give you. We may end the trip of anyone whose behaviour puts others at risk or causes serious disruption, without refund."
          ]
        },
        {
          "h": "Our liability",
          "p": [
            "We take reasonable care in planning and arranging your trip. We are not liable for loss, injury or damage caused by you, by someone not connected with the trip, or by events beyond our reasonable control.",
            "Where airlines, hotels and other transport companies are concerned, our liability is limited in the same way as theirs is under the international conventions that apply to them. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or any liability that cannot be limited by law."
          ]
        },
        {
          "h": "Complaints",
          "p": [
            "If something is not right during your trip, tell us straight away so that we can try to fix it on the spot. If it cannot be resolved, please write to antiguaandbeyond@tourground.com within 28 days of your return and we will reply promptly."
          ]
        },
        {
          "h": "Governing law",
          "p": [
            "These terms are governed by the law that applies to the contract you make with us, as set out in your booking confirmation. You may also have the protection of the consumer law of the country where you live."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Cookie policy",
      "description": "Which cookies and similar storage the Antigua & Beyond website uses, and how to control them.",
      "sections": [
        {
          "h": "Short version",
          "p": [
            "We do not use analytics or advertising cookies on this website. This website sets no cookies of its own."
          ]
        },
        {
          "h": "What the site stores in your browser",
          "p": [
            "If you change the display currency, your choice is saved in your browser's local storage under ab-currency. If you use the [trip planner](/plan-your-trip), your answers are saved in local storage under ab-trip-planner-v1 so you can pick up where you left off. They stay on your device until you send the planner, and are cleared when you do.",
            "Fonts and photos are served from this website, so no third party is contacted when pages load."
          ]
        },
        {
          "h": "Consent",
          "p": [
            "Anything listed above is strictly necessary for a feature you choose to use, so it does not need your consent. We will not add analytics or advertising cookies without asking you first."
          ]
        },
        {
          "h": "How to remove it or change your mind",
          "p": [
            "You can clear this site's stored data at any time in your browser's settings (usually under Privacy, then Cookies and site data)."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Questions about this policy: email antiguaandbeyond@tourground.com."
          ]
        }
      ]
    }
  },
  "fr": {
    "privacy": {
      "title": "Politique de confidentialité",
      "description": "Comment Antigua & Beyond collecte, utilise et protège les informations personnelles que vous nous transmettez.",
      "sections": [
        {
          "h": "Qui sommes-nous",
          "p": [
            "Ce site est édité par Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. Dans la présente politique, « nous » et « notre » désignent Antigua & Beyond.",
            "Pour toute question relative à vos données personnelles, écrivez à antiguaandbeyond@tourground.com."
          ]
        },
        {
          "h": "Ce que nous collectons",
          "p": [
            "Uniquement ce que vous choisissez de nous transmettre : via le planificateur de voyage, votre nom, votre adresse e-mail, votre numéro de téléphone si vous le donnez, vos dates de voyage, le nombre de voyageurs, vos centres d’intérêt, votre budget et vos remarques ; via le formulaire de contact, votre nom, votre adresse e-mail et votre message ; via l’inscription à la lettre d’information, votre adresse e-mail. Si vous nous écrivez par e-mail, nous conservons cette correspondance.",
            "Si vous réservez, nous recueillons aussi ce qui est nécessaire à l’organisation du voyage : le nom de chaque voyageur, les dates de naissance et les informations de passeport lorsque nos prestataires les exigent, les besoins alimentaires ou d’accessibilité et les contacts d’urgence.",
            "Merci de ne jamais envoyer de numéro de carte bancaire ni d’informations de santé détaillées par e-mail ou via le formulaire."
          ]
        },
        {
          "h": "Pourquoi nous les utilisons",
          "p": [
            "Pour répondre à votre demande, concevoir votre voyage avec vous et, si vous donnez suite, le réserver et l’organiser. Nous nous fondons sur les mesures précontractuelles que vous nous demandez, sur l’exécution du contrat, sur votre consentement lorsque nous le sollicitons et sur notre intérêt légitime à répondre aux personnes qui nous contactent.",
            "Nous ne vendons jamais vos données et ne vous envoyons d’actualités ou d’offres que si vous l’avez demandé."
          ]
        },
        {
          "h": "Avec qui nous les partageons",
          "p": [
            "Votre demande nous parvient via le serveur de notre site (hébergé par Vercel Inc., États-Unis) et notre prestataire d’envoi d’e-mails, Resend (États-Unis).",
            "Si vous réservez, nous ne transmettons que le strict nécessaire aux hôtels, lodges, transporteurs, guides et partenaires locaux qui réalisent votre voyage au Guatemala, ainsi qu’à votre assureur voyage si vous nous le demandez. Certains sont établis hors de votre pays ; dans ce cas, nous ne partageons que le minimum requis pour fournir le service demandé.",
            "Nous pouvons également communiquer des informations lorsque la loi l’exige."
          ]
        },
        {
          "h": "Cookies et stockage local",
          "p": [
            "Nous n’utilisons aucun cookie de mesure d’audience ni de publicité sur ce site. Consultez la [politique relative aux cookies](/cookies/) pour savoir ce que le site enregistre dans votre navigateur."
          ]
        },
        {
          "h": "Durée de conservation",
          "p": [
            "Les demandes qui n’aboutissent pas à une réservation sont conservées 24 mois après notre dernier échange, puis supprimées. Les dossiers de réservation sont conservés aussi longtemps que l’exigent le droit comptable et le droit de la consommation, en général six ans après le voyage."
          ]
        },
        {
          "h": "Comment nous les protégeons",
          "p": [
            "Vos informations sont conservées dans une messagerie et un espace de stockage protégés par mot de passe, accessibles aux seules personnes qui préparent votre voyage. Le site est servi via une connexion chiffrée (HTTPS)."
          ]
        },
        {
          "h": "Vos droits",
          "p": [
            "Vous pouvez demander à consulter les données personnelles que nous détenons sur vous, à les rectifier ou à les effacer, à en limiter l’utilisation ou à vous y opposer, à en recevoir une copie dans un format portable, ou retirer votre consentement à tout moment. Écrivez à antiguaandbeyond@tourground.com : nous répondons sous un mois.",
            "Si vous n’êtes pas satisfait de la manière dont nous traitons vos données, dites-le-nous d’abord afin que nous puissions corriger la situation. Vous pouvez aussi introduire une réclamation auprès de l’autorité de protection des données de votre pays de résidence."
          ]
        },
        {
          "h": "Modifications de cette politique",
          "p": [
            "Nous mettrons cette page à jour si notre utilisation des données personnelles évolue. Dernière mise à jour : 30 octobre 2026."
          ]
        }
      ]
    },
    "terms": {
      "title": "Conditions de réservation",
      "description": "Les conditions qui s’appliquent lorsque vous demandez et réservez un voyage sur mesure avec Antigua & Beyond.",
      "sections": [
        {
          "h": "À propos de ces conditions",
          "p": [
            "Ces conditions s’appliquent à tout voyage organisé par Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. Merci de les lire avant de réserver. Votre devis écrit et votre confirmation de réservation font partie du contrat, avec les présentes conditions.",
            "Tout ce qui figure sur ce site, y compris les itinéraires, durées, saisons et expériences, décrit le type de voyage que nous concevons. Il ne s’agit pas d’une offre que vous pouvez accepter."
          ]
        },
        {
          "h": "Demandes et devis",
          "p": [
            "Une demande est gratuite et n’engage ni vous ni nous.",
            "Nous vous répondons avec des idées et des questions, puis nous affinons le voyage avec vous. Lorsqu’il vous convient, nous vous envoyons un devis écrit, valable pendant la durée qui y est indiquée. Les prix des vols, hébergements et prestations peuvent évoluer jusqu’à la confirmation ; si c’est le cas, nous vous prévenons avant tout engagement."
          ]
        },
        {
          "h": "Réservation et paiement",
          "p": [
            "Votre réservation est confirmée lorsque vous acceptez le devis par écrit, réglez l’acompte qui y figure et recevez notre confirmation écrite. La personne qui réserve accepte ces conditions au nom de tous les voyageurs et doit être âgée d’au moins 18 ans.",
            "Le solde est dû à la date indiquée sur votre devis et votre confirmation. À défaut de paiement dans les délais, nous pouvons considérer la réservation comme annulée de votre fait, et les frais d’annulation ci-dessous s’appliquent."
          ]
        },
        {
          "h": "Modifications de votre part",
          "p": [
            "Si vous souhaitez modifier votre voyage après confirmation, prévenez-nous par écrit. Nous ferons de notre mieux, mais une modification n’est pas toujours possible ; les frais supplémentaires facturés par les prestataires, ainsi que des frais de dossier raisonnables, restent à votre charge."
          ]
        },
        {
          "h": "Annulation de votre part",
          "p": [
            "Vous pouvez annuler à tout moment en nous prévenant par écrit. L’acompte n’est pas remboursable. Plus l’annulation est proche du départ, plus les frais sont élevés, jusqu’à la totalité du prix du voyage, car les hébergements, transports et autres prestations sont réservés et payés pour votre compte. Les frais applicables à votre voyage figurent sur votre devis et votre confirmation.",
            "Votre assurance voyage peut couvrir ces frais dans certains cas."
          ]
        },
        {
          "h": "Modifications et annulation de notre part",
          "p": [
            "Nous préparons chaque voyage avec soin, mais il arrive que nous devions en modifier une partie, par exemple en raison de la météo, de la fermeture d’une route ou d’un itinéraire, ou d’un prestataire qui ne peut honorer une réservation. Nous vous prévenons au plus vite et vous proposons une solution équivalente.",
            "En cas de modification importante ou d’annulation de notre part, vous pouvez accepter la modification, choisir une solution équivalente si elle existe, ou annuler et être intégralement remboursé des sommes versées."
          ]
        },
        {
          "h": "Circonstances exceptionnelles",
          "p": [
            "Nous ne sommes pas responsables des modifications, retards ou annulations dus à des événements échappant à notre contrôle raisonnable : guerre ou menace de guerre, troubles civils, catastrophe naturelle, épidémie, décision des autorités, fermeture d’aéroports ou de frontières, conditions météorologiques extrêmes. Le cas échéant, nous vous aidons à trouver d’autres solutions et vous reversons tout remboursement obtenu auprès des prestataires."
          ]
        },
        {
          "h": "Assurance voyage",
          "p": [
            "Une assurance voyage complète est une condition de réservation. Elle doit couvrir les frais médicaux, le rapatriement, l’annulation et les activités prévues. Merci de nous transmettre les références de votre contrat avant le départ."
          ]
        },
        {
          "h": "Passeports, visas et santé",
          "p": [
            "Il vous appartient de disposer d’un passeport valide, des visas ou autorisations de voyage nécessaires et des vaccinations ou documents sanitaires exigés pour le Guatemala et pour tout pays de transit. Les règles d’entrée évoluent : vérifiez-les auprès de l’ambassade concernée et des conseils aux voyageurs de votre gouvernement au moment de réserver, puis avant le départ.",
            "Signalez-nous avant la réservation tout problème de santé ou besoin d’accessibilité susceptible d’influer sur le voyage, afin que nous puissions en tenir compte."
          ]
        },
        {
          "h": "Vos responsabilités",
          "p": [
            "Merci de respecter les lois et coutumes locales, les consignes des guides, chauffeurs, équipages et autres prestataires, ainsi que les conseils de sécurité que nous vous donnons. Nous pouvons mettre fin, sans remboursement, au voyage de toute personne dont le comportement met autrui en danger ou perturbe gravement le séjour."
          ]
        },
        {
          "h": "Notre responsabilité",
          "p": [
            "Nous apportons un soin raisonnable à la préparation et à l’organisation de votre voyage. Nous ne sommes pas responsables des pertes, blessures ou dommages causés par vous-même, par un tiers étranger au voyage ou par des événements échappant à notre contrôle raisonnable.",
            "S’agissant des compagnies aériennes, hôtels et autres transporteurs, notre responsabilité est limitée de la même manière que la leur par les conventions internationales qui leur sont applicables. Rien dans ces conditions ne limite notre responsabilité en cas de décès ou de dommage corporel causé par notre négligence, ni toute responsabilité qui ne peut être limitée par la loi."
          ]
        },
        {
          "h": "Réclamations",
          "p": [
            "Si quelque chose ne va pas pendant votre voyage, prévenez-nous immédiatement pour que nous puissions tenter d’y remédier sur place. À défaut de solution, écrivez à antiguaandbeyond@tourground.com dans les 28 jours suivant votre retour : nous vous répondrons rapidement."
          ]
        },
        {
          "h": "Droit applicable",
          "p": [
            "Ces conditions sont régies par le droit applicable au contrat conclu avec nous, tel qu’indiqué dans votre confirmation de réservation. Vous pouvez également bénéficier de la protection du droit de la consommation de votre pays de résidence."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Politique relative aux cookies",
      "description": "Les cookies et autres stockages utilisés par le site Antigua & Beyond, et comment les gérer.",
      "sections": [
        {
          "h": "En bref",
          "p": [
            "Nous n’utilisons aucun cookie de mesure d’audience ni de publicité sur ce site. Ce site ne dépose aucun cookie qui lui soit propre."
          ]
        },
        {
          "h": "Ce que le site enregistre dans votre navigateur",
          "p": [
            "Si vous changez la devise d’affichage, votre choix est enregistré dans le stockage local de votre navigateur sous ab-currency. Si vous utilisez le [planificateur de voyage](/plan-your-trip), vos réponses sont enregistrées dans le stockage local sous ab-trip-planner-v1 pour que vous puissiez reprendre là où vous vous étiez arrêté. Elles restent sur votre appareil jusqu’à l’envoi du formulaire, puis sont effacées.",
            "Les polices et les photos sont servies par ce site : aucun tiers n’est contacté lors du chargement des pages."
          ]
        },
        {
          "h": "Consentement",
          "p": [
            "Les éléments ci-dessus sont strictement nécessaires à une fonctionnalité que vous choisissez d’utiliser ; ils ne requièrent donc pas votre consentement. Nous n’ajouterons aucun cookie de mesure d’audience ou publicitaire sans vous le demander au préalable."
          ]
        },
        {
          "h": "Supprimer ces données ou changer d’avis",
          "p": [
            "Vous pouvez à tout moment effacer les données enregistrées par ce site dans les réglages de votre navigateur (en général sous Confidentialité, puis Cookies et données de site)."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Une question sur cette politique : écrivez à antiguaandbeyond@tourground.com."
          ]
        }
      ]
    }
  },
  "de": {
    "privacy": {
      "title": "Datenschutzerklärung",
      "description": "Wie Antigua & Beyond die personenbezogenen Daten erhebt, nutzt und schützt, die Sie uns übermitteln.",
      "sections": [
        {
          "h": "Wer wir sind",
          "p": [
            "Diese Website wird von Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala, betrieben. „Wir“, „uns“ und „unser“ bezeichnen in dieser Erklärung Antigua & Beyond.",
            "Bei Fragen zu Ihren personenbezogenen Daten schreiben Sie an antiguaandbeyond@tourground.com."
          ]
        },
        {
          "h": "Welche Daten wir erheben",
          "p": [
            "Nur das, was Sie uns selbst mitteilen: über den Reiseplaner Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer, falls Sie sie angeben, Reisedaten, die Zahl der Reisenden, Ihre Interessen, Ihr Budget und Anmerkungen; über das Kontaktformular Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht; bei der Newsletter-Anmeldung Ihre E-Mail-Adresse. Wenn Sie uns per E-Mail schreiben, bewahren wir diese Korrespondenz auf.",
            "Wenn Sie buchen, erheben wir zusätzlich, was für die Organisation der Reise nötig ist, etwa die Namen aller Reisenden, Geburtsdaten und Passangaben, sofern Leistungsträger sie verlangen, Ernährungs- und Barrierefreiheitsbedürfnisse sowie Notfallkontakte.",
            "Bitte senden Sie uns keine Kreditkartendaten und keine ausführlichen Gesundheitsinformationen per E-Mail oder über das Formular."
          ]
        },
        {
          "h": "Wozu wir sie nutzen",
          "p": [
            "Um Ihre Anfrage zu beantworten, Ihre Reise mit Ihnen zu planen und sie, wenn Sie sich dafür entscheiden, zu buchen und durchzuführen. Rechtsgrundlage sind die von Ihnen gewünschten vorvertraglichen Maßnahmen, die Erfüllung des Vertrags, Ihre Einwilligung, wo wir sie einholen, und unser berechtigtes Interesse, Menschen zu antworten, die sich an uns wenden.",
            "Wir verkaufen Ihre Daten nicht und senden Ihnen Neuigkeiten oder Angebote nur, wenn Sie das wünschen."
          ]
        },
        {
          "h": "An wen wir sie weitergeben",
          "p": [
            "Ihre Anfrage erreicht uns über den Server unserer Website (gehostet von Vercel Inc., USA) und unseren E-Mail-Versanddienst Resend (USA).",
            "Wenn Sie buchen, geben wir nur das Nötige an die Hotels, Lodges, Transportunternehmen, Guides und lokalen Partner in Guatemala weiter, die Ihre Reise durchführen, sowie auf Ihren Wunsch an Ihre Reiseversicherung. Manche von ihnen haben ihren Sitz außerhalb Ihres Landes; in diesem Fall geben wir nur das Minimum weiter, das für die gewünschte Leistung erforderlich ist.",
            "Darüber hinaus geben wir Daten weiter, wenn das Gesetz es verlangt."
          ]
        },
        {
          "h": "Cookies und lokaler Speicher",
          "p": [
            "Wir verwenden auf dieser Website keine Analyse- oder Werbe-Cookies. Was die Website in Ihrem Browser speichert, lesen Sie in der [Cookie-Richtlinie](/cookies/)."
          ]
        },
        {
          "h": "Wie lange wir sie aufbewahren",
          "p": [
            "Anfragen, aus denen keine Buchung wird, bewahren wir 24 Monate nach unserem letzten Kontakt auf und löschen sie dann. Buchungsunterlagen bewahren wir so lange auf, wie Buchhaltungs- und Verbraucherrecht es verlangen, in der Regel sechs Jahre nach der Reise."
          ]
        },
        {
          "h": "Wie wir sie schützen",
          "p": [
            "Ihre Daten liegen in passwortgeschützten E-Mail- und Dateisystemen, auf die nur die Menschen zugreifen, die Ihre Reise planen. Die Website wird über eine verschlüsselte Verbindung (HTTPS) ausgeliefert."
          ]
        },
        {
          "h": "Ihre Rechte",
          "p": [
            "Sie können Auskunft über die personenbezogenen Daten verlangen, die wir über Sie speichern, sie berichtigen oder löschen lassen, ihre Verarbeitung einschränken oder ihr widersprechen, eine Kopie in einem übertragbaren Format erhalten oder Ihre Einwilligung jederzeit widerrufen. Schreiben Sie an antiguaandbeyond@tourground.com; wir antworten innerhalb eines Monats.",
            "Wenn Sie mit unserem Umgang mit Ihren Daten nicht zufrieden sind, sagen Sie es uns bitte zuerst, damit wir es in Ordnung bringen können. Sie haben außerdem das Recht, sich bei der Datenschutzbehörde Ihres Wohnsitzlandes zu beschweren."
          ]
        },
        {
          "h": "Änderungen dieser Erklärung",
          "p": [
            "Wir aktualisieren diese Seite, wenn sich unser Umgang mit personenbezogenen Daten ändert. Zuletzt aktualisiert: 30. Oktober 2026."
          ]
        }
      ]
    },
    "terms": {
      "title": "Reisebedingungen",
      "description": "Die Bedingungen, die gelten, wenn Sie bei Antigua & Beyond eine maßgeschneiderte Reise anfragen und buchen.",
      "sections": [
        {
          "h": "Über diese Bedingungen",
          "p": [
            "Diese Bedingungen gelten für jede von Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala, geplante Reise. Bitte lesen Sie sie vor der Buchung. Ihr schriftliches Angebot und Ihre Buchungsbestätigung sind zusammen mit diesen Bedingungen Teil des Vertrags.",
            "Alles auf dieser Website, auch Reiseverläufe, Zeiten, Jahreszeiten und Erlebnisse, beschreibt die Art von Reise, die wir planen. Es ist kein Angebot, das Sie annehmen können."
          ]
        },
        {
          "h": "Anfragen und Angebote",
          "p": [
            "Eine Anfrage ist kostenlos und verpflichtet weder Sie noch uns.",
            "Wir antworten mit Ideen und Fragen und gestalten die Reise dann gemeinsam mit Ihnen. Wenn alles passt, schicken wir Ihnen ein schriftliches Angebot, das für den darin genannten Zeitraum gilt. Preise für Flüge, Unterkünfte und Leistungen können sich bis zur Bestätigung ändern; in diesem Fall sagen wir es Ihnen, bevor Sie sich festlegen."
          ]
        },
        {
          "h": "Buchung und Zahlung",
          "p": [
            "Ihre Buchung ist bestätigt, wenn Sie das Angebot schriftlich annehmen, die darin genannte Anzahlung leisten und wir Ihnen eine schriftliche Bestätigung schicken. Wer bucht, akzeptiert diese Bedingungen für alle Reisenden und muss mindestens 18 Jahre alt sein.",
            "Der Restbetrag ist zu dem in Angebot und Bestätigung genannten Datum fällig. Geht er nicht rechtzeitig ein, können wir die Buchung als von Ihnen storniert behandeln; dann gelten die unten beschriebenen Stornokosten."
          ]
        },
        {
          "h": "Änderungen durch Sie",
          "p": [
            "Wenn Sie Ihre Reise nach der Bestätigung ändern möchten, teilen Sie es uns bitte schriftlich mit. Wir tun unser Bestes, doch Änderungen sind nicht immer möglich. Mehrkosten der Leistungsträger sowie eine angemessene Bearbeitungsgebühr gehen zu Ihren Lasten."
          ]
        },
        {
          "h": "Rücktritt durch Sie",
          "p": [
            "Sie können jederzeit schriftlich von der Reise zurücktreten. Die Anzahlung wird nicht erstattet. Je näher der Rücktritt am Abreisetag liegt, desto höher sind die Kosten, bis hin zum vollen Reisepreis, weil Unterkünfte, Transporte und andere Leistungen in Ihrem Namen reserviert und bezahlt werden. Die für Ihre Reise geltenden Stornokosten stehen in Angebot und Bestätigung.",
            "Eine Reiseversicherung kann diese Kosten in bestimmten Fällen übernehmen."
          ]
        },
        {
          "h": "Änderungen und Absage durch uns",
          "p": [
            "Wir planen sorgfältig, müssen aber manchmal einen Teil der Reise ändern, etwa wegen des Wetters, gesperrter Straßen oder Strecken oder eines Leistungsträgers, der eine Buchung nicht einhalten kann. Wir informieren Sie so früh wie möglich und bieten Ihnen eine gleichwertige Alternative an.",
            "Ändern wir die Reise erheblich oder sagen wir sie ab, können Sie die Änderung annehmen, eine gleichwertige Alternative wählen, sofern verfügbar, oder zurücktreten und erhalten alle an uns geleisteten Zahlungen vollständig zurück."
          ]
        },
        {
          "h": "Unvermeidbare, außergewöhnliche Umstände",
          "p": [
            "Wir haften nicht für Änderungen, Verspätungen oder Absagen infolge von Ereignissen, die außerhalb unserer zumutbaren Kontrolle liegen, etwa Krieg oder Kriegsgefahr, Unruhen, Naturkatastrophen, Epidemien, behördliche Maßnahmen, Schließungen von Flughäfen oder Grenzen oder extremes Wetter. In solchen Fällen helfen wir Ihnen bei anderen Lösungen und geben Erstattungen der Leistungsträger an Sie weiter."
          ]
        },
        {
          "h": "Reiseversicherung",
          "p": [
            "Eine umfassende Reiseversicherung ist Voraussetzung für die Buchung. Sie muss medizinische Behandlung, Rücktransport, Reiserücktritt und alle Aktivitäten Ihrer Reise abdecken. Bitte senden Sie uns die Policendaten vor der Abreise."
          ]
        },
        {
          "h": "Pass, Visum und Gesundheit",
          "p": [
            "Sie sind dafür verantwortlich, einen gültigen Reisepass, alle erforderlichen Visa oder Reisegenehmigungen sowie die für Guatemala und alle Transitländer vorgeschriebenen Impfungen oder Gesundheitsnachweise zu besitzen. Einreisebestimmungen ändern sich; prüfen Sie sie bei der zuständigen Botschaft und in den Reisehinweisen Ihrer Regierung bei der Buchung und erneut vor der Abreise.",
            "Bitte informieren Sie uns vor der Buchung über gesundheitliche Einschränkungen oder Mobilitätsbedürfnisse, die Ihre Reise betreffen könnten, damit wir sie berücksichtigen können."
          ]
        },
        {
          "h": "Ihre Pflichten",
          "p": [
            "Bitte beachten Sie die Gesetze und Gepflogenheiten vor Ort, die Anweisungen von Guides, Fahrern, Crews und anderen Leistungsträgern sowie unsere Sicherheitshinweise. Wer andere gefährdet oder die Reise ernsthaft stört, kann ohne Erstattung von der weiteren Reise ausgeschlossen werden."
          ]
        },
        {
          "h": "Unsere Haftung",
          "p": [
            "Wir planen und organisieren Ihre Reise mit angemessener Sorgfalt. Wir haften nicht für Verluste, Verletzungen oder Schäden, die Sie selbst, unbeteiligte Dritte oder Ereignisse außerhalb unserer zumutbaren Kontrolle verursachen.",
            "Bei Fluggesellschaften, Hotels und anderen Beförderungsunternehmen ist unsere Haftung im gleichen Umfang begrenzt wie deren Haftung nach den für sie geltenden internationalen Übereinkommen. Nichts in diesen Bedingungen beschränkt unsere Haftung für Tod oder Körperverletzung infolge unserer Fahrlässigkeit oder eine Haftung, die gesetzlich nicht beschränkt werden kann."
          ]
        },
        {
          "h": "Beschwerden",
          "p": [
            "Wenn während der Reise etwas nicht stimmt, sagen Sie es uns bitte sofort, damit wir es vor Ort beheben können. Lässt es sich nicht lösen, schreiben Sie bitte innerhalb von 28 Tagen nach Ihrer Rückkehr an antiguaandbeyond@tourground.com; wir antworten zeitnah."
          ]
        },
        {
          "h": "Anwendbares Recht",
          "p": [
            "Für diese Bedingungen gilt das Recht, das auf den mit uns geschlossenen Vertrag anwendbar ist, wie in Ihrer Buchungsbestätigung angegeben. Zusätzlich können Sie sich auf das Verbraucherrecht Ihres Wohnsitzlandes berufen."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Cookie-Richtlinie",
      "description": "Welche Cookies und welchen Speicher die Website von Antigua & Beyond nutzt und wie Sie sie verwalten.",
      "sections": [
        {
          "h": "Kurz gesagt",
          "p": [
            "Wir verwenden auf dieser Website keine Analyse- oder Werbe-Cookies. Diese Website setzt keine eigenen Cookies."
          ]
        },
        {
          "h": "Was die Website in Ihrem Browser speichert",
          "p": [
            "Wenn Sie die angezeigte Währung ändern, wird Ihre Wahl im lokalen Speicher Ihres Browsers unter ab-currency gespeichert. Wenn Sie den [Reiseplaner](/plan-your-trip) nutzen, werden Ihre Antworten im lokalen Speicher unter ab-trip-planner-v1 gespeichert, damit Sie später weitermachen können. Sie bleiben auf Ihrem Gerät, bis Sie den Planer absenden, und werden dann gelöscht.",
            "Schriften und Fotos werden von dieser Website ausgeliefert, sodass beim Laden der Seiten kein Drittanbieter kontaktiert wird."
          ]
        },
        {
          "h": "Einwilligung",
          "p": [
            "Die oben genannten Einträge sind für Funktionen, die Sie selbst nutzen, unbedingt erforderlich und brauchen daher keine Einwilligung. Analyse- oder Werbe-Cookies setzen wir nur ein, nachdem wir Sie gefragt haben."
          ]
        },
        {
          "h": "Löschen oder Meinung ändern",
          "p": [
            "Sie können die von dieser Website gespeicherten Daten jederzeit in den Einstellungen Ihres Browsers löschen (meist unter Datenschutz, dann Cookies und Websitedaten)."
          ]
        },
        {
          "h": "Kontakt",
          "p": [
            "Fragen zu dieser Richtlinie: schreiben Sie an antiguaandbeyond@tourground.com."
          ]
        }
      ]
    }
  },
  "es": {
    "privacy": {
      "title": "Política de privacidad",
      "description": "Cómo Antigua & Beyond recoge, utiliza y protege los datos personales que nos envía.",
      "sections": [
        {
          "h": "Quiénes somos",
          "p": [
            "Este sitio web lo gestiona Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. En esta política, «nosotros» y «nuestro» se refieren a Antigua & Beyond.",
            "Para cualquier cuestión sobre sus datos personales, escriba a antiguaandbeyond@tourground.com."
          ]
        },
        {
          "h": "Qué datos recogemos",
          "p": [
            "Solo los que usted decide enviarnos: a través del planificador de viajes, su nombre, correo electrónico, teléfono si nos lo facilita, fechas de viaje, número de viajeros, intereses, presupuesto y comentarios; a través del formulario de contacto, su nombre, correo electrónico y mensaje; al suscribirse al boletín, su correo electrónico. Si nos escribe por correo electrónico, conservamos esa correspondencia.",
            "Si reserva, recogemos además lo necesario para organizar el viaje: el nombre de cada viajero, las fechas de nacimiento y los datos del pasaporte cuando los proveedores los exigen, las necesidades alimentarias o de accesibilidad y los contactos de emergencia.",
            "Le rogamos que no envíe datos de tarjetas de pago ni información médica detallada por correo electrónico o a través del formulario."
          ]
        },
        {
          "h": "Para qué los utilizamos",
          "p": [
            "Para responder a su consulta, diseñar el viaje con usted y, si decide seguir adelante, reservarlo y gestionarlo. Nos basamos en las medidas precontractuales que nos solicita, en la ejecución del contrato, en su consentimiento cuando lo pedimos y en nuestro interés legítimo en responder a quienes se ponen en contacto con nosotros.",
            "No vendemos sus datos y solo le enviamos novedades u ofertas si nos lo pide."
          ]
        },
        {
          "h": "Con quién los compartimos",
          "p": [
            "Su consulta nos llega a través de el servidor de nuestro sitio web (alojado por Vercel Inc., Estados Unidos) y nuestro proveedor de envío de correo, Resend (Estados Unidos).",
            "Si reserva, solo compartimos lo imprescindible con los hoteles, lodges, empresas de transporte, guías y socios locales que hacen posible su viaje en Guatemala, y con su aseguradora de viaje si así nos lo pide. Algunos se encuentran fuera de su país; en ese caso, compartimos únicamente lo mínimo necesario para prestar el servicio solicitado.",
            "También podemos comunicar información cuando la ley lo exija."
          ]
        },
        {
          "h": "Cookies y almacenamiento local",
          "p": [
            "No utilizamos cookies de analítica ni de publicidad en este sitio. Consulte la [política de cookies](/cookies/) para saber qué guarda el sitio en su navegador."
          ]
        },
        {
          "h": "Cuánto tiempo los conservamos",
          "p": [
            "Conservamos las consultas que no se convierten en reserva durante 24 meses desde nuestro último contacto y después las eliminamos. Los expedientes de reserva se conservan durante el tiempo que exijan la normativa contable y de consumo, normalmente seis años después del viaje."
          ]
        },
        {
          "h": "Cómo los protegemos",
          "p": [
            "Sus datos se guardan en un correo electrónico y un almacenamiento de archivos protegidos con contraseña, a los que solo acceden las personas que preparan su viaje. El sitio se sirve mediante una conexión cifrada (HTTPS)."
          ]
        },
        {
          "h": "Sus derechos",
          "p": [
            "Puede solicitar el acceso a los datos personales que tenemos sobre usted, su rectificación o supresión, limitar su uso u oponerse a él, recibir una copia en un formato portátil o retirar su consentimiento en cualquier momento. Escriba a antiguaandbeyond@tourground.com y le responderemos en el plazo de un mes.",
            "Si no está satisfecho con el tratamiento de sus datos, díganoslo primero para que podamos solucionarlo. También tiene derecho a presentar una reclamación ante la autoridad de protección de datos del país en el que reside."
          ]
        },
        {
          "h": "Cambios en esta política",
          "p": [
            "Actualizaremos esta página si cambia la forma en que utilizamos los datos personales. Última actualización: 30 de octubre de 2026."
          ]
        }
      ]
    },
    "terms": {
      "title": "Condiciones de reserva",
      "description": "Las condiciones que se aplican cuando consulta y reserva un viaje a medida con Antigua & Beyond.",
      "sections": [
        {
          "h": "Sobre estas condiciones",
          "p": [
            "Estas condiciones se aplican a todos los viajes organizados por Antigua & Beyond, 5a Avenida Norte, Antigua Guatemala, Sacatepéquez, Guatemala. Léalas antes de reservar. Su presupuesto por escrito y su confirmación de reserva forman parte del contrato, junto con estas condiciones.",
            "Todo lo que aparece en este sitio, incluidos itinerarios, duraciones, temporadas y experiencias, describe el tipo de viaje que diseñamos. No es una oferta que pueda aceptar."
          ]
        },
        {
          "h": "Consultas y presupuestos",
          "p": [
            "Enviar una consulta es gratuito y no le compromete a usted ni a nosotros.",
            "Le respondemos con ideas y preguntas, y después damos forma al viaje con usted. Cuando todo encaja, le enviamos un presupuesto por escrito, válido durante el plazo que en él se indica. Los precios de vuelos, alojamientos y servicios pueden variar hasta la confirmación; si es así, se lo diremos antes de que se comprometa."
          ]
        },
        {
          "h": "Reserva y pago",
          "p": [
            "Su reserva queda confirmada cuando acepta el presupuesto por escrito, abona el depósito indicado en él y le enviamos la confirmación por escrito. La persona que reserva acepta estas condiciones en nombre de todos los viajeros y debe ser mayor de 18 años.",
            "El saldo debe abonarse en la fecha que figura en su presupuesto y su confirmación. Si no se paga a tiempo, podremos considerar la reserva cancelada por usted y se aplicarán los gastos de cancelación que se indican a continuación."
          ]
        },
        {
          "h": "Cambios por su parte",
          "p": [
            "Si desea modificar el viaje una vez confirmado, comuníquenoslo por escrito. Haremos todo lo posible, aunque no siempre se pueden hacer cambios; los costes adicionales de los proveedores y unos gastos de gestión razonables correrán por su cuenta."
          ]
        },
        {
          "h": "Cancelación por su parte",
          "p": [
            "Puede cancelar en cualquier momento comunicándolo por escrito. El depósito no es reembolsable. Cuanto más cerca de la salida cancele, mayores serán los gastos, hasta el importe total del viaje, porque los alojamientos, transportes y demás servicios se reservan y pagan en su nombre. Los gastos aplicables a su viaje figuran en su presupuesto y su confirmación.",
            "Su seguro de viaje puede cubrirlos en determinadas circunstancias."
          ]
        },
        {
          "h": "Cambios y cancelación por nuestra parte",
          "p": [
            "Planificamos con cuidado, pero a veces debemos cambiar parte de un viaje, por ejemplo por el tiempo, el cierre de una carretera o ruta, o un proveedor que no puede cumplir una reserva. Se lo comunicaremos lo antes posible y le ofreceremos una alternativa equivalente.",
            "Si debemos introducir un cambio importante o cancelar el viaje, podrá aceptar el cambio, elegir una alternativa equivalente si la hay, o cancelar y recibir el reembolso íntegro de lo pagado."
          ]
        },
        {
          "h": "Circunstancias excepcionales",
          "p": [
            "No somos responsables de cambios, retrasos o cancelaciones causados por hechos fuera de nuestro control razonable, como guerra o amenaza de guerra, disturbios, catástrofes naturales, epidemias, decisiones de las autoridades, cierres de aeropuertos o fronteras, o condiciones meteorológicas extremas. Si ocurre, le ayudaremos a buscar alternativas y le trasladaremos los reembolsos que obtengamos de los proveedores."
          ]
        },
        {
          "h": "Seguro de viaje",
          "p": [
            "Contratar un seguro de viaje completo es condición para reservar. Debe cubrir la asistencia médica, la repatriación, la cancelación y todas las actividades del viaje. Envíenos los datos de su póliza antes de la salida."
          ]
        },
        {
          "h": "Pasaportes, visados y salud",
          "p": [
            "Es responsabilidad suya disponer de un pasaporte válido, de los visados o autorizaciones de viaje necesarios y de las vacunas o documentos sanitarios exigidos para Guatemala y para cualquier país de tránsito. Las normas de entrada cambian: compruébelas con la embajada correspondiente y en las recomendaciones de viaje de su gobierno al reservar y de nuevo antes de viajar.",
            "Infórmenos antes de reservar de cualquier problema de salud o necesidad de movilidad que pueda afectar al viaje, para que podamos tenerlo en cuenta."
          ]
        },
        {
          "h": "Sus responsabilidades",
          "p": [
            "Respete las leyes y costumbres locales, las indicaciones de guías, conductores, tripulaciones y demás proveedores, y los consejos de seguridad que le demos. Podremos poner fin, sin reembolso, al viaje de quien ponga en peligro a otras personas o cause graves molestias."
          ]
        },
        {
          "h": "Nuestra responsabilidad",
          "p": [
            "Ponemos un cuidado razonable en la planificación y organización de su viaje. No respondemos de pérdidas, lesiones o daños causados por usted, por terceros ajenos al viaje o por hechos fuera de nuestro control razonable.",
            "En el caso de aerolíneas, hoteles y otras empresas de transporte, nuestra responsabilidad está limitada del mismo modo que la suya conforme a los convenios internacionales que les son aplicables. Nada en estas condiciones limita nuestra responsabilidad por muerte o lesiones personales causadas por nuestra negligencia, ni ninguna responsabilidad que la ley no permita limitar."
          ]
        },
        {
          "h": "Reclamaciones",
          "p": [
            "Si algo no va bien durante el viaje, avísenos de inmediato para intentar resolverlo en el momento. Si no se soluciona, escriba a antiguaandbeyond@tourground.com en los 28 días siguientes a su regreso y le responderemos con prontitud."
          ]
        },
        {
          "h": "Ley aplicable",
          "p": [
            "Estas condiciones se rigen por la ley aplicable al contrato que celebre con nosotros, según se indique en su confirmación de reserva. También puede ampararle la normativa de consumo de su país de residencia."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Política de cookies",
      "description": "Qué cookies y qué almacenamiento utiliza el sitio de Antigua & Beyond y cómo gestionarlos.",
      "sections": [
        {
          "h": "En resumen",
          "p": [
            "No utilizamos cookies de analítica ni de publicidad en este sitio. Este sitio no instala cookies propias."
          ]
        },
        {
          "h": "Qué guarda el sitio en su navegador",
          "p": [
            "Si cambia la moneda en que se muestran los precios, su elección se guarda en el almacenamiento local de su navegador como ab-currency. Si utiliza el [planificador de viajes](/plan-your-trip), sus respuestas se guardan en el almacenamiento local como ab-trip-planner-v1 para que pueda continuar donde lo dejó. Permanecen en su dispositivo hasta que envía el planificador y entonces se borran.",
            "Las fuentes y las fotos se sirven desde este sitio, por lo que no se contacta con terceros al cargar las páginas."
          ]
        },
        {
          "h": "Consentimiento",
          "p": [
            "Lo anterior es estrictamente necesario para funciones que usted decide utilizar, por lo que no requiere su consentimiento. No añadiremos cookies de analítica ni de publicidad sin preguntarle antes."
          ]
        },
        {
          "h": "Cómo eliminarlo o cambiar de opinión",
          "p": [
            "Puede borrar en cualquier momento los datos guardados por este sitio desde los ajustes de su navegador (normalmente en Privacidad, y luego Cookies y datos de sitios)."
          ]
        },
        {
          "h": "Contacto",
          "p": [
            "Preguntas sobre esta política: escriba a antiguaandbeyond@tourground.com."
          ]
        }
      ]
    }
  }
};
