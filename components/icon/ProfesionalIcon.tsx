import React from "react";

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
}

const ProfessionalIcon: React.FC<IconProps> = ({
    size = 24,
    color = "#4A4A4A",
    className,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M12 2a5 5 0 00-5 5v2a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm-2 7V7a2 2 0 114 0v2a2 2 0 11-4 0zm10 10H4a4 4 0 014-4h8a4 4 0 014 4z" />
        </svg>
    );
};

export default ProfessionalIcon;