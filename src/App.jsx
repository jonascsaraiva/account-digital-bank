import { useState } from 'react'
import logo from './assets/logo.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="flex">
			<aside class="flex flex-column">
				<div class="flex flex-column">
					<div class="logo">
						<a href="/">
							<img src={logo} alt="Logo"/>
						</a>
					</div>
					<div class="titulo">
						<h1>
							Complete os campos ao lado para abrir sua Conta
							Digital
						</h1>
						<p class="subtitulo">
							Aqui, você acontece com segurança e toda a
							praticidade que o Digital Bank oferece. Mais do que
							uma conta com cartão, você tem uma experiência
							completa com investimentos, Mimos exclusivos e muito
							mais.
						</p>
					</div>
					<small>&copy; Jonas da Costa Saraiva 37020495</small>
					<small>&copy;Italo Pereira de Sousa 37021604</small>
					
				</div>
			</aside>
			<div class="flex flex-column">
				<div class="formulario flex flex-column">
					<div class="progresso">
						<label class="">Preencha os campos</label>
						<progress value="100" max="100"></progress>
					</div>

					<div class="flex flex-column">
						<label for="nome">Digite seu nome</label>
						<input type="text" id="nome" />
					</div>

					<div class="flex flex-column">
						<label for="telefone">Digite seu telefone</label>
						<input type="text" id="telefone" />
					</div>

					<div class="flex flex-column">
						<label for="telefone">Digite seu e-mail</label>
						<input type="text" id="telefone" />
					</div>

					<div class="flex flex-column">
						<label for="telefone">Digite seu senha</label>
						<input type="text" id="telefone" />
						<button class="mostra-senha">Exibir senha</button>
					</div>

					<div class="flex termos">
						<input
							type="checkbox"
							name="aceita-termos"
							id="aceita-termos" />
						<label for="aceita-termos">
							Eu li, estou ciente das condições de tratamento dos
							meus dados pessoais e dou meu consentimento, quando
							aplicável, conforme descrito nesta
						</label>
					</div>

					<div class="flex">
						<button class="botao" disabled>	Aceite os termos </button>
					</div>
				</div>
			</div>
		</main>
  )
}

export default App
