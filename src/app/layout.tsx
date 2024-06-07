// NOTE: Fix build cookie error, but works strange
export const dynamic = 'force-dynamic'

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export default async function RootLayout({
                                           children
                                         }: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
      <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}