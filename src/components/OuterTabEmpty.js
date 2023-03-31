import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function OuterTabEmpty() {

    return (
        <Tabs defaultValue={0} >
            <TabList>
                <Tab/>
                <Tab/>
                <Tab/>
            </TabList>
            <TabPanel value={0} sx={{ p: 2 }}></TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}></TabPanel>
            <TabPanel value={2} sx={{ p: 2 }}></TabPanel>
        </Tabs>
    );
}