import { ColorsBackground, Container, IconArrowLeft, Text } from './styles'

type Props = {
    color: ColorsBackground,
    text: string;
};

export function Header({ color, text }: Props) {
    return (
        <Container color={color}>
            <IconArrowLeft />
            <Text>{text}</Text>
        </Container>
    );
}

