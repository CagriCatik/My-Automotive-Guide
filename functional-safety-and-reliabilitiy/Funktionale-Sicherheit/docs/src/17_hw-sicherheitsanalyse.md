### Einführung in die Hardware-Sicherheitsanalyse

Die Hardware-Sicherheitsanalyse in der ISO 26262 ist aufgrund des Vorhandenseins sowohl systematischer als auch zufälliger Fehler von entscheidender Bedeutung. Diese duale Natur der Fehler erfordert eine gründliche Analyse, um sicherzustellen, dass Sicherheitsziele nicht verletzt werden. Der Sicherheitsanalyseprozess umfasst sowohl qualitative als auch quantitative Ansätze, die an das Automotive Safety Integrity Level (ASIL) angepasst sind.

### Qualitative Hardware-Sicherheitsanalyse

#### ASIL-Differenzierung

Die Hardware-Sicherheitsanalyse variiert erheblich zwischen ASIL A & B und ASIL C & D. Die Hardware-Metriken bieten eine klare Unterscheidung und spiegeln den zunehmenden Aufwand für höhere ASIL-Stufen wider.

#### Fehler-Möglichkeiten-und-Einfluss-Analyse (FMEA)

1. **Zweck:** Identifizieren potenzieller Fehlermodi innerhalb eines Systems und deren Auswirkungen auf die Systemoperationen.
2. **Prozess:**
   - **Definition des Umfangs:** Festlegen der Grenzen der Analyse, einschließlich der zu überprüfenden Hardware-Komponenten und -Systeme.
   - **Identifizierung von Fehlermodi:** Auflisten aller möglichen Arten, wie jede Komponente ausfallen kann.
   - **Bewertung der Auswirkungen:** Bestimmen der Konsequenzen jedes Fehlermodus auf die Funktionalität des Systems.
   - **Risikobewertung:** Zuweisen einer Risikoprioritätsnummer (RPN) basierend auf der Schwere, Häufigkeit und Erkennung jedes Fehlermodus.
   - **Minderungsstrategien:** Entwickeln von Strategien zur Reduzierung oder Beseitigung hochriskanter Fehlermodi.

#### Fehlerbaumanalyse (FTA)

1. **Zweck:** Ableiten von Kombinationen von Fehlern, die zu spezifischen unerwünschten Ereignissen führen.
2. **Prozess:**
   - **Definition des Top-Ereignisses:** Identifizieren des primären unerwünschten Ereignisses, das analysiert werden soll.
   - **Konstruktion des Fehlerbaums:** Erstellen eines logischen Diagramms, das die Beziehungen zwischen grundlegenden Ereignissen und dem Top-Ereignis mithilfe von UND- und ODER-Gattern zeigt.
   - **Analyse der Pfade:** Bewerten verschiedener Fehlerpfade, die zum Top-Ereignis führen könnten.
   - **Identifizierung gemeinsamer Ursachen:** Suchen nach gemeinsamen Ursachefehlern, die zu Kaskadeneffekten führen könnten.

#### Integration von FMEA und FTA

1. **Sequentieller Ansatz:** Beginn mit einer FMEA zur Identifizierung potenzieller Fehlermodi und deren Auswirkungen.
2. **Ergänzung durch FTA:** Verwenden der FTA, um die in der FMEA identifizierten potenziellen Auswirkungen weiter zu untersuchen und gemeinsame Ursachen oder kaskadierende Fehler aufzudecken.

### Quantitative Hardware-Sicherheitsanalyse

Die quantitative Analyse umfasst die Berechnung von Metriken zur Bewertung der Hardware-Widerstandsfähigkeit gegen Fehler. Dieser Schritt ist wesentlich, um die Wahrscheinlichkeit von Sicherheitszielverletzungen zu verstehen.

#### FMEDA (Fehlermöglichkeits-, Einfluss- und Diagnoseanalyse)

1. **Zweck:** Bestimmen von Hardware-Metriken durch Analyse von Fehlermodi, -auswirkungen und Diagnosedeckung.
2. **Prozess:**
   - **Stückliste (BOM):** Erstellen einer umfassenden Liste von Hardware-Elementen.
   - **Zusammenstellung von Fehlerdaten:** Dokumentieren von Fehlerquoten, -modi und -verteilungen basierend auf Standards wie IEC 61709.
   - **Wirkungsanalyse:** Erfassen der Auswirkungen jedes Fehlermodus auf die Systemfunktionalität.
   - **Sicherheitsmechanismen:** Identifizieren und Dokumentieren von Sicherheitsmechanismen und deren Diagnosedeckung.
   - **Berechnung von Metriken:** Berechnen des Single Point Fault Metric (SPFm) und des Latent Fault Metric (LFm).

#### Fehlerkategorisierung

1. **Single Point Faults (SPF):** Fehler, die direkt zu Sicherheitszielverletzungen führen.
2. **Restfehler:** Fehler, die nach Anwendung von Sicherheitsmechanismen verbleiben.
3. **Dual Point Faults:** Fehler, die mehrere gleichzeitige Fehler erfordern, um Sicherheitsziele zu verletzen.
   - **Erkannte Dual Point Faults:** Von Sicherheitsmechanismen identifiziert und kontrolliert.
   - **Wahrgenommene Dual Point Faults:** Vom Fahrer wahrgenommen und kontrolliert.
   - **Latente Dual Point Faults:** Weder erkannt noch wahrgenommen, stellen eine erhebliche Gefahr dar.
   - **Sichere Fehler:** Stellen keine Bedrohung für Sicherheitsziele dar.

### Detaillierter FMEDA-Prozess

1. **Stückliste (BOM):**

   - Erstellen einer BOM, die alle Hardware-Elemente im System auflistet.
   - Dokumentieren der Fehlerquoten, -modi und -verteilungen.
2. **Zusammenstellung von Fehlerdaten:**

   - Fehlerquote jeder Komponente (ausgedrückt in FIT - Failures In Time) wird notiert.
   - Fehlermodi werden basierend auf Standards wie IEC 61709 kategorisiert.
3. **Wirkungsanalyse:**

   - Dokumentieren der Auswirkungen jedes Fehlermodus auf die Systemsicherheit.
   - Klassifizieren von Komponenten als relevant oder nicht relevant für die funktionale Sicherheit.
4. **Zuordnung von Sicherheitsmechanismen:**

   - Zuordnen von Sicherheitsmechanismen zu jedem relevanten Fehlermodus.
   - Dokumentieren der Diagnosedeckung und Berechnen der verbleibenden FIT-Raten.
5. **Berechnung von Metriken:**

   - Berechnen von SPFm und LFm anhand der gesammelten Daten.
   - Sicherstellen der Einhaltung der ISO 26262-Anforderungen für das jeweilige ASIL.

### Beispiel-Fallstudie

#### Systembeschreibung

- **Funktion:** Temperaturregelsystem mit einem Sensor (R3) und einem Ventil (Ventil 2).
- **Sicherheitsziel:** Ventil 2 darf bei einer Temperatur über 100°C nicht länger als 100 Millisekunden geschlossen bleiben (ASIL B).

#### Konstruktion der FMEDA-Tabelle

1. **Hardware-Komponenten:** Auflisten aller Komponenten (z.B. R3 - Temperatursensor, T71 - Steuerelement).
2. **Fehlermodi und -raten:** Dokumentieren der Fehlermodi (z.B. offen, Kurzschluss zur Masse) und Fehlerquoten für jede Komponente.
3. **Sicherheitsrelevanz:** Markieren von Komponenten als relevant oder nicht relevant für die funktionale Sicherheit.
4. **Fehlerauswirkungen:** Beschreiben der Auswirkungen jedes Fehlermodus.
5. **Sicherheitsmechanismen:** Zuweisen von Diagnosedeckung zu jedem relevanten Fehlermodus.

### Berechnung der Hardware-Metriken

1. **Single Point Fault Metric (SPFm):**
   \[ \text{SPFm} = \left(1 - \frac{\text{Residual FIT für Single Point Faults}}{\text{FIT-Rate der sicherheitsrelevanten Elemente}}\right) \times 100\% \]

   - **Beispielrechnung:** Wenn die Residual-FIT für Single Point Faults 7 FIT und die FIT-Rate der sicherheitsrelevanten Elemente 100 FIT beträgt:
     \[ \text{SPFm} = \left(1 - \frac{7}{100}\right) \times 100\% = 93\% \]
2. **Latent Fault Metric (LFm):**
   \[ \text{LFm} = \left(1 - \frac{\text{Residual FIT für latente Fehler}}{\text{FIT-Rate der sicherheitsrelevanten Elemente}}\right) \times 100\% \]

   - **Beispielrechnung:** Wenn die Residual-FIT für latente Fehler 10 FIT und die FIT-Rate der sicherheitsrelevanten Elemente 100 FIT beträgt:
     \[ \text{LFm} = 90\% \]

### Wahrscheinlichkeitsmetrik für zufällige Hardwarefehler (PMHF)

PMHF bewertet das verbleibende Risiko von Sicherheitszielverletzungen durch zufällige Hardwarefehler. Die Formel lautet:

\[ \text{PMHF} = \sum \text{(Fehlerraten aller Komponenten)} \times \text{(Lebensdauer des Fahrzeugs in Stunden)} \]

### Interpretation und Schlussfolgerung

#### Bewertung der Ergebnisse

- **Sicherheitsmechanismen:** Hohe SPFm- oder LFm-Werte weisen auf robuste Sicherheitsmechanismen hin.
- **Restliches Risiko:** Bestimmen, ob das verbleibende Risiko akzeptabel ist.
- **Unabhängigkeit der Komponenten:** Sicherstellen der Interferenzfreiheit für nicht relevante Komponenten.

### Beispielinterpretation

- **Single Point Fault Metric (SPFm):** Eine Metrik über 90% für ASIL B zeigt die Einhaltung der ISO 26262.
- **Latent Fault Metric (LFm):** Eine Metrik über 60% für ASIL B ist zufriedenstellend.
- **Analyse des verbleibenden Risikos:** Sicherstellen, dass keine gefährlichen Fehler unentdeckt bleiben.

### Schlussfolgerung

Dieses Tutorial bietet eine umfassende und detaillierte Untersuchung der Hardware-Sicherheitsanalyse nach ISO 26262. Der strenge Prozess umfasst sowohl qualitative als auch quantitative Analysen, um sicherzustellen, dass Sicherheitsziele durch Hardwarefehler nicht verletzt werden.

### Fragen

1. **Erklären Sie den Unterschied zwischen systematischen und zufälligen Fehlern in der Hardware-Sicherheitsanalyse.**
2. **Was sind die Hauptunterschiede in den Sicherheitsanalyseanforderungen zwischen ASIL A & B und ASIL C & D?**
3. **Beschreiben Sie den Zweck und den Prozess der Durchführung einer FMEA in der Hardware-Sicherheitsanalyse.**
4. **Wie ergänzt eine FTA eine FMEA bei der Identifizierung potenzieller Sicherheitszielverletzungen?**
5. **Listen Sie die Fehlerkategorien in FMEDA auf und erklären Sie sie.**
6. **Welche Schritte umfasst der FMEDA-Prozess?**
7. **Wie werden SPFm und LFm berechnet und was bedeuten sie?**
8. **Was ist der PMHF und wie wird er berechnet?**
9. **Diskutieren Sie die Bedeutung der Diagnosedeckung in Sicherheitsmechanismen.**
10. **Erklären Sie die Rolle von Einsatzprofilen in FMEDA und deren Einfluss auf FIT-Raten.**
