import '../styles/approve.css';
function Approve() {
  return (
    <>
      <div className="approve-container">
        <h2 className="text-center">Transaction Approved!</h2>
        <div className="o-circle c-container__circle o-circle__sign--success">
          <div className="o-circle__sign"></div>
        </div>
      </div>
    </>
  );
}

export default Approve;
