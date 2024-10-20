document.addEventListener('DOMContentLoaded', function () {
    // Example: Add click event to cells in the rating chart
    const ratingCells = document.querySelectorAll('#rating-chart tbody td');

    ratingCells.forEach(cell => {
        cell.addEventListener('click', () => {
            alert('You clicked on: ' + cell.textContent);
        });
    });

    // Existing RPN calculation script...
});
