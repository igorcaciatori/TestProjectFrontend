document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('search').value;

    const url = `http://localhost:3000`;

    try {
        const response = await fetch(`${url}/user/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar usuário');
        }

        const data = await response.json();

        if (data.length === 0) {
            alert('Usuário não encontrado');
            document.getElementById('userDetails').innerHTML = '';
        } else {
            displayUserData(data[0]);
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
});

function displayUserData(user) {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = `
        <div class="w-full overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b">ID</th>
                        <th class="py-2 px-4 border-b">Email</th>
                        <th class="py-2 px-4 border-b">Username</th>
                        <th class="py-2 px-4 border-b">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b">${user.id}</td>
                        <td class="py-2 px-4 border-b">${user.email}</td>
                        <td class="py-2 px-4 border-b">${user.username}</td>
                        <td class="py-2 px-4 border-b">${user.password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}
