export class Paginator<T> {
  currentPage = 1;
  data: T[] = [];
  perPage = 10;
  total = 0;

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
  }

  setValue(currentPage: number, total: number, data: T[], perPage?: number) {
    this.currentPage = currentPage;
    this.total = total;
    this.data = data;
    if (perPage && typeof perPage === 'number') {
      this.perPage = perPage;
    }
  }
}
