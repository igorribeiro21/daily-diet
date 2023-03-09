import {
    Container,
    Content,
    InformationsView,
    HeaderInformation,
    Title,
    Detail,
    DatetimeView,
    TitleDatetime,
    DetailDatetime,
    InsideDietView,
    ColorInsideDiet,
    TextInside,
    EditButton,
    EditIconButton,
    ExcludeButton,
    TextButton,
    ExcludeIconButton,
    ExcludeView,
    ModalExclude,
    TitleExclude,
    ViewButtons,
    ButtonCancel,
    TextButtonCancel,
    ButtonExclude,
    TextButtonExclude
} from './styles';
import { Header } from '@components/Header';

type Props = {
    insideDiet?: boolean;
};

export function Meal({ insideDiet }: Props) {
    return (
        <Container>
            <Header
                color={insideDiet ? 'PRIMARY' : 'SECONDARY'}
                text='Refeição'
            />
            <Content>
                <InformationsView>
                    <HeaderInformation>
                        <Title>Sanduíche</Title>
                        <Detail>Sanduíche de pão integral com atum e salada de alface e tomate</Detail>
                    </HeaderInformation>

                    <DatetimeView>
                        <TitleDatetime>Data e hora</TitleDatetime>
                        <DetailDatetime>12/08/2022 às 16:00</DetailDatetime>
                    </DatetimeView>

                    <InsideDietView>
                        <ColorInsideDiet type={insideDiet ? 'PRIMARY' : 'SECONDARY'} />
                        <TextInside>{insideDiet ? 'dentro da dieta' : 'fora da dieta'}</TextInside>
                    </InsideDietView>
                </InformationsView>

                <EditButton>
                    <EditIconButton />
                    <TextButton edit>Editar refeição</TextButton>
                </EditButton>

                <ExcludeButton>
                    <ExcludeIconButton />
                    <TextButton edit={false}>Excluir refeição</TextButton>
                </ExcludeButton>
            </Content>

            <ExcludeView>
                <ModalExclude>
                    <TitleExclude>Deseja realmente excluir o registro da refeição?</TitleExclude>

                    <ViewButtons>
                        <ButtonCancel>
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </ButtonCancel>
                        <ButtonExclude>
                            <TextButtonExclude>Sim, excluir</TextButtonExclude>
                        </ButtonExclude>
                    </ViewButtons>
                </ModalExclude>
            </ExcludeView>
        </Container>
    );
}