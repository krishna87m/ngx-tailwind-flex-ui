import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/Progress Bar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0 to 100)',
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'purple', 'red'],
      description: 'Color of the progress bar',
    },
    class: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for customization',
    },
  },
};

export default meta;

type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    progress: 50,
    color: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<lib-progress-bar [progress]="progress" [color]="color"></lib-progress-bar>`,
  }),
};

export const GreenProgress: Story = {
  args: {
    progress: 75,
    color: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `<lib-progress-bar [progress]="progress" [color]="color"></lib-progress-bar>`,
  }),
};

export const PurpleProgress: Story = {
  args: {
    progress: 30,
    color: 'success',
  },
  render: (args) => ({
    props: args,
    template: `<lib-progress-bar [progress]="progress" [color]="color"></lib-progress-bar>`,
  }),
};

export const RedProgress: Story = {
  args: {
    progress: 90,
    color: 'error',
  },
  render: (args) => ({
    props: args,
    template: `<lib-progress-bar [progress]="progress" [color]="color"></lib-progress-bar>`,
  }),
};

export const CustomStyled: Story = {
  args: {
    progress: 60,
    color: 'primary',
    class: 'h-6 rounded-lg',
  },
  render: (args) => ({
    props: args,
    template: `<lib-progress-bar [progress]="progress" [color]="color" [class]="class"></lib-progress-bar>`,
  }),
};
