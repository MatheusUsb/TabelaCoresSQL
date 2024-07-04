document.getElementById('loadData').addEventListener('click', function() {
    fetch('http://localhost:3001/data')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>ID</th><th>Nome</th></tr>';
            data.data.forEach(item => {
                table += `<tr><td>${item.id}</td><td>${item.nome}</td></tr>`;
            });
            table += '</table>';
            document.getElementById('data').innerHTML = table;
        })
        .catch(error => console.error('Erro:', error));
});