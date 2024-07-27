import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import React from 'react';
import { getGroqChatCompletion } from '../../tools/aiTools';
import Markdown from 'react-markdown'

const IngredientsList = () => {

    const [alignment, setAlignment] = React.useState();
    const [clickState, setClickState] = React.useState([])
    const [inputState, setInputState] = React.useState([])
    const [responseState, setResponseState] = React.useState()


    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      setClickState(newAlignment)
    };
    
    const handleInputChange = (event) => {
        setInputState(event.target.value)
    }

    const handleClick = () => {
        getGroqChatCompletion(clickState.concat(inputState)).then((res) => {
            setResponseState(res.choices[0].message.content)
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
                            <ToggleButton value={"butter"}>Butter</ToggleButton>
                            <ToggleButton value={"white rice"}>White Rice</ToggleButton>
                            <ToggleButton value={"garlic"}>Garlic</ToggleButton>
                            <ToggleButton value={"sugar"}>Sugar</ToggleButton>
                            <ToggleButton value={"bread"}>Bread</ToggleButton>
                            <ToggleButton value={"onion"}>Onion</ToggleButton>
                            <ToggleButton value={"potato"}>Potato</ToggleButton>
                            <ToggleButton value={"carrot"}>Carrot</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='vegetables-greens' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        Vegetables & Greens
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
                            <ToggleButton value={"onion"}>Onion</ToggleButton>
                            <ToggleButton value={"shallot"}>Shallot</ToggleButton>
                            <ToggleButton value={"carrot"}>Carrot</ToggleButton>
                            <ToggleButton value={"bell pepper"}>Bell Pepper</ToggleButton>
                            <ToggleButton value={"potato"}>Potato</ToggleButton>
                            <ToggleButton value={"tomato"}>Tomato</ToggleButton>
                            <ToggleButton value={"celery"}>Celery</ToggleButton>
                            <ToggleButton value={"jalapeno"}>Jalapeno</ToggleButton>
                            <ToggleButton value={"cucumber"}>Cucumber</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='dairy-egg' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        Dairy & Eggs
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                        >
                            <ToggleButton value={"milk"}>Milk</ToggleButton>
                            <ToggleButton value={"eggs"}>Eggs</ToggleButton>
                            <ToggleButton value={"butter"}>Butter</ToggleButton>
                            <ToggleButton value={"cheese"}>Cheese</ToggleButton>
                            <ToggleButton value={"curd"}>Curd</ToggleButton>
                            <ToggleButton value={"butter"}>Butter</ToggleButton>
                            <ToggleButton value={"white rice"}>White Rice</ToggleButton>
                            <ToggleButton value={"garlic"}>Garlic</ToggleButton>
                            <ToggleButton value={"sugar"}>Sugar</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='dairy-egg' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        Fruits
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                        >
                            <ToggleButton value={"apple"}>Apple</ToggleButton>
                            <ToggleButton value={"banana"}>Banana</ToggleButton>
                            <ToggleButton value={"orange"}>Orange</ToggleButton>
                            <ToggleButton value={"mango"}>Mango</ToggleButton>
                            <ToggleButton value={"grapes"}>Grapes</ToggleButton>
                            <ToggleButton value={"grapefruit"}>Grapefruit</ToggleButton>
                            <ToggleButton value={"kiwi"}>Kiwi</ToggleButton>
                            <ToggleButton value={"strawberry"}>Strawberry</ToggleButton>
                            <ToggleButton value={"blueberry"}>Blueberry</ToggleButton>
                            <ToggleButton value={"blackberry"}>Blackberry</ToggleButton>
                            <ToggleButton value={"raspberry"}>Raspberry</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className='find-recipes-btn'>
            <Button onClick={handleClick} variant='contained' color='info'>Find Recipes</Button>
        </div>
        { responseState ?
            <div className="response-cover">
                <p>
                    <Markdown>{responseState}</Markdown>
                </p>
            </div>
            :
            null
        }
        </>
    );
};

export default IngredientsList;