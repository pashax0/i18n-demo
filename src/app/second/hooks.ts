import {useTranslations} from "next-intl";

export const useData = () => {
    const t = useTranslations('Index');

    const constant = t('hook constant')
    return {
        constant
    }
}