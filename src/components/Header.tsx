import { useState } from "react";
import xebec from "../assets/logo.png";
import cartegories from "../data/categories.json";

function Header() {
  const [showing, itshowing] = useState(false);
  return (
    <header>
      <div className="flex flex-row p-4 ">
        <img src={xebec} className=" h-14" />
        <nav>
          <div className="p-3  font-bold first-letter:text-red-500 text-2xl text-neutral-950">
            <h1 className="font-bold">
              <b>
                <a href="/">SHOPHUB</a>
              </b>
            </h1>
            <div className="pl-80 flex flex-row pt-0">
              <ul className="flex flex-row text-base">
                {cartegories.map((element, index) => (
                  <a
                    key={index}
                    className="text-slate-500 hover:text-black hover:underline p-4 hidden sm:block md:block no-underline "
                    href={"/main?cartegory=" + element}>
                    <li>
                      {element} <hr className="hidden hover:block" />
                    </li>
                  </a>
                ))}
              </ul>
              <button
                className="block sm:hidden md:hidden rounded-md border w-9 h-9 bg-slate-600"
                onClick={() => itshowing(true)}>
                ...
              </button>

              {showing && (
                <div className="absolute top-10 left-0 bg-white rounded-md border shadow-lg flex flex-col">
                  {cartegories.map((element, index) => (
                    <a key={index} href={"/main?cartegory=" + element}>
                      {element}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
