const createPaginationArray = (
  totalPage: number,
  page: number,
  limit: number,
  siblings: number
) => {
  const totalPageInArray = Math.min(totalPage, limit + siblings);
  if (totalPageInArray >= totalPage) {
    return Array.from({ length: totalPage }, (_, k) => k + 1);
  }

  const leftSiblingIndex = Math.max(page - siblings, 1);
  const rightSiblingIndex = Math.min(page + siblings, totalPage);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from({ length: 3 + 2 * siblings }, (_, k) => k + 1);
    return [...leftRange, '...', totalPage];
  } else if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + 2 * siblings },
      (_, k) => totalPage - (3 + 2 * siblings) + k + 1
    );
    return [1, '...', ...rightRange];
  } else {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, k) => leftSiblingIndex + k
    );
    return [1, '...', ...middleRange, '...', totalPage];
  }
};

export { createPaginationArray };
