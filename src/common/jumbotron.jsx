function Stripe() {
  return (
    <div className="absolute left-1/2 right-1/2 w-full h-full bg-accent scale-y-[2.6] skew-y-[-10deg] md:skew-y-[-6deg] translate-x-[-50%] translate-y-[12%] md:translate-y-[22%]" />
  );
}

function Content({ children }) {
  return (
    <div className="text-light flex container mx-auto transform">
      {children}
    </div>
  );
}

export default function Jumbotron({ children }) {
  return (
    <header className="relative overflow-visible mx-auto w-full max-w-none">
      <Stripe />
      <Content>{children}</Content>
    </header>
  );
}
