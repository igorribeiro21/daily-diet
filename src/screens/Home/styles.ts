import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.View`
    flex: 1;    
`;

export const ImageUser = styled.Image`
    box-sizing: absolute;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 24px;
    top: 64px;
    //background: url(ellipse);
    border: 2px solid #333638;
    border-radius: 20px;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 82px;
    height: 37px;
    left: 24px;
    top: 66px;
`;

export const ViewPorcentage = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    gap: 2px;
    isolation: isolate;

    position: absolute;
    height: 102px;
    left: 24px;
    right: 24px;
    top: 136px;

    background: #e5f0db;
    border-radius: 8px;
`;

export const TextPorcentage = styled.Text`
    width: 115px;
    height: 42px;

    font-weight: 700;
    font-size: 32px;    

    display: flex;
    align-items: center;
    text-align: center;
`;

export const IconPorcentage = styled(ArrowUpRight).attrs(() => ({
    size: 22,
    color: '#639339',
}))`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 8px;
    top: 8px;
`;

export const ViewContains = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 88px;
    gap: 32px;

    position: absolute;
    height: 733px;
    left: 24px;
    right: 24px;
    top: 278px;
`;

export const TextContains = styled.Text`
    width: 72px;
    height: 21px;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #1B1D1E;
`;

export const ViewItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 16px 14px 12px;
    gap: 12px;

    width: 307px;
    height: 49px;

    border: 1px solid #DDDEDF;
    border-radius: 6px;
    margin-bottom: 10px;
`;

export const TextHour = styled.Text`
    width: 32px;
    height: 16px;

    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    align-items: center;

    color: #1B1D1E;
`;

export const TextTitle = styled.Text`
    width: 84px;
    height: 23px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    display: flex;
    align-items: center;

    color: #1B1D1E;
`;

export const TextName = styled.Text`
    width: 217px;
    height: 21px;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    display: flex;
    align-items: center;

    color: #333638;
`;

export const ItemActive = styled.View`
    width: 14px;
    height: 14px;
    background: #CBE4B4;
    border-radius: 20px;
`;

export const ItemInactive = styled.View`
    width: 14px;
    height: 14px;
    background: #F3BABD;
    border-radius: 20px;
`;