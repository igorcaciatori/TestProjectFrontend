document.getElementById('cadastro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = `http://localhost:3000`;

    const userData = {
        email,
        username,
        password,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar os dados para a API');
        }

        const data = await response.json();
        alert(data.message || 'Cadastro realizado com sucesso!');
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
});