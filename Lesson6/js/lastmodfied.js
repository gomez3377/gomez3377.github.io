const date = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
document.getElementById('lastchange').textContent = new Date().toLocaleDateString('en-US', date);