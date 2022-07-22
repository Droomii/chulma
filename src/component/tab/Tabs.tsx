// Created by kdw0601 on 2022-07-20
import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './Tabs.style';
import Calendar from '../calendar/Calendar';
import {useNavigation} from '@react-navigation/native';

interface Props {

}

interface MenuItem {
    label: string;
    name: string;
}

const menus: MenuItem[] = [
    {
        label: '출석체크',
        name: 'check'
    },
    {
        label: '일정',
        name: 'schedule'
    },
    {
        label: '정보',
        name: 'info'
    },
];

const Tabs = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.tabs}>
            {menus.map(({label, name}, i) => (
                <TouchableOpacity key={i} onPress={() => navigation.navigate(name)}>
                    <View style={styles.tab}>
                        <Text>아이콘</Text>
                        <Text>{label}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Tabs;