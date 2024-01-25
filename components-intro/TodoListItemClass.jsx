import React from "react";
export class TodoListItemClass extends React.Component {
  render() {
    return (
      <>
        <input
          type="checkbox"
          name="nameCheckbox"
          id="nameCheckbox"
          defaultChecked={this.props.isComplete}
        />
        <label htmlFor="nameCheckbox">{this.props.children}</label>
      </>
    );
  }
}
