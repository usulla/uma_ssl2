import React, { Component } from "react";
import style from "./popup.scss";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const props = this.props;
    console.log(props, "props");
    return (
      <div className="modal_container">
        <div className="modal_back"></div>
        <div className="modal-blue__window modal-blue__window--pink">
          <div
            className="modal-blue__close"
            onClick={() => {
              props.onPopupShowChange(false);
            }}
          >
            <span></span>
            <span></span>
          </div>
          <div className="modal-blue__header">{props.popupData.title}</div>
          <div className="modal-blue__content">
            <div
              className={`${
                props.popupData.mailTitle !== undefined ? "modal-send" : ""
              } modal-blue__rules`}
            >
              {props.popupData.mailTitle !== undefined && (
                <React.Fragment>
                  <form>
                    <label htmlFor="isGoing">
                      <input
                        name="isGoing"
                        id="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                      />
                    </label>
                  </form>
                  <span
                    className="modal-blue__textrules"
                    dangerouslySetInnerHTML={{
                      __html: props.popupData.data
                    }}
                  ></span>
                </React.Fragment>
              )}
              {props.popupData.mailTitle === undefined && (
                <p
                  className="modal-blue__textrules"
                  dangerouslySetInnerHTML={{
                    __html: props.popupData.data
                  }}
                ></p>
              )}
            </div>
            {props.popupData.mailTitle !== undefined && (
              <a
                href={`mailto:talents@uma.tech?subject=${props.popupData.mailTitle}`}
                className={`${
                  this.state.isGoing ? "active" : "noLink"
                } post__button post__button--blue`}
                target="_blank"
              >
                Отправить
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;
