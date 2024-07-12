import React, {useState} from 'react';
import Arrow_up_collapse from '../assets/images/Arrow/Arrow_up_collapse.png';
import '../styles/Collapse/Collapse.scss';

function Collapse ({ title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div className='collapse_item'>
                <button className='collapse_button' onClick={toggleCollapse}>
                    {title}
                    <img src={Arrow_up_collapse} alt="flèche pour ouvrir ou fermer le contenu" className={`arrow ${isOpen ? 'rotate' : ''}`}/>
                </button>
            </div>
            <div className={`collapse_content ${isOpen ? 'expand':'collapsed'}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;