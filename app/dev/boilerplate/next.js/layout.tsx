export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center pt-4">
            <div className="flex flex-col gap-4 box-border max-md:px-8 max-md:w-full md:w-[45em]">
                {children}
            </div>
        </div>
    );
}