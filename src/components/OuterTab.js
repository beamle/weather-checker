import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import InnerTab from "./InnerTab";
import {Swiper} from "swiper/react";
import SwiperInnerTab from "./SwiperInnerTab";

export default function OuterTab(props) {

    const firstDayDate = props.fetchedData.forecast.forecastday[0];
    const secDayDate = props.fetchedData.forecast.forecastday[1];
    const thirdDayDate = props.fetchedData.forecast.forecastday[2];

    return (
        <Tabs defaultValue={0} >
            <TabList>
                <Tab>{firstDayDate.date}</Tab>
                <Tab>{secDayDate.date}</Tab>
                <Tab>{thirdDayDate.date}</Tab>
            </TabList>
            {/*<TabPanel key={1} value={0} sx={{ p: 2 }}><InnerTab fetchedData={firstDayDate.hour}></InnerTab></TabPanel>*/}
            {/*<TabPanel key={2} value={1} sx={{ p: 2 }}><InnerTab fetchedData={secDayDate.hour}></InnerTab></TabPanel>*/}
            {/*<TabPanel key={3} value={2} sx={{ p: 2 }}><InnerTab fetchedData={thirdDayDate.hour}></InnerTab></TabPanel>*/}
            <TabPanel key={1} value={0} sx={{ p: 2 }}><SwiperInnerTab fetchedData={firstDayDate.hour}></SwiperInnerTab></TabPanel>
            <TabPanel key={2} value={1} sx={{ p: 2 }}><SwiperInnerTab fetchedData={secDayDate.hour}></SwiperInnerTab></TabPanel>
            <TabPanel key={3} value={2} sx={{ p: 2 }}><SwiperInnerTab fetchedData={thirdDayDate.hour}></SwiperInnerTab></TabPanel>
        </Tabs>
    );
}