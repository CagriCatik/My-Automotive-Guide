
# Verständnis der Item-Definition in ISO 26262

## Definition eines Items

Ein Item, wie in ISO 26262 definiert, ist ein System oder eine Kombination von Systemen, die eine bestimmte Funktion oder einen Teil einer Funktion auf Fahrzeugebene implementieren. Beispiele für Items sind:

- **Level 3 Automatisiertes Fahren:** Enthält Sensoren, Netzwerktechnik, Verarbeitungseinheiten, HD-Karten, etc.
- **Bremssystem:** Umfasst Sensoren, Aktuatoren, Pumpensteuerungen, etc.
- **Steer-by-Wire-Funktion:** Besteht aus Mikroprozessoren, Sensoren, mechanischen Teilen und anderen Technologien.

Items repräsentieren Fahrzeugfunktionen, die für den Kunden sichtbar sind, wie Bremssysteme, automatisierte Fahrsysteme, Fahrassistenzsysteme und Infotainmentsysteme.

## Item-Definition

Die Item-Definition ist ein entscheidendes Arbeitsergebnis, das vom Originalgerätehersteller (OEM) zur Integration eines Items in ein Fahrzeug erstellt wird. Diese Definition ist nicht nur für die funktionale Sicherheit relevant, sondern auch für andere Standards wie SOTIF (Safety Of The Intended Functionality) und Cybersicherheit anwendbar. Sie liefert wesentliche Informationen über das Item und seine Rolle im Fahrzeug.

## Zusammenarbeit in der Entwicklung

Die Entwicklung der Item-Definition sollte eine Zusammenarbeit sein, bei der Beiträge von verschiedenen Teams einfließen, darunter:

- Systemengineering
- Softwareengineering
- Hardwareengineering
- Testteams
- Verkaufsteams

Diese Zusammenarbeit stellt sicher, dass alle Aspekte des Items abgedeckt werden und das Endprodukt den Kundenanforderungen entspricht. Die Item-Definition sollte stabil sein, bevor die Serienentwicklung beginnt, und als Grundlage für die initiale Sicherheitsanalyse dienen, bevor Systemanforderungen formuliert werden.

## Überprüfung und Genehmigung

Die Item-Definition muss von dem funktionalen Sicherheitsteam und anderen relevanten Interessengruppen überprüft und genehmigt werden, um sicherzustellen, dass sie die notwendigen Sicherheitsanforderungen erfüllt.

## Wesentliche Informationen in der Item-Definition

Die Item-Definition sollte unabhängig von ihrer Organisation die folgenden Informationen enthalten:

1. **Statische Aspekte der Architektur:**
   - Detaillierte Beschreibung der Architektur des Items.
2. **Interne und externe Schnittstellen:**
   - Schnittstellen zwischen Systemen, die das Item umfassen, oder verschiedenen Systemelementen.
   - Externe Schnittstellen zwischen anderen Items oder Systemen.
   - Informationsaustausch, Signaltypen, Richtung des Informationsflusses, etc.
3. **Funktionsbeschreibung:**
   - Klare Beschreibung dessen, was das Item tut.
4. **Toleranzen, KPIs und Leistungskennzahlen:**
   - Spezifikationen der Leistungsmetriken des Items.
5. **Anwendbare Standards:**
   - Standards für Entwicklung, Betrieb, Service und Stilllegung.
6. **Abhängigkeiten von anderen Systemen:**
   - Marktdetails, Homologationsaspekte und andere relevante Abhängigkeiten.

## Dokumentationsformate

Die Item-Definition kann als einzelnes Arbeitsergebnis oder in mehreren Dokumenten dokumentiert werden und kann entwickelt werden unter Verwendung von:

- **Semi-formalen Notationen:** UML-Diagramme, SysML-Diagramme.
- **Freitext:** Unter Verwendung von Word oder Excel.
- **Spezialisierten Werkzeugen:** Für bessere Rückverfolgbarkeit und Abdeckung, wie zum Beispiel:
  - **Enterprise Architect:** Für Diagramme.
  - **IBM DOORS:** Für Anforderungsmanagement.

## Beispielinhaltverzeichnis für die Item-Definition

Nachfolgend ein Beispiel, wie das Inhaltsverzeichnis für ein Arbeitsergebnis der Item-Definition aussehen könnte:

1. Einführung
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

## Schlussfolgerung

Die Item-Definition ist ein grundlegendes Arbeitsergebnis in der funktionalen Sicherheit, das wesentliche Informationen über das Item liefert. Sie stellt sicher, dass alle notwendigen Sicherheitsanforderungen erfüllt werden und dient als Grundlage für die Sicherheitsanalyse und nachfolgende Entwicklungsphasen. Eine ordnungsgemäße Dokumentation der Item-Definition unter Verwendung geeigneter Werkzeuge und Methoden ist für ein effektives funktionales Sicherheitsmanagement unerlässlich.
