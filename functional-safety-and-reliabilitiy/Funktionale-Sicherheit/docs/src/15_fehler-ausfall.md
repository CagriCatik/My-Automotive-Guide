# Funktionale Sicherheitsschulung: Umfassender Leitfaden

## Fehler, Ausfälle und Sicherheitsmechanismen

In den vorherigen Sitzungen haben wir kurz über Fehler, Ausfälle und Sicherheitsmechanismen gesprochen, aber die Details absichtlich ausgelassen. In dieser Sitzung möchte ich die Details zu Fehlern und Ausfällen vorstellen.

### Definitionen von Fehler und Ausfall

Laut IEC 60050, Teil 191, ist ein Ausfall ein Ereignis, das sich von einem Fehler unterscheidet, welcher als Zustand definiert ist. Diese Definition gilt für Systeme, die nicht reine Software sind. Eine nützliche Ressource ist die Electropedia, das Online-Wörterbuch der elektrotechnischen Begriffe. Ein Link dazu ist in den Schulungsfolien enthalten. Wenn Sie sich auf Hardwarethemen spezialisieren oder sichere Architekturen entwickeln, kann der Standard IEC 61508 Ihnen helfen, die Prinzipien zu verstehen, die auch in ISO 26262 verwendet werden.

### Arten von Ausfällen

Wir haben zwei Arten von Ausfällen: zufällige und systematische. Nach ISO 26262 ist ein zufälliger Ausfall ein Ausfall, der unvorhersehbar während der Lebensdauer eines Hardwareelements auftreten kann und einer Wahrscheinlichkeitsverteilung folgt. Ein systematischer Ausfall ist ein Ausfall, der in deterministischer Weise mit einer bestimmten Ursache verbunden ist, die durch eine Änderung im Design- oder Herstellungsprozess, den Betriebsverfahren, der Dokumentation oder anderen relevanten Faktoren eliminiert werden kann.

Zufällige Ausfälle sind spezifische Arten von Ausfällen, die nur für Hardware gelten. Diese Ausfälle sind unvorhersehbar und folgen einer Wahrscheinlichkeitsverteilung. Systematische Ausfälle sind hingegen deterministisch und können durch Änderungen eliminiert werden.

### Umgang mit zufälligen Ausfällen

Um zufällige Ausfälle zu bewältigen, müssen Sicherheitsmechanismen entwickelt werden, die diese Fehler erkennen und reagieren können, um sicherzustellen, dass die Sicherheitsziele nicht verletzt werden. Zufällige Ausfälle können jederzeit auftreten, und es ist wichtig, diese zu erkennen und zu kontrollieren.

### Fehlerrate und Fehlermodus

Die Fehlerrate ist die Wahrscheinlichkeitsdichte eines Ausfalls geteilt durch die Überlebenswahrscheinlichkeit eines Hardwareelements. Ein Fehlermodus beschreibt, wie ein Element oder ein Gegenstand ausfällt und sein beabsichtigtes Verhalten nicht mehr liefert.

### Sicherheitsmechanismen

Ein Sicherheitsmechanismus ist eine technische Lösung, die durch elektrische/elektronische Funktionen oder Elemente oder andere Technologien implementiert wird, um Fehler zu erkennen und zu mindern oder zu tolerieren, Ausfälle zu kontrollieren oder zu vermeiden und die beabsichtigte Funktionalität aufrechtzuerhalten oder einen sicheren Zustand zu erreichen. Jeder Sicherheitsmechanismus hat eine diagnostische Abdeckung, die in Prozent ausgedrückt wird.

### Diagnostische Abdeckung

Die diagnostische Abdeckung eines Sicherheitsmechanismus ist der Prozentsatz der Fehlerrate eines Hardwareelements oder eines Teils der Fehlerrate eines Fehlermodus, der durch den implementierten Sicherheitsmechanismus erkannt oder kontrolliert wird. Die Standard-Diagnoseraten sind 60 %, 90 % und 99 %.

### Fehlermodi und Fehlerraten

Jedes Hardwareelement hat eine vordefinierte Fehlerrate. Standards wie SN 29500 oder IEC 61709 können verwendet werden, um die Fehlerraten und Fehlermodi der Hardwareelemente zu ermitteln. Die Fehlerrate wird in FIT (Failure In Time) ausgedrückt, wobei 1 FIT einem Ausfall eines Elements in 1 Milliarde Betriebsstunden entspricht.

### Fehlerkategorien

Die Standard gibt uns zwei Hauptkategorien von Fehlern: zufällige und systematische. Die wichtigsten zufälligen Hardwarefehler sind:

1. **Single Point Faults:** Fehler, die direkt zur Verletzung eines Sicherheitsziels führen können, wenn kein Sicherheitsmechanismus vorhanden ist.
2. **Residual Faults:** Ein Teil eines zufälligen Hardwarefehlers, der zur Verletzung eines Sicherheitsziels führt, wenn er nicht durch einen Sicherheitsmechanismus kontrolliert wird.
3. **Latent Dual Point Faults:** Fehler, deren Anwesenheit nicht durch einen Sicherheitsmechanismus erkannt wird und die erst in Kombination mit einem anderen unabhängigen Fehler zur Verletzung eines Sicherheitsziels führen.
4. **Detected Dual Point Faults:** Fehler, die erkannt werden und daher nicht latent sind.
5. **Perceived Dual Point Faults:** Fehler, die vom Fahrer innerhalb einer vorgeschriebenen Zeit wahrgenommen werden.
6. **Safe Faults:** Fehler, deren Auftreten die Wahrscheinlichkeit der Verletzung eines Sicherheitsziels nicht signifikant erhöht.

### Permanente und transiente Fehler

Permanente Fehler bleiben bestehen, bis sie entfernt oder repariert werden, während transiente Fehler einmal auftreten und anschließend verschwinden. Permanente Fehler umfassen "stuck at", "open", "short" und "drift". Transiente Fehler können beispielsweise Bit-Flips oder EMC-Probleme sein.

### Gemeinsame und Kaskadierende Ausfälle

Ein **Common-Cause Failure** ist ein Ausfall von zwei oder mehr Elementen eines Gegenstands, der direkt auf ein spezifisches Ereignis oder eine spezifische Ursache zurückzuführen ist. Ein **Kaskadierende Ausfall** resultiert aus einer Ursache innerhalb oder außerhalb eines Elements und führt zum Ausfall eines anderen Elements. Abhängige Ausfälle sind Ausfälle, die nicht statistisch unabhängig sind.

### Zusammenfassung

Wir haben verschiedene Arten von Fehlern und Ausfällen untersucht, die für die funktionale Sicherheit relevant sind. Diese umfassen Single Point Faults, Residual Faults, Latent Faults, Detected Dual Point Faults, Perceived Dual Point Faults und Safe Faults sowie permanente und transiente Fehler. Zusätzlich haben wir Common-Cause und Kaskadierende Ausfälle behandelt.

Diese Klassifikationen sind entscheidend, um die notwendigen Sicherheitsmechanismen zu identifizieren und die funktionale Sicherheit in Hardware und Software gemäß ISO 26262 zu quantifizieren.
