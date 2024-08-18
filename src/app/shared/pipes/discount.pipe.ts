import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: number, discount: number): any {
    const discountedPrice = value - value * (discount / 100);
    const html = `<div class="new-price">
     <span style="
        display: inline-block;
        padding: 5px 1rem;
        margin: 10px;
        background: transparent;
        border: 2px solid var(--accent-color);
        color: var(--accent-color);
        font-size: 1rem;
        font-weight: 400;">
        $${discountedPrice.toFixed(2)}
      </span>   
      <span style="text-decoration: line-through; color: grey;">
        $${value.toFixed(2)}
      </span>
      </div>`;

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
