# Verbesserung der Fahrzeugsicherheit: Technische Einblicke in die Funktionale Sicherheit

## Einleitung

Bevor die technischen Details betrachtet werden, ist es wichtig, den Aufbau dieser Schulung zu verstehen. Die Sitzungen sind so konzipiert, dass sie der Reihe nach verfolgt werden, um ein umfassendes Verständnis zu gewährleisten. Ein Überblick über die wichtigsten Themen aus Teil 3 der ISO 26262-Norm, der Konzeptphase, wird in dieser Schulung gegeben. Für detailliertere Informationen und praktische Beispiele kann auf einen anderen Kurs zur Konzeptphase zurückgegriffen werden, der herunterladbare Vorlagen für verschiedene Arbeitsergebnisse enthält.

## Wesentliche Themen für die Funktionale Sicherheit auf Fahrzeugebene

### 1. Definition des Items

Die Definition des Items umfasst die Identifikation und Beschreibung eines Systems oder einer Kombination von Systemen, die eine Funktion oder einen Teil einer Funktion auf Fahrzeugebene implementieren. Dies ist ein zentraler Aspekt der funktionalen Sicherheit, da genaue und detaillierte Definitionen notwendig sind, um alle relevanten Sicherheitsaspekte zu berücksichtigen. Durch die Definition des Items wird sichergestellt, dass die Funktionen des Systems klar verstanden und dokumentiert werden, um mögliche Gefahren und Risiken zu identifizieren.

### 2. Gefahrenanalyse und Risikobewertung (HARA)

Die Gefahrenanalyse und Risikobewertung (HARA) stellt einen systematischen Prozess dar, bei dem potenzielle Gefahren, die mit einem Item verbunden sind, identifiziert und bewertet werden. Ziel dieses Prozesses ist es, die Risiken zu quantifizieren und entsprechende Maßnahmen zur Risikominderung zu entwickeln. Die HARA umfasst die Bewertung der Schwere von Gefährdungen, ihrer Auftretenswahrscheinlichkeit und der Möglichkeit, diese zu kontrollieren, um ein akzeptables Sicherheitsniveau zu gewährleisten.

### 3. Konzept der Funktionalen Sicherheit

Diese Aktivitäten werden typischerweise von OEMs (Original Equipment Manufacturers) durchgeführt, wobei einige Arbeitsergebnisse mit Tier 1- oder Tier 2-Zulieferern geteilt werden. Es ist jedoch wichtig zu beachten, dass die Item-Definition und die HARA in der Regel als vertraulich von den OEMs betrachtet werden, während das Konzept der funktionalen Sicherheit das wichtigste Arbeitsergebnis für die Zulieferer ist.

## Definition des Items

### Verständnis der Item-Definition

Gemäß ISO 26262 wird ein Item als ein System oder eine Kombination von Systemen definiert, die eine Funktion oder einen Teil einer Funktion auf Fahrzeugebene implementieren. Beispiele umfassen:

- **Level 3 automatisierte Fahrfunktion (ALKS):** Integriert Sensoren, Netzwerke, Verarbeitung, HD-Kartierung usw.
- **Bremssystem:** Beinhaltet Sensoren, Aktuatoren, Pumpensteuerungen usw.
- **Steer-by-Wire-Funktion:** Umfasst Mikroprozessoren, Sensoren, mechanische Teile und andere Technologien.

Items repräsentieren Fahrzeugfunktionen, die für den Kunden sichtbar sind, wie Bremssysteme, automatisierte Fahrzeugsysteme und Infotainmentsysteme.

### Zweck der Item-Definition

Die Item-Definition wird als ein entscheidendes Arbeitsergebnis erstellt, um ein Item in ein Fahrzeug zu integrieren. Diese Definition ist nicht nur für die funktionale Sicherheit relevant, sondern auch für andere Standards wie SOTIF und Cybersicherheit. Wesentliche Informationen über das Item und seine Rolle im Fahrzeug werden durch die Item-Definition bereitgestellt.

### Zusammenarbeit in der Entwicklung

Die Entwicklung der Item-Definition erfordert die Zusammenarbeit verschiedener Teams, einschließlich Systemtechnik, Softwaretechnik, Hardwaretechnik, Testteams und Vertriebsteams. Diese Zusammenarbeit stellt sicher, dass alle Aspekte des Items umfassend abgedeckt werden und den Kundenanforderungen entsprechen. Die Item-Definition sollte stabil sein, bevor die Serienentwicklung beginnt, und als Grundlage für die initiale Sicherheitsanalyse dienen, bevor die Systemanforderungen geschrieben werden.

### Überprüfung und Genehmigung

Die Item-Definition sollte von dem Team für funktionale Sicherheit und anderen relevanten Interessengruppen überprüft und genehmigt werden, um sicherzustellen, dass sie die erforderlichen Sicherheitsanforderungen erfüllt.

### Wichtige Informationen in der Item-Definition

Unabhängig davon, wie die Item-Definition organisiert ist, sollten folgende Informationen enthalten sein:

1. **Statische Aspekte der Architektur:**
   - Detaillierte Beschreibung der Architektur des Items.
2. **Interne und externe Schnittstellen:**
   - Schnittstellen zwischen den Systemen, die das Item bilden, oder verschiedenen Systemelementen.
   - Externe Schnittstellen zwischen anderen Items oder Systemen.
   - Informationsaustausch, Signaltypen, Informationsflussrichtung usw.
3. **Funktionsbeschreibung:**
   - Klare Beschreibung der Funktionalität des Items.
4. **Toleranzen, KPIs und Leistungen:**
   - Spezifikationen der Leistungskennzahlen des Items.
5. **Anwendbare Standards:**
   - Standards für Entwicklung, Betrieb, Service und Außerbetriebnahme.
6. **Abhängigkeiten von anderen Systemen:**
   - Details zur Marktproduktion, Homologationsaspekte und andere relevante Abhängigkeiten.

### Dokumentationsformate

Die Item-Definition kann als einzelnes Arbeitsergebnis oder als mehrere Dokumente dokumentiert werden und entwickelt werden unter Verwendung von:

- **Semi-formalen Notationen:** UML-Diagramme, SysML-Diagramme.
- **Freitext:** Mithilfe von Word oder Excel.
- **Spezialisierten Tools:** Für bessere Rückverfolgbarkeit und Abdeckung, wie:
  - **Enterprise Architect:** Für Zeichnungen.
  - **IBM DOORS:** Für das Anforderungsmanagement.

### Beispiel für das Inhaltsverzeichnis einer Item-Definition

Ein Beispiel, wie das Inhaltsverzeichnis eines Arbeitsergebnisses zur Item-Definition aussehen könnte:

1. Einleitung
2. Umfang
3. Definitionen und Abkürzungen
4. Referenzen
5. Beschreibung des Items
   - Architektur
   - Schnittstellen
   - Funktionalität
6. Leistung und KPIs
7. Standards und Vorschriften
8. Abhängigkeiten
9. Entwicklungsprozess
10. Verifikation und Validierung

## Fragen

1. **Was ist der Zweck der Gegenstandsbestimmung im ISO 26262-Rahmenwerk?**
   - a) Alle Fahrzeugkomponenten auflisten.
   - b) Das System oder Element in Bezug auf Funktionalität, Schnittstellen und Grenzen definieren.
   - c) Das Risiko von Gefahren bewerten.
   - d) Redundanz und Diversität im Systemdesign schaffen.

2. **Welches der folgenden ist KEIN Bestandteil der Gefahrenanalyse und Risikobewertung (HARA)?**
   - a) Gefahrenidentifikation
   - b) Risikobewertung
   - c) Funktionale Sicherheitsanforderungen
   - d) ASIL-Klassifizierung

3. **Wofür steht ASIL und warum ist es wichtig in ISO 26262?**
   - a) Automotive Safety Integrity Level; es klassifiziert Risiken basierend auf Schwere, Exposition und Beherrschbarkeit.
   - b) Automated System Integration Level; es stellt die Integration verschiedener Fahrzeugsysteme sicher.
   - c) Active Safety Inspection Level; es bewertet die Sicherheit aktiver Fahrzeugkomponenten.
   - d) Automotive System Interaction Level; es bewertet die Interaktion zwischen verschiedenen Fahrzeugsystemen.

4. **Was ist das primäre Ergebnis des Konzepts der funktionalen Sicherheit?**
   - a) Eine Liste aller Fahrzeugkomponenten.
   - b) Detaillierte funktionale Anforderungen zur Erreichung der Sicherheitsziele.
   - c) Ein Bauplan für das Fahrzeugdesign.
   - d) Ein Zeitplan für Sicherheitstests.

5. **Wer ist typischerweise verantwortlich für die Erstellung der Gegenstandsbestimmung?**
   - a) Tier 1 Zulieferer
   - b) Tier 2 Zulieferer
   - c) Original Equipment Manufacturers (OEMs)
   - d) Regulierungsbehörden

Durch das Verständnis und die korrekte Anwendung dieser Prinzipien können Automobilfachleute die funktionale Sicherheit von Fahrzeugsystemen erheblich verbessern und somit sicherere und zuverlässigere Fahrzeuge auf die Straße bringen.
