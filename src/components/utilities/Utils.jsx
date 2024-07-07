import _ from "lodash";

const PaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageInArray = 7 + siblings
    if (totalPageInArray >= totalPage) {
        return _.range(1, totalPage + 1);
    }
    let leftSiblingIndex = Math.max(page - siblings, 1);
    let rightSiblingIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingIndex > 2;
    let showRightDots = rightSiblingIndex < (totalPage - 2);

    if (!showLeftDots && showRightDots) {
        let leftItemCount = 3 + (2 * siblings)
        let leftRange = _.range(1, leftItemCount + 1);
        return [...leftRange, "...", totalPage];
    } else if (showLeftDots && !showRightDots) {
        let rightItemCount = 3 + (2 * siblings)
        let rightRange = _.range(totalPage - rightItemCount + 1, totalPage + 1);
        return [1, "...", ...rightRange];
    } else {
        let middleRange = _.range(leftSiblingIndex, rightSiblingIndex + 1);
        return [1, "...", ...middleRange, "...", totalPage];
    }
}

export default PaginationRange;