import React from 'react';
import styled, { css } from 'styled-components';
import { Stylable } from '@/types/commons';
import { withTheme, WithThemeProps } from '@/helpers/withTheme';
import * as scheme from './theme';

type SampleProps = Stylable & WithThemeProps;

const Sample: React.FC<SampleProps> = ({ className }: SampleProps) => <div className={className}>Sample Component</div>;

const theme = withTheme<SampleProps>(scheme);

export default styled(Sample)`
   ${theme.colors(
      (c: scheme.Colors) => css`
         background: ${c.background};
         color: ${c.color};
      `
   )}
`;
