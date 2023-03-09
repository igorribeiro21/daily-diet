import { ColorsBackground, Container, IconArrowLeft, Text } from './styles'

type Props = {
    color: ColorsBackground,
    text: string;
};
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Header({ color, text }: Props) {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <Container color={color}>
            <TouchableOpacity onPress={handleGoBack}>
                <IconArrowLeft />
            </TouchableOpacity>
            <Text>{text}</Text>
        </Container>
    );
}

