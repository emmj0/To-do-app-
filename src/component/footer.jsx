import React from 'react'

const currentyear = new Date();
const year = currentyear.getFullYear()

function footer() {
  return (
    <footer className="footer">
        CopyRight {year}
    </footer>
  )
}

export default footer
