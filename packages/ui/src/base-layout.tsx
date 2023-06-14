export function BaseLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-20 py-6">
      {children}
    </div>
  )
}