import * as React from 'react';
import {
    FormItem,
    Group,
    Header,
    Input, IS_PLATFORM_IOS, ModalPage, ModalPageHeader,
    ModalRoot,
    Panel,
    PanelHeaderBack, PanelHeaderButton,
    SelectMimicry,
    View
} from "@vkontakte/vkui";
import Search from "../Search";
import {Icon24Dismiss} from "@vkontakte/icons";

const calculateValue = (firstValue: number, firstCountry: { country?: string; value: any; }, secondCountry: { country?: string; value: any; }) => {
    // ерво\доллар = 0.75 \1 => евро = 0.75 * доллар
    //
    // рубль\доллар = 65 \1 => доллар = рубль / 65
    //
    // евро = 0.75 * (рубль / 65)

    const secondValue = String(secondCountry.value * (firstValue / firstCountry.value));

    return (secondValue === 'NaN' ? '' : secondValue);
}

const Change = (props: {setActiveView: any}) => {

    const [activeModal, setActiveModal] = React.useState({
        homeValue: null,
        currentValue: '',
    });

    const [currentCountry, setCurrentCountry] = React.useState({
        country: '',
        value: 0.0
    });

    const [currentCountry2, setCurrentCountry2] = React.useState({
        country: '',
        value: 0.0
    });

    const [firstMoney, setFirstMoney] = React.useState(0);
    const [secondMoney, setSecondMoney] = React.useState('');

    React.useEffect(
        () => {
            setSecondMoney(String(calculateValue(firstMoney, currentCountry, currentCountry2)));
        },
        [firstMoney, currentCountry, currentCountry2],
    );

    const modal = (
        <ModalRoot
            activeModal={(activeModal.currentValue === '') ? activeModal.homeValue : activeModal.currentValue}
        >
            <ModalPage
                id={'countries'}
                onClose={() => {
                    setActiveModal({
                        homeValue: null,
                        currentValue: ''
                    });
                }}
                header={
                    <ModalPageHeader
                        left={
                            <PanelHeaderBack label="Назад"
                                onClick={() => {
                                    setActiveModal({
                                        homeValue: null,
                                        currentValue: ''
                                    });
                                }}
                            />
                        }
                        right={
                            IS_PLATFORM_IOS &&
                                <PanelHeaderButton
                                    onClick={() => {
                                        setActiveModal({
                                            homeValue: null,
                                            currentValue: ''
                                        });
                                    }}
                                >
                                <Icon24Dismiss />
                            </PanelHeaderButton>
                        }
                    >
                        Выберите валюту
                    </ModalPageHeader>
                }
                settlingHeight={80}
            >
                <Group>
                    <Search
                        currentCountry={setCurrentCountry}
                        setActiveModal={setActiveModal}
                    />
                </Group>
            </ModalPage>

            <ModalPage
                id={'countries2'}
                onClose={() => {
                    setActiveModal({
                        homeValue: null,
                        currentValue: ''
                    });
                }}
                header={
                    <ModalPageHeader
                        left={
                            <PanelHeaderBack label="Назад"
                                             onClick={() => {
                                                 setActiveModal({
                                                     homeValue: null,
                                                     currentValue: ''
                                                 });
                                             }}
                            />
                        }
                        right={
                            IS_PLATFORM_IOS &&
                            <PanelHeaderButton
                                onClick={() => {
                                    setActiveModal({
                                        homeValue: null,
                                        currentValue: ''
                                    });
                                }}
                            >
                                <Icon24Dismiss />
                            </PanelHeaderButton>
                        }
                    >
                        Выберите валюту
                    </ModalPageHeader>
                }
                settlingHeight={80}
            >
                <Group>
                    <Search
                        currentCountry={setCurrentCountry2}
                        setActiveModal={setActiveModal}
                    />
                </Group>
            </ModalPage>
        </ModalRoot>
    );

    return (

        <View activePanel="modals" modal={modal}>
            <Panel id="modals">
                <Group header={<Header onClick={() => props.setActiveView('home')} mode="secondary">Назад</Header>}>
                    <FormItem top="Выберите валюту 1">
                        <SelectMimicry
                            placeholder="Не выбрана"
                            onClick={() => setActiveModal({
                                homeValue: null,
                                currentValue: 'countries'
                            })}
                        >{currentCountry.country}
                        </SelectMimicry>
                    </FormItem>
                    <FormItem top="Количество валюты 1">
                        <Input value={String(firstMoney)} onChange={e => setFirstMoney(Number(e.target.value))} type="number"/>
                    </FormItem>
                    <FormItem top="Выберите валюту 2">
                        <SelectMimicry
                            placeholder="Не выбрана"
                            onClick={() => setActiveModal({
                                homeValue: null,
                                currentValue: 'countries2'
                            })}
                        >{currentCountry2.country}
                        </SelectMimicry>
                    </FormItem>
                    <FormItem top="Количество валюты 2">
                        <Input value={secondMoney} type="string" disabled/>
                    </FormItem>
                </Group>
            </Panel>
        </View>
    )
}

export default Change;
