// main.js
import { positionECUs } from './positionECUs.js';
import { connectECUs } from './connectECUs.js';

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebar-content');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const content = document.getElementById('content');
    const connections = document.getElementById('connections');

    const ecuName = document.getElementById('ecu-name');
    const ecuFunction = document.getElementById('ecu-function');
    const ecuLocation = document.getElementById('ecu-location');
    const ecuStatus = document.getElementById('ecu-status');

    closeSidebarButton.addEventListener('click', function () {
        sidebar.classList.remove('open');
    });

    window.loadArchitecture = function (architecture) {
        fetch(`${architecture}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
                positionECUs();
                connectECUs(connections, sidebar, sidebarContent);
                addECUClickListeners();
                setECUNames(); // Call function to set names for all ECUs
            })
            .catch(error => {
                console.error('Error fetching architecture:', error);
            });
    };

    function addECUClickListeners() {
        const ecus = document.querySelectorAll('.ecu');

        ecus.forEach(ecu => {
            ecu.addEventListener('click', function () {
                const name = ecu.getAttribute('data-name');
                const func = ecu.getAttribute('data-function');
                const location = ecu.getAttribute('data-location');
                const status = ecu.getAttribute('data-status');

                ecuName.textContent = name;
                ecuFunction.textContent = func;
                ecuLocation.textContent = location;
                ecuStatus.textContent = status;

                sidebar.classList.add('open');
            });
        });
    }

    function setECUNames() {
        const ecus = document.querySelectorAll('.ecu');

        ecus.forEach(ecu => {
            const ecuName = ecu.getAttribute('data-name');
            const ecuNameSpan = ecu.querySelector('.ecu-name');
            if (ecuNameSpan) {
                ecuNameSpan.textContent = ecuName;
            }
        });
    }

    // Load the default architecture on page load
    loadArchitecture('./architectures/architecture1');
});
