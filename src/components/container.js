export const id = 'sketch';

export function getSize() {
    const { width: containerWidth, height: containerHeight } = document.getElementById(id).getBoundingClientRect();
    return { containerWidth, containerHeight };
}
