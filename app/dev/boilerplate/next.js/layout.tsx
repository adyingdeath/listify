import MainLayout from "@/layouts/MainLayout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MainLayout title="Boilerplate">
            {children}
        </MainLayout>
    );
}