/**
 * Returns a promise which is resolved after the given duration of animation
 * @param {!Element} el - Element to be observed.
 * @param {!Object<string, string|number>} props - properties to be animated.
 * @param {number} durationMillis - duration of animation.
 * @param {string} curve - transition function for the animation.
 * @return {!Promise} Promise which resolves once the animation is done playing.
 */
export function transition(el: Element, props: {
    [x: string]: string | number;
}, durationMillis: number, curve: string): Promise<any>;
//# sourceMappingURL=animation.d.ts.map