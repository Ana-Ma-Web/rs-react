import PaginationArrowBtn from './PaginationArrowBtn';
import PaginationLimitButton from './PaginationLimitBtn';
import { characterAPI } from '../../services/CharacterService';

export default function Pagination() {
  const paginationLimitOptions = [5, 10, 15];
  const paginationData = characterAPI.useFetchAllCharactersQuery({
    limit: 5,
    page: 1,
    searchText: '',
  }).data?.pagination;

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
