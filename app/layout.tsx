import type { Metadata } from "next";
import { Providers } from "./providers";

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
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
