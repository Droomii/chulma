// Created by kdw0601 on 2022-07-19

import {Text, useWindowDimensions, View} from 'react-native';
import Day from './calendarDay';
import {useState} from 'react';

interface Props {

}


const date = new Date();
date.setDate(1);
const month = date.getMonth();
const weekDay = date.getDay();
const year = date.getUTCFullYear();
const lastDay = new Date(year, month + 1, 0).getDate();
const lastDayBefore = new Date(year, month, 0).getDate();

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

const weekDays = (
    <View style={{backgroundColor: 'green', flexDirection: 'row'}}>
        {Array(7).fill(0).map((v, i) => (
            <View key={i} style={{flex: 1}}>
                <Text style={{textAlign: 'center', color: i ? undefined : 'red'}}>
                    {WEEKDAY[i]}
                </Text>
            </View>
        ))}
    </View>
);

const Calendar = (props: Props) => {
    const [activeDay, setActiveDay] = useState(0);

    const handleClickDay = (day: number) => {
        if (day > -1 && day < lastDay) {
            setActiveDay(day);
            return;
        }

        if (day >= lastDay) {
            
        }
    };


    return (
        <View style={{flex: 1, backgroundColor: 'violet'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>{year}년 {month + 1}월</Text>
            {weekDays}
            {Array(6).fill(0).map((v, row) => (
                <View key={row} style={{flex: 1, backgroundColor: 'white', flexDirection: 'row'}}>
                    {Array(7).fill(0).map((v, col, arr, day = row * 7 + col - weekDay) => (
                        <Day key={day} day={day} lastDay={lastDay} lastDayBefore={lastDayBefore}
                            onPress={handleClickDay}
                            isActive={activeDay === day}/>
                    )
                    )}
                </View>
            ))}
        </View>
    );
};

export default Calendar;