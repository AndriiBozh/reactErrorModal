import "./ErrorModal.css";

const ErrorModal = (prop) => {
  return (
    // make the whole error modal window clickable, so we close it not only with 'ok' button
    <div className="error-modal" onClick={prop.errorModalIsOpen}>
      <p>{prop.errorMessage} </p>
      <button onClick={prop.closeErrorModal}>Ok</button>
    </div>
  );
};

export default ErrorModal;
