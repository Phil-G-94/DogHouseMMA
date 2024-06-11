import "./globals.css";

export const metadata = {
    title: "Dog House MMA",
    description: "Woof woof!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
