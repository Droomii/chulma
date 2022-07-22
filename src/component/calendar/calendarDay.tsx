// Created by kdw0601 on 2022-07-22

import {Button, Text, TouchableOpacity, View} from 'react-native';

interface Props {
    day: number;
    lastDay: number;
    lastDayBefore: number;
    isActive: boolean;
    onPress: (day: number) => void;
}

const calendarDay = ({day, lastDay, lastDayBefore, isActive, onPress}: Props) => {

    return (
        <TouchableOpacity style={{flex: 1, backgroundColor: isActive ? 'lightblue' : undefined}}
            onPress={() => onPress(day)}>
            <Text style={{
                textAlign: 'center',
                color: day > -1 && day < lastDay ? undefined : 'lightgray'
            }}>
                {day > -1 ? (day % lastDay) + 1 : lastDayBefore + day + 1}
            </Text>
        </TouchableOpacity>
    );
};

export default calendarDay;