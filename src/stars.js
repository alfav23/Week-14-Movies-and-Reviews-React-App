// star rating component
import React from 'react';

export default class Stars extends React.Component {
    render(){
        return(
            <div id='stars'>
                <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Stars</label>
                    </div>
                    <select defaultValue='0' className="custom-select" id="inputGroupSelect01">
                        <option value='0'>Choose...</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
               </form> 
            </div>
        )
    }
}
// import { FaStar } from 'react-icons/fa'

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
// }

// const stars = Array(5).fill(0);
// const [currentValue, setCurrentValue] = React.useState(0);
// const [hoverValue, setHoverValue] = React.useState(undefined);

// const handleClick = value => {
//     setCurrentValue(value)
// };

// const handleMouseOver = value => {
//     setHoverValue(value)
// };

// const handleMouseLeave = () => {
//     setHoverValue(undefined)
// };

// export default class Stars extends React.Component {
//     render(){
//         return(
//             <div id='stars'>
//                 {stars.map((star, index) => {
//                     return (
//                         <FaStar 
//                             key={index} 
//                             size='24'
//                             color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
//                             onclick={() => handleClick(index + 1)}
//                             onMouseOver={() => handleMouseOver(index + 1)}
//                             onMouseLeave={() =>handleMouseLeave(index + 1)}
//                         />
//                     )
//                 })}
//             </div>
//         )

//     }
// }