import "./Modal.css";
export default function Modal({ visibility, message = null }) {
  if (visibility) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h1
            className="h"
            style={message ? { color: "red" } : { color: "green" }}
          >
            {message ? message : "Correct"}
          </h1>
        </div>
      </div>
    );
  } else <></>;
}
