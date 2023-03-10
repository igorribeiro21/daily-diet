import styled, { css } from 'styled-components/native';

type Props = {
    insideDiet?: boolean;
};

export const Container = styled.View`
    flex: 1;
    background: #FAFAFA;
`;

export const ContentHeader = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;

    position: absolute;
    width: 311px;
    height: 81px;
    left: 20px;
    top: 160px;
`;

export const Title = styled.Text<Props>`
    ${({ insideDiet }) => insideDiet ? css`
        color: #639339;
    ` : css`
        color: #BF3B44;
    ` }
    width: 176px;
    height: 31px;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
`;

export const TextInsideDiet = styled.Text<Props>`
    ${({ insideDiet }) => insideDiet ? css`
        height: 21px;
    ` : css`
        height: 42px;
    ` }
    width: 311px;    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #1B1D1E;
`;

export const Image = styled.Image`
    position: absolute;
    width: 224px;
    height: 288px;
    left: 25px;
    top: 260px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    position: absolute;
    width: 191px;
    height: 50px;
    left: 80px;
    top: 580px;
    background: #333638;
    border-radius: 6px;
`;

export const TextButton = styled.Text`
    width: 143px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`