import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ArrowDropDown, Delete } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { getGroqChatCompletion } from '../../tools/aiTools';
import Markdown from 'react-markdown'

const IngredientsList = () => {

    const [alignment, setAlignment] = React.useState();
    const [clickState, setClickState] = React.useState([])
    const [inputState, setInputState] = React.useState([])
    const [responseState, setResponseState] = React.useState()
    const bottomOfPanelRef = React.useRef(null)


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

    const handleClear = (event) => {
        setAlignment()
    }

    useEffect(() => {
        if (bottomOfPanelRef.current) {
            bottomOfPanelRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [responseState])

    return (
        <>
        <h2 className='ingredients-slogan'>Just Click on Your Ingredients and Start Finding Recipes!</h2>
        <div className='ingredients-container'>
            <div className='pantry-essentials' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/pantry.png')} width={30} height={30} alt='icon'/> Pantry Essentials
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
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
                        <img src={require('../../icons/vegetables.png')} width={30} height={30} alt='icon'/> Vegetables & Greens
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            <ToggleButton value={"artichoke"}>artichoke</ToggleButton>
                            <ToggleButton value={"asparagus"}>asparagus</ToggleButton>
                            <ToggleButton value={"bell pepper"}>Bell Pepper</ToggleButton>
                            <ToggleButton value={"broccoli"}>Broccoli</ToggleButton>
                            <ToggleButton value={"brussels sprouts"}>brussels sprouts</ToggleButton>
                            <ToggleButton value={"cabbage"}>Cabbage</ToggleButton>
                            <ToggleButton value={"carrot"}>Carrot</ToggleButton>
                            <ToggleButton value={"cauliflower"}>cauliflower</ToggleButton>
                            <ToggleButton value={"celery"}>Celery</ToggleButton>
                            <ToggleButton value={"cucumber"}>Cucumber</ToggleButton>
                            <ToggleButton value={"garlic"}>garlic</ToggleButton>
                            <ToggleButton value={"green beans"}>green beans</ToggleButton>
                            <ToggleButton value={"jalapeno"}>Jalapeno</ToggleButton>
                            <ToggleButton value={"kale"}>kale</ToggleButton>
                            <ToggleButton value={"lettuce"}>lettuce</ToggleButton>
                            <ToggleButton value={"mushrooms"}>mushrooms</ToggleButton>
                            <ToggleButton value={"onion"}>Onion</ToggleButton>
                            <ToggleButton value={"potato"}>Potato</ToggleButton>
                            <ToggleButton value={"shallot"}>Shallot</ToggleButton>
                            <ToggleButton value={"spinach"}>Spinach</ToggleButton>
                            <ToggleButton value={"tomato"}>tomato</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='fruits' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                       <img src={require('../../icons/fruits.png')} width={30} height={30} alt='icon'/> Fruits
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            <ToggleButton value={"apple"}>Apple</ToggleButton>
                            <ToggleButton value={"apricot"}>apricot</ToggleButton>
                            <ToggleButton value={"banana"}>Banana</ToggleButton>
                            <ToggleButton value={"blackberry"}>Blackberry</ToggleButton>
                            <ToggleButton value={"blueberry"}>Blueberry</ToggleButton>
                            <ToggleButton value={"cantaloupe"}>cantaloupe</ToggleButton>
                            <ToggleButton value={"cherry"}>cherry</ToggleButton>
                            <ToggleButton value={"coconut"}>coconut</ToggleButton>
                            <ToggleButton value={"cranberry"}>cranberry</ToggleButton>
                            <ToggleButton value={"durian"}>durian</ToggleButton>
                            <ToggleButton value={"grapes"}>Grapes</ToggleButton>
                            <ToggleButton value={"grapefruit"}>Grapefruit</ToggleButton>
                            <ToggleButton value={"guava"}>guava</ToggleButton>
                            <ToggleButton value={"honeydew"}>honeydew</ToggleButton>
                            <ToggleButton value={"kiwi"}>Kiwi</ToggleButton>
                            <ToggleButton value={"lemon"}>lemon</ToggleButton>
                            <ToggleButton value={"lime"}>lime</ToggleButton>
                            <ToggleButton value={"mango"}>Mango</ToggleButton>
                            <ToggleButton value={"orange"}>Orange</ToggleButton>
                            <ToggleButton value={"papaya"}>papaya</ToggleButton>
                            <ToggleButton value={"peach"}>peach</ToggleButton>
                            <ToggleButton value={"plum"}>plum</ToggleButton>
                            <ToggleButton value={"raspberry"}>Raspberry</ToggleButton>
                            <ToggleButton value={"watermelon"}>watermelon</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='dairy-egg' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/dairy-eggs.png')} width={30} height={30} alt='icon'/> Dairy & Eggs
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            <ToggleButton value={"butter"}>Butter</ToggleButton>
                            <ToggleButton value={"butter milk"}>Butter milk</ToggleButton>
                            <ToggleButton value={"cheese"}>Cheese</ToggleButton>
                            <ToggleButton value={"cream"}>Cream</ToggleButton> 
                            <ToggleButton value={"sour cream"}>sour cream</ToggleButton> 
                            <ToggleButton value={"whipped cream"}>whipped cream</ToggleButton> 
                            <ToggleButton value={"ice cream"}>ice cream</ToggleButton> 
                            <ToggleButton value={"eggs"}>Eggs</ToggleButton>
                            <ToggleButton value={"ghee"}>Ghee</ToggleButton>
                            <ToggleButton value={"milk"}>Milk</ToggleButton>
                            <ToggleButton value={"plain yogurt"}>Plain Yogurt</ToggleButton>
                            <ToggleButton value={"whey"}>whey</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='grains-carbs' id='flex-item'>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <img src={require('../../icons/grains-carbs.png')} width={30} height={30} alt='icon'/> Grains & Carbs
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup 
                            color="info"
                            value={alignment}
                            onChange={handleChange}
                            id='group-buttons'
                        >
                            <ToggleButton value={"barley"}>barley</ToggleButton>
                            <ToggleButton value={"corn"}>corn</ToggleButton>
                            <ToggleButton value={"kidney beans"}>kidney beans</ToggleButton>
                            <ToggleButton value={"millet"}>millet</ToggleButton>
                            <ToggleButton value={"oats"}>oats</ToggleButton> 
                            <ToggleButton value={"pasta"}>pasta</ToggleButton> 
                            <ToggleButton value={"quinoa"}>quinoa</ToggleButton> 
                            <ToggleButton value={"white rice"}>white rice</ToggleButton> 
                            <ToggleButton value={"brown rice"}>brown rice</ToggleButton> 
                            <ToggleButton value={"Corn Tortilla"}>Corn Tortilla</ToggleButton> 
                            <ToggleButton value={"Flour Tortilla"}>Flour Tortilla</ToggleButton> 
                            <ToggleButton value={"masa Tortilla"}>masa Tortilla</ToggleButton> 
                            <ToggleButton value={"wheat"}>wheat</ToggleButton>
                            <ToggleButton value={"whey"}>whey</ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className='clear-all-btn'>
            <Button startIcon={<Delete />} onClick={handleClear} variant='contained' color='error'>Clear</Button>
        </div>
        <div id='outlined-basic'><TextField onChange={handleInputChange} color='success' style={{ width: "350px" }} label="Other Ingredients or Dietary Lifestyles" variant="outlined" size='small'/></div>
        <div className='find-recipes-btn'>
            <Button onClick={handleClick} variant='contained' color='info'>Find Recipes</Button>
        </div>
        { responseState ?
            <>
                <div className="response-cover">
                    <p>
                        <Markdown>{responseState}</Markdown>
                    </p>
                </div>
                <div ref={bottomOfPanelRef}></div>
            </>
            :
            null
        }
        </>
    );
};

export default IngredientsList;