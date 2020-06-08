import React from 'react'


function Classes(props){
    return(
        <div>
            <h1> We are offering classes {props.className}</h1>
            <h1> which are starting from {props.startDay}</h1>
            <hr/>
        </div>
    )
}

export default Classes;