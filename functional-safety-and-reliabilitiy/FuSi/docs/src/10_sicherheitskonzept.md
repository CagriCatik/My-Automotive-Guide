
# Verständnis des Funktionalen Sicherheitskonzepts nach ISO 26262

## Was ist das Funktionale Sicherheitskonzept?

Das funktionale Sicherheitskonzept, gemäß ISO 26262, ist eine Spezifikation der funktionalen Sicherheitsanforderungen zusammen mit den zugehörigen Informationen. Es beschreibt die Zuweisung dieser Anforderungen zu Elementen innerhalb der Architektur und deren Interaktion, die notwendig ist, um die Sicherheitsziele zu erreichen. Einfach ausgedrückt, legt es fest, wie die Sicherheitsziele durch eine Reihe von Anforderungen erfüllt werden. Dieses Konzept ist spezifisch für die funktionale Sicherheit und unterscheidet sich von der Item-Definition.

## Sicherheitsziele und ASILs

Ein Item wie ein Steer-by-Wire-System kann mehrere Sicherheitsziele mit unterschiedlichen Automotive Safety Integrity Levels (ASILs) und viele Ziele, die als QM (Quality Management) bewertet sind, haben. Jedes Sicherheitsziel im funktionalen Sicherheitskonzept hat einen zugehörigen sicheren Zustand, oft mit einer zeitlichen Einschränkung, die als FTTI (Fault Tolerant Time Interval) bezeichnet wird.

## Sicherer Zustand und Zeitintervalle

Ein sicherer Zustand wird vom Standard als ein Betriebsmodus definiert, in den ein Item bei einem Ausfall wechseln kann, um ein unzumutbares Risiko zu vermeiden. Das System muss innerhalb einer begrenzten Zeit in diesen Zustand übergehen, daher die Notwendigkeit von FTTI. FTTI ist die minimale Zeit vom Auftreten eines Fehlers bis zu einem potenziellen gefährlichen Ereignis, wenn Sicherheitsmechanismen nicht aktiviert werden, normalerweise ausgedrückt in Millisekunden oder Sekunden.

Andere kritische Zeitintervalle in der funktionalen Sicherheit umfassen:

- **Fault Detection Time Interval (FDTI)**: Zeit zur Erkennung eines Fehlers.
- **Fault Reaction Time Interval (FRTI)**: Zeit zur Reaktion auf einen erkannten Fehler.
- **Emergency Operation Time Interval (EOTI)**: Zeit, in der das System im Notbetrieb arbeitet.

## Ableitung funktionaler und nicht-funktionaler Anforderungen

Um die Anforderungen abzuleiten, die festlegen, wie das System die Sicherheitsziele erfüllen wird, ist eine Sicherheitsanalyse zwischen dem Ergebnis der Gefährdungsanalyse und Risikobewertung (HARA) und dem funktionalen Sicherheitskonzept erforderlich. Wenn beispielsweise ein Sensorfehler zu einer Verletzung eines Sicherheitsziels führen könnte, können Redundanzen, zeitliche Begrenzungen oder Qualifikationsmaßnahmen festgelegt werden, um eine physische Degradation einer Hardwarekomponente zu vermeiden.

## ASIL-Zerlegung

ISO 26262 führt das Konzept der ASIL-Zerlegung ein, bei dem anfängliche Sicherheitsanforderungen in redundante Sicherheitsanforderungen zerlegt werden, die unabhängig von anderen Elementen implementiert werden. Dieser Prozess zielt darauf ab, den ASIL der redundanten Sicherheitsanforderungen, die den entsprechenden Elementen zugewiesen sind, zu reduzieren. Die ASIL-Zerlegung folgt den in ISO 26262, Teil 9, Abschnitt 5, bereitgestellten Schemata.

## ASIL-Komposition

Die ASIL-Komposition, die in anderen Schulungssitzungen detailliert behandelt wird, wird immer aus funktionaler Perspektive durchgeführt, ohne den Fokus auf Hardwaremetriken oder Quellcode zu legen. Zerlegte Teile, wie Redundanzen oder Elemente mit unterschiedlichen ASILs, müssen in der Lage sein, die ursprüngliche Funktion zu realisieren.

## Sicherheitsrelevante Elemente außerhalb des Kontexts (SEooCs)

Bei SEooCs sollten die Item-Definition, die Gefährdungsanalyse, die Risikobewertung und das funktionale Sicherheitskonzept unter Annahmen durchgeführt werden. Diese Annahmen werden später bestätigt, wenn das SEooC in ein anderes System oder Item integriert wird.

## Verifikation und Validierung

Das funktionale Sicherheitskonzept muss gemäß den im Standard festgelegten maßgeschneiderten Bestätigungsmaßnahmen und Verifikationsstrategien verifiziert und validiert werden. Dies beinhaltet die Durchführung einer Bestätigungsprüfung anhand einer Checkliste und die Bewertung des Konzepts während einer funktionalen Sicherheitsbewertung.

## Schlussfolgerung

Dieser Überblick über das funktionale Sicherheitskonzept unterstreicht dessen Bedeutung für das Erreichen von Sicherheitszielen in Fahrzeugsystemen. Verifikation und Validierung stellen sicher, dass die Sicherheitsmechanismen und Maßnahmen Risiken effektiv mindern. In der nächsten Sitzung werden wir untersuchen, ob ältere Autos ohne viel Elektronik von Natur aus sicherer waren als moderne Fahrzeuge mit fortschrittlicher Elektronik.
