# DoIP Fahrzeugentdeckung: Fahrzeugankündigung und Fahrzeugidentifikation

## Einleitung

Die Diagnose über Internetprotokoll (DoIP) ist eine wichtige Technologie in der Fahrzeugdiagnose, die Ethernet als Kommunikationsmedium verwendet. DoIP ermöglicht eine schnellere und effizientere Kommunikation zwischen Diagnosetestern und den Steuergeräten im Fahrzeug. In diesem Tutorial werden wir die Konzepte der Fahrzeugankündigung (Vehicle Announcement) und der Fahrzeugidentifikation (Vehicle Identification) detailliert erklären, basierend auf dem bereitgestellten Bild.

## 1. Fahrzeugankündigung (Vehicle Announcement)

### Beschreibung

Die Fahrzeugankündigung ist der erste Schritt im DoIP-Kommunikationsprozess. Das Gateway im Fahrzeug sendet hierbei dreimal eine Fahrzeugankündigung als Broadcast über UDP (User Datagram Protocol). Diese Nachricht enthält wichtige Identifikationsdaten, die für die Diagnose benötigt werden.

### Inhalte der Fahrzeugankündigung

- **VIN (Vehicle Identification Number)**: Die Fahrgestellnummer des Fahrzeugs, die eine eindeutige Identifikation des Fahrzeugs ermöglicht.
- **EID (Entity ID)**: Eine eindeutige Identifikation des Gateways oder Steuergeräts innerhalb des Fahrzeugs.
- **Logische Adresse des Gateways**: Die Adresse, die das Gateway im Fahrzeugnetzwerk identifiziert.

### Kritische Betrachtung

Die dreimalige Übertragung der Fahrzeugankündigung stellt sicher, dass die Nachricht auch bei eventuell auftretenden Übertragungsfehlern empfangen wird. Dies ist besonders wichtig in Umgebungen mit hohem Netzwerkverkehr, wo Datenpakete verloren gehen können. Die Verwendung von UDP als Transportprotokoll ist ebenfalls sinnvoll, da es eine schnelle und effiziente Übertragung ohne die Overhead-Kosten von Verbindungsaufbau und -abbau wie bei TCP ermöglicht.

## 2. Fahrzeugidentifikation (Vehicle Identification)

### Beschreibung

Im zweiten Schritt kann der Diagnosetester eine Anfrage zur Fahrzeugidentifikation als Broadcast über UDP senden. Das Gateway antwortet auf diese Anfrage mit einer Fahrzeugidentifikationsantwort, die inhaltlich identisch mit der Fahrzeugankündigung ist.

### Prozess der Fahrzeugidentifikation

1. **Anfrage vom Diagnosetester**: Der Diagnosetester sendet eine Broadcast-Anfrage zur Fahrzeugidentifikation.
2. **Antwort vom Gateway**: Das Gateway antwortet mit einer Fahrzeugidentifikationsantwort, die die VIN, EID und die logische Adresse des Gateways enthält.

### Kritische Betrachtung

Die Möglichkeit, dass der Diagnosetester aktiv eine Identifikationsanfrage senden kann, ermöglicht eine flexible Diagnose auch in Situationen, in denen das Gateway nicht von sich aus eine Fahrzeugankündigung gesendet hat oder wenn die ursprüngliche Nachricht verloren ging. Die Verwendung von Broadcast-Kommunikation stellt sicher, dass alle relevanten Geräte im Netzwerk die Anfrage empfangen können, was insbesondere in komplexen Fahrzeugnetzwerken mit mehreren Steuergeräten von Vorteil ist.
