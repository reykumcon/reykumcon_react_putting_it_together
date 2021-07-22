import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [ageValue, setAgeValue] = useState(age);
    const increaseAge = () => {
        setAgeValue(ageValue + 1);
    }
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h2>Age: {ageValue}</h2>
            <h3>HairColor: {hairColor}</h3>
            <button onClick={ increaseAge }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;