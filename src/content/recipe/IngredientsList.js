import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import React from 'react';
import { getGroqChatCompletion } from '../../tools/aiTools';

const IngredientsList = () => {

    const [alignment, setAlignment] = React.useState();
    const [clickState, setClickState] = React.useState([])
    const [inputState, setInputState] = React.useState([])


    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      setClickState(newAlignment)
    };
    
    const handleInputChange = (event) => {
        setInputState(event.target.value)
    }

    const handleClick = () => {
        getGroqChatCompletion(clickState.concat(inputState)).then((res) => {
            console.log(res.choices[0].message.content)
        })
    }


    return (
        <>
        <div id='outlined-basic'><TextField onChange={handleInputChange} color='success' label="Your Custom Ingredients" variant="outlined" size='small'/></div>
        <div className='ingredients-container'>
            <div className='pantry-essentials' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        Pantry Essentials
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                        >
                            <ToggleButton value={"flour"}>Flour</ToggleButton>
                            <ToggleButton value={"milk"}>Milk</ToggleButton>
                            <ToggleButton value={"eggs"}>Eggs</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='vegetables-greens' id='flex-item'>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        Vegetables and Greens
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                        >
                            <ToggleButton value={"broccoli"}>Broccoli</ToggleButton>
                            <ToggleButton value={"spinach"}>Spinach</ToggleButton>
                            <ToggleButton value={"cabbage"}>Cabbage</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className='find-recipes-btn'>
            <Button onClick={handleClick} variant='contained' color='info'>Find Recipes</Button>
        </div>
        </>
    );
};

export default IngredientsList;