import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImage="model-s.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImage="model-y.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImage="model-3.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImage="model-x.jpg"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImage="solar-panel.jpg"
            leftButton="Order Now"
            rightButton="Learn More"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less than a New Roof Plus Solar panels"
            backgroundImage="solar-roof.jpg"
            leftButton="Order Now"
            rightButton="Learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImage="accessories.jpg"
            leftButton="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;