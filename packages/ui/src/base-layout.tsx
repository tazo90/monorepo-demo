export function BaseLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen items-center px-28 pt-6 pb-20">
      {children}
    </div>
  );
}
