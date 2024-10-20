### DoIP Fahrzeugerkennung durch den Diagnosetester

#### Einführung

Die Abbildung beschreibt den Prozess der Fahrzeugerkennung im Rahmen des DoIP (Diagnostics over Internet Protocol). Diese Methode ermöglicht es einem Diagnosetester, verfügbare Fahrzeuge im Netzwerk zu identifizieren. Der Prozess besteht hauptsächlich aus zwei Schritten: der Vehicle Identification Request und der Vehicle Identification Response. In diesem Tutorial werden wir diese Schritte detailliert durchgehen und eventuelle Unstimmigkeiten in der Abbildung kritisch beleuchten.

#### 1. Fahrzeuganfrage durch den Diagnosetester

**Schritt 1: Vehicle Identification Request**

Der Diagnosetester initiiert den Prozess, indem er eine Vehicle Identification Request (Fahrzeug-Identifikationsanfrage) an alle im Netzwerk befindlichen Fahrzeuge sendet. Dies geschieht durch einen Broadcast, der alle potenziellen Fahrzeuge erreicht. Die technischen Details dieses Schrittes sind wie folgt:

- **Src. MAC:** 00:16:81:00:62:E0
  - Die Quell-MAC-Adresse des Testers.
- **Dst. MAC:** FF:FF:FF:FF:FF:FF
  - Broadcast-MAC-Adresse, die an alle Netzwerkgeräte gesendet wird.
- **Src. IP:** 192.168.1.1
  - Die Quell-IP-Adresse des Testers.
- **Dst. IP:** 192.168.1.255
  - Broadcast-IP-Adresse für das Subnetz.
- **Src. Port:** 52306 (zufällig)
  - Ein zufälliger Quellport des Testers.
- **Dst. Port:** 13400 (UDP_DISCOVERY)
  - Standardport für die DoIP-Entdeckung.

Nach dem Senden der Anfrage wartet der Diagnosetester auf eine Antwort von den im Netzwerk befindlichen Fahrzeugen.

**Schritt 2: DoIP buffering**

In diesem Schritt speichert der Diagnosetester die erhaltenen DoIP-Informationen zur weiteren Verarbeitung.

#### 2. Fahrzeugantwort vom Gateway (Vehicle GW)

**Schritt 2: Vehicle Identification Response**

Nach Erhalt der Vehicle Identification Request sendet das Gateway (DoIP edge node) eine Vehicle Identification Response zurück an den Tester. Dies umfasst spezifische Fahrzeuginformationen, die für die Diagnose verwendet werden. Die technischen Details dieser Antwort sind wie folgt:

- **Src. MAC:** 00:A4:DF:1E:08:00
  - Die Quell-MAC-Adresse des Gateways.
- **Dst. MAC:** 00:16:81:00:62:E0
  - Die Ziel-MAC-Adresse des Testers.
- **Src. IP:** 192.168.1.2
  - Die Quell-IP-Adresse des Gateways.
- **Dst. IP:** 192.168.1.1
  - Die Ziel-IP-Adresse des Testers.
- **Src. Port:** 61824 (zufällig)
  - Ein zufälliger Quellport des Gateways.
- **Dst. Port:** 52306
  - Der Quellport des Testers, der in der Anfrage verwendet wurde.

Die Antwort enthält außerdem spezifische Fahrzeuginformationen:

- **VIN:** VECT0RVEH1CLE8100
  - Die Fahrzeug-Identifikationsnummer.
- **EID:** 00:A4:DF:1E:08:00
  - Die eindeutige Identifikationsnummer des Gateways.
- **GID:** FF:FF:FF:FF:FF:FF (leer)
  - Gruppenidentifikationsnummer (in diesem Fall leer).
- **Logische Adresse:** 0x201 (GW)
  - Die logische Adresse des Gateways.

#### Kritische Bewertung

Die Abbildung beschreibt den Prozess korrekt, jedoch gibt es einige Punkte, die näher erläutert werden sollten:

1. **MAC- und IP-Adressen:**

   - Die Verwendung von Broadcast-Adressen ist standardisiert und korrekt dargestellt. Es ist jedoch wichtig zu erwähnen, dass in realen Szenarien die IP-Adressen und MAC-Adressen der beteiligten Geräte spezifisch für das jeweilige Netzwerk sein müssen.
2. **Ports:**

   - Die zufällige Wahl der Quellports ist gängig, jedoch sollten Sicherheitsaspekte berücksichtigt werden, um Port-Scanning-Angriffe zu vermeiden.
3. **DoIP Protokoll:**

   - Das DoIP-Protokoll ist speziell für die Fahrzeugdiagnose entwickelt und bietet eine effiziente Methode zur Identifikation und Kommunikation mit Fahrzeugen im Netzwerk. Es ist jedoch wichtig, die spezifischen Implementierungsdetails des jeweiligen Herstellers zu berücksichtigen.
