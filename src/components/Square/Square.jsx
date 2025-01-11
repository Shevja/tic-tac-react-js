import React from 'react';
import styles from './Square.module.css'

function Square({ value, isHighlight, onClick }) {
    return (
        <div
            className={`
                ${styles.square} 
                ${value === 'X' ? styles.square_x : value === 'O' ? styles.square_o : ''} 
                ${isHighlight ? '' : styles.square_faded}
            `}

            onClick={onClick}>
            {value}
        </div>
    );
}

export default Square;