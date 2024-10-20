# Integration, Verifikation und Validierung

## Einführung

In diesem Tutorial werden wir umfassend die Prozesse der Integration, Verifikation und Validierung (IV&V) gemäß der ISO 26262 Norm behandeln, wobei der Schwerpunkt auf den Hardware- und Softwarekomponenten liegt. Unser Ziel ist es sicherzustellen, dass alle Elemente den strengen Anforderungen der funktionalen Sicherheit entsprechen. Dieses Tutorial wird eventuelle Ungenauigkeiten kritisch ansprechen und eine detaillierte wissenschaftliche Erklärung dieser Konzepte bieten.

## Hardware-Integration, Verifikation und Validierung

ISO 26262 enthält spezifische Klauseln zur Eignung und Nutzung von Hardwareelementen gemäß der Norm. Teil 5, Klausel 10, zusammen mit Teil 8, Klausel 9, bietet Richtlinien zur Hardware-Integration und -Verifikation.

## Hardware-Testmethoden

Vor dem Testen ist es wichtig, Testfälle zu erstellen. ISO 26262 schlägt mehrere Methoden zur Generierung von Testfällen vor, insbesondere für Hardware-Sicherheitsanforderungen:

- **Erfahrung und Fehlervermutung:** Nutzung von Expertenwissen zur Vorhersage potenzieller Fehler.
- **Worst-Case-Analyse:** Identifikation der kritischsten Bedingungen, die die Leistung der Schaltung beeinflussen könnten.

Für eine detaillierte Analyse:

- **FMECA (Failure Mode and Effects Criticality Analysis):** Hilft bei der Identifikation kritischer Komponenten, die die Leistung der Schaltung beeinflussen.
- **FMEA (Failure Mode and Effects Analysis), FTA (Fault Tree Analysis) und FMEDA (Failure Modes, Effects, and Diagnostic Analysis):** Werden verwendet, um die besten Testfälle zu finden, die den Standards entsprechen.

## Hardware-Qualifikationstests

Hardware-Qualifikation umfasst Belastungstests unter verschiedenen Bedingungen (z. B. EMC, Staub-, Wasser-, Salztests), die typischerweise in spezialisierten Laboratorien durchgeführt werden. Obwohl oft als Hardware-Qualifikationstests bezeichnet, handelt es sich dabei genauer um System-Qualifikationstests, da die Software in die Hardware eingebettet sein muss.

# Software-Integration, Verifikation und Validierung

Die Software-IV&V wird in drei Hauptklauseln behandelt:

1. **Integration und Testen auf Einheitsebene**
2. **Integration und Testen auf Architekturebene**
3. **Integration und Testen der eingebetteten Software**

## Integration und Testen auf Einheitsebene

Die Verifikation auf Einheitsebene umfasst mehr als nur das Ausführen von Unit-Tests:

- **Code-Review:** Wird gemäß einem zusammen mit der Qualitätsabteilung festgelegten Prozess durchgeführt.
- **Kontrollflussanalyse:** Basierend auf vorherigen FMEA-, FTA- oder HAZOP-Analysen.
- **Statische Codeanalyse:** Implementiert mit Werkzeugen, die Regelwerke wie MISRA einhalten.
- **Schnittstellentests:** Werden automatisch nach dem Erstellen und Kompilieren des Quellcodes ausgeführt.
- **Dynamische Codeanalyse und Ressourcennutzungsevaluation:** Wesentlich für Projekte mit Sicherheitszielen der Stufe ASIL D. Speicher- und CPU-Nutzung sollten in allen ISO 26262-konformen Projekten standardmäßig gemessen werden.

## Strukturelle Abdeckungsmetriken

Je nach ASIL-Stufe sollten verschiedene Abdeckungsmethoden angewendet werden:

- **Anweisungsabdeckung (ASIL A und B):** Stellt sicher, dass jede Anweisung im Quellcode ausgeführt wird.
- **Verzweigungsabdeckung (ASIL B, C und D):** Überprüft alle Entscheidungspunkte im Code.
- **Modifizierte Bedingungs-/Entscheidungsabdeckung (MC/DC):** Prüft alle Kombinationen von Bedingungen im Code.

## Integration und Verifikation auf Architekturebene

Diese Phase umfasst das Kombinieren und Verifizieren des gesamten Softwaresystems:

- **Abhängigkeits- und Schnittstellenvalidierung:** Sicherstellen, dass alle Softwareelemente gemäß dem architektonischen Design zusammenarbeiten.
- **Sicherheitsanforderungen und -ziele:** Fokus auf das Identifizieren von Fehlern, die zu Verstößen gegen Sicherheitsanforderungen oder -ziele führen könnten.

## Testen der eingebetteten Software

Die letzte Klausel von Teil 6, Klausel 11, konzentriert sich darauf zu überprüfen, dass die eingebettete Software die sicherheitsrelevanten Anforderungen erfüllt und keine unerwünschten Funktionalitäten enthält. Testfälle aus der Software-Integrations- und Testphase werden verwendet, aber die Tests sollten in Hardware-in-the-Loop-Umgebungen oder direkt im Fahrzeug durchgeführt werden.

# Schlussfolgerung

Zusammenfassend sind die IV&V-Prozesse für Hardware und Software gemäß ISO 26262 umfangreich und erfordern akribische Aufmerksamkeit für Details. Die wichtigsten Erkenntnisse umfassen:

- **Umfassende Testfallentwicklung:** Nutzung verschiedener Methoden zur Abdeckung aller potenziellen Fehler.
- **Strenge Verifikationsprozesse:** Einschließlich Code-Reviews, Kontrollflussanalysen, statischer und dynamischer Codeanalysen und Schnittstellentests.
- **Strukturelle Abdeckungsmetriken:** Sicherstellen, dass alle Codepfade gemäß den ASIL-Anforderungen getestet werden.
- **Testen der eingebetteten Software:** In realistischen Umgebungen zur Sicherstellung von Konformität und Funktionalität.

# Fragen

1. **Was sind die drei wichtigsten Methoden, die ISO 26262 für die Generierung von Hardware-Testfällen empfiehlt?**
2. **Beschreiben Sie den Unterschied zwischen FMEA, FTA und FMECA.**
3. **Warum ist es wichtig, eine statische Codeanalyse nach einem Regelwerk wie MISRA durchzuführen?**
4. **Erklären Sie die Bedeutung von Anweisungsabdeckung, Verzweigungsabdeckung und MC/DC im Kontext von ISO 26262.**
5. **Worauf liegt der primäre Fokus während der Software-Integrations- und Verifikationsphase?**
6. **Warum werden Hardware-Qualifikationstests im Kontext von ISO 26262 oft als System-Qualifikationstests betrachtet?**
7. **Listen Sie die Hauptaktivitäten auf, die im Verifikationsprozess auf Einheitsebene für Software enthalten sind.**
8. **Welche Herausforderungen sind mit der Sicherstellung einer 100%igen MC/DC-Abdeckung verbunden und wie können diese angegangen werden?**
