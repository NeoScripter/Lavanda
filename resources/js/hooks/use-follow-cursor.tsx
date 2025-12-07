import { RefObject } from 'preact';
import { useEffect } from 'preact/hooks';

export default function useFollowCursor<T extends HTMLElement>(
    ref: RefObject<T>,
) {
    useEffect(() => {
        let currentAngle = 45,
            isHovering = false;

        const element = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (!element || !isHovering) return;

            const rect = element.getBoundingClientRect();

            // Get center of element
            const elemX = rect.left + rect.width / 2,
                elemY = rect.top + rect.height / 2;

            // Get mouse position
            const mouseX = e.clientX,
                mouseY = e.clientY;

            // Calculate angle in radians
            const deltaX = mouseX - elemX,
                deltaY = mouseY - elemY;
            const angleRad = Math.atan2(deltaY, deltaX);

            // Convert to degrees
            let angleDeg = angleRad * (180 / Math.PI);

            // Normalize angle difference to avoid spinning
            let diff = angleDeg - currentAngle;

            // Adjust for crossing the ±180° boundary
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;

            currentAngle += diff;

            // Apply rotation style
            element.style.transform = `rotate(${currentAngle}deg)`;
        };

        const handleMouseEnter = () => {
            isHovering = true;
        };

        const handleMouseLeave = () => {
            isHovering = false;
            if (!element) return;
            element.style.transform = `rotate(${45}deg)`;
        };

        const parent = ref.current?.parentElement;
        if (!parent || !element) return;
        element.style.transform = `rotate(${currentAngle}deg)`;

        const controller = new AbortController();
        const signal = controller.signal;

        parent.addEventListener('mouseenter', handleMouseEnter, { signal });
        parent.addEventListener('mouseleave', handleMouseLeave, { signal });
        window.addEventListener('mousemove', handleMouseMove, { signal });

        return () => {
            controller.abort();
        };
    }, [ref]);
}
