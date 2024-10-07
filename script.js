document.getElementById('organizeButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const category = document.getElementById('categorySelect').value;
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = ''; // Clear previous output

    const files = Array.from(fileInput.files);
    files.forEach(file => {
        const listItem = document.createElement('div');
        listItem.textContent = `File: ${file.name}, Category: ${category}`;
        outputDiv.appendChild(listItem);
    });
});

