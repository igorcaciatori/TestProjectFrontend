document.getElementById('loginForm').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = `https://localhost:3000`;

    try{
        const response = await fetch(`${url}/user/${username}`);

        if(!response.ok){
            throw new Error('Erro ao buscar o nome.');
        }

        const data = await response.json();

        if(data.password === password) {
            console.log(`login aceito`);
        } else {
            console.log(`senha incorreta`);
        }

        if(data.error){
            alert('Nome não encontrado');
            return;
        }  
    }
    catch(error){
        alert('Ocorreu um erro: ' + error.message);
    }
})