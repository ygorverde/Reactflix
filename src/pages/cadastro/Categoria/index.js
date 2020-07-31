import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategoria] = useState([])
  const [values, setValues] = useState(valoresIniciais);



  //Chave: nome, descricao, bla
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }
  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(infosDoEvento.target.getAttribute('name'),
     infosDoEvento.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategoria([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>
        
      <FormField 
      label="Nome da categoria"
      type="text"
      name="nome"
      value={values.nome}
      onChange={handleChange}
      />

      <FormField
      label="Descrição"
      type="textarea"
      name="descricao"
      value={values.descricao}
      onChange={handleChange}
      />

      <FormField
      label="Cor"
      type="color"
      name="cor"
      value={values.cor}
      onChange={handleChange}
      />

        {/* <div>
          <label>
            Descrição:
          <input
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>  
        </div> */}

        {/* <div>
          <label>
            Cor:
          <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>  
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;