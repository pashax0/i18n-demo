import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";

const getT = async () => {
    if ((typeof window !== 'undefined' &&
        window.document && window.document.createElement)) {
        return useTranslations({namespace: 'Index'});
    }
    return await getTranslations({namespace: 'Index'});
}

const t = await getT();

export const SOME_CONSTANT = {
    value: t('constant')
}