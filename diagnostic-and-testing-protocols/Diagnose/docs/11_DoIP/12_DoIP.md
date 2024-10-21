# DoIP

## Einführung

Diese Dokumentation bietet eine tiefgreifende Analyse des Diagnoseprotokolls DoIP (Diagnostics over Internet Protocol) anhand des bereitgestellten Texts. DoIP hat sich als eine zukunftsweisende Technologie für die Fahrzeugdiagnose etabliert und ermöglicht die Kommunikation zwischen Diagnosegeräten und Steuergeräten (ECUs) über ein Ethernet-Netzwerk.

### Funktionsweise

DoIP basiert auf den folgenden Protokollschichten:

1. Ethernet-PHY: Bietet die physikalische Verbindungsschicht für die Datenübertragung.
2. Ethernet-MAC+VLAN: Ermöglicht die Adressierung und Segmentierung des Datenverkehrs.
3. IPv4/IPv6: Definiert die IP-Adressierung und das Routing für die Datenübertragung.
4. TCP/UDP: Bietet zuverlässige (TCP) und verbindungslose (UDP) Datenübertragung.
5. DoIP: Spezifiziert die Anwendungsschichtprotokolle für die Fahrzeugdiagnose.

### Anwendungsbereiche

DoIP findet in folgenden Bereichen Anwendung:

* Diagnose über Ethernet und IP: Ermöglicht die Diagnose von Fahrzeugen über ein Ethernet-Netzwerk, was eine flexiblere und kosteneffizientere Lösung im Vergleich zu traditionellen Diagnosemethoden bietet.
* Flash-Programmierung: Ermöglicht die Aktualisierung der ECU-Software über das DoIP-Protokoll, wodurch die Aktualisierung von Fahrzeugsoftware effizienter und zeitsparender gestaltet wird.

### Protokolldetails

DoIP verwendet sowohl TCP- als auch UDP-Pakete für die Datenübertragung:

* UDP: Überträgt Statusinformationen, Konfigurationsdaten und andere nicht zeitkritische Daten.
* TCP: Ermöglicht die Übertragung kompletter Diagnosesitzungen, die umfangreiche Datenmengen umfassen können.

### Beschreibungsdateien

DoIP nutzt Beschreibungsdateien, um die verfügbaren Diagnosedienste zu definieren:

* CDD (Calibration Description Data): Beschreibt die Kalibrierdaten und -parameter der ECUs.
* ODX (Open Diagnostic Exchange Format): Bietet eine standardisierte Beschreibung der Diagnosedienste und -parameter.

### Eigenschaften von DoIP

Basierend auf dem aktuellen Stand der Technik lässt sich folgendes Urteil über DoIP fällen:

Vorteile:

* Flexibilität: DoIP ermöglicht die Diagnose und Flash-Programmierung von Fahrzeugen über ein standardisiertes Ethernet-Netzwerk.
* Kosteneffizienz: Die Verwendung von Standardkomponenten und die Reduzierung der Komplexität gegenüber traditionellen Diagnosesystemen senken die Kosten.
* Zukunftssicherheit: DoIP ist als Standard für die Fahrzeugdiagnose in modernen Fahrzeugen etabliert und bietet eine zukunftssichere Lösung.

Herausforderungen:

* Komplexität: Die Implementierung von DoIP erfordert ein gewisses Maß an technischem Know-how und Verständnis der Netzwerkprotokolle.
* Sicherheit: Die Gewährleistung der Datensicherheit und des Schutzes vor Cyberangriffen ist bei der Verwendung von IP-basierten Protokollen von entscheidender Bedeutung.

### DoIP - Fahrzeugdiagnose

DoIP (Diagnostics over Internet Protocol) ist ein innovatives Verfahren für die Fahrzeugdiagnose, das die Kommunikation zwischen Diagnosegeräten und Steuergeräten (ECUs) über ein Ethernet-Netzwerk ermöglicht. Im Gegensatz zu traditionellen diagnosebasierten Bussystemen wie CAN bietet DoIP zahlreiche Vorteile, darunter:

* Flexibilität: Ermöglicht die Diagnose und Programmierung von Fahrzeugen über ein standardisiertes Ethernet-Netzwerk.
* Geschwindigkeit: Ermöglicht eine schnellere Datenübertragung und damit kürzere Diagnosezeiten.
* Erweiterte Möglichkeiten: Unterstützt die Diagnose komplexerer Steuergeräte und Systeme.

DoIP ist jedoch kein eigenständiges Diagnoseprotokoll. Stattdessen definiert es den Transportmechanismus für die Diagnosedienste, die durch das standardisierte Unified Diagnostic Service (UDS) spezifiziert werden. UDS bietet eine einheitliche Schnittstelle für den Zugriff auf Diagnoseinformationen und die Steuerung von Steuergeräten.

### Rollen und Verantwortlichkeiten

#### Diagnosetester

Der Diagnosetester ist das zentrale Gerät zur Durchführung der Fahrzeugdiagnose. Er initiiert die Diagnosesitzung, sendet Diagnoseanfragen an die Steuergeräte und empfängt die entsprechenden Antworten. Um effektiv mit DoIP zu arbeiten, benötigt der Diagnosetester:

* Beschreibungsdateien (CDD, ODX): Diese Dateien enthalten detaillierte Informationen über die Steuergeräte im Fahrzeug, einschließlich der verfügbaren Diagnosedienste und -parameter.
* Logische Adresse: Dem Diagnosetester wird eine eindeutige logische Adresse zugewiesen, die ihn im Netzwerk identifiziert.
* Netzwerkprotokoll: Der Diagnosetester muss die DoIP-Protokollsuite unterstützen, einschließlich UDP/IP oder TCP/IP, um mit dem Diagnose-Gateway zu kommunizieren.

#### Diagnose-Gateway (Edge Node)

Das Diagnose-Gateway fungiert als Vermittler zwischen dem Diagnosetester und den Steuergeräten im Fahrzeug. Es empfängt Diagnoseanfragen vom Tester, leitet diese an die entsprechenden Steuergeräte weiter und sendet die Antworten zurück an den Tester. Zu den Hauptaufgaben des Diagnose-Gateways gehören:

* Activation Line: Das Gateway wird in der Regel über eine Aktivierungsleitung aktiviert, beispielsweise über den WWH-Anschluss oder den OBD-Stecker. Dies stellt sicher, dass das Ethernet-Interface nur bei Bedarf aktiv ist.
* Logische Adresse: Auch dem Diagnose-Gateway wird eine eindeutige logische Adresse zugewiesen, die es im Netzwerk identifiziert.
* Netzwerkprotokoll: Das Diagnose-Gateway muss die DoIP-Protokollsuite unterstützen, einschließlich UDP/IP oder TCP/IP, um mit dem Diagnosetester und den Steuergeräten zu kommunizieren.

### Kommunikationsablauf

Die Kommunikation zwischen Diagnosetester und Steuergeräten über DoIP erfolgt in folgenden Schritten:

1. Verbindungsaufbau: Der Diagnosetester stellt eine Verbindung zum Diagnose-Gateway her, indem er dessen IP-Adresse und Portnummer verwendet.
2. Authentifizierung: Der Diagnosetester authentifiziert sich beim Diagnose-Gateway, um unberechtigten Zugriff zu verhindern.
3. Steuergerätauswahl: Der Diagnosetester wählt das Steuergerät aus, mit dem er kommunizieren möchte, indem er dessen logische Adresse verwendet.
4. Diagnoseanfrage: Der Diagnosetester sendet eine Diagnoseanfrage an das ausgewählte Steuergerät. Die Anfrage enthält Informationen über den gewünschten Diagnosedienst und die zu übertragenden Parameter.
5. Datenübertragung: Das Steuergerät empfängt die Diagnoseanfrage, verarbeitet sie und sendet eine Antwort an das Diagnose-Gateway. Die Antwort enthält die angeforderten Diagnosedaten oder Fehlermeldungen.
6. Datenweiterleitung: Das Diagnose-Gateway empfängt die Antwort vom Steuergerät und leitet sie an den Diagnosetester weiter.
7. Sitzungsende: Der Diagnosetester wertet die empfangenen Daten aus und kann bei Bedarf weitere Diagnoseanfragen senden. Die Diagnosesitzung wird beendet, wenn alle relevanten Informationen abgerufen wurden.

### Vorteile von DoIP

DoIP bietet gegenüber traditionellen diagnosebasierten Bussystemen wie CAN mehrere Vorteile:

* Höhere Datenrate: DoIP ermöglicht eine deutlich schnellere Datenübertragung, was die Diagnosezeit verkürzt und die Verarbeitung komplexer Diagnosedaten ermöglicht.
* Geringere Komplexität: Die Verwendung eines standardisierten Ethernet-Netzwerks reduziert die Komplexität der Fahrzeugarchitektur und vereinfacht die Implementierung neuer Diagnosefunktionen.

## DoIP Vehicle Discovery

Die DoIP-Fahrzeugerkennung (DoIP Vehicle Discovery) ist ein entscheidender Prozess für die effiziente Diagnose und Programmierung von Fahrzeugen über ein Ethernet-Netzwerk. Sie ermöglicht es dem Diagnosetester, die im Fahrzeug vorhandenen Steuergeräte (ECUs) zu identifizieren und mit ihnen zu kommunizieren.

### **Vehicle Pool (Switched Ethernet)**

In modernen Fahrzeugen wird häufig ein Switched Ethernet-Netzwerk verwendet, um die Kommunikation zwischen verschiedenen ECUs zu ermöglichen. Der Vehicle Pool stellt dabei ein virtuelles Segment innerhalb dieses Netzwerks dar, in dem sich alle diagnostizierbaren Steuergeräte befinden.

### **Tester**

Der Diagnosetester ist das zentrale Gerät zur Durchführung der Fahrzeugerkennung. Er sendet spezielle Broadcast-Nachrichten in den Vehicle Pool, um die vorhandenen Steuergeräte zu identifizieren und deren Informationen zu sammeln.

#### **VIN:VECT0RVEH1CLE8100EID: 00:16:81:00:00:01**

Die obige Angabe deutet darauf hin, dass der Tester eine eindeutige Identifikationsnummer (VIN) und eine Entity-ID (EID) besitzt. Die VIN dient zur Identifizierung des Fahrzeugs selbst, während die EID die MAC-Adresse eines bestimmten Steuergeräts im Fahrzeug darstellt.

#### **Verbindungsmanagement**

Der Diagnosetester muss in der Lage sein, mehrere Diagnosesitzungen gleichzeitig zu verwalten. Dies erfordert effiziente Mechanismen zur Zuordnung von Ressourcen, zur Priorisierung von Anfragen und zur Vermeidung von Konflikten.

### **Eindeutige Fahrzeuginformationen**

Für die korrekte Identifizierung und Kommunikation mit den Steuergeräten im Fahrzeug benötigt der Diagnosetester folgende Informationen:

#### **FIN: Fahrzeug-Identifikationsnummer (engl. VIN)**

Die FIN ist eine eindeutige globale Kennung, die jedem Fahrzeug zugewiesen wird. Sie ermöglicht es, das Fahrzeugmodell, die Ausstattung und die Produktionshistorie zu identifizieren.

#### **EID: Entity Identification (meistens MAC Adresse des Steuergeräts)**

Die EID ist eine eindeutige Kennung, die jedem Steuergerät im Fahrzeug zugewiesen wird. Sie ermöglicht es, das spezifische Steuergerät zu adressieren und mit ihm zu kommunizieren.

### **Implementierung der DoIP-Fahrzeugerkennung**

Die Implementierung der DoIP-Fahrzeugerkennung umfasst folgende Schritte:

1. **Broadcast-Nachrichten senden:** Der Diagnosetester sendet Broadcast-Nachrichten in den Vehicle Pool, um die vorhandenen Steuergeräte zu aktivieren und deren Bereitschaft zur Kommunikation zu signalisieren.
2. **Empfang von Steuergeräteantworten:** Die Steuergeräte empfangen die Broadcast-Nachrichten und senden Antworten, die ihre EID und andere relevante Informationen enthalten.
3. **Auswertung der Antworten:** Der Diagnosetester wertet die empfangenen Antworten aus und erstellt eine Liste der im Fahrzeug vorhandenen Steuergeräte.
4. **Zuordnung von Steuergeräten zu Fahrzeugen:** Der Diagnosetester ordnet die identifizierten Steuergeräte anhand der EID und FIN dem entsprechenden Fahrzeug zu.
5. **Bereitstellung von Fahrzeuginformationen:** Der Diagnosetester stellt die gesammelten Fahrzeuginformationen (VIN, EID, etc.) der Diagnoseanwendung zur Verfügung.

### **Herausforderungen und Lösungen**

Die Implementierung der DoIP-Fahrzeugerkennung kann mit folgenden Herausforderungen verbunden sein:

* **Mehrere Fahrzeuge im Netzwerk:** Wenn sich mehrere Fahrzeuge im selben Ethernet-Netzwerk befinden, muss der Diagnosetester in der Lage sein, das richtige Fahrzeug zu identifizieren und mit ihm zu kommunizieren.
* **Unterschiedliche Steuergerätetypen:** Verschiedene Steuergerätetypen können unterschiedliche Protokolle und Formate für ihre Antworten verwenden. Der Diagnosetester muss in der Lage sein, diese Unterschiede zu interpretieren.
* **Zeitkritische Anforderungen:** In einigen Anwendungsfällen kann die Fahrzeugerkennung zeitkritisch sein, z. B. bei der Fehlersuche nach einem Notfall. Der Diagnosetester muss die Steuergeräte schnell und zuverlässig identifizieren können.

Um diese Herausforderungen zu bewältigen, können verschiedene Lösungen eingesetzt werden, z. B.:

* **Verwendung von Filtermechanismen:** Filtermechanismen können verwendet werden, um Broadcast-Nachrichten auf bestimmte Fahrzeugtypen oder Steuergeräte zu begrenzen.
* **Standardisierung von Antwortformaten:** Die Standardisierung von Antwortformaten kann die Interoperabilität zwischen verschiedenen Steuergeräten verbessern.
* **Implementierung von Timeout-Mechanismen:** Timeout-Mechanismen können verwendet werden, um sicherzustellen, dass die Fahrzeugerkennung auch bei nicht

## DoIP Routing Activation

## Benutzung von DoIP für Diagnose

## DoIP Message
