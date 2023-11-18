import PaginationArrowBtn from './PaginationArrowBtn';
import PaginationLimitButton from './PaginationLimitBtn';
import { useAppSelector } from '../../hooks/redux';

export default function Pagination() {
  const paginationLimitOptions = [5, 10, 15];
  const { paginationData } = useAppSelector((state) => state.characterReducer);

  console.log(paginationData);
  return (
    <>
      {paginationData !== null &&
        paginationData !== undefined &&
        paginationData.items.count > 0 && (
          <div className="pagination">
            <PaginationArrowBtn type="left" />
            <div className="pagination__number">
              {paginationData.current_page}
            </div>
            <PaginationArrowBtn type="right" />
            <div>
              {paginationLimitOptions.map((e) => (
                <PaginationLimitButton key={e} limit={e ? e.toString() : '5'} />
              ))}
            </div>
          </div>
        )}
    </>
  );
}
