
export const isVisible = (
    currentPage: number,
    page: number,
    lastPage: number,
    isFirstLink: boolean,
    isLastLink: boolean,
) => {
    return (
        page === 1 ||
        page === lastPage ||
        isFirstLink ||
        isLastLink ||
        [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
        ].includes(page)
    );
};
