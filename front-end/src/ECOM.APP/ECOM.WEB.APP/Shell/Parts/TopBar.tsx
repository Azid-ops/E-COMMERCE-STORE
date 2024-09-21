import React from 'react';
import BrandLogo from "../../../ECOM.WEB.UI/Images/Logo.png";
import '../../../ECOM.WEB.UI/Styles/Buttons.css';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';

const TopBar = (props) => {
    const { t } = useTranslation();
    return(
        <section>
            <div style={{background:"black",display:"flex"}}>
                <img src={BrandLogo} style={{width:70, height:50}} alt="Website Logo"/>
                <div style={{marginLeft:"auto",display:"flex"}}>
                    <Dropdown 
                        value={props.dropDownLanguage} 
                        onChange={props.changeLanguage}
                        options={props.languages} 
                        optionLabel="name" 
                        style={{margin:"8px 10px"}}
                        placeholder="Select a language" 
                        className="w-full md:w-14rem" 
                    />
                    <button className="Ecom-Ecom-Web-UI-Styles-Buttons-GLobalButtons">
                        {t('Login')}
                    </button>

                    <button className="Ecom-Ecom-Web-UI-Styles-Buttons-GLobalButtons">
                        {t('Signup')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TopBar;