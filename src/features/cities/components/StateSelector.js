'use client'

import Select from "react-select";
import { useStates } from "../hooks/useStates";

function StateSelector({ value, onChange }) {
    const { data: states, isLoading } = useStates();

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: '100%',
            padding: '0.125rem',
            border: state.isFocused ? '1px solid #d1d5db' : '1px solid #d1d5db',
            borderRadius: '0.375rem',
            boxShadow: state.isFocused ? '0 0 0 2px #1B7F4B' : 'none',
            '&:hover': {
                borderColor: '#d1d5db'
            },
            minHeight: '42px'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '2px 8px'
        }),
        input: (provided) => ({
            ...provided,
            margin: '0',
            padding: '0'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '8px'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#1B7F4B' : state.isFocused ? '#E6F4EC' : 'white',
            color: state.isSelected ? 'white' : '#1f2937',
            '&:active': {
                backgroundColor: '#1B7F4B'
            }
        })
    };

    return (
        <div>
            <h3 className="text-primary-700 font-normal mb-2">Buscar Estado</h3>
            <Select
                options={states || []}
                isLoading={isLoading}
                placeholder="Selecione um estado..."
                value={value}
                onChange={onChange}
                getOptionValue={(option) => option.id}
                styles={customStyles}
            />
        </div>
    )
}

export default StateSelector