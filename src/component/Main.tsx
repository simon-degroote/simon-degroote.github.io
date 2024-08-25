import { AgCharts } from "ag-charts-react";
import DATA from "./../data/Data";
import "./Main.css"
import ExpertiseSection from "./ExpertiseSection";
import AnalyzeSection from "./AnalyzeSection";
import IsatLifeSection from "./IsatLifeSection";
import ProfessionalSection from "./ProfessionalSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";

function Main() {
    return (
        <>
          {DATA.address}
          <section className="personalSection">
            <img></img>
            <p>{DATA.name}</p>
            <p>{DATA.tel}</p>
            <p>{DATA.email}</p>
            <p>{DATA.address}</p>
            <p>{DATA.bio}</p>
          </section>
          <SkillsSection />
          <EducationSection />
          <ProfessionalSection />
          <IsatLifeSection />
          <AnalyzeSection />
          <ExpertiseSection />
        </>
    );
}

export default Main;