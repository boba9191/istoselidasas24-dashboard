/* ============================================================================
   EINZIGE QUELLE für Preise · ΦΠΑ · Add-ons · Laufzeit (Config-over-Code).
   Preise/Add-ons NUR HIER ändern — Rechner, Bestellformular & PDF-Generator ziehen daraus.
   Format: gültiges JSON, an window.PRICING gehängt → Browser nutzt window.PRICING,
   generate.py (Python) parst das JSON-Objekt direkt.
   ============================================================================ */
window.PRICING = {
  "brand": "istoselidasas24",
  "currency": "€",
  "setup": 390,
  "monthly": 90,
  "vatRate": 24,
  "vatIncluded": false,
  "minTermMonths": 12,
  "renewMonths": 6,
  "firstMonthDiscountPct": 50,
  "siteBase": "https://greeklocalbusiness.vercel.app",
  "addons": {
    "monthly": [
      { "id": "wa",   "ic": "💬", "name": "WhatsApp-Ραντεβού",      "desc": "Κουμπί για άμεση κράτηση μέσω WhatsApp",     "price": 11 },
      { "id": "book", "ic": "📅", "name": "Online Ραντεβού",         "desc": "Ημερολόγιο κρατήσεων 24/7",                  "price": 19 },
      { "id": "gbp",  "ic": "⭐", "name": "Google Business",          "desc": "Διαχείριση προφίλ & κριτικών Google",        "price": 9  },
      { "id": "ig",   "ic": "📸", "name": "Instagram Feed",           "desc": "Ζωντανό feed φωτογραφιών στη σελίδα",        "price": 6  },
      { "id": "lang", "ic": "🌍", "name": "2η Γλώσσα",                "desc": "Αγγλικά ή Ρωσικά για τουρίστες",             "price": 5  },
      { "id": "seo",  "ic": "🔎", "name": "Τοπικό SEO",               "desc": "Ψηλότερα στην αναζήτηση Google",             "price": 14 },
      { "id": "cms",  "ic": "✏️", "name": "Επεξεργασία μόνος σου",    "desc": "Άλλαξε κείμενα, τιμές & φωτογραφίες όποτε θες", "price": 15 }
    ],
    "onetime": [
      { "id": "photo", "ic": "🎬", "name": "Επαγγελματική Φωτογράφιση", "desc": "Φωτογραφίες στο κατάστημά σου", "price": 120 },
      { "id": "logo",  "ic": "✒️", "name": "Λογότυπο & Branding",       "desc": "Σχεδιασμός λογοτύπου",          "price": 150 }
    ]
  }
};
if (typeof module !== "undefined") module.exports = window.PRICING;
