# Details zu Fehlern und Ausfällen in der funktionalen Sicherheit

In den vorherigen Sitzungen haben wir kurz über Fehler, Ausfälle und Sicherheitsmechanismen gesprochen, aber ich habe die Details absichtlich ausgelassen. In dieser Sitzung möchte ich Ihnen die Details zu Fehlern und Ausfällen vorstellen.

### Definitionen von Fehlern und Ausfällen

Laut IEC 60050, Teil 191, ist ein Ausfall ein Ereignis, das sich von einem Fehler unterscheidet, der ein Zustand gemäß der Norm ist. Diese Definition gilt für Systeme, die nicht ausschließlich aus Software bestehen.

Falls Sie an Technik interessiert sind, steht Ihnen eine kostenlose Ressource zur Verfügung: die Electropedia, das weltweit Online Elektrotechnische Wörterbuch. Sie finden den Link in den Schulungsfolien. Wenn Sie sich auf Hardware-Themen spezialisieren oder sich auf die Erstellung sicherer Architekturen konzentrieren, empfehle ich Ihnen, die Norm IEC 61508 zu prüfen. Diese kann Ihnen helfen, die auch in der ISO 26262 verwendeten Prinzipien zu verstehen.

### Arten von Ausfällen

Wir haben zwei Arten von Ausfällen besprochen: zufällige und systematische. Hier sind die Definitionen gemäß ISO 26262:

- **Zufälliger Ausfall**: Ein Ausfall, der während der Lebensdauer eines Hardware-Elements unvorhersehbar auftreten kann und einer Wahrscheinlichkeitsverteilung folgt.
- **Systematischer Ausfall**: Ein Ausfall, der in deterministischer Weise mit einer bestimmten Ursache zusammenhängt, die durch eine Änderung im Design- oder Fertigungsprozess, Betriebsverfahren, Dokumentation oder anderen relevanten Faktoren beseitigt werden kann.

### Handhabung zufälliger Ausfälle

Zufällige Ausfälle sind spezifische Arten von Ausfällen, die nur mit Hardware verbunden sind. Diese Ausfälle sind unvorhersehbar und folgen einer Wahrscheinlichkeitsverteilung. Um zufällige Ausfälle zu handhaben, müssen Sicherheitsmechanismen entwickelt werden, die sie sofort erkennen und darauf reagieren, um sicherzustellen, dass die Ausfälle keine Sicherheitsziele verletzen.

### Sicherheitsmechanismen

Ein Sicherheitsmechanismus ist eine technische Lösung, die durch elektrische/elektronische Funktionen oder Elemente oder durch andere Technologien implementiert wird, um Fehler zu erkennen, zu mindern oder zu tolerieren, Ausfälle zu kontrollieren oder zu vermeiden und die beabsichtigte Funktionalität aufrechtzuerhalten oder einen sicheren Zustand zu erreichen. Jeder Sicherheitsmechanismus hat eine diagnostische Abdeckung, die normalerweise in Prozent ausgedrückt wird.

### Klassifizierung von Fehlern

Fehler werden in der Norm ISO 26262 in verschiedene Kategorien unterteilt:

1. **Einzelfehler (Single Point Fault)**: Ein Fehler eines Hardware-Elements, das keinen Sicherheitsmechanismus hat und direkt zur Verletzung eines Sicherheitsziels führen kann.
2. **Restfehler (Residual Fault)**: Ein Teil eines zufälligen Hardware-Fehlers, der zur Verletzung eines Sicherheitsziels führen kann und nicht durch einen Sicherheitsmechanismus kontrolliert wird.
3. **Latente Doppelfehler (Latent Dual Point Faults)**: Fehler, die zur Verletzung eines Sicherheitsziels führen können, aber nur in Kombination mit einem anderen unabhängigen Fehler.
4. **Erkannte Doppelfehler (Detected Dual Point Faults)**: Fehler, die durch mindestens einen Sicherheitsmechanismus erkannt werden.
5. **Wahrgenommene Doppelfehler (Perceived Dual Point Faults)**: Fehler, die vom Fahrer wahrgenommen werden können.
6. **Sichere Fehler (Safe Faults)**: Fehler, deren Auftreten die Wahrscheinlichkeit einer Verletzung eines Sicherheitsziels nicht signifikant erhöht.

### Fehlerraten und Fehlermodi

Jedes Hardware-Element hat eine vorgegebene Fehlerrate und verschiedene Fehlermodi. Die Fehlerrate wird in FIT (Failure In Time) ausgedrückt, wobei 1 FIT einem Ausfall eines Elements in einer Milliarde Betriebsstunden entspricht. Die Standardwerke SN 29500 und IEC 61709 liefern diese Informationen.

### Behandlung von Fehlern

Die diagnostische Abdeckung eines Sicherheitsmechanismus deckt einen Teil der Fehlerrate eines Fehlermodus ab. Der verbleibende Teil wird als Rest-FIT bezeichnet. Sicherheitsmechanismen können eine diagnostische Abdeckung von 60%, 90% und 99% haben.

### Analyse von Fehlern

Bei der Analyse von Fehlern und Ausfällen ist es wichtig zu verstehen, wie diese die Sicherheitsziele verletzen können. Die Norm gibt zwei Hauptkategorien von Fehlern vor: zufällige und systematische Fehler.

- **Gemeinsame Ursache (Common-Cause Failure)**: Ein Fehler von zwei oder mehr Elementen, der direkt aus einem bestimmten Ereignis oder einer bestimmten Ursache resultiert.
- **Kaskadierende Fehler (Cascading Failure)**: Ein Fehler eines Elements, der zu einem Fehler eines anderen Elements führt.

### Zusammenfassung

Wir haben verschiedene Arten von Fehlern besprochen, darunter Einzelfehler, Restfehler, latente Fehler, erkannte Doppelfehler, wahrgenommene Doppelfehler und sichere Fehler. Außerdem haben wir dauerhafte und transiente Fehler klassifiziert. Dauerhafte Fehler bleiben bestehen, bis sie entfernt oder repariert werden, während transiente Fehler einmal auftreten und anschließend verschwinden.

Zum Abschluss dieser Sitzung schlage ich vor, die Informationen noch einmal zu überdenken und die Kategorien der Fehler zu verstehen. Diese werden später verwendet, um die Mechanismen zu bestimmen, die wir benötigen, und um die funktionale Sicherheit in Hardware und Software zu quantifizieren. Vor der Besprechung des nächsten Themas machen wir ein kurzes Quiz.
