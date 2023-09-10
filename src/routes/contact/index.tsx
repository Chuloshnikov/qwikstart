import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
    const formVisible = useSignal(false);

    return (
        <article
        class="text-center pt-12 flex flex-col gap-2"
        >
            <div>
                <h2>Contacts</h2>
                <p>
                    Nevada, fullhose st. 74
                </p>
                <p>
                +3456529607549495
                </p>
                <div>
                    <button
                    onClick$={() => formVisible.value = !formVisible.value}
                    class="px-4 py-2 bg-red-800 text-white"
                    >
                        Contact with us
                </button>
                </div>
                
                    
                {formVisible.value && (
                <form>
                    <div>
                        <label>Your name:</label>
                        <input
                        type="text"
                        placeholder="your name"
                        />
                    </div>
                    <div>
                        <label>Your message:</label>
                        <textarea></textarea>
                    </div>
                    <button
                        type="submit"
                    >
                        Send
                    </button>
                </form>
                )}
            </div>
        </article>
    )
})