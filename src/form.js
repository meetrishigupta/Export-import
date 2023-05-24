import React from "react";

const handSubmit = (e) => {
  e.preventDefault();
};
class Form extends React.Component {
  render() {
    return (
      <>
        <h3>A login page</h3>
        <form onSubmit={handSubmit}>
          <input type="text"></input>
          <input type="password"></input>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

function forms() {
  return <h1>rishi</h1>;
}

export { Form as Forming, forms };
