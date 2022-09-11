import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HomeRoutingModule } from '../home-routing.module';
import { HomeContainerComponent } from './home-container.component';

export default {
  title: 'Home Container',
  component: HomeContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HomeContainerComponent> = (
  args: HomeContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
