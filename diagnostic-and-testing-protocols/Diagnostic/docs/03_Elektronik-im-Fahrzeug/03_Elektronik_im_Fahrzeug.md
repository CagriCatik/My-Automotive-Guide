# Elektronik im Fahrzeug

## Einleitung

Die Anfänge der Fahrzeugelektronik reichen bis Mitte der 80er Jahre zurück, als elektrische, elektromechanische und elektronische Komponenten hauptsächlich Vorglühanlagen, Zündanlagen, Beleuchtung und Starterschaltungen umfassten. Die Ansteuerung erfolgte damals über Relais. Ab Mitte der 80er Jahre begann man, die ersten Steuergeräte in Fahrzeugen zu verbauen. Diese Steuergeräte übernahmen immer mehr Funktionen und trugen dazu bei, dass die Fahrzeugvernetzung stark zunahm, begleitet von einer stetig wachsenden Anzahl an Steuergeräten im Fahrzeug. Dieser Trend setzte sich fort und prägt bis heute maßgeblich die Entwicklung der Fahrzeugelektronik.

## Steuergeräteaufbau

Steuergeräte im Fahrzeug sind entscheidende Komponenten, die Sensorsignale auswerten und berechnete Stellwerte an Aktuatoren senden, um gewünschte Sollwerte zu erreichen. Einige wichtige Anforderungen an diese Steuergeräte sind:

- **Echtzeitfähigkeit:** Die Reaktion der Regelung muss zeitlich an den physikalischen Prozess angepasst sein, um innerhalb einer definierten Zeitspanne auf Anforderungen reagieren zu können
- **Integrierter Aufbau:** Steuergeräte bestehen aus verschiedenen Komponenten wie Treiberbausteinen, Microcontrollern, Leistungstransistoren und Kondensatoren
- **Betriebssicherheit:** Steuergeräte müssen betriebssicher sein, um eine zuverlässige Funktion des Fahrzeugs zu gewährleisten.
- **Robustheit:** Sie müssen robust gegenüber verschiedenen Umwelteinflüssen wie Temperatur, elektromagnetischer Verträglichkeit (EMV), Vibrationen, Dichtheit und Medienbeständigkeit sein
- **Kosten:** Die Kosten spielen ebenfalls eine wichtige Rolle bei der Entwicklung und Wartung von Steuergeräten.

<img src="image/103_Elektronik_im_Fahrzeug/1710010020421.png" alt="drawing" width="400"/>

## Rechnerkern und Speicherbereiche

Der Steuergerät Rechnerkern ist eine entscheidende Komponente in elektronischen Steuergeräten für Fahrzeuge. Er spielt eine wichtige Rolle für die Leistung und Funktionalität dieser Systeme. Hier sind einige wichtige Aspekte im Zusammenhang mit dem Rechnerkern:

### Leistungsfähigkeit

- **Datenbus (Busbreite):** Die Busbreite beeinflusst die Geschwindigkeit und Effizienz des Datentransfers innerhalb des Steuergeräts.
- **DSP (Digitaler Signalprozessor):** Die Integration eines DSP verbessert die Verarbeitungsfähigkeiten des Steuergeräts, insbesondere für Aufgaben im Bereich der Signalverarbeitung.
- **Taktzyklen pro Befehl:** Die Anzahl der Taktzyklen pro Befehl ist ein weiteres wichtiges Kriterium, das die Leistungsfähigkeit des Rechnerkerns beeinflusst.

### Komponenten

- **Supervision:** Bietet Überwachungs- und Kontrollfunktionen innerhalb des Steuergeräts.
- **Interne Stromversorgung:** Versorgt verschiedene Komponenten des Steuergeräts mit Strom.
- **Oszillator:** Generiert Taktsignale für Synchronisationszwecke.
- **Mikrocontroller:** Dient als zentrale Verarbeitungseinheit zur Ausführung von Befehlen.
- **Digitaler Signalprozessor (DSP):** Verbessert die Signalverarbeitungsfähigkeiten.
- **Random Access Memory:** Speichert Daten vorübergehend für schnellen Zugriff.
- **Flash EEPROM:** Nichtflüchtiger Speicher zur dauerhaften Speicherung von Programmdaten.
- **Kommunikation:** Ermöglicht den Datenaustausch mit externen Systemen.
- **Diagnose:** Unterstützt die Fehlererkennung und Fehlerbehebung.
- **I/O-Schaltkreise:** Schnittstellen zum Anschließen von Ein- und Ausgabegeräten.

Für weitere Details zur Konstruktion, Konnektivität und Funktionsweise des digitalen Rechnerkerns in der Automobilindustrie können zusätzliche Ressourcen wie wissenschaftliche Arbeiten und technische Dokumente tiefergehende Einblicke bieten:

1. Details zur Konstruktion und Verbindungstechnologie, digitalem Prozessorkern, Ein-/Ausgangsschaltkreisen werden in wissenschaftlicher Literatur wie "Elektronische Steuerung von Dieselmotoren" behandelt.
2. Jedes Steuergerät verfügt über einen Prozessorkern mit unterschiedlichen Leistungsstufen, wie in technischen Ressourcen diskutiert.
3. Entwicklungstrends in modernen Rechensystemen, einschließlich Prozessorkernen, werden in wissenschaftlichen Arbeiten erforscht.
4. Technische Dokumente wie "EP 2 338 111 B1" können spezifische Einblicke in verwandte Technologien bieten.
5. Wissenschaftliche Berichte zur Computerarchitektur gehen auf Aspekte wie Prozessorkonkurrenz für den Prozessorkern ein.

Diese Ressourcen können ein umfassendes Verständnis für das Design, die Funktionalität und die Fortschritte im Zusammenhang mit dem Steuergerät Rechnerkern in der Automobilindustrie vermitteln.

<img src="image\103_Elektronik_im_Fahrzeug\1710010217973.png" alt="drawing" width="400"/>

Die Speicherbereiche eines Steuergeräts spielen eine entscheidende Rolle bei der Speicherung und Verarbeitung von Daten. Hier sind wichtige Aspekte im Zusammenhang mit den Speicherbereichen:

### Arten von Speichern

- **Flüchtiger Speicher (RAM):** In Steuergeräten wird häufig SRAM (static RAM) verwendet, der Daten temporär speichert.
- **Nichtflüchtiger Speicher:** ROM (Read Only Memory) enthält fest gespeicherte Daten.
- **EEPROM:** Electrically Erasable Programmable Read Only Memory, wie im Steuergerät verwendet.
- **Flash-EEPROM:** Besitzt eine sehr kurze Programmierzeit im Vergleich zu anderen Speichern.

### Komponenten

- **Supervision:** Überwacht die Speichernutzung und -funktionalität.
- **Interne Stromversorgung:** Versorgt die Speicherbereiche mit Energie.
- **Oszillator:** Erzeugt Taktsignale für die Synchronisation.
- **Mikrocontroller:** Koordiniert den Zugriff auf die verschiedenen Speicherbereiche.
- **Digitaler Signalprozessor (DSP):** Unterstützt die Verarbeitung von Daten aus den Speichern.
- **Kommunikation:** Ermöglicht den Datenaustausch zwischen den Speichern und anderen Systemen.
- **Diagnose:** Hilft bei der Fehlererkennung und -behebung in den Speicherbereichen.
- **I/O-Schaltkreise:** Erlauben die Ein- und Ausgabe von Daten aus den Speichern.

<img src="image\103_Elektronik_im_Fahrzeug\1710010229688.png" alt="drawing" width="400"/>

Das Steuergerät im Fahrzeug verfügt über verschiedene Speicherbereiche, die spezifische Daten und Software beinhalten. Die Partitionierung des SG-Speichers umfasst mehrere wichtige Segmente:

- **SG Flash Memory:** Dieser Bereich enthält die Applikationssoftware und ist für die Ausführung von Anwendungen im Steuergerät zuständig.
  
- **SG EEPROM:** Hier werden Daten gespeichert, die auch nach dem Ausschalten des Fahrzeugs erhalten bleiben.

- **Geschützter Bereich:** Dieser Abschnitt beinhaltet sensible Daten, die vor unbefugtem Zugriff geschützt sind. Dazu gehören fahrzeugspezifische Informationen wie FIN (Fahrzeugidentifikationsnummer), Kilometerstand, EROTAN, Fehlerspeicher und Kodierwerte.

- **Boot Software und Boot Manager:** Diese Softwarekomponenten sind für den Startvorgang des Steuergeräts verantwortlich und sorgen für eine sichere Initialisierung.

Zu den Funktionen, die im Zusammenhang mit der Partitionierung des SG-Speichers stehen, gehören:

- **Flash Programmierung:** Das Aufspielen von Software-Updates oder Konfigurationsänderungen auf das Steuergerät.
  
- **Fehlerspeicher Handling:** Die Verwaltung von Fehlercodes und Diagnoseinformationen im Steuergerät.
  
- **Kodieren:** Das Anpassen von Einstellungen und Konfigurationen im Steuergerät.
  
- **Daten auslesen:** Das Extrahieren von Informationen aus dem Steuergerät für Diagnose- oder Analysezwecke.

Diese Strukturierung des Speichers im Steuergerät gewährleistet eine effiziente Verwaltung von Daten und Softwarekomponenten, die für den reibungslosen Betrieb und die Diagnosefähigkeit des Fahrzeugs entscheidend sind.

<img src="image\103_Elektronik_im_Fahrzeug\1710010294539.png" alt="drawing" width="400"/>

## Fehlerfälle und Fehlererkennung

Die Diagnose in einem Steuergerät ist ein entscheidender Aspekt in der modernen Fahrzeugtechnik. Sie umfasst die Überwachung und Analyse von Sensoren, Aktuatoren, Bussen sowie Kontroll- und Diagnosefunktionen. In diesem Dokument werden die verschiedenen Aspekte der Diagnose in einem Steuergerät detailliert erläutert.

### Sensoren und Aktuatoren

Sensoren erfassen physikalische Größen wie Temperatur, Druck oder Drehzahl, während Aktuatoren für die Steuerung von Komponenten wie Ventilen oder Motoren verantwortlich sind. Die Diagnose dieser Komponenten ermöglicht es, Fehler frühzeitig zu erkennen und zu beheben.

### Busse (Diagnose, Kommunikation, Engineering)

Die Kommunikation zwischen Steuergeräten erfolgt über Bussysteme. Diagnose-Busse ermöglichen den Austausch von Diagnosedaten und -befehlen zwischen verschiedenen Komponenten im Fahrzeug. Ein effizientes Engineering dieser Busse ist entscheidend für eine reibungslose Diagnose.

### Kontroll- und Diagnosefunktionen

Kontrollfunktionen überwachen den Zustand des Fahrzeugs und greifen bei Bedarf ein. Diagnosefunktionen dienen der Fehlererkennung und -analyse, um eine schnelle Reparatur zu ermöglichen.

### Diagnosekommunikation

Die Diagnosekommunikation umfasst verschiedene Dienste wie Timings für Diagnosefunktionen, Parameter- und Variablenhandling sowie Monitoring von externen und internen Informationen. Sicherheitsaspekte spielen hierbei eine wichtige Rolle.

Die Diagnose in einem Steuergerät ist ein komplexer Prozess, der eine präzise Überwachung und Analyse verschiedener Komponenten erfordert. Durch effektive Diagnosemechanismen können potenzielle Probleme frühzeitig erkannt und behoben werden, was die Zuverlässigkeit und Sicherheit von Fahrzeugen erhöht.

<img src="image/103_Elektronik_im_Fahrzeug/1710010840702.png" alt="drawing" width="300"/>


Die Fehlererkennungsfunktionen im Steuergerät spielen eine entscheidende Rolle bei der Überwachung und Diagnose von potenziellen Problemen im Fahrzeug. Diese Funktionen umfassen die Erkennung von Fehlern in verschiedenen Bereichen, darunter Eingangssignale von Sensoren, die ECU selbst sowie Aktuatoren. Im Falle eines Fehlers, Ausfalls oder einer Störung wird eine entsprechende Fehlerbehandlung eingeleitet, die oft mit einem Eintrag in den Fehlerspeicher verbunden ist.

### Überwachungsfunktionen
Die Überwachungsfunktionen im Steuergerät erkennen verschiedene Arten von Fehlern:
1. Fehler der Eingangssignale (Sensoren): Abweichungen oder Ausfälle in den Signalen, die von Sensoren erfasst werden.
2. Fehler in der ECU: Probleme in den Ein-/Ausgabekreisen, dem Prozessor, dem Speicher sowie den Steuerungs- und Regelfunktionen der ECU.
3. Fehler an den Stellgliedern (Aktuatoren): Probleme bei der Steuerung und Aktivierung von Aktuatoren im Fahrzeug.

### On-Board-Diagnosefunktionen
Die On-Board-Diagnosefunktionen im Steuergerät ermöglichen eine kontinuierliche Überwachung und Analyse des Systems. Sie dienen dazu, Fehler frühzeitig zu erkennen und entsprechende Maßnahmen einzuleiten, um die Sicherheit und Leistungsfähigkeit des Fahrzeugs zu gewährleisten.

Insgesamt sind die Fehlererkennungsfunktionen im Steuergerät ein wichtiger Bestandteil des Diagnosesystems eines Fahrzeugs, da sie dazu beitragen, potenzielle Probleme zu identifizieren und eine effektive Fehlerbehandlung zu ermöglichen. Durch die Integration dieser Funktionen können Fahrzeuge zuverlässiger betrieben und Wartungsarbeiten gezielter durchgeführt werden.

## Aufbau der Fehlerdiagnose eines Steuergeräts


Die Fehlerdiagnose eines Steuergerätes ist ein komplexer Prozess, der die Überwachung und Analyse von potenziellen Fehlern im Fahrzeug umfasst. Der Aufbau der Fehlerdiagnose beinhaltet verschiedene Komponenten, die zusammenarbeiten, um eine effektive Fehlererkennung und -behandlung zu gewährleisten.

<img src="image/103_Elektronik_im_Fahrzeug/1710011428675.png" alt="drawing" width="400"/>

### Fehlerspeicher-Management
Das Fehlerspeicher-Management ist ein zentraler Bestandteil der Fehlerdiagnose. Hier werden erkannte Fehler gespeichert und verwaltet. Ein EEPROM (Electrically Erasable Programmable Read-Only Memory) dient zur langfristigen Speicherung von Fehlercodes wie DTC P047128 oder DTC U010E00.

### Entprellung und Erkennung
Die Entprellungsfunktion sorgt für die Filterung von kurzzeitigen Fehlern oder Störungen, um falsche Diagnosen zu vermeiden. Die Erkennung von Fehlern erfolgt anhand von definierten Kriterien und Algorithmen, um relevante Probleme zu identifizieren.

### Umgebungsdaten
Zu den Umgebungsdaten gehören Informationen wie DTC Status Byte, DTCs und deren Umgebungsdaten, DTC Cycle Counters, DTC Fault Detection Counter sowie DTC Aging Counter. Diese Daten dienen zur genaueren Analyse und Klassifizierung von erkannten Fehlern.

### Tester-Funktionen
Ein Tester ermöglicht das Lesen und Löschen von Fehlern im Steuergerät. Durch die Abspeicherung von relevanten Informationen können Mechaniker oder Techniker gezielt auf Probleme reagieren und entsprechende Maßnahmen ergreifen. Im Notlaufmodus kann das Fahrzeug bei schwerwiegenden Fehlern eine reduzierte Leistungsfähigkeit aufrechterhalten.

Insgesamt ist der Aufbau der Fehlerdiagnose eines Steuergerätes ein wichtiger Bestandteil des Gesamtsystems eines Fahrzeugs. Durch die effektive Überwachung, Speicherung und Analyse von Fehlern können potenzielle Probleme frühzeitig erkannt und behoben werden, was die Sicherheit und Zuverlässigkeit des Fahrzeugs gewährleistet.


## Diagnostis Trouble Code

DTC steht für Diagnostic Trouble Code und wird im Zusammenhang mit der Fehlerdiagnose in der Automobilindustrie verwendet. Diese Codes werden generiert, wenn das Fahrzeug-Onboard-Diagnosesystem ein Problem erkennt und dienen dazu, den Fahrzeughalter über spezifische Probleme zu informieren. DTC-Codes bestehen aus einer Reihe von Buchstaben und Zahlen, die verschiedene Probleme im Fahrzeug repräsentieren. Die Codes werden vom OBD-System des Fahrzeugs generiert und über ein Warnlicht oder einen anderen Indikator im Armaturenbrett angezeigt. Die Codes helfen dabei, den genauen Ort des Problems zu lokalisieren und Maßnahmen zur Behebung zu ergreifen. Es gibt verschiedene Standards für DTC-Codes, darunter OBD-II für leichte und mittelschwere Fahrzeuge sowie J1939 für schwere Fahrzeuge. Wenn ein Fahrzeug einen Fehlercode anzeigt, ist es wichtig, diesen zu interpretieren, um die Ursache des Problems zu verstehen und entsprechend zu handeln.

**Lebenszyklus eines Fehlereintrages:**

<img src="image/103_Elektronik_im_Fahrzeug/1710011797199.png" alt="drawing" width="600"/>

**Standard-Fehlercodes und -Fehlertexte:**

<img src="image/103_Elektronik_im_Fahrzeug/1710011883900.png" alt="drawing" width="600"/>

