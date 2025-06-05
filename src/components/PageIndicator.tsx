import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type PageIndicatorProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages?: number;
};

export const PageIndicator = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
}: PageIndicatorProps) => {
    
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        <MdNavigateBefore />
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <MdNavigateNext />
      </button>
    </>
  );
};
