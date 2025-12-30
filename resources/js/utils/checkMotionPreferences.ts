export default function checkMotionPreferences() {
    const isMotionEnabled = window.matchMedia(
        '(prefers-reduced-motion: no-preference)',
    ).matches;

    return isMotionEnabled;
}
