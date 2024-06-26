import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#EFD083" }}>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="MongoDB logo" className="h-10 inline" src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Cowboy_emoji_large.png?v=1571606089"></img>
          Mountain Bandits Inc.
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3 bg-white" to="/create">
          Create Joke
        </NavLink>
      </nav>
    </div>
  );
}