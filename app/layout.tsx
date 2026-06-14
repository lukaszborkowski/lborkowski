import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Łukasz Borkowski — Full Stack Dev & UX/UI Designer",
    description:
        "Portfolio of Łukasz Borkowski — Full Stack Developer and UX/UI Designer building modern applications from idea to deployment.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
