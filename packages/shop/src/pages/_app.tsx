import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'site-settings/site-theme/default';
import { AppProvider } from 'contexts/app/app.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { CartProvider } from 'contexts/cart/use-cart';
import { useApollo } from 'utils/apollo';
import { useMedia } from 'utils/use-media';
import AppLayout from 'layouts/app-layout';

// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/multi-carousel/multi-carousel.style.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'assets/styles/global.style';

// Language translation messages
import { messages } from 'site-settings/site-translation/messages';
import 'typeface-lato';
import 'typeface-poppins';
// need to provide types
export default function ExtendedApp({ Component, pageProps }) {
  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 991px)');
  const desktop = useMedia('(min-width: 992px)');
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <LanguageProvider messages={messages}>
          <CartProvider>
            <AppProvider>
              <AuthProvider>
                <AppLayout>
                  <Component
                    {...pageProps}
                    deviceType={{ mobile, tablet, desktop }}
                  />
                </AppLayout>
                <GlobalStyle />
              </AuthProvider>
            </AppProvider>
          </CartProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
