// positionECUs.js
export function positionECUs() {
    // Set the fixed positions for each ECU
    const positions = {
        main: { top: '50px', left: '150px' },
        ecu1: { top: '150px', left: '50px' },
        ecu2: { top: '150px', left: '250px' },
        ecu3: { top: '150px', left: '450px' },
        ecu4: { top: '250px', left: '50px' },
        ecu5: { top: '250px', left: '250px' },
        ecu6: { top: '250px', left: '450px' },
        ecu7: { top: '350px', left: '50px' },
        ecu8: { top: '350px', left: '250px' },
        ecu9: { top: '350px', left: '450px' }
    };

    for (const id in positions) {
        const ecu = document.getElementById(id);
        if (ecu) {
            ecu.style.top = positions[id].top;
            ecu.style.left = positions[id].left;
        }
    }
}
