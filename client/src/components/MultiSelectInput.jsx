import React, { useState } from 'react';

const MultiSelectInput = ({ fieldName, handleChange, options = [] }) => {
  const [selections, setSelections] = useState([]);

  const handleSelection = (selectedValue) => {
    console.log(selectedValue);
    let newSelections = selections;
    if (selections.includes(selectedValue)) {
      newSelections = selections.filter(
        (selection) => selection !== selectedValue
      );
    } else {
      newSelections = [...selections, selectedValue];
    }

    setSelections(newSelections);
    handleChange({ fieldName, selections: newSelections });
  };

  return (
    <select value={selections} multiple>
      {options.map((option) => (
        <option
          onClick={() => handleSelection(option._id)}
          key={option._id}
          value={option._id}
          selected="vegan"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectInput;
