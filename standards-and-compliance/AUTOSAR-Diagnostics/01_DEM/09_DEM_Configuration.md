# Diagnostic Event Manager (DEM) Configuration Guide

Welcome to the DEM Configuration Guide. This comprehensive document will walk you through the intricate process of configuring the Diagnostic Event Manager (DEM) system, covering event and DTC configurations, as well as DEM general settings.

## Event Configuration

Events in DEM are pivotal for identifying and managing faults in the system. Let's delve into the detailed configuration parameters:

### Event Identification

- **Event ID**: Each event is uniquely identified with an Event ID, facilitating easy referencing and tracking.

### Event Type

- **BSW or ASW**: Specify whether the event belongs to the Basic Software (BSW) or Application Software (ASW) category.

### Failure Management

- **Failure Counter Threshold**: Configure the threshold for failure counts, enabling effective fault detection.

### Indicator Configuration

- **Indicator Mapping**: Define which indicator the event corresponds to, aiding visual fault indication.
- **Indicator Behavior**: Specify the behavior of the indicator when activated (continuous, blinking, slow flash, long flash).
- **Indicator Failure Counter Threshold**: Set the number of failures before the indicator activates, enhancing fault notification.

### Operation Cycle Mapping

- **Operation Cycle**: Map the event to a specific operation cycle, ensuring accurate fault monitoring.

### Debounce Algorithm

- **Debounce Algorithm Selection**: Choose the appropriate debounce algorithm for reliable event detection.

### Reporting Behavior

- **Report Behavior**: Configure when BSW faults are reported, optimizing fault handling procedures.

### Healing Threshold

- **Healing Threshold**: Set the threshold for event healing, ensuring timely resolution of faults.

## DTC Configuration

Diagnostic Trouble Codes (DTCs) are crucial for identifying and categorizing faults. Let's explore the comprehensive DTC configuration parameters:

### Aging Management

- **Aging Threshold**: Configure aging threshold if aging is permitted, facilitating efficient fault management over time.
- **Aging Cycle Reference**: Specify the reference cycle for aging, ensuring accurate aging calculations.

### FFclass and Extended Data Class

- **FFclass Reference**: Define the reference for FFclass and its associated record number, facilitating comprehensive fault categorization.
- **Extended Data Class Reference**: Specify the reference for Extended Data Class if extended data is utilized.

### Immediate NVM Storage

- **Immediate NVM Storage**: Determine whether data is immediately stored into Non-Volatile Memory (NVM), ensuring data integrity and persistence.

### Memory Destination

- **Memory Destination Reference**: Specify the memory destination where event data is stored, optimizing data management and retrieval processes.

## DEM General Configuration

General configurations play a pivotal role in shaping the overall behavior of the DEM system. Let's explore these configurations in detail:

### Aging Cycle Testing

- **Aging Cycle Testing**: Configure whether events should be tested during aging cycles, ensuring comprehensive fault monitoring.

### Event Availability Support

- **Event Availability Support**: Enable/disable event availability configuration, ensuring accurate event status representation.

### BSW Error Buffer

- **BSW Error Buffer Size**: Configure buffer size for storing BSW event data, optimizing data management processes.

### Clear DTC Behavior

- **Clear DTC Behavior**: Define the behavior for clearing DTCs, ensuring efficient fault resolution and management.

### Maximum DTC Clearing

- **Maximum DTC Clearing**: Specify the maximum number of DTCs cleared at once, optimizing fault clearance procedures.

### Data Element Class Size

- **Data Element Class Size**: Configure the size of the data element class, ensuring efficient data storage and retrieval.

### Endianess

- **Endianess**: Define the endianess for data storage, ensuring data consistency across different platforms.

### DET Module

- **DET Module Configuration**: Configure reporting of development errors to DEM, facilitating effective error handling procedures.

### Displacement Strategy

- **Displacement Strategy**: Define the strategy for event memory displacement, ensuring optimal memory utilization.

### FF Class Configuration

- **FF Class Configuration**: Configure FF class and record updates, facilitating comprehensive fault categorization.

### Maximum Event Entries Buffer

- **Maximum Event Entries Buffer**: Specify the maximum number of event entries buffer, ensuring efficient event data management.

### Permanent Memory Configuration

- **Permanent Memory Configuration**: Configure storage of events in permanent memory, ensuring persistent data storage.

### OBD ECU Configuration

- **OBD ECU Configuration**: Define whether the ECU is primary or master for On-Board Diagnostics (OBD), ensuring accurate fault detection and management.

### Occurrence Counter Processing

- **Occurrence Counter Processing**: Define conditions for occurrence counter incrementation, ensuring accurate fault occurrence tracking.

### DEM Operation Cycle

- **DEM Operation Cycle Configuration**: Configure operation cycles for DEM, ensuring accurate event monitoring and management.

### DEM Task Time

- **DEM Task Time Configuration**: Specify the frequency of DEM task calls, ensuring timely event monitoring and management.

### NV Block ID Configuration

- **NV Block ID Configuration**: Configure Non-Volatile (NV) block IDs, ensuring efficient data storage and retrieval.

### DTC Suppression

- **DTC Suppression Configuration**: Determine whether DTCs are suppressed, ensuring efficient fault management.

### FF Record Numeration

- **FF Record Numeration Configuration**: Configure FF record numeration, ensuring accurate fault categorization and tracking.

### OBD General Configuration

- **OBD General Configuration**: Configure OBD-related functionalities, ensuring compliance with OBD standards and regulations.

This detailed guide provides comprehensive insights into configuring DEM and its associated parameters. For detailed implementation instructions, refer to specific tool documentation.
