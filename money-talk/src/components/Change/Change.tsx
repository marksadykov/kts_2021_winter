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

const Change = () => {

    const [activeModal, setActiveModal] = React.useState({
        homeValue: null,
        currentValue: '',
    });

    const [currentCountry, setCurrentCountry] = React.useState('');

    const [firstMoney, setFirstMoney] = React.useState('0');

    const modal = (
        <ModalRoot
            activeModal={(activeModal.currentValue === '') ? activeModal.homeValue : activeModal.currentValue}
        >
            <ModalPage
                id={'countries'}
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
        </ModalRoot>
    );

    return (

        <View activePanel="modals" modal={modal}>
            <Panel id="modals">
                <Group header={<Header mode="secondary">Валюта 1</Header>}>
                    <FormItem top="Количество">
                        <Input value={String(firstMoney)} onChange={e => setFirstMoney(e.target.value)} type="number"/>
                    </FormItem>
                    <FormItem top="Выберите страну">
                        <SelectMimicry
                            placeholder="Не выбрана"
                            onClick={() => setActiveModal({
                                homeValue: null,
                                currentValue: 'countries'
                            })}
                        >{currentCountry}
                        </SelectMimicry>
                    </FormItem>
                </Group>
            </Panel>
        </View>
    )
}

export default Change;
