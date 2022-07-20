// Created by kdw0601 on 2022-07-20
import {Text, useWindowDimensions, View} from "react-native";
import styles from './Tabs.style';
import Calendar from "../calendar/Calendar";
import {Children, PropsWithChildren} from "react";

interface Props {

}

const Tabs = (props: PropsWithChildren<{}>) => {
    console.log(Children.map(props.children, v => {
        console.log(v)
    }))

    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Calendar/>
            </View>
            <View style={styles.tabs}>
                <View style={styles.tab}>
                    <Text>아이콘</Text>
                    <Text>출근체크</Text>
                </View>
                <View style={styles.tab}>
                    <Text>아이콘</Text>
                    <Text>일정</Text>
                </View>
                <View style={styles.tab}>
                    <Text>아이콘</Text>
                    <Text>정보</Text>
                </View>
            </View>
        </View>
    );
};

export default Tabs;