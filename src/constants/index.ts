import {getTranslations} from "next-intl/server";

const t = await getTranslations({locale: 'de',namespace: 'Index'});

export const SOME_CONSTANT = {
    value: t('constant')
}