# VIZIO Commerce - E-Commerce Agentur Website

Eine moderne Website für eine E-Commerce Agentur, die umfassende Dienstleistungen für digitalen Handel anbietet.

## Technologien

- React + Vite
- React Router für Routing
- Chakra UI für UI-Komponenten
- Framer Motion für Animationen
- i18next für Mehrsprachigkeit (Deutsch/Englisch)
- React Icons

## Features

- Modernes, responsives Design
- Animierte UI-Elemente mit Framer Motion
- Mehrsprachigkeit (DE/EN)
- Optimiert für Suchmaschinen
- Parallax-Effekte und Scroll-Animationen

## Projektstruktur

```
/src
  /assets        # Bilder, Schriftarten, etc.
  /components    # Wiederverwendbare UI-Komponenten
    /about       # About-Seitenkomponenten
    /common      # Allgemeine Komponenten
    /contact     # Kontakt-Seitenkomponenten
    /home        # Home-Seitenkomponenten
    /layout      # Layout-Komponenten (Header, Footer)
    /services    # Dienstleistungs-Seitenkomponenten
    /solutions   # Lösungs-Seitenkomponenten
  /context       # React Context-Definitionen
  /hooks         # Benutzerdefinierte React Hooks
  /i18n          # Internationalisierungsdateien
    /locales     # Übersetzungsdateien
  /pages         # Hauptseitenkomponenten
  /theme         # Chakra UI Theme-Konfiguration
  /utils         # Hilfsfunktionen und -konstanten
```

## Installation und Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build
```

## Seiten

- **Home**: Hauptseite mit Hero-Section, Dienstleistungsübersicht, Kundenlogos und Fallstudie
- **Services**: Übersicht und Details zu den angebotenen Dienstleistungen
- **Consulting**: Beratungsdienstleistungen
- **Solutions**: Branchenspezifische Lösungen
- **About Us**: Über das Unternehmen, Team, Werte und Fallstudien
- **Resources**: Blog, Downloads und FAQs
- **Contact**: Kontaktformular und Kontaktinformationen