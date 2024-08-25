import DATA from "../data/Data"
import "./AnalyzeSection.css"


const AnalyzeSection: React.FC<any> = (props: any) => {
    return (
        <section id="analyseSection" className="analyzeSection">
            <p className="analyzeSectionTitle">Mon analyse réflexive</p>
            <div className="analyzeSectionText">
            {
                DATA.analyze.text.map((t) => {
                    return <p className="analyzeSectionParagraph">{t}</p>
                })
            }
            </div>
            
            <div className="analyzeSectionList">
            {
                DATA.analyze.data.map((data) => {
                    return <div className="analyzeSectionItem">
                        <p className="analyzeSectionItemTitle" style={{color : data.color}}>{data.title}</p>
                        <ul className="analyzeSectionItemList">
                            {
                                data.points.map((p) => {
                                    return <li className="analyzeSectionItemListElement">{p}</li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
            </div>
          </section>
    )
}

export default AnalyzeSection;