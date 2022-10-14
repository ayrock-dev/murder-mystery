export default function Page({ children }) {
  return (
    <>
      <div className="mt-8 bg-light min-h-screen relative">{children}</div>
      <div className="flex w-full h-8 absolute top-0">
        <div className="flex-1 bg-dark" />
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-light" />
      </div>
    </>
  );
}
