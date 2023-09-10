import { component$, useSignal, useStore } from "@builder.io/qwik";

export default component$(() => {
    const formVisible = useSignal(false);
    const formState = useStore({
        name: '',
        message: '',
    })

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
                <form 
                preventDefault:submit
                onSubmit$={() => {
                    console.log(formState.name, formState.message);
                    formState.name = ''
                    formState.message = ''
                }}
                >
                    <div>
                        <label>Your name:</label>
                        <input
                        value={formState.name}
                        type="text"
                        placeholder="your name"
                        onInput$={(e) => formState.name = (e.target as HTMLInputElement).value}
                        />
                    </div>
                    <div>
                        <label>Your message:</label>
                        <textarea
                        value={formState.message}
                        onInput$={(e) => formState.message = (e.target as HTMLInputElement).value}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-red-800 text-white"
                        >
                        Send
                    </button>
                    <p>{formState.name}</p>
                    <p>{formState.message}</p>
                </form>
                )}
            </div>
        </article>
    )
})