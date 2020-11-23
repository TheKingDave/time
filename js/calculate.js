function calculate() {
    const date1 = Date.parse(document.getElementById('to').value);
    const diffTime = Math.abs(date1 - Date.now());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('out').innerText = diffDays + ' days';
}
