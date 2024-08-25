import './NavBar.css'

const NavBar: React.FC<any> = () => {
    return (
        <ul className='navbar'>
            <li className='navbarLink'><a href="/#aboutMeSection">Simon Degroote</a></li>
            <li className='navbarLink'><a href="/#skillsSection">Skills</a></li>
            <li className='navbarLink'><a href="/#educationSection">Education</a></li>
            <li className='navbarLink'><a href="/#experienceSection">Experiences pro</a></li>
            <li className='navbarLink'><a href="/#isatSection">ISAT</a></li>
            <li className='navbarLink'><a href="/#analyseSection">Analyse réflexive</a></li>
            <li className='navbarLink'><a href="/#pixSection">PIX</a></li>
            <li className='navbarLink'><a href="/visites">Visites d'entreprises</a></li>
            <li className='navbarLink'><a href={require('./../doc/cv.pdf')} target='_blank' rel='noopener noreferrer'>CV</a></li>
        </ul>
    )
}

export default NavBar;