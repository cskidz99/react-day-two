import React from "react";

export default class Child extends React.Component{
  static defaultProps = {
    name: 'Dan',
    favoritePokemon: "Scyther"
  }
  render() {
		return (
			<div>
				Child Component -
        {this.props.name} -
        {this.props.favoritePokemon}
			</div>
		)
	}
}
