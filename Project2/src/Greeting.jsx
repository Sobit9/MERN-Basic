// function Greeting(props){
//     return <h1>Hello {props.name}</h1>
// }

import PropTypes from "prop-types"

function Greeting(props) {
    const{ time, name} = props
    if (time === "evening") {
        return <h3>Good evening, {name}</h3>
    } else if (time === "morning") {
        return <h3>Good Morning, {name}</h3>
    }
    return <h3>Good afternoon, {name}</h3>
}

Greeting.propTypes ={
    name: PropTypes.string,
    time: PropTypes.string,
}

export default Greeting