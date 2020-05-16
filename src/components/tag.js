import React from 'react';

const Tag = ({ name }) => {
  const getTagColor = () => {
    switch (name) {
      case 'Code':
        return '#031A6B';
      case 'Math':
        return '#034748';
      case 'Personal':
        return '#0A1128';
      case 'Science':
        return '#2541B2';
      default:
        return '#031A6B';
    }
  };

  const styles = {
    backgroundColor: getTagColor(),
    color: '#fff',
    border: `1px solid	${getTagColor()}`,
    borderRadius: '20px',
    margin: '0 4px',
    padding: '2px 4px',
    fontSize: '100%',
    fontWeight: 'bold',
  };

  return <span style={styles}>{name}</span>;
};

export default Tag;
