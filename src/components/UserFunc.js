import { useState } from "react";

const UserFunc = (props) => 
{
    const [count] = useState(0);
    const [count2] = useState(2);
    const {name , location } = props;
    return (
        <div>
                <div>{name} from  {location}</div>
                <h3>Count: {count}</h3>
                <h3>Count2: {count2}</h3>
        </div>
    )
}

export default UserFunc;