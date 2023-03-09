import {
    Container,
    Title,
    ContentHeader,
    TextInsideDiet,
    Image,
    Button,
    TextButton
} from './styles';
import {
    Text
} from 'react-native';

import imageInsideDiet from '@assets/illustrationInsideDiet.png';
import imageOffDiet from '@assets/illustrationOffDiet.png';

type Props = {
    insideDiet?: boolean;
};

export function Feedback({ insideDiet }: Props) {
    console.log('insideDiet',insideDiet)
    return (
        <Container>
            <ContentHeader>
                <Title insideDiet={insideDiet}>{insideDiet ? 'Continue assim' : 'Que pena!'}</Title>
                <TextInsideDiet insideDiet={insideDiet}>
                    {insideDiet ? 'Você continua ' : 'Você '}
                    <Text style={{ fontWeight: 'bold' }}>{insideDiet ? 'dentro da dieta.' : 'saiu da dieta'}</Text>
                    {insideDiet ? ' Muito bem!' : ' dessa vez, mas continue se esforçando e não desista!'}
                </TextInsideDiet>
            </ContentHeader>

            <Image
                source={insideDiet ? imageInsideDiet : imageOffDiet}
            />

            <Button
                onPress={() => {}}
            >
                <TextButton>Ir para a página inicial</TextButton>
            </Button>
        </Container>
    );
}