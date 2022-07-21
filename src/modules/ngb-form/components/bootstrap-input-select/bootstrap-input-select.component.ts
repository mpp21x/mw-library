import {Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild} from '@angular/core';
import {PopupWindow} from '../../../event-listener/lib/popup-window';
import {GlobalClickEventListener} from '../../../event-listener/lib/global-click-event-listener';
import {unsubscribe} from '../../../../lib/rxjs/unsubscribe';

@Component({
  selector: 'mw-bootstrap-input-select',
  templateUrl: './bootstrap-input-select.component.html',
  styleUrls: ['./bootstrap-input-select.component.scss']
})
export class BootstrapInputSelectComponent extends PopupWindow implements OnChanges, OnDestroy {

  @Input() options: string[] = [];
  @Input() placeholder = '快速搜尋選項';

  @Output() selectedTags = new EventEmitter<string[]>();

  @ViewChild('tDropdown') tDropdown: ElementRef;

  displayOptions: string[] = [];
  inputFilter = '';
  currentOptionIndex = 0;
  isChecked = new Set<string>();

  constructor(
    readonly elementRef: ElementRef,
    readonly listener: GlobalClickEventListener
  ) {
    super(listener);
    this.subscribeClick(elementRef);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('options')) {
      this.displayOptions = this.options;
    }
  }

  ngOnDestroy(): void {
    unsubscribe([this.subscription]);
  }

  clickOption(option: string, $event) {
    setTimeout(() => {
      this.inputFilter = this.inputFilter === option ? '' : option;
      this.selectOptionAndEmit(option);
      this.collapse($event);
    }, 1);
  }

  selectOptionByKeyArrow(type: 'ArrowUp' | 'ArrowDown') {
    if (type === 'ArrowDown' && !this.isExpand) {
      this.expand();
    } else if (this.isExpand) {
      if (type === 'ArrowUp' && this.currentOptionIndex > 0) {
        this.currentOptionIndex -= 1;
      } else if (type === 'ArrowDown' && this.currentOptionIndex < this.displayOptions.length - 1) {
        this.currentOptionIndex += 1;
      }

      if (this.displayOptions.length <= 10 || !this.tDropdown) {
        return;
      }

      if (this.currentOptionIndex < Math.floor(this.tDropdown.nativeElement.scrollTop / 30)) {
        this.tDropdown.nativeElement.scrollTop -= 30;
      } else if (this.currentOptionIndex > Math.floor(this.tDropdown.nativeElement.scrollTop / 30) + 9) {
        this.tDropdown.nativeElement.scrollTop += 30;
      }
    }
  }

  enterSelection() {
    if (!this.isExpand) {
      return;
    }
    const option = this.displayOptions[this.currentOptionIndex];
    this.inputFilter = this.inputFilter === option ? '' : option;
    this.selectOptionAndEmit(option);
    this.collapse();
  }

  filterOptions() {
    if (!this.inputFilter) {
      this.displayOptions = this.options;
      return;
    }
    this.displayOptions = this.options;
    this.displayOptions = this.displayOptions.filter(option => option.includes(this.inputFilter));
    this.currentOptionIndex = 0;
    this.expand();
  }

  selectOptionAndEmit(option: string) {
    this.isChecked.has(option) ? this.isChecked.delete(option) : this.isChecked.add(option);
    this.selectedTags.emit(Array.from(this.isChecked));
  }
}
