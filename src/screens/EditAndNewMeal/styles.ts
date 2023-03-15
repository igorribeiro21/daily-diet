import styled, { css } from 'styled-components/native';

export type TypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TypeStyleProps,
    isActive?: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    position: absolute;
    height: 132px;
    left: 0px;
    right: 0px;
    top: 0px;    

    background: #DDDEDF;
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

export const Form = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    position: absolute;
    height: 430px;
    left: 24px;
    right: 24px;
    top: 40px;
`;

export const ViewName = styled.View`
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 327px;
height: 70px;
`;

export const TextName = styled.Text` 
    width: 39px;
    height: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #333638;
`;

export const InputName = styled.TextInput`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    gap: 8px;
    width: 327px;
    height: 48px;
    border: 1px solid #DDDEDF;
    border-radius: 6px;
`;

export const ViewDescription = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 327px;
    height: 70px;
`;

export const TextDescription = styled.Text`
    width: 64px;
    height: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #333638;
`;

export const InputDescription = styled.TextInput`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    gap: 8px;

    width: 327px;
    height: 48px;
    border: 1px solid #DDDEDF;
    border-radius: 6px;
`;

export const ViewDatetime = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 327px;
    height: 70px;
`;

export const ViewDate = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 153px;
    height: 70px;
`;

export const TextDate = styled.Text`
    width: 32px;
    height: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #333638;
`;

export const InputDate = styled.TextInput`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    gap: 8px;
    width: 153px;
    height: 48px;
    border: 1px solid #DDDEDF;
    border-radius: 6px;
`;

export const ViewHour = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 153.5px;
    height: 70px;
    margin-left: 10px;
`;

export const TextHour = styled.Text`
    width: 32px;
    height: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #333638;
`;

export const InputHour = styled.TextInput`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    gap: 8px;
    width: 153.5px;
    height: 48px;
    border: 1px solid #DDDEDF;
    border-radius: 6px;
`;

export const ViewAreYouDiet = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 327px;
    height: 76px;
`;

export const TextAreYouDiet = styled.Text`
    width: 138px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #333638;
`;

export const ViewCheck = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 327px;
    height: 50px;
`;

export const ButtonCheck = styled.TouchableOpacity<Props>`

    ${({ type, isActive }) => isActive && css`
    border: 1px solid ${type === 'PRIMARY' ? '#639339' : '#BF3B44'};
    `}
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    width: 159.5px;
    height: 50px;
    background: ${({ type }) => type === 'PRIMARY' ? '#EFF0F0' : '#F4E6E7'};    
    border-radius: 6px;    
`;

export const ViewColor = styled.View<Props>`
    width: 8px;
    height: 8px;
    background: ${({ type }) => type === 'PRIMARY' ? '#639339' : '#BF3B44'};
`
export const TextColor = styled.Text`
    width: 30px;
    height: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1D1E;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
    position: absolute;
    height: 50px;
    left: 24px;
    right: 24px;
    bottom: 40px;
`;

export const ButtonNewMeal = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;  
    width: 330px;
    top: 550px;
    height: 50px;
    left: 12px;
    right: 24px;
    bottom: 40px;
    background: #333638;
    border-radius: 6px;
`;

export const TextButton = styled.Text`
    width: 119px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`;

