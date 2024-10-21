# Diagnose-Stack in AUTOSAR

Fahrzeugdiagnose beinhaltet die Überprüfung des Zustands eines Fahrzeugs mithilfe spezifischer Protokolle. Diese Protokolle fallen in der Regel in zwei Kategorien: das On-Board-Fahrzeugdiagnose (OBD) Protokoll und Off-Board-Protokolle (UDS). Durch diese Protokolle können Daten von verschiedenen Systemen oder Sensoren abgerufen, Fehlerberichte von Steuergeräten ausgelesen, fehlerbezogene Informationen erhalten und eine Vielzahl von Diagnoseaufgaben durchgeführt werden.

Abbildung zeigt einen Überblick über den AUTOSAR-Diagnose-Stack. Es zeigt verschiedene Module des Diagnose-Stacks und deren Position in AUTOSAR (Com-Service oder Memory-Service usw.). Der Diagnose-Stack enthält DEM (Diagnostic Event Manager), DCM (Diagnostics Communication Manager), FIM (Function Inhibition Manager) und DET (Development Error Tracer).

<img src="image/210_AUTOSAR/1710017436334.png" alt="drawing" width="400"/>

NvM ist Teil des Memory-Stacks. Hier wird NvM benötigt, um ereignisbezogene Daten zu speichern, wenn ein Ereignis fehlschlägt, d.h. um Freeze-Frame-Daten und erweiterte Daten zu speichern. Blöcke werden in NvM erstellt, um diagnostische ereignisbezogene Daten zu speichern.


## Diagnostic Communication Manager (DCM)

Der Diagnostic Communication Manager (DCM) in AUTOSAR ist eine entscheidende Komponente, die für das Management der diagnostischen Kommunikation innerhalb der elektronischen Steuergeräte (ECUs) von Fahrzeugen verantwortlich ist. Er erleichtert den Austausch von diagnostischen Informationen zwischen den ECUs des Fahrzeugs und externen Diagnosewerkzeugen durch standardisierte Unified Diagnostic Services (UDS). Der DCM verwaltet diagnostische Sitzungen, Sicherheitsmechanismen und Zustände und gewährleistet so eine reibungslose Kommunikation für diagnostische Zwecke. Durch die Koordination von diagnostischen Nachrichten und Interaktionen mit anderen Modulen spielt der DCM eine entscheidende Rolle bei der Ermöglichung effizienter Diagnosen und Wartung moderner automobiler Systeme.## Development Error Tracer (DET)

## Development Error Tracer (DET)-Modul

Das Development Error Tracer (DET)-Modul ist darauf ausgelegt, Softwareentwicklern während der Entwicklungsphase zu helfen, indem es Mechanismen zur Erkennung und Verfolgung von Fehlern innerhalb von Basic Software (BSW)-Modulen bereitstellt. DET ermöglicht es Entwicklern, Fehler durch dedizierte APIs wie Det_ReportError zu identifizieren, die das Melden von Fehlern zusammen mit relevanten Informationen wie Modul-IDs und Fehlercodes ermöglichen. Durch die Integration von DET in jedes BSW-Modul können Entwickler den Prozess der Fehlererkennung, -diagnose und -behebung optimieren und so die Qualität und Zuverlässigkeit der Software verbessern.## Diagnostic Event Manager (DEM)

## Diagnostic Event Manager (DEM)-Modul 

Innerhalb der AUTOSAR-Architektur fungiert das Diagnostic Event Manager (DEM)-Modul als entscheidende Komponente zur Verwaltung diagnostischer Ereignisse und zur Speicherung relevanter Daten im nichtflüchtigen Speicher (NvM). DEM dient als Vermittler zwischen BSW-Modulen und Softwarekomponenten, behandelt diagnostische Ereignisse wie Sensorfehler oder Kommunikationsbusfehler. Es verwaltet den Speicher für Fehlerereignisse, kommuniziert Ereignisstatus an externe Systeme oder Werkzeuge und arbeitet mit Modulen wie DCM zusammen, um eine effektive Behandlung diagnostischer Ereignisse sicherzustellen. Die Funktionalität des DEM verbessert die Systemrobustheit durch umfassende Ereignismanagementfähigkeiten innerhalb automobiler ECUs.## Function Inhibition Manager (FIM)

## Function Inhibition Manager (FIM)-Modul 

Das Function Inhibition Manager (FIM)-Modul in AUTOSAR ist dafür verantwortlich, spezifische Funktionalitäten innerhalb von Softwarekomponenten dynamisch basierend auf vordefinierten Bedingungen oder Ereignisstatus zu steuern. FIM nutzt Funktionsidentifikatoren (FIDs), die mit Inhibitionsbedingungen verknüpft sind, um Funktionalitäten adaptiv zu aktivieren oder zu deaktivieren. Durch die Integration mit Ereignisstatus und Überwachung von Systembedingungen kann FIM Funktionen selektiv aktivieren oder deaktivieren, um die Systemleistung und -zuverlässigkeit zu optimieren. Dieser Mechanismus zur dynamischen Funktionssteuerung verbessert die Flexibilität und Anpassungsfähigkeit automobiler Systeme, indem er Echtzeitanpassungen basierend auf sich ändernden Betriebsanforderungen ermöglicht.Zusammenfassend unterstreicht die Integration der DCM-, DET-, DEM- und FIM-Module innerhalb des AUTOSAR-Standards ihre gemeinsame Bedeutung für effiziente Diagnosen, Fehlerverfolgung, Ereignismanagement und dynamische Funktionssteuerung innerhalb moderner automobiler Softwarearchitekturen. Diese Module spielen Schlüsselrollen bei der Verbesserung der Systemzuverlässigkeit, der Unterstützung von Wartungsaktivitäten und der Bereitstellung standardisierter Kommunikationsprotokolle, die für den robusten Betrieb elektronischer Fahrzeugsyteme unerlässlich sind.
