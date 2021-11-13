import { ThemeScheme } from '@/helpers/withTheme';

const defaultColors = {
   background: 'rgba(54, 54, 54, 1)',
   color: '#FFF',
};

export type Colors = typeof defaultColors;
export const colors: ThemeScheme<Colors> = {
   dark: defaultColors,
};
