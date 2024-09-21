import React from 'react';
import BrandLogo from "../../../ECOM.WEB.UI/Images/Logo.png";
import '../../../ECOM.WEB.UI/Styles/Buttons.css';
import { useTranslation } from 'react-i18next';

const TopBar = (props) => {
    const { t } = useTranslation();
    return(
        <section>
            <div style={{background:"black",display:"flex"}}>
                <img src={BrandLogo} style={{width:70, height:50}} alt="Website Logo"/>
                <div style={{marginLeft:"auto",display:"flex"}}>
                    <button className="Ecom-Ecom-Web-UI-Styles-Buttons-GLobalButtons">
                        {t('Login')}
                    </button>

                    <button className="Ecom-Ecom-Web-UI-Styles-Buttons-GLobalButtons">
                        {t('Signup')}
                    </button>

                    <div style={{display:"flex"}}>
                        <p style={{color:"white",padding:"0 5px 0 0"}}>Choose Language:</p>
                        <p style={{color:"white",padding:"0 5px 0 0"}}>English</p>
                        <label className="label">
                            <div className="toggle" 
                                 onClick={props.changeLanguage}
                                 style={{marginTop:"15px"}}>
                                <input
                                    className="toggle-state"
                                    type="checkbox"
                                    checked={props.currentLanguage === 'ar'}
                                    readOnly
                                />
                                <div className="indicator"></div>
                            </div>
</label>

                        <p style={{color:"white",padding:"0 5px 0 0"}}>Arabic</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopBar;