import { X } from 'lucide-react';
import Button from './Button';

export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2 id="modal-title">{title}</h2>
          <button className="icon-button" type="button" aria-label="Chiudi modale" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button variant="ghost" onClick={onClose}>Chiudi</Button>
        </div>
      </div>
    </div>
  );
}