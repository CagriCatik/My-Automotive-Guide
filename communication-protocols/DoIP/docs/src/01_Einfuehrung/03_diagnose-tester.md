## Einführung in die Rolle des Diagnosetesters im Fahrzeug

### Beschreibung der Rolle

Der Diagnosetester ist ein wesentlicher Bestandteil der Fahrzeugdiagnose und -wartung. Er dient der Überwachung, Fehlersuche und Kalibrierung der Steuergeräte (ECUs) im Fahrzeug. Hierbei ist es von entscheidender Bedeutung, dass der Diagnosetester über eine Vielzahl von Informationen und Funktionen verfügt, um effektiv zu arbeiten.

### Beschreibungsdateien

#### CDD, ODX, etc.

Eine zentrale Anforderung für den Einsatz eines Diagnosetesters ist die Verfügbarkeit von Beschreibungsdateien. Diese Dateien enthalten wesentliche Informationen über die Steuergeräte im Fahrzeug und deren Kommunikationsprotokolle. Zu den gängigen Formaten gehören:

- **CDD (CANdela Diagnostic Description)**: Ein standardisiertes Format zur Beschreibung der Diagnosedaten und -funktionen von Steuergeräten.
- **ODX (Open Diagnostic Data Exchange)**: Ein XML-basiertes Format, das umfassende Informationen über die Diagnosedaten und -funktionen enthält.

Der Diagnosetester benötigt für jedes Steuergerät eine entsprechende Beschreibungsdatei, um die korrekten Diagnosefunktionen durchführen zu können.

### Logische Adresse

Jedes Steuergerät und der Diagnosetester benötigen eine eindeutige logische Adresse, um im Netzwerk kommunizieren zu können. Diese logische Adresse ermöglicht es dem Tester, gezielt mit einem bestimmten Steuergerät zu interagieren, ohne dass es zu Verwechslungen kommt.

### Kommunikation über UDP/IP oder TCP/IP

Die Kommunikation zwischen dem Diagnosetester und den Steuergeräten erfolgt üblicherweise über Netzwerke wie Ethernet, die auf den Protokollen UDP/IP oder TCP/IP basieren. Hierbei sind insbesondere zwei Schichten relevant:

- **Schicht 3: IP-Adressen**
  Jede Komponente im Netzwerk erhält eine eindeutige IP-Adresse. Ein typisches Beispiel für eine IP-Adresse wäre `192.168.1.10`. Diese Adressen ermöglichen die Identifikation und Adressierung der einzelnen Geräte im Netzwerk.
- **Schicht 4: UDP/TCP Ports**
  Zur Unterscheidung verschiedener Kommunikationskanäle auf derselben IP-Adresse werden Ports verwendet. Ein Beispiel für einen solchen Port wäre `13400`. Durch die Verwendung unterschiedlicher Ports können mehrere Dienste gleichzeitig auf einem Gerät ausgeführt werden, ohne dass es zu Konflikten kommt.
