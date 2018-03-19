class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // IMPLEMENTE
  }
}

const items = [
  "1 Tofu",
  // IMPLEMENTE
]

ReactDOM.render(
  React.createElement(IngredientsList, {items}, null),
  document.getElementById('react-container')
)
