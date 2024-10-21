# Der Abschluss des V-Zyklus: Integration, Verifikation und Validierung

Haben Sie sich jemals gefragt, was am Ende des V-Zyklus passiert, wenn ein komplettes System bereit ist, an den OEM geliefert und in ein Serienfahrzeug integriert zu werden? Ich werde Ihnen die Perspektive geben. Die letzten drei Schritte des V-Zyklus sind Integration, Verifikation und Validierung. Diese Schritte gewährleisten, dass das an den Kunden gelieferte System funktionsfähig, sicher und allen Sicherheitsanforderungen entspricht.

Übrigens, wussten Sie, dass die während der Entwicklung verwendeten Autos in vielen Fällen sehr unterschiedlich zu den Autos sind, die die Endkunden schließlich kaufen werden? Die Entwicklungsfahrzeuge können Messtechnik enthalten oder strukturelle Änderungen aufweisen und können einzigartige Funktionen haben, die zur Messung von Parametern im Fahrzeug modifiziert wurden. Diese Autos werden normalerweise von qualifizierten Fahrern gefahren, die wissen, wie sie reagieren müssen, wenn ein Fehler auftritt. Fehler können durch Fahrzeugmodifikationen oder durch einen elektrischen/elektronischen Fehler oder Bugs in einem der Systeme in diesem speziellen Fahrzeug verursacht werden.

### Ziele der Integration und des Testens auf Systemebene

Was sind die Ziele des Integrations- und Testschritts auf Systemebene? Laut der Norm gibt es drei Ziele:

1. Definieren Sie die Integrationsschritte und integrieren Sie die Systemelemente, bis das System vollständig integriert ist.
2. Überprüfen Sie, ob die definierten Sicherheitsmaßnahmen aus der Sicherheitsanalyse angemessen implementiert sind.
3. Liefern Sie Nachweise, dass die integrierten Systemelemente ihre Sicherheitsanforderungen gemäß dem Systemarchitekturdesign erfüllen.

Zusammengefasst sagt die Norm, dass die Integration definiert werden sollte, die Sicherheitsmaßnahmen überprüft werden und Nachweise gesammelt werden müssen, um zu belegen, dass die Architektur gemäß den Anforderungen gestaltet ist.

### Integration in der Praxis

Integration bedeutet im Wesentlichen, Software mit dem gesamten Quellcode zu erstellen, der die Funktionen in einem bestimmten Entwicklungsschritt realisiert. Bei der Softwareintegration ist der erste Schritt, die Software zu kompilieren und zu erstellen, mit allem, was für die Lieferung benötigt wird. Nachdem die Software erstellt wurde, wird sie in den Speicher des Steuergeräts (ECU) geschrieben. Anschließend werden möglicherweise spezielle Kalibrierungen hinzugefügt, und wenn alles funktioniert, ist der Integrationsschritt abgeschlossen.

### Ebenen der Integration und des Testens

Die ISO 26262, Teil 4, beschreibt drei Ebenen der Integration und des Testens:

1. **Hardware-Software-Integration**: Kompilieren des gesamten notwendigen Quellcodes für eine Version und Schreiben in den Speicher der Hardware. Das Ziel ist es zu testen, ob die Hardware-Software-Schnittstelle korrekt implementiert wurde.
2. **Systemintegration**: Zusammenfügen verschiedener Teile des Items, wie z.B. das Zusammenführen eines Lenkrads mit einem Ritzelgestänge für ein Steer-by-Wire-Item.
3. **Fahrzeugintegration**: Ein System, das von Ihrem Unternehmen entwickelt wurde, wird in ein Fahrzeug integriert, z.B. durch Anschließen des Systems an die Schnittstellen und Sicherstellen, dass es im Auto funktioniert.

### Simulation der Integration

Manchmal ist es nicht erforderlich, das gesamte Auto zu testen; Signale können simuliert werden, oder Teile des Autos können verwendet werden. Hier kommt das Konzept des Hardware-in-the-Loop (HIL) ins Spiel. HIL-Simulationen ermöglichen die Simulation von Parametern, Signalen und Verhaltensweisen, selbst von gesamten Steuergeräten.

### Verifikation

Verifikation stellt sicher, dass das Produkt gemäß den Anforderungen, Spezifikationen und Standards gebaut wird. Die Verifikation muss strukturiert auf drei Ebenen erfolgen: Hardware-Software-Integration, Systemintegration und Fahrzeugintegration. Die ISO 26262 gibt in Tabelle 3 von Teil 4 Methoden vor, die je nach ASIL angewendet werden müssen, um Testspezifikationen zu entwickeln und Tests durchzuführen.

### Validierung

Validierung hingegen stellt sicher, dass das Produkt die Anforderungen erfüllt und auf den Markt gebracht und von Endkunden verwendet werden kann. Die Validierung sammelt Argumente, dass die Sicherheitsanforderungen unter allen spezifizierten Umweltbedingungen erfüllt werden und das System innerhalb seiner spezifizierten Grenzen verwendet werden kann.

### Zusammenfassung

Hardware-, Software-, System- und Fahrzeugtests sowie die Sicherheitsvalidierung und -integration sind entscheidende Schritte, um sicherzustellen, dass ein System sicher und funktional ist, bevor es an den Endkunden geliefert wird. Diese Schritte sind notwendig, um die Einhaltung der ISO 26262 und die Sicherheit in modernen Fahrzeugen zu gewährleisten.
