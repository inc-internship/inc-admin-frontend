import { HeaderLanguageSelect } from '../language-select'
import { Logo } from './Logo'
import s from './Header.module.scss'

/** Application top bar: brand wordmark on the left, language switcher on the right. */
export const Header = () => (
  <header className={s.container}>
    <Logo />
    <div className={s.actions}>
      <HeaderLanguageSelect />
    </div>
  </header>
)
