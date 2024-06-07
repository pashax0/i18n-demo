import {getRequestConfig} from 'next-intl/server';
import {getCookie} from "@/services/actions";

export default getRequestConfig(async () => {
    try {
        const langCookie =  await getCookie();
        const locale =langCookie?.value ?? 'en';

        return {
            locale,
            messages: (await import(`../messages/${locale}.json`)).default
        };
    } catch (error) {
        console.error('i18n error:', error);
        return {
            locale: 'en',
            messages: (await import(`../messages/en.json`)).default
        };
    }
});