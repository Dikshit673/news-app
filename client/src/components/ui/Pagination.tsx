type PaginateBoxProps = {
  label: string | number;
  isActive: boolean;
  onClick: () => void;
};

const PaginateBox = ({ label, isActive, onClick }: PaginateBoxProps) => {
  return (
    <li className={`page-item ${isActive && 'active'}`} onClick={onClick}>
      <span className='page-link'>{label}</span>
    </li>
  );
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginatingArray: (number | string)[];
  handlePagination: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  paginatingArray,
  handlePagination,
}: PaginationProps) => {
  const handleClick = (pageClicked: string | number) => {
    switch (pageClicked) {
      case '...':
        break;
      case '&laquo;':
        handlePagination(1);
        break;
      case '&raquo;':
        handlePagination(totalPages - 1);
        break;
      case '&lsaquo;':
        if (currentPage !== 1) {
          handlePagination(currentPage - 1);
        }
        break;
      case '&rsaquo;':
        if (currentPage !== totalPages) {
          handlePagination(currentPage + 1);
        }
        break;
      default:
        if (typeof pageClicked === 'string') break;
        handlePagination(pageClicked);
        break;
    }
  };
  return (
    <ul className='pagination pagination-md justify-content-center mt-4'>
      <PaginateBox
        label='&laquo;'
        isActive={false}
        onClick={() => handleClick('&laquo;')}
      />
      <PaginateBox
        label='&lsaquo;'
        isActive={false}
        onClick={() => handleClick('&lsaquo;')}
      />
      {paginatingArray.map((num, i) => (
        <PaginateBox
          key={i}
          label={num.toString()}
          isActive={num === currentPage}
          onClick={() => handleClick(num)}
        />
      ))}
      <PaginateBox
        label='&rsaquo;'
        isActive={false}
        onClick={() => handleClick('&rsaquo;')}
      />
      <PaginateBox
        label='&raquo;'
        isActive={false}
        onClick={() => handleClick('&raquo;')}
      />
    </ul>
  );
};

export default Pagination;
