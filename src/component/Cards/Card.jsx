import React from 'react'
import { CardContainer, SingleCard, CardIcon, CardTitle, CardPrice, ToggleContainer,ToggleTitle,Toggle } from './Card.style'

const Card= ()=> {
    return(
        <div>
        <CardContainer>
                <SingleCard >
                    <CardIcon style={{ backgroundColor: "#ffad7b"}}/>
                    <CardTitle>Arcade</CardTitle>
                    <CardPrice>9$/mo</CardPrice>
                    </SingleCard> 
                <SingleCard >
                    <CardIcon style={{ backgroundColor: "#f57e91" }} />
                    <CardTitle>Advanced</CardTitle>
                    <CardPrice>12$/mo</CardPrice>
                </SingleCard>
                <SingleCard >
                    <CardIcon style={{ backgroundColor: "#483dff" }} />
                    <CardTitle>pro</CardTitle>
                    <CardPrice>15$/mo</CardPrice>
                </SingleCard>
            </CardContainer>
            <ToggleContainer>
                <ToggleTitle >monthely</ToggleTitle>
                
                <ToggleTitle>yearly</ToggleTitle>
            </ToggleContainer>


        </div>
    )

}
export default Card;