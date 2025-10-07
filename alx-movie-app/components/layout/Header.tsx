export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 p-4 bg-cyan-900 text-white">
      <div>
        <h1>MovieApp</h1>
      </div>
      <div>
        <ul className="flex gap-2 items-center list-none">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
