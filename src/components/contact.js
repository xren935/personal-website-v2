import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-md-2 text-center" id="contactBox">
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mpzpgevb"
                method="POST"
              >
                <h2>Let's get in touch!</h2>
                <hr />
                <p>
                  Thank you for sticking around till the end. Please feel free
                  to reach out to me using the form below :)
                </p>
                <div class="col-md-12">
                  <label>Your Email:</label>
                  <input type="email" name="email" />
                </div>
                <div class="col-md-12">
                  <label> Message:</label>
                  <input type="text" name="message" />
                </div>
                {status === "SUCCESS" ? (
                  <p>Thanks! I'll get back to you</p>
                ) : (
                  <div class="col-md-12">
                    <button type="small" class="btn btn-danger">
                      Say Hi
                    </button>
                  </div>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
