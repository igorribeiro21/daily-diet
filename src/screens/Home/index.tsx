import { Container, ImageUser, Logo } from './styles';

import ellipse from '@assets/ellipse.png';
import logo from '@assets/logo.png';

export function Home() {
    return (
        <Container>
            <Logo
                source={logo}
            />

            <ImageUser
                source={ellipse}
            />
        </Container>
    );
}