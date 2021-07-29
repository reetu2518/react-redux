import React from 'react';

const Property = (props) => {
    const {data} = props
    return (
        <div>
            <h1>Property Component</h1>
            {data.name}
            {data.age}
        </div>
    );
};

export default Property;