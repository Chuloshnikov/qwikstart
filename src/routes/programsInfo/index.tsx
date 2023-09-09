import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
    const programs = useStore([
        {
            id: 1,
            title: "The Eternal Wanderer",
            benefits: "Gain the ability to travel through time and space without the constraints of age or illness.",
            price: "Your soul will forever wander the cosmos, never to find a permanent resting place.",
        },
        {
            id: 2,
            title: "The Midas Touch",
            benefits: "Everything you touch turns to gold, granting you unimaginable wealth and luxury.",
            price: "However, you'll never be able to experience human touch again. Your soul will forever yearn for warmth and connection.",
        },
        {
            id: 3,
            title: "Infinite Wisdom",
            benefits: "Obtain knowledge beyond comprehension, understanding every mystery of the universe.",
            price: "With great knowledge comes great isolation. Your soul will be trapped in an eternal state of introspection, distant from the joys of ignorance and simplicity.",
        },
    ])
    return (
        <article>
            <h2>Programs for customers</h2>
            <div
            class="flex gap-10 justify-center"
            >
                {programs.map(plan => (
                    <div
                    class="flex flex-col gap-5 p-10 border-2 border-red-800 text-center max-w-[400px]"
                    key={plan.id}
                    >
                        <h3
                        class="text-4xl"
                        >
                            {plan.title}
                        </h3>
                        <p>{plan.benefits}</p>
                        <p>{plan.price}</p>
                    </div>
                    ))}
            </div>
        </article>
    )
})