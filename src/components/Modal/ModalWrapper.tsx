import React, {
  Component,
  createRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';
import classnames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dismiss: () => void;
}

export default class ModalWrapper extends Component<Props> {
  private dialog: RefObject<HTMLDivElement>;

  private lastFocus: HTMLElement | null = null;

  public constructor(props: Props) {
    super(props);

    this.dialog = createRef();
    this.enforceFocus = this.enforceFocus.bind(this);
    this.escape = this.escape.bind(this);
  }

  public componentDidMount(): void {
    this.saveLastFocus();

    this.moveFocusIntoDialog();

    // guard against infinite focus loop
    document.removeEventListener('focus', this.enforceFocus, true);
    document.addEventListener('focus', this.enforceFocus, true);

    document.addEventListener('keydown', this.escape, true);

    document.getElementsByTagName('body')[0].classList.add('is-modalOpened');
  }

  public componentWillUnmount(): void {
    document.getElementsByTagName('body')[0].classList.remove('is-modalOpened');

    document.removeEventListener('focus', this.enforceFocus, true);

    document.removeEventListener('keydown', this.escape, true);

    this.restoreLastFocus();
  }

  private enforceFocus({ target }: FocusEvent): void {
    // フォーカスがダイアログの外に当たっている場合
    if (
      target &&
      document !== target &&
      this.dialog.current !== target &&
      (this.dialog.current && !this.dialog.current.contains(target as Node))
    ) {
      this.dialog.current.focus();
    }
  }

  private escape({ which }: KeyboardEvent): void {
    // ESC キー
    if (which === 27) {
      const { dismiss } = this.props;

      dismiss();
    }
  }

  private moveFocusIntoDialog(): void {
    if (this.dialog.current) {
      this.dialog.current.focus();
    }
  }

  private saveLastFocus(): void {
    this.lastFocus = document.activeElement as HTMLElement;
  }

  private restoreLastFocus(): void {
    if (this.lastFocus) {
      this.lastFocus.focus();
    }

    this.lastFocus = null;
  }

  public render(): JSX.Element {
    const { children, className, ...props } = this.props;

    // もっとうまい方法ありそう
    delete props.dismiss;

    return (
      <div
        {...props}
        className={classnames('Modal', className)}
        tabIndex={-1}
        role="dialog"
        aria-modal
        ref={this.dialog}
      >
        {children}
      </div>
    );
  }
}
