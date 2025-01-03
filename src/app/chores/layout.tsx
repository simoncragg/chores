export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-col items-center p-8 pb-20 gap-16 max-w-screen-lg mx-auto overflow-x-auto">
      <main className="flex flex-col gap-8 w-full">
        {children}
      </main>
    </div>
  );
}
