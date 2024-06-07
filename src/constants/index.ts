import {getTranslations} from "next-intl/server";

const t = await getTranslations({locale: 'de',namespace: 'Index'});
console.log('constants', t('constant'))

export const SOME_CONSTANT = {
    value: t('constant')
}