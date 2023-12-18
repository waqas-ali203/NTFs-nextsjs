'use client'
import React from 'react'

const Button = ({ title = "NFT", className }) => {
  return (
    <button className={`font-bold rounded-xl inline-block transition-transform transform hover:scale-95 ${className}`}>
      {title}
    </button>
  );
}

export default Button;
