import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onshowclick = (e) => {
    this.setState({ onshowclick: !this.state.onshowclick });
  };

  onDeleteclick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteclick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Email: {email}</li>

            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
    deleteClickHandler: PropTypes.func.isRequired,
    
};
export default Contact;
