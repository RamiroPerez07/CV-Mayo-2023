import { Sheet } from "./components/Sheet/Sheet.jsx";
import { Heading } from "./components/Heading/Heading.jsx";
import { Section } from "./components/Section/Section.jsx";
import { EducationCard } from "./components/EducationCard/EducationCard.jsx";
import { myData } from "./data/cv-data.js";
import { WorkExperienceCard } from "./components/WorkExperienceCard/WorkExperienceCard.jsx";
import { RecognitionsCard } from "./components/RecognitionsCard/RecognitionsCard.jsx";
import { SkillsCard } from "./components/SkillsCard/SkillsCard.jsx";
import { CourseCard } from "./components/CoursesCard/CourseCard.jsx";

function App() {
  return (
    <>
      <Sheet>
        <Heading />
        <div className="divider" style={{marginTop: "10px", marginBottom: "10px"}}></div>
        <div className="cv-info-container">
          <Section title="Educación" className="section-education">
            {
              myData.education?.map(item => <EducationCard key={item.id} {...item} />)
            }
          </Section>
          <Section title="Experiencia Laboral" className="section-workexperience">
            {
              myData.workExperience?.map(item => <WorkExperienceCard key={item.id} {...item} />)
            }
          </Section>
          <Section title="Logros y reconocimientos" className="section-recognitionscard">
            {
              myData.recognitions?.map(item => <RecognitionsCard key={item.id} {...item} />)
            }
          </Section>
          <Section title="Herramientas y habilidades" className="section-skills">
              <SkillsCard skills={myData.skills} />
          </Section>
          <Section title="Cursos y certificaciones" className="section-courses">
          {
              myData.courses?.map(item => <CourseCard key={item.id} {...item} />)
            }
          </Section>
        </div>
      </Sheet>
    </>
  );
}

export default App;
