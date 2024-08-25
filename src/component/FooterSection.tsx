import DATA from "../data/Data";
import "./FooterSection.css"

const FooterSection: React.FC<any> = (props: any) => {
    const addressLink = "https://www.google.com/maps/place/Rue+de+la+Couronne+7,+6210+Fleurus/@50.5174732,4.4791908,17z/data=!3m1!4b1!4m6!3m5!1s0x47c22bdd9a99b8e9:0xdc70f47f66e7f16d!8m2!3d50.5174732!4d4.4817657!16s%2Fg%2F11tk93ydn8?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D";
    return (
        <div className="FooterSection">
            <div className="FooterSectionContact">
                <div className="FooterSectionContactDiv">
                    <p className="FooterSectionSocialName">Email : </p>
                    <a className="FooterSectionContactEmail" href= {"mailto: " + DATA.email}>{DATA.email}</a>
                </div>
                <div className="FooterSectionContactDiv">
                    <p className="FooterSectionSocialName">Tel : </p>
                    <a href={"tel:" + DATA.tel}>{DATA.tel}</a>
                </div>
                <div className="FooterSectionContactDiv">
                    <p className="FooterSectionSocialName">Adresse : </p>
                    <a href={addressLink} target="_blank">{DATA.address}</a>
                </div>
            </div>
            <div className="FooterSectionSocial">
                <div className="FooterSectionSocialDiv">
                    <p className="FooterSectionSocialName">Facebook : </p>
                    <p className="FooterSectionSocialLink"><a href="https://www.facebook.com/simon.degroote.98" target="_blank">Simon Degroote</a></p>
                </div>
                <div className="FooterSectionSocialDiv">
                    <p className="FooterSectionSocialName">Instagram : </p>
                    <p className="FooterSectionSocialLink">à venir</p>
                </div>
                <div className="FooterSectionSocialDiv">
                    <p className="FooterSectionSocialName">Linkedin : </p>
                    <p className="FooterSectionSocialLink">à venir</p>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;