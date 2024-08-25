import DATA from "../data/Data";
import "./IsatLifeSection.css"

const IsatLifeSection: React.FC<any> = (props: any) => {
    return (
        <section className="isatLifeSection">
            <p className="isatLifeSectionTitle">Mon implication dans la vie de l’ISAT </p>
            {
                DATA.isatLife.map((isat) => {
                    return <div className="isatLifeItem">
                        <p className="isatLifeItemTitle">{isat.title}</p>
                        <p className="isatLifeItemText">{isat.description}</p>
                    </div>
                })
            }
          </section>
    )
}

export default IsatLifeSection;