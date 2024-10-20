
# Sicherheitsanalyse

## Einführung in die Sicherheitsanalyse

Die Sicherheitsanalyse ist ein Eckpfeiler von ISO 26262 und wesentlich, um potenzielle Gefahren zu identifizieren und sicherzustellen, dass die mit diesen Gefahren verbundenen Risiken auf ein akzeptables Maß minimiert werden. Dieses Tutorial bietet eine detaillierte Erkundung der Methoden der Sicherheitsanalyse und konzentriert sich auf deren Anwendungen und Methodologien im Kontext von ISO 26262.

## Definition und Ziele der Sicherheitsanalyse

### Schlüsselfragen in der Sicherheitsanalyse

Die Sicherheitsanalyse zielt darauf ab, zwei grundlegende Fragen zu beantworten:

1. **Was kann schiefgehen?**
2. **Habe ich genug getan, um zu verhindern, dass etwas schiefgeht?**

Diese Fragen treiben die Identifizierung und Minderung von Risiken im Zusammenhang mit systematischen und zufälligen Fehlern an, um sicherzustellen, dass das Risiko der Verletzung von Sicherheitszielen ausreichend niedrig ist.

### Perspektiven der Sicherheitsanalyse

Es gibt zwei Hauptperspektiven in der Sicherheitsanalyse:

1. **Deduktive (Top-Down) Analyse**: Beginnt mit bekannten Effekten und verfolgt diese rückwärts, um mögliche Ursachen zu identifizieren. Ein Hauptbeispiel ist die Fehlbaumethode (Fault Tree Analysis, FTA).
2. **Induktive (Bottom-Up) Analyse**: Beginnt mit bekannten Ursachen und verfolgt diese vorwärts, um mögliche Effekte zu identifizieren. Ein Hauptbeispiel ist die Auswirkungsanalyse (Failure Mode and Effect Analysis, FMEA).

### Quantitative vs. Qualitative Analyse

Die Sicherheitsanalyse kann basierend auf der Quantifizierung von Aspekten in der Analyse kategorisiert werden:

- **Quantitative Analyse**: Wird verwendet, um Hardware-Designs zu validieren, Hardware-Architekturmetriken zu bewerten und die Wahrscheinlichkeit von Sicherheitszielverletzungen aufgrund zufälliger Hardwareausfälle zu bestimmen. Beispiele umfassen quantitative FMEA, quantitative FTA, Markov-Modelle und FMEDA.
- **Qualitative Analyse**: Wird verwendet, um Fehler zu identifizieren, ohne deren Häufigkeit vorherzusagen. Beispiele umfassen qualitative FMEA, qualitative FTA, Hazard and Operability Study (HAZOP) und Ereignisbaum-Analyse (ETA).

## Methoden der Sicherheitsanalyse

### Fehlermöglichkeits- und -einflussanalyse (FMEA)

FMEA ist eine induktive Methode, die qualitativ oder quantitativ sein kann. Sie umfasst die Identifizierung von Produktfunktionen oder Prozessschritten und deren potenziellen Fehlermöglichkeiten, Auswirkungen und Ursachen. FMEA-Variationen umfassen:

- **Prozess-FMEA (PFMEA)**: Analysiert Prozesse.
- **Design-FMEA (DFMEA)**: Analysiert technische Designs.
- **FMEA-MSR**: Analysiert potenzielle Fehlerursachen unter Kundenbetriebsbedingungen und deren technische Auswirkungen.

### Fehlbaumethode (FTA)

FTA ist eine deduktive Methode, die mit einem unerwünschten Ereignis beginnt und systematisch die potenziellen Ursachen unter Verwendung einer Fehlerbaustruktur identifiziert. FTA kann qualitativ oder quantitativ sein, wobei quantitative FTA Zuverlässigkeitsdaten zur Bestimmung der Hardware-Metriken einbezieht.

### Hazard and Operability Study (HAZOP)

HAZOP ist eine induktive, qualitative Methode, die verwendet wird, um potenzielle Gefahren und Betriebsprobleme zu identifizieren. Sie verwendet Sets von Leitwörtern, um systematisch Abweichungen von Design- oder Betriebsabsichten zu identifizieren, die Risikoevents verursachen könnten.

### Failure Modes, Effects, and Diagnostic Analysis (FMEDA)

FMEDA erweitert FMEA durch die Einbeziehung von Ausfallraten, Ausfallmodi und diagnostischer Abdeckung von Sicherheitsmechanismen. Sie wird hauptsächlich zur Analyse zufälliger Hardwarefehler verwendet, ist jedoch weniger effektiv für gemeinsame Ursachen oder Kaskadenfehler.

## Sicherheitsanalyse auf verschiedenen Ebenen

### Konzept-Ebene

Auf der Konzeptionsebene ist die Gefahrenanalyse und Risikobewertung (HARA) die primäre Sicherheitsanalyse, ergänzt durch FMEA und FTA zur Ableitung funktionaler Sicherheitsanforderungen. Diese Analysen helfen sicherzustellen, dass die Anforderungen verschiedener Standards erfüllt werden und Akzeptanzkriterien für die Validierung abgeleitet werden können.

### System-Ebene

Die Sicherheitsanalyse auf Systemebene umfasst FMEA und FTA zur Analyse sowohl systematischer als auch zufälliger Fehler. Die Analyse beginnt mit dem Systemdesign ohne Sicherheitsmechanismen und umfasst alle Systemfunktionen und Schnittstellen. Kritische Fehler, die zu Sicherheitszielverletzungen führen, werden mit FTA analysiert, und induktive sowie deduktive Analysen werden für gemeinsame Ursachen und Kaskadenfehler verwendet.

### Hardware-Ebene

Die Hardware-Sicherheitsanalyse konzentriert sich auf zufällige Fehler. Methoden wie FMEA und FMEDA werden verwendet, um Hardware-Designs zu validieren und Hardware-Metriken zu bewerten. Quantitative Analysen helfen, die Wahrscheinlichkeit von Sicherheitszielverletzungen aufgrund zufälliger Hardwarefehler zu bestimmen.

### Software-Ebene

Trotz ihrer systematischen und deterministischen Natur ist die Software-Sicherheitsanalyse entscheidend. Methoden umfassen Software-FMEA, Software-FTA, Critical Path Analysis (CPA) und HAZOP. Diese Methoden identifizieren potenzielle Softwarefehler und deren Auswirkungen auf Sicherheitsziele. Software-Sicherheitsmechanismen müssen Fehler erkennen und korrigieren, Übergänge zu sicheren Zuständen unterstützen und degradierte Betriebszustände aufrechterhalten.

## Zusammenfassung der Methoden

- **FMEA**: Identifiziert potenzielle Fehlermöglichkeiten, deren Auswirkungen und Ursachen.
- **FTA**: Analysiert Fehlerereignisse, die zu einem unerwünschten Hauptereignis führen.
- **HAZOP**: Identifiziert potenzielle Gefahren und Betriebsprobleme unter Verwendung von Leitwörtern.
- **FMEDA**: Erweitert FMEA durch Hinzufügung von Ausfallraten und diagnostischer Abdeckung.
- **CPA**: Identifiziert kritische Pfade innerhalb der Softwarearchitektur.

## Quizfragen

1. **Was sind die zwei grundlegenden Fragen, die die Sicherheitsanalyse zu beantworten versucht?**

   - a. Was kann schiefgehen?
   - b. Habe ich genug getan, um zu verhindern, dass etwas schiefgeht?
2. **Was ist der Hauptunterschied zwischen deduktiven und induktiven Sicherheitsanalysemethoden?**

   - a. Deduktive Methoden beginnen mit bekannten Effekten und verfolgen diese rückwärts, um Ursachen zu identifizieren.
   - b. Induktive Methoden beginnen mit bekannten Ursachen und verfolgen diese vorwärts, um Effekte zu identifizieren.
3. **Welche Analysemethode verwendet Leitwörter, um potenzielle Gefahren und Betriebsprobleme zu identifizieren?**

   - a. HAZOP
4. **Welche zusätzlichen Elemente umfasst FMEDA im Vergleich zu FMEA?**

   - a. Ausfallraten, Ausfallmodi und diagnostische Abdeckung.
5. **Auf welcher Ebene wird HARA hauptsächlich verwendet und wofür steht dieses Akronym?**

   - a. Konzeptionsebene
   - b. Hazard Analysis and Risk Assessment (Gefahrenanalyse und Risikobewertung)
6. **Was ist der primäre Fokus der Sicherheitsanalyse auf Systemebene?**

   - a. Unterstützung des Designs und Analyse sowohl systematischer als auch zufälliger Fehler.
7. **Welche Methode wird oft empfohlen, um gemeinsame Ursachen und Kaskadenfehler zu identifizieren?**

   - a. FTA
8. **Warum ist die Software-Sicherheitsanalyse notwendig, obwohl Software systematisch und deterministisch ist?**

   - a. Um potenzielle Softwarefehler und deren Auswirkungen auf Sicherheitsziele zu identifizieren.
9. **Was ist die Rolle von Sicherheitsmechanismen in der Software-Sicherheitsanalyse?**

   - a. Fehler erkennen, Übergänge zu sicheren Zuständen unterstützen und degradierte Betriebszustände aufrechterhalten.
10. **Wofür steht CPA und was ist dessen Zweck in der Software-Sicherheitsanalyse?**

    - a. Critical Path Analysis (Kritische Pfadanalyse)
    - b. Identifizierung kritischer Pfade innerhalb der Softwarearchitektur.
