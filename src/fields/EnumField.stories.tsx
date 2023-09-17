import type { Meta, StoryObj } from '@storybook/react';

import { EnumField } from './EnumField';
import { RecordContextProvider } from 'react-admin';
import { green } from '@mui/material/colors';

const meta = {
  title: 'Fields/EnumField',
  component: EnumField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    source: { description: 'where to get the value' },
    label: { description: 'unused but allow to set column name when used in datagrid' },
    options: {description: 'a map value => {color, label, description}'}
  },
  decorators: [
    (Story) => (
      <RecordContextProvider value={{stage: 'IN_PROGRESS'}}>
        <Story />
      </RecordContextProvider>
    ),
  ],
} satisfies Meta<typeof EnumField>;

export default meta;

type Story = StoryObj<typeof meta>;


export const LabelAndColor: Story = {
  args: {
    source: 'stage',
    options: {
      IN_PROGRESS: {
        label: 'In Progress',
        color: green,
      },
    }
  },
};


export const Description: Story = {
  args: {
    source: 'stage',
    options: {
      IN_PROGRESS: {
        label: 'In Progress',
        color: green,
        description: 'When a task is currently developped'
      },
    }
  },
};


export const CustomStyle: Story = {
  args: {
    source: 'stage',
    options: {
      IN_PROGRESS: {
        label: 'In Progress',
        color: green,
      },
    },
    sx: {
      height: 32,
    }
  },
};


export const DefaultValue: Story = {
  args: {
    source: 'stage',
  },
};
