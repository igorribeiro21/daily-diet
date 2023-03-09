import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export type TypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TypeStyleProps
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View<Props>`
    position: absolute;
    height: 200px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: ${({type}) => type === 'PRIMARY' ? '#E5F0DB' : '#F4E6E7'};
`;

export const TextPorcentage = styled.Text`
    position: absolute;
    width: 115px;
    height: 42px;
    left: 115px;
    top: 72px;

    font-weight: 700;
    font-size: 32px;
    line-height: 42px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #1B1D1E;
`;

export const TextDiet = styled.Text`
    position: absolute;
    height: 18px;
    left: 24px;
    right: 24px;
    top: 116px;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #333638;
`;

export const Content = styled.View`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 168px;
    bottom: 0px;
    background: #FAFAFA;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
`;

export const SubTitle = styled.Text`
    position: absolute;
    width: 118px;
    height: 18px;
    left: 118px;
    top: 33px;

    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #1B1D1E;
`;

export const ContentView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    
    position: absolute;
    height: 309px;
    left: 24px;
    right: 24px;
    top: 74px;
`;

export const BestSequelView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;

    width: 327px;
    height: 89px;

    background: #EFF0F0;
    border-radius: 8px;
    margin-top: 10px;
`;

export const MealsContentView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    margin-top: 10px;

    width: 327px;
    height: 107px;
`;

export const MealsView = styled.View<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    margin-right: 12px;
    width: 157.5px;
    height: 107px;

    background: ${({type}) => type === 'PRIMARY' ? '#E5F0DB' : '#F4E6E7'};
    border-radius: 8px;
`;

export const NumberQuantity = styled.Text`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #1B1D1E;
`;

export const Text = styled.Text`
    width: 295px;
    height: 18px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #333638;
    flex-grow: 0;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(() => ({
    size: 22,
    color: '#639339',
}))`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 24px;
    top: 56px;
`;


