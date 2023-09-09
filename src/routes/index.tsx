import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <div>
      Trololo
    </div>
  );
});

export const head: DocumentHead = {
  title: "Some things for first look",
  meta: [
    {
      name: "description",
      content: "Is it that fast?",
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
