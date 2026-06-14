"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fontStack = `var(--font-poppins), 'Poppins', sans-serif`;

const theme = extendTheme({
    fonts: {
        heading: fontStack,
        body: fontStack,
    },
    styles: {
        global: {
            "html, body, #__next, *": {
                fontFamily: fontStack,
            },
        },
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
