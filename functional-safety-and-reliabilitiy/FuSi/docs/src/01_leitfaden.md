# ISO 26262 Funktionssicherheit Tutorial

## Einführung in die Funktionssicherheit

Die Funktionssicherheit im Kontext der ISO 26262 ist ein wesentlicher Aspekt des Sicherheitsingenieurwesens, insbesondere in der Automobilindustrie. Dieses Tutorial bietet einen detaillierten und präzisen Überblick über die wichtigsten Konzepte, Prinzipien und Methoden der Funktionssicherheit, um den Anforderungen und Standards des Fachgebiets gerecht zu werden.

## Verständnis von Schaden und Risiko

Das Konzept der Sicherheit ist untrennbar mit dem Begriff Schaden verbunden. Schaden kann als körperliche Verletzung oder Beeinträchtigung der Gesundheit von Menschen sowie als Sach- oder Umweltschaden definiert werden. Das Ausmaß und die Häufigkeit des Schadens, die Einzelpersonen tolerieren können, variieren, aber die Minimierung von Schaden ist ein grundlegendes Ziel im Sicherheitsingenieurwesen.

Bei jeder Tätigkeit gibt es inhärente Risiken. Diese Risiken führen nicht immer zu Schaden, aber ihre potenzielle Existenz muss bewertet und gemanagt werden. Im Kontext der ISO 26262 wird Risiko als Kombination der Wahrscheinlichkeit des Auftretens von Schaden und der Schwere dieses Schadens definiert. Es handelt sich um eine statistische Bewertung, die die Wahrscheinlichkeit und die Auswirkungen schädlicher Ereignisse abwägt.

## Ziel der Funktionssicherheit

Das Hauptziel der Funktionssicherheit besteht darin, Systeme zu entwerfen und zu entwickeln, die Risiken auf ein akzeptables Niveau reduzieren. Angesichts der Komplexität, der Kosten und der Zeitvorgaben im Automobilbau ist es unpraktisch, absolute Sicherheit zu erreichen. Stattdessen liegt der Fokus darauf, unzumutbare Risiken zu identifizieren und zu mindern—solche, die aufgrund ihrer potenziellen Schwere oder Häufigkeit nicht toleriert werden können.

Die ISO 26262 befasst sich speziell mit Risiken, die durch Ausfälle elektrischer und elektronischer (E/E) Systeme in Straßenfahrzeugen entstehen. Andere Risikotypen werden durch verschiedene Standards abgedeckt.

## Kategorien der Sicherheit in Fahrzeugsystemen

Sicherheit in Fahrzeugen kann grob in drei Typen eingeteilt werden:

1. **Passive Sicherheitssysteme**:

   - Diese Systeme schützen Insassen, sobald ein Unfall passiert ist.
   - Beispiele: Airbags und eCall-Systeme. Airbags blasen sich auf, um Fahrgäste bei einem Zusammenstoß zu schützen, während eCall-Systeme bei einem Unfall automatisch Notdienste alarmieren.
2. **Aktive Sicherheitssysteme**:

   - Diese Systeme helfen, Unfälle zu verhindern.
   - Beispiele: Antiblockiersystem (ABS) und Elektronische Stabilitätskontrolle (ESC). ABS verhindert das Blockieren der Räder beim Bremsen, während ESC die Fahrzeugstabilität erhält, indem es ein Schleudern erkennt und reduziert.
3. **Präventive Sicherheitssysteme**:

   - Eine Unterkategorie der aktiven Sicherheitssysteme, die darauf abzielen, Bedingungen zu verhindern, die zu Unfällen führen könnten.
   - Beispiele: Automatisierte Parksysteme, Fahrzeug-zu-Alles-Kommunikation (V2X) und Müdigkeitserkennung des Fahrers. Diese Technologien helfen dem Fahrer, gefährliche Situationen zu vermeiden.

## Funktionssicherheit und ihr Kontext

Funktionssicherheit, wie sie in der ISO 26262 definiert ist, bedeutet das Fehlen unzumutbarer Risiken aufgrund von Gefahren, die durch das Fehlverhalten von E/E-Systemen verursacht werden. Diese Definition unterscheidet die Funktionssicherheit von anderen verwandten Disziplinen:

- **Zuverlässigkeit**: Die Fähigkeit eines Systems, seine geforderte Funktion unter bestimmten Bedingungen für eine bestimmte Zeit zu erfüllen.
- **Verfügbarkeit**: Das Maß, in dem ein System betriebsbereit und zugänglich ist, wenn es benötigt wird.
- **Cybersicherheit**: Schutz von Systemen vor unbefugtem Zugriff und Angriffen.
- **Safety of the Intended Functionality (SOTIF)**: Das Fehlen unzumutbarer Risiken aufgrund funktionaler Unzulänglichkeiten oder vorhersehbaren Missbrauchs des Systems.

Obwohl diese Disziplinen miteinander verbunden sind, behandelt jede einen anderen Aspekt der Systemleistung und -sicherheit. Die Funktionssicherheit konzentriert sich speziell darauf, Schäden durch Ausfälle von E/E-Systemen zu verhindern.

## Zeitliche Reaktion von Sicherheitssystemen

Sicherheitssysteme reagieren zu unterschiedlichen Zeiten im Verhältnis zu einem Vorfall:

- **Präventive und Aktive Sicherheitssysteme**: Diese Systeme wirken, bevor ein Unfall passiert, um Unfälle insgesamt zu vermeiden.
- **Passive Sicherheitssysteme**: Diese Systeme werden während oder unmittelbar nach einem Unfall aktiviert, um Schäden zu mindern.

Die Reaktionszeiten dieser Systeme variieren von Millisekunden bis zu Minuten, abhängig von der Art des Sicherheitsmechanismus.

## Erweiterter Kontext der Funktionssicherheit

Die Implementierung der Funktionssicherheit gemäß ISO 26262 umfasst mehrere Phasen und Prozesse:

1. **Gefährdungs- und Risikoanalyse (HARA)**:

   - Ziel ist es, potenzielle Gefährdungen zu identifizieren, die durch Fehlfunktionen von E/E-Systemen verursacht werden könnten, und das Risikoniveau zu bewerten.
   - HARA berücksichtigt Faktoren wie die Schwere des Schadens, die Exposition gegenüber der Gefährdung und die Kontrollmöglichkeit.
2. **Sicherheitsanforderungen**:

   - Basierend auf der HARA werden Sicherheitsanforderungen entwickelt, um identifizierte Risiken zu mitigieren. Diese Anforderungen sind in funktionale und technische Anforderungen unterteilt.
3. **Systemdesign und Architektur**:

   - Das Systemdesign muss die Sicherheitsanforderungen berücksichtigen und robuste Architekturen entwickeln, die Ausfallsicherheit bieten. Dies beinhaltet die Verwendung von Redundanz, Diversität und Fehlertoleranzmechanismen.
4. **Implementierung und Verifikation**:

   - Die Sicherheitsanforderungen werden in Hardware- und Softwarekomponenten umgesetzt. Es werden umfassende Verifikationstests durchgeführt, um sicherzustellen, dass die Implementierung den Anforderungen entspricht.
5. **Validierung und Freigabe**:

   - Die Validierung bestätigt, dass das gesamte System die Sicherheitsanforderungen in der Praxis erfüllt. Die Freigabe erfolgt nach erfolgreichen Validierungstests.
6. **Betrieb und Wartung**:

   - Während des Betriebs werden regelmäßige Inspektionen und Wartungen durchgeführt, um die kontinuierliche Sicherheit des Systems zu gewährleisten. Rückmeldungen aus dem Feld werden genutzt, um zukünftige Verbesserungen zu identifizieren.

## Zusammenfassung

Zusammenfassend beinhaltet die Funktionssicherheit im Rahmen der ISO 26262 eine sorgfältige Risikomanagement, um sicherzustellen, dass E/E-Systeme in Fahrzeugen keine unzumutbaren Risiken darstellen. Es erfordert ein umfassendes Verständnis davon, wie verschiedene Sicherheitssysteme arbeiten und interagieren, sowie eine klare Abgrenzung zu anderen verwandten Disziplinen wie Zuverlässigkeit, Verfügbarkeit, Cybersicherheit und SOTIF.

## Fragen

Um Ihr Verständnis der in diesem Tutorial behandelten Konzepte zu testen, beantworten Sie bitte die folgenden Fragen:

1. Wie lautet die Definition von Risiko gemäß ISO 26262?
2. Beschreiben Sie den Unterschied zwischen aktiven und passiven Sicherheitssystemen.
3. Erklären Sie das Hauptziel der Funktionssicherheit.
4. Was unterscheidet Funktionssicherheit von Zuverlässigkeit, Verfügbarkeit, Cybersicherheit und SOTIF?
5. Nennen Sie ein Beispiel für ein präventives Sicherheitssystem und beschreiben Sie dessen Funktion.

## Schlussfolgerung

Diese umfassende Übersicht über die Funktionssicherheit gemäß ISO 26262 soll Ihnen das Wissen vermitteln, das erforderlich ist, um Sicherheitsprinzipien in der Automobilindustrie zu verstehen und anzuwenden. Durch das sorgfältige Management von Risiken und das Verständnis der Rolle verschiedener Sicherheitssysteme können Sie zur Entwicklung sichererer Fahrzeuge beitragen.
