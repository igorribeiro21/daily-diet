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

import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { mealDTO } from '@storage/meal/mealDTO';
import moment from 'moment';
import { deleteMeal } from '@storage/meal/deleteMeal';

type RouteParams = {
    meal: mealDTO;
};

export function Meal() {
    const navigation = useNavigation();
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    const [excludeModal, setExcludeModal] = useState(false);

    function handleEditMeal() {
        navigation.navigate('editAndNewMeal', { edit: true, meal })
    }

    function handleExcludeModal() {
        setExcludeModal(!excludeModal);
    }

    async function excludeMeal() {
        try {
            await deleteMeal(meal);
            navigation.navigate('home');
        } catch (error) {
            Alert.alert('Atenção',`Ocorreu um erro excluir a refeição: ${error}`);
        }
    }

    return (
        <Container>
            <Header
                color={meal.insideDiet ? 'PRIMARY' : 'SECONDARY'}
                text='Refeição'
            />
            <Content>
                <InformationsView>
                    <HeaderInformation>
                        <Title>{meal.name ? meal.name : ''}</Title>
                        <Detail>{meal.description ? meal.description : ''}</Detail>
                    </HeaderInformation>

                    <DatetimeView>
                        <TitleDatetime>Data e hora</TitleDatetime>
                        <DetailDatetime>{`${moment(meal.date).format('DD/MM/YYYY')} às ${moment(meal.date).format('HH:mm')}`}</DetailDatetime>
                    </DatetimeView>

                    <InsideDietView>
                        <ColorInsideDiet type={meal.insideDiet ? 'PRIMARY' : 'SECONDARY'} />
                        <TextInside>{meal.insideDiet ? 'dentro da dieta' : 'fora da dieta'}</TextInside>
                    </InsideDietView>
                </InformationsView>

                <EditButton onPress={handleEditMeal}>
                    <EditIconButton />
                    <TextButton edit>Editar refeição</TextButton>
                </EditButton>

                <ExcludeButton onPress={handleExcludeModal}>
                    <ExcludeIconButton />
                    <TextButton edit={false}>Excluir refeição</TextButton>
                </ExcludeButton>
            </Content>

            {
                excludeModal && (
                    <ExcludeView>
                        <ModalExclude>
                            <TitleExclude>Deseja realmente excluir o registro da refeição?</TitleExclude>

                            <ViewButtons>
                                <ButtonCancel onPress={handleExcludeModal}>
                                    <TextButtonCancel>Cancelar</TextButtonCancel>
                                </ButtonCancel>
                                <ButtonExclude onPress={excludeMeal}>
                                    <TextButtonExclude>Sim, excluir</TextButtonExclude>
                                </ButtonExclude>
                            </ViewButtons>
                        </ModalExclude>
                    </ExcludeView>
                )
            }
        </Container>
    );
}