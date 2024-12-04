document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = `http://localhost:3000`;

    try {
        const response = await fetch(`${url}/user/${username}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar o nome.');
        }

        const data = await response.json();

        console.log(data);

        if (data.length === 0) {
            alert('Nome não encontrado');
            return;
        }

        const user = data[0];

        if (user.password === password) {
            console.log('Login aceito');
        } else {
            console.log('Senha incorreta');
        }
    } catch (error) {
        alert('Ocorreu um erro: ' + error.message);
    }
});
