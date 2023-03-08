import styled from 'styled-components/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

export type TypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TypeStyleProps,
}

type ButtonProps = {
    edit: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 104px;
    bottom: 0px;
    background: #FAFAFA;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
`;

export const InformationsView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    position: absolute;
    height: 205px;
    left: 24px;
    right: 24px;
    top: 40px;
`;

export const HeaderInformation = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 327px;
    height: 76px;
`;

export const Title = styled.Text`
    width: 327px;
    height: 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #1B1D1E;
`;

export const Detail = styled.Text`
    width: 327px;
    height: 42px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #333638;
`;

export const DatetimeView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 327px;
    height: 47px;
`;

export const TitleDatetime = styled.Text`
    width: 327px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #1B1D1E;
`;

export const DetailDatetime = styled.Text`
    width: 327px;
    height: 21px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #333638;
`;

export const InsideDietView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 144px;
    height: 34px;
    background: #EFF0F0;
    border-radius: 1000px;
`;

export const ColorInsideDiet = styled.View<Props>`
    width: 8px;
    height: 8px;
    background: ${({ type }) => type === 'PRIMARY' ? '#639339' : '#BF3B44'};
    margin: 5px;
`;

export const TextInside = styled.Text`
    width: 96px;
    height: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1D1E;
`;

export const EditButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    position: absolute;
    height: 50px;
    left: 24px;
    right: 24px;
    bottom: 99px;
    background: #333638;
    border-radius: 6px;
`;

export const TextButton = styled.Text<ButtonProps>`
    width: 100px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${({edit}) => edit ? '#FFFFFF' : '#1B1D1E'};
`;

export const ExcludeButton = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    position: absolute;
    height: 50px;
    left: 24px;
    right: 24px;
    bottom: 40px;
    border: 1px solid #1B1D1E;
    border-radius: 6px;
`;

export const EditIconButton = styled(PencilSimpleLine).attrs(() => ({
    size: 22,
    color: '#fff'
}))`
    width: 18px;
    height: 18px;
    margin: 8px;
`;

export const ExcludeIconButton = styled(Trash).attrs(() => ({
    size: 22,
    color: '#1B1D1E'
}))`
    width: 18px;
    height: 18px;
    margin: 8px;
`;