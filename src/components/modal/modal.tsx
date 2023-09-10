import { Slot, component$ } from "@builder.io/qwik";

interface ModalProps {
    size: 'sm' | "lg"
}

export default component$((props: ModalProps) => {
    return (
        <div
        class="sm"
        >
            <div
                class=" w-full h-full fixed top-0 left-0 bg-black"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                <div
                    class="bg-white p-5 rounded-[8px] shadow-md mx-auto my-[100px] relative max-w-[90%]"
                    >
                    <div
                    class="absolute top-[10px] right-[10px] px-[8px] py-[4px] bg-[#dfdfdf] text-[#777] text-[12px] rounded-[4px] cursor-pointer"
                    >
                        close
                    </div>
                    <main
                    >
                        <Slot name="content"/>
                    </main>
                    <footer
                    class="pt-5 border-t-[1px] outline-dashed border-[#bbb]"
                    >
                        <Slot name="footer"/>
                    </footer>
                </div>
            </div>
        </div>
    )
})