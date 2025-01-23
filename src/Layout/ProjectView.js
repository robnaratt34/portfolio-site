import React, {useState} from "react";
import { Tab, Tabs } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Projects from "./Projects";
import { active } from "../data/active";

function ProjectView(props) {
    const {active, all} = props;

    const [value, setValue] = useState(1)

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    return (
        <div>
            <TabContext value={value}>
                <Tabs value = {value} onChange={handleChange}>
                    <Tab label="Active Projects" value = {1}/>
                    <Tab label="All Projects" value={2}/>            
                </Tabs>

                <TabPanel value={1}><Projects projects={active}/></TabPanel>
                <TabPanel value={2}><Projects projects={all}/></TabPanel>
            </TabContext>
        </div>
    )
}

export default ProjectView
