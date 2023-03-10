import { BackButton, ColorsBackground, Container, IconArrowLeft, Text } from './styles'

type Props = {
    color: ColorsBackground,
    text: string;
};
import { useNavigation } from '@react-navigation/native';

export function Header({ color, text }: Props) {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <Container color={color}>
            <BackButton onPress={handleGoBack}>
                <IconArrowLeft />
            </BackButton>
            <Text>{text}</Text>
        </Container>
    );
}

