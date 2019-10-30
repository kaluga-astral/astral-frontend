import React from 'react';
import Intro from './Intro';

const STEPS = [
  {
    id: 'organization',
    title: 'Организация',
    intro:
      'В данном разделе необходимо указать реквизиты вашей организации для выпуска сертификата цифровой подписи и отправки заявки на регистрацию  в системе ЭДО.',
  },
  {
    id: 'employee',
    title: 'Владелец ЭП',
    intro:
      'В этом разделе внесите данные лица, на которого будет выпущен сертификат электронной подписи.',
  },
  {
    id: 'identityDocument',
    title: 'Паспортные данные',
    intro: 'нету',
  },
  {
    id: 'cryptoprovider',
    title: 'Криптопровайдер',
    intro:
      'Выберите криптопровайдер, с помощью которого будет создан контейнер для электронной подписи.',
  },
];

const IntroExample = () => {
  const [introOpen, setIntroOpen] = React.useState(true);
  const handleIntroComplete = () => {
    setIntroOpen(false);
  };

  return (
    <>
      {STEPS.map(({ id, title }) => (
        <div key={id} id={id}>
          {title}
        </div>
      ))}
      <Intro
        open={introOpen}
        steps={STEPS.map(({ id, ...step }) => ({ ...step, element: `#${id}` }))}
        onComplete={handleIntroComplete}
      />
    </>
  );
};

export default IntroExample;
