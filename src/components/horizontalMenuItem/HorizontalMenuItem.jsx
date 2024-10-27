import React from 'react';
import './horizontalMenuItem.css';
import { FaPepperHot, FaLeaf, FaDrumstickBite, FaEgg } from 'react-icons/fa'; // Importing icons for food types
import { GiHeartburn } from 'react-icons/gi'; // Bestseller icon import

const HorizontalMenuItem = ({ title, description, price, imageUrl, iconType, isBestseller }) => {
    // Determine which icon to show based on the iconType prop
    const renderIcon = () => {
        switch (iconType) {
            case 'spicy':
                return <FaPepperHot className="menu-item-icon spicy" size={40}  />;
            case 'veg':
                return <FaLeaf className="menu-item-icon veg" size={40} />;
            case 'nonveg':
                return <FaDrumstickBite className="menu-item-icon nonveg" size={40} />;
            case 'egg':
                return <FaEgg className="menu-item-icon egg" size={40} />;
            default:
                return null; // No icon if none is specified
        }
    };

    return (
        <div className="horizontal-menu-item">
            <div className="menu-item-content">
                <h3 className="menu-item-title">
                    {renderIcon()} {/* Display the icon based on the type */}
                    {title}
                    {isBestseller && <GiHeartburn size={40} color="#b52cbf" className="bestseller-icon" />} {/* Bestseller icon */}
                </h3>
                <p className="menu-item-description">{description}</p>
                <p className="menu-item-price">{price}</p>
            </div>
            <div className="menu-item-image">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    );
};

export default HorizontalMenuItem;
