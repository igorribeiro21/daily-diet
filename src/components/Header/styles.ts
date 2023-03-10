import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export type ColorsBackground = 'PRIMARY' | 'SECONDARY' | 'DEFAULT';

type Props = {
    color: ColorsBackground;
};

function returnColor(color: ColorsBackground = 'DEFAULT') {
    if (color === 'PRIMARY')
        return '#E5F0DB';
    else if (color === 'SECONDARY')
        return '#F4E6E7';
    else if (color === 'DEFAULT')
        return '#DDDEDF';
}

export const Container = styled.View<Props>`
    position: absolute;
    height: 132px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: ${({ color }) => returnColor(color)};
`;

export const Text = styled.Text`
    position: absolute;
    width: 121px;
    height: 23px;
    left: 110px;
    top: 57px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1D1E;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(() => ({
    size: 22,
    color: '#333638',
}))`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 24px;
    top: 56px;
`;