import React, { memo, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default memo(function AllSelect({chageValueFunction, selectOptions}) {

    const [age, setAge] = React.useState(selectOptions[0]?.value || 0);

    const handleChange = (event) => {
        setAge(event.target.value);
        chageValueFunction(event.target.value)
    };

    useEffect( () => {
        setAge(selectOptions[0]?.value || 0)
    }, [selectOptions])

    return (
        <div>
            <FormControl sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: "10px" 
            }}>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    // autoWidth
                    sx={{
                        padding: "14px 10px",
                        backgroundColor: "#F6F6F6",
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        color: '#151515',
                        borderRadius: "10px",
                        '& .MuiInputBase-root': {
                            borderColor: "red",
                            outlineColor: "red",
                        },
                        '& .MuiSelect-select': {
                            padding: 0,
                            color: "#151515",
                            paddingRight: "22px !important",
                            // whiteSpace: 'nowrap',
                            // overflow: 'hidden',
                            // textOverflow: 'ellipsis'
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: "#F6F6F6",
                        },
                        '& .MuiOutlinedInput-notchedOutline:hover': {
                            borderColor: "#F6F6F6",
                        }
                    }}
                >
                    {
                        selectOptions.map((elem, index) => {
                            return <MenuItem  key={index} value={elem.value}>{elem.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
})