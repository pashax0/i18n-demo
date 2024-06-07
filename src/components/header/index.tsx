'use client';

import {getCookie, setCookie} from "@/app/actions";
import {ChangeEvent, useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {getServiceValue} from "@/components/header/helper";
import {SOME_CONSTANT} from "@/constants";
import Link from "next/link";

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
        await setCookie(event.target.value);
    }

    return <div>
        <div style={{border: '1px solid green', display: 'flex', justifyContent: 'space-between', padding: 10}}>
            <div style={{display: 'flex', gap: 6}}>
                <Link href="/">Main</Link>
                <Link href="/second">Second</Link>
            </div>
            <div style={{display: 'flex', gap: 6}}>
                <label htmlFor="lang-select">{t('client')}</label>

                <select name="pets" id="lang-select" onChange={handleChange} value={value}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="de">DE</option>
                </select>
            </div>
        </div>
        <p>{getServiceValue()}</p>
    </div>
}

export default Header