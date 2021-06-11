import { Omit } from '@material-ui/types';
import {
  ClassNameMap,
  Styles,
  WithStylesOptions,
  makeStyles as muiMakeStyles,
} from '@material-ui/styles';
import { Theme as AstralTheme } from '@astral-frontend/themes';

export function makeStyles<
  Props extends object = {},
  ClassKey extends string = string,
  Theme extends AstralTheme = AstralTheme
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>,
): keyof Props extends never
  ? (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  return muiMakeStyles(styles, options);
}
