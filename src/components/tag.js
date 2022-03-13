import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ name }) => {
  const getTagColor = () => {
    switch (name) {
      case 'Code':
        return '#FF50F1'
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

  const tagColor = getTagColor();

  const styles = {
    color: tagColor,
    border: `2px solid ${tagColor}`,
    borderRadius: '20px',
    margin: '0 4px',
    padding: '2px 8px',
    fontWeight: 'bold'
  }

  return <Link to={`/tags/${name.toLowerCase()}`} style={styles}>{name}</Link>
}

export default Tag
