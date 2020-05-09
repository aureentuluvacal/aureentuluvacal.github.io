import React from 'react';

const Tag = ({ name }) => {
  const getTagColor = () => {
    switch (name) {
      case 'Code':
        return '#0014cc';
      case 'Math':
        return '#00ccb8';
      case 'Personal':
        return '#cc5200';
      case 'Science':
        return '#2b2f47'
      default:
        return '#0014cc';
    }
  };

  const styles = {
    backgroundColor: getTagColor(),
    color: '#fff',
    border: `1px solid	${getTagColor()}`,
    borderRadius: '20px',
    margin: '0 4px',
    padding: '2px 4px',
    fontWeight: 'bold'
  };

  return (<span style={styles}>{name}</span>);
}

export default Tag;