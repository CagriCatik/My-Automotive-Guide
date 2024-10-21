# Unified Diagnostic Services

## Einführung

### UDS – Motivation und Umsetzung

**Ziele:**

- **Mehr Fehlerfreiheit:** Durch Standardisierung der heterogenen Protokolllandschaft und breiten Einsatz des Standards, wird angestrebt, eine höhere Fehlerfreiheit zu erlangen.
- **Wiederverwendbare Softwarestände:** Ziel ist es, durch den Einsatz von UDS wieder verwendbare und ausgereifte Softwarestände zu erzielen.
- **Kostenreduktion:** Die Implementierung von Standardlösungen soll zu einer Kostenreduktion bei der Diagnosekommunikation führen, indem Off-the-Shelf-Komponenten genutzt werden.

**Umsetzung:**

- **Zusammenführung von KWP2000 und Diagnostics on CAN:** UDS vereint die Vorteile beider Protokolle für eine effiziente Diagnosekommunikation.
- **Übersichtlichere Gestaltung der Diagnosedienste:** Durch eine klar strukturierte Darstellung der Diagnosedienste wird die Anwendung und Interpretation erleichtert.
- **Höhere Kompatibilität von Steuergeräten:** Ein vereinheitlichtes Session-Handling ermöglicht eine bessere Kompatibilität verschiedener Steuergeräte mit Testapplikationen.
- **Integration verschiedener Kommunikationsprinzipien:** UDS integriert erstmals synchrones, ereignisgesteuertes und periodisches Kommunikationsverhalten in einem internationalen Standard.
- **Unterstützung moderner Speicherarchitekturen:** UDS bietet Unterstützung für moderne Speicherarchitekturen, einschließlich variabler Speicheradressierung und Adressierungen über 32 Bit.

UDS ist ein bedeutender Schritt in Richtung Standardisierung und Effizienzsteigerung im Bereich der Diagnosekommunikation, der sowohl die Fehlerfreiheit verbessert als auch Kosten reduziert. Durch die genannten Ziele und Umsetzungsmaßnahmen wird UDS zu einem wichtigen Werkzeug für die Automobilindustrie.

Die gespeicherten Daten, wie Fehlereinträge oder Identifikationen, auslesen, aktuelle Daten wie Motordrehzahl anzeigen, große Datenmengen transportieren und direkte Kontrolle über Ein-/Ausgänge von Steuergeräten ausüben sind einige Funktionalitäten von Diagnosediensten. Diese Dienste umfassen auch das Ausführen spezifischer Routinen wie Selbstkalibrierung und die Absicherung bestimmter Dienste. Die Motivation hinter diesen Diagnosediensten liegt in der Verbesserung der Effizienz und Genauigkeit bei der Diagnose von ECU, Sensoren, Aktuatoren, Bus-Systemen, Flash-Speichern und anderen Komponenten im Fahrzeug.

Die Funktionalitäten von UDS dienen dazu, die Diagnosekommunikation zu optimieren und eine präzise Steuerung sowie Überwachung verschiedener Fahrzeugkomponenten zu ermöglichen. Durch die Implementierung dieser Dienste wird eine effiziente Fehlerdiagnose und -behebung in Fahrzeugen unterstützt, was zu einer verbesserten Leistung und Zuverlässigkeit führt. Die Unified Diagnostic Services (UDS) protokolliert die Dienste in funktionale Einheiten, die jeweils eine Gruppe von eng verwandten oder ergänzenden Diagnosediensten umfassen. Diese funktionalen Einheiten umfassen:

- **Diagnostic and Communication Management**
- **Data Transmission**
- **Stored Data Transmission**
- **Input Output Control**
- **Remote Activation of Routine**
- **Upload Download**

Diese funktionalen Einheiten umfassen verschiedene Diagnosedienstfunktionalitäten im Zusammenhang mit ECU, Sensoren, Aktuatoren, Bussystemen, Flash-Speichern, ASW (Anwendungssoftware) und BSW (Grundsoftware). UDS zielt darauf ab, die diagnostische Kommunikation in der Automobilindustrie zu standardisieren und Dienste wie Fehlerabfrage, Firmware-Updates, Hardwareinteraktion auf niedriger Ebene und Selbsttestoperationen bereitzustellen.

Das UDS-Protokoll wird von der Internationalen Organisation für Normung (ISO) in ISO 14229 definiert. Es wird für die diagnostische Kommunikation in elektronischen Steuergeräten (ECUs) verwendet und von Tier-1-Lieferanten der Originalhersteller (OEMs) in neue ECUs integriert. UDS ermöglicht Diagnosen, Firmware-Updates, Routinetests und mehr über verschiedene ECUs in Fahrzeugen. Das Protokoll arbeitet auf der Anwendungsschicht des OSI-Modells und erleichtert standardisierte Diagnosen über verschiedene Hersteller und Kommunikationsprotokolle wie CAN, KWP2000, Ethernet, LIN usw.

### **Upload Download**

Die funktionale Einheit "Upload Download" im Rahmen des Unified Diagnostic Services (UDS) Protokolls dient dazu, größere Inhalte von ECU-Speicherbereichen zwischen dem Tester und der ECU zu übertragen. Diese Dienste ermöglichen den bidirektionalen Datenaustausch, bei dem Daten vom Tester zur ECU gesendet und umgekehrt von der ECU zum Tester übertragen werden.

In der Automobilindustrie spielt die Upload-Download-Funktionalität eine wichtige Rolle bei der Diagnose, Programmierung und Konfiguration von Steuergeräten. Durch den Upload können Daten wie Fehlercodes, Konfigurationsparameter oder Firmware-Updates von der ECU zum Tester übertragen werden. Beim Download können neue Softwareversionen, Konfigurationen oder andere Daten vom Tester zur ECU gesendet werden.

Diese Funktionalität ermöglicht es, effizient und sicher größere Datenmengen zwischen dem Diagnosetester und der Steuergeräteeinheit auszutauschen. Dadurch wird eine präzise Diagnose, Programmierung und Konfiguration von Fahrzeug-ECUs erleichtert, was zu einer verbesserten Leistung und Zuverlässigkeit der Fahrzeuge beiträgt. Die Dienste im Rahmen der Upload-Download-Funktionalität, die durch die Service-IDs 0x34 bis 0x37 definiert sind, spielen eine entscheidende Rolle im Unified Diagnostic Services (UDS) Protokoll. Hier sind die spezifischen Dienste und ihre Funktionen:

- **0x34 RequestDownload:** Der RequestDownload-Dienst wird vom Tester verwendet, um eine Datenübertragung vom Tester zur ECU (Download) zu initiieren. Die ECU antwortet mit der erlaubten Blockgröße für den Transfer.
- **0x35 RequestUpload:** Der RequestUpload-Dienst wird vom Tester verwendet, um eine Datenübertragung von der ECU zum Tester (Upload) zu initiieren. Der Tester gibt die erlaubte Blockgröße für den Transfer zurück.
- **0x36 TransferData:** Der TransferData-Dienst wird vom Tester verwendet, um Daten entweder vom Tester zur ECU (Download) oder von der ECU zum Tester (Upload) zu übertragen.
- **0x37 RequestTransferExit:** Dieser Dienst wird vom Tester verwendet, um eine Datenübertragung zwischen Tester und ECU (Upload oder Download) zu beenden.

Diese Dienste ermöglichen es, effizient und sicher Daten zwischen dem Diagnosetester und der Steuergeräteeinheit auszutauschen. Durch die klare Definition und Implementierung dieser Dienste gemäß dem UDS-Protokoll wird eine zuverlässige und standardisierte Kommunikation für Uploads und Downloads in der Fahrzeugdiagnose gewährleistet.

### **Input/Output Control**

Die funktionale Einheit "Input Output Control" im Unified Diagnostic Services (UDS) Protokoll ermöglicht es dem Tester, Werte für Eingangssignale zu substituieren, interne ECU-Funktionen zu steuern und die Kontrolle über den Wert für einen Ausgang (Aktuator) eines elektronischen Systems zu erzwingen. Diese Funktionalität spielt eine wichtige Rolle bei der Diagnose, Konfiguration und Steuerung von Fahrzeug-ECUs.

Der Input Output Control-Dienst erlaubt es einem externen System, über die Diagnoseschnittstelle auf interne/externe Signale zuzugreifen und diese zu beeinflussen. Ein 2-Byte dataIdentifier-Parameter identifiziert lokale ECU-Eingangssignale, interne Parameter und/oder Ausgangssignale. Durch die Angabe eines sogenannten Optionsbytes können zusätzliche Bedingungen für eine Anfrage spezifiziert werden:

- **ReturnControlToECU (0x00):** Das Gerät muss die Kontrolle über die genannten Signale zurückbekommen.
- **ResetToDefault (0x01):** Der Tester fordert eine Rücksetzung der Signale auf den systemweiten Standardwert an.
- **FreezeCurrentState (0x02):** Das Gerät soll den aktuellen Signalwert einfrieren.
- **ShortTermAdjustment (0x03):** Das Gerät soll den bereitgestellten Wert für das Signal verwenden.

Beispiel:

- 0x2F,12,34,03,01 Aktiviere_Kraftstoffpumpe
- 0x2F,12,34,00 Rückgabe_Kontrolle_Kraftstoffpumpe

Durch die Input Output Control-Funktionalität können Tester gezielt auf Eingangs- und Ausgangssignale zugreifen und diese steuern, was eine präzise Diagnose und Konfiguration von Fahrzeugkomponenten ermöglicht.

### **Stored Data Transmission**

Die gespeicherte Datenübertragung im Unified Diagnostic Services (UDS) Protokoll ermöglicht es dem Tester, Daten von der ECU abzurufen, insbesondere Fehlerdaten und Umgebungsdaten. Diese Funktion ist entscheidend für die Diagnose und Analyse von Fahrzeug-ECUs.

Durch die Stored Data Transmission können Tester beispielsweise von einer oder mehreren ECUs folgende Informationen abrufen:

- Die Anzahl der DTCs (Diagnostic Trouble Codes), die einem definierten DTC-Statusmasken entsprechen (Status ausstehend, bestätigt, etc.).
- Die Liste aller von der ECU unterstützten DTCs.
- Die Liste aller DTCs, die einer definierten DTC-Statusmaske entsprechen.
- DTC-Snapshot-Daten (auch als Freeze Frames bezeichnet), die mit einem bestimmten DTC verbunden sind.

Diese Dienstleistung verwendet eine Unterfunktion, um zu bestimmen, welche Art von Diagnoseinformationen der Tester anfordert. Ein Beispiel für eine solche Dienstleistung ist der ReadDTCInformation (0x19) Service.

Die gespeicherte Datenübertragung spielt eine wichtige Rolle bei der Fehlerdiagnose, Wartung und Konfiguration von Fahrzeug-ECUs, indem sie den Testern ermöglicht, auf wichtige Diagnosedaten zuzugreifen und diese zu analysieren.

| Sub functions | Description                                        |
| ------------- | -------------------------------------------------- |
| 0x0F          | reportMirrorMemoryDTCByStatusMask                  |
| 0x10          | reportMirrorMemoryDTCExtendedDataRecordByDTCNumber |
| 0x11          | reportNumberOfMirrorMemoryDTCByStatusMask          |
| 0x12          | reportNumberOfEmissionsRelatedOBDDTCByStatusMask   |
| 0x13          | reportEmissionsRelatedOBDDTCByStatusMask           |
| 0x14          | reportDTCFaultDetectionCounter                     |
| 0x15          | reportDTCWithPermanentStatus                       |
| 0x16          | reportDTCExtDataRecordByRecordNumber               |
| 0x17          | reportUserDefMemoryDTCByStatusMask                 |
| 0x18          | reportUserDefMemoryDTCSnapshotRecordByDTCNumber    |
| 0x19          | reportUserDefMemoryDTCExtDataRecordByDTCNumber     |
| 0x42          | reportWWHOBDDTCByMaskRecord                        |
| 0x55          | reportWWHOBDDTCWithPermanentStatus                 |

ReadDTCInformation (0x19) Service:

- 0x01: reportNumberOfDTCByStatusMask
- 0x02: reportDTCByStatusMask
- 0x03: reportDTCSnapshotIdentification
- 0x04: reportDTCSnapshotRecordByDTCNumber
- 0x05: reportDTCStoredDataByRecordNumber
- 0x06: reportDTCExtendedDataRecordByDTCNumber
- 0x07: reportNumberOfDTCBySeverityMaskRecord
- 0x08: reportDTCBySeverityMaskRecord
- 0x09: reportSeverityInformationOfDTC
- 0x0A: reportSupportedDTC
- 0x0B: reportFirstTestFailedDTC
- 0x0C: reportFirstConfirmedDTC
- 0x0D: reportMostRecentTestFailedDTC
- 0x0E: reportMostRecentConfirmedDTC

These are the sub functions and services related to Unified Diagnostic Services (UDS) as per the provided information.

| Bit # | Hex  | State                              | Description                                                |
| ----- | ---- | ---------------------------------- | ---------------------------------------------------------- |
| 0     | 0x01 | testFailed                         | DTC failed at the time of the request                      |
| 1     | 0x02 | testFailedThisOperationCycle       | DTC failed on the current operation cycle                  |
| 2     | 0x04 | pendingDTC                         | DTC failed on the current or previous operation cycle      |
| 3     | 0x08 | confirmedDTC                       | DTC is confirmed at the time of the request                |
| 4     | 0x10 | testNotCompletedSinceLastClear     | DTC test not completed since the last code clear           |
| 5     | 0x20 | testFailedSinceLastClear           | DTC test failed at least once since last code clear        |
| 6     | 0x40 | testNotCompletedThisOperationCycle | DTC test not completed this operation cycle                |
| 7     | 0x80 | warningIndicatorRequested          | Server is requesting warning indicator to be active MIL on |

These tables provide a breakdown of sub functions and functional unit details related to diagnostic services in automotive systems.

## Diagnosebotschaften

## Diagnosesitzungen

## Response Handling

## DTC Handling

## Beispiel einer Diagnosesitzung

<img src="image/106_UnifiedDiagnosticServices/1710056494440.png" alt="drawing" width="400"/>

### Steuergerät einschalten

Um ein Steuergerät einzuschalten, folgen Sie den unten aufgeführten Schritten:

1. Zuerst wird das Steuergerät eingeschaltet bzw. die Zündung des Fahrzeugs aktiviert.
2. Das Steuergerät initialisiert die Anwendungssoftware, auch ECU-Software genannt, und startet die Diagnosefunktion des Steuergeräts (den Diagnose-Server).
3. Der Diagnose-Server befindet sich nun in der Default-Session.

Um das Steuergerät einzuschalten, führen Sie die folgenden Schritte aus:

- Identifikation lesen
- In den Programmiermodus umschalten
- Security Access gewähren
- Variantenkennung schreiben
- Programmierdatum schreiben
- Reset des Steuergerätes

Durch das korrekte Durchführen dieser Schritte wird das Steuergerät erfolgreich eingeschaltet und für weitere Diagnose- oder Programmieraufgaben bereit gemacht. Es ist wichtig, diese Schritte sorgfältig auszuführen, um eine reibungslose Funktion des Steuergeräts sicherzustellen.

### Identifikation lesen

Um die Identifikation eines Steuergeräts zu lesen, folgen Sie den nachstehenden Schritten:

1. Bevor die Programmierung der Seriennummer beginnt, muss der Typ des Steuergeräts überprüft werden. Dazu wird mithilfe des Diagnosedienstes readDataByIdentifier ($22) der Data-Identifier $F192 - systemSupplierECUHardwareNumber aus dem Steuergerät ausgelesen.
2. Die Antwort des Steuergeräts enthält neben der Spiegelung des Data-Identifiers ($F192) auch den Wert des Steuergerätetyps als ASCII-String, z.B. "3124AB", der dann mit einem Vergleichsmuster im Testwerkzeug abgeglichen wird.
3. Wenn die Überprüfung erfolgreich ist, d.h. der Typ des Steuergeräts dem erwarteten Typ entspricht, wird die Session für die Programmierung eingeleitet.

Durch das korrekte Ausführen dieser Schritte können Sie die Identifikation eines Steuergeräts erfolgreich lesen und sicherstellen, dass das richtige Steuergerät für die Programmierung verwendet wird. Es ist wichtig, diese Schritte präzise durchzuführen, um Fehler zu vermeiden und eine reibungslose Programmierung zu gewährleisten.

### In Programmiermode umschalten

Um in den Programmiermodus umzuschalten, befolgen Sie die folgenden Schritte gemäß den Informationen von Softing Automotive:

1. Nach erfolgreicher Prüfung des Steuergerätetyps wird das Steuergerät in die Programmiersitzung versetzt.
2. Der Diagnosedienst DiagnosticSessionControl ($10) mit dem Parameter programmingSession ($02) wird an das Steuergerät gesendet.
3. Das Erreichen der gewünschten Session wird durch die Spiegelung des Session-Typs vom Steuergerät bestätigt.

Um den Programmiermodus erfolgreich zu aktivieren, ist es entscheidend, die oben genannten Schritte sorgfältig auszuführen. Durch das korrekte Umschalten in den Programmiermodus können Sie sicherstellen, dass das Steuergerät bereit ist, für die Programmierung von Daten oder Softwareupdates. Beachten Sie dabei die Anweisungen und Bestätigungen des Steuergeräts, um einen reibungslosen Übergang in den Programmiermodus zu gewährleisten.

### Security Access

Um den Security Access für ein Steuergerät durchzuführen, befolgen Sie die nachstehenden Schritte gemäß den Informationen von Softing Automotive:

1. Zur Programmierung des Steuergeräts auf einer höheren Sicherheitsstufe als der Default-Session wird ein Security Access benötigt.
2. Zuerst wird ein Seed vom Steuergerät per Diagnoseanfrage angefordert. Das Steuergerät sendet daraufhin den Seed in der Diagnoseantwort.
3. Der Seed dient zur Initialisierung einer Berechnung für einen Schlüssel (Key), der dann mit einem zweiten Diagnosedienst an das Steuergerät gesendet werden muss.
4. Wenn die Berechnung des Keys korrekt erfolgt ist, sendet das Steuergerät eine positive Antwort mit der Bedeutung "security access allowed".
5. Nach erfolgreichem Security Access können nun die Funktionen zum Programmieren und Abfragen geschützter Daten vom Testwerkzeug initiiert werden.

Es ist entscheidend, diese Schritte genau zu befolgen, um einen sicheren Zugriff auf das Steuergerät zu gewährleisten und die Programmierung oder Abfrage von Daten erfolgreich durchzuführen. Beachten Sie dabei die Sicherheitsprotokolle und Bestätigungen des Steuergeräts, um eine reibungslose Durchführung des Security Access zu gewährleisten.

### Variantenkennung schreiben

Um die Variantenkennung in ein Steuergerät zu schreiben, folgen Sie den nachstehenden Schritten gemäß den Informationen von Softing Automotive:

1. Das Byte-Feld für die Variantenkennung, beispielsweise 16 Bytes lang, in dem Ausstattungsmerkmale wie Klimaanlage, Auslieferungsland, Schiebedach usw. bitweise kodiert sind, wird in das Steuergerät geschrieben.
2. Der Diagnosedienst WriteMemoryByAddress ($3D) schreibt an die Adresse $00FF0000 mit einer Länge von 16 Bytes Daten ($0102030405060708090A0B0C0D0E0FFF).
3. Der resultierende addressAndLengthFormatIdentifier ist $14, da die Länge der Daten in einem Byte und die Adresse in 4 Bytes übertragen wird.

Durch das korrekte Ausführen dieser Schritte können Sie die Variantenkennung erfolgreich in das Steuergerät schreiben und somit spezifische Ausstattungsmerkmale oder Konfigurationen festlegen. Es ist wichtig, die richtigen Daten gemäß den Anforderungen des Steuergeräts zu übertragen, um eine korrekte und zuverlässige Konfiguration sicherzustellen. Beachten Sie dabei die Adressen und Längen der Daten sowie eventuelle Formatierungsanforderungen für eine erfolgreiche Übertragung der Variantenkennung.

### Programmierdatum schreiben

Um das Programmierdatum in ein Steuergerät zu schreiben, befolgen Sie die nachstehenden Schritte gemäß den Informationen von Softing Automotive:

1. Abschließend soll das Kalenderdatum der Programmierung in das Steuergerät geschrieben werden.
2. Der Diagnosedienst WriteDataByIdentifier ($2E) schreibt den Data-Identifier programmingDate in das Steuergerät.
3. Das transportierte Datum befindet sich in den Bytes 4 bis 11 und enthält das Datum 20020421, also den 21. April 2002.
4. Nachdem das Datum erfolgreich übertragen wurde, wird der Programmierprozess abgeschlossen, da das Schreiben mit dem Wiederholen des Data-Identifiers in der Antwort positiv bestätigt wurde.

Durch das korrekte Ausführen dieser Schritte können Sie das Programmierdatum erfolgreich in das Steuergerät schreiben und somit das Datum der Programmierung festlegen. Es ist wichtig, die Daten gemäß den vorgegebenen Formaten und Anforderungen des Steuergeräts zu übertragen, um eine korrekte Speicherung des Programmierdatums sicherzustellen. Beachten Sie dabei die genauen Positionen der Daten im Byte-Feld und eventuelle Formatierungsrichtlinien für eine erfolgreiche Übertragung des Programmierdatums.

### Reset des Steuergeräts

Um das Steuergerät zurückzusetzen, befolgen Sie die nachstehenden Schritte gemäß den Informationen von Softing Automotive:

1. Der Diagnosedienst EcuReset ($11) wird mit dem Parameter resetType ($81) an das Steuergerät gesendet, um die Programming-Session zu beenden.
2. Das SuppressPositiveResponseIndicationBit ist gesetzt, daher wird keine Antwort des Steuergeräts erwartet oder gesendet.
3. Nach dem Reset sollte sich das Steuergerät wieder in der Anwendungssoftware und somit in der Default-Session befinden, ähnlich wie nach einem Power-Down/Up-Zyklus.

Durch das korrekte Durchführen dieser Schritte können Sie das Steuergerät erfolgreich zurücksetzen und es in einen Zustand versetzen, als ob es neu gestartet worden wäre. Es ist wichtig, die Reset-Anweisungen genau zu befolgen, um sicherzustellen, dass das Steuergerät ordnungsgemäß zurückgesetzt wird und wieder betriebsbereit ist. Beachten Sie dabei die spezifischen Parameter und Protokolle für den Reset-Vorgang, um eine reibungslose Durchführung zu gewährleisten.

## Diagnosediensttypen

### Einfache Diagnosedienste

### Zyklische Diagnosedienste

### Ereignisgesteuerte Diagnosedienste

## Normierte Diagnosedienste

| SID | Def. | RoE                                                               | Sub | Functional Classes       | Name of Diagnostic Service |
| --- | ---- | ----------------------------------------------------------------- | --- | ------------------------ | -------------------------- |
| $10 |      | Ja                                                                |     | DiagnosticSessionControl |                            |
| $11 |      | Ja                                                                |     | ECUReset                 |                            |
| $27 |      | Ja                                                                |     | SecurityAccess           |                            |
| $28 |      | Ja                                                                |     | CommunicationControl     |                            |
| $3E |      | Ja                                                                |     | TesterPresent            |                            |
| $83 |      | Ja                                                                |     | AccessTimingParameter    |                            |
| $84 |      |                                                                   |     |                          |                            |
| $85 |      | Ja                                                                |     | ControlDTCSetting        |                            |
| $86 |      | Ja*   ResponseOnEventNeu UDS    LinkControl                       |     |                          |                            |
| $22 |      | Ja*   ReadDataByIdentifier    ReadMemoryByAddress                 |     |                          |                            |
| $23 |      | Ja*   ReadMemoryByAddress     ReadScalingDataByIdentifier Neu UDS |     |                          |                            |
| $2A |      |                                                                   |     |                          |                            |
| $2C |      |                                                                   |     |                          |                            |
| $2E |      |                                                                   |     |                          |                            |
| $3D |      |                                                                   |     |                          |                            |
| $12 |      |                                                                   |     |                          |                            |
| $2F |      |                                                                   |     |                          |                            |
| $31 |      |                                                                   |     |                          |                            |
| $34 |      |                                                                   |     |                          |                            |
| $35 |      |                                                                   |     |                          |                            |
| $36 |      |                                                                   |     |                          |                            |
| $37 |      |                                                                   |     |                          |                            |

- **Def:** Dienst ist direkt nach Power-On verfügbar. Er ist erlaubt in der Default-Session
- **RoE:** Dienst kann mit Request on Event verwendet werden. Er kann als “Ereignisgesteuerter Dienst” verwendet werden
- **Sub.:** Dienst unterstützt Sub-Funktion(en) und damit ist es auch möglich die poitive Antwort zu unterdrücken
