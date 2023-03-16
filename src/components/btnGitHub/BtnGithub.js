import "./style.css"
import gitHubIcom from "./gitHub-black.svg"

const BtnGutHub = ({ link }) => {
    return ( 
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcom} alt=""/>
        GitHub repo
    </a> );
}
 
export default BtnGutHub;