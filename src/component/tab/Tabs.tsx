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
        name: 'CheckIn'
    },
    {
        label: '일정',
        name: 'Schedules'
    },
    {
        label: '정보',
        name: 'Info'
    },
];

const Tabs = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.tabs}>
            {menus.map(({label, name}, i) => (
                <TouchableOpacity key={i} onPress={() => navigation.navigate(name)} style={styles.tab}>
                        <Text>아이콘</Text>
                        <Text>{label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Tabs;