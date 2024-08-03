document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('proj_name');
    const abbreviation = "SAPg";
    const steps = ["SAPg", "SmAnPo", "SmiAntPos", "SmirAntPost", "SmirAntPostg", "SmirAntPostgr", "SmirAntPostgre"];

    let currentIndex = 0;
            let timeoutId;

            function expandText() {
                if (currentIndex < steps.length - 1) {
                    currentIndex++;
                    textElement.textContent = steps[currentIndex];
                    timeoutId = setTimeout(expandText, 80);
                }
            }

            function cutText() {
                if (currentIndex > 0) {
                    currentIndex--;
                    textElement.textContent = steps[currentIndex];
                    timeoutId = setTimeout(cutText, 80);
                }
            }

            textElement.addEventListener('mouseover', function() {
                clearTimeout(timeoutId);
                expandText();
            });

            textElement.addEventListener('mouseout', function() {
                clearTimeout(timeoutId);
                cutText();
            });
});