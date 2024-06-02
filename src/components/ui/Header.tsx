export const Header = () => {
  return (
    <header className="py-4 bg-white shadow">
      <div className="container mx-auto w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Uifry</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="btn-primary">Download</button>
      </div>
    </header>
  );
};
