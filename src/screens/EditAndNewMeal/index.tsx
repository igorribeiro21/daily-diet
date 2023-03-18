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

import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { mealDTO } from '@storage/mealDTO';
import { createNewMeal } from '@storage/createNewMeal';

type RouteParams = {
    edit: boolean;
    meal?: mealDTO
}

export function EditAndNewMeal() {
    const navigation = useNavigation();
    const route = useRoute();
    const { edit, meal } = route.params as RouteParams;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);
    const [activeInside, setActiveInside] = useState(false);
    const [activeNoInside, setActiveNoInside] = useState(false);

    const onChangeDatePicker = (event: DateTimePickerEvent, newDate?: Date) => {
        let dateNow = new Date();
        let dateHour = new Date(newDate?.getFullYear() || dateNow.getFullYear(), newDate?.getMonth() || dateNow.getMonth(), newDate?.getDate(), hour?.getHours(), hour?.getMinutes());

        setShowDatePicker(false);
        setDate(dateHour || new Date);
    };

    const onChangeHourPicker = (event: DateTimePickerEvent, hour?: Date) => {
        setShowHourPicker(false);
        let dateHour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour?.getHours(), hour?.getMinutes());
        setDate(dateHour);
        setHour(dateHour || new Date());
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const showHourpicker = () => {
        setShowHourPicker(true);
    }

    async function handleCreateNewMeal() {
        try {
            let insideDiet = false;
            if (!name) {
                renderAlert('Favor preencher o campo nome');
                return;
            }

            if (!description) {
                renderAlert('Favor preencher o campo descrição!');
                return;
            }

            if (!activeInside && !activeNoInside) {
                renderAlert('Favor selecionar se está dentro da dieta ou não!');
                return;
            }

            if (activeInside)
                insideDiet = true;
            else if (activeNoInside)
                insideDiet = false;

            const obj: mealDTO = {
                date,
                description,
                name,
                insideDiet
            };

            await createNewMeal(obj);
            navigation.navigate('feedback', { insideDiet });
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível inserir a refeição');
        }
    }

    function renderAlert(text: string) {
        Alert.alert('Atenção!', text);
    }

    
    useEffect(() => {
        if (edit) {
            if (meal) {
                setName(meal.name);
                setDescription(meal.description);
                setDate(new Date(Date.parse(meal.date.toString())));
                if (meal.insideDiet)
                    setActiveInside(true);
                else
                    setActiveNoInside(true);
            }
        }
    }, []);

    return (
        <Container>
            <Header color='DEFAULT' text={edit ? 'Editar refeição' : 'Nova refeição'} />
            <Content>
                <Form>
                    <ViewName>
                        <TextName>Nome</TextName>
                        <InputName
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </ViewName>
                    <ViewDescription>
                        <TextDescription>Descrição</TextDescription>
                        <InputDescription
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                    </ViewDescription>
                    <ViewDatetime>
                        <ViewDate>

                            {showDatePicker && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    onChange={(e, date) => onChangeDatePicker(e, date)}
                                    minimumDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
                                />
                            )}

                            <TouchableOpacity onPress={showDatepicker}>
                                <TextDate>Data</TextDate>
                                <InputDate value={moment(date).format('DD/MM/YYYY')} editable={false} />
                            </TouchableOpacity>
                        </ViewDate>
                        <ViewHour>
                            <TouchableOpacity onPress={showHourpicker}>
                                {showHourPicker && (
                                    <DateTimePicker
                                        value={hour}
                                        is24Hour={true}
                                        mode='time'
                                        onChange={(e, date) => onChangeHourPicker(e, date)}
                                    />
                                )}
                                <TextHour>Hora</TextHour>
                                <InputHour value={moment(hour).format('HH:mm')} editable={false} />
                            </TouchableOpacity>
                        </ViewHour>
                    </ViewDatetime>
                    <ViewAreYouDiet>
                        <TextAreYouDiet>Está dentro da dieta?</TextAreYouDiet>
                        <ViewCheck>
                            <ButtonCheck
                                type='PRIMARY'
                                isActive={activeInside}
                                onPress={() => {
                                    setActiveInside(!activeInside)
                                    setActiveNoInside(activeNoInside ? false : activeNoInside)
                                }}
                            >
                                <ViewColor type='PRIMARY' />
                                <TextColor>Sim</TextColor>
                            </ButtonCheck>
                            <ButtonCheck
                                type='SECONDARY'
                                isActive={activeNoInside}
                                onPress={() => {
                                    setActiveNoInside(!activeNoInside)
                                    setActiveInside(activeInside ? false : activeInside)
                                }}
                            >
                                <ViewColor type='SECONDARY' />
                                <TextColor>Não</TextColor>
                            </ButtonCheck>
                        </ViewCheck>
                    </ViewAreYouDiet>
                </Form>

                <ButtonNewMeal
                    onPress={async () => await handleCreateNewMeal()}
                >
                    <TextButton>{edit ? 'Salvar alterações' : 'Cadastrar refeição'}</TextButton>
                </ButtonNewMeal>
            </Content>
        </Container>
    );
}