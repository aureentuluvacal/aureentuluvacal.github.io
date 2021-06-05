import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ name }) => {
  const getTagColor = () => {
    switch (name) {
      case 'Code':
        return '#0577CE'
      case 'Math':
        return '#8C55E5'
      case 'Personal':
        return '#B64E5C'
      case 'Science':
        return '#7be21d'
      default:
        return '#0577CE'
    }
  }

  const styles = {
    backgroundColor: getTagColor(),
    color: name === 'Science' ? '#000' : '#fff',
    border: `1px solid ${getTagColor()}`,
    borderRadius: '20px',
    margin: '0 4px',
    padding: '2px 8px',
    fontSize: '100%',
    fontWeight: 'bold'
  }

  return <Link to={`/tags/${name.toLowerCase()}`} style={styles}>{name}</Link>
}

export default Tag
