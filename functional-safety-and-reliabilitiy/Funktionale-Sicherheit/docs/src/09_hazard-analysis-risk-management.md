
## Gefährdungsanalyse und Risikobewertung (HARA) gemäß ISO 26262

### Einleitung

Im Bereich der funktionalen Sicherheit in der Automobilindustrie ist der Prozess der Gefährdungsanalyse und Risikobewertung (HARA) von zentraler Bedeutung. Er bestimmt die Entscheidungen, die in Bezug auf ein Bauteil oder ein System innerhalb eines Fahrzeugs getroffen werden. Die Durchführung von HARA erfordert umfangreiche Kenntnisse und Fachwissen. Dieses Tutorial zielt darauf ab, ein detailliertes Verständnis von HARA zu vermitteln, obwohl das Meistern dieser Methode möglicherweise weiteres Üben und Studium erfordert.

### Schlüsselkonzepte und Definitionen

Bevor wir auf HARA eingehen, ist es wichtig, mehrere Schlüsselkonzepte zu verstehen, die von ISO 26262 definiert werden:

- **Schaden**: Körperverletzung oder Gesundheitsschädigung von Personen.
- **Gefahr**: Eine potenzielle Schadensquelle, die durch das Fehlverhalten des Bauteils verursacht wird.
- **Gefährdungsereignis**: Eine Kombination aus einer Gefahr und einer Betriebssituation.
- **Betriebssituation**: Ein Szenario, das während der Lebensdauer eines Fahrzeugs auftreten kann.

Diese Definitionen sind spezifisch für den ISO 26262-Standard und können sich bei Verwendung anderer Standards geringfügig unterscheiden.

### Überblick über die Gefährdungsanalyse und Risikobewertung (HARA)

Gemäß ISO 26262 ist HARA eine Methode zur Identifizierung und Kategorisierung von Gefährdungsereignissen sowie zur Festlegung von Sicherheitszielen und Automotive Safety Integrity Levels (ASILs) in Bezug auf die Vermeidung oder Minderung damit verbundener Gefahren, um ein unvertretbares Risiko zu vermeiden. HARA besteht aus zwei Teilaktivitäten:

1. **Gefährdungsanalyse**
2. **Risikobewertung**

Die Eingaben für HARA umfassen die Bauteildefinition, relevante Studien, den Standard selbst und frühere HARA-Analysen, falls verfügbar. Die Ergebnisse von HARA sollten Sicherheitsziele, ASILs und gegebenenfalls Zeitbeschränkungen für Sicherheitsziele sein. Diese Ergebnisse dienen als Ausgangspunkt für das funktionale Sicherheitskonzept.

### Durchführung von HARA

#### Vorbereitung

Um HARA durchzuführen, müssen umfassende Informationen über das Bauteil und das Fahrzeug gesammelt werden. Diese Informationen können umfassen:

- Bauteildefinition
- Fahrzeugtests
- Frühere Fahrzeuggenerationen
- Unfalldaten oder Studien
- Fahrzeugdynamik, Kräfte, Beschleunigung, Gewichte usw.

#### Gefährdungsanalyse

Das Ziel der Gefährdungsanalyse ist es, Fehlfunktionen mit Betriebssituationen und deren Auswirkungen zu verbinden. Die Schritte umfassen:

1. **Definition der Funktionen**: Beschreiben Sie die Funktionen des Bauteils aus einer funktionalen Perspektive, unabhängig von den Implementierungsdetails. Beispiele sind:
   - Den Fahrer bei Ausfällen warnen.
   - Das Lenkrad elektrisch verstellen.
   - Die Position des Lenkrads erfassen.
2. **Identifizierung von Fehlfunktionen**: Identifizieren Sie für jede Funktion potenzielle Fehlfunktionen. Beispiele sind:
   - Verlust der Stabilität
   - Verlust des Drehmoments
   - Unbeabsichtigte Änderungen
3. **Definition von Betriebssituationen**: Beschreiben Sie Szenarien während der Lebensdauer eines Fahrzeugs. Beispiele sind:
   - Parken in einer Tiefgarage
   - Fahren auf einer Autobahn mit 120 km/h ohne Straßentrennung
   - Fahren in einer Kreuzung mit einem Fahrradweg

Kombinieren Sie die Funktionen, Fehlfunktionen und Betriebssituationen, um die Auswirkungen zu bestimmen. Diese Kombination führt zu Gefährdungsereignissen.

#### Risikobewertung

Die Risikobewertung umfasst die Bewertung jedes Gefährdungsereignisses anhand von drei Parametern: Beherrschbarkeit (C), Exposition (E) und Schweregrad (S). Diese Bewertungen helfen, den ASIL gemäß der im Standard angegebenen Zuordnungstabelle zu bestimmen. Die Schritte sind:

1. **Bewertung der Gefährdungsereignisse**:

   - **Beherrschbarkeit (C)**: Die Fähigkeit, einen bestimmten Schaden durch rechtzeitige Reaktionen zu vermeiden. Skala: C0 (leicht beherrschbar) bis C3 (schwer beherrschbar).
   - **Exposition (E)**: Die Wahrscheinlichkeit, sich in einer Betriebssituation zu befinden, die gefährlich sein kann. Skala: E0 (unglaublich) bis E4 (hohe Wahrscheinlichkeit).
   - **Schweregrad (S)**: Das Ausmaß des Schadens, der auftreten kann. Skala: S0 (keine Verletzungen) bis S3 (lebensbedrohliche Verletzungen).

   Verwenden Sie zusätzliche Standards wie die Abbreviated Injury Scale (AIS) oder den Injury Severity Score (ISS) für konsistente Schweregradbewertungen.
2. **Bestimmung des ASIL**: Basierend auf den Bewertungen verwenden Sie die Zuordnungstabelle von ISO 26262, um einen ASIL (A bis D, wobei D der höchste ist) zuzuweisen. Wenn ein Sicherheitsziel die Bewertung QM (Quality Managed) hat, wird es nicht als relevant für ISO 26262 betrachtet.
3. **Erstellung von Sicherheitszielen**: Formulieren Sie hochrangige Anforderungen, die funktionale Ziele und keine technologischen Lösungen darstellen. Beispiele sind:

   - Sicherstellung ausreichender Straßenbeleuchtung, wenn ein Abblendlicht vom Fahrer angefordert wird.
   - Verhinderung des unbeabsichtigten Verriegelns des Lenkrads während der Fahrt.
   - Vermeidung unbeabsichtigter Vorwärtsbewegungen des Fahrersitzes beim Parken.

### Bestätigungsmaßnahmen

Um die Effektivität des HARA-Prozesses sicherzustellen, sollten alle Analysen gründlich von den relevanten Interessengruppen überprüft und genehmigt werden. Die von ISO 26262 geforderten Bestätigungsmaßnahmen sollten bei jeder Änderung der HARA durchgeführt werden.

### Quizfragen

1. **Definieren Sie 'Schaden' gemäß ISO 26262.**
2. **Was ist der Unterschied zwischen einer Gefahr und einem Gefährdungsereignis?**
3. **Was umfasst eine Betriebssituation? Geben Sie ein Beispiel.**
4. **Beschreiben Sie die beiden Hauptteilaktivitäten von HARA.**
5. **Nennen Sie drei wichtige Eingaben, die für die Durchführung von HARA erforderlich sind.**
6. **Erklären Sie, wie der ASIL eines Gefährdungsereignisses bestimmt wird.**
7. **Welche Skalen werden für die Bewertung der Beherrschbarkeit, Exposition und des Schweregrads verwendet?**
8. **Geben Sie ein Beispiel für ein Sicherheitsziel und erklären Sie dessen Bedeutung.**
9. **Warum ist es wichtig, zusätzliche Standards wie AIS oder ISS in HARA zu verwenden?**
10. **Was sollte getan werden, um die Gründlichkeit und Genauigkeit einer HARA-Analyse sicherzustellen?**

Dies schließt das umfassende Tutorial zur HARA basierend auf ISO 26262 ab. Für weitere Unterstützung oder Fragen beziehen Sie sich bitte auf das E-GAS-Konzept und zusätzliche Ressourcen.
