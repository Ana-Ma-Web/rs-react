import { IPagination } from '@/models/IPagination';
import PaginationArrowBtn from './PaginationArrowBtn';
import PaginationLimitButton from './PaginationLimitBtn';

export default function Pagination(props: { paginationData: IPagination }) {
  const paginationLimitOptions = [5, 10, 15];
  const { paginationData } = props;

  return (
    <>
      {paginationData !== null &&
        paginationData !== undefined &&
        paginationData.items.count > 0 && (
          <div className="pagination">
            <PaginationArrowBtn type="left" paginationData={paginationData} />
            <div className="pagination__number">
              {paginationData.current_page}
            </div>
            <PaginationArrowBtn type="right" paginationData={paginationData} />
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
