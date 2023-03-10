import React, { Component } from "react";

class AddContacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
    };
  }

  handleChange = (inputType, e) => {
    if (inputType === "name") {
      this.setState({
        name: e.target.value,
      });
      return;
    }
    this.setState({
      phone: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { addContact } = this.props;
    if (name && phone) {
      addContact(name, phone);
      this.setState({
        name: "",
        phone: "",
      });
    }
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div id="add-contacts-container">
        <h1>Add Contact</h1>
        <form>
          <input
            class="login-form-input"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => this.handleChange("name", e)}
          />
          <input
            class="login-form-input"
            placeholder="Enter Phone Number"
            value={phone}
            required
            onChange={(e) => this.handleChange("phone", e)}
          />
          <br />
          <button className="add-contact-btn" onClick={this.handleSubmit}>
            <b>Add Contact</b>
          </button>
        </form>
      </div>
    );
  }
}

export default AddContacts;