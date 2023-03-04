import { TextName } from '@screens/Home/styles';
import {
    Container,
    Content,
    Form,
    ViewName,
    InputName,
    ViewDescription,
    TextDescription,
    InputDescription,
    ViewDatetime,
    ViewDate,
    TextDate,
    InputDate,
    ViewHour,
    TextHour,
    InputHour,
    ViewAreYouDiet,
    ButtonCheck,
    TextAreYouDiet,
    ViewCheck,
    ViewColor,
    TextColor,
    ButtonNewMeal,
    TextButton
} from './styles';

import { Header } from '@components/Header';

export function NewMeal() {
    return (
        <Container>
            <Header color='DEFAULT' text='Nova refeição' />
            <Content>
                <Form>
                    <ViewName>
                        <TextName>Nome</TextName>
                        <InputName />
                    </ViewName>
                    <ViewDescription>
                        <TextDescription>Descrição</TextDescription>
                        <InputDescription />
                    </ViewDescription>
                    <ViewDatetime>
                        <ViewDate>
                            <TextDate>Data</TextDate>
                            <InputDate />
                        </ViewDate>
                        <ViewHour>
                            <TextHour>Hora</TextHour>
                            <InputHour />
                        </ViewHour>
                    </ViewDatetime>
                    <ViewAreYouDiet>
                        <TextAreYouDiet>Está dentro da dieta?</TextAreYouDiet>
                        <ViewCheck>
                            <ButtonCheck type='PRIMARY' isActive>
                                <ViewColor type='PRIMARY' />
                                <TextColor>Sim</TextColor>
                            </ButtonCheck>
                            <ButtonCheck type='SECONDARY'>
                                <ViewColor type='SECONDARY' />
                                <TextColor>Não</TextColor>
                            </ButtonCheck>
                        </ViewCheck>
                    </ViewAreYouDiet>
                </Form>

                <ButtonNewMeal
                    onPress={() => { }}
                >
                    <TextButton>Cadastrar refeição</TextButton>
                </ButtonNewMeal>
            </Content>
        </Container>
    );
}