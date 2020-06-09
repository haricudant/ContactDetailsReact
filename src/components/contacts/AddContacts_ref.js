import React, { Component } from "react";

export default class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };

    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.com",
    phone: "777-777-777",
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className=" card mb-3">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="card-body">
              <label htmlfor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-md"
                placeholder="Enter Name.."
                defaultvalue={name}
                ref={this.nameInput}
              />

              <label htmlfor="Email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-md"
                placeholder="Enter email.."
                defaultvalue={email}
                ref={this.emailInput}
              />

              <label htmlfor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-md"
                placeholder="Enter Phone.."
                defaultvalue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
