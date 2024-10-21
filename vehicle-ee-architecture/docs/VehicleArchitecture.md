The different ways an []()E/E architecture can be built impact the vehicle attack surface, as well as the attack feasibility associated with certain attack paths. As we will see in [*Chapter 3*](https://subscription.packtpub.com/book/security/9781801076531/2/ch02lvl1sec08/B17055_03.xhtml#_idTextAnchor101), some E/E architectures are more vulnerable to cyberattacks **than others.**

Throughout the years, the E/E architecture has evolved from a highly distributed one with direct mapping between vehicle functions and ECUs to a more centralized architecture where vehicle functions are consolidated into a few yet computationally powerful domain controllers. *Figure 1**.20* shows the expected progress of E/E vehicle architectures. It starts with the highly distributed architecture, which consists of highly interconnected function-specific ECUs. The second evolution represents the domain-centralized architecture, which utilizes domain-specific ECUs that consolidate the features of multiple ECUs into fewer ones. The next generation is the zone architecture, which consists of vehicle computers or zone ECUs connected to the rest of the control units, sensors, **and actuators:**

![1707793273449](image/VehicleArchitecture/1707793273449.png)



Let’s zoom in on the three []()main types of E/E vehicle architectures to better understand their differences and gain insights into some of their **security weaknesses.**

Note

OEMs take different approaches to how they advance their vehicle architectures, so it is possible to find vehicle architectures that are in a transitional stage between architecture classes presented here. At the time of writing this book, the story of the vehicle architecture evolution has not been finished yet, so a different architecture class may **still emerge.**

[]()## Highly distributed E/E architecture

This type of architecture []()clusters ECUs with similar functionality or inter-dependent functionalities in shared network segments using []()CAN, LIN, or FlexRay so that messages can be exchanged. You may find several ECUs in this architecture that perform message relay functionality in addition to their primary vehicle functions to allow messages to flow from one network segment to another – for example, CAN to CAN or CAN to LIN. Such ECUs can be considered as local gateways that allow you to add new ECUs to the vehicle architecture without the need for a complete redesign of the in-vehicle network. A side effect of this approach is that the proliferation of local gateways creates weaknesses in network isolation as these gateways are not designed to limit unwanted access to the newly added ECUs. To reduce the addition of dedicated network channels, the designers of this architecture may allow ECUs with a high degree of difference in security exposure to be grouped in the same sub-network. For example, you may find the infotainment ECU adjacent to the braking ECU, which should make you uneasy. Another common aspect of this architecture is that the OBD connector, which enables []()a diagnostic client to send and receive diagnostic commands to the vehicle, is directly connected[]() to an internal vehic[]()le network segment such as the powertrain or **chassis domain:**
