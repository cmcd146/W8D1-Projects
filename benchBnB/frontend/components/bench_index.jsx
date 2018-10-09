import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    // const benches = Object.keys(this.props.benches).map(id => <li key={id}>{this.props.benches[id].description}</li>);
    const benches = Object.keys(this.props.benches).map(id => <BenchIndexItem key={id} bench={this.props.benches[id]}/>);
    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
