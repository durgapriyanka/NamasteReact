import React from 'react';

class UserClass extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            userInfo :
            {
                login: "Dummy",
                location : "Dummy",
                avatar_url : "http://Dummy.com"
            }
        } //This is the state object which store all the state varibles in class component.
        console.log(props.name + 'Constructor')
    }

     async componentDidMount()
    {
        let data = await fetch ("https://api.github.com/users/ddontham18");
        let json = await data.json();
        
        this.setState({
            userInfo : json
        }
        )

    }
    render ()
    {
        const {login, location, avatar_url} = this.state.userInfo;
        console.log(login + 'render')

        return (
            <div>
                <div>{login} from  {location}</div>
                <img src= {avatar_url}></img>
                {/* <button onClick={() => {
                    this.setState({
                        count : this.state.count +1 
                    })
                }}>Increment Count</button> */}
            </div>
        )
    }
}

export default UserClass;