import React, { useState, useEffect } from 'react';

const Task3 = () => {
    const array = ["AB", "AB", "ABF", "ABE"];
    const [duplicates, setDuplicates] = useState([]);

    const findDuplicates = () => {
        const seen = {};
        const duplicatesArray = array.filter(item => {
            if (seen.hasOwnProperty(item)) {
                return true;
            }
            seen[item] = true;
            return false;
        });
        setDuplicates(duplicatesArray);
    };

    useEffect(() => {
        findDuplicates();
    }, []); // Empty dependency array, so it runs once on component mount

    return (
        <div>
            Duplicates: {duplicates.join(', ')}
        </div>
    );
};

export default Task3;