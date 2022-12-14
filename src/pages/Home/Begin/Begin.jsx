import React from 'react';
import { useTranslation } from 'react-i18next';
import begin from '../../../assets/header/img.png'

const Begin = () => {

    const {t, i18n} = useTranslation()

    return (
        <section className="begin">
            <div className="begin__content">
                <h2 className="begin__title">
                    <span className="begin__title-small">
                          бренд
                    </span>
                    <br/>
                    american vintage
                </h2>
                <a href="#" className="begin__link">
                    {t("begin.subtitle")}
                </a>
                <img src={begin} alt="" className="begin__img"/>
            </div>
        </section>
    );
};

export default Begin;