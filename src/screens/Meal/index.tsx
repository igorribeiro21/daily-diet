import { Container, Content } from './styles';
import { Header } from '@components/Header';

type Props = {
    insideDiet: boolean;
};

export function Meal({ insideDiet }: Props) {
    return (
        <Container>
            <Header 
                color={insideDiet ? 'PRIMARY' : 'SECONDARY'}
                text='Refeição'
            />
            <Content>
                
            </Content>
        </Container>
    );
}