import { useState } from 'react'

import formStyles from './Form.module.css'

import Input from './Input'
import Select from './Select'

function PetForm({ petData, btnText, handleSubmit }) {
  const [pet, setPet] = useState(petData || {})
  const [preview, setPreview] = useState([])
  const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado']

  function onfilechange(e) {}

  function handlechage(e) {}

  function handleColor(e) {}

  return (
    <form className={formStyles.form_container}>
      <Input
        text="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onfilechange}
        multiple={true}
      />
      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handlechage}
        value={pet.name || ''}
      />
      <Input
        text="Idade do Pet"
        type="text"
        name="age"
        placeholder="Digite a idade"
        handleOnChange={handlechage}
        value={pet.age || ''}
      />
      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso"
        handleOnChange={handlechage}
        value={pet.weight || ''}
      />
      <Select
        name="color"
        text="Selecione a cor"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ''}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}
export default PetForm
