import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import "../css/perfil.css";

// Componente de Login
function Login({ onShowCadastro, onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    const storedEmail = sessionStorage.getItem("email");
    const storedSenha = sessionStorage.getItem("senha");
    const storedNome = sessionStorage.getItem("nome");

    if (email === storedEmail && senha === storedSenha) {
      onLogin(storedNome); // Loga com o nome armazenado
    } else {
      alert("Credenciais incorretas");
    }
  };

  return (
    <div className="login">
      <IoPersonCircleOutline className="icon" />
      <h2>Fazer login</h2>
      <label>Email ou número de telefone</label>
      <input
        type="email"
        placeholder="Insira seu email ou número"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Senha</label>
      <input
        type="password"
        placeholder="Insira a sua senha"
        className="input-field"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Logar
      </button>
      <p>
        Não possui uma conta?{" "}
        <a href="#" onClick={onShowCadastro}>
          Cadastre-se
        </a>
      </p>
    </div>
  );
}

// Componente de Cadastro
function Cadastro({ onShowLogin }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  const isSenhaIgual = senha && repetirSenha && senha === repetirSenha;

  const handleCadastro = () => {
    if (isSenhaIgual) {
      sessionStorage.setItem("nome", nome);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("senha", senha);
      alert("Cadastro realizado com sucesso!");
      onShowLogin(); // Redireciona para o login
    } else {
      alert("As senhas não coincidem!");
    }
  };

  return (
    <div className="cadastro">
      <IoPersonCircleOutline className="icon" />
      <h2>Criar conta</h2>

      <label>Nome Completo</label>
      <input
        type="text"
        placeholder="Insira seu Nome completo"
        className="input-field"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label>Email ou número de telefone</label>
      <input
        type="email"
        placeholder="Insira um email ou número"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Crie uma senha</label>
      <input
        type="password"
        placeholder="Insira a sua senha"
        className="input-field"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <label>Repita a senha</label>
      <input
        type="password"
        placeholder="Repita a senha"
        className="input-field"
        value={repetirSenha}
        onChange={(e) => setRepetirSenha(e.target.value)}
      />
      <button
        className="cadastro-button"
        onClick={handleCadastro}
        disabled={!isSenhaIgual}
      >
        Cadastrar
      </button>
      <p>
        Já possui uma conta?{" "}
        <a href="#" onClick={onShowLogin}>
          Faça login
        </a>
      </p>
    </div>
  );
}

// Componente de Perfil Logado
function PerfilLogado({ nome, onLogout }) {
  return (
    <div className="logado">
      <IoPersonCircleOutline className="icon" />
      <h2>Seja bem-vindo </h2>
      <h2>{nome}!</h2>
      <button className="logout-button" onClick={onLogout}>
        Sair
      </button>
    </div>
  );
}

// Componente principal de Perfil
export default function Perfil() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [telaCadastro, setTelaCadastro] = useState(false);

  // Função para salvar o estado de login no sessionStorage
  useEffect(() => {
    const savedNome = sessionStorage.getItem("nome");
    const savedLogado = sessionStorage.getItem("logado") === "true";
    
    if (savedNome && savedLogado) {
      setNome(savedNome);
      setLogado(true);
    }
  }, []);

  const handleLogin = (nomeCompleto) => {
    setNome(nomeCompleto);  // Loga com o nome armazenado
    setLogado(true);
    sessionStorage.setItem("logado", "true");  // Marca como logado
  };

  const handleLogout = () => {
    setLogado(false);
    sessionStorage.removeItem("logado");  // Remove o estado de login, mas mantém o nome
  };

  return (
    <div className="perfil">
      {!logado ? (
        !telaCadastro ? (
          <Login
            onShowCadastro={() => setTelaCadastro(true)}
            onLogin={handleLogin}
          />
        ) : (
          <Cadastro onShowLogin={() => setTelaCadastro(false)} />
        )
      ) : (
        <PerfilLogado nome={nome} onLogout={handleLogout} />
      )}
    </div>
  );
}
