// star rating component
import React from 'react';
import { FaStar } from 'react-icons/fa'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

const stars = Array(5).fill(0);
const [currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined);

const handleClick = value => {
    setCurrentValue(value)
};

const handleMouseOver = value => {
    setHoverValue(value)
};

const handleMouseLeave = () => {
    setHoverValue(undefined)
};

export default class Stars extends React.Component {
    render(){
        return(
            <div id='stars'>
                {stars.map((star, index) => {
                    return (
                        <FaStar 
                            key={index} 
                            size='24'
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onclick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={() =>handleMouseLeave(index + 1)}
                        />
                    )
                })}
            </div>
        )

    }
}