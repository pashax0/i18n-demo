import {useTranslations} from "next-intl";

export const getServiceValue = () => {
    const t = useTranslations('Index');

    return t('service on client')
}