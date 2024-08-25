import { AgCharts } from "ag-charts-react";
import DATA from "./../data/Data";
import "./Main.css"
import ExpertiseSection from "./ExpertiseSection";
import AnalyzeSection from "./AnalyzeSection";
import IsatLifeSection from "./IsatLifeSection";
import ProfessionalSection from "./ProfessionalSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import FooterSection from "./FooterSection";
import PersonalSection from "./PersonalSection";
import NavBar from "./NavBar";

function Main() {
    return (
        <>
        <NavBar />
          <PersonalSection />
          <SkillsSection />
          <EducationSection />
          <ProfessionalSection />
          <IsatLifeSection />
          <AnalyzeSection />
          <ExpertiseSection />
          <FooterSection />
        </>
    );
}

export default Main;