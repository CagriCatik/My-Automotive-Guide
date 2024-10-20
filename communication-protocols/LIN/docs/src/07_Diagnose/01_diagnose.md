# Diagnose

In diesem Tutorial wird das Local Interconnect Network (LIN) und speziell das Diagnoseprotokoll im Automotivebereich detailliert erklärt. Wir werden die Struktur der Nachrichten, die verschiedenen Typen von Datenübertragungen und die Funktionsweise der Diagnosedienste erläutern. Dieses Tutorial richtet sich an Fachleute und Ingenieure, die im Bereich der Fahrzeugkommunikation tätig sind.

## 1. Node Address for Diagnostics (NAD)

Das erste Byte jeder Frame Response im LIN-Diagnoseprotokoll ist die formale Knotenadresse (NAD). Diese Adresse identifiziert eindeutig den zu konfigurierenden oder zu diagnostizierenden Slave. Unabhängig davon, ob es sich um eine Master- oder Slave-Frame-Response handelt, steht die NAD immer an erster Stelle. Dies ermöglicht eine klare Zuordnung der Nachricht zu einem spezifischen Knoten im Netzwerk.

## 2. Protocol Control Information (PCI)

Das zweite Byte der Frame Response, bekannt als Protocol Control Information (PCI), gibt Aufschluss über den Transfermodus der Nachricht. Das ISO-Transportprotokoll definiert hierbei zwei Hauptarten der Datenübertragung: den unsegmentierten und den segmentierten Transfer.

- **Unsegmentierter Transfer**: Bei einem unsegmentierten Transfer erfolgt die Datenübertragung in einem einzigen Frame. Ein Beispiel hierfür sind Diagnose-Requests zur Konfiguration eines Knotens, die immer unsegmentiert übertragen werden. Der Master sendet einen Request Frame und der Slave antwortet mit einem Response Frame.
  
- **Segmentierter Transfer**: Wenn die zu übertragenden Diagnosedaten mehr als acht Bytes umfassen, wird der segmentierte Transfer verwendet. Dabei werden die Daten in mehrere Frames aufgeteilt:
  - **First Frame (FF)**: Der erste Frame einer Segmentserie, der die Gesamtgröße des Datenblocks enthält.
  - **Consecutive Frames (CF)**: Die folgenden Frames, die die fortlaufenden Datenbytes enthalten.

## 3. Frame-Typen

Im LIN-Diagnoseprotokoll gibt es verschiedene Typen von Frames, die je nach Anforderung der Datenübertragung eingesetzt werden:

- **Single Frame (SF)**: Für unsegmentierte Transfers, bei denen die Daten in einem einzigen Frame übertragen werden.
- **First Frame (FF)**: Der erste Frame in einem segmentierten Transfer, der die Größe des gesamten Datenblocks angibt.
- **Consecutive Frames (CF)**: Folgeframes in einem segmentierten Transfer, die die restlichen Datenbytes enthalten.

Diese Struktur ermöglicht es, auch größere Datenmengen effizient über das LIN-Netzwerk zu übertragen.

## 4. Service Identifier (SID)

Der Service Identifier (SID) ist ein entscheidendes Element in Diagnose-Requests. Er befindet sich im dritten Byte des Diagnose-Requests und gibt an, welcher Diagnosedienst vom Master ausgeführt werden soll. Die verschiedenen Diagnosedienste sind in der Spezifikation „Node Configuration and Identification“ definiert.

Im Response Frame des Slaves wird der SID durch den Response Service Identifier (RSID) ersetzt. Dieser gibt Auskunft darüber, welcher Dienst im Slave ausgeführt wurde und liefert gegebenenfalls die angeforderten Daten zurück.

# Zusammenfassung

Das LIN-Diagnoseprotokoll ist ein essenzieller Bestandteil der Fahrzeugkommunikation. Durch die strukturierte Verwendung von NAD, PCI, Frame-Typen und SID wird eine klare und effiziente Übertragung von Diagnoseinformationen ermöglicht. Ingenieure und Fachleute im Automotivebereich müssen die Details dieser Protokollstruktur verstehen, um zuverlässige und fehlerfreie Kommunikationssysteme zu entwickeln und zu warten. 

Die genaue Kenntnis und Anwendung dieser Protokollelemente gewährleistet die erfolgreiche Implementierung von Diagnosesystemen in modernen Fahrzeugen, was zur Verbesserung der Wartung und Fehlersuche beiträgt.