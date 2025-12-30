export default function isNearCorner(index: number, cols = 8, rows = 7) {
    const row = Math.floor(index / cols);
    const col = index % cols;

    // Helper function to check if position is near a specific corner
    const isNearSpecificCorner = (cornerRow: number, cornerCol: number) => {
        const rowDiff = Math.abs(row - cornerRow);
        const colDiff = Math.abs(col - cornerCol);

        // Exact corner
        if (rowDiff === 0 && colDiff === 0) return true;

        // One row above/below corner (same column as corner)
        if (rowDiff === 1 && colDiff === 0) return true;

        // One column to the side (same row as corner)
        if (rowDiff === 0 && colDiff === 1) return true;

        return false;
    };

    // Check all 4 corners
    if (isNearSpecificCorner(0, 0)) return true; // top-left
    if (isNearSpecificCorner(0, cols - 1)) return true; // top-right
    if (isNearSpecificCorner(rows - 1, 0)) return true; // bottom-left
    if (isNearSpecificCorner(rows - 1, cols - 1)) return true; // bottom-right

    return false;
}
