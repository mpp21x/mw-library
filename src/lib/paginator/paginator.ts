import {PaginatorResponse} from '../../laravel/paginator-response';

export class Paginator<T> {
  currentPage = 1;
  data: T[] = [];
  perPage = 10;
  total = 0;


  constructor(currentPage = 1, total = 0, data: T[] = []) {
    this.currentPage = currentPage;
    this.total = total;
    this.data = data;
  }

  isNotEmpty(): boolean {
    return !!(this.data.length);
  }

  isEmpty(): boolean {
    return !(this.isNotEmpty());
  }

  showCurrentItemIndex(itemIndex: number) {
    return (this.perPage * (this.currentPage - 1)) + itemIndex;
  }

  reset() {
    this.currentPage = 1;
    this.data = [];
    this.perPage = 10;
    this.total = 0;
    return this;
  }

  setValueByPaginatorResponse<Dto>(res: PaginatorResponse<Dto>, fn?: (item: Dto) => T) {
    const models = fn ? res.data.map(fn) : res.data;
    return this.setValue(res.current_page,
      res.total,
      models as T[],
      res.per_page
    );
  }

  setValue(currentPage: number, total: number, data: T[], perPage?: number) {
    this.currentPage = currentPage;
    this.total = total;
    this.data = data;
    if (perPage && typeof perPage === 'number') {
      this.perPage = perPage;
    }
    return this;
  }
}
