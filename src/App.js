import './App.css';
import {useState} from 'react'

function App() {

  const [nomes, setNomes] = useState([])
  const [precos, setPrecos] = useState([])
  const [nomesSelecionados, setNomesSelecionados] = useState([])
  const [precosSelecionados, setPrecosSelecionados] = useState([])
  
  function cadastrar() {
    var nome = document.getElementById('nome').value
    var valor = document.getElementById('valor').value
    var erro = 0

    if (parseFloat(valor) <= 0) {
      erro = 1
      alert('Valor do produto deve ser maior que 0')
    }

    if (nome.length < 3 ) {
      erro = 1
      alert('Nome do produto deve ter mínimo 3 caracteres')
    }

    if (nome === '' || valor === '') {
      erro = 1
      alert('Preencha todos os campos')
    }

    if (erro === 0) {
      setNomes([...nomes, nome])
      setPrecos([...precos, valor])
    }

  }

  function comprar(nome, preco) {
    setNomesSelecionados([...nomesSelecionados, nome])
    setPrecosSelecionados([...precosSelecionados, preco])
  }

  return (
    <main>
      {
        nomesSelecionados.length > 0 && (
          <div>
            <h1>Carrinho</h1>
            <p>{nomesSelecionados.length} produtos</p>
            <p>
              {precosSelecionados.reduce((acc, preco) => {
                return acc + parseFloat(preco)
              },0)
            }
            </p>
          </div>
        )
      }
      <div>
        <input type='text' id='nome' placeholder='Nome do produto'/>
        <input type='number' id='valor' placeholder='Valor do produto'/>
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <div>
        {
          nomes.map( (item, index) =>(
            <div key={index}>
              <img alt='Foto do produto' width={160} src='https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'/>
              <h2>{item}</h2>
              <h4>{precos[index]}</h4>
              <button onClick={() => comprar(item, precos[index])}>Comprar</button>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default App;