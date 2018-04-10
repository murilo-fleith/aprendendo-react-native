class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.items.map((receita,index)=>
          <h2> ingredientes </h2>
          {receita.ingredientes.map((ingrediente,index)=>
            <p>{ingrediente}</p>
            )}
        )}
      </div>
    )
  }
}

const items = [
  "1 Tofu",
  '1 Copo de Noses',
  '2 Copos Alface',
  '1 Abóbora Amarela',
  '1/2 Copo de Óleo de Oliva',
  '3 Dentes de Alho'
]

const preparo = [
  'Pré-aqueça o forno a 350 graus.',
  'Espalhe o óleo de oliva em torno de uma vasilha de vidro.',
  'Adicione o Tofu, o alho e as noses ao prato.',
  'Asse por 15 minutos.',
  'Adicione a abóbora amarela e coloque-a noforno por 30 minutos.',
  'Retire do forno e deixe esfriar por 15 minutos. Adicione a alface e sirva.'

]
ReactDOM.render(
  React.createElement(IngredientsList, {items}, null),
  document.getElementById('react-container')
)
