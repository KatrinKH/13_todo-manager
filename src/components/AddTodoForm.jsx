import { useState } from 'react';

function AddTodoForm({ onAdd, isDark }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить новую задачу..."
        style={{
          padding: '8px',
          flex: 1,
          borderRadius: '4px',
          border: `1px solid ${isDark ? '#555' : '#ddd'}`,
          background: isDark ? '#333' : '#fff',
          color: isDark ? '#fff' : '#333',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddTodoForm;
