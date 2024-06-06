'use client';

import {getCookie, setCookie} from "@/app/actions";
import {ChangeEvent, useEffect, useState} from "react";
import {SelectElement} from "@formatjs/icu-messageformat-parser";
import {useTranslations} from "next-intl";

const Header = () => {
    const t = useTranslations('Index');
    const [value, setValue] = useState('');

    useEffect(() => {
        async function getValue() {
            const val = await getCookie();
            setValue(val?.value ?? '');
        }

        getValue()
    }, []);

    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
        await setCookie( event.target.value);
    }

    return <div>
        <label htmlFor="lang-select">{t('client')}</label>

        <select name="pets" id="lang-select" onChange={handleChange} value={value}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="de">DE</option>
        </select>
    </div>
}

export default Header