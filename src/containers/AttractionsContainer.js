import React, {Component} from 'react';
import SearchForm from '../components/SearchForm'
import AttractionsList from '../components/AttractionsList'

class AttractionsContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      attractions: []
    }
  }

//fetches back-end data
  componentDidMount() {
    fetch('http://localhost:3001/api/attractions')
    .then(response => response.json())
    .then(attractions => this.setState({attractions}))
  }

  render() {
    console.log(this.state.attractions)
    return (
        <div>
          <SearchForm submitQuery={this.submitFormHandler} />
          <AttractionsList attractions={this.state.attractions} />
        </div>
    )
  }
}

  //  console.log(props.attractionList)

export default AttractionsContainer;
