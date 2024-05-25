import styled from 'styled-components';

export const HeroContainer = styled.div<{ $backgroundUrl?: string }>`
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    background-image: url(${props => props.$backgroundUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;