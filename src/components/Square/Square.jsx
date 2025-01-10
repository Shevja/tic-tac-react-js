import React from 'react';
import styles from './Square.module.css'

function Square({ value, onClick }) {
    return (
        <div
            className={`${styles.square} ${value === 'X' ? 'square_x' : value === 'O' ? 'square_o' : ''}`}
            onClick={onClick}>
            {value}
        </div>
    );
}

export default Square;