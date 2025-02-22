import React, { Component } from "react";
import './Message.css';

import FaTrash from "react-icons/lib/fa/trash";
import FaPencil from "react-icons/lib/fa/pencil";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.text,
      displayName: this.props.displayName
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleNameChange = this.handleNameChange.bind(this);
    this.edit = this.edit.bind( this );
  }

  handleChange( event ) {
    this.setState({ text: event.target.value });
  }

  handleNameChange( event ) {
    this.setState({ displayName: event.target.value });
  }

  edit( event ) {
    const { text } = this.state;
    const { id, edit } = this.props;
    if( event.key === "Enter" && text.length !== 0 ) {
      edit( id, text );
      this.setState({ editting: false });
    }
  }

  render() {
    const { id, displayName, text, time, edit, remove } = this.props;
    const { editting } = this.state;
    console.log( id, text );
    return (
      <div className="Message__container">
        <span className="Message__time">{time} {displayName}</span>
        {
          editting
          ?
            <input className="Message__input" value={ this.state.text } onChange={ this.handleChange } onKeyPress={ this.edit } />
          :
            <span className="Message__text">{text}</span>
        }
        <span className="Message__edit" onClick={ () => this.setState({ editting: !this.state.editting, text }) }> <FaPencil /> </span>
        <span className="Message__delete" onClick={ () => remove( id ) }> <FaTrash /> </span>
      </div>
      <div className="Message_container">
      <span className="Message__text">{displayName}</span>
      </div>
    )
  }
}