import {useTranslations} from 'next-intl';
import Header from "@/components/header";
import { Metadata } from 'next'
import {getTranslations} from "next-intl/server";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function Index({ params }: Props) {
    const t = useTranslations('Index');

    return (
        <div>
            <Header />
            <h1>{t('title')}</h1>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations({ locale: 'de', namespace: 'Index'});

    return {
        title: t('metadata second page')
    };
}