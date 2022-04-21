export const Header = ({ status }) => {
  return (
    <>
      <h1>Employee Site</h1>
      {status !== "internalUser" ? (
        <div className="message">This is our team:</div>
      ) : (
        <div className="message">The summer employee picnic is on May 15.</div>
      )}
    </>
  );
};
