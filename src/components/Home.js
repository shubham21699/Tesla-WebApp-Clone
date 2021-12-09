import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model S" 
            description={["Order Online for ",<a>Touchless Delivery</a>]}
            backgroundImg="model-s.jpg" 
            LeftBtnText="Custom Order" 
            RightBtnText="Existing Inventory" />

            <Section title="Model Y" 
            description={["Order Online for ",<a>Touchless Delivery</a>]} 
            backgroundImg="model-y.jpg" 
            LeftBtnText="Custom Order" 
            RightBtnText="Existing Inventory" />

            <Section title="Model 3" 
            description={["Order Online for ",<a>Touchless Delivery</a>]} 
            backgroundImg="model-3.jpg" 
            LeftBtnText="Custom Order" 
            RightBtnText="Existing Inventory" />

            <Section title="Model X" 
            description={["Order Online for ",<a>Touchless Delivery</a>]} 
            backgroundImg="model-x.jpg" 
            LeftBtnText="Custom Order" 
            RightBtnText="Existing Inventory" />

            <Section title="Lowest Cost Solar Panels in America" 
            description="Money-back Guarantee" 
            backgroundImg="solar-panel.jpg" 
            LeftBtnText="Order Now" 
            RightBtnText="Learn More" />

            <Section title="Solar for New Roofs" 
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" 
            backgroundImg="solar-roof.jpg" 
            LeftBtnText="Order Now" 
            RightBtnText="Learn More" />

            <Section title="Accessories" 
            backgroundImg="accessories.jpg" 
            LeftBtnText="Shop Now" />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`
