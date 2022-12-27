import {
    reactive,
    onMounted,
    onBeforeUnmount
} from "vue";

export default function usePointer() {
    let point = reactive({
        x: 0,
        y: 0,
    });
    const savePoint = (event) => {
        console.log(event);
        point.x = event.pageX;
        point.y = event.pageY;
    };
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });
    return point;
}