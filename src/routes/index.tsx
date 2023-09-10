import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
  links: []
};
