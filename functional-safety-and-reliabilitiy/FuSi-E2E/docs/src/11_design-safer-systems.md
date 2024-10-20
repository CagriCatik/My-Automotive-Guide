# Ist die Sicherheit älterer Autos besser als die neuer Autos?

In unserer letzten Sitzung habe ich versprochen, herauszufinden, ob ältere Autos sicherer sind als neue Autos. Lassen Sie uns das klären. Sie haben wahrscheinlich viel über verbesserte Fahrzeugsicherheit gehört. Hier ist der absolute Beweis für die enormen Fortschritte im Crashschutz bei normalen Autos in Europa. Hier haben wir einen Ford Fiesta von 1998, also ein Modell, das über 20 Jahre alt ist. Und hier ist der neueste Ford Fiesta. Die beiden Autos kollidieren mit 40 Meilen pro Stunde (64 km/h), und die Ergebnisse sind spektakulär unterschiedlich. Bei diesem alten Auto ist die Karosserie zusammengebrochen. Der Fahrgastraum ist auf den Fahrer eingedrückt, und das Risiko schwerer oder tödlicher Verletzungen ist extrem hoch. Beim neuen Auto bleibt die Karosserie intakt. Alle Airbags sind perfekt ausgelöst, es gibt nur einen Riss in der Windschutzscheibe. Dies ist ein Unfall, den man überleben kann. Bei dem alten Auto hingegen wäre der Unfall tödlich.

### Sind ältere Autos besser und sicherer als neue?

Erstens ist es wichtig zu verstehen, dass ältere Autos nicht unbedingt sicherer sind als neue. Mit Fortschritten in der Elektronik und modernen Technologien haben neue Autos bessere Chancen, sicherer zu sein. Nach den durchgeführten Aktivitäten auf Fahrzeugebene kommen die folgenden Aspekte auf Systemebene ins Spiel. Am Ende dieser Sitzung sollten Sie die Frage beantworten können: Was ist funktionale Sicherheit auf Systemebene?

### Was ist ein Item?

Wie Sie sich vielleicht aus früheren Sitzungen erinnern, ist ein Item ein System oder eine Kombination von Systemen, auf die die ISO 26262 angewendet wird und die eine Funktion oder einen Teil einer Funktion auf Fahrzeugebene implementieren. In der Praxis durchläuft die Entwicklung eines neuen Systems, das mit der ISO 26262 konform ist, mehrere Male die gleichen Phasen: Analyse, Design und Verifikation. Aufgrund der Natur der Automobilindustrie wird das System schrittweise entwickelt, was Monate bis Jahre dauern kann. Die Sicherheitsaspekte können nur in das System integriert werden, wenn die primären Funktionen entwickelt werden. Daher werden Integration, Bestätigung, Verifikation und, falls erforderlich, Neugestaltung und dann Analyse in kleineren Schritten mehrfach durchgeführt. Natürlich gibt es Fälle, in denen dieser Zyklus nicht notwendig ist, aber aus meiner Erfahrung ist die Entwicklung eher ein iterativer Prozess als eine einmalige Integration und Freigabe.

### Zusammenarbeit der verschiedenen Teile der Norm

Aus einer hohen Perspektive sollten Teil 3, 4, 5 und 6 zusammenarbeiten, und das Ergebnis eines Teils kann als Eingabe für einen anderen dienen. Normalerweise haben Teil 4, 5 und 6 eine stärkere Beziehung, und die Zusammenarbeit ist noch enger. Wie Sie auf diesem Bild sehen können, konzentrieren sich die technischen Aspekte, die für die funktionale Sicherheit eines Systems relevant sind, auf diesen Teil der ISO 26262. Wir wechseln den Fokus von Fahrzeugfunktionen und Items zu Systemen, die ein Item umfassen.

### Was ist funktionale Sicherheit?

Laut ISO 26262 ist funktionale Sicherheit das Fehlen eines unangemessenen Risikos aufgrund von Gefahren, die durch das Fehlverhalten von elektrischen/elektronischen Systemen verursacht werden. Am Ende sprechen wir also über Fehler und Ausfälle der Elektronik. Die Norm definiert zwei Arten von Fehlern: systematische und zufällige. Ein systematischer Fehler führt zu einem systematischen Ausfall. Ein systematischer Ausfall ist auf eine bestimmte Ursache zurückzuführen, die nur durch eine Änderung des Designs oder des Herstellungsprozesses, der Betriebsverfahren, der Dokumentation oder anderer relevanter Faktoren beseitigt werden kann. Ein zufälliger Ausfall hingegen ist ein Ausfall, der unvorhersehbar auftreten kann und einer Wahrscheinlichkeitsverteilung folgt.

### Systematische und zufällige Fehler

Laut Wikipedia ist eine Wahrscheinlichkeitsverteilung eine mathematische Beschreibung der Wahrscheinlichkeiten von Ereignissen und Teilmengen derselben Stichprobe. Die Wahrscheinlichkeitsverteilung des Ausfalls von Hardwareelementen ist die Möglichkeit, dass ein Hardwareelement mit einem bestimmten Fehlermodus ausfällt. Laut der Definition der Norm treten zufällige Ausfälle nur bei Hardwareelementen auf. Systematische Ausfälle können in Prozessen, Software und auch in Hardware gefunden werden.

### Technisches Sicherheitskonzept

Lassen Sie uns das erste Arbeitsergebnis besprechen, das in der ISO 26262, Teil 4, erwähnt wird: die Systementwicklung, insbesondere das technische Sicherheitskonzept. Für einen Lieferanten, der ein Element, ein System oder ein Hardwareteil für einen OEM entwickeln soll, könnten die Aktivitäten zur Entwicklung des technischen Sicherheitskonzepts in der RFQ-Phase (Request for Quotation) beginnen. Idealerweise sollte das technische Sicherheitskonzept in dieser Phase bereit sein, aber in vielen Fällen ist dies nicht der Fall. Im schlimmsten Fall können Sie ein grundlegendes technisches Sicherheitskonzept haben, das durch eine grundlegende Sicherheitsanalyse unterstützt wird. Das Ergebnis der grundlegenden Sicherheitsanalyse dient als Eingabe für die nachfolgende Verfeinerung des technischen Sicherheitskonzepts. Dieser Zyklus kann viele Male stattfinden. Wenn das technische Sicherheitskonzept eine bestimmte Reife erreicht, sollte es verwendet werden, um das Software- und Hardware-Sicherheitskonzept zu entwickeln.

### Sicherheitsmechanismen und Sicherheitsmaßnahmen

Das technische Sicherheitskonzept sollte die im Projekt implementierten Sicherheitsmaßnahmen zur Minderung unangemessener Risiken beschreiben. Beachten Sie, dass ich „im Projekt implementiert“ sagte, nicht in Hardware oder Software. Dies liegt daran, dass eine Sicherheitsmaßnahme ein Prozessaspekt oder ein Sicherheitsmechanismus sein kann, der ein technischer Aspekt ist. Wie entdecken Sie, welche Sicherheitsmechanismen Sie benötigen, um die unangemessenen Risiken zu mindern, die durch Ausfälle elektrischer/elektronischer Systeme verursacht werden? Eine Antwort ist die Sicherheitsanalyse. Die durch die Sicherheitsanalyse definierten Sicherheitsmaßnahmen werden in zwei Kategorien unterteilt: Sicherheitsmechanismen und Sicherheitsmaßnahmen.

Ein Sicherheitsmechanismus ist eine technische Lösung, die durch elektrische, elektronische Funktionen, Elemente oder andere Technologien implementiert wird, um Fehler zu erkennen und zu mindern oder zu tolerieren, Ausfälle zu kontrollieren oder zu vermeiden, um die beabsichtigte Funktionalität aufrechtzuerhalten oder einen sicheren Zustand zu erreichen oder aufrechtzuerhalten. Ein Sicherheitsmechanismus kann ein CRC, Timeout-Überwachung oder redundante Überprüfungen durch verschiedene Softwarekomponenten oder verschiedene Hardwareelemente der I/O-Pins oder ein Lockstep in einem Mikrocontroller sein. Ein Sicherheitsmechanismus ist eine Unterkategorie einer Sicherheitsmaßnahme.

### Inhalt eines technischen Sicherheitskonzepts

Das technische Sicherheitskonzept ist eine Sammlung von Anforderungen und Designartefakten. Diese Anforderungen sollten die relevanten Schnittstellen, funktionalen Aspekte der Sicherheitsmechanismen, die Leistung der Sicherheitsmechanismen, Konfigurationsaspekte, bekannte Probleme oder Fehler und Produktionsfaktoren beschreiben. Neben den Sicherheitsmechanismen beschreiben Dokumente die dynamischen und statischen Eigenschaften des Systems. Eine der gebräuchlichsten Methoden zur Beschreibung dieser Art von Informationen ist die Verwendung von UML oder SysML.

### Hardware-Software-Schnittstelle (HSI)

Neben dem technischen Sicherheitskonzept sollte auch die Hardware-Software-Schnittstelle (HSI) entwickelt werden. Die HSI-Spezifikation sollte die Hardwareteile, die von Software gesteuert werden, und die Hardware-Ressourcen umfassen, die die Ausführung der Softwareteile unterstützen. Merkmale der Hardwareelemente, Schnittstellen, Betriebsbedingungen und andere Aspekte sollten in der HSI behandelt werden. Manchmal können HSI-Arbeitsergebnisse mit dem technischen Sicherheitskonzept in einem Arbeitsergebnis kombiniert werden.

### Implementierung

Der Zyklus Design, Analyse und Verifikation hat einen weiteren Schritt: die Implementierung. Basierend auf den Konzepten und Analysen sollte die Implementierung in Hardware und Software erfolgen. Wir werden die Implementierungsphase in den folgenden Sitzungen besprechen. Bevor wir jedoch fortfahren, lassen Sie uns über Verifikation, Validierung und Integration auf Systemebene sprechen.
