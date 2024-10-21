# System Variable & Environment Variable in CAPL

In this tutorial, we will explore the concepts of system variables and environment variables in CAPL (CAN Access Programming Language). We will provide detailed explanations and code snippets to illustrate their use in practical scenarios.

## Overview

CAPL is a programming language used to simulate, test, and analyze CAN networks. It is widely utilized in automotive software development. Understanding the difference between system variables and environment variables is crucial for effective CAPL programming.

## System Variables

### Definition
System variables in CAPL are predefined variables that provide information about the current state of the CANoe system or CANalyzer environment. These variables are read-only and cannot be modified by the user.

### Characteristics
- **Predefined:** System variables are predefined and cannot be customized.
- **Read-only:** They provide information but cannot be altered by the user.
- **Information Retrieval:** Used to retrieve information such as simulation time, vehicle speed, engine RPM, system temperature, etc.

### Example
```c
variables
{
    msTimer sysTime;
    long vehicleSpeed;
}

on start
{
    sysTime = 0;
}

on sysTime
{
    // Retrieve system time in milliseconds
    write("Current simulation time: %d ms", sysTime);
    
    // Retrieve vehicle speed
    vehicleSpeed = this.speed;
    write("Current vehicle speed: %d km/h", vehicleSpeed);
}
```

In this example, `sysTime` and `vehicleSpeed` are system variables used to retrieve the current simulation time and vehicle speed, respectively.

## Environment Variables

### Definition
Environment variables in CAPL are user-defined variables that can store and retrieve values during the simulation. These variables are flexible and can be modified by the user as needed.

### Characteristics
- **User-defined:** Environment variables can be created and customized by the user.
- **Read and Write:** They can store and retrieve values during the simulation.
- **Scope:** Environment variables can be accessed across different CAPL programs or simulations.

### Example
```c
variables
{
    long odometer;
    byte fuelLevel;
    env int speedLimit;
    env float engineTemperature;
}

on start
{
    odometer = 0;
    fuelLevel = 100; // Initial fuel level
    speedLimit = 120; // Speed limit set by the user
    engineTemperature = 75.0; // Initial engine temperature
}

on message CAN1.100
{
    // Update odometer reading
    odometer += 1;
    write("Odometer reading: %d km", odometer);

    // Update fuel level
    fuelLevel -= 1;
    write("Fuel level: %d%%", fuelLevel);

    // Retrieve user-defined speed limit
    write("Speed limit: %d km/h", speedLimit);

    // Retrieve engine temperature
    write("Engine temperature: %.2f°C", engineTemperature);
}
```

In this example, `odometer` and `fuelLevel` are system variables, while `speedLimit` and `engineTemperature` are environment variables. The environment variables can be modified by the user during the simulation.

## Practical Usage

### System Variable Example
```c
variables
{
    msTimer simulationTime;
    int numberOfNodes;
}

on start
{
    simulationTime = 0;
}

on simulationTime
{
    // Print current simulation time
    write("Simulation Time: %d ms", simulationTime);

    // Retrieve number of nodes in the CAN network
    numberOfNodes = getNodeCount();
    write("Number of Nodes: %d", numberOfNodes);
}
```

### Environment Variable Example
```c
variables
{
    env int maxSpeed;
    env float ambientTemperature;
}

on start
{
    // Initialize environment variables
    maxSpeed = 100;
    ambientTemperature = 25.0;
}

on message CAN1.200
{
    // Change max speed
    maxSpeed = 120;
    write("Max Speed: %d km/h", maxSpeed);

    // Change ambient temperature
    ambientTemperature = 30.0;
    write("Ambient Temperature: %.2f°C", ambientTemperature);
}
```

## Conclusion

Understanding system variables and environment variables in CAPL is essential for effective CAN network simulations. System variables provide crucial information about the current state of the system and are read-only, while environment variables allow for user-defined values that can be modified during the simulation.

This tutorial has covered the definitions, characteristics, and practical examples of both types of variables. By mastering these concepts, you can enhance your CAPL programming skills and create more efficient and robust simulations.
