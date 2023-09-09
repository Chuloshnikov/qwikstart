import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";


export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer
    class="bg-black text-white"
    >
      <div
      class="text-center px-10 py-12 items-center"
      >
          <p>&copy;Octorium Corporation 2023</p>

      </div>
    </footer>
  );
});
