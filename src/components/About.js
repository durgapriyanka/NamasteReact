import UserClass from "./UserClass";
import UserFunc from "./UserFunc";
import React from "react";

// const About = () =>
// {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This learning About Page</h2>
//             {/* <UserFunc name={"Priyanka Function"} location={"East Godavari /Khammam"} /> */}
//             <UserClass name = {"Priyanka Class"} location={"East Godavari/ Khammam"}/>
//         </div>
//     )
// }

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor")
  }

  componentDidMount()
  {
    console.log("Parent DidMount")
    
  }
  render() {
    console.log("Parent Render")

    return (
      <div>
        <h1>About Page</h1>
        <h2>This learning About Page</h2>
        {/* <UserFunc name={"Priyanka Function"} location={"East Godavari /Khammam"} /> */}
        <UserClass
          name={"Child1"}
          location={"East Godavari/ Khammam"}
        />
          {/* <UserClass
          name={"Child2"}
          location={"East Godavari/ Khammam"}
        /> */}
      </div>
    );
  }
}
export default About;
