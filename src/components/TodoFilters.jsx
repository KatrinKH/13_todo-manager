function TodoFilters({ filter, onFilterChange, activeCount, isDark }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: `2px solid ${isDark ? '#444' : '#eee'}`,
    }}>
      <span>Осталось задач: {activeCount}</span>
      <div>
        {['all', 'active', 'completed'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              // Исправлено: закрывающая } и > на своих местах
              background: filter === filterType ? '#007bff' : (isDark ? '#444' : '#f0f0f0'),
              color: filter === filterType ? 'white' : (isDark ? '#eee' : '#333'),
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {filterType === 'all' ? 'Все' :
             filterType === 'active' ? 'Активные' : 'Выполненные'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoFilters;
