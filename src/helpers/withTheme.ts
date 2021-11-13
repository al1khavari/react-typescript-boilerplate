import { FlattenSimpleInterpolation } from 'styled-components';

type StyleGenerator<T, C> = (theme: T, props: C) => FlattenSimpleInterpolation | string;
type StyleGenerators<T, C> = {
   [key: string]: (generator: StyleGenerator<T, C>) => (props: C) => FlattenSimpleInterpolation | string;
};

export const withTheme = <C extends WithThemeProps>(scheme: { [key: string]: ThemeScheme<any> }) => {
   const themeGenerators: StyleGenerators<any, C> = {};
   Object.keys(scheme).forEach((key) => {
      themeGenerators[key] = (generator: StyleGenerator<any, C>) => (props: C) =>
         generator(scheme[key][props.theme[key]], props);
   });

   return themeGenerators;
};

export type WithThemeProps = { theme: { [key: string]: string } };
export type ThemeScheme<T extends any> = { [key: string]: T };
