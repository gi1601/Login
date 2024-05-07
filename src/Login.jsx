import React, { useState } from 'react';
import css from './Login.module.css';


function Login() {
    const [nome, setNome    ] = useState('');
    const [cpf, setCpf   ] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = (e) => {
        e.preventDefault();
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
        setUsuario('');
        setSenha('');
    };

    return (

        <div className="container">
            <div className={css.tudo}>
                <div>
                    <img className={css.logo} src="./logo.png" alt=""/>
                </div>
                <div className={css.formcontainer}>
                    <h1>Login</h1>
                </div>
                <form className={css.form} onSubmit={handleEntrar}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="usuario">Usuário:</label>
                        <input
                            type="text"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>


    )
        ;
}

export default Login;
