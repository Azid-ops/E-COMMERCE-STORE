import React from 'react';
import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import English from './ECOM.APP/ECOM.WEB.UTILS/Languages/en.json';
import Arabic from './ECOM.APP/ECOM.WEB.UTILS/Languages/ar.json';
import French from './ECOM.APP/ECOM.WEB.UTILS/Languages/french.json';

import ReactDOM from 'react-dom/client';
import './index.css';
import MainView from './ECOM.APP/ECOM.WEB.APP/Shell/MainView.tsx';

//#region Root Rendering
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


i18n.use(initReactI18next)
  .init({
      resources: {
          en: { translation: English },
          ar: { translation: Arabic },
          fr: { Translation: French}
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
          escapeValue: false 
      }
});

root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);
//#endregion
