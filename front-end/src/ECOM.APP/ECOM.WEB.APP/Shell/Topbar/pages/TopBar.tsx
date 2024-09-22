import React from 'react';
import BrandLogo from "../../../../ECOM.WEB.UTILS/Images/Logo.png";
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';
import '../../../../ECOM.WEB.UTILS/Styles/Buttons.css';

const TopBar = (props) => {
    const { t } = useTranslation();
    return (
        <section>
            <div style={{
                background: "#2E3D49", 
                display: "flex", 
                alignItems: "center", 
                padding: "10px"
            }}>

                <img src={BrandLogo} style={{ width: 80, height: 60 }} alt="Website Logo" />

                <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                    <div style={{ position: "relative", width: "500px",borderRadius:"6px"}}>
                        <div ref={props.dropdownWrapperRef} style={{ position: "absolute", left: "0", top: "0" }}>
                            <Dropdown
                                value={props.dropDownItems}
                                onChange={props.changeItem}
                                options={props.items}
                                optionLabel="name"
                                style={{
                                    border: "none",
                                    background: "#008080",
                                    cursor: "pointer",
                                }}
                                placeholder="ALL"
                                className="custom-dropdown w-full md:w-14rem"
                            />
                        </div>
                        
                        <input
                            type="text"
                            style={{
                                width: "100%",
                                height: "37.55px",
                                borderRadius:"6px",
                                paddingLeft: props.inputPadding,
                                textDecoration:"none",
                                border:"0px"
                            }}
                            placeholder="Enter something"
                        />
                    </div>
                </div>


                {/* Buttons on the right */}
                <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                    <Dropdown 
                        value={props.dropDownLanguage} 
                        onChange={props.changeLanguage}
                        options={props.languages} 
                        optionLabel="name" 
                        style={{ margin: "8px 10px" }}
                        placeholder="Select a language" 
                        className="w-full md:w-14rem" 
                    />
                    <button className="GlobalButtons" style={{ marginLeft: "10px" }}>
                        {t('Login')}
                    </button>
                    <button className="GlobalButtons" style={{ marginLeft: "10px" }}>
                        {t('Signup')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TopBar;
