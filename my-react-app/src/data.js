import { useTranslation } from "react-i18next";
export const getCardsData = () =>{

    const {t} = useTranslation();
    
    return [
        { id: 1, number: "01" , title: t('nos_domaines_1') , para: t('service_1')},
        { id: 2, number: "02" , title: t('nos_domaines_2') , para: t('service_2')},
        { id: 4, number: "04" , title: t('nos_domaines_3') , para: t('service_3')},
        { id: 5, number: "05" , title: t('nos_domaines_4') , para: t('service_4')},
        { id: 6, number: "06" , title: t('nos_domaines_5') , para: t('service_5')},
        { id: 7, number: "07" , title: t('nos_domaines_6') , para: t('service_6')},
        { id: 8, number: "08" , title: t('nos_domaines_7') , para: t('service_7')},
        { id: 9, number: "09" , title: t('nos_domaines_8') , para: t('service_8')},
        { id: 3, number: "03" , title: t('nos_domaines_9') , para: t('service_9')},
]
}