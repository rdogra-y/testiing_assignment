import { Meta, StoryObj } from '@storybook/react';
import { default as Table } from './Table';
import { TableProps } from './Table.types';
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<TableProps>;
export declare const Default: Story;
export declare const Disabled: Story;
