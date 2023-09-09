import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgLogo from '../../../media/logo.svg?jsx';


export default component$(() => {
  return (
    <header class="p-5">
      <hav
      class="flex justify-between"
      >
        <div
        class="flex"
        >
          <ImgLogo
          class="h-16 w-16"
          alt="logo"
          />
          <h1
          class="text-6xl"
          >
            Octorium
          </h1>
        </div>
        <ul
        class="flex gap-3 text-xl font-semibold"
        >
          <li>
            <Link 
              class="hover:text-red-700 duration-300"
              href="/">
              Home
            </Link>
          </li>
          <li>
            <Link 
              class="hover:text-red-700 duration-300"
              href="/about">About
            </Link>
          </li>
          <li>
            <Link 
            class="hover:text-red-700 duration-300"
            href="/programsInfo">
              Programs
            </Link>
          </li>
          <li>
            <Link 
            class="hover:text-red-700 duration-300"
            href="/contact">
              Contacts
            </Link>
          </li>
        </ul>
      </hav>
    </header>
  );
});
