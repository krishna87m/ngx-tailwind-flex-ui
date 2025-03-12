import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styles: [], // No inline styles; Tailwind handles it
})
export class ProgressBarComponent {
  @Input() progress = 0; // Progress percentage (0 to 100)
  @Input() buffer = 100;
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' = 'primary'; // Color variants
  @Input() variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate'; // Progress type
  @Input() class = ''; // Allow users to pass custom Tailwind classes

  @HostBinding('class') get hostClasses() {
    return 'w-full bg-gray-200 rounded-full overflow-hidden h-4 relative';
  }

  get progressClasses() {
    const colorClasses = {
      primary: 'bg-blue-600',
      secondary: 'bg-green-600',
      success: 'bg-purple-600',
      error: 'bg-red-600',
    };
    return `${colorClasses[this.color]} transition-all duration-300 h-full`.trim();
  }

  getBufferClasses() {
    return 'absolute top-0 left-0 h-full bg-gray-400 opacity-30 transition-all duration-300';
}
}
