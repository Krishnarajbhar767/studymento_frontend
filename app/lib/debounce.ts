type Tfn = (...args: any[]) => any;
export function debounce(fn: Tfn, delay = 500): Tfn {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
