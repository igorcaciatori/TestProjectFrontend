window.addEventListener('load', async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        
        if (!response.ok) {
            throw new Error('Erro ao obter os usuários.');
        }

        const users = await response.json();
        
        const userTableBody = document.getElementById('userTableBody');
        
        if (users.length > 0) {
            users.forEach(user => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td class="py-2 px-4 border">${user.id}</td>
                    <td class="py-2 px-4 border">${user.email}</td>
                    <td class="py-2 px-4 border">${user.username}</td>
                    <td class="py-2 px-4 border">${user.password}</td>
                `;
                
                userTableBody.appendChild(row);
            });
        } else {
            userTableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="py-4 px-4 text-center text-gray-600">Nenhum usuário encontrado.</td>
                </tr>
            `;
        }
    } catch (error) {
        alert('Erro: ' + error.message);
    }
});
