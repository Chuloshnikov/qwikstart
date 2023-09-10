import { component$, useSignal } from "@builder.io/qwik";
import Modal from "~/components/modal/modal";

export default component$(() => {

    const modalVisible = useSignal(false);
    return (
        <article>
            <h2
            class="text-2xl"
            >
                About
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis, 
                adipisci praesentium maiores, optio rerum placeat sequi et minus quisquam 
                error hic dolore fugiat iusto iste ducimus exercitationem libero accusantium.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis, 
                adipisci praesentium maiores, optio rerum placeat sequi et minus quisquam 
                error hic dolore fugiat iusto iste ducimus exercitationem libero accusantium.
            </p>
            <button
            onClick$={() => modalVisible.value = !modalVisible.value}
            class="px-4 py-2 bg-red-800 text-white"
            >
                Open Modal
            </button>
            {modalVisible.value && (
                <Modal size="sm">
                    <div
                    q:slot="content"
                    >
                        <h1>Bad Joke</h1>
                        <p>Yehehey, ya takoi clever</p>
                        <p>want more?</p>
                    </div>
                    <div
                    q:slot="footer"
                    >
                        <button
                        class="px-4 py-2 bg-red-800 text-white"
                        >
                            Sign up now!
                        </button>
                    </div>
                </Modal>
            )}
        </article>
    )
})