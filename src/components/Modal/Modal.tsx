import { useEffect, useId, useRef, type ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible focus-trapped dialog for confirmations and multi-step flows — always wire `footer` with at least a Cancel and a primary action button so users have a clear escape path.
 * @example
 * <Modal
 *   open={isOpen}
 *   onClose={() => setOpen(false)}
 *   title="Confirm Cancellation"
 *   footer={
 *     <>
 *       <Button variant="outline" onClick={() => setOpen(false)}>Keep Appointment</Button>
 *       <Button variant="danger" onClick={handleCancel}>Cancel Appointment</Button>
 *     </>
 *   }
 * >
 *   Are you sure you want to cancel the appointment with Dr. Okafor on 14 Apr?
 * </Modal>
 */
export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // Store the element that had focus before the modal opened
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    // Focus the first focusable element inside the modal
    const timer = setTimeout(() => {
      const focusable =
        modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      // Restore focus to the previously focused element
      previousFocusRef.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }

    if (e.key === "Tab") {
      const focusable =
        modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  return (
    <div className="drp-overlay" role="presentation" onClick={onClose}>
      <div
        className="drp-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="drp-modal__header">
          <h2 className="drp-modal__title" id={titleId}>
            {title}
          </h2>
          <button
            className="drp-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="drp-modal__body">{children}</div>
        {footer && <div className="drp-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
