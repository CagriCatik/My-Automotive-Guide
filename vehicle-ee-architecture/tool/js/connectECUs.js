// connectECUs.js
function getBusColor(busType) {
    switch (busType) {
        case 'CAN':
            return 'blue';
        case 'LIN':
            return 'green';
        case 'ETH':
            return 'red';
        default:
            return 'black';
    }
}

function createPolyline(x1, y1, x2, y2) {
    const middleX = (x1 + x2) / 2;
    return `M${x1},${y1} L${middleX},${y1} L${middleX},${y2} L${x2},${y2}`;
}

export function connectECUs(connections, sidebar, sidebarContent) {
    connections.innerHTML = ''; // Clear previous connections
    console.log('Cleared previous connections');

    const connectionPairs = [
        { from: 'main', to: 'ecu1', bus: 'CAN' },
        { from: 'main', to: 'ecu2', bus: 'CAN' },
        { from: 'main', to: 'ecu3', bus: 'LIN' },
        { from: 'ecu1', to: 'ecu4', bus: 'CAN' },
        { from: 'ecu1', to: 'ecu5', bus: 'LIN' },
        { from: 'ecu2', to: 'ecu6', bus: 'CAN' },
        { from: 'ecu2', to: 'ecu7', bus: 'ETH' },
        { from: 'ecu3', to: 'ecu8', bus: 'CAN' },
        { from: 'ecu3', to: 'ecu9', bus: 'LIN' },
    ];

    connectionPairs.forEach(pair => {
        //console.log(`Processing connection from ${pair.from} to ${pair.to} using ${pair.bus} bus`);

        const from = document.getElementById(pair.from);
        const to = document.getElementById(pair.to);

        if (from && to) {
            const fromRect = from.getBoundingClientRect();
            const toRect = to.getBoundingClientRect();

            //console.log(`From element (${pair.from}):`, fromRect);
            //console.log(`To element (${pair.to}):`, toRect);

            const x1 = fromRect.left + fromRect.width / 2;
            const y1 = fromRect.top + fromRect.height / 2;
            const x2 = toRect.left + toRect.width / 2;
            const y2 = toRect.top + toRect.height / 2;

            const polylineData = createPolyline(x1, y1, x2, y2);
            //console.log(`Polyline data for ${pair.from} to ${pair.to}: ${polylineData}`);

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', polylineData);
            path.setAttribute('stroke', getBusColor(pair.bus));
            path.setAttribute('stroke-width', '2');
            path.setAttribute('fill', 'none');
            path.setAttribute('data-bus', pair.bus);

            // Add click event listener to the path
            path.addEventListener('click', function () {
                //console.log(`Clicked on path from ${pair.from} to ${pair.to}`);
                sidebarContent.innerHTML = `<h2>Bus Type</h2><p>${pair.bus} Bus</p>`;
                sidebar.classList.add('open');
            });

            connections.appendChild(path);
            //console.log(`Appended path for connection from ${pair.from} to ${pair.to}`);
        } else {
            //console.warn(`Element not found for ${pair.from} or ${pair.to}`);
        }
    });
}
