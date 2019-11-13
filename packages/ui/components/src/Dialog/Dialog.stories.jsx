import React from 'react';
import { storiesOf } from '@storybook/react';

import Dialog from './Dialog';
import DialogTitle from '../DialogTitle';
import DialogContent from '../DialogContent';
import DialogActions from '../DialogActions';
import Button from '../Button';

storiesOf('Dialog', module)
  .add('default', () => (
    <Dialog open>
      <DialogTitle>Прекрасный пример компонента Dialog!</DialogTitle>
      <DialogContent>
        Вы только посмотрите на этот замечательный компонент. Это его базовое
        состояние. Не правда ли выглядит замечательно? Дальше еще кнопочки
        будут!
      </DialogContent>
      <DialogActions>
        <Button size="small">Отменить</Button>
        <Button size="small" variant="regular">
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  ))
  .add('without close button', () => (
    <Dialog open>
      <DialogTitle showCloseButton={false}>
        Пример компонента Dialog без крестика справа!
      </DialogTitle>
      <DialogContent>
        Чтобы избавиться от кнопочки в правом верхнем углу, Вам стоит передать в
        компонент DialogTitle проп showCloseButton со значением false
      </DialogContent>
      <DialogActions>
        <Button size="small">Отменить</Button>
        <Button size="small" variant="regular">
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  ));
