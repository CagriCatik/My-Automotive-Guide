## Bekannmachung durch das Fahrzeug

### Fahrzeugankündigung

#### Beschreibung des Prozesses

1. **Fahrzeugankündigung (Vehicle Announcement)**:

   - Sobald eine IP-Adresse einem Fahrzeuggateway (DoIP edge node) zugewiesen wurde, sendet dieses Gateway dreimal eine Fahrzeugankündigung (Vehicle Announcement).
   - Diese Ankündigungen dienen dazu, das Fahrzeug im Netzwerk bekannt zu machen, sodass ein Diagnosetester es erkennen kann.
2. **Beispiel einer Fahrzeugankündigung**:

   - **Src. MAC**: 00:A4:DF:1E:08:00
   - **Dst. MAC**: FF:FF:FF:FF:FF:FF (Broadcast)
   - **Src. IP**: 192.168.1.2
   - **Dst. IP**: 192.168.1.255 (Broadcast)
   - **Src. Port**: 24777 (zufällig)
   - **Dst. Port**: 13400 (UDP_DISCOVERY)
   - **VIN**: VECTORVEH1CLE8100
   - **EID**: 00:A4:DF:1E:08:00
   - **GID**: FF:FF:FF:FF:FF:FF (leer)
   - **Logische Adresse**: 0x201 (GW)

#### Analyse der Angaben

- **MAC-Adressen**:

  - Die Quell-MAC-Adresse (Src. MAC) ist die physische Adresse des Fahrzeuggateways.
  - Die Ziel-MAC-Adresse (Dst. MAC) ist auf Broadcast gesetzt (FF:FF:FF:FF:FF:FF), sodass alle Geräte im Netzwerk diese Ankündigung empfangen können.
- **IP-Adressen**:

  - Die Quell-IP-Adresse (Src. IP) ist die dem Fahrzeuggateway zugewiesene IP-Adresse.
  - Die Ziel-IP-Adresse (Dst. IP) ist ebenfalls auf Broadcast gesetzt (192.168.1.255), um sicherzustellen, dass alle Netzwerkgeräte die Nachricht empfangen.
- **Ports**:

  - Der Quellport (Src. Port) ist zufällig gewählt und dient zur Identifikation der Sitzung.
  - Der Zielport (Dst. Port) ist standardmäßig auf 13400 gesetzt, was für die Fahrzeugerkennung über UDP_DISCOVERY reserviert ist.
- **VIN (Vehicle Identification Number)**:

  - Die VIN ist eine eindeutige Fahrzeugidentifikationsnummer, die in der Ankündigung enthalten ist, um das spezifische Fahrzeug zu identifizieren.
- **EID (Entity Identifier)**:

  - Der EID ist ein eindeutiger Bezeichner des Fahrzeuggateways.
- **GID (Group Identifier)**:

  - Der GID ist hier leer (FF:FF:FF:FF:FF:FF), was bedeutet, dass keine Gruppenzuordnung erfolgt ist.
- **Logische Adresse**:

  - Die logische Adresse 0x201 identifiziert das Gateway im Kontext des DoIP.

### DoIP Pufferung

Nach der Ankündigung speichert der Tester die DoIP-Informationen, um eine stabile und konsistente Kommunikation mit dem Fahrzeug zu gewährleisten. Diese Information beinhaltet die erhaltenen MAC- und IP-Adressen sowie die zugehörigen Ports und Identifikatoren.

### Kritische Analyse

Die abgebildeten Informationen sind größtenteils korrekt, jedoch gibt es einige Punkte, die präzisiert werden sollten:

1. **MAC-Adresse**:

   - Es wäre sinnvoll, die Bedeutung einer Broadcast-MAC-Adresse und ihre Rolle im Netzwerk genauer zu erläutern.
2. **Ports**:

   - Der Zielport 13400 wird oft standardmäßig für UDP_DISCOVERY verwendet, aber es wäre wichtig zu betonen, dass dies eine standardisierte Vorgabe ist und gegebenenfalls konfiguriert werden kann.
3. **GID**:

   - Die Abbildung erwähnt den GID als leer. Es wäre hilfreich, ein Szenario zu erläutern, in dem der GID nicht leer ist und wie dies die Netzwerkkommunikation beeinflusst.
