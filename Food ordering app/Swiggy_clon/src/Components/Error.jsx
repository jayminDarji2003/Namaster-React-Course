// Created component using fnctional component
// function Error() {
//     return (
//         <div className='text-xl'>
//             Page not found!!
//         </div>
//     )
// }

// export default Error

// Created component using class base component
import React from 'react'
class Error extends React.Component{
    render(){
        return (
            <div>
                page not found!!
            </div>
        )
    }
}

export default Error