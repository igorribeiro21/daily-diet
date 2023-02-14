import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;

    width: 327px;
    height: 50px;

    background: #333638;
    border-radius: 6px;
`;

export const Title = styled.Text`
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`;