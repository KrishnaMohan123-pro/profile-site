import React from "react";
import AppBar from "../../Components/Appbar/index";
import PersonalInfo from "../../Components/PersonalInfo/index"
import AcademicsInfo from "../../Components/AcademicsInfo/index"
import SkillsSection from "../../Components/Skills/index";
import ProjectsSection from "../../Components/Projects/index";
import { Container } from "@material-ui/core";
export default function Home(){
    return <main id="home-body">
    <AppBar/>
    <Container fixed>
        <PersonalInfo/>
        <AcademicsInfo/>
        <SkillsSection/>
        <ProjectsSection/>
    </Container>
    </main>
}