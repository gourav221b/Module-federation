import type { JSX } from 'solid-js';

export const styles: Record<string, JSX.CSSProperties> = {
  container: {
    width: '100%',
    padding: '1rem',
  },
  tableContainer: {
    'background-color': 'white',
    'border-radius': '0.5rem',
    'box-shadow':
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  table: {
    'min-width': '100%',
    'border-collapse': 'separate',
    'border-spacing': '0',
  },
  tableHeader: {
    'background-color': '#F9FAFB',
  },
  tableHeaderCell: {
    padding: '0.75rem 1.5rem',
    'text-align': 'left',
    'font-size': '0.75rem',
    'font-weight': '500',
    color: '#6B7280',
    'text-transform': 'uppercase',
    'letter-spacing': '0.05em',
  },
  tableRow: {
    'background-color': 'white',
  },
  tableRowHover: {
    'background-color': '#F9FAFB',
  },
  tableCell: {
    padding: '1rem 1.5rem',
    'white-space': 'nowrap',
  },
  userInfo: {
    display: 'flex',
    'align-items': 'center',
  },
  userAvatar: {
    'flex-shrink': '0',
    height: '2.5rem',
    width: '2.5rem',
  },
  userAvatarImage: {
    height: '2.5rem',
    width: '2.5rem',
    'border-radius': '9999px',
  },
  userDetails: {
    'margin-left': '1rem',
  },
  userName: {
    'font-size': '0.875rem',
    'font-weight': '500',
    color: '#111827',
  },
  userGender: {
    'font-size': '0.875rem',
    color: '#6B7280',
  },
  contactInfo: {
    'font-size': '0.875rem',
    color: '#111827',
  },
  contactSubInfo: {
    'font-size': '0.875rem',
    color: '#6B7280',
  },
  actionButton: {
    'font-size': '0.875rem',
    'font-weight': '500',
    color: '#4F46E5',
    'margin-right': '1rem',
  },
  actionButtonHover: {
    color: '#4338CA',
  },
  deleteButton: {
    'font-size': '0.875rem',
    'font-weight': '500',
    color: '#DC2626',
  },
  deleteButtonHover: {
    color: '#B91C1C',
  },
  modalOverlay: {
    position: 'fixed',
    inset: '0',
    'background-color': 'rgba(75, 85, 99, 0.5)',
    'overflow-y': 'auto',
    height: '100%',
    width: '100%',
  },
  modalContainer: {
    position: 'relative',
    'margin-top': '5rem',
    'margin-left': 'auto',
    'margin-right': 'auto',
    padding: '1.25rem',
    border: '1px solid #E5E7EB',
    width: '600px',
    'box-shadow':
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'border-radius': '0.375rem',
    'background-color': 'white',
  },
  modalTitle: {
    'font-size': '1.125rem',
    'font-weight': '500',
    'line-height': '1.5rem',
    color: '#111827',
    'margin-bottom': '1rem',
  },
  formGrid: {
    display: 'grid',
    'grid-template-columns': 'repeat(2, 1fr)',
    gap: '1rem',
  },
  formGroup: {
    display: 'block',
  },
  formLabel: {
    display: 'block',
    'font-size': '0.875rem',
    'font-weight': '500',
    color: '#374151',
    'margin-bottom': '0.25rem',
  },
  formInput: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    'font-size': '0.875rem',
    color: '#111827',
    border: '1px solid #D1D5DB',
    'border-radius': '0.375rem',
  },
  modalActions: {
    'margin-top': '1rem',
    display: 'flex',
    'justify-content': 'flex-end',
    gap: '0.5rem',
  },
  cancelButton: {
    padding: '0.5rem 1rem',
    'background-color': '#D1D5DB',
    color: '#374151',
    'border-radius': '0.375rem',
  },
  cancelButtonHover: {
    'background-color': '#9CA3AF',
  },
  saveButton: {
    padding: '0.5rem 1rem',
    'background-color': '#4F46E5',
    color: 'white',
    'border-radius': '0.375rem',
  },
  saveButtonHover: {
    'background-color': '#4338CA',
  },
};
