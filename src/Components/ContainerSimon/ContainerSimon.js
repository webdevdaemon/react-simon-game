import React, {Component} from 'react'
import {connect} from 'react-redux'

class ContainerSimon extends Component {

  _renderList() {
    return this.props.game.map((obj, index) => {
      return (
          <li key={index}>
              <p>{obj.name}</p>
              <p>{obj.age}</p>
          </li>
        )
    })
  }

  render() {
    return (
      <ul>
        {this._renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(
  mapStateToProps
)(ContainerSimon)
