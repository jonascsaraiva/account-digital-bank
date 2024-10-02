import { useState } from 'react'
import logo from './assets/logo.svg'

import './App.css'

function App() {
  // Criação dos estados
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [habilitarBotao, setHabilitarBotao] = useState(false);
  const [campos, setCampos] = useState({
    nome: '',
    telefone: '',
    email: '',
    password: ''
  });
  const [mensagem, setMensagem] = useState(false);

  // Método para calcular a porcentagem de progresso
  const calcularProgresso = () => {
    let camposPreenchidos = 0;
    if (campos.nome) camposPreenchidos++;
    if (campos.telefone) camposPreenchidos++;
    if (campos.email) camposPreenchidos++;
    if (campos.password) camposPreenchidos++;

    // Calcula a porcentagem com base no número de campos preenchidos
    return (camposPreenchidos / 4) * 100;
  };

  // Método para atualizar os campos do formulário
  const atualizarCampo = (e) => {
    const { name, value } = e.target;
    setCampos({
      ...campos,
      [name]: value
    });
  };

  // Método para alternar visibilidade da senha
  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  // Método para verificar a aceitação dos termos
  const atualizarAceiteTermos = (e) => {
    setHabilitarBotao(e.target.checked);
  };

  // Finalização do formulário
  const finalizarFormulario = (e) => {
    e.preventDefault();
    if (campos.nome && campos.telefone && campos.email && campos.password && habilitarBotao) {
      setMensagem(`Obrigado ${campos.nome}, por abrir sua conta! Você receberá no email: ${campos.email}, detalhes sobre o recebimento do cartão.`);
    } else {
      setMensagem('Preencha todos os campos e aceite os termos.');
    }
  };

  return (
    <main className="flex">
      <aside className="flex flex-column">
        <div className="flex flex-column">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="titulo">
            <h1>
              Complete os campos ao lado para abrir sua Conta Digital
            </h1>
            <p className="subtitulo">
              Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
            </p>
          </div>
          <small>&copy; Jonas da Costa Saraiva 37020495</small>
          <small>&copy;Italo Pereira de Sousa 37021604</small>
        </div>
      </aside>
      
      <div className="flex flex-column">
        <form className="formulario flex flex-column" onSubmit={finalizarFormulario}>
          <div className="progresso">
            <label>Preencha os campos</label>
            <progress value={calcularProgresso()} max="100"></progress>
          </div>

          <div className="flex flex-column">
            <label htmlFor="nome">Digite seu nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={campos.nome}
              onChange={atualizarCampo}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="telefone">Digite seu telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={campos.telefone}
              onChange={atualizarCampo}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="email">Digite seu e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={campos.email}
              onChange={atualizarCampo}
            />
          </div>

          <div className="flex flex-column">
            <label htmlFor="password">Digite sua senha</label>
            <input
              type={mostrarSenha ? "text" : "password"}
              id="password"
              name="password"
              value={campos.password}
              onChange={atualizarCampo}
            />
            <button type="button" className="mostra-senha" onClick={alternarVisibilidadeSenha}>
              {mostrarSenha ? "Ocultar senha" : "Exibir senha"}
            </button>
          </div>

          <div className="flex termos">
            <input
              type="checkbox"
              name="aceita-termos"
              id="aceita-termos"
              onChange={atualizarAceiteTermos}
            />
            <label htmlFor="aceita-termos">
              Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta.
            </label>
          </div>

          <div className="flex">
            {/* O texto do botão muda de acordo com o checkbox */}
            <button className="botao" type="submit" disabled={!habilitarBotao}>
              {habilitarBotao ? "Abra sua conta" : "Aceite os termos"}
            </button>
          </div>
        </form>

        {/* Exibe a mensagem após o envio */}
        {mensagem && <p className='flex'>{mensagem}</p>}
      </div>
    </main>
  );
}

export default App;
