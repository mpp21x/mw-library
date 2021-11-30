import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[mwRequiredLabel]'
})
export class RequiredLabelDirective implements OnInit {

  @Input() text = '*';
  @Input() isRequired = true;

  constructor(
    protected readonly elementRef: ElementRef,
    protected readonly renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    if (!this.isRequired) {
      return;
    }
    const child = document.createElement('strong');
    this.renderer.setStyle(child, 'margin', '5px');
    this.renderer.setProperty(child, 'className', 'text-danger h5');
    this.renderer.setProperty(child, 'innerText', this.text);
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    this.renderer.insertBefore(nativeElement, child, nativeElement.firstChild);
  }
}
